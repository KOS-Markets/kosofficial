const NOTICE_LANGUAGES = new Set([
  'en',
  'zh-Hans',
  'zh-Hant',
  'ja',
  'ms',
  'ko',
  'id',
  'th',
  'vi',
  'ar',
])

interface NoticeRecord {
  id: number
  title: string
  content: string
  weight: number
  create_time: number
  update_time: number
  language_name: string
}

interface D1Result<T> {
  results?: T[]
}

interface D1Statement {
  bind(...values: unknown[]): D1Statement
  first<T>(): Promise<T | null>
  all<T>(): Promise<D1Result<T>>
}

interface Env {
  NOTICES_DB: {
    prepare(query: string): D1Statement
  }
}

function corsHeaders(request: Request): Record<string, string> {
  const origin = request.headers.get('Origin') || ''
  const allowed =
    origin === 'https://kosmarkets.com' ||
    origin === 'https://www.kosmarkets.com' ||
    origin.endsWith('.kos2.pages.dev') ||
    origin.startsWith('http://localhost:') ||
    origin.startsWith('http://127.0.0.1:')

  return {
    'Access-Control-Allow-Origin': allowed ? origin : 'https://www.kosmarkets.com',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Accept, Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  }
}

function json(request: Request, data: unknown, status = 200): Response {
  return Response.json(data, {
    status,
    headers: {
      ...corsHeaders(request),
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
    },
  })
}

function apiError(request: Request, msg: string, status = 400): Response {
  return json(request, { code: status, msg, data: null }, status)
}

async function getNoticeList(request: Request, env: Env): Promise<Response> {
  const url = new URL(request.url)
  const page = Math.max(1, Number.parseInt(url.searchParams.get('page') || '1', 10) || 1)
  const size = Math.min(50, Math.max(1, Number.parseInt(url.searchParams.get('size') || '10', 10) || 10))
  const language = url.searchParams.get('language') || ''
  const order = url.searchParams.get('order_by_weight') || ''

  if (language && !NOTICE_LANGUAGES.has(language)) {
    return apiError(request, 'language not found')
  }
  if (order && order !== 'asc' && order !== 'desc') {
    return apiError(request, 'order by rule not found')
  }

  const where = language ? 'WHERE is_del = 0 AND language = ?' : 'WHERE is_del = 0'
  const params: unknown[] = language ? [language] : []
  const count = await env.NOTICES_DB
    .prepare(`SELECT COUNT(*) AS total FROM notices ${where}`)
    .bind(...params)
    .first<{ total: number }>()
  const orderBy = order
    ? `ORDER BY weight ${order.toUpperCase()}, create_time DESC`
    : 'ORDER BY create_time DESC'
  const rows = await env.NOTICES_DB
    .prepare(`
      SELECT id, title, content, weight, create_time, update_time,
             language AS language_name
      FROM notices
      ${where}
      ${orderBy}
      LIMIT ? OFFSET ?
    `)
    .bind(...params, size, (page - 1) * size)
    .all<NoticeRecord>()

  return json(request, {
    code: 200,
    msg: 'get notice list OK',
    data: { list: rows.results || [], total: count?.total || 0 },
  })
}

async function getNoticeDetail(request: Request, env: Env): Promise<Response> {
  const id = Number.parseInt(new URL(request.url).searchParams.get('id') || '', 10)
  if (!Number.isSafeInteger(id) || id < 1) {
    return apiError(request, 'invalid notice id')
  }

  const notice = await env.NOTICES_DB
    .prepare(`
      SELECT id, title, content, weight, create_time, update_time,
             language AS language_name
      FROM notices
      WHERE id = ? AND is_del = 0
      LIMIT 1
    `)
    .bind(id)
    .first<NoticeRecord>()

  if (!notice) {
    return apiError(request, 'this notice not found', 404)
  }
  return json(request, { code: 200, msg: 'get notice detail OK', data: notice })
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(request) })
    }
    if (request.method !== 'GET') {
      return apiError(request, 'method not allowed', 405)
    }

    const pathname = new URL(request.url).pathname
    try {
      if (pathname === '/public/getNoticeList') {
        return await getNoticeList(request, env)
      }
      if (pathname === '/public/getNoticeDetail') {
        return await getNoticeDetail(request, env)
      }
      if (pathname === '/health') {
        return json(request, { code: 200, msg: 'OK', data: { service: 'kos-notice-api' } })
      }
      return apiError(request, 'not found', 404)
    } catch (error) {
      console.error('Announcement API error', error)
      return apiError(request, 'server error', 500)
    }
  },
}
