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
var CustomCarousel_vue_1 = require("@/components/custom/CustomCarousel.vue");
var PartnershipBox_vue_1 = require("@/components/partnership/PartnershipBox.vue");
var PartnershipProgramsBox_vue_1 = require("@/components/partnership/PartnershipProgramsBox.vue");
var PartnershipStepsBox_vue_1 = require("@/components/partnership/PartnershipStepsBox.vue");
var Section1_BG_Cropped_jpg_1 = require("@/assets/img/partnership/Section1_BG Cropped.jpg");
var multi__leading_svg_1 = require("@/assets/img/partnership/multi  leading.svg");
var advanced_platform_svg_1 = require("@/assets/img/partnership/advanced platform.svg");
var support_svg_1 = require("@/assets/img/partnership/support.svg");
var commission_structure_svg_1 = require("@/assets/img/partnership/commission structure.svg");
var vue_i18n_1 = require("vue-i18n");
var t = (0, vue_i18n_1.useI18n)().t;
var dataList = (0, vue_1.ref)({
    title: t('partnershipBoxSentence'),
    intro: t('partnershipBoxSentence1'),
    list: [
        {
            icon: multi__leading_svg_1.default,
            title: t('partnershipBoxSentence2'),
            text: t('partnershipBoxSentence3'),
        },
        {
            icon: advanced_platform_svg_1.default,
            title: t('partnershipBoxSentence4'),
            text: t('partnershipBoxSentence5'),
        },
        {
            icon: support_svg_1.default,
            title: t('partnershipBoxSentence6'),
            text: t('partnershipBoxSentence7'),
        },
        {
            icon: commission_structure_svg_1.default,
            title: t('partnershipBoxSentence8'),
            text: t('partnershipBoxSentence9'),
        },
    ]
});
var __VLS_ctx = __assign(__assign({}, {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "partnership-view" }));
/** @type {__VLS_StyleScopedClasses['partnership-view']} */ ;
var __VLS_0 = CustomCarousel_vue_1.default;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    title: (__VLS_ctx.t('partnershipViewTitle')),
    intro: (__VLS_ctx.t('partnershipViewIntro')),
    btnText: (__VLS_ctx.t('partnershipViewBtnText')),
    background: (__VLS_ctx.background),
}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
        title: (__VLS_ctx.t('partnershipViewTitle')),
        intro: (__VLS_ctx.t('partnershipViewIntro')),
        btnText: (__VLS_ctx.t('partnershipViewBtnText')),
        background: (__VLS_ctx.background),
    }], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_5 = PartnershipBox_vue_1.default;
// @ts-ignore
var __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
    data: (__VLS_ctx.dataList),
}));
var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([{
        data: (__VLS_ctx.dataList),
    }], __VLS_functionalComponentArgsRest(__VLS_6), false));
var __VLS_10 = PartnershipProgramsBox_vue_1.default;
// @ts-ignore
var __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({}));
var __VLS_12 = __VLS_11.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_11), false));
var __VLS_15 = PartnershipStepsBox_vue_1.default;
// @ts-ignore
var __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({}));
var __VLS_17 = __VLS_16.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_16), false));
// @ts-ignore
[t, t, t, Section1_BG_Cropped_jpg_1.default, dataList,];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({});
exports.default = {};
