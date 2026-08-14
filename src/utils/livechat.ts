import type { AppLang } from '@/language/config'

// LiveChat 后台 Settings → Groups 里每个 group 页面 URL 尾号即为 id
// 未在后台建 group 的语言用 0（走 General）
// 注意：index.html 里同一份表要一起改
export const LANG_TO_GROUP: Record<AppLang, number> = {
  en: 1,
  cn: 0,
  ar: 5,
}

declare global {
  interface Window {
    LiveChatWidget?: {
      call: (method: string, payload?: unknown) => void
      on: (event: string, cb: (...args: unknown[]) => void) => void
      get: (name: string) => unknown
    }
    __lc?: Record<string, unknown> & {
      group?: number
      params?: Array<{ name: string; value: string }>
    }
  }
}

export function getLiveChatGroup(lang: AppLang): number {
  return LANG_TO_GROUP[lang] ?? 0
}

export function setLiveChatLang(lang: AppLang) {
  const group = getLiveChatGroup(lang)

  const widget = window.LiveChatWidget
  if (!widget) {
    // widget 还没加载完时，改 __lc 里的值，等 init 时会读到
    if (window.__lc) {
      window.__lc.group = group
      window.__lc.params = [{ name: 'lang', value: lang }]
    }
    return
  }

  widget.call('update_session_variables', { lang })
  // update_group 只在无进行中会话时生效，这是 LiveChat 的既有限制
  widget.call('update_group', group)
}
