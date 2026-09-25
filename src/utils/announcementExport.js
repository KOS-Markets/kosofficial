"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAnnouncementExportSandbox = exports.buildAnnouncementExportConfig = exports.ANNOUNCEMENT_EXPORT_BACKGROUND = exports.ANNOUNCEMENT_EXPORT_PADDING = exports.ANNOUNCEMENT_EXPORT_CARD_WIDTH = void 0;
exports.ANNOUNCEMENT_EXPORT_CARD_WIDTH = 880;
exports.ANNOUNCEMENT_EXPORT_PADDING = 0;
exports.ANNOUNCEMENT_EXPORT_BACKGROUND = '#000000';
var ANNOUNCEMENT_EXPORT_CARD_BACKGROUND = '#101010';
var applyInlineStyles = function (element, styles) {
    Object.entries(styles).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        var cssProperty = key.replace(/[A-Z]/g, function (match) { return "-".concat(match.toLowerCase()); });
        element.style.setProperty(cssProperty, value);
    });
};
var buildAnnouncementExportConfig = function (cardWidth, padding, backgroundColor) {
    if (cardWidth === void 0) { cardWidth = exports.ANNOUNCEMENT_EXPORT_CARD_WIDTH; }
    if (padding === void 0) { padding = exports.ANNOUNCEMENT_EXPORT_PADDING; }
    if (backgroundColor === void 0) { backgroundColor = exports.ANNOUNCEMENT_EXPORT_BACKGROUND; }
    var wrapperWidth = cardWidth + padding * 2;
    return {
        cardWidth: cardWidth,
        padding: padding,
        wrapperWidth: wrapperWidth,
        backgroundColor: backgroundColor,
        wrapperStyles: {
            // position: 'fixed',
            // left: '-100000px',
            // top: '0',
            width: "".concat(wrapperWidth, "px"),
            // padding: `${padding}px`,
            // boxSizing: 'border-box',
            background: backgroundColor,
            // overflow: 'visible',
            // zIndex: '-1',
        },
        cardStyles: {
            // width: `${cardWidth}px`,
            // maxWidth: 'none',
            // margin: '0',
            background: ANNOUNCEMENT_EXPORT_CARD_BACKGROUND,
            // backdropFilter: 'none',
            // webkitBackdropFilter: 'none',
            // overflow: 'visible',
        },
        scrollStyles: {
            overflow: 'visible',
        },
    };
};
exports.buildAnnouncementExportConfig = buildAnnouncementExportConfig;
var createAnnouncementExportSandbox = function (sourceElement, config) {
    if (config === void 0) { config = (0, exports.buildAnnouncementExportConfig)(); }
    var wrapper = document.createElement('div');
    var clonedCard = sourceElement.cloneNode(true);
    wrapper.setAttribute('aria-hidden', 'true');
    applyInlineStyles(wrapper, config.wrapperStyles);
    applyInlineStyles(clonedCard, config.cardStyles);
    clonedCard
        .querySelectorAll('.sample-scroll')
        .forEach(function (element) { return applyInlineStyles(element, config.scrollStyles); });
    wrapper.appendChild(clonedCard);
    document.body.appendChild(wrapper);
    return {
        wrapper: wrapper,
        clonedCard: clonedCard,
        cleanup: function () {
            wrapper.remove();
        },
    };
};
exports.createAnnouncementExportSandbox = createAnnouncementExportSandbox;
