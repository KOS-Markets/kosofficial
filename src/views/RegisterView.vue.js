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
var motion_v_1 = require("motion-v");
var router_1 = require("@/router");
(0, vue_1.onMounted)(function () {
    /* Step 1 validation */
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var country = document.getElementById("country");
    var nextBtn = document.getElementById("nextBtn");
    var step1 = document.getElementById("step1");
    var step2 = document.getElementById("step2");
    var backBtn = document.getElementById("backBtn");
    if (!email || !password || !country || !nextBtn || !step1 || !step2 || !backBtn)
        return;
    var emailInput = email;
    var passwordInput = password;
    var countrySelect = country;
    var nextButton = nextBtn;
    emailInput.addEventListener("input", validateStep1);
    passwordInput.addEventListener("input", validateStep1);
    countrySelect.addEventListener("change", validateStep1);
    /* Step switching */
    nextButton.addEventListener("click", function () {
        step1.classList.add("hidden");
        step2.classList.remove("hidden");
    });
    backBtn.addEventListener("click", function () {
        step2.classList.add("hidden");
        step1.classList.remove("hidden");
    });
    function validateStep1() {
        nextButton.disabled = !(emailInput.value.trim() && passwordInput.value.trim() && countrySelect.value.trim());
    }
});
var __VLS_ctx = __assign(__assign({}, {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "register-view" }));
/** @type {__VLS_StyleScopedClasses['register-view']} */ ;
var __VLS_0 = (__VLS_ctx.motion.div) || (__VLS_ctx.motion.div);
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0(__assign({ class: "container" }, { id: "registerContainer", inViewOptions: ({ once: true }), initial: ({ opacity: 0, y: -30 }), whileInView: ({ opacity: 1, y: 0 }), transition: ({ delay: 0, duration: 0.6 }) })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ class: "container" }, { id: "registerContainer", inViewOptions: ({ once: true }), initial: ({ opacity: 0, y: -30 }), whileInView: ({ opacity: 1, y: 0 }), transition: ({ delay: 0, duration: 0.6 }) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
/** @type {__VLS_StyleScopedClasses['container']} */ ;
var __VLS_5 = __VLS_3.slots.default;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "logo-container" }));
/** @type {__VLS_StyleScopedClasses['logo-container']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img, __VLS_intrinsics.img)(__assign(__assign({ onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        return (__VLS_ctx.router.push({ name: 'home' }));
        // @ts-ignore
        [motion_v_1.motion, motion_v_1.motion, router_1.default,];
    } }, { src: "@/assets/img/login/logo.svg", alt: "" }), { style: {} }));
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({});
var __VLS_6 = (__VLS_ctx.motion.div) || (__VLS_ctx.motion.div);
// @ts-ignore
var __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    id: "step1",
    initial: ({ opacity: 0, x: -40 }),
    whileInView: ({ opacity: 1, x: 0 }),
    transition: ({ delay: 0, duration: 0.6 }),
}));
var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([{
        id: "step1",
        initial: ({ opacity: 0, x: -40 }),
        whileInView: ({ opacity: 1, x: 0 }),
        transition: ({ delay: 0, duration: 0.6 }),
    }], __VLS_functionalComponentArgsRest(__VLS_7), false));
var __VLS_11 = __VLS_9.slots.default;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "form-group" }));
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    id: "email",
    type: "email",
    placeholder: "Enter your email",
    required: true,
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "form-group" }));
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    id: "password",
    type: "password",
    placeholder: "Create a password",
    required: true,
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "form-group" }));
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.select, __VLS_intrinsics.select)({
    id: "country",
    required: true,
});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "form-group" }));
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    id: "recCode",
    type: "text",
    placeholder: "Optional",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    id: "nextBtn",
    disabled: true,
});
// @ts-ignore
[motion_v_1.motion, motion_v_1.motion,];
var __VLS_9;
var __VLS_12 = (__VLS_ctx.motion.div) || (__VLS_ctx.motion.div);
// @ts-ignore
var __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12(__assign(__assign({ id: "step2" }, { class: "hidden" }), { initial: ({ opacity: 0, x: 40 }), whileInView: ({ opacity: 1, x: 0 }), transition: ({ delay: 0, duration: 0.6 }) })));
var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([__assign(__assign({ id: "step2" }, { class: "hidden" }), { initial: ({ opacity: 0, x: 40 }), whileInView: ({ opacity: 1, x: 0 }), transition: ({ delay: 0, duration: 0.6 }) })], __VLS_functionalComponentArgsRest(__VLS_13), false));
/** @type {__VLS_StyleScopedClasses['hidden']} */ ;
var __VLS_17 = __VLS_15.slots.default;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "form-group" }));
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    type: "text",
    placeholder: "Enter first name",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "form-group" }));
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    type: "text",
    placeholder: "Enter last name",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "form-group" }));
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    type: "date",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "form-group" }));
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    type: "text",
    placeholder: "Street, City, ZIP",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "form-group" }));
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    type: "tel",
    placeholder: "Enter phone number",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "form-group" }));
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    type: "text",
    placeholder: "Enter passport/ID number",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    id: "backBtn",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        return (__VLS_ctx.router.push({ name: 'home' }));
        // @ts-ignore
        [motion_v_1.motion, motion_v_1.motion, router_1.default,];
    } }));
// @ts-ignore
[];
var __VLS_15;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({});
exports.default = {};
