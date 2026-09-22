import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import i18n from './language/i18n'
import { usePageSettingsStore } from './stores/pageSettings'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

//刚开始页面就置于顶部
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'; // 阻止浏览器自动恢复滚动位置
}

async function bootstrap() {
    const app = createApp(App)

    app.use(createPinia())
    app.use(router)
    app.use(i18n)

    await usePageSettingsStore().initLang()

    app.use(ElementPlus, {
        zIndex: 12000,
    })
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
    }

    app.mount('#app')
}

void bootstrap()
