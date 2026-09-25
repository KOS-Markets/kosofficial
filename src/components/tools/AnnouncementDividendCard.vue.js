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
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var html2canvas_1 = require("html2canvas");
var vue_i18n_1 = require("vue-i18n");
var announcementContent_1 = require("@/utils/announcementContent");
var announcementExport_1 = require("@/utils/announcementExport");
var t = (0, vue_i18n_1.useI18n)().t;
var props = defineProps();
var formattedRows = (0, vue_1.computed)(function () { return props.content.rows.map(function (row) { return row.map(function (cell, cellIndex) {
    if (cellIndex >= 2) {
        return (0, announcementContent_1.formatDividendCell)(cell);
    }
    return {
        text: cell || '—',
        className: cellIndex === 0 ? 'td-date' : 'td-sym',
    };
}); }); });
var captureArea = (0, vue_1.ref)(null);
var exportTable = function () { return __awaiter(void 0, void 0, void 0, function () {
    var element, sandbox, canvas, dataURL, link, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                element = captureArea.value;
                if (!element) {
                    console.error('Capture area not found');
                    return [2 /*return*/];
                }
                sandbox = (0, announcementExport_1.createAnnouncementExportSandbox)(element);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, 4, 5]);
                return [4 /*yield*/, (0, html2canvas_1.default)(sandbox.wrapper, {
                        backgroundColor: announcementExport_1.ANNOUNCEMENT_EXPORT_BACKGROUND,
                        scale: 2,
                        useCORS: true,
                        logging: false,
                    })];
            case 2:
                canvas = _a.sent();
                dataURL = canvas.toDataURL('image/png');
                link = document.createElement('a');
                link.href = dataURL;
                link.download = "capture-".concat(Date.now(), ".png");
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                return [3 /*break*/, 5];
            case 3:
                error_1 = _a.sent();
                console.error('Failed to export table image', error_1);
                alert('error');
                return [3 /*break*/, 5];
            case 4:
                sandbox.cleanup();
                return [7 /*endfinally*/];
            case 5: return [2 /*return*/];
        }
    });
}); };
var __VLS_ctx = __assign(__assign(__assign(__assign({}, {}), {}), {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['export-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['export-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['export-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['notice-body']} */ ;
/** @type {__VLS_StyleScopedClasses['notice-body']} */ ;
/** @type {__VLS_StyleScopedClasses['dividend-table']} */ ;
/** @type {__VLS_StyleScopedClasses['dividend-table']} */ ;
/** @type {__VLS_StyleScopedClasses['dividend-table']} */ ;
/** @type {__VLS_StyleScopedClasses['dividend-table']} */ ;
/** @type {__VLS_StyleScopedClasses['dividend-table']} */ ;
/** @type {__VLS_StyleScopedClasses['dividend-table']} */ ;
/** @type {__VLS_StyleScopedClasses['dividend-table']} */ ;
/** @type {__VLS_StyleScopedClasses['sample-table']} */ ;
/** @type {__VLS_StyleScopedClasses['sample-table']} */ ;
/** @type {__VLS_StyleScopedClasses['sample-table']} */ ;
/** @type {__VLS_StyleScopedClasses['sample-table']} */ ;
/** @type {__VLS_StyleScopedClasses['disclaimer']} */ ;
/** @type {__VLS_StyleScopedClasses['fn']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "sample-card-btn" }));
/** @type {__VLS_StyleScopedClasses['sample-card-btn']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign({ onClick: (__VLS_ctx.exportTable) }, { class: "export-btn" }));
/** @type {__VLS_StyleScopedClasses['export-btn']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.svg, __VLS_intrinsics.svg)({
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    'stroke-width': "2.2",
    'stroke-linecap': "round",
    'stroke-linejoin': "round",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.rect)({
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.path)({
    d: "M3 9h18M9 21V9",
});
(__VLS_ctx.t('exportTable'));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ ref: "captureArea" }, { class: "sample-card" }));
/** @type {__VLS_StyleScopedClasses['sample-card']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "sample-card-header" }));
/** @type {__VLS_StyleScopedClasses['sample-card-header']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "notice-type" }));
/** @type {__VLS_StyleScopedClasses['notice-type']} */ ;
(__VLS_ctx.t('announcementDividendNoticeType'));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "sample-card-title" }));
/** @type {__VLS_StyleScopedClasses['sample-card-title']} */ ;
(__VLS_ctx.title);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "entry-count" }));
/** @type {__VLS_StyleScopedClasses['entry-count']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)(__assign({ class: "meta-lbl" }));
/** @type {__VLS_StyleScopedClasses['meta-lbl']} */ ;
(__VLS_ctx.t('announcementDividendEntries'));
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)(__assign({ class: "meta-big" }));
/** @type {__VLS_StyleScopedClasses['meta-big']} */ ;
(__VLS_ctx.content.rows.length);
if (__VLS_ctx.content.introParagraphs.length) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "notice-body" }));
    /** @type {__VLS_StyleScopedClasses['notice-body']} */ ;
    for (var _i = 0, _a = __VLS_vFor((__VLS_ctx.content.introParagraphs)); _i < _a.length; _i++) {
        var _b = _a[_i], paragraph = _b[0], index = _b[1];
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
            key: ("intro-".concat(index)),
        });
        (paragraph);
        // @ts-ignore
        [exportTable, t, t, t, title, content, content, content,];
    }
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "sample-scroll" }));
/** @type {__VLS_StyleScopedClasses['sample-scroll']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.table, __VLS_intrinsics.table)(__assign({ class: "sample-table dividend-table" }));
/** @type {__VLS_StyleScopedClasses['sample-table']} */ ;
/** @type {__VLS_StyleScopedClasses['dividend-table']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.thead, __VLS_intrinsics.thead)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
for (var _c = 0, _d = __VLS_vFor((__VLS_ctx.content.tableHeaders)); _c < _d.length; _c++) {
    var _e = _d[_c], header = _e[0], index = _e[1];
    __VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)(__assign({ key: ("".concat(header, "-").concat(index)) }, { class: ({ 'numh': index >= 2 }) }));
    /** @type {__VLS_StyleScopedClasses['numh']} */ ;
    (header);
    // @ts-ignore
    [content,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.tbody, __VLS_intrinsics.tbody)({});
