import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import PageLayout from '@/views/PageLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      component: PageLayout,
      redirect: '/home', //重定向
      children: [
        {
          path: '/home',
          name: 'home',
          component: HomeView,
        },

        {
          path: '/trading/platforms',
          name: 'tradingPlatforms',
          component: () => import('@/views/trading/PlatformsView.vue'),
        },        
        {
          path: '/trading/account',
          name: 'tradingAccount',
          component: () => import('@/views/trading/AccountView.vue'),
        },

        {
          path: '/markets/forex',
          name: 'marketsForex',
          component: () => import('@/views/markets/ForexView.vue'),
        },
        {
          path: '/markets/indices',
          name: 'marketsIndices',
          component: () => import('@/views/markets/IndicesView.vue'),
        },
        {
          path: '/markets/stocks',
          name: 'marketsStocks',
          component: () => import('@/views/markets/StocksView.vue'),
        },
        {
          path: '/markets/energy',
          name: 'marketsEnergy',
          component: () => import('@/views/markets/EnergyView.vue'),
        },
        {
          path: '/markets/metals',
          name: 'marketsMetals',
          component: () => import('@/views/markets/MetalsView.vue'),
        },
        {
          path: '/markets/crypto',
          name: 'marketsCrypto',
          component: () => import('@/views/markets/CryptoView.vue'),
        },


        {
          path: '/tools/market-news',
          name: 'toolsMarketNews',
          component: () => import('@/views/tools/MarketNewsView.vue'),
        },
        {
          path: '/tools/economic-calendar',
          name: 'toolsEconomicCalendar',
          component: () => import('@/views/tools/EconomicCalendarView.vue'),
        },
        {
          path: '/tools/market-analyst',
          name: 'toolsMarketAnalyst',
          component: () => import('@/views/tools/MarketAnalystView.vue'),
        },
        {
          path: '/tools/pamm',
          name: 'toolsPAMM',
          component: () => import('@/views/tools/PAMMView.vue'),
        },
        {
          path: '/tools/trading-signals',
          name: 'toolsTradingSignals',
          component: () => import('@/views/tools/TradingSignalsView.vue'),
        },
        {
          path: '/tools/social-trading',
          name: 'toolsSocialTrading',
          // Temporarily hidden at the user's request. Keep the legacy path safe by redirecting home.
          redirect: '/home',
          meta: { hidden: true },
        },
        {
          path: '/tools/education-academy',
          name: 'toolsEducationAcademy',
          component: () => import('@/views/tools/EducationAcademyView.vue'),
        },
        {
          path: '/tools/announcement/list',
          name: 'toolsAnnouncementList',
          component: () => import('@/views/tools/AnnouncementList.vue'),
        },
        {
          path: '/tools/announcement/detail',
          name: 'toolsAnnouncementDetail',
          component: () => import('@/views/tools/AnnouncementDetail.vue'),
        },


        {
          path: '/company/about',
          name: 'companyAbout',
          component: () => import('@/views/company/AboutView.vue'),
        },
        {
          path: '/company/why',
          name: 'companyWhy',
          component: () => import('@/views/company/WhyView.vue'),
        },
        {
          path: '/company/legal-documents',
          name: 'companyLegalDocuments',
          component: () => import('@/views/company/LegalDocumentsView.vue'),
        },
        {
          path: '/company/contact-us',
          name: 'companyContactUs',
          component: () => import('@/views/company/ContactUsView.vue'),
        },
        {
          path: '/company/career',
          name: 'companyCareer',
          component: () => import('@/views/company/CareerView.vue'),
        },
        {
          path: '/company/faq',
          name: 'companyFaq',
          component: () => import('@/views/company/FaqView.vue'),
        },
        {
          path: '/privacy-policy.html',
          name: 'privacyPolicy',
          component: () => import('@/views/company/PrivacyPolicyView.vue'),
        },

        {
          path: '/partnership',
          name: 'partnership',
          component: () => import('@/views/PartnershipView.vue'),
        },

        {
          path: '/promotion/world-cup-2026',
          name: 'promotionWorldCup2026',
          component: () => import('@/views/promotion/WorldCup2026View.vue'),
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
  scrollBehavior(to, from, savedPosition) {
    // 如果有保存的位置（如浏览器后退），使用保存的位置
    // if (savedPosition) {
    //   return savedPosition
    // }
    // 否则滚动到顶部, behavior: 'smooth'
    return { top: 0 }
  }
})

export default router
