<template>
    <div class="faq-view">
        <CustomCarousel :title="t('faqViewTitle')" :background="background" @toPage="browserRedirection(link_config.register_link)"
            style="--mask-image: linear-gradient(to right, transparent 0%, black 20%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%); --bg-h: var(--bg-h-v); --right: var(--right-pos); --opacity: var(--opacity-v); --text-align: var(--text-align-v)" />

        <FaqBox />
    </div>
</template>

<script setup lang="ts">
import CustomCarousel from '@/components/custom/CustomCarousel.vue';
import FaqBox from '@/components/company/FaqBox.vue';

import background from '@/assets/img/company/faq/bg.jpg';

import { browserRedirection } from '@/utils/tools'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import { link_config } from '@/config';
</script>

<style lang="scss" scoped>
.faq-view {
    --bg-h-v: 100%;
    --right-pos: 100px;
    --opacity-v: 1;

    @media (max-width: 1500px) {
        --right-pos: 0;
    }

    @media (max-width: 1100px) {
        --right-pos: -200px;
        --opacity-v: 0.5;
    }

    @media (max-width: 650px) {
        --right-pos: -300px;
        --bg-h-v: 100%;
        --text-align-v: center;
        --opacity-v: 0.2;
    }
}
</style>
