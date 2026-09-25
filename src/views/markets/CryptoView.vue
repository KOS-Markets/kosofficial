<template>
    <div class="energy-view">
        <CustomCarousel :title="t('cryptoViewTitle')" :intro="t('cryptoViewIntro')" :btnText="t('forexViewBtnText')"
            :background="background" @toPage="browserRedirection(link_config.register_link)"
            style="--mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%); --bg-h: var(--bg-h-v); --right: var(--right-pos); --opacity: var(--opacity-v)" />

        <MarketFeatureColumnsBox :list="textList1" />

        <MarketsBox :data="data" />

        <!-- <CustomTabTable /> -->
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import CustomCarousel from '@/components/custom/CustomCarousel.vue';
import MarketFeatureColumnsBox from '@/components/markets/MarketFeatureColumnsBox.vue';
import MarketsBox from '@/components/markets/MarketsBox.vue';
// import CustomTabTable from '@/components/custom/CustomTabTable.vue';

import background from '@/assets/img/markets/crypto/bg.jpg';
import icon1 from '@/assets/img/markets/crypto/why-1.jpg'
import icon2 from '@/assets/img/markets/crypto/why-2.jpg'

import { browserRedirection } from '@/utils/tools'
import type { CustomBoxType, CustomBoxItemType } from '@/types/index'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import { link_config } from '@/config';

const textList1 = ref<CustomBoxItemType[]>([
    {
        title: t('cryptoText1Box'),
        text: t('cryptoText1Box1'),
    },
    {
        title: t('cryptoText1Box2'),
        text: t('cryptoText1Box3'),
    },
    {
        title: t('cryptoText1Box4'),
        text: t('cryptoText1Box5'),
    },
])

const data = ref<CustomBoxType>({
    title: t('cryptoBoxSentence'),
    intro: t('cryptoBoxSentence1'),
    list: [
        {
            icon: icon1,
            title: t('cryptoBoxSentence2'),
            intro: t('cryptoBoxSentence3'),
        },
        {
            icon: icon2,
            title: t('cryptoBoxSentence4'),
            intro: t('cryptoBoxSentence5'),
        }
    ]
})

</script>

<style lang="scss" scoped>
.energy-view {
    --bg-h-v: 80%;
    --right-pos: 0;
    --opacity-v: 1;

    @media (max-width: 1500px) {
        --bg-h-v: 70%;
        --right-pos: 0;
    }

    @media (max-width: 1100px) {
        --right-pos: -50px;
    }

    @media (max-width: 650px) {
        --bg-h-v: 50%;
        --right-pos: -80px;
        --opacity-v: 0.2;
    }
}
</style>
