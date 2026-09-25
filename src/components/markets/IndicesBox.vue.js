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
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var vue_i18n_1 = require("vue-i18n");
var t = (0, vue_i18n_1.useI18n)().t;
var dataList = (0, vue_1.ref)({
    title: t('indicesBoxSentence'),
    intro: t('indicesBoxSentence1'),
    list: [
        {
            title: '1:2000',
            intro: t('indicesBoxSentence2'),
            text: t('indicesBoxSentence3'),
        },
        {
            title: t('indicesBoxSentence4'),
            intro: t('indicesBoxSentence5'),
            text: t('indicesBoxSentence6'),
        },
        {
            title: t('indicesBoxSentence7'),
            intro: t('indicesBoxSentence8'),
            text: t('indicesBoxSentence9'),
        },
        {
            title: t('indicesBoxSentence10'),
            intro: t('indicesBoxSentence11'),
            text: t('indicesBoxSentence12'),
        },
        {
            title: t('indicesBoxSentence13'),
            intro: t('indicesBoxSentence14'),
            text: t('indicesBoxSentence15'),
        },
        {
            title: '24/7',
            intro: t('indicesBoxSentence16'),
            text: t('indicesBoxSentence17'),
        },
    ]
});
var __VLS_ctx = __assign(__assign({}, {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['intro']} */ ;
/** @type {__VLS_StyleScopedClasses['item']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "indices-box" }));
/** @type {__VLS_StyleScopedClasses['indices-box']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img, __VLS_intrinsics.img)(__assign({ class: "indices-box-background section-media-bg section-media-img" }, { src: "@/assets/img/markets/indices/why-1.jpg", alt: "" }));
/** @type {__VLS_StyleScopedClasses['indices-box-background']} */ ;
/** @type {__VLS_StyleScopedClasses['section-media-bg']} */ ;
/** @type {__VLS_StyleScopedClasses['section-media-img']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "container" }));
/** @type {__VLS_StyleScopedClasses['container']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "title" }));
/** @type {__VLS_StyleScopedClasses['title']} */ ;
(__VLS_ctx.dataList.title);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "intro" }));
/** @type {__VLS_StyleScopedClasses['intro']} */ ;
(__VLS_ctx.dataList.intro);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "list" }));
/** @type {__VLS_StyleScopedClasses['list']} */ ;
for (var _i = 0, _a = __VLS_vFor((__VLS_ctx.dataList.list)); _i < _a.length; _i++) {
    var _b = _a[_i], item = _b[0], index = _b[1];
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ key: (index) }, { class: "item" }));
    /** @type {__VLS_StyleScopedClasses['item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "item-title" }));
    /** @type {__VLS_StyleScopedClasses['item-title']} */ ;
    (item.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "intro" }));
    /** @type {__VLS_StyleScopedClasses['intro']} */ ;
    (item.intro);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "text" }));
    /** @type {__VLS_StyleScopedClasses['text']} */ ;
    (item.text);
    // @ts-ignore
    [dataList, dataList, dataList,];
}
// @ts-ignore
[];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({});
exports.default = {};
