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
var __VLS_props = defineProps();
var t = (0, vue_i18n_1.useI18n)().t;
var __VLS_ctx = __assign(__assign(__assign(__assign({}, {}), {}), {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['prizes-section']} */ ;
/** @type {__VLS_StyleScopedClasses['prize-card']} */ ;
/** @type {__VLS_StyleScopedClasses['prize-card']} */ ;
/** @type {__VLS_StyleScopedClasses['prize-card']} */ ;
/** @type {__VLS_StyleScopedClasses['prize-img-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['prize-card']} */ ;
/** @type {__VLS_StyleScopedClasses['prize-img-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['prizes-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['prizes-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['prizes-section']} */ ;
/** @type {__VLS_StyleScopedClasses['prizes-section']} */ ;
/** @type {__VLS_StyleScopedClasses['prizes-section']} */ ;
/** @type {__VLS_StyleScopedClasses['prizes-section']} */ ;
/** @type {__VLS_StyleScopedClasses['prizes-section']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)(__assign({ class: "prizes-section reveal" }));
/** @type {__VLS_StyleScopedClasses['prizes-section']} */ ;
/** @type {__VLS_StyleScopedClasses['reveal']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)(__assign({ class: "section-eyebrow" }));
/** @type {__VLS_StyleScopedClasses['section-eyebrow']} */ ;
(__VLS_ctx.t('worldCup2026PrizesEyebrow'));
__VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)(__assign({ class: "section-title" }));
/** @type {__VLS_StyleScopedClasses['section-title']} */ ;
(__VLS_ctx.t('worldCup2026PrizesTitle'));
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)(__assign({ class: "section-sub" }));
/** @type {__VLS_StyleScopedClasses['section-sub']} */ ;
(__VLS_ctx.t('worldCup2026PrizesSubtitle'));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "prizes-grid" }));
/** @type {__VLS_StyleScopedClasses['prizes-grid']} */ ;
for (var _i = 0, _a = __VLS_vFor((__VLS_ctx.prizes)); _i < _a.length; _i++) {
    var prize = _a[_i][0];
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ key: (prize.id) }, { class: "prize-card" }));
    /** @type {__VLS_StyleScopedClasses['prize-card']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "prize-img-wrap" }));
    /** @type {__VLS_StyleScopedClasses['prize-img-wrap']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        src: (prize.img),
        alt: (prize.name),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)(__assign({ class: "prize-name" }));
    /** @type {__VLS_StyleScopedClasses['prize-name']} */ ;
    (prize.name);
    // @ts-ignore
    [t, t, t, prizes,];
}
// @ts-ignore
[];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    __typeProps: {},
});
exports.default = {};
