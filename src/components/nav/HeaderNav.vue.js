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
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var motion_v_1 = require("motion-v");
var config_1 = require("@/config");
var ease = (0, motion_v_1.spring)(0.4, 0.7);
var CustomButton_vue_1 = require("@/components/custom/CustomButton.vue");
var CustomLanguage_vue_1 = require("@/components/custom/CustomLanguage.vue");
var tools_1 = require("@/utils/tools");
var app_1 = require("@/stores/app");
var store = (0, app_1.useAppStore)();
var vue_router_1 = require("vue-router");
var router = (0, vue_router_1.useRouter)();
var vue_i18n_1 = require("vue-i18n");
var t = (0, vue_i18n_1.useI18n)().t;
var Language_svg_raw_1 = require("@/assets/img/nav/Language.svg?raw");
var config_2 = require("@/language/config");
var pageSettings_1 = require("@/stores/pageSettings");
var pageSettingsStore = (0, pageSettings_1.usePageSettingsStore)();
var currentLanguage = (0, vue_1.computed)(function () { return (0, config_2.getLanguageConfig)(pageSettingsStore.lang); });
var props = withDefaults(defineProps(), { mode: 'sticky' });
var header = (0, vue_1.ref)(null);
var sideDrawer = (0, vue_1.ref)(false);
var heightListAnimateVariants = {
    visible: function () { return ({
        height: 'auto',
        opacity: 1,
        paddingTop: 10,
        paddingBottom: 10,
        transition: { duration: 0.3 }
    }); },
    hidden: { height: 0, opacity: 0 }
};
var debouncedResize = function () {
    sideDrawer.value = false;
};
var dataScroll = function () {
    if (!header.value)
        return;
    var scroll = document.documentElement.scrollTop || document.body.scrollTop;
    var progress = Math.min(scroll * 0.005, 1);
    header.value.style.setProperty('--_progress', String(progress));
};
var toggleDrawer = function () {
    sideDrawer.value = !sideDrawer.value;
};
var toggleMobileMenu = function (index) {
    var _a;
    var item = store.menuList[index];
    if (!item)
        return;
    if (((_a = item.children) === null || _a === void 0 ? void 0 : _a.length) > 0) {
        item.childrenShow = !item.childrenShow;
    }
    else {
        sideDrawer.value = false;
        router.push({ name: item.path || item.name });
    }
};
var selectLang = function (lang) { return __awaiter(void 0, void 0, void 0, function () {
    var err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, pageSettingsStore.setLang(lang)];
            case 1:
                _a.sent();
                router.push({ name: 'home' }).then(function () {
                    router.go(0);
                });
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                console.warn(err_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
(0, vue_1.onMounted)(function () {
    window.addEventListener('resize', debouncedResize);
    if (props.mode === 'fixed') {
        window.addEventListener('scroll', dataScroll);
        dataScroll();
    }
});
(0, vue_1.onUnmounted)(function () {
    window.removeEventListener('resize', debouncedResize);
    if (props.mode === 'fixed') {
        window.removeEventListener('scroll', dataScroll);
    }
});
var __VLS_defaults = { mode: 'sticky' };
var __VLS_ctx = __assign(__assign(__assign(__assign({}, {}), {}), {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['sub-list']} */ ;
/** @type {__VLS_StyleScopedClasses['text']} */ ;
/** @type {__VLS_StyleScopedClasses['sub-list']} */ ;
/** @type {__VLS_StyleScopedClasses['sub-list']} */ ;
/** @type {__VLS_StyleScopedClasses['item']} */ ;
/** @type {__VLS_StyleScopedClasses['sub-list']} */ ;
/** @type {__VLS_StyleScopedClasses['sub-item']} */ ;
/** @type {__VLS_StyleScopedClasses['sub-item']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign(__assign({ class: "header-view" }, { class: ("is-".concat(__VLS_ctx.mode)) }), { ref: "header" }));
/** @type {__VLS_StyleScopedClasses['header-view']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "header-content" }));
/** @type {__VLS_StyleScopedClasses['header-content']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "header-left" }));
/** @type {__VLS_StyleScopedClasses['header-left']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)(__assign({ onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        return (__VLS_ctx.router.push({ name: 'home' }));
        // @ts-ignore
        [mode, router,];
    } }, { src: "/long-logo-2.png", alt: "" }));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "pc" }));
/** @type {__VLS_StyleScopedClasses['pc']} */ ;
var _loop_1 = function (item, index) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            return (item.children.length == 0 ? __VLS_ctx.router.push({ name: item.path }) : '');
            // @ts-ignore
            [router, store,];
        } }, { class: "item" }), { key: (index) }));
    /** @type {__VLS_StyleScopedClasses['item']} */ ;
    (__VLS_ctx.t(item.name));
    if (item.children && item.children.length > 0) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "sub-list" }));
        /** @type {__VLS_StyleScopedClasses['sub-list']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "sub-content" }));
        /** @type {__VLS_StyleScopedClasses['sub-content']} */ ;
        var _loop_4 = function (item1, index1) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign(__assign({ onClick: (function () { item1.path ? __VLS_ctx.router.push({ name: item1.path }) : ''; }) }, { class: "sub-item" }), { key: (index1) }));
            /** @type {__VLS_StyleScopedClasses['sub-item']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "sub-item-left" }));
            /** @type {__VLS_StyleScopedClasses['sub-item-left']} */ ;
            if (item1.icon) {
                var __VLS_0 = void 0;
                /** @ts-ignore @type { | typeof __VLS_components.elIcon | typeof __VLS_components.ElIcon | typeof __VLS_components['el-icon'] | typeof __VLS_components.elIcon | typeof __VLS_components.ElIcon | typeof __VLS_components['el-icon']} */
                elIcon;
                // @ts-ignore
                var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
                var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_1), false));
                var __VLS_5 = __VLS_3.slots.default;
                var __VLS_6 = (item1.icon);
                // @ts-ignore
                var __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({}));
                var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_7), false));
                // @ts-ignore
                [router, t,];
            }
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "sub-item-right" }));
            /** @type {__VLS_StyleScopedClasses['sub-item-right']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "name" }));
            /** @type {__VLS_StyleScopedClasses['name']} */ ;
            (__VLS_ctx.t(item1.name));
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "sub-title" }));
            /** @type {__VLS_StyleScopedClasses['sub-title']} */ ;
            (__VLS_ctx.t(item1.subTitle));
            // @ts-ignore
            [t, t,];
        };
        for (var _h = 0, _j = __VLS_vFor((item.children)); _h < _j.length; _h++) {
            var _k = _j[_h], item1 = _k[0], index1 = _k[1];
            _loop_4(item1, index1);
        }
    }
    // @ts-ignore
    [];
};
var __VLS_3;
for (var _i = 0, _a = __VLS_vFor((__VLS_ctx.store.menuList)); _i < _a.length; _i++) {
    var _b = _a[_i], item = _b[0], index = _b[1];
    _loop_1(item, index);
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "header-right" }));
/** @type {__VLS_StyleScopedClasses['header-right']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "pc" }));
/** @type {__VLS_StyleScopedClasses['pc']} */ ;
var __VLS_11 = CustomButton_vue_1.default;
// @ts-ignore
var __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11(__assign(__assign({ 'onToPage': {} }, { name: (__VLS_ctx.t('login')), type: (2) }), { style: {} })));
var __VLS_13 = __VLS_12.apply(void 0, __spreadArray([__assign(__assign({ 'onToPage': {} }, { name: (__VLS_ctx.t('login')), type: (2) }), { style: {} })], __VLS_functionalComponentArgsRest(__VLS_12), false));
var __VLS_16;
var __VLS_17 = {
    /** @type {typeof __VLS_16.toPage} */
    onToPage: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        return (__VLS_ctx.browserRedirection(__VLS_ctx.link_config.login_link));
        // @ts-ignore
        [t, tools_1.browserRedirection, config_1.link_config,];
    },
};
var __VLS_14;
var __VLS_15;
var __VLS_18 = CustomButton_vue_1.default;
// @ts-ignore
var __VLS_19 = __VLS_asFunctionalComponent1(__VLS_18, new __VLS_18(__assign(__assign({ 'onToPage': {} }, { name: (__VLS_ctx.t('register')), type: (1) }), { style: {} })));
var __VLS_20 = __VLS_19.apply(void 0, __spreadArray([__assign(__assign({ 'onToPage': {} }, { name: (__VLS_ctx.t('register')), type: (1) }), { style: {} })], __VLS_functionalComponentArgsRest(__VLS_19), false));
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
        [t, tools_1.browserRedirection, config_1.link_config,];
    },
};
var __VLS_21;
var __VLS_22;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "more-language-btn" }));
/** @type {__VLS_StyleScopedClasses['more-language-btn']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "icon" }, { style: ("--icon: url(".concat(__VLS_ctx.langIcon, ")")) }));
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "text" }));
/** @type {__VLS_StyleScopedClasses['text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "name" }));
/** @type {__VLS_StyleScopedClasses['name']} */ ;
(__VLS_ctx.currentLanguage.label);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "code" }));
/** @type {__VLS_StyleScopedClasses['code']} */ ;
(__VLS_ctx.currentLanguage.shortLabel);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "sub-list" }));
/** @type {__VLS_StyleScopedClasses['sub-list']} */ ;
var _loop_2 = function (language) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign(__assign(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            return (__VLS_ctx.selectLang(language.code));
            // @ts-ignore
            [Language_svg_raw_1.default, currentLanguage, currentLanguage, config_2.LANGUAGE_CONFIGS, selectLang,];
        } }, { class: "text" }), { class: ({ choose: __VLS_ctx.pageSettingsStore.lang === language.code }) }), { key: (language.code) }));
    /** @type {__VLS_StyleScopedClasses['text']} */ ;
    /** @type {__VLS_StyleScopedClasses['choose']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "name" }));
    /** @type {__VLS_StyleScopedClasses['name']} */ ;
    (language.label);
    // @ts-ignore
    [pageSettingsStore,];
};
for (var _c = 0, _d = __VLS_vFor((__VLS_ctx.LANGUAGE_CONFIGS)); _c < _d.length; _c++) {
    var language = _d[_c][0];
    _loop_2(language);
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ onClick: (__VLS_ctx.toggleDrawer) }, { class: "menu" }));
/** @type {__VLS_StyleScopedClasses['menu']} */ ;
var __VLS_25 = (__VLS_ctx.motion.nav) || (__VLS_ctx.motion.nav);
// @ts-ignore
var __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25(__assign(__assign({ initial: "closed", animate: (__VLS_ctx.sideDrawer ? 'open' : 'closed'), ref: "containerRef" }, { class: "nav" }), { style: {} })));
var __VLS_27 = __VLS_26.apply(void 0, __spreadArray([__assign(__assign({ initial: "closed", animate: (__VLS_ctx.sideDrawer ? 'open' : 'closed'), ref: "containerRef" }, { class: "nav" }), { style: {} })], __VLS_functionalComponentArgsRest(__VLS_26), false));
var __VLS_30;
/** @type {__VLS_StyleScopedClasses['nav']} */ ;
var __VLS_32 = __VLS_28.slots.default;
__VLS_asFunctionalElement1(__VLS_intrinsics.svg, __VLS_intrinsics.svg)({
    width: "30",
    height: "30",
    viewBox: "0 0 23 18",
});
var __VLS_33 = (__VLS_ctx.motion.path);
// @ts-ignore
var __VLS_34 = __VLS_asFunctionalComponent1(__VLS_33, new __VLS_33({
    fill: "transparent",
    strokeWidth: "1",
    stroke: "var(--text-color)",
    strokeLinecap: "round",
    variants: ({
        closed: { d: 'M 2 4 L 20 4' },
        open: { d: 'M 3 16.5 L 20 2.5' },
    }),
}));
var __VLS_35 = __VLS_34.apply(void 0, __spreadArray([{
        fill: "transparent",
        strokeWidth: "1",
        stroke: "var(--text-color)",
        strokeLinecap: "round",
        variants: ({
            closed: { d: 'M 2 4 L 20 4' },
            open: { d: 'M 3 16.5 L 20 2.5' },
        }),
    }], __VLS_functionalComponentArgsRest(__VLS_34), false));
