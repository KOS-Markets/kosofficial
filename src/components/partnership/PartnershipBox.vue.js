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
var __VLS_ctx = __assign(__assign(__assign({}, {}), {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "partnership-box" }));
/** @type {__VLS_StyleScopedClasses['partnership-box']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img, __VLS_intrinsics.img)(__assign({ class: "partnership-background section-media-bg section-media-img" }, { src: "@/assets/img/partnership/Section2.png", alt: "" }));
/** @type {__VLS_StyleScopedClasses['partnership-background']} */ ;
/** @type {__VLS_StyleScopedClasses['section-media-bg']} */ ;
/** @type {__VLS_StyleScopedClasses['section-media-img']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "container" }));
/** @type {__VLS_StyleScopedClasses['container']} */ ;
if (props.data.title != '') {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "title" }));
    /** @type {__VLS_StyleScopedClasses['title']} */ ;
    (props.data.title);
}
if (props.data.intro != '') {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "intro" }));
    /** @type {__VLS_StyleScopedClasses['intro']} */ ;
    (props.data.intro);
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "list" }));
/** @type {__VLS_StyleScopedClasses['list']} */ ;
for (var _i = 0, _a = __VLS_vFor((props.data.list)); _i < _a.length; _i++) {
    var _b = _a[_i], item = _b[0], index = _b[1];
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ key: (index) }, { class: "item" }));
    /** @type {__VLS_StyleScopedClasses['item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "icon" }));
    /** @type {__VLS_StyleScopedClasses['icon']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        src: (item.icon),
        alt: "",
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "item-title" }));
    /** @type {__VLS_StyleScopedClasses['item-title']} */ ;
    (item.title);
    if (item.text != '') {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "text" }));
        /** @type {__VLS_StyleScopedClasses['text']} */ ;
        (item.text);
    }
}
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    __defaults: __VLS_defaults,
    __typeProps: {},
});
exports.default = {};
