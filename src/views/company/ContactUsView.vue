<template>
    <div class="contact-us-view">
        <CustomCarousel :title="t('contactUsViewTitle')" :intro="t('contactUsViewIntro')" :btnText="t('contactUsViewTitle')"
            :background="background" @toPage="browserRedirection(link_config.register_link)"
            style="--mask-image: linear-gradient(to right, transparent 0%, black 20%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%); --bg-h: var(--bg-h-v); --right: var(--right-pos); --opacity: var(--opacity-v)" />

        <ContactUsBox />
    </div>
</template>

<script setup lang="ts">
import CustomCarousel from '@/components/custom/CustomCarousel.vue';
import ContactUsBox from '@/components/company/ContactUsBox.vue';

import background from '@/assets/img/company/contact-us/bg.jpg';

import { browserRedirection } from '@/utils/tools'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import { link_config } from '@/config';
</script>

<style lang="scss" scoped>
.contact-us-view {
    --bg-h-v: 100%;
    --right-pos: 100px;
    --opacity-v: 1;

    @media (max-width: 1500px) {
        --right-pos: 50px;
    }

    @media (max-width: 1100px) {
        --opacity-v: 0.5;
        --right-pos: 0;
    }

    @media (max-width: 650px) {
        --right-pos: -100px;
        --opacity-v: 0.2;
        --bg-h-v: 80%;
    }
}
</style>
