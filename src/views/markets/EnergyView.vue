<template>
    <div class="energy-view">
        <CustomCarousel :title="t('energyViewTitle')" :intro="t('energyViewIntro')" :btnText="t('forexViewBtnText')"
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

import background from '@/assets/img/markets/energy/bg.jpg';
import icon1 from '@/assets/img/markets/energy/why-1.jpg'
import icon2 from '@/assets/img/markets/energy/why-2.jpg'
import icon3 from '@/assets/img/markets/energy/why-3.jpg'
import icon4 from '@/assets/img/markets/energy/why-4.jpg'
import icon5 from '@/assets/img/markets/energy/why-5.jpg'

import { browserRedirection } from '@/utils/tools'
import type { CustomBoxType, CustomBoxItemType } from '@/types/index'

import { useI18n } from 'vue-i18n'

const { t } = useI18n()

import { link_config } from '@/config';

const textList1 = ref<CustomBoxItemType[]>([
    {
        title: t('energyText1Box'),
        text: t('energyText1Box1'),
    },
    {
        title: t('energyText1Box2'),
        text: t('energyText1Box3'),
    },
    {
        title: t('energyText1Box4'),
        text: t('energyText1Box5'),
    },
])

const data = ref<CustomBoxType>({
    title: t('energyBoxSentence'),
    intro: t('energyBoxSentence1'),
    list: [
        {
            icon: icon1,
            title: t('energyBoxSentence2'),
            intro: t('energyBoxSentence3'),
        },
        {
            icon: icon2,
            title: t('energyBoxSentence4'),
            intro: t('energyBoxSentence5'),
        },
        {
            icon: icon3,
            title: t('energyBoxSentence6'),
            intro: t('energyBoxSentence7'),
        },
        {
            icon: icon4,
            title: t('energyBoxSentence8'),
            intro: t('energyBoxSentence9'),
        },
        {
            icon: icon5,
            title: t('energyBoxSentence10'),
            intro: t('energyBoxSentence11'),
        },
    ]
})

const textList = ref<CustomBoxItemType[]>([
    {
        title: t('forexTextBox'),
        text: t('energyTextBox'),
    },
    {
        title: t('forexTextBox4'),
        text: t('energyTextBox1'),
    },
    {
        title: t('forexTextBox2'),
        text: t('energyTextBox2'),
    },
])
</script>

<style lang="scss" scoped>
.energy-view {
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
