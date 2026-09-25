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
var element_plus_1 = require("element-plus");
var vue_i18n_1 = require("vue-i18n");
var WorldCup2026CodePopup_vue_1 = require("@/components/promotion/world-cup-2026/WorldCup2026CodePopup.vue");
var WorldCup2026CtaSection_vue_1 = require("@/components/promotion/world-cup-2026/WorldCup2026CtaSection.vue");
var WorldCup2026HeroSection_vue_1 = require("@/components/promotion/world-cup-2026/WorldCup2026HeroSection.vue");
var WorldCup2026Popup_vue_1 = require("@/components/promotion/world-cup-2026/WorldCup2026Popup.vue");
var WorldCup2026PrizesSection_vue_1 = require("@/components/promotion/world-cup-2026/WorldCup2026PrizesSection.vue");
var WorldCup2026RulesSection_vue_1 = require("@/components/promotion/world-cup-2026/WorldCup2026RulesSection.vue");
var WorldCup2026Wheel_vue_1 = require("@/components/promotion/world-cup-2026/WorldCup2026Wheel.vue");
var index_1 = require("@/apis/index");
var tools_1 = require("@/utils/tools");
var t = (0, vue_i18n_1.useI18n)().t;
var prizes = (0, vue_1.ref)([]);
var rootRef = (0, vue_1.ref)(null);
var wheelRef = (0, vue_1.ref)(null);
var spinTargetId = (0, vue_1.ref)(0);
var isCodePopupVisible = (0, vue_1.ref)(false);
var isResultPopupVisible = (0, vue_1.ref)(false);
var resultPrize = (0, vue_1.ref)(null);
var revealObserver = null;
function handleSpinRequest() {
    isCodePopupVisible.value = true;
}
function closeCodePopup() {
    isCodePopupVisible.value = false;
}
function handleSpinComplete(prize) {
    resultPrize.value = prize;
    isResultPopupVisible.value = true;
}
function closeResultPopup() {
    isResultPopupVisible.value = false;
}
function scrollToSpin() {
    var _a;
    (_a = wheelRef.value) === null || _a === void 0 ? void 0 : _a.scrollToSpin();
}
function setupRevealObserver() {
    var _a, _b;
    var revealElements = Array.from((_b = (_a = rootRef.value) === null || _a === void 0 ? void 0 : _a.querySelectorAll('.reveal')) !== null && _b !== void 0 ? _b : []);
    if (!revealElements.length) {
        return;
    }
    if (typeof IntersectionObserver === 'undefined') {
        revealElements.forEach(function (element) { return element.classList.add('visible'); });
        return;
    }
    revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver === null || revealObserver === void 0 ? void 0 : revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    revealElements.forEach(function (element) { return revealObserver === null || revealObserver === void 0 ? void 0 : revealObserver.observe(element); });
}
(0, vue_1.onMounted)(function () {
    setupRevealObserver();
    void getPrizeList();
});
(0, vue_1.onBeforeUnmount)(function () {
    revealObserver === null || revealObserver === void 0 ? void 0 : revealObserver.disconnect();
});
var lotteryCodeLoading = (0, vue_1.ref)(false);
var getPrizeList = function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, index_1.lotteryPrizeAll)()];
            case 1:
                res = _a.sent();
                if (res.code == 200 && res.data) {
                    prizes.value = res.data.map(function (item) {
                        return {
                            id: item.id,
                            name: item.name,
                            img: (0, tools_1.editImageUrl)(item.logo),
                        };
                    });
                }
                return [2 /*return*/];
        }
    });
}); };
var handleCodeSubmit = function (code) { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (code == '') {
                    element_plus_1.ElMessage.error(t('worldCup2026CodePopupEmptyError'));
                    return [2 /*return*/];
                }
                if (lotteryCodeLoading.value) {
                    return [2 /*return*/];
                }
                lotteryCodeLoading.value = true;
                _b.label = 1;
            case 1:
                _b.trys.push([1, , 6, 7]);
                return [4 /*yield*/, (0, index_1.lotteryCodeClaim)({ code: code })];
            case 2:
                res = _b.sent();
                if (!(res.code == 200 && res.data)) return [3 /*break*/, 4];
                spinTargetId.value = res.data.id;
                isCodePopupVisible.value = false;
                return [4 /*yield*/, (0, vue_1.nextTick)()];
            case 3:
                _b.sent();
                (_a = wheelRef.value) === null || _a === void 0 ? void 0 : _a.spinToPrizeId(spinTargetId.value);
                return [3 /*break*/, 5];
            case 4:
                element_plus_1.ElMessage.error(res.msg);
                _b.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                lotteryCodeLoading.value = false;
                return [7 /*endfinally*/];
            case 7: return [2 /*return*/];
        }
    });
}); };
var __VLS_ctx = __assign(__assign({}, {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ ref: "rootRef" }, { class: "world-cup-2026" }));
/** @type {__VLS_StyleScopedClasses['world-cup-2026']} */ ;
var __VLS_0 = WorldCup2026HeroSection_vue_1.default || WorldCup2026HeroSection_vue_1.default;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_5 = __VLS_3.slots.default;
var __VLS_6 = WorldCup2026Wheel_vue_1.default;
// @ts-ignore
var __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6(__assign(__assign({ 'onRequestSpin': {} }, { 'onSpinComplete': {} }), { ref: "wheelRef", prizes: (__VLS_ctx.prizes), isLocked: (__VLS_ctx.isCodePopupVisible || __VLS_ctx.isResultPopupVisible) })));
var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([__assign(__assign({ 'onRequestSpin': {} }, { 'onSpinComplete': {} }), { ref: "wheelRef", prizes: (__VLS_ctx.prizes), isLocked: (__VLS_ctx.isCodePopupVisible || __VLS_ctx.isResultPopupVisible) })], __VLS_functionalComponentArgsRest(__VLS_7), false));
var __VLS_11;
var __VLS_12 = {
    /** @type {typeof __VLS_11.requestSpin} */
    onRequestSpin: (__VLS_ctx.handleSpinRequest),
};
var __VLS_13 = {
    /** @type {typeof __VLS_11.spinComplete} */
    onSpinComplete: (__VLS_ctx.handleSpinComplete),
};
var __VLS_14;
var __VLS_9;
var __VLS_10;
// @ts-ignore
[prizes, isCodePopupVisible, isResultPopupVisible, handleSpinRequest, handleSpinComplete,];
var __VLS_3;
var __VLS_16 = WorldCup2026PrizesSection_vue_1.default;
// @ts-ignore
var __VLS_17 = __VLS_asFunctionalComponent1(__VLS_16, new __VLS_16({
    prizes: (__VLS_ctx.prizes),
}));
var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([{
        prizes: (__VLS_ctx.prizes),
    }], __VLS_functionalComponentArgsRest(__VLS_17), false));
