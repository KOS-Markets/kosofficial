"use strict";
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
require("./assets/main.css");
var vue_1 = require("vue");
var pinia_1 = require("pinia");
var App_vue_1 = require("./App.vue");
var router_1 = require("./router");
var i18n_1 = require("./language/i18n");
var pageSettings_1 = require("./stores/pageSettings");
var element_plus_1 = require("element-plus");
require("element-plus/dist/index.css");
require("element-plus/theme-chalk/dark/css-vars.css");
var ElementPlusIconsVue = require("@element-plus/icons-vue");
//刚开始页面就置于顶部
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'; // 阻止浏览器自动恢复滚动位置
}
function bootstrap() {
    return __awaiter(this, void 0, void 0, function () {
        var app, _i, _a, _b, key, component;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    app = (0, vue_1.createApp)(App_vue_1.default);
                    app.use((0, pinia_1.createPinia)());
                    app.use(router_1.default);
                    app.use(i18n_1.default);
                    return [4 /*yield*/, (0, pageSettings_1.usePageSettingsStore)().initLang()];
                case 1:
                    _c.sent();
                    app.use(element_plus_1.default, {
                        zIndex: 12000,
                    });
                    for (_i = 0, _a = Object.entries(ElementPlusIconsVue); _i < _a.length; _i++) {
                        _b = _a[_i], key = _b[0], component = _b[1];
                        app.component(key, component);
                    }
                    app.mount('#app');
                    return [2 /*return*/];
            }
        });
    });
}
void bootstrap();