var __VLS_38 = (__VLS_ctx.motion.path);
// @ts-ignore
var __VLS_39 = __VLS_asFunctionalComponent1(__VLS_38, new __VLS_38({
    fill: "transparent",
    strokeWidth: "1",
    stroke: "var(--text-color)",
    strokeLinecap: "round",
    variants: ({
        closed: { d: 'M 5 9.423 L 30 9.423', opacity: 1 },
        open: { d: 'M 0 9.423 L 0 9.423', opacity: 0 },
    }),
    transition: ({ duration: 0.1 }),
}));
var __VLS_40 = __VLS_39.apply(void 0, __spreadArray([{
        fill: "transparent",
        strokeWidth: "1",
        stroke: "var(--text-color)",
        strokeLinecap: "round",
        variants: ({
            closed: { d: 'M 5 9.423 L 30 9.423', opacity: 1 },
            open: { d: 'M 0 9.423 L 0 9.423', opacity: 0 },
        }),
        transition: ({ duration: 0.1 }),
    }], __VLS_functionalComponentArgsRest(__VLS_39), false));
var __VLS_43 = (__VLS_ctx.motion.path);
// @ts-ignore
var __VLS_44 = __VLS_asFunctionalComponent1(__VLS_43, new __VLS_43({
    fill: "transparent",
    strokeWidth: "1",
    stroke: "var(--text-color)",
    strokeLinecap: "round",
    variants: ({
        closed: { d: 'M 2 15 L 20 15' },
        open: { d: 'M 3 2.5 L 20 16.346' },
    }),
}));
var __VLS_45 = __VLS_44.apply(void 0, __spreadArray([{
        fill: "transparent",
        strokeWidth: "1",
        stroke: "var(--text-color)",
        strokeLinecap: "round",
        variants: ({
            closed: { d: 'M 2 15 L 20 15' },
            open: { d: 'M 3 2.5 L 20 16.346' },
        }),
    }], __VLS_functionalComponentArgsRest(__VLS_44), false));
