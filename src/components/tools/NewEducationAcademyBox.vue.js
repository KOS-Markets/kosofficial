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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var CustomButton_vue_1 = require("@/components/custom/CustomButton.vue");
var vue_i18n_1 = require("vue-i18n");
var t = (0, vue_i18n_1.useI18n)().t;
var staticData_1 = require("@/stores/staticData");
var staticDataStore = (0, staticData_1.useStaticDataStore)();
var pageSettings_1 = require("@/stores/pageSettings");
var pageSettingsStore = (0, pageSettings_1.usePageSettingsStore)();
var educationAcademyList = (0, vue_1.computed)(function () {
    var _a;
    var lang = pageSettingsStore.lang;
    return (_a = staticDataStore.educationAcademy[lang]) !== null && _a !== void 0 ? _a : staticDataStore.educationAcademy.en;
});
var currentLevel = (0, vue_1.computed)(function () {
    var _a;
    return (_a = educationAcademyList.value[levelValue.value]) !== null && _a !== void 0 ? _a : educationAcademyList.value[0];
});
var currentCategory = (0, vue_1.computed)(function () {
    var _a, _b, _c;
    return (_b = (_a = currentLevel.value) === null || _a === void 0 ? void 0 : _a.list[firstListValue.value]) !== null && _b !== void 0 ? _b : (_c = currentLevel.value) === null || _c === void 0 ? void 0 : _c.list[0];
});
var currentLesson = (0, vue_1.computed)(function () {
    var _a, _b, _c;
    return (_b = (_a = currentCategory.value) === null || _a === void 0 ? void 0 : _a.list[secondListValue.value - 1]) !== null && _b !== void 0 ? _b : (_c = currentCategory.value) === null || _c === void 0 ? void 0 : _c.list[0];
});
var textList = (0, vue_1.ref)([
    {
        title: t('newEducationAcademyBoxSentence'),
        text: t('newEducationAcademyBoxSentence1'),
    },
    {
        title: t('newEducationAcademyBoxSentence2'),
        text: t('newEducationAcademyBoxSentence3'),
    },
    {
        title: t('newEducationAcademyBoxSentence4'),
        text: t('newEducationAcademyBoxSentence5'),
    },
]);
var levelValue = (0, vue_1.ref)(0);
var levelOptions = [
    {
        label: 'Basic',
        value: '',
    },
    {
        label: 'Intermediate',
        value: '',
    },
    {
        label: 'Advanced',
        value: '',
    }
];
var firstListValue = (0, vue_1.ref)(0);
var secondListValue = (0, vue_1.ref)(1);
var size = (0, vue_1.ref)(1);
var videoPlay = (0, vue_1.ref)(false);
var clickTab = function (index) {
    levelValue.value = index;
    window.scrollBy(0, 500);
};
var __VLS_ctx = __assign(__assign({}, {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['el-select__wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['intro']} */ ;
/** @type {__VLS_StyleScopedClasses['item']} */ ;
/** @type {__VLS_StyleScopedClasses['el-pagination']} */ ;
/** @type {__VLS_StyleScopedClasses['el-pagination']} */ ;
/** @type {__VLS_StyleScopedClasses['el-pager']} */ ;
/** @type {__VLS_StyleScopedClasses['el-pagination']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "education-academy-tab" }));
/** @type {__VLS_StyleScopedClasses['education-academy-tab']} */ ;
var _loop_1 = function (item, index) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            return (__VLS_ctx.clickTab(index));
            // @ts-ignore
            [textList, clickTab,];
        } }, { class: "item" }), { key: (index) }));
    /** @type {__VLS_StyleScopedClasses['item']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "left" }));
    /** @type {__VLS_StyleScopedClasses['left']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "title" }));
    /** @type {__VLS_StyleScopedClasses['title']} */ ;
    (item.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "text" }));
    /** @type {__VLS_StyleScopedClasses['text']} */ ;
    (item.text);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "right" }));
    /** @type {__VLS_StyleScopedClasses['right']} */ ;
    var __VLS_0 = void 0;
    /** @ts-ignore @type { | typeof __VLS_components.elIcon | typeof __VLS_components.ElIcon | typeof __VLS_components['el-icon'] | typeof __VLS_components.elIcon | typeof __VLS_components.ElIcon | typeof __VLS_components['el-icon']} */
    elIcon;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_1), false));
    var __VLS_5 = __VLS_3.slots.default;
    var __VLS_6 = void 0;
    /** @ts-ignore @type { | typeof __VLS_components.ArrowRight} */
    ArrowRight;
    // @ts-ignore
    var __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({}));
    var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_7), false));
    // @ts-ignore
    [];
    // @ts-ignore
    [];
};
var __VLS_3;
for (var _i = 0, _l = __VLS_vFor((__VLS_ctx.textList)); _i < _l.length; _i++) {
    var _m = _l[_i], item = _m[0], index = _m[1];
    _loop_1(item, index);
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "education-academy-box" }));
/** @type {__VLS_StyleScopedClasses['education-academy-box']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "education-academy-level" }));
/** @type {__VLS_StyleScopedClasses['education-academy-level']} */ ;
var __VLS_11;
/** @ts-ignore @type { | typeof __VLS_components.elSelect | typeof __VLS_components.ElSelect | typeof __VLS_components['el-select'] | typeof __VLS_components.elSelect | typeof __VLS_components.ElSelect | typeof __VLS_components['el-select']} */
elSelect;
// @ts-ignore
var __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11(__assign({ 'onChange': {} }, { modelValue: (__VLS_ctx.levelValue) })));
var __VLS_13 = __VLS_12.apply(void 0, __spreadArray([__assign({ 'onChange': {} }, { modelValue: (__VLS_ctx.levelValue) })], __VLS_functionalComponentArgsRest(__VLS_12), false));
var __VLS_16;
var __VLS_17 = {
    /** @type {typeof __VLS_16.change} */
    onChange: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        return (__VLS_ctx.videoPlay = false);
        // @ts-ignore
        [levelValue, videoPlay,];
    },
};
var __VLS_18 = __VLS_14.slots.default;
for (var _o = 0, _p = __VLS_vFor((__VLS_ctx.levelOptions)); _o < _p.length; _o++) {
    var _q = _p[_o], item = _q[0], index = _q[1];
    var __VLS_19 = void 0;
    /** @ts-ignore @type { | typeof __VLS_components.elOption | typeof __VLS_components.ElOption | typeof __VLS_components['el-option']} */
    elOption;
    // @ts-ignore
    var __VLS_20 = __VLS_asFunctionalComponent1(__VLS_19, new __VLS_19({
        key: (index),
        label: (item.label),
        value: (index),
    }));
    var __VLS_21 = __VLS_20.apply(void 0, __spreadArray([{
            key: (index),
            label: (item.label),
            value: (index),
        }], __VLS_functionalComponentArgsRest(__VLS_20), false));
    // @ts-ignore
    [levelOptions,];
}
// @ts-ignore
[];
var __VLS_14;
var __VLS_15;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "education-academy-header" }));
/** @type {__VLS_StyleScopedClasses['education-academy-header']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "header-left" }));
/** @type {__VLS_StyleScopedClasses['header-left']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "title" }));
/** @type {__VLS_StyleScopedClasses['title']} */ ;
((_a = __VLS_ctx.currentCategory) === null || _a === void 0 ? void 0 : _a.title);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "header-right" }));
/** @type {__VLS_StyleScopedClasses['header-right']} */ ;
var __VLS_24;
/** @ts-ignore @type { | typeof __VLS_components.elSelect | typeof __VLS_components.ElSelect | typeof __VLS_components['el-select'] | typeof __VLS_components.elSelect | typeof __VLS_components.ElSelect | typeof __VLS_components['el-select']} */
elSelect;
// @ts-ignore
var __VLS_25 = __VLS_asFunctionalComponent1(__VLS_24, new __VLS_24(__assign({ 'onChange': {} }, { modelValue: (__VLS_ctx.firstListValue) })));
var __VLS_26 = __VLS_25.apply(void 0, __spreadArray([__assign({ 'onChange': {} }, { modelValue: (__VLS_ctx.firstListValue) })], __VLS_functionalComponentArgsRest(__VLS_25), false));
var __VLS_29;
var __VLS_30 = {
    /** @type {typeof __VLS_29.change} */
    onChange: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        return (__VLS_ctx.videoPlay = false);
        // @ts-ignore
        [videoPlay, currentCategory, firstListValue,];
    },
};
var __VLS_31 = __VLS_27.slots.default;
for (var _r = 0, _s = __VLS_vFor(((_b = __VLS_ctx.currentLevel) === null || _b === void 0 ? void 0 : _b.list)); _r < _s.length; _r++) {
    var _t = _s[_r], item = _t[0], index = _t[1];
    var __VLS_32 = void 0;
    /** @ts-ignore @type { | typeof __VLS_components.elOption | typeof __VLS_components.ElOption | typeof __VLS_components['el-option']} */
    elOption;
    // @ts-ignore
    var __VLS_33 = __VLS_asFunctionalComponent1(__VLS_32, new __VLS_32({
        key: (index),
        label: (item.title),
        value: (index),
    }));
    var __VLS_34 = __VLS_33.apply(void 0, __spreadArray([{
            key: (index),
            label: (item.title),
            value: (index),
        }], __VLS_functionalComponentArgsRest(__VLS_33), false));
    // @ts-ignore
    [currentLevel,];
}
// @ts-ignore
[];
var __VLS_27;
var __VLS_28;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "container" }));
/** @type {__VLS_StyleScopedClasses['container']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "list" }));
/** @type {__VLS_StyleScopedClasses['list']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "content" }));
/** @type {__VLS_StyleScopedClasses['content']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "title" }));
/** @type {__VLS_StyleScopedClasses['title']} */ ;
((_c = __VLS_ctx.currentLesson) === null || _c === void 0 ? void 0 : _c.title);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "intro" }));
/** @type {__VLS_StyleScopedClasses['intro']} */ ;
((_d = __VLS_ctx.currentLesson) === null || _d === void 0 ? void 0 : _d.intro);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "item" }));
/** @type {__VLS_StyleScopedClasses['item']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "item-cover" }));
/** @type {__VLS_StyleScopedClasses['item-cover']} */ ;
if (__VLS_ctx.videoPlay) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "video" }));
    __VLS_asFunctionalDirective(__VLS_directives.vHtml, {})(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: ((_e = __VLS_ctx.currentLesson) === null || _e === void 0 ? void 0 : _e.content) }), null, null);
    /** @type {__VLS_StyleScopedClasses['video']} */ ;
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.img, __VLS_intrinsics.img)({
        src: "@/assets/img/tools/education-academy/bg-2.jpg",
        alt: "",
    });
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "item-title" }));
/** @type {__VLS_StyleScopedClasses['item-title']} */ ;
((_f = __VLS_ctx.currentLesson) === null || _f === void 0 ? void 0 : _f.title);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "item-btn" }));
/** @type {__VLS_StyleScopedClasses['item-btn']} */ ;
var __VLS_37 = CustomButton_vue_1.default;
// @ts-ignore
var __VLS_38 = __VLS_asFunctionalComponent1(__VLS_37, new __VLS_37(__assign({ 'onClick': {} }, { type: (7), name: (__VLS_ctx.t('watchNow')), right: (true) })));
var __VLS_39 = __VLS_38.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: (7), name: (__VLS_ctx.t('watchNow')), right: (true) })], __VLS_functionalComponentArgsRest(__VLS_38), false));
var __VLS_42;
var __VLS_43 = {
    /** @type {typeof __VLS_42.click} */
    onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        return (__VLS_ctx.videoPlay = true);
        // @ts-ignore
        [videoPlay, videoPlay, currentLesson, currentLesson, currentLesson, currentLesson, t,];
    },
};
var __VLS_40;
var __VLS_41;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "pagination" }));
/** @type {__VLS_StyleScopedClasses['pagination']} */ ;
var __VLS_44;
/** @ts-ignore @type { | typeof __VLS_components.elPagination | typeof __VLS_components.ElPagination | typeof __VLS_components['el-pagination']} */
elPagination;
// @ts-ignore
var __VLS_45 = __VLS_asFunctionalComponent1(__VLS_44, new __VLS_44(__assign({ 'onChange': {} }, { currentPage: (__VLS_ctx.secondListValue), layout: "prev, pager, next", total: ((_h = (_g = __VLS_ctx.currentCategory) === null || _g === void 0 ? void 0 : _g.list.length) !== null && _h !== void 0 ? _h : 0), pageSize: (__VLS_ctx.size), size: (__VLS_ctx.size) })));
var __VLS_46 = __VLS_45.apply(void 0, __spreadArray([__assign({ 'onChange': {} }, { currentPage: (__VLS_ctx.secondListValue), layout: "prev, pager, next", total: ((_k = (_j = __VLS_ctx.currentCategory) === null || _j === void 0 ? void 0 : _j.list.length) !== null && _k !== void 0 ? _k : 0), pageSize: (__VLS_ctx.size), size: (__VLS_ctx.size) })], __VLS_functionalComponentArgsRest(__VLS_45), false));
var __VLS_49;
var __VLS_50 = {
    /** @type {typeof __VLS_49.change} */
    onChange: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        return (__VLS_ctx.videoPlay = false);
        // @ts-ignore
        [videoPlay, currentCategory, secondListValue, size, size,];
    },
};
var __VLS_47;
var __VLS_48;
// @ts-ignore
[];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({});
exports.default = {};
