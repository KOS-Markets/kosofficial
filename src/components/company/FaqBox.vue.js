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
var expand_svg_raw_1 = require("@/assets/img/company/faq/expand.svg?raw");
var minimise_svg_raw_1 = require("@/assets/img/company/faq/minimise.svg?raw");
var vue_i18n_1 = require("vue-i18n");
var t = (0, vue_i18n_1.useI18n)().t;
var dataList = (0, vue_1.ref)({
    list: [
        {
            show: false,
            title: t('faqBoxSentence1'),
            intro: t('faqBoxSentence2')
        },
        {
            show: false,
            title: t('faqBoxSentence3'),
            intro: t('faqBoxSentence4')
        },
        {
            show: false,
            title: t('faqBoxSentence5'),
            intro: t('faqBoxSentence6')
        },
        {
            show: false,
            title: t('faqBoxSentence7'),
            intro: t('faqBoxSentence8')
        },
        {
            show: false,
            title: t('faqBoxSentence9'),
            intro: t('faqBoxSentence10')
        },
        {
            show: false,
            title: t('faqBoxSentence11'),
            intro: t('faqBoxSentence12')
        },
        {
            show: false,
            title: t('faqBoxSentence13'),
            intro: t('faqBoxSentence14')
        },
        {
            show: false,
            title: t('faqBoxSentence15'),
            intro: t('faqBoxSentence16')
        },
        {
            show: false,
            title: t('faqBoxSentence17'),
            intro: t('faqBoxSentence18')
        }
    ]
});
var __VLS_ctx = __assign(__assign({}, {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "legal-documents-box" }));
/** @type {__VLS_StyleScopedClasses['legal-documents-box']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "container" }));
/** @type {__VLS_StyleScopedClasses['container']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "text" }));
/** @type {__VLS_StyleScopedClasses['text']} */ ;
(__VLS_ctx.t('faqBoxSentence'));
var _loop_1 = function (item, index) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "collapse-item" }, { key: (index) }));
    /** @type {__VLS_StyleScopedClasses['collapse-item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            return (item.show = !item.show);
            // @ts-ignore
            [t, dataList,];
        } }, { class: "collapse-header" }));
    /** @type {__VLS_StyleScopedClasses['collapse-header']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "text" }));
    /** @type {__VLS_StyleScopedClasses['text']} */ ;
    (item.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "icon" }));
    /** @type {__VLS_StyleScopedClasses['icon']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalDirective(__VLS_directives.vHtml, {})(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (item.show ? __VLS_ctx.up : __VLS_ctx.down) }), null, null);
    var __VLS_0 = (__VLS_ctx.motion.div) || (__VLS_ctx.motion.div);
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0(__assign({ class: "collapse-content" }, { animate: (item.show ? 'visible' : 'hidden'), initial: "hidden", variants: (__VLS_ctx.heightListAnimateVariants) })));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ class: "collapse-content" }, { animate: (item.show ? 'visible' : 'hidden'), initial: "hidden", variants: (__VLS_ctx.heightListAnimateVariants) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
    __VLS_asFunctionalDirective(__VLS_directives.vHtml, {})(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (item.intro) }), null, null);
    /** @type {__VLS_StyleScopedClasses['collapse-content']} */ ;
    // @ts-ignore
    [minimise_svg_raw_1.default, expand_svg_raw_1.default, motion_v_1.motion, motion_v_1.motion, motion_ts_1.heightListAnimateVariants,];
};
for (var _i = 0, _a = __VLS_vFor((__VLS_ctx.dataList.list)); _i < _a.length; _i++) {
    var _b = _a[_i], item = _b[0], index = _b[1];
    _loop_1(item, index);
}
// @ts-ignore
[];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({});
exports.default = {};