var __VLS_21 = WorldCup2026RulesSection_vue_1.default;
// @ts-ignore
var __VLS_22 = __VLS_asFunctionalComponent1(__VLS_21, new __VLS_21({}));
var __VLS_23 = __VLS_22.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_22), false));
var __VLS_26 = WorldCup2026CtaSection_vue_1.default;
// @ts-ignore
var __VLS_27 = __VLS_asFunctionalComponent1(__VLS_26, new __VLS_26(__assign({ 'onClaim': {} })));
var __VLS_28 = __VLS_27.apply(void 0, __spreadArray([__assign({ 'onClaim': {} })], __VLS_functionalComponentArgsRest(__VLS_27), false));
var __VLS_31;
var __VLS_32 = {
    /** @type {typeof __VLS_31.claim} */
    onClaim: (__VLS_ctx.scrollToSpin),
};
var __VLS_29;
var __VLS_30;
var __VLS_33 = WorldCup2026CodePopup_vue_1.default;
// @ts-ignore
var __VLS_34 = __VLS_asFunctionalComponent1(__VLS_33, new __VLS_33(__assign(__assign({ 'onClose': {} }, { 'onSubmit': {} }), { modelValue: (__VLS_ctx.isCodePopupVisible), isSubmitting: (__VLS_ctx.lotteryCodeLoading) })));
var __VLS_35 = __VLS_34.apply(void 0, __spreadArray([__assign(__assign({ 'onClose': {} }, { 'onSubmit': {} }), { modelValue: (__VLS_ctx.isCodePopupVisible), isSubmitting: (__VLS_ctx.lotteryCodeLoading) })], __VLS_functionalComponentArgsRest(__VLS_34), false));
var __VLS_38;
var __VLS_39 = {
    /** @type {typeof __VLS_38.close} */
    onClose: (__VLS_ctx.closeCodePopup),
};
var __VLS_40 = {
    /** @type {typeof __VLS_38.submit} */
    onSubmit: (__VLS_ctx.handleCodeSubmit),
};
var __VLS_36;
var __VLS_37;
var __VLS_41 = WorldCup2026Popup_vue_1.default;
// @ts-ignore
var __VLS_42 = __VLS_asFunctionalComponent1(__VLS_41, new __VLS_41(__assign({ 'onClose': {} }, { modelValue: (__VLS_ctx.isResultPopupVisible), prize: (__VLS_ctx.resultPrize) })));
var __VLS_43 = __VLS_42.apply(void 0, __spreadArray([__assign({ 'onClose': {} }, { modelValue: (__VLS_ctx.isResultPopupVisible), prize: (__VLS_ctx.resultPrize) })], __VLS_functionalComponentArgsRest(__VLS_42), false));
var __VLS_46;
var __VLS_47 = {
    /** @type {typeof __VLS_46.close} */
    onClose: (__VLS_ctx.closeResultPopup),
};
var __VLS_44;
var __VLS_45;
// @ts-ignore
var __VLS_15 = __VLS_14;
// @ts-ignore
[prizes, isCodePopupVisible, isResultPopupVisible, scrollToSpin, lotteryCodeLoading, closeCodePopup, handleCodeSubmit, resultPrize, closeResultPopup,];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({});
exports.default = {};
