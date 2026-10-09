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
exports.useAppStore = void 0;
var vue_1 = require("vue");
var pinia_1 = require("pinia");
var index_1 = require("@/apis/index");
var tools_1 = require("@/utils/tools");
exports.useAppStore = (0, pinia_1.defineStore)('app', function () {
    var showNotificationBar = (0, vue_1.ref)(true);
    var uuid = (0, vue_1.ref)('');
    var systemSetting = (0, vue_1.ref)({
        id: "",
        timezone: "0"
    });
    var menuList = (0, vue_1.ref)([
        {
            name: "trading",
            subTitle: "",
            path: "",
            icon: "",
            childrenShow: false,
            children: [
                {
                    name: "platforms",
                    subTitle: "platformsViewSubTitle",
                    path: "tradingPlatforms",
                    icon: "Platform",
                },
                {
                    name: "accounts",
                    subTitle: "accountViewSubTitle",
                    path: "tradingAccount",
                    icon: "User",
                },
            ]
        },
        {
            name: "markets",
            subTitle: "",
            path: "",
            icon: "",
            childrenShow: false,
            children: [
                {
                    name: "forex",
                    subTitle: "forexViewSubTitle",
                    path: "marketsForex",
                    icon: "MagicStick",
                },
                {
                    name: "indices",
                    subTitle: "indicesViewSubTitle",
                    path: "marketsIndices",
                    icon: "Histogram",
                },
                {
                    name: "crypto",
                    subTitle: "cryptoViewSubTitle",
                    path: "marketsCrypto",
                    icon: "Money",
                },
                {
                    name: "stocks",
                    subTitle: "stocksViewSubTitle",
                    path: "marketsStocks",
                    icon: "Coin",
                },
                {
                    name: "energy",
                    subTitle: "energyViewSubTitle",
                    path: "marketsEnergy",
                    icon: "Lightning",
                },
                {
                    name: "metals",
                    subTitle: "metalsViewSubTitle",
                    path: "marketsMetals",
                    icon: "Odometer",
                },
            ]
        },
        {
            name: "tools",
            subTitle: "",
            path: "",
            icon: "",
            childrenShow: false,
            children: [
                {
                    name: "marketNews",
                    subTitle: "marketNewsViewSubTitle",
                    path: "toolsMarketNews",
                    icon: "CollectionTag",
                },
                {
                    name: "economicCalendar",
                    subTitle: "economicCalendarViewSubTitle",
                    path: "toolsEconomicCalendar",
                    icon: "Calendar",
                },
                {
                    name: "marketAnalyst",
                    subTitle: "marketAnalystViewSubTitle",
                    // path: "toolsMarketAnalyst",
                    path: "",
                    icon: "DataAnalysis",
                },
                {
                    name: "pamm",
                    subTitle: "pammViewSubTitle",
                    // path: "toolsPAMM",
                    path: "",
                    icon: "Notification",
                },
                {
                    name: "tradingSignals",
                    subTitle: "tradingSignalsViewSubTitle",
                    // path: "toolsTradingSignals",
                    path: "",
                    icon: "WindPower",
                },
                {
                    name: "socialTrading",
                    subTitle: "socialTradingViewSubTitle",
                    // path: "toolsSocialTrading",
                    path: "",
                    icon: "PieChart",
                },
                {
                    name: "educationAcademy",
                    subTitle: "educationAcademyViewSubTitle",
                    // path: "toolsEducationAcademy",
                    path: "",
                    icon: "School",
                },
                {
                    name: "announcement",
                    subTitle: "announcementListSubTitle",
                    path: "toolsAnnouncementList",
                    // path: "",
                    icon: "Document",
                },
            ]
        },
        {
            name: "company",
            subTitle: "",
            path: "",
            icon: "",
            childrenShow: false,
            children: [
                {
                    name: "about",
                    subTitle: "aboutViewSubTitle",
                    path: "companyAbout",
                    icon: "OfficeBuilding",
                },
                {
                    name: "why",
                    subTitle: "whyViewSubTitle",
                    path: "companyWhy",
                    icon: "QuestionFilled",
                },
                // {
                //   name: "legalDocuments",
                //   subTitle: "legalDocumentsViewSubTitle",
                //   path: "companyLegalDocuments",
                //   icon: "Reading",
                // },
                {
                    name: "contactUs",
                    subTitle: "contactUsViewSubTitle",
                    path: "companyContactUs",
                    icon: "Service",
                },
                {
                    name: "career",
                    subTitle: "careerViewSubTitle",
                    path: "companyCareer",
                    icon: "SuitcaseLine",
                },
                {
                    name: "faq",
                    subTitle: "faqViewSubTitle",
                    path: "companyFaq",
                    icon: "Warning",
                },
            ]
        },
        // {
        //   name: "partnership",
        //   subTitle: "",
        //   path: "partnership",
        //   icon: "",
        //   childrenShow: false,
        //   children: []
        // },
        // {
        //   name: "promotion",
        //   subTitle: "",
        //   path: "",
        //   icon: "",
        //   childrenShow: false,
        //   children: [
        //     {
        //       name: "worldCup2026",
        //       subTitle: "",
        //       path: "promotionWorldCup2026",
        //       icon: "",
        //     },
        //   ]
        // },
    ]);
    //获取位置接口
    //https://ipapi.co/json/ 检测是否是欧盟或者是另外19个国家，是则保留不是则跳转到com
    //强制跳转，点击或五秒后自动跳转
    //位置保存在localstorage中，有则自动检测，无则获取，一天后删除
    //错误或者其他情况保留在此网站
    var getLocation = function () { return __awaiter(void 0, void 0, void 0, function () {
        var locationDate, today, locationData, locationEU, response, language, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    locationDate = localStorage.getItem('locationDate');
                    today = new Date().toDateString();
                    if (locationDate != null) {
                        if (today != locationDate) {
                            localStorage.removeItem('locationDate');
                            localStorage.removeItem('locationEU');
                        }
                    }
                    locationData = null;
                    locationEU = localStorage.getItem('locationEU');
                    if (!(locationEU == null)) return [3 /*break*/, 6];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch('https://ipapi.co/json/')];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()
                        //判断是否在欧盟或者另外19个国家内
                    ];
                case 3:
                    locationData = _a.sent();
                    //判断是否在欧盟或者另外19个国家内
                    if (locationData.in_eu == true ||
                        locationData.country_code == 'MC' ||
                        locationData.country_code == 'AD' ||
                        locationData.country_code == 'SM' ||
                        locationData.country_code == 'VA' ||
                        locationData.country_code == 'LI' ||
                        locationData.country_code == 'CH' ||
                        locationData.country_code == 'NO' ||
                        locationData.country_code == 'IS' ||
                        locationData.country_code == 'GB' ||
                        locationData.country_code == 'UK' ||
                        locationData.country_code == 'AL' ||
                        locationData.country_code == 'MK' ||
                        locationData.country_code == 'BA' ||
                        locationData.country_code == 'ME' ||
                        locationData.country_code == 'RS' ||
                        locationData.country_code == 'MD' ||
                        locationData.country_code == 'BY' ||
                        locationData.country_code == 'UA' ||
                        locationData.country_code == 'RU' ||
                        locationData.country_code == 'TR') {
                        locationEU = '1';
                    }
                    else {
                        locationEU = '0';
                    }
                    //如果在中国范围设置为中文
                    if (locationData.country_code == 'CN' ||
                        locationData.country_code == 'TW' ||
                        locationData.country_code == 'HK' ||
                        locationData.country_code == 'MO') {
                        language = localStorage.getItem("lang");
                        if (language == null) {
                            localStorage.setItem("lang", "cn");
                            location.reload();
                        }
                    }
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    // console.error('位置获取失败:', err)
                    // error.value = err.message || '网络请求失败，请检查连接'
                    locationEU = '1';
                    return [3 /*break*/, 5];
                case 5:
                    localStorage.setItem('locationDate', today);
                    localStorage.setItem('locationEU', locationEU + '');
                    _a.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    }); };
    //随机uuid连接iframe
    var getUsername = function () {
        uuid.value = localStorage.getItem('username');
        if (uuid.value == null || uuid.value == '') {
            uuid.value = (0, tools_1.generateUUID)();
            localStorage.setItem('username', uuid.value);
        }
    };
    var selectSystemSetting = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, index_1.systemSettingSelect)()];
                case 1:
                    res = _a.sent();
                    if (res.code == 200 && res.data) {
                        systemSetting.value = res.data;
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return { showNotificationBar: showNotificationBar, menuList: menuList, getLocation: getLocation, getUsername: getUsername, uuid: uuid, selectSystemSetting: selectSystemSetting, systemSetting: systemSetting };
});
