<template>
    <div class="career-view">
        <CustomCarousel :title="t('careerViewTitle')" :intro="t('careerViewIntro')" :btnText="t('contactUsViewTitle')" :background="background" @toPage="browserRedirection(link_config.register_link)"
            style="--mask-image: linear-gradient(to right, transparent 0%, black 20%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%); --bg-h: var(--bg-h-v); --right: var(--right-pos); --opacity: var(--opacity-v)" />

        <CareerBox />
    </div>
</template>

<script setup lang="ts">
import CustomCarousel from '@/components/custom/CustomCarousel.vue';
import CareerBox from '@/components/company/CareerBox.vue';

import background from '@/assets/img/company/career/bg.jpg';

import { browserRedirection } from '@/utils/tools'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import { link_config } from '@/config';
</script>

<style lang="scss" scoped>
.career-view {
    --bg-h-v: 100%;
    --right-pos: 100px;
    --opacity-v: 1;

    @media (max-width: 1500px) {
        --right-pos: 50px;
    }

    @media (max-width: 1100px) {
        --opacity-v: 0.5;
        --right-pos: -130px;
    }

    @media (max-width: 650px) {
        --right-pos: -150px;
        --opacity-v: 0.2;
        --bg-h-v: 80%;
    }
}
</style>
