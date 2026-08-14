<template>
    <div class="energy-view">
        <CustomCarousel :title="t('metalsViewTitle')" :intro="t('metalsViewIntro')" :btnText="t('forexViewBtnText')"
            :background="background" @toPage="browserRedirection(link_config.register_link)"
            style="--mask-image: linear-gradient(to right, transparent 0%, black 50%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%); --bg-h: var(--bg-h-v); --right: var(--right-pos); --opacity: var(--opacity-v)" />

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

import background from '@/assets/img/markets/metals/bg.jpg';
import icon1 from '@/assets/img/markets/metals/why-1.jpg'
import icon2 from '@/assets/img/markets/metals/why-2.jpg'
import icon3 from '@/assets/img/markets/metals/why-3.jpg'
import icon4 from '@/assets/img/markets/metals/why-4.jpg'
import icon5 from '@/assets/img/markets/metals/why-5.jpg'

import { browserRedirection } from '@/utils/tools'
import type { CustomBoxType, CustomBoxItemType } from '@/types/index'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import { link_config } from '@/config';

const textList1 = ref<CustomBoxItemType[]>([
    {
        title: t('metalsText1Box'),
        text: t('metalsText1Box1'),
    },
    {
        title: t('metalsText1Box2'),
        text: t('metalsText1Box3'),
    },
    {
        title: t('metalsText1Box4'),
        text: t('metalsText1Box5'),
    },
])

const data = ref<CustomBoxType>({
    title: t('metalsBoxSentence'),
    intro: t('metalsBoxSentence1'),
    list: [
        {
            icon: icon1,
            title: t('metalsBoxSentence2'),
            intro: t('metalsBoxSentence3'),
        },
        {
            icon: icon2,
            title: t('metalsBoxSentence4'),
            intro: t('metalsBoxSentence5'),
        },
        {
            icon: icon3,
            title: t('metalsBoxSentence6'),
            intro: t('metalsBoxSentence7'),
        },
        {
            icon: icon4,
            title: t('metalsBoxSentence8'),
            intro: t('metalsBoxSentence9'),
        },
        {
            icon: icon5,
            title: t('metalsBoxSentence10'),
            intro: t('metalsBoxSentence11'),
        },
    ]
})

const textList = ref<CustomBoxItemType[]>([
    {
        title: t('metalsTextBox'),
        text: t('metalsTextBox1'),
    },
    {
        title: t('metalsTextBox2'),
        text: t('metalsTextBox3'),
    },
    {
        title: t('metalsTextBox4'),
        text: t('metalsTextBox5'),
    },
    {
        title: t('metalsTextBox6'),
        text: t('metalsTextBox7'),
    },
    {
        title: t('metalsTextBox8'),
        text: t('metalsTextBox9'),
    },
    {
        title: t('metalsTextBox10'),
        text: t('metalsTextBox11'),
    }
])
</script>

<style lang="scss" scoped>
.energy-view {
    --bg-h-v: 100%;
    --right-pos: 10px;
    --opacity-v: 1;

    @media (max-width: 1500px) {
        --bg-h-v: 90%;
        --right-pos: 10px;
    }

    @media (max-width: 1100px) {
        --bg-h-v: 70%;
        --right-pos: 10px;
    }

    @media (max-width: 650px) {
        --bg-h-v: 50%;
        --right-pos: 0;
        --opacity-v: 0.2;
    }
}
</style>
