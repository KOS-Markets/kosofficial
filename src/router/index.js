"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_router_1 = require("vue-router");
var HomeView_vue_1 = require("../views/HomeView.vue");
var PageLayout_vue_1 = require("@/views/PageLayout.vue");
var router = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHistory)(import.meta.env.BASE_URL),
    routes: [
        // {
        //   path: '/',
        //   name: 'homeLayout',
        //   redirect: '/home', //重定向
        //   children: []
        // },
        {
            path: '/',
            name: '',
            component: PageLayout_vue_1.default,
            redirect: '/home', //重定向
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: HomeView_vue_1.default,
                },
                {
                    path: '/trading/platforms',
                    name: 'tradingPlatforms',
                    component: function () { return Promise.resolve().then(function () { return require('@/views/trading/PlatformsView.vue'); }); },
                },
                {
                    path: '/trading/account',
                    name: 'tradingAccount',
                    component: function () { return Promise.resolve().then(function () { return require('@/views/trading/AccountView.vue'); }); },
                },
                {
                    path: '/markets/forex',
                    name: 'marketsForex',
                    component: function () { return Promise.resolve().then(function () { return require('@/views/markets/ForexView.vue'); }); },
                },
                {
                    path: '/markets/indices',
                    name: 'marketsIndices',
                    component: function () { return Promise.resolve().then(function () { return require('@/views/markets/IndicesView.vue'); }); },
                },
                {
                    path: '/markets/stocks',
                    name: 'marketsStocks',
                    component: function () { return Promise.resolve().then(function () { return require('@/views/markets/StocksView.vue'); }); },
                },
                {
                    path: '/markets/energy',
                    name: 'marketsEnergy',
                    component: function () { return Promise.resolve().then(function () { return require('@/views/markets/EnergyView.vue'); }); },
                },
                {
                    path: '/markets/metals',
                    name: 'marketsMetals',
                    component: function () { return Promise.resolve().then(function () { return require('@/views/markets/MetalsView.vue'); }); },
                },
                {
                    path: '/markets/crypto',
                    name: 'marketsCrypto',
                    component: function () { return Promise.resolve().then(function () { return require('@/views/markets/CryptoView.vue'); }); },
                },
                {
                    path: '/tools/market-news',
                    name: 'toolsMarketNews',
                    component: function () { return Promise.resolve().then(function () { return require('@/views/tools/MarketNewsView.vue'); }); },
                },
                {
                    path: '/tools/economic-calendar',
                    name: 'toolsEconomicCalendar',
                    component: function () { return Promise.resolve().then(function () { return require('@/views/tools/EconomicCalendarView.vue'); }); },
                },
                {
                    path: '/tools/market-analyst',
                    name: 'toolsMarketAnalyst',
                    component: function () { return Promise.resolve().then(function () { return require('@/views/tools/MarketAnalystView.vue'); }); },
                },
                {
                    path: '/tools/pamm',
                    name: 'toolsPAMM',
                    component: function () { return Promise.resolve().then(function () { return require('@/views/tools/PAMMView.vue'); }); },
                },
                {
                    path: '/tools/trading-signals',
                    name: 'toolsTradingSignals',
                    component: function () { return Promise.resolve().then(function () { return require('@/views/tools/TradingSignalsView.vue'); }); },
                },
                {
                    path: '/tools/social-trading',
                    name: 'toolsSocialTrading',
                    component: function () { return Promise.resolve().then(function () { return require('@/views/tools/SocialTradingView.vue'); }); },
                },
                {
                    path: '/tools/education-academy',
                    name: 'toolsEducationAcademy',
                    component: function () { return Promise.resolve().then(function () { return require('@/views/tools/EducationAcademyView.vue'); }); },
                },
                {
                    path: '/tools/announcement/list',
                    name: 'toolsAnnouncementList',
                    component: function () { return Promise.resolve().then(function () { return require('@/views/tools/AnnouncementList.vue'); }); },
                },
                {
                    path: '/tools/announcement/detail',
                    name: 'toolsAnnouncementDetail',
                    component: function () { return Promise.resolve().then(function () { return require('@/views/tools/AnnouncementDetail.vue'); }); },
                },
                {
                    path: '/company/about',
                    name: 'companyAbout',
                    component: function () { return Promise.resolve().then(function () { return require('@/views/company/AboutView.vue'); }); },
                },
                {
                    path: '/company/why',
                    name: 'companyWhy',
                    component: function () { return Promise.resolve().then(function () { return require('@/views/company/WhyView.vue'); }); },
                },
                {
                    path: '/company/legal-documents',
                    name: 'companyLegalDocuments',
                    component: function () { return Promise.resolve().then(function () { return require('@/views/company/LegalDocumentsView.vue'); }); },
                },
                {
                    path: '/company/contact-us',
                    name: 'companyContactUs',
                    component: function () { return Promise.resolve().then(function () { return require('@/views/company/ContactUsView.vue'); }); },
                },
                {
                    path: '/company/career',
                    name: 'companyCareer',
                    component: function () { return Promise.resolve().then(function () { return require('@/views/company/CareerView.vue'); }); },
                },
                {
                    path: '/company/faq',
                    name: 'companyFaq',
                    component: function () { return Promise.resolve().then(function () { return require('@/views/company/FaqView.vue'); }); },
                },
                {
                    path: '/partnership',
                    name: 'partnership',
                    component: function () { return Promise.resolve().then(function () { return require('@/views/PartnershipView.vue'); }); },
                },
                {
                    path: '/promotion/world-cup-2026',
                    name: 'promotionWorldCup2026',
                    component: function () { return Promise.resolve().then(function () { return require('@/views/promotion/WorldCup2026View.vue'); }); },
                },
                // {
                //   path: '/login',
                //   name: 'login',
                //   component: () => import('@/views/LoginView.vue'),
                // },
                // {
                //   path: '/register',
                //   name: 'register',
                //   component: () => import('@/views/RegisterView.vue'),
                // },
            ]
        },
        // {
        //   path: '/about',
        //   name: 'about',
        //   // route level code-splitting
        //   // this generates a separate chunk (About.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: () => import('../views/AboutView.vue'),
        // },
    ],
    scrollBehavior: function (to, from, savedPosition) {
        // 如果有保存的位置（如浏览器后退），使用保存的位置
        // if (savedPosition) {
        //   return savedPosition
        // }
        // 否则滚动到顶部, behavior: 'smooth'
        return { top: 0 };
    }
});
exports.default = router;
