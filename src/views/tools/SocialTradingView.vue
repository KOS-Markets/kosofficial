<template>
    <div class="social-trading-view">
        <CustomCarousel :title="t('socialTradingViewTitle')" :btnText="t('marketNewsViewBtnText')"
            :background="background" @toPage="browserRedirection(link_config.register_link)"
            style="--mask-image: linear-gradient(to right, transparent 0%, black 20%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%); --right: 100px; --bg-h: 90%" />

        <ChecklistPanelBox :data="dataList" />
        <IconFeatureGridBox :data="dataList1" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import CustomCarousel from '@/components/custom/CustomCarousel.vue';
import ChecklistPanelBox from '@/components/tools/ChecklistPanelBox.vue';
import IconFeatureGridBox from '@/components/tools/IconFeatureGridBox.vue';

import background from '@/assets/img/tools/social-trading/bg.jpg';

import { browserRedirection } from '@/utils/tools'

import icon1 from '@/assets/img/tools/social-trading/advantage-1.jpg'
import icon2 from '@/assets/img/tools/social-trading/advantage-2.jpg'
import icon3 from '@/assets/img/tools/social-trading/advantage-3.jpg'
import icon4 from '@/assets/img/tools/social-trading/advantage-4.jpg'

import type { CustomBoxType } from "@/types/index"


import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import { link_config } from '@/config';

const dataList = ref<CustomBoxType>(
    {
        title: t('socialTradingBoxSentence'),
        intro: t('socialTradingBoxSentence1'),
        list: [
            {
                text: t('socialTradingBoxSentence2'),
            },
            {
                text: t('socialTradingBoxSentence3'),
            },
        ]
    }
)

const dataList1 = ref<CustomBoxType>(
    {
        title: t('tradingSignalsBox1Sentence'),
        list: [
            {
                icon: icon1,
                title: t('socialTradingBox1Sentence'),
                text: t('socialTradingBox1Sentence1'),
            },
            {
                icon: icon2,
                title: t('socialTradingBox1Sentence2'),
                text: t('socialTradingBox1Sentence3'),
            },
            {
                icon: icon3,
                title: t('socialTradingBox1Sentence4'),
                text: t('socialTradingBox1Sentence5'),
            },
            {
                icon: icon4,
                title: t('socialTradingBox1Sentence6'),
                text: t('socialTradingBox1Sentence7'),
            },
        ]
    }
)
</script>

<style lang="scss" scoped></style>
