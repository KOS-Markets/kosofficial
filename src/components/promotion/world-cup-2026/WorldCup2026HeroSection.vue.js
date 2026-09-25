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
var background_first_section_jpg_1 = require("@/assets/img/promotion/world-cup-2026/background-first-section.jpg");
var bg_jpg_1 = require("@/assets/img/promotion/world-cup-2026/bg.jpg");
var t = (0, vue_i18n_1.useI18n)().t;
var eligibilityItems = (0, vue_1.computed)(function () { return [
    t('worldCup2026EligibilityDepositRequirement'),
    t('worldCup2026EligibilityTradingRequirement'),
]; });
var __VLS_ctx = __assign(__assign({}, {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['hero']} */ ;
/** @type {__VLS_StyleScopedClasses['hero']} */ ;
/** @type {__VLS_StyleScopedClasses['pill']} */ ;
/** @type {__VLS_StyleScopedClasses['hero']} */ ;
/** @type {__VLS_StyleScopedClasses['pill']} */ ;
/** @type {__VLS_StyleScopedClasses['eligibility-pills']} */ ;
/** @type {__VLS_StyleScopedClasses['hero']} */ ;
/** @type {__VLS_StyleScopedClasses['hero']} */ ;
/** @type {__VLS_StyleScopedClasses['hero']} */ ;
/** @type {__VLS_StyleScopedClasses['hero']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)(__assign({ class: "hero" }, { style: ({ background: "url(".concat(__VLS_ctx.backgroundFirst, ") center center / cover no-repeat") }) }));
/** @type {__VLS_StyleScopedClasses['hero']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)(__assign({ class: "hero-title" }));
/** @type {__VLS_StyleScopedClasses['hero-title']} */ ;
(__VLS_ctx.t('worldCup2026HeroTitle'));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "hero-visual-wrap" }));
/** @type {__VLS_StyleScopedClasses['hero-visual-wrap']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)(__assign({ src: (__VLS_ctx.worldCupVisualBg), alt: "" }, { class: "hero-visual" }));
/** @type {__VLS_StyleScopedClasses['hero-visual']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)(__assign({ class: "hero-dates" }));
/** @type {__VLS_StyleScopedClasses['hero-dates']} */ ;
(__VLS_ctx.t('worldCup2026CampaignDates'));
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)(__assign({ class: "hero-sub" }));
/** @type {__VLS_StyleScopedClasses['hero-sub']} */ ;
(__VLS_ctx.t('worldCup2026HeroSubtitle'));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "eligibility" }));
/** @type {__VLS_StyleScopedClasses['eligibility']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)(__assign({ class: "eligibility-label" }));
/** @type {__VLS_StyleScopedClasses['eligibility-label']} */ ;
(__VLS_ctx.t('worldCup2026EligibilityLabel'));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "eligibility-pills" }));
/** @type {__VLS_StyleScopedClasses['eligibility-pills']} */ ;
for (var _i = 0, _a = __VLS_vFor((__VLS_ctx.eligibilityItems)); _i < _a.length; _i++) {
    var item = _a[_i][0];
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ key: (item) }, { class: "pill" }));
    /** @type {__VLS_StyleScopedClasses['pill']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)(__assign({ class: "pill-icon" }));
    /** @type {__VLS_StyleScopedClasses['pill-icon']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (item);
    // @ts-ignore
    [background_first_section_jpg_1.default, t, t, t, t, bg_jpg_1.default, eligibilityItems,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "wheel-section" }));
/** @type {__VLS_StyleScopedClasses['wheel-section']} */ ;
var __VLS_0 = {};
// @ts-ignore
var __VLS_1 = __VLS_0;
// @ts-ignore
[];
var __VLS_base = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({});
var __VLS_export = {};
exports.default = {};
