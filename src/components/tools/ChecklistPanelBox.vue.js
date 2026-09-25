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
Object.defineProperty(exports, "__esModule", { value: true });
var tick_svg_raw_1 = require("@/assets/img/trading/platform/tick.svg?raw");
var props = withDefaults(defineProps(), {
    data: function () { return ({
        title: '',
        intro: '',
        list: [],
    }); },
});
var __VLS_defaults = {
    data: function () { return ({
        title: '',
        intro: '',
        list: [],
    }); },
};
var __VLS_ctx = __assign(__assign(__assign(__assign({}, {}), {}), {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "trading-signals-box" }));
/** @type {__VLS_StyleScopedClasses['trading-signals-box']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "title" }));
/** @type {__VLS_StyleScopedClasses['title']} */ ;
(props.data.title);
if (props.data.intro != '') {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "intro" }));
    /** @type {__VLS_StyleScopedClasses['intro']} */ ;
    (props.data.intro);
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "container" }));
/** @type {__VLS_StyleScopedClasses['container']} */ ;
for (var _i = 0, _a = __VLS_vFor((props.data.list)); _i < _a.length; _i++) {
    var _b = _a[_i], item = _b[0], index = _b[1];
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ key: (index) }, { class: "item" }));
    /** @type {__VLS_StyleScopedClasses['item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "icon" }));
    __VLS_asFunctionalDirective(__VLS_directives.vHtml, {})(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.nike) }), null, null);
    /** @type {__VLS_StyleScopedClasses['icon']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "text" }));
    /** @type {__VLS_StyleScopedClasses['text']} */ ;
    (item.text);
    // @ts-ignore
    [tick_svg_raw_1.default,];
}
// @ts-ignore
[];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    __defaults: __VLS_defaults,
    __typeProps: {},
});
exports.default = {};
