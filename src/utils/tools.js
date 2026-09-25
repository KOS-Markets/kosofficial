"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.browserRedirection = browserRedirection;
exports.generateUUID = generateUUID;
exports.calculatePipSpread = calculatePipSpread;
exports.formatTime = formatTime;
exports.editImageUrl = editImageUrl;
var bignumber_js_1 = require("bignumber.js");
var dayjs_1 = require("dayjs");
var utc_1 = require("dayjs/plugin/utc");
var timezone_1 = require("dayjs/plugin/timezone");
dayjs_1.default.extend(utc_1.default);
dayjs_1.default.extend(timezone_1.default);
var app_1 = require("@/stores/app");
function browserRedirection(url) {
    var userAgentInfo = navigator.userAgent;
    if (userAgentInfo.includes('iPhone')) {
        window.location.href = url;
    }
    else {
        window.open(url);
    }
}
function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}
function calculatePipSpread(decimals, ask, bid, round) {
    if (round === void 0) { round = true; }
    var dec = new bignumber_js_1.default(decimals);
    var diff = (0, bignumber_js_1.default)(ask).minus(bid);
    if (dec.isNaN() || diff.isNaN() || dec.lt(0) || diff.lt(0)) {
        // throw new Error('decimals 和 difference 必须为非负数字');
        return '';
    }
    // 1 pip = 10^(-decimals)
    var pipSize = new bignumber_js_1.default(10).pow(dec.negated());
    // 点差 = 差值 / pipSize
    var pips = diff.dividedBy(pipSize);
    if (round) {
        // 四舍五入到整数
        pips = pips.integerValue(bignumber_js_1.default.ROUND_HALF_UP);
    }
    return pips.toString();
}
function formatTime(time) {
    var store = (0, app_1.useAppStore)();
    if (store.systemSetting.timezone == '0') {
        return (0, dayjs_1.default)(Number(time)).format('YYYY-MM-DD');
    }
    else {
        return (0, dayjs_1.default)(Number(time)).tz(store.systemSetting.timezone).format('YYYY-MM-DD');
    }
}
function editImageUrl(url) {
    return import.meta.env.VITE_BASE_OSSURL + url;
}
