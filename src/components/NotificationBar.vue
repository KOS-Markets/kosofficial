<template>
    <div class="notification-bar">
        <div class="content"  v-html="t('footerContent')"></div>
        <div class="close">
            <el-icon @click="close">
                <Close />
            </el-icon>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, watch } from 'vue'

import { useAppStore } from '@/stores/app'
const store = useAppStore()
import { usePageSettingsStore } from '@/stores/pageSettings'
const pageSettingsStore = usePageSettingsStore()
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

watch(() => pageSettingsStore.lang, ()=>{
    if(pageSettingsStore.lang == 'cn' || pageSettingsStore.lang == 'tw'){
        store.showNotificationBar = false
    }
})

onBeforeMount(() => {
    // store.showNotificationBar = true

    if (localStorage.getItem('notification-bar') != null) {
        const today = new Date().toDateString();
        if (today == localStorage.getItem('notification-bar')) {
            store.showNotificationBar = false
        } else {
            store.showNotificationBar = true
        }
    } else {
        store.showNotificationBar = true
    }


    // if(pageSettingsStore.lang == 'cn'){
        store.showNotificationBar = false
    // }

})

const close = () => {
    store.showNotificationBar = false
    localStorage.setItem('notification-bar', new Date().toDateString())
}
</script>

<style lang="scss" scoped>
.notification-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    background-color: var(--bg-color-1);
    padding: 20px 30px;
    box-sizing: border-box;
    color: var(--gray-color-1);
    z-index: 1000;

    .content {
        flex: 1;
        font-size: 12px;

        @media (max-width: 1100px) {
            font-size: 10px;
        }

        p {
            margin: 0;
            line-height: 2.2;

            @media (max-width: 1100px) {
                line-height: 1.7;
            }

        }
    }

    .close {
        font-size: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-inline-start: 10px;

        .el-icon {
            cursor: pointer;
        }
    }
}
</style>
