<template>
    <div class="trading-signals-view">
        <CustomCarousel :title="t('tradingSignalsViewTitle')" :btnText="t('marketNewsViewBtnText')"
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

import background from '@/assets/img/tools/trading-signals/bg.jpg';
import icon1 from '@/assets/img/tools/trading-signals/advantage-1.jpg'
import icon2 from '@/assets/img/tools/trading-signals/advantage-2.jpg'
import icon3 from '@/assets/img/tools/trading-signals/advantage-3.jpg'
import icon4 from '@/assets/img/tools/trading-signals/advantage-4.jpg'

import type { CustomBoxType } from "@/types/index"
import { browserRedirection } from '@/utils/tools'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import { link_config } from '@/config';

const dataList = ref<CustomBoxType>(
    {
        title: t('tradingSignalsBoxSentence'),
        intro: t('tradingSignalsBoxSentence1'),
        list: [
            {
                text: t('tradingSignalsBoxSentence2'),
            },
            {
                text: t('tradingSignalsBoxSentence3'),
            },
            {
                text: t('tradingSignalsBoxSentence4'),
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
                title: t('tradingSignalsBox1Sentence1'),
                text: t('tradingSignalsBox1Sentence2'),
            },
            {
                icon: icon2,
                title: t('tradingSignalsBox1Sentence3'),
                text: t('tradingSignalsBox1Sentence4'),
            },
            {
                icon: icon3,
                title: t('tradingSignalsBox1Sentence5'),
                text: t('tradingSignalsBox1Sentence6'),
            },
            {
                icon: icon4,
                title: t('tradingSignalsBox1Sentence7'),
                text: t('tradingSignalsBox1Sentence8'),
            },
        ]
    }
)
</script>

<style lang="scss" scoped></style>
