import axios, { type AxiosRequestConfig, type InternalAxiosRequestConfig } from 'axios'
import type { ApiResponse } from '@/types/index'

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 50000,
})

service.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  if (!(config.data instanceof FormData)) {
    config.headers.set('Content-Type', 'application/json;charset=utf-8')
  }
  config.headers.set('lang', localStorage.getItem('lang') ?? 'en')
  return config
})

async function post<T = unknown>(
  url: string,
  data?: Record<string, unknown> | FormData,
  config?: AxiosRequestConfig,
): Promise<ApiResponse<T>> {
  try {
    const response = await service.post<ApiResponse<T>>(url, data, config)
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status
      if (status === 404 || status === 405) {
        console.warn(`[api] ${status} ${url} — endpoint missing`)
      }
      const body = error.response?.data as ApiResponse<T> | undefined
      return body ?? { code: status ?? 0, msg: error.message || 'Network Error' }
    }
    return { code: 0, msg: (error as Error).message || 'Unknown Error' }
  }
}

export default { post }
