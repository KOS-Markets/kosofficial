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
var vue_i18n_1 = require("vue-i18n");
var props = defineProps();
var emit = defineEmits();
var t = (0, vue_i18n_1.useI18n)().t;
var inputRef = (0, vue_1.ref)(null);
var codeValue = (0, vue_1.ref)('');
var errorMessage = (0, vue_1.ref)('');
function resetForm() {
    codeValue.value = '';
    errorMessage.value = '';
}
function focusInput() {
    (0, vue_1.nextTick)(function () {
        var _a;
        (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.focus();
    });
}
function handleSubmit() {
    if (props.isSubmitting) {
        return;
    }
    if (!codeValue.value) {
        errorMessage.value = t('worldCup2026CodePopupEmptyError');
        focusInput();
        return;
    }
    errorMessage.value = '';
    emit('submit', codeValue.value);
}
function handleDialogVisibilityChange(isVisible) {
    if (!isVisible && props.modelValue) {
        emit('close');
    }
}
(0, vue_1.watch)(codeValue, function () {
    if (errorMessage.value) {
        errorMessage.value = '';
    }
});
(0, vue_1.watch)(function () { return props.modelValue; }, function (isVisible) {
    if (isVisible) {
        focusInput();
        return;
    }
    resetForm();
}, { immediate: true });
var __VLS_ctx = __assign(__assign(__assign(__assign(__assign({}, {}), {}), {}), {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['world-cup-2026-code-dialog']} */ ;
/** @type {__VLS_StyleScopedClasses['world-cup-2026-code-dialog']} */ ;
/** @type {__VLS_StyleScopedClasses['popup-close']} */ ;
/** @type {__VLS_StyleScopedClasses['el-input__inner']} */ ;
/** @type {__VLS_StyleScopedClasses['el-input__wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['el-button']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-gold']} */ ;
/** @type {__VLS_StyleScopedClasses['el-button']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-gold']} */ ;
/** @type {__VLS_StyleScopedClasses['el-button']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-gold']} */ ;
/** @type {__VLS_StyleScopedClasses['el-button']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-gold']} */ ;
/** @type {__VLS_StyleScopedClasses['el-button']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-gold']} */ ;
/** @type {__VLS_StyleScopedClasses['el-button']} */ ;
/** @type {__VLS_StyleScopedClasses['world-cup-2026-code-dialog']} */ ;
/** @type {__VLS_StyleScopedClasses['world-cup-2026-code-dialog']} */ ;
/** @type {__VLS_StyleScopedClasses['el-dialog__body']} */ ;
/** @type {__VLS_StyleScopedClasses['world-cup-2026-code-dialog']} */ ;
/** @type {__VLS_StyleScopedClasses['world-cup-2026-code-dialog']} */ ;
var __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.elDialog | typeof __VLS_components.ElDialog | typeof __VLS_components['el-dialog'] | typeof __VLS_components.elDialog | typeof __VLS_components.ElDialog | typeof __VLS_components['el-dialog']} */
elDialog;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0(__assign(__assign({ 'onUpdate:modelValue': {} }, { modelValue: (__VLS_ctx.modelValue), zIndex: (4000), showClose: (false), closeOnClickModal: (true), closeOnPressEscape: (true), alignCenter: true, width: "100%" }), { class: "world-cup-2026-code-dialog" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign({ 'onUpdate:modelValue': {} }, { modelValue: (__VLS_ctx.modelValue), zIndex: (4000), showClose: (false), closeOnClickModal: (true), closeOnPressEscape: (true), alignCenter: true, width: "100%" }), { class: "world-cup-2026-code-dialog" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_5;
var __VLS_6 = {
    /** @type {typeof __VLS_5.'update:modelValue'} */
    'onUpdate:modelValue': (__VLS_ctx.handleDialogVisibilityChange),
};
var __VLS_7;
/** @type {__VLS_StyleScopedClasses['world-cup-2026-code-dialog']} */ ;
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
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)(__assign({ class: "popup-headline" }));
/** @type {__VLS_StyleScopedClasses['popup-headline']} */ ;
(__VLS_ctx.t('worldCup2026CodePopupHeadline'));
__VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)(__assign({ id: "world-cup-2026-code-popup-title" }, { class: "popup-title" }));
/** @type {__VLS_StyleScopedClasses['popup-title']} */ ;
(__VLS_ctx.t('worldCup2026CodePopupTitle'));
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)(__assign({ class: "popup-msg" }));
/** @type {__VLS_StyleScopedClasses['popup-msg']} */ ;
(__VLS_ctx.t('worldCup2026CodePopupMessage'));
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)(__assign({ onSubmit: (__VLS_ctx.handleSubmit) }, { class: "popup-form" }));
/** @type {__VLS_StyleScopedClasses['popup-form']} */ ;
var __VLS_9;
/** @ts-ignore @type { | typeof __VLS_components.elInput | typeof __VLS_components.ElInput | typeof __VLS_components['el-input']} */
elInput;
// @ts-ignore
var __VLS_10 = __VLS_asFunctionalComponent1(__VLS_9, new __VLS_9(__assign(__assign({ ref: "inputRef", modelValue: (__VLS_ctx.codeValue), modelModifiers: { trim: true, } }, { class: "popup-input" }), { type: "text", name: "lotteryCode", autocomplete: "off", disabled: (__VLS_ctx.isSubmitting), placeholder: (__VLS_ctx.t('worldCup2026CodePopupPlaceholder')) })));
var __VLS_11 = __VLS_10.apply(void 0, __spreadArray([__assign(__assign({ ref: "inputRef", modelValue: (__VLS_ctx.codeValue), modelModifiers: { trim: true, } }, { class: "popup-input" }), { type: "text", name: "lotteryCode", autocomplete: "off", disabled: (__VLS_ctx.isSubmitting), placeholder: (__VLS_ctx.t('worldCup2026CodePopupPlaceholder')) })], __VLS_functionalComponentArgsRest(__VLS_10), false));
var __VLS_14;
/** @type {__VLS_StyleScopedClasses['popup-input']} */ ;
var __VLS_12;
if (__VLS_ctx.errorMessage) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)(__assign({ class: "popup-error" }));
    /** @type {__VLS_StyleScopedClasses['popup-error']} */ ;
    (__VLS_ctx.errorMessage);
}
var __VLS_16;
/** @ts-ignore @type { | typeof __VLS_components.elButton | typeof __VLS_components.ElButton | typeof __VLS_components['el-button'] | typeof __VLS_components.elButton | typeof __VLS_components.ElButton | typeof __VLS_components['el-button']} */
elButton;
// @ts-ignore
var __VLS_17 = __VLS_asFunctionalComponent1(__VLS_16, new __VLS_16(__assign({ class: "btn-gold popup-btn" }, { nativeType: "submit", loading: (__VLS_ctx.isSubmitting) })));
var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([__assign({ class: "btn-gold popup-btn" }, { nativeType: "submit", loading: (__VLS_ctx.isSubmitting) })], __VLS_functionalComponentArgsRest(__VLS_17), false));
/** @type {__VLS_StyleScopedClasses['btn-gold']} */ ;
/** @type {__VLS_StyleScopedClasses['popup-btn']} */ ;
var __VLS_21 = __VLS_19.slots.default;
(__VLS_ctx.t('worldCup2026CodePopupSubmit'));
// @ts-ignore
[t, t, t, t, t, t, handleSubmit, codeValue, isSubmitting, isSubmitting, errorMessage, errorMessage,];
var __VLS_19;
// @ts-ignore
[];
var __VLS_3;
var __VLS_4;
// @ts-ignore
var __VLS_15 = __VLS_14;
// @ts-ignore
[];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    __typeEmits: {},
    __typeProps: {},
});
exports.default = {};
