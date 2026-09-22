<template>
    <div class="legal-documents-box">
        <div class="container">
            <div class="text">{{ t('legalDocumentsBoxSentence') }}</div>
            <div v-if="!['cn', 'tw'].includes(pageSettingsStore.lang)" class="title">{{ t('legalDocumentsBoxSentence1') }}</div>
            <div v-if="!['cn', 'tw'].includes(pageSettingsStore.lang)" class="text">{{ t('legalDocumentsBoxSentence2') }}</div>
            <div class="title">{{ t('legalDocumentsBoxSentence3') }}</div>
            <div class="text">{{ t('legalDocumentsBoxSentence4') }}</div>
            <div class="title">{{ t('legalDocumentsBoxSentence5') }}</div>
            <div class="text">{{ t('legalDocumentsBoxSentence6') }}</div>
            <div class="title">{{ t('legalDocumentsBoxSentence7') }}</div>
            <div class="text">{{ t('legalDocumentsBoxSentence8', {email: link}) }}</div>
            <div class="title">{{ t('legalDocumentsBoxSentence9') }}</div>
            <div class="text">{{ t('legalDocumentsBoxSentence10') }}</div>
            <div class="title">{{ t('legalDocumentsBoxSentence11') }}</div>
            <div class="text">{{ t('legalDocumentsBoxSentence12') }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { usePageSettingsStore } from '@/stores/pageSettings'
const pageSettingsStore = usePageSettingsStore()

const link = ref<string>(import.meta.env.VITE_WEB_EMAIL)
</script>

<style lang="scss" scoped>
.legal-documents-box {
    width: var(--custom-width);
    margin: 0 auto;
    padding: 60px 0 80px;
    box-sizing: border-box;
    
    @media (max-width: 1100px) {
        padding: 60px 40px 80px;
    }

    @media (max-width: 768px) {
        padding: 0 24px 80px;
    }


    .container {
        display: flex;
        flex-direction: column;
        background-color: var(--bg-color-2);
        box-sizing: border-box;
        border-radius: 12px;
        padding: 40px 80px;

        @media (max-width: 768px) {
            padding: 40px 24px;
        }
    }

    .text {
        width: min(1108px, 100%);
        color: var(--gray-color-2);
        line-height: 20px;
        

        @media (max-width: 1100px) {
            font-size: 14px;
        }
    }

    .title {
        color: var(--text-color-1);
        width: min(1108px, 100%);
        font-size: 24px;
        line-height: 20px;
        margin: 60px 0 40px;

    }


}
</style>
