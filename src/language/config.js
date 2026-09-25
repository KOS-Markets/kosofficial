"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LANGUAGE_CONFIGS = exports.DEFAULT_LANG = void 0;
exports.getLanguageConfig = getLanguageConfig;
exports.normalizeLang = normalizeLang;
exports.DEFAULT_LANG = 'en';
exports.LANGUAGE_CONFIGS = [
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
];
function getLanguageConfig(lang) {
    var _a;
    var code = lang === null || lang === void 0 ? void 0 : lang.toLowerCase();
    return (_a = exports.LANGUAGE_CONFIGS.find(function (c) { return c.code === code; })) !== null && _a !== void 0 ? _a : exports.LANGUAGE_CONFIGS[0];
}
function normalizeLang(lang) {
    return getLanguageConfig(lang).code;
}
