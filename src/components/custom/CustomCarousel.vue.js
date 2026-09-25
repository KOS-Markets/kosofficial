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
var CustomButton_vue_1 = require("@/components/custom/CustomButton.vue");
var motion_ts_1 = require("@/utils/motion.ts");
var props = withDefaults(defineProps(), {
    type: 0,
    title: '',
    background: '',
    intro: '',
    btnText: '',
});
var emit = defineEmits();
var showImg = (0, vue_1.ref)(false);
var __VLS_defaults = {
    type: 0,
    title: '',
    background: '',
    intro: '',
    btnText: '',
};
var __VLS_ctx = __assign(__assign(__assign(__assign(__assign({}, {}), {}), {}), {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['custom-carousel__title']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-carousel__intro']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "custom-carousel custom-border-color" }, { style: {} }));
/** @type {__VLS_StyleScopedClasses['custom-carousel']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-border-color']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "custom-carousel__bg" }));
/** @type {__VLS_StyleScopedClasses['custom-carousel__bg']} */ ;
var __VLS_0 = (__VLS_ctx.motion.img);
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0(__assign(__assign({ 'onLoad': {} }, { class: "custom-carousel__img flip-in-rtl" }), { src: (props.background), alt: "", animate: (__VLS_ctx.showImg ? 'visible' : 'hidden'), initial: "hidden", variants: (__VLS_ctx.opacityAnimateVariants) })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign({ 'onLoad': {} }, { class: "custom-carousel__img flip-in-rtl" }), { src: (props.background), alt: "", animate: (__VLS_ctx.showImg ? 'visible' : 'hidden'), initial: "hidden", variants: (__VLS_ctx.opacityAnimateVariants) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_5;
var __VLS_6 = {
    /** @type {typeof __VLS_5.load} */
    onLoad: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.showImg = true;
        ;
        // @ts-ignore
        [motion_v_1.motion, showImg, showImg, motion_ts_1.opacityAnimateVariants,];
    },
};
/** @type {__VLS_StyleScopedClasses['custom-carousel__img']} */ ;
/** @type {__VLS_StyleScopedClasses['flip-in-rtl']} */ ;
var __VLS_3;
var __VLS_4;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "custom-carousel__content" }));
/** @type {__VLS_StyleScopedClasses['custom-carousel__content']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "custom-carousel__title" }));
/** @type {__VLS_StyleScopedClasses['custom-carousel__title']} */ ;
(props.title);
if (props.intro != '') {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "custom-carousel__intro" }));
    /** @type {__VLS_StyleScopedClasses['custom-carousel__intro']} */ ;
    (props.intro);
}
if (props.btnText != '') {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "custom-carousel__actions" }));
    /** @type {__VLS_StyleScopedClasses['custom-carousel__actions']} */ ;
    var __VLS_7 = CustomButton_vue_1.default;
    // @ts-ignore
    var __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7(__assign({ 'onToPage': {} }, { name: (props.btnText), type: (0) })));
    var __VLS_9 = __VLS_8.apply(void 0, __spreadArray([__assign({ 'onToPage': {} }, { name: (props.btnText), type: (0) })], __VLS_functionalComponentArgsRest(__VLS_8), false));
    var __VLS_12 = void 0;
    var __VLS_13 = {
        /** @type {typeof __VLS_12.toPage} */
        onToPage: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            if (!(props.btnText != ''))
                throw 0;
            return (__VLS_ctx.emit('toPage'));
            // @ts-ignore
            [emit,];
        },
    };
    var __VLS_10;
    var __VLS_11;
}
// @ts-ignore
[];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    __typeEmits: {},
    __defaults: __VLS_defaults,
    __typeProps: {},
});
exports.default = {};
