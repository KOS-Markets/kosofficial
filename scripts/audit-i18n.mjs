import fs from 'node:fs'
import path from 'node:path'
import ts from 'typescript'

const root = process.cwd()
const src = path.join(root, 'src')
const targetLocales = ['ja', 'ms', 'ko', 'id', 'th', 'vi', 'tw']
const english = parseLocale('en')

function parseLocale(code) {
  const filePath = path.join(src, `language/lang/${code}.ts`)
  const source = fs.readFileSync(filePath, 'utf8')
  const sourceFile = ts.createSourceFile(`${code}.ts`, source, ts.ScriptTarget.Latest, true)
  const values = new Map()
  function visitObject(node) {
    if (ts.isAsExpression(node) || ts.isParenthesizedExpression(node)) return visitObject(node.expression)
    if (!ts.isObjectLiteralExpression(node)) return
    for (const property of node.properties) {
      if (!ts.isPropertyAssignment(property)) continue
      const key = property.name.text ?? property.name.getText(sourceFile).replace(/^['"]|['"]$/g, '')
      if (!ts.isStringLiteral(property.initializer) && !ts.isNoSubstitutionTemplateLiteral(property.initializer)) continue
      values.set(key, property.initializer.text)
    }
  }
  sourceFile.forEachChild((node) => {
    if (ts.isExportAssignment(node)) visitObject(node.expression)
  })
  return values
}

function resolveImport(specifier, importer) {
  if (!specifier.startsWith('@/') && !specifier.startsWith('.')) return null
  const candidate = specifier.startsWith('@/')
    ? path.join(src, specifier.slice(2))
    : path.resolve(path.dirname(importer), specifier)
  for (const filePath of [candidate, `${candidate}.vue`, `${candidate}.ts`, path.join(candidate, 'index.ts')]) {
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) return filePath
  }
  return null
}

const entryFiles = [path.join(src, 'main.ts'), path.join(src, 'App.vue'), path.join(src, 'router/index.ts')]
const activeFiles = new Set()
const queue = [...entryFiles]
while (queue.length) {
  const filePath = queue.shift()
  if (!filePath || activeFiles.has(filePath)) continue
  activeFiles.add(filePath)
  const source = fs.readFileSync(filePath, 'utf8')
  const importSource = source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|\s)\/\/.*$/gm, '$1')
  const importPattern = /(?:from\s*|import\s*\()\s*['"]([^'"]+)['"]/g
  for (const match of importSource.matchAll(importPattern)) {
    const resolved = resolveImport(match[1], filePath)
    if (resolved && !activeFiles.has(resolved)) queue.push(resolved)
  }
}

const usedKeys = new Set()
const hardcoded = []
for (const filePath of activeFiles) {
  const source = fs.readFileSync(filePath, 'utf8')
  for (const match of source.matchAll(/\bt\(\s*['"]([^'"]+)['"]/g)) {
    if (english.has(match[1])) usedKeys.add(match[1])
  }
  if (!filePath.endsWith('.vue')) continue
  const template = source.match(/<template>([\s\S]*?)<\/template>/)?.[1]?.replace(/<!--[\s\S]*?-->/g, '') ?? ''
  for (const match of template.matchAll(/>([^<>]+)</g)) {
    const text = match[1].replace(/\s+/g, ' ').trim()
    if (!text || text.includes('{{') || !/[A-Za-z\u3400-\u9fff]/.test(text)) continue
    if (/^(KOSMARKETS|PDF)$/.test(text) || /^[0-9.,+%$€¥£\s]*k\+?$/.test(text)) continue
    hardcoded.push(`${path.relative(root, filePath)}: ${text}`)
  }
}

let failed = false
for (const code of targetLocales) {
  const locale = parseLocale(code)
  const missingEnglish = [...english.keys()].filter((key) => !locale.has(key))
  const missingUsed = [...usedKeys].filter((key) => !locale.has(key))
  console.log(`${code}: ${locale.size}/${english.size} keys; missing source=${missingEnglish.length}; missing used=${missingUsed.length}`)
  if (missingEnglish.length || missingUsed.length) {
    failed = true
    console.log(`  missing: ${[...new Set([...missingEnglish, ...missingUsed])].join(', ')}`)
  }
}

const router = fs.readFileSync(path.join(src, 'router/index.ts'), 'utf8')
const routes = [...router.matchAll(/path:\s*['"]([^'"]+)['"]/g)].map((match) => match[1])
console.log(`Routes checked (${routes.length}): ${routes.join(', ')}`)
console.log(`Active source files checked: ${activeFiles.size}; translation keys used: ${usedKeys.size}`)
console.log(`Hardcoded visible template text: ${hardcoded.length}`)
for (const item of hardcoded) console.log(`  ${item}`)
if (hardcoded.length) failed = true

if (failed) process.exitCode = 1
