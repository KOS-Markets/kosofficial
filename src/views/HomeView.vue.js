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
var CustomTabList_vue_1 = require("@/components/custom/CustomTabList.vue");
var HomeAdvantagesBox_vue_1 = require("@/components/home/HomeAdvantagesBox.vue");
var HomeAccountTypesBox_vue_1 = require("@/components/home/HomeAccountTypesBox.vue");
var HomeStatsBox_vue_1 = require("@/components/home/HomeStatsBox.vue");
var HomeStepBox_vue_1 = require("@/components/home/HomeStepBox.vue");
var HomeGlobalStatsBox_vue_1 = require("@/components/home/HomeGlobalStatsBox.vue");
var HomePlatformBox_vue_1 = require("@/components/home/HomePlatformBox.vue");
var tools_1 = require("@/utils/tools");
var motion_v_1 = require("motion-v");
var vue_i18n_1 = require("vue-i18n");
var t = (0, vue_i18n_1.useI18n)().t;
var config_1 = require("@/config");
var __VLS_ctx = __assign(__assign({}, {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['intro']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "home-view" }));
/** @type {__VLS_StyleScopedClasses['home-view']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "carousel" }));
/** @type {__VLS_StyleScopedClasses['carousel']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "content" }));
/** @type {__VLS_StyleScopedClasses['content']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "content-text" }));
/** @type {__VLS_StyleScopedClasses['content-text']} */ ;
var __VLS_0 = (__VLS_ctx.motion.div) || (__VLS_ctx.motion.div);
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0(__assign({ class: "title" }, { initial: ({ opacity: 0, y: 30 }), whileInView: ({ opacity: 1, y: 0, transition: { delay: 0, duration: 0.7 } }) })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ class: "title" }, { initial: ({ opacity: 0, y: 30 }), whileInView: ({ opacity: 1, y: 0, transition: { delay: 0, duration: 0.7 } }) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
/** @type {__VLS_StyleScopedClasses['title']} */ ;
var __VLS_5 = __VLS_3.slots.default;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)(__assign({ class: "title-main" }));
/** @type {__VLS_StyleScopedClasses['title-main']} */ ;
(__VLS_ctx.t('carouselTitle'));
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)(__assign({ class: "title-accent" }));
/** @type {__VLS_StyleScopedClasses['title-accent']} */ ;
(__VLS_ctx.t('carouselTitleAccent'));
// @ts-ignore
[motion_v_1.motion, motion_v_1.motion, t, t,];
var __VLS_3;
var __VLS_6 = (__VLS_ctx.motion.div) || (__VLS_ctx.motion.div);
// @ts-ignore
var __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6(__assign({ class: "intro" }, { initial: ({ opacity: 0, y: 30 }), whileInView: ({ opacity: 1, y: 0, transition: { delay: 0.15, duration: 0.7 } }) })));
var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([__assign({ class: "intro" }, { initial: ({ opacity: 0, y: 30 }), whileInView: ({ opacity: 1, y: 0, transition: { delay: 0.15, duration: 0.7 } }) })], __VLS_functionalComponentArgsRest(__VLS_7), false));
/** @type {__VLS_StyleScopedClasses['intro']} */ ;
var __VLS_11 = __VLS_9.slots.default;
(__VLS_ctx.t('carouselIntro'));
// @ts-ignore
[motion_v_1.motion, motion_v_1.motion, t,];
var __VLS_9;
var __VLS_12 = (__VLS_ctx.motion.div) || (__VLS_ctx.motion.div);
// @ts-ignore
var __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12(__assign({ class: "actions" }, { initial: ({ opacity: 0, y: 30 }), whileInView: ({ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.7 } }) })));
var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([__assign({ class: "actions" }, { initial: ({ opacity: 0, y: 30 }), whileInView: ({ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.7 } }) })], __VLS_functionalComponentArgsRest(__VLS_13), false));
/** @type {__VLS_StyleScopedClasses['actions']} */ ;
var __VLS_17 = __VLS_15.slots.default;
var __VLS_18 = CustomButton_vue_1.default;
// @ts-ignore
var __VLS_19 = __VLS_asFunctionalComponent1(__VLS_18, new __VLS_18(__assign({ 'onToPage': {} }, { name: (__VLS_ctx.t('register')), type: (1), right: true })));
var __VLS_20 = __VLS_19.apply(void 0, __spreadArray([__assign({ 'onToPage': {} }, { name: (__VLS_ctx.t('register')), type: (1), right: true })], __VLS_functionalComponentArgsRest(__VLS_19), false));
var __VLS_23;
var __VLS_24 = {
    /** @type {typeof __VLS_23.toPage} */
    onToPage: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        return (__VLS_ctx.browserRedirection(__VLS_ctx.link_config.register_link));
        // @ts-ignore
        [motion_v_1.motion, motion_v_1.motion, t, tools_1.browserRedirection, config_1.link_config,];
    },
};
var __VLS_21;
var __VLS_22;
// @ts-ignore
[];
var __VLS_15;
var __VLS_25 = (__VLS_ctx.motion.div) || (__VLS_ctx.motion.div);
// @ts-ignore
var __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25(__assign({ class: "trust-bar" }, { initial: ({ opacity: 0, y: 30 }), whileInView: ({ opacity: 1, y: 0, transition: { delay: 0.45, duration: 0.7 } }) })));
var __VLS_27 = __VLS_26.apply(void 0, __spreadArray([__assign({ class: "trust-bar" }, { initial: ({ opacity: 0, y: 30 }), whileInView: ({ opacity: 1, y: 0, transition: { delay: 0.45, duration: 0.7 } }) })], __VLS_functionalComponentArgsRest(__VLS_26), false));
/** @type {__VLS_StyleScopedClasses['trust-bar']} */ ;
var __VLS_30 = __VLS_28.slots.default;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "trust-item" }));
/** @type {__VLS_StyleScopedClasses['trust-item']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img, __VLS_intrinsics.img)({
    src: "@/assets/img/home/icon-forex.png",
    alt: "",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
(__VLS_ctx.t('forex'));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "trust-item" }));
/** @type {__VLS_StyleScopedClasses['trust-item']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img, __VLS_intrinsics.img)({
    src: "@/assets/img/home/icon-indices.png",
    alt: "",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
(__VLS_ctx.t('indices'));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "trust-item" }));
/** @type {__VLS_StyleScopedClasses['trust-item']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img, __VLS_intrinsics.img)({
    src: "@/assets/img/home/icon-energy.png",
    alt: "",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
(__VLS_ctx.t('energy'));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "trust-item" }));
/** @type {__VLS_StyleScopedClasses['trust-item']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img, __VLS_intrinsics.img)({
    src: "@/assets/img/home/icon-metals.png",
    alt: "",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
(__VLS_ctx.t('metals'));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "trust-item" }));
/** @type {__VLS_StyleScopedClasses['trust-item']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img, __VLS_intrinsics.img)({
    src: "@/assets/img/home/icon-shares.png",
    alt: "",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
(__VLS_ctx.t('shares'));
// @ts-ignore
[motion_v_1.motion, motion_v_1.motion, t, t, t, t, t,];
var __VLS_28;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "mobile-img" }));
/** @type {__VLS_StyleScopedClasses['mobile-img']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    src: "@/assets/img/home/hero.png",
    alt: "",
});
var __VLS_31 = (__VLS_ctx.motion.div) || (__VLS_ctx.motion.div);
// @ts-ignore
var __VLS_32 = __VLS_asFunctionalComponent1(__VLS_31, new __VLS_31(__assign({ class: "hero-media" }, { initial: ({ opacity: 0 }), whileInView: ({ opacity: 1 }) })));
var __VLS_33 = __VLS_32.apply(void 0, __spreadArray([__assign({ class: "hero-media" }, { initial: ({ opacity: 0 }), whileInView: ({ opacity: 1 }) })], __VLS_functionalComponentArgsRest(__VLS_32), false));
/** @type {__VLS_StyleScopedClasses['hero-media']} */ ;
var __VLS_36 = __VLS_34.slots.default;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "hero-glow hero-glow-1" }));
/** @type {__VLS_StyleScopedClasses['hero-glow']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-glow-1']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "hero-glow hero-glow-2" }));
/** @type {__VLS_StyleScopedClasses['hero-glow']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-glow-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "hero-glow hero-glow-3" }));
/** @type {__VLS_StyleScopedClasses['hero-glow']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-glow-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "hero-glow hero-glow-4" }));
/** @type {__VLS_StyleScopedClasses['hero-glow']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-glow-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "hero-img-wrap" }));
/** @type {__VLS_StyleScopedClasses['hero-img-wrap']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img, __VLS_intrinsics.img)({
    src: "@/assets/img/home/hero.png",
    alt: "",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "hero-orbits" }));
/** @type {__VLS_StyleScopedClasses['hero-orbits']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "orb orb-orange" }));
/** @type {__VLS_StyleScopedClasses['orb']} */ ;
/** @type {__VLS_StyleScopedClasses['orb-orange']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "orb orb-blue orb-blue-1" }));
/** @type {__VLS_StyleScopedClasses['orb']} */ ;
/** @type {__VLS_StyleScopedClasses['orb-blue']} */ ;
/** @type {__VLS_StyleScopedClasses['orb-blue-1']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "orb orb-blue orb-blue-2" }));
/** @type {__VLS_StyleScopedClasses['orb']} */ ;
/** @type {__VLS_StyleScopedClasses['orb-blue']} */ ;
/** @type {__VLS_StyleScopedClasses['orb-blue-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "orb orb-blue orb-blue-3" }));
/** @type {__VLS_StyleScopedClasses['orb']} */ ;
/** @type {__VLS_StyleScopedClasses['orb-blue']} */ ;
/** @type {__VLS_StyleScopedClasses['orb-blue-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "orb orb-blue orb-blue-4" }));
/** @type {__VLS_StyleScopedClasses['orb']} */ ;
/** @type {__VLS_StyleScopedClasses['orb-blue']} */ ;
/** @type {__VLS_StyleScopedClasses['orb-blue-4']} */ ;
// @ts-ignore
[motion_v_1.motion, motion_v_1.motion,];
var __VLS_34;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "ticker-section" }));
/** @type {__VLS_StyleScopedClasses['ticker-section']} */ ;
var __VLS_37 = CustomTabList_vue_1.default;
// @ts-ignore
var __VLS_38 = __VLS_asFunctionalComponent1(__VLS_37, new __VLS_37({}));
var __VLS_39 = __VLS_38.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_38), false));
var __VLS_42 = HomeAdvantagesBox_vue_1.default;
// @ts-ignore
var __VLS_43 = __VLS_asFunctionalComponent1(__VLS_42, new __VLS_42({}));
var __VLS_44 = __VLS_43.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_43), false));
var __VLS_47 = HomeAccountTypesBox_vue_1.default;
// @ts-ignore
var __VLS_48 = __VLS_asFunctionalComponent1(__VLS_47, new __VLS_47({}));
var __VLS_49 = __VLS_48.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_48), false));
var __VLS_52 = HomeStatsBox_vue_1.default;
// @ts-ignore
var __VLS_53 = __VLS_asFunctionalComponent1(__VLS_52, new __VLS_52({}));
var __VLS_54 = __VLS_53.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_53), false));
var __VLS_57 = HomeStepBox_vue_1.default;
// @ts-ignore
var __VLS_58 = __VLS_asFunctionalComponent1(__VLS_57, new __VLS_57({}));
var __VLS_59 = __VLS_58.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_58), false));
var __VLS_62 = HomeGlobalStatsBox_vue_1.default;
// @ts-ignore
var __VLS_63 = __VLS_asFunctionalComponent1(__VLS_62, new __VLS_62({}));
var __VLS_64 = __VLS_63.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_63), false));
var __VLS_67 = HomePlatformBox_vue_1.default;
// @ts-ignore
var __VLS_68 = __VLS_asFunctionalComponent1(__VLS_67, new __VLS_67({}));
var __VLS_69 = __VLS_68.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_68), false));
// @ts-ignore
[];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({});
exports.default = {};
