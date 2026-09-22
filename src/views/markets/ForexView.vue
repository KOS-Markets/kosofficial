<template>
    <div class="forex-view">
        <CustomCarousel :title="t('forexViewTitle')" :intro="t('forexViewIntro')" :btnText="t('forexViewBtnText')"
            :background="background" @toPage="browserRedirection(link_config.register_link)"
            style="--mask-image: linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%); --bg-h: var(--bg-h-v); --right: var(--right-pos); --opacity: var(--opacity-v)" />
        <ForexBox />
        <!-- <CustomTabTable /> -->

        <MarketTextContentBox :list="textList" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import CustomCarousel from '@/components/custom/CustomCarousel.vue';
import ForexBox from '@/components/markets/ForexBox.vue';
// import CustomTabTable from '@/components/custom/CustomTabTable.vue';
import MarketTextContentBox from '@/components/markets/MarketTextContentBox.vue';

import background from '@/assets/img/markets/forex/forex-bg.jpg';

import { browserRedirection } from '@/utils/tools'
import type { CustomBoxItemType } from '@/types/index'

import { link_config } from '@/config';

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const textList = ref<CustomBoxItemType[]>([
    {
        title: t('forexTextBox'),
        text: t('forexTextBox1'),
    },
    {
        title: t('forexTextBox2'),
        text: t('forexTextBox3'),
    },
    {
        title: t('forexTextBox4'),
        text: t('forexTextBox5'),
    },
])
</script>

<style lang="scss" scoped>
.forex-view {
    --bg-h-v: 100%;
    --right-pos: 200px;
    --opacity-v: 1;

    @media (max-width: 1500px) {
        --right-pos: 0;
    }

    @media (max-width: 1100px) {
        --right-pos: -50px;
    }

    @media (max-width: 650px) {
        --right-pos: -100px;
        --opacity-v: 0.2;
        --bg-h-v: 80%;
    }
}
</style>