for (var _f = 0, _g = __VLS_vFor((__VLS_ctx.formattedRows)); _f < _g.length; _f++) {
    var _h = _g[_f], row = _h[0], rowIndex = _h[1];
    __VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({
        key: ("row-".concat(rowIndex)),
    });
    for (var _j = 0, _k = __VLS_vFor((row)); _j < _k.length; _j++) {
        var _l = _k[_j], cell = _l[0], cellIndex = _l[1];
        __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
            key: ("cell-".concat(rowIndex, "-").concat(cellIndex)),
        });
        if (cellIndex >= 2) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)(__assign({ class: "td-swap" }));
            /** @type {__VLS_StyleScopedClasses['td-swap']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)(__assign({ class: (cell.className) }));
            (cell.text);
        }
        else {
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)(__assign({ class: (cell.className) }));
            (cell.text);
        }
        // @ts-ignore
        [formattedRows,];
    }
    // @ts-ignore
    [];
}
if (__VLS_ctx.content.footerParagraphs.length) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "disclaimer" }));
    /** @type {__VLS_StyleScopedClasses['disclaimer']} */ ;
    for (var _m = 0, _o = __VLS_vFor((__VLS_ctx.content.footerParagraphs)); _m < _o.length; _m++) {
        var _p = _o[_m], paragraph = _p[0], index = _p[1];
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
            key: ("footer-".concat(index)),
        });
        (paragraph);
        // @ts-ignore
        [content, content,];
    }
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "card-footer" }));
/** @type {__VLS_StyleScopedClasses['card-footer']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)(__assign({ class: "fn" }));
/** @type {__VLS_StyleScopedClasses['fn']} */ ;
(__VLS_ctx.t('announcementDividendFooterText'));
__VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
(__VLS_ctx.t('announcementDividendFooterHighlight'));
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)(__assign({ class: "fn" }));
/** @type {__VLS_StyleScopedClasses['fn']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)(__assign({ class: "legend-positive" }));
/** @type {__VLS_StyleScopedClasses['legend-positive']} */ ;
(__VLS_ctx.t('announcementDividendLong'));
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)(__assign({ class: "legend-negative" }));
/** @type {__VLS_StyleScopedClasses['legend-negative']} */ ;
(__VLS_ctx.t('announcementDividendShort'));
// @ts-ignore
[t, t, t, t,];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    __typeProps: {},
});
exports.default = {};
