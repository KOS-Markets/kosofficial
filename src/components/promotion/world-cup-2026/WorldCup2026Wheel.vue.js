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
var vue_1 = require("vue");
var vue_i18n_1 = require("vue-i18n");
var props = defineProps();
var emit = defineEmits();
var t = (0, vue_i18n_1.useI18n)().t;
var wheelWrapper = (0, vue_1.ref)(null);
var wheelCanvas = (0, vue_1.ref)(null);
var spinButton = (0, vue_1.ref)(null);
var wheelSegmentColor = '#0E2018';
var wheelAccentColor = '#C9A84C';
var isSpinning = (0, vue_1.ref)(false);
var isResultPending = (0, vue_1.ref)(false);
var isSpinDisabled = (0, vue_1.computed)(function () { return isSpinning.value || isResultPending.value || !!props.isLocked; });
var spinButtonLabel = (0, vue_1.computed)(function () {
    return isSpinning.value ? '···' : t('worldCup2026SpinButtonLabel');
});
var currentAngle = 0;
var animationFrameId = null;
var popupTimeoutId = null;
var prizeImages = [];
var resizeObserver = null;
var wheelSize = (0, vue_1.computed)(function () { return props.prizes.length; });
var wheelArc = (0, vue_1.computed)(function () { return (wheelSize.value > 0 ? (2 * Math.PI) / wheelSize.value : 0); });
var prizeImageKeys = (0, vue_1.computed)(function () {
    return props.prizes.map(function (prize) { return "".concat(prize.id, ":").concat(prize.img, ":").concat(prize.name); }).join('|');
});
function syncCanvasSize() {
    var wrapper = wheelWrapper.value;
    var canvas = wheelCanvas.value;
    if (!wrapper || !canvas) {
        return;
    }
    var size = wrapper.offsetWidth;
    canvas.width = size;
    canvas.height = size;
}
function redrawWheel() {
    syncCanvasSize();
    drawWheel(currentAngle);
}
function drawWheel(rotation) {
    var canvas = wheelCanvas.value;
    var context = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
    if (!canvas || !context) {
        return;
    }
    var width = canvas.width;
    var height = canvas.height;
    var centerX = width / 2;
    var centerY = height / 2;
    var radius = width / 2;
    context.clearRect(0, 0, width, height);
    if (!wheelSize.value || !wheelArc.value) {
        return;
    }
    for (var index = 0; index < wheelSize.value; index += 1) {
        var prize = props.prizes[index];
        if (!prize) {
            continue;
        }
        var start = rotation + index * wheelArc.value - Math.PI / 2;
        var end = start + wheelArc.value;
        context.beginPath();
        context.moveTo(centerX, centerY);
        context.arc(centerX, centerY, radius, start, end);
        context.closePath();
        var gradient = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
        gradient.addColorStop(0, '#1A2E20');
        gradient.addColorStop(0.5, wheelSegmentColor);
        gradient.addColorStop(1, '#080F09');
        context.fillStyle = gradient;
        context.fill();
        context.strokeStyle = wheelAccentColor;
        context.lineWidth = 1.5;
        context.stroke();
        var mid = start + wheelArc.value / 2;
        var imageRadius = radius * 0.68;
        var imageX = centerX + Math.cos(mid) * imageRadius;
        var imageY = centerY + Math.sin(mid) * imageRadius;
        var imageSize = radius * 0.22;
        context.save();
        context.translate(imageX, imageY);
        context.rotate(mid + Math.PI / 2);
        context.beginPath();
        context.arc(0, 0, imageSize * 0.72, 0, Math.PI * 2);
        context.fillStyle = 'rgba(201,168,76,0.12)';
        context.fill();
        context.strokeStyle = 'rgba(201,168,76,0.35)';
        context.lineWidth = 1;
        context.stroke();
        var image = prizeImages[index];
        if (image && image.complete && image.naturalWidth > 0) {
            var drawSize = imageSize * 1.1;
            context.drawImage(image, -drawSize / 2, -drawSize / 2, drawSize, drawSize);
        }
        else {
            context.beginPath();
            context.arc(0, 0, imageSize * 0.28, 0, Math.PI * 2);
            context.fillStyle = wheelAccentColor;
            context.fill();
        }
        context.restore();
    }
    context.beginPath();
    context.arc(centerX, centerY, radius - 1, 0, Math.PI * 2);
    context.strokeStyle = 'rgba(201,168,76,0.6)';
    context.lineWidth = 2;
    context.stroke();
    var hubRadius = radius * 0.17;
    var hubGradient = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, hubRadius);
    hubGradient.addColorStop(0, 'rgba(255,255,255,0.15)');
    hubGradient.addColorStop(1, 'rgba(0,0,0,0.4)');
    context.beginPath();
    context.arc(centerX, centerY, hubRadius, 0, Math.PI * 2);
    context.fillStyle = hubGradient;
    context.fill();
    context.strokeStyle = 'rgba(201,168,76,0.7)';
    context.lineWidth = 2;
    context.stroke();
}
function findPrizeIndexById(prizeId) {
    return props.prizes.findIndex(function (prize) { return prize.id === prizeId; });
}
function spinTo(targetIndex, onDone) {
    if (!wheelArc.value) {
        return;
    }
    var minSpins = 5;
    var maxSpins = 9;
    var fullSpins = Math.floor(minSpins + Math.random() * (maxSpins - minSpins + 1));
    var extraSpins = fullSpins * 2 * Math.PI;
    var targetMid = targetIndex * wheelArc.value + wheelArc.value / 2;
    var needed = (((-currentAngle - targetMid) % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
    var total = extraSpins + needed;
    var duration = 5000 + Math.random() * 2000;
    var start = performance.now();
    var startAngle = currentAngle;
    if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
    }
    function easeOut(value) {
        return 1 - Math.pow(1 - value, 4);
    }
    function tick(now) {
        var elapsed = now - start;
        var progress = Math.min(elapsed / duration, 1);
        var eased = easeOut(progress);
        currentAngle = startAngle + total * eased;
        drawWheel(currentAngle);
        if (progress < 1) {
            animationFrameId = requestAnimationFrame(tick);
            return;
        }
        currentAngle = startAngle + total;
        drawWheel(currentAngle);
        animationFrameId = null;
        onDone();
    }
    animationFrameId = requestAnimationFrame(tick);
}
function spinToPrizeId(prizeId) {
    if (isSpinDisabled.value) {
        return false;
    }
    var prizeIndex = findPrizeIndexById(prizeId);
    var prize = props.prizes[prizeIndex];
    if (prizeIndex < 0 || !prize) {
        return false;
    }
    isSpinning.value = true;
    spinTo(prizeIndex, function () {
        isSpinning.value = false;
        isResultPending.value = true;
        popupTimeoutId = window.setTimeout(function () {
            popupTimeoutId = null;
            isResultPending.value = false;
            emit('spin-complete', prize);
        }, 400);
    });
    return true;
}
function onSpinClick() {
    if (isSpinDisabled.value) {
        return;
    }
    emit('request-spin');
}
function scrollToSpin() {
    var _a;
    (_a = spinButton.value) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth' });
}
var __VLS_exposed;
defineExpose({
    spinToPrizeId: spinToPrizeId,
    scrollToSpin: scrollToSpin,
});
function syncPrizeImages() {
    prizeImages = props.prizes.map(function (prize) {
        var image = new Image();
        image.src = prize.img;
        image.onload = function () { return drawWheel(currentAngle); };
        return image;
    });
    redrawWheel();
}
(0, vue_1.onMounted)(function () {
    redrawWheel();
    if (typeof ResizeObserver !== 'undefined') {
        resizeObserver = new ResizeObserver(function () {
            redrawWheel();
        });
        if (wheelWrapper.value) {
            resizeObserver.observe(wheelWrapper.value);
        }
        return;
    }
    window.addEventListener('resize', redrawWheel);
});
(0, vue_1.watch)(prizeImageKeys, function () {
    syncPrizeImages();
}, { immediate: true });
(0, vue_1.onBeforeUnmount)(function () {
    resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.disconnect();
    window.removeEventListener('resize', redrawWheel);
    if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
    }
    if (popupTimeoutId !== null) {
        window.clearTimeout(popupTimeoutId);
        popupTimeoutId = null;
        isResultPending.value = false;
    }
});
var __VLS_ctx = __assign(__assign(__assign(__assign(__assign({}, {}), {}), {}), {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['wheel-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['wheel-ring']} */ ;
/** @type {__VLS_StyleScopedClasses['wheel-ring']} */ ;
/** @type {__VLS_StyleScopedClasses['wheel-center-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['wheel-center-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['wheel-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['wheel-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['wheel-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['wheel-wrapper']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ ref: "wheelWrapper" }, { class: "wheel-wrapper" }));
/** @type {__VLS_StyleScopedClasses['wheel-wrapper']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "wheel-pointer" }, { 'aria-hidden': "true" }));
/** @type {__VLS_StyleScopedClasses['wheel-pointer']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.svg, __VLS_intrinsics.svg)({
    width: "28",
    height: "22",
    viewBox: "0 0 28 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.path)({
    d: "M14 22L0.870836 0.25L27.1292 0.25L14 22Z",
    fill: "#9DE7C6",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.path)({
    d: "M14 22L0.870836 0.25L27.1292 0.25L14 22Z",
    stroke: "#F0E3AD",
    'stroke-width': "1",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "wheel-ring" }, { 'aria-hidden': "true" }));
/** @type {__VLS_StyleScopedClasses['wheel-ring']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.canvas, __VLS_intrinsics.canvas)(__assign({ onClick: (__VLS_ctx.onSpinClick) }, { ref: "wheelCanvas" }));
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign(__assign(__assign({ onClick: (__VLS_ctx.onSpinClick) }, { ref: "spinButton" }), { class: "wheel-center-btn" }), { type: "button", 'aria-label': (__VLS_ctx.t('worldCup2026SpinWheelAriaLabel')), disabled: (__VLS_ctx.isSpinDisabled) }));
/** @type {__VLS_StyleScopedClasses['wheel-center-btn']} */ ;
(__VLS_ctx.spinButtonLabel);
// @ts-ignore
[onSpinClick, onSpinClick, t, isSpinDisabled, spinButtonLabel,];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () { return __VLS_exposed; },
    __typeEmits: {},
    __typeProps: {},
});
exports.default = {};