// @ts-ignore
[toggleDrawer, motion_v_1.motion, motion_v_1.motion, motion_v_1.motion, motion_v_1.motion, motion_v_1.motion, sideDrawer,];
var __VLS_28;
if (__VLS_ctx.sideDrawer) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "mobile-menu" }));
    /** @type {__VLS_StyleScopedClasses['mobile-menu']} */ ;
    var _loop_3 = function (item, index) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!(__VLS_ctx.sideDrawer))
                    throw 0;
                return (__VLS_ctx.toggleMobileMenu(index));
                // @ts-ignore
                [store, sideDrawer, toggleMobileMenu,];
            } }, { class: "mobile-menu-item" }), { key: (index) }));
        /** @type {__VLS_StyleScopedClasses['mobile-menu-item']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "content" }));
        /** @type {__VLS_StyleScopedClasses['content']} */ ;
        (__VLS_ctx.t(item.name));
        if (item.children.length > 0) {
            var __VLS_48 = void 0;
            /** @ts-ignore @type { | typeof __VLS_components.elIcon | typeof __VLS_components.ElIcon | typeof __VLS_components['el-icon'] | typeof __VLS_components.elIcon | typeof __VLS_components.ElIcon | typeof __VLS_components['el-icon']} */
            elIcon;
            // @ts-ignore
            var __VLS_49 = __VLS_asFunctionalComponent1(__VLS_48, new __VLS_48(__assign({ style: ({
                    transition: "transform ".concat(__VLS_ctx.ease),
                    transform: item.childrenShow ? 'rotate(180deg)' : '',
                }) })));
            var __VLS_50 = __VLS_49.apply(void 0, __spreadArray([__assign({ style: ({
                        transition: "transform ".concat(__VLS_ctx.ease),
                        transform: item.childrenShow ? 'rotate(180deg)' : '',
                    }) })], __VLS_functionalComponentArgsRest(__VLS_49), false));
            var __VLS_53 = __VLS_51.slots.default;
            var __VLS_54 = void 0;
            /** @ts-ignore @type { | typeof __VLS_components.ArrowDown} */
            ArrowDown;
            // @ts-ignore
            var __VLS_55 = __VLS_asFunctionalComponent1(__VLS_54, new __VLS_54({}));
            var __VLS_56 = __VLS_55.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_55), false));
            // @ts-ignore
            [t, ease,];
        }
        var __VLS_59 = (__VLS_ctx.motion.div) || (__VLS_ctx.motion.div);
        // @ts-ignore
        var __VLS_60 = __VLS_asFunctionalComponent1(__VLS_59, new __VLS_59(__assign({ class: "sub-list" }, { animate: (item.childrenShow ? 'visible' : 'hidden'), initial: "hidden", variants: (__VLS_ctx.heightListAnimateVariants) })));
        var __VLS_61 = __VLS_60.apply(void 0, __spreadArray([__assign({ class: "sub-list" }, { animate: (item.childrenShow ? 'visible' : 'hidden'), initial: "hidden", variants: (__VLS_ctx.heightListAnimateVariants) })], __VLS_functionalComponentArgsRest(__VLS_60), false));
        /** @type {__VLS_StyleScopedClasses['sub-list']} */ ;
        var __VLS_64 = __VLS_62.slots.default;
        var _loop_5 = function (item1, index1) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign(__assign({ onClick: function () {
                    var _a = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        _a[_i] = arguments[_i];
                    }
                    var $event = _a[0];
                    if (!(__VLS_ctx.sideDrawer))
                        throw 0;
                    __VLS_ctx.router.push({ name: item1.path });
                    __VLS_ctx.sideDrawer = false;
                    ;
                    // @ts-ignore
                    [router, motion_v_1.motion, motion_v_1.motion, sideDrawer, heightListAnimateVariants,];
                } }, { class: "sub-item" }), { key: (index1) }));
            /** @type {__VLS_StyleScopedClasses['sub-item']} */ ;
            (__VLS_ctx.t(item1.name));
            // @ts-ignore
            [t,];
        };
        for (var _l = 0, _m = __VLS_vFor((item.children)); _l < _m.length; _l++) {
            var _o = _m[_l], item1 = _o[0], index1 = _o[1];
            _loop_5(item1, index1);
        }
        // @ts-ignore
        [];
        // @ts-ignore
        [];
    };
    var __VLS_51, __VLS_62;
    for (var _e = 0, _f = __VLS_vFor((__VLS_ctx.store.menuList)); _e < _f.length; _e++) {
        var _g = _f[_e], item = _g[0], index = _g[1];
        _loop_3(item, index);
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "btn" }));
    /** @type {__VLS_StyleScopedClasses['btn']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ style: {} }));
    var __VLS_65 = CustomLanguage_vue_1.default;
    // @ts-ignore
    var __VLS_66 = __VLS_asFunctionalComponent1(__VLS_65, new __VLS_65({}));
    var __VLS_67 = __VLS_66.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_66), false));
    var __VLS_70 = CustomButton_vue_1.default;
    // @ts-ignore
    var __VLS_71 = __VLS_asFunctionalComponent1(__VLS_70, new __VLS_70(__assign(__assign({ 'onToPage': {} }, { name: (__VLS_ctx.t('login')), type: (2) }), { style: {} })));
    var __VLS_72 = __VLS_71.apply(void 0, __spreadArray([__assign(__assign({ 'onToPage': {} }, { name: (__VLS_ctx.t('login')), type: (2) }), { style: {} })], __VLS_functionalComponentArgsRest(__VLS_71), false));
    var __VLS_75 = void 0;
    var __VLS_76 = {
        /** @type {typeof __VLS_75.toPage} */
        onToPage: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            if (!(__VLS_ctx.sideDrawer))
                throw 0;
            return (__VLS_ctx.browserRedirection(__VLS_ctx.link_config.login_link));
            // @ts-ignore
            [t, tools_1.browserRedirection, config_1.link_config,];
        },
    };
    var __VLS_73;
    var __VLS_74;
    var __VLS_77 = CustomButton_vue_1.default;
    // @ts-ignore
    var __VLS_78 = __VLS_asFunctionalComponent1(__VLS_77, new __VLS_77(__assign({ 'onToPage': {} }, { name: (__VLS_ctx.t('register')), type: (1) })));
    var __VLS_79 = __VLS_78.apply(void 0, __spreadArray([__assign({ 'onToPage': {} }, { name: (__VLS_ctx.t('register')), type: (1) })], __VLS_functionalComponentArgsRest(__VLS_78), false));
    var __VLS_82 = void 0;
    var __VLS_83 = {
        /** @type {typeof __VLS_82.toPage} */
        onToPage: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            if (!(__VLS_ctx.sideDrawer))
                throw 0;
            return (__VLS_ctx.browserRedirection(__VLS_ctx.link_config.register_link));
            // @ts-ignore
            [t, tools_1.browserRedirection, config_1.link_config,];
        },
    };
    var __VLS_80;
    var __VLS_81;
}
// @ts-ignore
var __VLS_31 = __VLS_30;
// @ts-ignore
[];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    __defaults: __VLS_defaults,
    __typeProps: {},
});
exports.default = {};
