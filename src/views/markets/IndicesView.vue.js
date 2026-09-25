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
var MarketFeatureColumnsBox_vue_1 = require("@/components/markets/MarketFeatureColumnsBox.vue");
var IndicesBox_vue_1 = require("@/components/markets/IndicesBox.vue");
// import CustomTabTable from '@/components/custom/CustomTabTable.vue';
var MarketTextContentBox_vue_1 = require("@/components/markets/MarketTextContentBox.vue");
var bg_jpg_1 = require("@/assets/img/markets/indices/bg.jpg");
var tools_1 = require("@/utils/tools");
var vue_i18n_1 = require("vue-i18n");
var t = (0, vue_i18n_1.useI18n)().t;
var config_1 = require("@/config");
var textList1 = (0, vue_1.ref)([
    {
        title: t('indicesText1Box'),
        text: t('indicesText1Box1'),
    },
    {
        title: t('indicesText1Box2'),
        text: t('indicesText1Box3'),
    },
    {
        title: t('indicesText1Box4'),
        text: t('indicesText1Box5'),
    },
]);
var textList = (0, vue_1.ref)([
    {
        title: t('forexTextBox'),
        text: t('indicesTextBox'),
    },
    {
        title: t('forexTextBox4'),
        text: t('indicesTextBox1'),
    },
    {
        title: t('forexTextBox2'),
        text: t('indicesTextBox2'),
    },
]);
var __VLS_ctx = __assign(__assign({}, {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "indices-view" }));
/** @type {__VLS_StyleScopedClasses['indices-view']} */ ;
var __VLS_0 = CustomCarousel_vue_1.default;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0(__assign(__assign({ 'onToPage': {} }, { title: (__VLS_ctx.t('indicesViewTitle')), intro: (__VLS_ctx.t('indicesViewIntro')), btnText: (__VLS_ctx.t('forexViewBtnText')), background: (__VLS_ctx.background) }), { style: {} })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign({ 'onToPage': {} }, { title: (__VLS_ctx.t('indicesViewTitle')), intro: (__VLS_ctx.t('indicesViewIntro')), btnText: (__VLS_ctx.t('forexViewBtnText')), background: (__VLS_ctx.background) }), { style: {} })], __VLS_functionalComponentArgsRest(__VLS_1), false));
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
        [t, t, t, bg_jpg_1.default, tools_1.browserRedirection, config_1.link_config,];
    },
};
var __VLS_3;
var __VLS_4;
var __VLS_7 = MarketFeatureColumnsBox_vue_1.default;
// @ts-ignore
var __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    list: (__VLS_ctx.textList1),
}));
var __VLS_9 = __VLS_8.apply(void 0, __spreadArray([{
        list: (__VLS_ctx.textList1),
    }], __VLS_functionalComponentArgsRest(__VLS_8), false));
var __VLS_12 = IndicesBox_vue_1.default;
// @ts-ignore
var __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({}));
var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_13), false));
var __VLS_17 = MarketTextContentBox_vue_1.default;
// @ts-ignore
var __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
    list: (__VLS_ctx.textList),
}));
var __VLS_19 = __VLS_18.apply(void 0, __spreadArray([{
        list: (__VLS_ctx.textList),
    }], __VLS_functionalComponentArgsRest(__VLS_18), false));
// @ts-ignore
[textList1, textList,];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({});
exports.default = {};
