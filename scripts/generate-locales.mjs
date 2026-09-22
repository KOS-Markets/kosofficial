import fs from 'node:fs'
import path from 'node:path'
import ts from 'typescript'

const root = process.cwd()
const sourcePath = path.join(root, 'src/language/lang/en.ts')
const source = fs.readFileSync(sourcePath, 'utf8')
const sourceFile = ts.createSourceFile('en.ts', source, ts.ScriptTarget.Latest, true)

function readString(node) {
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) return node.text
  throw new Error(`Unsupported locale value: ${node.getText(sourceFile)}`)
}

const entries = []
sourceFile.forEachChild((node) => {
  if (!ts.isExportAssignment(node) || !ts.isObjectLiteralExpression(node.expression)) return
  for (const property of node.expression.properties) {
    if (!ts.isPropertyAssignment(property)) continue
    const key = property.name.text ?? property.name.getText(sourceFile).replace(/^['"]|['"]$/g, '')
    entries.push([key, readString(property.initializer)])
  }
})

const languages = {
  ja: 'ja',
  ms: 'ms',
  ko: 'ko',
  id: 'id',
  th: 'th',
  vi: 'vi',
}
const separator = '\u241e'
const maxQueryLength = 2800

function batches(items) {
  const result = []
  let current = []
  let length = 0
  for (const item of items) {
    const nextLength = length + item[1].length + separator.length
    if (current.length && nextLength > maxQueryLength) {
      result.push(current)
      current = []
      length = 0
    }
    current.push(item)
    length += item[1].length + separator.length
  }
  if (current.length) result.push(current)
  return result
}

async function translateBatch(values, target, attempt = 0) {
  const active = values.filter(([, value]) => value.trim())
  if (active.length !== values.length) {
    const translatedActive = active.length ? await translateBatch(active, target, attempt) : []
    const translatedByKey = new Map(active.map(([entry], index) => [entry, translatedActive[index]]))
    return values.map(([key, value]) => translatedByKey.get(key) ?? value)
  }
  const text = values.map(([, value]) => value).join(separator)
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${target}&dt=t&dj=1&q=${encodeURIComponent(text)}`
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    const payload = await response.json()
    const translated = (payload.sentences ?? []).map((sentence) => sentence.trans ?? '').join('')
    const parts = translated.split(separator)
    if (parts.length !== values.length) {
      if (values.length === 1) return [translated.trim() || values[0][1]]
      const individual = []
      for (const value of values) individual.push((await translateBatch([value], target))[0])
      return individual
    }
    return parts.map((value) => value.trim())
  } catch (error) {
    if (attempt >= 3) throw error
    await new Promise((resolve) => setTimeout(resolve, 700 * (attempt + 1)))
    return translateBatch(values, target, attempt + 1)
  }
}

async function translateLocale(code, target) {
  const translated = new Map()
  const groups = batches(entries)
  for (let index = 0; index < groups.length; index += 4) {
    const groupResults = await Promise.all(groups.slice(index, index + 4).map((group) => translateBatch(group, target)))
    groups.slice(index, index + 4).forEach((group, offset) => {
      group.forEach(([key], valueIndex) => translated.set(key, groupResults[offset][valueIndex]))
    })
    console.log(`${code}: ${Math.min(index + 4, groups.length)}/${groups.length} batches`)
  }

  const output = [
    '// Generated from en.ts; review terminology changes in source content before release.',
    'export default {',
    ...entries.map(([key, value]) => `  ${JSON.stringify(key)}: ${JSON.stringify(translated.get(key) ?? value)},`),
    '} as const',
    '',
  ].join('\n')
  fs.writeFileSync(path.join(root, `src/language/lang/${code}.ts`), output, 'utf8')
}

const requested = process.argv[2]
const selected = requested ? Object.entries(languages).filter(([code]) => code === requested) : Object.entries(languages)
if (!selected.length) throw new Error(`Unknown locale: ${requested}`)
for (const [code, target] of selected) await translateLocale(code, target)
console.log(`Generated ${selected.length} locale(s) with ${entries.length} keys each.`)
