<template>
    <div class="stocks-view">
        <CustomCarousel :title="t('stocksViewTitle')" :intro="t('stocksViewIntro')" :btnText="t('forexViewBtnText')"
            :background="background" @toPage="browserRedirection(link_config.register_link)"
            style="--mask-image: linear-gradient(to right, transparent 0%, black 20%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%); --bg-h: var(--bg-h-v); --right: var(--right-pos); --opacity: var(--opacity-v)" />

        <MarketFeatureColumnsBox :list="textList1" />

        <MarketsBox :data="data" />

        <!-- <CustomTabTable /> -->

        <MarketTextContentBox :list="textList" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import CustomCarousel from '@/components/custom/CustomCarousel.vue';
import MarketFeatureColumnsBox from '@/components/markets/MarketFeatureColumnsBox.vue';
import MarketsBox from '@/components/markets/MarketsBox.vue';
// import CustomTabTable from '@/components/custom/CustomTabTable.vue';
import MarketTextContentBox from '@/components/markets/MarketTextContentBox.vue';

import background from '@/assets/img/markets/stocks/bg.jpg';
import icon1 from '@/assets/img/markets/stocks/why-1.jpg'
import icon2 from '@/assets/img/markets/stocks/why-2.jpg'
import icon3 from '@/assets/img/markets/stocks/why-3.jpg'
import icon4 from '@/assets/img/markets/stocks/why-4.jpg'
import icon5 from '@/assets/img/markets/stocks/why-5.png'

import { browserRedirection } from '@/utils/tools'
import type { CustomBoxItemType, CustomBoxType } from '@/types/index'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import { link_config } from '@/config';

const textList1 = ref<CustomBoxItemType[]>([
    {
        title: t('stocksText1Box'),
        text: t('stocksText1Box1'),
    },
    {
        title: t('stocksText1Box2'),
        text: t('stocksText1Box3'),
    },
    {
        title: t('stocksText1Box4'),
        text: t('stocksText1Box5'),
    },
])

const data = ref<CustomBoxType>(
    {
        title: t('stocksBoxSentence'),
        intro: t('stocksBoxSentence1'),
        list: [
            {
                icon: icon1,
                title: t('stocksBoxSentence2'),
                intro: t('stocksBoxSentence3'),
            },
            {
                icon: icon2,
                title: t('stocksBoxSentence4'),
                intro: t('stocksBoxSentence5'),
            },
            {
                icon: icon3,
                title: t('stocksBoxSentence6'),
                intro: t('stocksBoxSentence7'),
            },
            {
                icon: icon4,
                title: t('stocksBoxSentence8'),
                intro: t('stocksBoxSentence9'),
            },
            {
                icon: icon5,
                title: t('stocksBoxSentence10'),
                intro: t('stocksBoxSentence11'),
            },
        ]
    }
)

const textList = ref<CustomBoxItemType[]>([
    {
        title: t('forexTextBox'),
        text: t('stocksTextBox'),
    },
    {
        title: t('forexTextBox4'),
        text: t('stocksTextBox1'),
    },
    {
        title: t('forexTextBox2'),
        text: t('stocksTextBox2'),
    },
])
</script>

<style lang="scss" scoped>
.stocks-view {
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
