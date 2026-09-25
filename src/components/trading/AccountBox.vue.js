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
var CustomButton_vue_1 = require("@/components/custom/CustomButton.vue");
var tools_1 = require("@/utils/tools");
var vue_i18n_1 = require("vue-i18n");
var t = (0, vue_i18n_1.useI18n)().t;
var staticData_1 = require("@/stores/staticData");
var staticDataStore = (0, staticData_1.useStaticDataStore)();
var config_1 = require("@/config");
var __VLS_ctx = __assign(__assign({}, {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['home-box__number']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "home-box" }));
/** @type {__VLS_StyleScopedClasses['home-box']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "home-box__bg section-media-bg" }));
/** @type {__VLS_StyleScopedClasses['home-box__bg']} */ ;
/** @type {__VLS_StyleScopedClasses['section-media-bg']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img, __VLS_intrinsics.img)(__assign({ class: "home-box__img section-media-img" }, { src: "@/assets/img/trading/platform/account-type-2.jpg", alt: "" }));
/** @type {__VLS_StyleScopedClasses['home-box__img']} */ ;
/** @type {__VLS_StyleScopedClasses['section-media-img']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "home-box__content" }));
/** @type {__VLS_StyleScopedClasses['home-box__content']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "home-box__title" }));
/** @type {__VLS_StyleScopedClasses['home-box__title']} */ ;
(__VLS_ctx.staticDataStore.accountDataList.title);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "home-box__list" }));
/** @type {__VLS_StyleScopedClasses['home-box__list']} */ ;
for (var _i = 0, _a = __VLS_vFor((__VLS_ctx.staticDataStore.accountDataList.list)); _i < _a.length; _i++) {
    var _b = _a[_i], item = _b[0], index = _b[1];
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ key: (index) }, { class: "home-box__item" }));
    /** @type {__VLS_StyleScopedClasses['home-box__item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "home-box__item-header" }));
    /** @type {__VLS_StyleScopedClasses['home-box__item-header']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        src: "@/assets/img/trading/platform/home.jpg",
        alt: "",
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "home-box__item-title" }));
    /** @type {__VLS_StyleScopedClasses['home-box__item-title']} */ ;
    (item.title);
    var __VLS_0 = CustomButton_vue_1.default;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0(__assign({ 'onToPage': {} }, { name: (__VLS_ctx.t('register')), type: (1) })));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ 'onToPage': {} }, { name: (__VLS_ctx.t('register')), type: (1) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
    var __VLS_5 = void 0;
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
            [staticDataStore, staticDataStore, t, tools_1.browserRedirection, config_1.link_config,];
        },
    };
    var __VLS_3;
    var __VLS_4;
    for (var _c = 0, _d = __VLS_vFor((item.option)); _c < _d.length; _c++) {
        var _e = _d[_c], option = _e[0], index_1 = _e[1];
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ key: (index_1) }, { class: "home-box__option" }));
        /** @type {__VLS_StyleScopedClasses['home-box__option']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "name" }));
        /** @type {__VLS_StyleScopedClasses['name']} */ ;
        (option.name);
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "home-box__number" }));
        __VLS_asFunctionalDirective(__VLS_directives.vHtml, {})(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (option.number) }), null, null);
        /** @type {__VLS_StyleScopedClasses['home-box__number']} */ ;
        // @ts-ignore
        [];
    }
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({});
exports.default = {};
