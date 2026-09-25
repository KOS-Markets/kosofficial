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
var motion_ts_1 = require("@/utils/motion.ts");
var __svg_raw_1 = require("@/assets/img/home/homestepbox/+.svg?raw");
// import icon1 from '@/assets/img/home/homestepbox/mutli dimensional leaderboard.svg?raw'
// import icon2 from '@/assets/img/home/homestepbox/one click sync.svg?raw'
// import icon3 from '@/assets/img/home/homestepbox/dynamic risk control.svg?raw'
// import icon4 from '@/assets/img/home/homestepbox/trade replay.svg?raw'
var make_money_1_jpg_1 = require("@/assets/img/home/make-money-1.jpg");
var make_money_2_jpg_1 = require("@/assets/img/home/make-money-2.jpg");
var make_money_3_jpg_1 = require("@/assets/img/home/make-money-3.jpg");
var make_money_jpg_1 = require("@/assets/img/home/make-money.jpg");
var vue_i18n_1 = require("vue-i18n");
var t = (0, vue_i18n_1.useI18n)().t;
var dataList = (0, vue_1.ref)({
    title: t('homestepboxSentence'),
    list: [
        {
            icon: make_money_1_jpg_1.default,
            show: false,
            title: t('homestepboxSentence1'),
            intro: t('homestepboxSentence2')
        },
        {
            icon: make_money_2_jpg_1.default,
            show: false,
            title: t('homestepboxSentence3'),
            intro: t('homestepboxSentence4')
        },
        {
            icon: make_money_3_jpg_1.default,
            show: false,
            title: t('homestepboxSentence5'),
            intro: t('homestepboxSentence6')
        },
        // {
        //     icon: icon4,
        //     show: false,
        //     title: t('homestepboxSentence7'),
        //     intro: t('homestepboxSentence8')
        // }
    ]
});
var __VLS_ctx = __assign(__assign({}, {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['collapse-header']} */ ;
/** @type {__VLS_StyleScopedClasses['text']} */ ;
/** @type {__VLS_StyleScopedClasses['collapse-content']} */ ;
/** @type {__VLS_StyleScopedClasses['text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "home-step-box" }));
/** @type {__VLS_StyleScopedClasses['home-step-box']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "title" }));
/** @type {__VLS_StyleScopedClasses['title']} */ ;
(__VLS_ctx.dataList.title);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "container" }));
/** @type {__VLS_StyleScopedClasses['container']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "left" }));
/** @type {__VLS_StyleScopedClasses['left']} */ ;
var _loop_1 = function (item, index) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "collapse-item" }, { key: (index) }));
    /** @type {__VLS_StyleScopedClasses['collapse-item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            return (item.show = !item.show);
            // @ts-ignore
            [dataList, dataList,];
        } }, { class: "collapse-header" }));
    /** @type {__VLS_StyleScopedClasses['collapse-header']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)(__assign({ style: {} }, { src: (item.icon), alt: "" }));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "text" }));
    /** @type {__VLS_StyleScopedClasses['text']} */ ;
    (item.title);
    var __VLS_0 = (__VLS_ctx.motion.div) || (__VLS_ctx.motion.div);
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0(__assign({ class: "collapse-content" }, { animate: (item.show ? 'visible' : 'hidden'), initial: "hidden", variants: (__VLS_ctx.heightListAnimateVariants) })));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ class: "collapse-content" }, { animate: (item.show ? 'visible' : 'hidden'), initial: "hidden", variants: (__VLS_ctx.heightListAnimateVariants) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
    /** @type {__VLS_StyleScopedClasses['collapse-content']} */ ;
    var __VLS_5 = __VLS_3.slots.default;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "text" }));
    /** @type {__VLS_StyleScopedClasses['text']} */ ;
    (item.intro);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "icon" }));
    /** @type {__VLS_StyleScopedClasses['icon']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalDirective(__VLS_directives.vHtml, {})(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.plus) }), null, null);
    // @ts-ignore
    [motion_v_1.motion, motion_v_1.motion, motion_ts_1.heightListAnimateVariants, __svg_raw_1.default,];
    // @ts-ignore
    [];
};
var __VLS_3;
for (var _i = 0, _a = __VLS_vFor((__VLS_ctx.dataList.list)); _i < _a.length; _i++) {
    var _b = _a[_i], item = _b[0], index = _b[1];
    _loop_1(item, index);
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "right" }));
/** @type {__VLS_StyleScopedClasses['right']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    src: (__VLS_ctx.rightImg),
    alt: "",
});
// @ts-ignore
[make_money_jpg_1.default,];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({});
exports.default = {};
