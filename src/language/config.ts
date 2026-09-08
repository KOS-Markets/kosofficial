export const DEFAULT_LANG = 'en' as const

export const LANGUAGE_CONFIGS = [
  {
    code: 'en',
    label: 'English',
    shortLabel: 'EN',
    isRtl: false,
  },
  {
    code: 'cn',
    label: '简体中文',
    shortLabel: 'ZHCN',
    isRtl: false,
  },
  {
    code: 'tw',
    label: '繁體中文',
    shortLabel: 'ZHTW',
    isRtl: false,
  },
  {
    code: 'ja',
    label: '日本語',
    shortLabel: 'JA',
    isRtl: false,
  },
  {
    code: 'ms',
    label: 'Bahasa Melayu',
    shortLabel: 'MS',
    isRtl: false,
  },
  {
    code: 'ko',
    label: '한국어',
    shortLabel: 'KO',
    isRtl: false,
  },
  {
    code: 'id',
    label: 'Bahasa Indonesia',
    shortLabel: 'ID',
    isRtl: false,
  },
  {
    code: 'th',
    label: 'ไทย',
    shortLabel: 'TH',
    isRtl: false,
  },
  {
    code: 'vi',
    label: 'Tiếng Việt',
    shortLabel: 'VI',
    isRtl: false,
  },
  {
    code: 'ar',
    label: 'عربي',
    shortLabel: 'AR',
    isRtl: true,
  },
] as const

export type AppLang = (typeof LANGUAGE_CONFIGS)[number]['code']
export type LanguageConfig = (typeof LANGUAGE_CONFIGS)[number]

export function getLanguageConfig(lang?: string | null): LanguageConfig {
  const code = lang?.toLowerCase()
  return LANGUAGE_CONFIGS.find((c) => c.code === code) ?? LANGUAGE_CONFIGS[0]
}

export function normalizeLang(lang?: string | null): AppLang {
  return getLanguageConfig(lang).code
}
