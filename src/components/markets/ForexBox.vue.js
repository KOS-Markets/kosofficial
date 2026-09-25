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
var motion_v_1 = require("motion-v");
var motion_ts_1 = require("@/utils/motion.ts");
var why_1_jpg_1 = require("@/assets/img/markets/forex/why-1.jpg");
var why_2_jpg_1 = require("@/assets/img/markets/forex/why-2.jpg");
var why_3_jpg_1 = require("@/assets/img/markets/forex/why-3.jpg");
var why_4_jpg_1 = require("@/assets/img/markets/forex/why-4.jpg");
var why_5_jpg_1 = require("@/assets/img/markets/forex/why-5.jpg");
var why_6_jpg_1 = require("@/assets/img/markets/forex/why-6.jpg");
var vue_i18n_1 = require("vue-i18n");
var t = (0, vue_i18n_1.useI18n)().t;
var dataList = (0, vue_1.ref)({
    title: t('forexBoxSentence'),
    intro: t('forexBoxSentence1'),
    list: [
        {
            icon: why_1_jpg_1.default,
            title: t('forexBoxSentence2'),
            intro: t('forexBoxSentence3')
        },
        {
            icon: why_2_jpg_1.default,
            title: t('forexBoxSentence4'),
            intro: t('forexBoxSentence5')
        },
        {
            icon: why_3_jpg_1.default,
            title: t('forexBoxSentence6'),
            intro: t('forexBoxSentence7')
        }, {
            icon: why_4_jpg_1.default,
            title: t('forexBoxSentence8'),
            intro: t('forexBoxSentence9')
        },
        {
            icon: why_5_jpg_1.default,
            title: t('forexBoxSentence10'),
            intro: t('forexBoxSentence11')
        },
        {
            icon: why_6_jpg_1.default,
            title: t('forexBoxSentence12'),
            intro: t('forexBoxSentence13')
        }
    ]
});
var __VLS_ctx = __assign(__assign({}, {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['item']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['intro']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "home-box" }));
/** @type {__VLS_StyleScopedClasses['home-box']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "home-box-header" }));
/** @type {__VLS_StyleScopedClasses['home-box-header']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "title" }));
/** @type {__VLS_StyleScopedClasses['title']} */ ;
(__VLS_ctx.dataList.title);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "intro" }));
/** @type {__VLS_StyleScopedClasses['intro']} */ ;
(__VLS_ctx.dataList.intro);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "home-box-list" }));
/** @type {__VLS_StyleScopedClasses['home-box-list']} */ ;
for (var _i = 0, _a = __VLS_vFor((__VLS_ctx.dataList.list)); _i < _a.length; _i++) {
    var _b = _a[_i], item = _b[0], index = _b[1];
    var __VLS_0 = (__VLS_ctx.motion.div) || (__VLS_ctx.motion.div);
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0(__assign({ class: "item" }, { key: (index), whileHover: "hover", variants: (__VLS_ctx.hoverUpAnimateVariants) })));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ class: "item" }, { key: (index), whileHover: "hover", variants: (__VLS_ctx.hoverUpAnimateVariants) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
    /** @type {__VLS_StyleScopedClasses['item']} */ ;
    var __VLS_5 = __VLS_3.slots.default;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "img-box" }));
    /** @type {__VLS_StyleScopedClasses['img-box']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        src: (item.icon),
        alt: "",
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "title" }));
    /** @type {__VLS_StyleScopedClasses['title']} */ ;
    (item.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "intro" }));
    /** @type {__VLS_StyleScopedClasses['intro']} */ ;
    (item.intro);
    // @ts-ignore
    [dataList, dataList, dataList, motion_v_1.motion, motion_v_1.motion, motion_ts_1.hoverUpAnimateVariants,];
    var __VLS_3;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({});
exports.default = {};
