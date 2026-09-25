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
var ChecklistPanelBox_vue_1 = require("@/components/tools/ChecklistPanelBox.vue");
var IconFeatureGridBox_vue_1 = require("@/components/tools/IconFeatureGridBox.vue");
var bg_jpg_1 = require("@/assets/img/tools/social-trading/bg.jpg");
var tools_1 = require("@/utils/tools");
var advantage_1_jpg_1 = require("@/assets/img/tools/social-trading/advantage-1.jpg");
var advantage_2_jpg_1 = require("@/assets/img/tools/social-trading/advantage-2.jpg");
var advantage_3_jpg_1 = require("@/assets/img/tools/social-trading/advantage-3.jpg");
var advantage_4_jpg_1 = require("@/assets/img/tools/social-trading/advantage-4.jpg");
var vue_i18n_1 = require("vue-i18n");
var t = (0, vue_i18n_1.useI18n)().t;
var config_1 = require("@/config");
var dataList = (0, vue_1.ref)({
    title: t('socialTradingBoxSentence'),
    intro: t('socialTradingBoxSentence1'),
    list: [
        {
            text: t('socialTradingBoxSentence2'),
        },
        {
            text: t('socialTradingBoxSentence3'),
        },
    ]
});
var dataList1 = (0, vue_1.ref)({
    title: t('tradingSignalsBox1Sentence'),
    list: [
        {
            icon: advantage_1_jpg_1.default,
            title: t('socialTradingBox1Sentence'),
            text: t('socialTradingBox1Sentence1'),
        },
        {
            icon: advantage_2_jpg_1.default,
            title: t('socialTradingBox1Sentence2'),
            text: t('socialTradingBox1Sentence3'),
        },
        {
            icon: advantage_3_jpg_1.default,
            title: t('socialTradingBox1Sentence4'),
            text: t('socialTradingBox1Sentence5'),
        },
        {
            icon: advantage_4_jpg_1.default,
            title: t('socialTradingBox1Sentence6'),
            text: t('socialTradingBox1Sentence7'),
        },
    ]
});
var __VLS_ctx = __assign(__assign({}, {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "social-trading-view" }));
/** @type {__VLS_StyleScopedClasses['social-trading-view']} */ ;
var __VLS_0 = CustomCarousel_vue_1.default;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0(__assign(__assign({ 'onToPage': {} }, { title: (__VLS_ctx.t('socialTradingViewTitle')), btnText: (__VLS_ctx.t('marketNewsViewBtnText')), background: (__VLS_ctx.background) }), { style: {} })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign({ 'onToPage': {} }, { title: (__VLS_ctx.t('socialTradingViewTitle')), btnText: (__VLS_ctx.t('marketNewsViewBtnText')), background: (__VLS_ctx.background) }), { style: {} })], __VLS_functionalComponentArgsRest(__VLS_1), false));
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
var __VLS_7 = ChecklistPanelBox_vue_1.default;
// @ts-ignore
var __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    data: (__VLS_ctx.dataList),
}));
var __VLS_9 = __VLS_8.apply(void 0, __spreadArray([{
        data: (__VLS_ctx.dataList),
    }], __VLS_functionalComponentArgsRest(__VLS_8), false));
var __VLS_12 = IconFeatureGridBox_vue_1.default;
// @ts-ignore
var __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
    data: (__VLS_ctx.dataList1),
}));
var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([{
        data: (__VLS_ctx.dataList1),
    }], __VLS_functionalComponentArgsRest(__VLS_13), false));
// @ts-ignore
[dataList, dataList1,];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({});
exports.default = {};
