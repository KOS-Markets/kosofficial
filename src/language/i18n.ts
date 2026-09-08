import { createI18n } from 'vue-i18n'

import { normalizeLang, DEFAULT_LANG, type AppLang } from './config'

const langLoaders: Record<AppLang, () => Promise<{ default: Record<string, any> }>> = {
  en: () => import('./lang/en'),
  cn: () => import('./lang/cn'),
  tw: () => import('./lang/tw'),
  ja: () => import('./lang/ja'),
  ms: () => import('./lang/ms'),
  ko: () => import('./lang/ko'),
  id: () => import('./lang/id'),
  th: () => import('./lang/th'),
  vi: () => import('./lang/vi'),
  ar: () => import('./lang/ar'),
}

const i18n = createI18n({
  locale: normalizeLang(localStorage.getItem('lang')),
  fallbackLocale: DEFAULT_LANG,
  messages: {},
  silentTranslationWarn: true,
  legacy: false,
})

export async function loadLanguageMessages(code: string) {
  const lang = normalizeLang(code)
  if (!i18n.global.availableLocales.includes(lang)) {
    const { default: messages } = await langLoaders[lang]()
    i18n.global.setLocaleMessage(lang, messages)
  }
  return lang
}

export default i18n
