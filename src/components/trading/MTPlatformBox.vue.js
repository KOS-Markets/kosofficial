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
var tick_svg_raw_1 = require("@/assets/img/trading/platform/tick.svg?raw");
var props = withDefaults(defineProps(), {
    data: function () { return ({
        title: '',
        intro: '',
        list: [],
        platform: [],
    }); },
});
var __VLS_defaults = {
    data: function () { return ({
        title: '',
        intro: '',
        list: [],
        platform: [],
    }); },
};
var __VLS_ctx = __assign(__assign(__assign(__assign({}, {}), {}), {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "mt-platform-box" }));
/** @type {__VLS_StyleScopedClasses['mt-platform-box']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "title" }));
/** @type {__VLS_StyleScopedClasses['title']} */ ;
(props.data.title);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "intro" }));
/** @type {__VLS_StyleScopedClasses['intro']} */ ;
(props.data.intro);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "container" }));
/** @type {__VLS_StyleScopedClasses['container']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "left" }));
/** @type {__VLS_StyleScopedClasses['left']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img, __VLS_intrinsics.img)({
    src: "@/assets/img/trading/platform/mtn.jpg",
    alt: "",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "right" }));
/** @type {__VLS_StyleScopedClasses['right']} */ ;
for (var _i = 0, _a = __VLS_vFor((props.data.list)); _i < _a.length; _i++) {
    var _b = _a[_i], item = _b[0], index = _b[1];
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ key: (index) }, { class: "item" }));
    /** @type {__VLS_StyleScopedClasses['item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "icon" }));
    __VLS_asFunctionalDirective(__VLS_directives.vHtml, {})(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.nike) }), null, null);
    /** @type {__VLS_StyleScopedClasses['icon']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "text" }));
    /** @type {__VLS_StyleScopedClasses['text']} */ ;
    (item);
    // @ts-ignore
    [tick_svg_raw_1.default,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "platform" }));
/** @type {__VLS_StyleScopedClasses['platform']} */ ;
for (var _c = 0, _d = __VLS_vFor((props.data.platform)); _c < _d.length; _c++) {
    var _e = _d[_c], item = _e[0], index = _e[1];
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ key: (index) }, { class: "platform-list" }));
    /** @type {__VLS_StyleScopedClasses['platform-list']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "platform-header" }));
    /** @type {__VLS_StyleScopedClasses['platform-header']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        src: (item.icon),
        alt: "",
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "text" }));
    /** @type {__VLS_StyleScopedClasses['text']} */ ;
    (item.title);
    for (var _f = 0, _g = __VLS_vFor((item.btn)); _f < _g.length; _f++) {
        var _h = _g[_f], item1 = _h[0], index1 = _h[1];
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ key: (index1) }, { class: "btn" }));
        /** @type {__VLS_StyleScopedClasses['btn']} */ ;
        var __VLS_0 = CustomButton_vue_1.default;
        // @ts-ignore
        var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0(__assign({ 'onToPage': {} }, { name: (item1.btnText), type: (1) })));
        var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ 'onToPage': {} }, { name: (item1.btnText), type: (1) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
        var __VLS_5 = void 0;
        var __VLS_6 = {
            /** @type {typeof __VLS_5.toPage} */
            onToPage: (item1.btnClick),
        };
        var __VLS_3;
        var __VLS_4;
        // @ts-ignore
        [];
    }
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    __defaults: __VLS_defaults,
    __typeProps: {},
});
exports.default = {};
