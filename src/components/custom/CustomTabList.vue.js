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
var bignumber_js_1 = require("bignumber.js");
var vue_i18n_1 = require("vue-i18n");
var t = (0, vue_i18n_1.useI18n)().t;
var wsConnect_1 = require("@/stores/wsConnect");
var wsConnectStore = (0, wsConnect_1.useWsConnectStore)();
require("swiper/css");
var bundle_1 = require("swiper/element/bundle");
(0, bundle_1.register)();
var swiperInstance = (0, vue_1.ref)(null);
var onSwiper = function (swiper) {
    swiperInstance.value = swiper;
};
var handleMouseEnter = function () {
    if (!swiperInstance.value)
        return;
    var currentTranslate = swiperInstance.value.getTranslate();
    swiperInstance.value.translateTo(currentTranslate, 0);
    swiperInstance.value.autoplay.stop();
    swiperInstance.value.translateTo(currentTranslate, 3000);
};
var handleMouseLeave = function () {
    if (!swiperInstance.value)
        return;
    swiperInstance.value.autoplay.start();
};
var props = withDefaults(defineProps(), {
    active: 0,
});
var activeTab = (0, vue_1.ref)(props.active);
var tabs = (0, vue_1.computed)(function () { return [
    { label: t('forex'), type: 0 },
    { label: t('indices'), type: 1 },
    { label: t('energy'), type: 3 },
    { label: t('metals'), type: 4 },
    { label: t('shares'), type: 5 },
]; });
var list = (0, vue_1.computed)(function () {
    return wsConnectStore.coinList.filter(function (item) { return item.type == activeTab.value; });
});
var changeTab = function (num) {
    activeTab.value = num;
    wsConnectStore.subscribePrice(activeTab.value);
};
function formatPrice(symbol, decimal) {
    var quote = wsConnectStore.market[symbol];
    if (!quote)
        return '0.' + '0'.repeat(decimal);
    var raw = quote.last || quote.askPrice || 0;
    if (raw === 0)
        return '0.' + '0'.repeat(decimal);
    return (0, bignumber_js_1.default)(raw).decimalPlaces(decimal, bignumber_js_1.default.ROUND_FLOOR).toString();
}
function hashCode(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
}
function getIconStyle(symbol) {
    var hash = hashCode(symbol);
    var hue = Math.abs(hash) % 360;
    return {
        background: "linear-gradient(135deg, hsl(".concat(hue, ", 72%, 58%), hsl(").concat((hue + 45) % 360, ", 72%, 46%))")
    };
}
function getCurrencyInitials(name) {
    return name.slice(0, 2).toUpperCase();
}
function getChangeData(symbol) {
    var hash = hashCode(symbol);
    var value = (Math.abs(hash) % 140) / 100; // 0.00 - 1.40
    var up = hash % 2 === 0;
    return { value: value, up: up };
}
function getChangeClass(symbol) {
    return getChangeData(symbol).up ? 'up' : 'down';
}
function getChangeIcon(symbol) {
    return getChangeData(symbol).up ? '▲' : '▼';
}
function getChangePercent(symbol) {
    return getChangeData(symbol).value.toFixed(2);
}
var __VLS_defaults = {
    active: 0,
};
var __VLS_ctx = __assign(__assign(__assign(__assign({}, {}), {}), {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['info']} */ ;
/** @type {__VLS_StyleScopedClasses['change']} */ ;
/** @type {__VLS_StyleScopedClasses['change']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['info']} */ ;
/** @type {__VLS_StyleScopedClasses['name']} */ ;
/** @type {__VLS_StyleScopedClasses['price']} */ ;
/** @type {__VLS_StyleScopedClasses['change']} */ ;
/** @type {__VLS_StyleScopedClasses['up']} */ ;
/** @type {__VLS_StyleScopedClasses['down']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "custom-tab-list" }));
/** @type {__VLS_StyleScopedClasses['custom-tab-list']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "custom-tab" }));
/** @type {__VLS_StyleScopedClasses['custom-tab']} */ ;
var _loop_1 = function (tab) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign(__assign(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            return (__VLS_ctx.changeTab(tab.type));
            // @ts-ignore
            [tabs, changeTab,];
        } }, { key: (tab.type) }), { class: "custom-tab-item" }), { class: ({ 'active': __VLS_ctx.activeTab == tab.type }) }));
    /** @type {__VLS_StyleScopedClasses['custom-tab-item']} */ ;
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    (tab.label);
    // @ts-ignore
    [activeTab,];
};
for (var _i = 0, _a = __VLS_vFor((__VLS_ctx.tabs)); _i < _a.length; _i++) {
    var tab = _a[_i][0];
    _loop_1(tab);
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "custom-list" }));
/** @type {__VLS_StyleScopedClasses['custom-list']} */ ;
var __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.swiper | typeof __VLS_components.Swiper | typeof __VLS_components.swiper | typeof __VLS_components.Swiper} */
swiper;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0(__assign(__assign(__assign(__assign(__assign({ 'onSwiper': {} }, { 'onMouseenter': {} }), { 'onMouseleave': {} }), { key: (__VLS_ctx.activeTab) }), { style: {} }), { freeMode: (true), loop: (true), speed: (3000), allowTouchMove: (false), autoplay: ({
        delay: 0,
        disableOnInteraction: false,
    }), slidesPerView: ('auto'), spaceBetween: (16) })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign(__assign(__assign(__assign({ 'onSwiper': {} }, { 'onMouseenter': {} }), { 'onMouseleave': {} }), { key: (__VLS_ctx.activeTab) }), { style: {} }), { freeMode: (true), loop: (true), speed: (3000), allowTouchMove: (false), autoplay: ({
            delay: 0,
            disableOnInteraction: false,
        }), slidesPerView: ('auto'), spaceBetween: (16) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_5;
var __VLS_6 = {
    /** @type {typeof __VLS_5.swiper} */
    onSwiper: (__VLS_ctx.onSwiper),
};
var __VLS_7 = {
    /** @type {typeof __VLS_5.mouseenter} */
    onMouseenter: (__VLS_ctx.handleMouseEnter),
};
var __VLS_8 = {
    /** @type {typeof __VLS_5.mouseleave} */
    onMouseleave: (__VLS_ctx.handleMouseLeave),
};
var __VLS_9 = __VLS_3.slots.default;
for (var _b = 0, _c = __VLS_vFor((__VLS_ctx.list)); _b < _c.length; _b++) {
    var item = _c[_b][0];
    var __VLS_10 = void 0;
    /** @ts-ignore @type { | typeof __VLS_components.swiperSlide | typeof __VLS_components.SwiperSlide | typeof __VLS_components['swiper-slide'] | typeof __VLS_components.swiperSlide | typeof __VLS_components.SwiperSlide | typeof __VLS_components['swiper-slide']} */
    swiperSlide;
    // @ts-ignore
    var __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10(__assign({ key: (item.symbol) }, { class: "ticker-slide" })));
    var __VLS_12 = __VLS_11.apply(void 0, __spreadArray([__assign({ key: (item.symbol) }, { class: "ticker-slide" })], __VLS_functionalComponentArgsRest(__VLS_11), false));
    /** @type {__VLS_StyleScopedClasses['ticker-slide']} */ ;
    var __VLS_15 = __VLS_13.slots.default;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "custom-list-item" }));
    /** @type {__VLS_StyleScopedClasses['custom-list-item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "icon" }, { style: (__VLS_ctx.getIconStyle(item.symbol)) }));
    /** @type {__VLS_StyleScopedClasses['icon']} */ ;
    (__VLS_ctx.getCurrencyInitials(item.name));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "info" }));
    /** @type {__VLS_StyleScopedClasses['info']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "name" }));
    /** @type {__VLS_StyleScopedClasses['name']} */ ;
    (item.name);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "price" }));
    /** @type {__VLS_StyleScopedClasses['price']} */ ;
    (__VLS_ctx.formatPrice(item.symbol, item.decimal));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "change" }, { class: (__VLS_ctx.getChangeClass(item.symbol)) }));
    /** @type {__VLS_StyleScopedClasses['change']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)(__assign({ class: "arrow" }));
    /** @type {__VLS_StyleScopedClasses['arrow']} */ ;
    (__VLS_ctx.getChangeIcon(item.symbol));
    (__VLS_ctx.getChangePercent(item.symbol));
    // @ts-ignore
    [activeTab, onSwiper, handleMouseEnter, handleMouseLeave, list, getIconStyle, getCurrencyInitials, formatPrice, getChangeClass, getChangeIcon, getChangePercent,];
    var __VLS_13;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_3;
var __VLS_4;
// @ts-ignore
[];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    __defaults: __VLS_defaults,
    __typeProps: {},
});
exports.default = {};
