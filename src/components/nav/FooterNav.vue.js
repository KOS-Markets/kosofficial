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
var app_1 = require("@/stores/app");
var store = (0, app_1.useAppStore)();
var vue_router_1 = require("vue-router");
var router = (0, vue_router_1.useRouter)();
var vue_i18n_1 = require("vue-i18n");
var t = (0, vue_i18n_1.useI18n)().t;
var profit_img_jpg_1 = require("@/assets/img/home/profit-img.jpg");
var __VLS_ctx = __assign(__assign({}, {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['content']} */ ;
/** @type {__VLS_StyleScopedClasses['list']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['item']} */ ;
/** @type {__VLS_StyleScopedClasses['text']} */ ;
/** @type {__VLS_StyleScopedClasses['content']} */ ;
/** @type {__VLS_StyleScopedClasses['list']} */ ;
/** @type {__VLS_StyleScopedClasses['item']} */ ;
/** @type {__VLS_StyleScopedClasses['text']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "footer-menu" }));
/** @type {__VLS_StyleScopedClasses['footer-menu']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "img-box" }));
/** @type {__VLS_StyleScopedClasses['img-box']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    src: (__VLS_ctx.profitImg),
    alt: "",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "container-box" }));
/** @type {__VLS_StyleScopedClasses['container-box']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "logo" }));
/** @type {__VLS_StyleScopedClasses['logo']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    src: "/long-logo-2.png",
    alt: "",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "text" }));
/** @type {__VLS_StyleScopedClasses['text']} */ ;
(__VLS_ctx.t('copyright'));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "content" }));
/** @type {__VLS_StyleScopedClasses['content']} */ ;
var _loop_1 = function (item, index) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "list" }, { key: (index) }));
    /** @type {__VLS_StyleScopedClasses['list']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "title" }));
    /** @type {__VLS_StyleScopedClasses['title']} */ ;
    (__VLS_ctx.t(item.name).toLocaleUpperCase());
    var _loop_3 = function (item1, index1) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign(__assign({ onClick: (function () { item1.path ? __VLS_ctx.router.push({ name: item1.path }) : ''; }) }, { class: "item" }), { key: (index1) }));
        /** @type {__VLS_StyleScopedClasses['item']} */ ;
        (__VLS_ctx.t(item1.name));
        // @ts-ignore
        [profit_img_jpg_1.default, t, t, t, store, router,];
    };
    for (var _f = 0, _g = __VLS_vFor((item.children)); _f < _g.length; _f++) {
        var _h = _g[_f], item1 = _h[0], index1 = _h[1];
        _loop_3(item1, index1);
    }
    if (item.children.length == 0) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ onClick: (function () { item.path ? __VLS_ctx.router.push({ name: item.path }) : ''; }) }, { class: "item" }));
        /** @type {__VLS_StyleScopedClasses['item']} */ ;
        (__VLS_ctx.t(item.name));
    }
    // @ts-ignore
    [t, router,];
};
for (var _i = 0, _a = __VLS_vFor((__VLS_ctx.store.menuList)); _i < _a.length; _i++) {
    var _b = _a[_i], item = _b[0], index = _b[1];
    _loop_1(item, index);
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "container-box-lg" }));
/** @type {__VLS_StyleScopedClasses['container-box-lg']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    src: "/long-logo-2.png",
    alt: "",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "content" }));
/** @type {__VLS_StyleScopedClasses['content']} */ ;
var _loop_2 = function (item, index) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "list" }, { key: (index) }));
    /** @type {__VLS_StyleScopedClasses['list']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "title" }));
    /** @type {__VLS_StyleScopedClasses['title']} */ ;
    (__VLS_ctx.t(item.name).toLocaleUpperCase());
    var _loop_4 = function (item1, index1) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign(__assign({ onClick: (function () { item1.path ? __VLS_ctx.router.push({ name: item1.path }) : ''; }) }, { class: "item" }), { key: (index1) }));
        /** @type {__VLS_StyleScopedClasses['item']} */ ;
        (__VLS_ctx.t(item1.name));
        // @ts-ignore
        [t, t, store, router,];
    };
    for (var _j = 0, _k = __VLS_vFor((item.children)); _j < _k.length; _j++) {
        var _l = _k[_j], item1 = _l[0], index1 = _l[1];
        _loop_4(item1, index1);
    }
    if (item.children.length == 0) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ onClick: (function () { item.path ? __VLS_ctx.router.push({ name: item.path }) : ''; }) }, { class: "item" }));
        /** @type {__VLS_StyleScopedClasses['item']} */ ;
        (__VLS_ctx.t(item.name));
    }
    // @ts-ignore
    [t, router,];
};
for (var _c = 0, _d = __VLS_vFor((__VLS_ctx.store.menuList)); _c < _d.length; _c++) {
    var _e = _d[_c], item = _e[0], index = _e[1];
    _loop_2(item, index);
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "text" }));
/** @type {__VLS_StyleScopedClasses['text']} */ ;
(__VLS_ctx.t('copyright'));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "footer-statement" }));
/** @type {__VLS_StyleScopedClasses['footer-statement']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "content" }));
/** @type {__VLS_StyleScopedClasses['content']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "content-text" }));
__VLS_asFunctionalDirective(__VLS_directives.vHtml, {})(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.t('footerContent')) }), null, null);
/** @type {__VLS_StyleScopedClasses['content-text']} */ ;
// @ts-ignore
[t, t,];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({});
exports.default = {};
