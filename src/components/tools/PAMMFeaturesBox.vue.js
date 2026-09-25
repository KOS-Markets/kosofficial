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
var pamm_1_jpg_1 = require("@/assets/img/tools/pamm/pamm-1.jpg");
var pamm_2_jpg_1 = require("@/assets/img/tools/pamm/pamm-2.jpg");
var pamm_3_jpg_1 = require("@/assets/img/tools/pamm/pamm-3.jpg");
var vue_i18n_1 = require("vue-i18n");
var t = (0, vue_i18n_1.useI18n)().t;
var dataList = (0, vue_1.ref)({
    title: t('pammBox1Sentence'),
    intro: t('pammBox1Sentence1'),
    list: [
        {
            icon: pamm_1_jpg_1.default,
            text: t('pammBox1Sentence2'),
        },
        {
            icon: pamm_2_jpg_1.default,
            text: t('pammBox1Sentence3'),
        },
        {
            icon: pamm_3_jpg_1.default,
            text: t('pammBox1Sentence4'),
        },
    ]
});
var __VLS_ctx = __assign(__assign({}, {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "pamm-box" }));
/** @type {__VLS_StyleScopedClasses['pamm-box']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img, __VLS_intrinsics.img)(__assign({ class: "pamm-box-background section-media-bg section-media-img" }, { src: "@/assets/img/tools/pamm/pamm.jpg", alt: "" }));
/** @type {__VLS_StyleScopedClasses['pamm-box-background']} */ ;
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
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "icon" }));
    /** @type {__VLS_StyleScopedClasses['icon']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        src: (item.icon),
        alt: "",
    });
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
