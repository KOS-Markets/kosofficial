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
var rules = (0, vue_1.computed)(function () { return [
    {
        text: t('worldCup2026Rule1'),
        type: 'ok',
    },
    {
        text: t('worldCup2026Rule3'),
        type: 'ok',
    },
    {
        text: t('worldCup2026Rule4'),
        type: 'no',
    },
    {
        text: t('worldCup2026Rule5'),
        type: 'no',
    },
    {
        text: t('worldCup2026Rule6'),
        type: 'no',
    },
]; });
var __VLS_ctx = __assign(__assign({}, {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['rules-section']} */ ;
/** @type {__VLS_StyleScopedClasses['rule-item']} */ ;
/** @type {__VLS_StyleScopedClasses['rule-item']} */ ;
/** @type {__VLS_StyleScopedClasses['rule-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['rule-item']} */ ;
/** @type {__VLS_StyleScopedClasses['rule-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['rules-section']} */ ;
/** @type {__VLS_StyleScopedClasses['rules-section']} */ ;
/** @type {__VLS_StyleScopedClasses['rules-section']} */ ;
/** @type {__VLS_StyleScopedClasses['rules-section']} */ ;
/** @type {__VLS_StyleScopedClasses['rules-section']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)(__assign({ class: "rules-section reveal" }));
/** @type {__VLS_StyleScopedClasses['rules-section']} */ ;
/** @type {__VLS_StyleScopedClasses['reveal']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "rules-inner" }));
/** @type {__VLS_StyleScopedClasses['rules-inner']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)(__assign({ class: "rules-title" }));
/** @type {__VLS_StyleScopedClasses['rules-title']} */ ;
(__VLS_ctx.t('worldCup2026RulesTitle'));
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)(__assign({ class: "rules-intro" }));
/** @type {__VLS_StyleScopedClasses['rules-intro']} */ ;
(__VLS_ctx.t('worldCup2026RulesIntro'));
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)(__assign({ class: "rules-list" }));
/** @type {__VLS_StyleScopedClasses['rules-list']} */ ;
for (var _i = 0, _a = __VLS_vFor((__VLS_ctx.rules)); _i < _a.length; _i++) {
    var rule = _a[_i][0];
    __VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)(__assign(__assign({ key: (rule.text) }, { class: "rule-item" }), { class: (rule.type) }));
    /** @type {__VLS_StyleScopedClasses['rule-item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)(__assign({ class: "rule-icon" }));
    /** @type {__VLS_StyleScopedClasses['rule-icon']} */ ;
    (rule.type === 'ok' ? '✅' : '❌');
    (rule.text);
    // @ts-ignore
    [t, t, rules,];
}
// @ts-ignore
[];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({});
exports.default = {};
