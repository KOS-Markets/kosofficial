"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNoticeList = void 0;
exports.iframeCalendar = iframeCalendar;
exports.iframeNews = iframeNews;
exports.announcementUserList = announcementUserList;
exports.announcementUserDetail = announcementUserDetail;
exports.systemSettingSelect = systemSettingSelect;
exports.lotteryPrizeAll = lotteryPrizeAll;
exports.lotteryCodeClaim = lotteryCodeClaim;
var request_1 = require("@/utils/request");
function iframeCalendar(data) {
    return request_1.default.post('/iframe/calendar', data);
}
function iframeNews(data) {
    return request_1.default.post('/iframe/news', data);
}
function announcementUserList(data) {
    return request_1.default.post('/announcement/user/list', data);
}
function announcementUserDetail(data) {
    return request_1.default.get('/public/getNoticeDetail', data);
}
function systemSettingSelect() {
    return request_1.default.post('/system-setting/user');
}
function lotteryPrizeAll() {
    return request_1.default.post('/lottery/prize/all');
}
function lotteryCodeClaim(data) {
    return request_1.default.post('/lottery/code/claim', data);
}
// 新增：获取公告列表（分页）
var getNoticeList = function (params) {
    // ✅ 正确：直接传 url 和 params
    return request_1.default.get('/public/getNoticeList', params);
};
exports.getNoticeList = getNoticeList;
