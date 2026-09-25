"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var CustomCarousel_vue_1 = require("@/components/custom/CustomCarousel.vue");
var HomePlatformBox_vue_1 = require("@/components/home/HomePlatformBox.vue");
var MTPlatformBox_vue_1 = require("@/components/trading/MTPlatformBox.vue");
// import desktop from '@/assets/img/trading/platform/Desktop meta.svg?raw';
// import android from '@/assets/img/trading/platform/android meta.svg?raw';
// import ios from '@/assets/img/trading/platform/iOS meta.svg?raw';
// import web from '@/assets/img/trading/platform/web meta.svg?raw';
var bg_jpg_1 = require("@/assets/img/trading/platform/bg.jpg");
var platform_1_jpg_1 = require("@/assets/img/home/homePlatformBox/platform-1.jpg");
var platform_2_jpg_1 = require("@/assets/img/home/homePlatformBox/platform-2.jpg");
var platform_3_jpg_1 = require("@/assets/img/home/homePlatformBox/platform-3.jpg");
var vue_i18n_1 = require("vue-i18n");
var t = (0, vue_i18n_1.useI18n)().t;
var config_1 = require("@/config");
// const mt4 = ref<CustomMTBoxType>(
//     {
//         title: t('platformsMT4Sentence'),
//         intro: t('platformsMT4Sentence1'),
//         list: [
//             t('platformsMT4Sentence2'),
//             t('platformsMT4Sentence3'),
//             t('platformsMT4Sentence4'),
//             t('platformsMT4Sentence5'),
//             t('platformsMT4Sentence6'),
//             t('platformsMT4Sentence7'),
//         ],
//         platform: [
//             {
//                 icon: icon1,
//                 title: t('platformsMT4Sentence8'),
//                 btn: [
//                     {
//                         btnText: t('platformsMT4Sentence9'),
//                         btnClick: () => {
//                         },
//                     },
//                     {
//                         btnText: t('platformsMT4Sentence10'),
//                         btnClick: () => { },
//                     },
//                 ]
//             },
//             {
//                 icon: icon2,
//                 title: t('platformsMT4Sentence11'),
//                 btn: [
//                     {
//                         btnText: t('platformsMT4Sentence12'),
//                         btnClick: () => {
//                             window.open(`${window.location.origin}/metatrader4.apk`, '_blank')
//                         },
//                     },
//                     {
//                         btnText: t('platformsMT4Sentence13'),
//                         btnClick: () => {
//                         },
//                     },
//                 ]
//             },
//             {
//                 icon: icon3,
//                 title: t('platformsMT4Sentence14'),
//                 btn: [
//                     {
//                         btnText: t('platformsMT4Sentence15'),
//                         btnClick: () => { },
//                     }
//                 ]
//             }
//         ]
//     }
// )
var mt5 = (0, vue_1.ref)({
    title: t('platformsMT5Sentence'),
    intro: t('platformsMT5Sentence1'),
    list: [
        t('platformsMT5Sentence2'),
        t('platformsMT5Sentence3'),
        t('platformsMT5Sentence4'),
        t('platformsMT5Sentence5'),
        t('platformsMT5Sentence6'),
        t('platformsMT5Sentence7'),
    ],
    platform: [
        {
            icon: platform_1_jpg_1.default,
            title: t('platformsMT4Sentence8'),
            btn: [
                {
                    btnText: t('platformsMT5Sentence8'),
                    btnClick: function () {
                        window.open(config_1.link_config.mt5_window_download_link);
                    },
                },
                {
                    btnText: t('platformsMT5Sentence9'),
                    btnClick: function () { },
                },
            ]
        },
        {
            icon: platform_2_jpg_1.default,
            title: t('platformsMT4Sentence11'),
            btn: [
                {
                    btnText: t('platformsMT4Sentence12'),
                    btnClick: function () {
                        window.open(config_1.link_config.mt5_android_download_link, '_blank');
                    },
                },
                {
                    btnText: t('platformsMT4Sentence13'),
                    btnClick: function () {
                        window.location.href = config_1.link_config.mt5_ios_download_link;
                    },
                },
            ]
        },
        {
            icon: platform_3_jpg_1.default,
            title: t('platformsMT4Sentence14'),
            btn: [
                {
                    btnText: t('platformsMT5Sentence10'),
                    btnClick: function () { },
                }
            ]
        }
    ]
});
var __VLS_ctx = __assign(__assign({}, {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "platforms-view" }));
/** @type {__VLS_StyleScopedClasses['platforms-view']} */ ;
var __VLS_0 = CustomCarousel_vue_1.default;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0(__assign({ style: {} }, { title: (__VLS_ctx.t('platformsViewTitle')), intro: (__VLS_ctx.t('platformsViewIntro')), background: (__VLS_ctx.background) })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ style: {} }, { title: (__VLS_ctx.t('platformsViewTitle')), intro: (__VLS_ctx.t('platformsViewIntro')), background: (__VLS_ctx.background) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_5 = HomePlatformBox_vue_1.default;
// @ts-ignore
var __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({}));
var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_6), false));
var __VLS_10 = MTPlatformBox_vue_1.default;
// @ts-ignore
var __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
    data: (__VLS_ctx.mt5),
}));
var __VLS_12 = __VLS_11.apply(void 0, __spreadArray([{
        data: (__VLS_ctx.mt5),
    }], __VLS_functionalComponentArgsRest(__VLS_11), false));
// @ts-ignore
[t, t, bg_jpg_1.default, mt5,];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({});
exports.default = {};
