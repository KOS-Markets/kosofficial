import fs from 'node:fs'
import path from 'node:path'
import ts from 'typescript'

const root = process.cwd()
const sourcePath = path.join(root, 'src/stores/staticData.ts')
const source = fs.readFileSync(sourcePath, 'utf8')
const sourceFile = ts.createSourceFile('staticData.ts', source, ts.ScriptTarget.Latest, true)
const values = new Map()

function propertyName(node) {
  return node.text ?? node.getText(sourceFile).replace(/^['"]|['"]$/g, '')
}

function evaluate(node) {
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) return node.text
  if (ts.isNumericLiteral(node)) return Number(node.text)
  if (node.kind === ts.SyntaxKind.TrueKeyword) return true
  if (node.kind === ts.SyntaxKind.FalseKeyword) return false
  if (ts.isIdentifier(node)) {
    if (!values.has(node.text)) throw new Error(`Unknown identifier: ${node.text}`)
    return values.get(node.text)
  }
  if (ts.isArrayLiteralExpression(node)) return node.elements.map(evaluate)
  if (ts.isObjectLiteralExpression(node)) {
    return Object.fromEntries(node.properties.map((property) => {
      if (!ts.isPropertyAssignment(property)) throw new Error(`Unsupported object property: ${property.getText(sourceFile)}`)
      return [propertyName(property.name), evaluate(property.initializer)]
    }))
  }
  if (ts.isCallExpression(node) && node.arguments.length) return evaluate(node.arguments[0])
  throw new Error(`Unsupported node: ${node.getText(sourceFile).slice(0, 100)}`)
}

function visit(node) {
  if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && node.name.text.startsWith('en') && node.initializer) {
    try {
      values.set(node.name.text, evaluate(node.initializer))
    } catch (error) {
      if (node.name.text.includes('Education')) throw error
    }
  }
  ts.forEachChild(node, visit)
}
visit(sourceFile)

const academy = values.get('enEducationAcademyList')
if (!academy) throw new Error('Could not extract enEducationAcademyList')

const strings = [...new Set((function collect(node, key = '') {
  if (Array.isArray(node)) return node.flatMap((value) => collect(value, key))
  if (node && typeof node === 'object') return Object.entries(node).flatMap(([childKey, value]) => collect(value, childKey))
  return typeof node === 'string' && (key === 'title' || key === 'intro') && node.trim() ? [node] : []
})(academy))]

const languages = { ja: 'ja', ms: 'ms', ko: 'ko', id: 'id', th: 'th' }
const separator = '\u241e'
const maxQueryLength = 2800

function batches(items) {
  const result = []
  let current = []
  let length = 0
  for (const value of items) {
    if (current.length && length + value.length + 1 > maxQueryLength) {
      result.push(current)
      current = []
      length = 0
    }
    current.push(value)
    length += value.length + 1
  }
  if (current.length) result.push(current)
  return result
}

async function translateBatch(batch, target, attempt = 0) {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${target}&dt=t&dj=1&q=${encodeURIComponent(batch.join(separator))}`
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    const payload = await response.json()
    const translated = (payload.sentences ?? []).map((sentence) => sentence.trans ?? '').join('')
    const parts = translated.split(separator)
    if (parts.length !== batch.length) {
      if (batch.length === 1) return [translated.trim() || batch[0]]
      const individual = []
      for (const value of batch) individual.push((await translateBatch([value], target))[0])
      return individual
    }
    return parts.map((value) => value.trim())
  } catch (error) {
    if (attempt >= 3) throw error
    await new Promise((resolve) => setTimeout(resolve, 700 * (attempt + 1)))
    return translateBatch(batch, target, attempt + 1)
  }
}

function localize(node, translated, parentTitle = '') {
  if (Array.isArray(node)) return node.map((value) => localize(value, translated))
  if (!node || typeof node !== 'object') return node
  const localizedTitle = typeof node.title === 'string' ? (translated.get(node.title) ?? node.title) : parentTitle
  return Object.fromEntries(Object.entries(node).map(([key, value]) => {
    if ((key === 'title' || key === 'intro') && typeof value === 'string') return [key, translated.get(value) ?? value]
    if (key === 'content' && typeof value === 'string') {
      const title = localizedTitle.replaceAll('&', '&amp;').replaceAll('"', '&quot;')
      return [key, value.replace(/title="[^"]*"/, `title="${title}"`)]
    }
    return [key, localize(value, translated, localizedTitle)]
  }))
}

const result = {}
for (const [code, target] of Object.entries(languages)) {
  const translated = new Map()
  const groups = batches(strings)
  for (let index = 0; index < groups.length; index += 4) {
    const selected = groups.slice(index, index + 4)
    const output = await Promise.all(selected.map((group) => translateBatch(group, target)))
    selected.forEach((group, groupIndex) => group.forEach((value, valueIndex) => translated.set(value, output[groupIndex][valueIndex])))
    console.log(`${code}: ${Math.min(index + 4, groups.length)}/${groups.length} batches`)
  }
  result[code] = localize(academy, translated)
}

const output = [
  '// Generated from the English education academy data in staticData.ts.',
  `export const educationLocales = ${JSON.stringify(result, null, 2)} as const`,
  '',
].join('\n')
fs.writeFileSync(path.join(root, 'src/stores/educationLocales.ts'), output, 'utf8')
console.log(`Generated ${Object.keys(result).length} education locales with ${strings.length} translatable strings each.`)
