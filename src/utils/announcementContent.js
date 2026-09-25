"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseStructuredAnnouncementContent = parseStructuredAnnouncementContent;
exports.getAnnouncementDisplayTitle = getAnnouncementDisplayTitle;
exports.getTradingHoursDates = getTradingHoursDates;
exports.getTradingHoursLabels = getTradingHoursLabels;
exports.getTradingHoursTimezone = getTradingHoursTimezone;
exports.formatTradingHoursCell = formatTradingHoursCell;
exports.formatDividendCell = formatDividendCell;
function parseStructuredAnnouncementContent(announcement) {
    if (announcement.type !== 2 && announcement.type !== 3) {
        return null;
    }
    try {
        return JSON.parse(announcement.content);
    }
    catch (_a) {
        return null;
    }
}
function getAnnouncementDisplayTitle(announcement, content) {
    return (content === null || content === void 0 ? void 0 : content.documentTitle) || announcement.title || '';
}
function getTradingHoursDates(content) {
    var _a, _b;
    return ((_a = content.dates) === null || _a === void 0 ? void 0 : _a.length) ? content.dates : ((_b = content.headers) === null || _b === void 0 ? void 0 : _b.dates) || [];
}
function getTradingHoursLabels(content) {
    var _a, _b, _c;
    var fallback = {
        symbol: 'SYMBOL',
        category: 'TYPE',
        sessionGroup: 'MT4 / MT5 TRADING HOURS',
    };
    return {
        symbol: ((_a = content.headers) === null || _a === void 0 ? void 0 : _a.symbol) || fallback.symbol,
        category: ((_b = content.headers) === null || _b === void 0 ? void 0 : _b.category) || fallback.category,
        sessionGroup: ((_c = content.headers) === null || _c === void 0 ? void 0 : _c.sessionGroup) || fallback.sessionGroup,
    };
}
function getTradingHoursTimezone(content) {
    var _a, _b;
    if (content.timezone) {
        return content.timezone;
    }
    var match = [content.documentTitle, (_a = content.headers) === null || _a === void 0 ? void 0 : _a.sessionGroup]
        .filter(Boolean)
        .map(function (value) { return value.match(/GMT\s*[+-]\s*\d+/i); })
        .find(Boolean);
    return ((_b = match === null || match === void 0 ? void 0 : match[0]) === null || _b === void 0 ? void 0 : _b.replace(/\s+/g, '')) || '';
}
function formatTradingHoursCell(value) {
    var trimmed = value === null || value === void 0 ? void 0 : value.trim();
    if (!trimmed) {
        return {
            className: 'vh-empty',
            text: '—',
        };
    }
    return {
        className: 'vh-value',
        text: trimmed,
    };
}
function formatDividendCell(value) {
    var trimmed = value.trim();
    if (!trimmed)
        return { text: '—', className: 'neutral' };
    var numeric = Number.parseFloat(trimmed.replace(/[^0-9.+-]/g, ''));
    if (Number.isNaN(numeric)) {
        return { text: trimmed, className: 'neutral' };
    }
    if (numeric > 0) {
        return { text: "+".concat(numeric.toFixed(2)), className: 'positive' };
    }
    if (numeric < 0) {
        return { text: numeric.toFixed(2), className: 'negative' };
    }
    return { text: '0.00', className: 'neutral' };
}
