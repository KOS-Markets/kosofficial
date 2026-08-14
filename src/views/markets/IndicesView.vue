<template>
    <div class="indices-view">
        <CustomCarousel :title="t('indicesViewTitle')" :intro="t('indicesViewIntro')" :btnText="t('forexViewBtnText')"
            :background="background" @toPage="browserRedirection(link_config.register_link)"
            style="--bg-h: var(--bg-h-v); --right: var(--right-pos); --opacity: var(--opacity-v)"/>

        <MarketFeatureColumnsBox :list="textList1" />

        <IndicesBox />

        <!-- <CustomTabTable /> -->

        <MarketTextContentBox :list="textList" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import CustomCarousel from '@/components/custom/CustomCarousel.vue';
import MarketFeatureColumnsBox from '@/components/markets/MarketFeatureColumnsBox.vue';
import IndicesBox from '@/components/markets/IndicesBox.vue';
// import CustomTabTable from '@/components/custom/CustomTabTable.vue';
import MarketTextContentBox from '@/components/markets/MarketTextContentBox.vue';

import background from '@/assets/img/markets/indices/bg.jpg';

import { browserRedirection } from '@/utils/tools'
import type { CustomBoxItemType } from '@/types/index'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import { link_config } from '@/config';

const textList1 = ref<CustomBoxItemType[]>([
    {
        title: t('indicesText1Box'),
        text: t('indicesText1Box1'),
    },
    {
        title: t('indicesText1Box2'),
        text: t('indicesText1Box3'),
    },
    {
        title: t('indicesText1Box4'),
        text: t('indicesText1Box5'),
    },
])

const textList = ref<CustomBoxItemType[]>([
    {
        title: t('forexTextBox'),
        text: t('indicesTextBox'),
    },
    {
        title: t('forexTextBox4'),
        text: t('indicesTextBox1'),
    },
    {
        title: t('forexTextBox2'),
        text: t('indicesTextBox2'),
    },
])
</script>

<style lang="scss" scoped>
.indices-view {
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
