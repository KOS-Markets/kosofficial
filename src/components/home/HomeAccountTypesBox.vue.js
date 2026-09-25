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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var gsap_1 = require("gsap");
var ScrollTrigger_1 = require("gsap/ScrollTrigger");
var CustomButton_vue_1 = require("@/components/custom/CustomButton.vue");
var tools_1 = require("@/utils/tools");
var vue_i18n_1 = require("vue-i18n");
var staticData_1 = require("@/stores/staticData");
// 4 张 3D 资源图（按账户顺序：CENT=蓝, STD=红, STP=青, ECN=紫）
var cent_blue_jpg_1 = require("@/assets/img/home/accountTypes/cent-blue.jpg");
var std_red_jpg_1 = require("@/assets/img/home/accountTypes/std-red.jpg");
var stp_cyan_jpg_1 = require("@/assets/img/home/accountTypes/stp-cyan.jpg");
var ecn_purple_jpg_1 = require("@/assets/img/home/accountTypes/ecn-purple.jpg");
var config_1 = require("@/config");
var t = (0, vue_i18n_1.useI18n)().t;
var staticDataStore = (0, staticData_1.useStaticDataStore)();
gsap_1.gsap.registerPlugin(ScrollTrigger_1.ScrollTrigger);
var accountImages = [cent_blue_jpg_1.default, std_red_jpg_1.default, stp_cyan_jpg_1.default, ecn_purple_jpg_1.default];
var accountSection = (0, vue_1.ref)(null);
var parallaxContext;
(0, vue_1.onMounted)(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, vue_1.nextTick)()];
            case 1:
                _a.sent();
                if (!accountSection.value)
                    return [2 /*return*/];
                if (window.matchMedia('(prefers-reduced-motion: reduce)').matches)
                    return [2 /*return*/];
                // 严格参考 BANGHE HomeSpace：仅对卡片本身做单层小幅视差，不叠加图片层
                parallaxContext = gsap_1.gsap.context(function () {
                    var cardEls = gsap_1.gsap.utils.toArray('.account-card');
                    cardEls.forEach(function (card, index) {
                        var distance = 34 + index * 16;
                        gsap_1.gsap.fromTo(card, { y: -distance }, {
                            y: distance,
                            ease: 'none',
                            scrollTrigger: {
                                trigger: accountSection.value,
                                start: 'top bottom',
                                end: 'bottom top',
                                scrub: true,
                            },
                        });
                    });
                }, accountSection.value);
                return [2 /*return*/];
        }
    });
}); });
(0, vue_1.onBeforeUnmount)(function () {
    parallaxContext === null || parallaxContext === void 0 ? void 0 : parallaxContext.revert();
});
var __VLS_ctx = __assign(__assign({}, {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['account-types__brand']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)(__assign({ ref: "accountSection" }, { class: "account-types-section" }));
/** @type {__VLS_StyleScopedClasses['account-types-section']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "account-types__content" }));
/** @type {__VLS_StyleScopedClasses['account-types__content']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.aside, __VLS_intrinsics.aside)(__assign({ class: "account-types__copy" }));
/** @type {__VLS_StyleScopedClasses['account-types__copy']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)(__assign({ class: "account-types__brand" }));
/** @type {__VLS_StyleScopedClasses['account-types__brand']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({});
(__VLS_ctx.t('homebox1Sentence'));
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
(__VLS_ctx.t('homeAccountTypesCopy'));
var __VLS_0 = CustomButton_vue_1.default;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0(__assign({ 'onToPage': {} }, { name: (__VLS_ctx.t('register')), type: (1), size: ('large') })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ 'onToPage': {} }, { name: (__VLS_ctx.t('register')), type: (1), size: ('large') })], __VLS_functionalComponentArgsRest(__VLS_1), false));
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
        [t, t, t, tools_1.browserRedirection, config_1.link_config,];
    },
};
var __VLS_3;
var __VLS_4;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "account-types__cards" }));
/** @type {__VLS_StyleScopedClasses['account-types__cards']} */ ;
for (var _i = 0, _b = __VLS_vFor((__VLS_ctx.staticDataStore.accountDataList.list)); _i < _b.length; _i++) {
    var _c = _b[_i], item = _c[0], index = _c[1];
    __VLS_asFunctionalElement1(__VLS_intrinsics.article, __VLS_intrinsics.article)(__assign(__assign({ key: (index) }, { class: "account-card" }), { class: ('account-card-' + index) }));
    /** @type {__VLS_StyleScopedClasses['account-card']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "account-card__image" }));
    /** @type {__VLS_StyleScopedClasses['account-card__image']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        src: (__VLS_ctx.accountImages[index]),
        alt: (item.intro),
        loading: "lazy",
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "account-card__body" }));
    /** @type {__VLS_StyleScopedClasses['account-card__body']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "account-card__coin" }));
    /** @type {__VLS_StyleScopedClasses['account-card__coin']} */ ;
    (item.intro);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "account-card__currency" }));
    /** @type {__VLS_StyleScopedClasses['account-card__currency']} */ ;
    (__VLS_ctx.t('homebox1Sentence1'));
    (item.text);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "account-card__options" }));
    /** @type {__VLS_StyleScopedClasses['account-card__options']} */ ;
    for (var _d = 0, _e = __VLS_vFor(((_a = item.option) === null || _a === void 0 ? void 0 : _a.slice(0, 3))); _d < _e.length; _d++) {
        var _f = _e[_d], option = _f[0], idx = _f[1];
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "account-card__option" }, { key: (idx) }));
        /** @type {__VLS_StyleScopedClasses['account-card__option']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)(__assign({ class: "option-name" }));
        /** @type {__VLS_StyleScopedClasses['option-name']} */ ;
        (option.name);
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)(__assign({ class: "option-value" }));
        __VLS_asFunctionalDirective(__VLS_directives.vHtml, {})(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (option.number) }), null, null);
        /** @type {__VLS_StyleScopedClasses['option-value']} */ ;
        // @ts-ignore
        [t, staticDataStore, accountImages,];
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "account-card__actions" }));
    /** @type {__VLS_StyleScopedClasses['account-card__actions']} */ ;
    var __VLS_7 = CustomButton_vue_1.default;
    // @ts-ignore
    var __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7(__assign({ 'onToPage': {} }, { name: (__VLS_ctx.t('homeAccountTypesOpen')), type: (5) })));
    var __VLS_9 = __VLS_8.apply(void 0, __spreadArray([__assign({ 'onToPage': {} }, { name: (__VLS_ctx.t('homeAccountTypesOpen')), type: (5) })], __VLS_functionalComponentArgsRest(__VLS_8), false));
    var __VLS_12 = void 0;
    var __VLS_13 = {
        /** @type {typeof __VLS_12.toPage} */
        onToPage: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            return (__VLS_ctx.browserRedirection(__VLS_ctx.link_config.register_link));
            // @ts-ignore
            [t, tools_1.browserRedirection, config_1.link_config,];
        },
    };
    var __VLS_10;
    var __VLS_11;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({});
exports.default = {};
