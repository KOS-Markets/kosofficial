<template>
    <div class="about-view">
        <CustomCarousel :title="t('aboutViewTitle')" :btnText="t('marketNewsViewBtnText')"
            :background="background" @toPage="browserRedirection(link_config.register_link)"
            style="--mask-image: linear-gradient(to right, transparent 0%, black 20%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%); --bg-h: var(--bg-h-v); --right: var(--right-pos); --opacity: var(--opacity-v)" />

        <AboutBox :list="textList" />
        <AboutOverviewBox />
        <AboutImageTextBox />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import CustomCarousel from '@/components/custom/CustomCarousel.vue';
import AboutBox from '@/components/company/AboutBox.vue';
import AboutOverviewBox from '@/components/company/AboutOverviewBox.vue';
import AboutImageTextBox from '@/components/company/AboutImageTextBox.vue';

import background from '@/assets/img/company/about/bg.jpg';

import { browserRedirection } from '@/utils/tools'
import type { CustomBoxItemType } from '@/types/index'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const textList = ref<CustomBoxItemType[]>([
    {
        title: t('aboutBoxSentence'),
    },
    {
        title: t('aboutBoxSentence1'),
    },
    {
        title: t('aboutBoxSentence2'),
    },
])

import { link_config } from '@/config';

</script>

<style lang="scss" scoped>
.about-view {
    --bg-h-v: 100%;
    --right-pos: 100px;
    --opacity-v: 1;

    @media (max-width: 1500px) {
        --right-pos: 10px;
    }

    @media (max-width: 1100px) {
        --opacity-v: 0.5;
        --right-pos: -100px;
    }

    @media (max-width: 650px) {
        --right-pos: -180px;
        --opacity-v: 0.2;
        --bg-h-v: 80%;
    }
}
</style>
