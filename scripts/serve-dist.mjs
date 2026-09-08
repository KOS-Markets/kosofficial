import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist')
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.pdf': 'application/pdf' }

http.createServer((request, response) => {
  const requested = decodeURIComponent(new URL(request.url, 'http://localhost').pathname)
  const candidate = path.resolve(root, `.${requested}`)
  const filePath = candidate.startsWith(root) && fs.existsSync(candidate) && fs.statSync(candidate).isFile() ? candidate : path.join(root, 'index.html')
  response.writeHead(200, { 'Content-Type': mime[path.extname(filePath)] ?? 'application/octet-stream' })
  fs.createReadStream(filePath).pipe(response)
}).listen(4173, '127.0.0.1', () => console.log('Serving dist at http://127.0.0.1:4173/'))
