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
var CustomButton_vue_1 = require("@/components/custom/CustomButton.vue");
var platform_1_jpg_1 = require("@/assets/img/home/homePlatformBox/platform-1.jpg");
var platform_2_jpg_1 = require("@/assets/img/home/homePlatformBox/platform-2.jpg");
var platform_3_jpg_1 = require("@/assets/img/home/homePlatformBox/platform-3.jpg");
var vue_i18n_1 = require("vue-i18n");
var t = (0, vue_i18n_1.useI18n)().t;
var config_1 = require("@/config");
var dataList = (0, vue_1.ref)({
    title: t('HomePlatformBoxSentence'),
    list: [
        // {
        //     icon: icon1,
        //     title: t('HomePlatformBoxSentence1'),
        //     intro: t('HomePlatformBoxSentence2'),
        //     text: t('HomePlatformBoxSentence3'),
        //     click: () => {
        //     },
        // },
        // {
        //     icon: icon2,
        //     title: t('HomePlatformBoxSentence4'),
        //     intro: t('HomePlatformBoxSentence5'),
        //     text: t('HomePlatformBoxSentence6'),
        //     click: () => {
        //         const userAgentInfo = navigator.userAgent
        //         if (userAgentInfo.includes('iPhone')) {
        //         } else {
        //             window.open(`${window.location.origin}/metatrader4.apk`, '_blank')
        //         }
        //     },
        // },
        // {
        //     icon: icon3,
        //     title: t('HomePlatformBoxSentence7'),
        //     intro: t('HomePlatformBoxSentence8'),
        //     text: t('HomePlatformBoxSentence9'),
        //     click: () => {},
        // },
        {
            icon: platform_1_jpg_1.default,
            title: t('HomePlatformBoxSentence10'),
            intro: t('HomePlatformBoxSentence11'),
            text: t('HomePlatformBoxSentence12'),
            click: function () {
                window.open(config_1.link_config.mt5_window_download_link);
            },
        },
        {
            icon: platform_2_jpg_1.default,
            title: t('HomePlatformBoxSentence13'),
            intro: t('HomePlatformBoxSentence14'),
            text: t('HomePlatformBoxSentence15'),
            click: function () {
                var userAgentInfo = navigator.userAgent;
                if (userAgentInfo.includes('iPhone')) {
                    window.location.href = config_1.link_config.mt5_ios_download_link;
                }
                else {
                    window.open(config_1.link_config.mt5_android_download_link, '_blank');
                }
            },
        },
        {
            icon: platform_3_jpg_1.default,
            title: t('HomePlatformBoxSentence16'),
            intro: t('HomePlatformBoxSentence17'),
            text: t('HomePlatformBoxSentence18'),
            click: function () { },
        },
    ]
});
var __VLS_ctx = __assign(__assign({}, {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['item']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "home-box" }));
/** @type {__VLS_StyleScopedClasses['home-box']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img, __VLS_intrinsics.img)(__assign({ class: "home-box-background section-media-bg section-media-img" }, { src: "@/assets/img/home/download-1.jpg", alt: "" }));
/** @type {__VLS_StyleScopedClasses['home-box-background']} */ ;
/** @type {__VLS_StyleScopedClasses['section-media-bg']} */ ;
/** @type {__VLS_StyleScopedClasses['section-media-img']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "container" }));
/** @type {__VLS_StyleScopedClasses['container']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "title" }));
/** @type {__VLS_StyleScopedClasses['title']} */ ;
(__VLS_ctx.dataList.title);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "list" }));
/** @type {__VLS_StyleScopedClasses['list']} */ ;
for (var _i = 0, _a = __VLS_vFor((__VLS_ctx.dataList.list)); _i < _a.length; _i++) {
    var _b = _a[_i], item = _b[0], index = _b[1];
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ key: (index) }, { class: "item" }));
    /** @type {__VLS_StyleScopedClasses['item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "item-header" }));
    /** @type {__VLS_StyleScopedClasses['item-header']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "item-title" }));
    /** @type {__VLS_StyleScopedClasses['item-title']} */ ;
    (item.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)(__assign({ style: {} }, { src: (item.icon), alt: "" }));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "intro" }));
    /** @type {__VLS_StyleScopedClasses['intro']} */ ;
    (item.intro);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "text" }));
    /** @type {__VLS_StyleScopedClasses['text']} */ ;
    (item.text);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "btn" }));
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    var __VLS_0 = CustomButton_vue_1.default;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0(__assign({ 'onClick': {} }, { name: (__VLS_ctx.t('start')), type: (1) })));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { name: (__VLS_ctx.t('start')), type: (1) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
    var __VLS_5 = void 0;
    var __VLS_6 = {
        /** @type {typeof __VLS_5.click} */
        onClick: (item.click),
    };
    var __VLS_3;
    var __VLS_4;
    // @ts-ignore
    [dataList, dataList, t,];
}
// @ts-ignore
[];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({});
exports.default = {};
