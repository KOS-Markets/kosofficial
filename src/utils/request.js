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
var axios_1 = require("axios");
var service = axios_1.default.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 50000,
});
var service2 = axios_1.default.create({
    // baseURL: 'http://127.0.0.1:3000',
    baseURL: 'https://webdata.kosbackenddata.com',
    timeout: 50000,
});
service.interceptors.request.use(function (config) {
    var _a;
    if (!(config.data instanceof FormData)) {
        config.headers.set('Content-Type', 'application/json;charset=utf-8');
    }
    config.headers.set('lang', (_a = localStorage.getItem('lang')) !== null && _a !== void 0 ? _a : 'en');
    return config;
});
// 在 post 函数下方添加
function get(url, params, config) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_1, status_1, body;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, service2.get(url, __assign(__assign({}, config), { params: params }))];
                case 1:
                    response = _c.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_1 = _c.sent();
                    if (axios_1.default.isAxiosError(error_1)) {
                        status_1 = (_a = error_1.response) === null || _a === void 0 ? void 0 : _a.status;
                        if (status_1 === 404 || status_1 === 405) {
                            console.warn("[api] ".concat(status_1, " ").concat(url, " \u2014 endpoint missing"));
                        }
                        body = (_b = error_1.response) === null || _b === void 0 ? void 0 : _b.data;
                        return [2 /*return*/, body !== null && body !== void 0 ? body : { code: status_1 !== null && status_1 !== void 0 ? status_1 : 0, msg: error_1.message || 'Network Error' }];
                    }
                    return [2 /*return*/, { code: 0, msg: error_1.message || 'Unknown Error' }];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function post(url, data, config) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_2, status_2, body;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, service.post(url, data, config)];
                case 1:
                    response = _c.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_2 = _c.sent();
                    if (axios_1.default.isAxiosError(error_2)) {
                        status_2 = (_a = error_2.response) === null || _a === void 0 ? void 0 : _a.status;
                        if (status_2 === 404 || status_2 === 405) {
                            console.warn("[api] ".concat(status_2, " ").concat(url, " \u2014 endpoint missing"));
                        }
                        body = (_b = error_2.response) === null || _b === void 0 ? void 0 : _b.data;
                        return [2 /*return*/, body !== null && body !== void 0 ? body : { code: status_2 !== null && status_2 !== void 0 ? status_2 : 0, msg: error_2.message || 'Network Error' }];
                    }
                    return [2 /*return*/, { code: 0, msg: error_2.message || 'Unknown Error' }];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.default = { get: get, post: post };
