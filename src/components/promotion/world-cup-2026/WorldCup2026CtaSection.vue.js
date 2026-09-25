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
var vue_i18n_1 = require("vue-i18n");
var background_last_section_jpg_1 = require("@/assets/img/promotion/world-cup-2026/background-last-section.jpg");
var __VLS_emit = defineEmits();
var t = (0, vue_i18n_1.useI18n)().t;
var __VLS_ctx = __assign(__assign(__assign(__assign(__assign({}, {}), {}), {}), {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['cta-section']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-gold']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-gold']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-gold']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-gold']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)(__assign({ class: "cta-section" }, { style: ({ background: "url(".concat(__VLS_ctx.backgroundLast, ") center center / cover no-repeat") }) }));
/** @type {__VLS_StyleScopedClasses['cta-section']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "cta-content" }));
/** @type {__VLS_StyleScopedClasses['cta-content']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)(__assign({ class: "cta-dates" }));
/** @type {__VLS_StyleScopedClasses['cta-dates']} */ ;
(__VLS_ctx.t('worldCup2026CampaignDates'));
__VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)(__assign({ class: "cta-title" }));
/** @type {__VLS_StyleScopedClasses['cta-title']} */ ;
(__VLS_ctx.t('worldCup2026CtaTitle'));
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)(__assign({ class: "cta-text" }));
/** @type {__VLS_StyleScopedClasses['cta-text']} */ ;
(__VLS_ctx.t('worldCup2026CtaText'));
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign(__assign({ onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        return (__VLS_ctx.$emit('claim'));
        // @ts-ignore
        [background_last_section_jpg_1.default, t, t, t, $emit,];
    } }, { class: "btn-gold" }), { type: "button" }));
/** @type {__VLS_StyleScopedClasses['btn-gold']} */ ;
(__VLS_ctx.t('worldCup2026CtaButton'));
// @ts-ignore
[t,];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    __typeEmits: {},
});
exports.default = {};
