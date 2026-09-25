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
var AnnouncementCarousel_vue_1 = require("@/components/tools/AnnouncementCarousel.vue");
var AnnouncementItem_vue_1 = require("@/components/tools/AnnouncementItem.vue");
var bg_jpg_1 = require("@/assets/img/tools/announcement/bg.jpg");
var index_1 = require("@/apis/index");
var tools_1 = require("@/utils/tools");
var vue_router_1 = require("vue-router");
var router = (0, vue_router_1.useRouter)();
var vue_i18n_1 = require("vue-i18n");
var t = (0, vue_i18n_1.useI18n)().t;
var dataList = (0, vue_1.ref)([]);
var loading = (0, vue_1.ref)(false);
var page = (0, vue_1.ref)(1);
var size = (0, vue_1.ref)(10);
var total = (0, vue_1.ref)(0);
(0, vue_1.onBeforeMount)(function () {
    getData();
});
// (1, 'en', '英语'),
// (2, 'zh-Hans', '简体中文'),
// (3, 'zh-Hant', '繁体中文'),
// (4, 'ja', '日语'),
// (5, 'ms', '马来语'),
// (6, 'ko', '韩语'),
// (7, 'id', '印尼语'),
// (8, 'th', '泰语'),
// (9, 'vi', '越南语'),
// (10, 'ar', '阿拉伯语');
// 语言映射
var language_map = new Map([
    ['en', 'en'],
    ['cn', 'zh-Hans'],
    ['tw', 'zh-Hant'],
    ['ja', 'ja'],
    ['ms', 'ms'],
    ['ko', 'ko'],
    ['id', 'id'],
    ['th', 'th'],
    ['vi', 'vi'],
    ['ar', 'ar'],
]);
function getLangaugeValue() {
    var _a;
    var language_k = (_a = localStorage.getItem('lang')) !== null && _a !== void 0 ? _a : 'en';
    return language_map.get(language_k) || 'en';
}
var getData = function () { return __awaiter(void 0, void 0, void 0, function () {
    var language_v, res;
    var _a, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                loading.value = true;
                language_v = getLangaugeValue();
                return [4 /*yield*/, (0, index_1.getNoticeList)({
                        page: page.value,
                        size: size.value,
                        language: language_v,
                        order_by_weight: 'desc' // 如果需要按权重排序，可放开此参数
                    })];
            case 1:
                res = _d.sent();
                if (res.code == 200 && res.data) {
                    dataList.value = (_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.list) !== null && _b !== void 0 ? _b : [];
                    total.value = (_c = res.data) === null || _c === void 0 ? void 0 : _c.total;
                }
                else {
                    element_plus_1.ElMessage.error(res.msg || '加载失败');
                }
                loading.value = false;
                return [2 /*return*/];
        }
    });
}); };
var clickAnnouncement = function (item) {
    // if (item.type == 1) {
    // window.open(editImageUrl(item.content), "_blank")
    // return
    // }
    router.push({ name: 'toolsAnnouncementDetail', query: { id: item.id } });
};
var __VLS_ctx = __assign(__assign({}, {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['el-pagination']} */ ;
/** @type {__VLS_StyleScopedClasses['el-pagination']} */ ;
/** @type {__VLS_StyleScopedClasses['el-pager']} */ ;
/** @type {__VLS_StyleScopedClasses['el-pagination']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "announcement-list" }));
/** @type {__VLS_StyleScopedClasses['announcement-list']} */ ;
var __VLS_0 = AnnouncementCarousel_vue_1.default;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    title: (__VLS_ctx.t('announcement')),
    background: (__VLS_ctx.background),
}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
        title: (__VLS_ctx.t('announcement')),
        background: (__VLS_ctx.background),
    }], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "list" }));
__VLS_asFunctionalDirective(__VLS_directives.vLoading, {})(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.loading) }), null, null);
/** @type {__VLS_StyleScopedClasses['list']} */ ;
var _loop_1 = function (item, key) {
    var __VLS_5 = AnnouncementItem_vue_1.default;
    // @ts-ignore
    var __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5(__assign({ 'onClick': {} }, { title: (item.title), time: (__VLS_ctx.formatTime(item.create_time)) })));
    var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { title: (item.title), time: (__VLS_ctx.formatTime(item.create_time)) })], __VLS_functionalComponentArgsRest(__VLS_6), false));
    var __VLS_10 = void 0;
    var __VLS_11 = {
        /** @type {typeof __VLS_10.click} */
        onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            return (__VLS_ctx.clickAnnouncement(item));
            // @ts-ignore
            [t, bg_jpg_1.default, vLoading, loading, dataList, tools_1.formatTime, clickAnnouncement,];
        },
    };
    // @ts-ignore
    [];
};
var __VLS_8, __VLS_9;
for (var _i = 0, _a = __VLS_vFor((__VLS_ctx.dataList)); _i < _a.length; _i++) {
    var _b = _a[_i], item = _b[0], key = _b[1];
    _loop_1(item, key);
}
if (__VLS_ctx.dataList.length == 0) {
    var __VLS_12 = void 0;
    /** @ts-ignore @type { | typeof __VLS_components.elEmpty | typeof __VLS_components.ElEmpty | typeof __VLS_components['el-empty']} */
    elEmpty;
    // @ts-ignore
    var __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
        description: (__VLS_ctx.t('nodata')),
    }));
    var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([{
            description: (__VLS_ctx.t('nodata')),
        }], __VLS_functionalComponentArgsRest(__VLS_13), false));
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "pagination" }));
/** @type {__VLS_StyleScopedClasses['pagination']} */ ;
var __VLS_17;
/** @ts-ignore @type { | typeof __VLS_components.elPagination | typeof __VLS_components.ElPagination | typeof __VLS_components['el-pagination']} */
elPagination;
// @ts-ignore
var __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17(__assign({ 'onCurrentChange': {} }, { layout: "prev, pager, next", total: (__VLS_ctx.total), currentPage: (__VLS_ctx.page), pageSize: (__VLS_ctx.size), pageSizes: ([10, 20, 50, 100]), size: (__VLS_ctx.size) })));
var __VLS_19 = __VLS_18.apply(void 0, __spreadArray([__assign({ 'onCurrentChange': {} }, { layout: "prev, pager, next", total: (__VLS_ctx.total), currentPage: (__VLS_ctx.page), pageSize: (__VLS_ctx.size), pageSizes: ([10, 20, 50, 100]), size: (__VLS_ctx.size) })], __VLS_functionalComponentArgsRest(__VLS_18), false));
var __VLS_22;
var __VLS_23 = {
    /** @type {typeof __VLS_22.currentChange} */
    onCurrentChange: (__VLS_ctx.getData),
};
var __VLS_20;
var __VLS_21;
// @ts-ignore
[t, dataList, total, page, size, size, getData,];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({});
exports.default = {};
