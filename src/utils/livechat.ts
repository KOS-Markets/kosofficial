declare global {
  interface Window {
    LiveChatWidget?: {
      _h?: unknown
      call: (method: string, payload?: unknown) => void
      on: (event: string, cb: (...args: unknown[]) => void) => void
      get: (name: string) => unknown
    }
    __lc?: Record<string, unknown> & {
      params?: Array<{ name: string; value: string }>
    }
  }
}

export function setLiveChatLang(lang: string) {
  const widget = window.LiveChatWidget
  if (widget?._h) widget.call('update_session_variables', { lang })
}
