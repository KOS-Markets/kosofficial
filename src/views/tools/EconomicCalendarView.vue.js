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
var CustomCarousel_vue_1 = require("@/components/custom/CustomCarousel.vue");
var tools_1 = require("@/utils/tools");
var index_1 = require("@/apis/index");
var bg_jpg_1 = require("@/assets/img/tools/economic-calendar/bg.jpg");
var app_1 = require("@/stores/app");
var store = (0, app_1.useAppStore)();
var vue_i18n_1 = require("vue-i18n");
var t = (0, vue_i18n_1.useI18n)().t;
var config_1 = require("@/config");
var loading = (0, vue_1.ref)(true);
var address = (0, vue_1.ref)('');
(0, vue_1.onBeforeMount)(function () {
    getAddress();
});
var handleLoad = function () {
    loading.value = false;
};
var getAddress = function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                loading.value = true;
                return [4 /*yield*/, (0, index_1.iframeCalendar)({ usi: store.uuid })];
            case 1:
                res = _a.sent();
                if (res.code == 200 && res.data) {
                    address.value = res.data;
                }
                return [2 /*return*/];
        }
    });
}); };
var __VLS_ctx = __assign(__assign({}, {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "economic-calendar-view" }));
/** @type {__VLS_StyleScopedClasses['economic-calendar-view']} */ ;
var __VLS_0 = CustomCarousel_vue_1.default;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0(__assign(__assign({ 'onToPage': {} }, { title: (__VLS_ctx.t('economicCalendarViewTitle')), intro: (__VLS_ctx.t('economicCalendarViewIntro')), btnText: (__VLS_ctx.t('marketNewsViewBtnText')), background: (__VLS_ctx.background) }), { style: {} })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign({ 'onToPage': {} }, { title: (__VLS_ctx.t('economicCalendarViewTitle')), intro: (__VLS_ctx.t('economicCalendarViewIntro')), btnText: (__VLS_ctx.t('marketNewsViewBtnText')), background: (__VLS_ctx.background) }), { style: {} })], __VLS_functionalComponentArgsRest(__VLS_1), false));
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
        [t, t, t, bg_jpg_1.default, tools_1.browserRedirection, config_1.link_config,];
    },
};
var __VLS_3;
var __VLS_4;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "iframe" }));
__VLS_asFunctionalDirective(__VLS_directives.vLoading, {})(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.loading) }), null, null);
/** @type {__VLS_StyleScopedClasses['iframe']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.iframe, __VLS_intrinsics.iframe)(__assign({ onLoad: (__VLS_ctx.handleLoad) }, { scrolling: "no", allowtransparency: "true", frameborder: "0", src: "https://www.tradingview-widget.com/embed-widget/events/?locale=en#%7B%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Afalse%2C%22countryFilter%22%3A%22ar%2Cau%2Cbr%2Cca%2Ccn%2Cfr%2Cde%2Cin%2Cid%2Cit%2Cjp%2Ckr%2Cmx%2Cru%2Csa%2Cza%2Ctr%2Cgb%2Cus%2Ceu%22%2C%22importanceFilter%22%3A%22-1%2C0%2C1%22%2C%22width%22%3A1080%2C%22height%22%3A800%2C%22utm_source%22%3A%22www.kosmarkets.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22events%22%2C%22page-uri%22%3A%22www.kosmarkets.com%2Feconomic-calendar%2F%22%7D", title: "events TradingView widget", lang: "en" }));
// @ts-ignore
[vLoading, loading, handleLoad,];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({});
exports.default = {};
