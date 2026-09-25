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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_i18n_1 = require("vue-i18n");
var props = defineProps();
var emit = defineEmits();
var t = (0, vue_i18n_1.useI18n)().t;
function handleDialogVisibilityChange(isVisible) {
    if (!isVisible && props.modelValue) {
        emit('close');
    }
}
var __VLS_ctx = __assign(__assign(__assign(__assign(__assign({}, {}), {}), {}), {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['world-cup-2026-result-dialog']} */ ;
/** @type {__VLS_StyleScopedClasses['world-cup-2026-result-dialog']} */ ;
/** @type {__VLS_StyleScopedClasses['popup-close']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-gold']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-gold']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-gold']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-gold']} */ ;
/** @type {__VLS_StyleScopedClasses['world-cup-2026-result-dialog']} */ ;
/** @type {__VLS_StyleScopedClasses['world-cup-2026-result-dialog']} */ ;
/** @type {__VLS_StyleScopedClasses['el-dialog__body']} */ ;
/** @type {__VLS_StyleScopedClasses['world-cup-2026-result-dialog']} */ ;
/** @type {__VLS_StyleScopedClasses['world-cup-2026-result-dialog']} */ ;
var __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.elDialog | typeof __VLS_components.ElDialog | typeof __VLS_components['el-dialog'] | typeof __VLS_components.elDialog | typeof __VLS_components.ElDialog | typeof __VLS_components['el-dialog']} */
elDialog;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0(__assign(__assign({ 'onUpdate:modelValue': {} }, { modelValue: (__VLS_ctx.modelValue), zIndex: (4000), showClose: (false), closeOnClickModal: (true), closeOnPressEscape: (true), alignCenter: true, width: "100%" }), { class: "world-cup-2026-result-dialog" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign({ 'onUpdate:modelValue': {} }, { modelValue: (__VLS_ctx.modelValue), zIndex: (4000), showClose: (false), closeOnClickModal: (true), closeOnPressEscape: (true), alignCenter: true, width: "100%" }), { class: "world-cup-2026-result-dialog" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_5;
var __VLS_6 = {
    /** @type {typeof __VLS_5.'update:modelValue'} */
    'onUpdate:modelValue': (__VLS_ctx.handleDialogVisibilityChange),
};
var __VLS_7;
/** @type {__VLS_StyleScopedClasses['world-cup-2026-result-dialog']} */ ;
var __VLS_8 = __VLS_3.slots.default;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign(__assign({ onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        return (__VLS_ctx.$emit('close'));
        // @ts-ignore
        [modelValue, handleDialogVisibilityChange, $emit,];
    } }, { class: "popup-close" }), { type: "button", 'aria-label': (__VLS_ctx.t('worldCup2026Close')) }));
/** @type {__VLS_StyleScopedClasses['popup-close']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "popup-confetti" }));
/** @type {__VLS_StyleScopedClasses['popup-confetti']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)(__assign({ class: "popup-headline" }));
/** @type {__VLS_StyleScopedClasses['popup-headline']} */ ;
(__VLS_ctx.t('worldCup2026PopupHeadline'));
__VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)(__assign({ id: "world-cup-2026-popup-title" }, { class: "popup-prize-name" }));
/** @type {__VLS_StyleScopedClasses['popup-prize-name']} */ ;
((_b = (_a = __VLS_ctx.prize) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : __VLS_ctx.t('worldCup2026PopupFallbackPrizeName'));
if (__VLS_ctx.prize) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)(__assign({ class: "popup-prize-img" }, { src: (__VLS_ctx.prize.img), alt: (__VLS_ctx.prize.name) }));
    /** @type {__VLS_StyleScopedClasses['popup-prize-img']} */ ;
}
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)(__assign({ class: "popup-msg" }));
/** @type {__VLS_StyleScopedClasses['popup-msg']} */ ;
(__VLS_ctx.t('worldCup2026PopupMessage'));
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign(__assign({ onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        return (__VLS_ctx.$emit('close'));
        // @ts-ignore
        [$emit, t, t, t, t, prize, prize, prize, prize,];
    } }, { class: "btn-gold popup-btn" }), { type: "button" }));
/** @type {__VLS_StyleScopedClasses['btn-gold']} */ ;
/** @type {__VLS_StyleScopedClasses['popup-btn']} */ ;
(__VLS_ctx.t('worldCup2026Close'));
// @ts-ignore
[t,];
var __VLS_3;
var __VLS_4;
// @ts-ignore
[];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    __typeEmits: {},
    __typeProps: {},
});
exports.default = {};
