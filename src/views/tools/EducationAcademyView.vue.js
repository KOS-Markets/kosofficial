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
var CustomCarousel_vue_1 = require("@/components/custom/CustomCarousel.vue");
var NewEducationAcademyBox_vue_1 = require("@/components/tools/NewEducationAcademyBox.vue");
var bg_jpg_1 = require("@/assets/img/tools/education-academy/bg.jpg");
var tools_1 = require("@/utils/tools");
var vue_i18n_1 = require("vue-i18n");
var t = (0, vue_i18n_1.useI18n)().t;
var config_1 = require("@/config");
var __VLS_ctx = __assign(__assign({}, {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "education-academy-view" }));
/** @type {__VLS_StyleScopedClasses['education-academy-view']} */ ;
var __VLS_0 = CustomCarousel_vue_1.default;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0(__assign({ 'onToPage': {} }, { title: (__VLS_ctx.t('educationAcademyViewTitle')), btnText: (__VLS_ctx.t('marketNewsViewBtnText')), background: (__VLS_ctx.background) })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ 'onToPage': {} }, { title: (__VLS_ctx.t('educationAcademyViewTitle')), btnText: (__VLS_ctx.t('marketNewsViewBtnText')), background: (__VLS_ctx.background) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_5;
var __VLS_6 = {
    /** @type {typeof __VLS_5.toPage} */
    onToPage: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        return (__VLS_ctx.browserRedirection(__VLS_ctx.link_config.register_link));
        // @ts-ignore
        [t, t, bg_jpg_1.default, tools_1.browserRedirection, config_1.link_config,];
    },
};
var __VLS_3;
var __VLS_4;
var __VLS_7 = NewEducationAcademyBox_vue_1.default;
// @ts-ignore
var __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({}));
var __VLS_9 = __VLS_8.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_8), false));
// @ts-ignore
[];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({});
exports.default = {};
