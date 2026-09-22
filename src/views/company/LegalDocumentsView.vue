<template>
    <div class="legal-documents-view">
        <CustomCarousel :title="t('legalDocumentsViewTitle')" :btnText="t('marketNewsViewBtnText')"
            :background="background" @toPage="browserRedirection(link_config.register_link)"/>

        <LegalDocumentsBox />
        <LegalPoliciesBox />
    </div>
</template>

<script setup lang="ts">
import CustomCarousel from '@/components/custom/CustomCarousel.vue';
import LegalDocumentsBox from '@/components/company/LegalDocumentsBox.vue';
import LegalPoliciesBox from '@/components/company/LegalPoliciesBox.vue';

import background from '@/assets/img/company/legal-documents/Section1_BG Cropped.jpg';

import { browserRedirection } from '@/utils/tools'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import { link_config } from '@/config';
</script>

<style lang="scss" scoped>
</style>
