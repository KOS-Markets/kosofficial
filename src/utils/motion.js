"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upListHoverAnimateVariants = exports.opacityAnimateVariants = exports.hoverUpAnimateVariants = exports.heightListAnimateVariants = exports.upListAnimateVariants = exports.rightAnimateVariants = exports.leftAnimateVariants = exports.upAnimateVariants = void 0;
exports.upAnimateVariants = {
    visible: function () { return ({
        y: 0,
        opacity: 1,
        transition: { duration: 0.7 }
    }); },
    hidden: { y: 100, opacity: 0 }
};
exports.leftAnimateVariants = {
    visible: function () { return ({
        x: 0,
        opacity: 1,
        transition: { duration: 0.7 }
    }); },
    hidden: { x: -100, opacity: 0 }
};
exports.rightAnimateVariants = {
    visible: function () { return ({
        x: 0,
        opacity: 1,
        transition: { duration: 0.7 }
    }); },
    hidden: { x: 100, opacity: 0 }
};
exports.upListAnimateVariants = {
    visible: function (index) { return ({
        y: 0,
        opacity: 1,
        transition: { delay: index * 0.1, duration: 0.7 }
    }); },
    hidden: { y: 100, opacity: 0 }
};
exports.heightListAnimateVariants = {
    visible: function () { return ({
        height: 'auto',
        opacity: 1,
        transition: { duration: 0.3 }
    }); },
    hidden: { height: 0, opacity: 0 }
};
exports.hoverUpAnimateVariants = {
    hover: function () { return ({
        y: -15,
        transition: { duration: 0.3 }
    }); }
};
exports.opacityAnimateVariants = {
    visible: function () { return ({
        opacity: 1,
        transition: { duration: 0.7 }
    }); },
    hidden: { opacity: 0 }
};
exports.upListHoverAnimateVariants = {
    visible: function (index) { return ({
        y: 0,
        opacity: 1,
        transition: { delay: index * 0.1, duration: 0.4 }
    }); },
    hidden: { y: 60, opacity: 0 },
};
