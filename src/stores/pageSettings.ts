import { ref } from 'vue'
import { defineStore } from 'pinia'

import { getLanguageConfig, normalizeLang, type AppLang } from '@/language/config'
import i18n, { loadLanguageMessages } from '@/language/i18n'
import { setLiveChatLang } from '@/utils/livechat'

export const usePageSettingsStore = defineStore('pageSettings', () => {
  const locationModal = ref(false)
  const lang = ref<AppLang>(normalizeLang(localStorage.getItem('lang')))

  async function setLang(nextLang?: string | null) {
    const next = normalizeLang(nextLang)

    localStorage.setItem('lang', next)
    await loadLanguageMessages(next)

    lang.value = next
    i18n.global.locale.value = next

    const { isRtl } = getLanguageConfig(next)
    const dir = isRtl ? 'rtl' : 'ltr'
    document.documentElement.lang = next
    document.documentElement.dir = dir
    document.body.dir = dir

    setLiveChatLang(next)

    return next
  }

  function initLang() {
    return setLang(localStorage.getItem('lang'))
  }

  return { lang, setLang, initLang, locationModal }
})
