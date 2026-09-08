<template>
    <div class="why-view">
        <CustomCarousel :title="t('whyViewTitle')" :btnText="t('marketNewsViewBtnText')"
            :background="background" @toPage="browserRedirection(link_config.register_link)"
            style="--mask-image: linear-gradient(to right, transparent 0%, black 20%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%); --bg-h: var(--bg-h-v); --right: var(--right-pos); --opacity: var(--opacity-v)" />

        <IconFeatureGridBox :data="dataList" />
        <ChecklistPanelBox :data="dataList1" />
        <AboutBox :list="textList" />
        <WhyBox />

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import CustomCarousel from '@/components/custom/CustomCarousel.vue';
import IconFeatureGridBox from '@/components/tools/IconFeatureGridBox.vue';
import ChecklistPanelBox from '@/components/tools/ChecklistPanelBox.vue';
import AboutBox from '@/components/company/AboutBox.vue';
import WhyBox from '@/components/company/WhyBox.vue';

import background from '@/assets/img/company/why/bg.jpg';
import icon1 from '@/assets/img/company/why/icon-1.jpg'
import icon2 from '@/assets/img/company/why/icon-2.jpg'
import icon3 from '@/assets/img/company/why/icon-3.jpg'
import icon4 from '@/assets/img/company/why/icon-4.jpg'
import icon5 from '@/assets/img/company/why/icon-5.jpg'

import type { CustomBoxType, CustomBoxItemType } from '@/types/index'
import { browserRedirection } from '@/utils/tools'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import { link_config } from '@/config';

const dataList = ref<CustomBoxType>(
    {
        list: [
            {
                icon: icon1,
                title: t('whyBox1Sentence'),
            },
            {
                icon: icon2,
                title: t('whyBox1Sentence1'),
            },
            {
                icon: icon3,
                title: t('whyBox1Sentence2'),
            },
            {
                icon: icon4,
                title: t('whyBox1Sentence3'),
            },
            {
                icon: icon5,
                title: t('whyBox1Sentence4'),
            },
        ]
    }
)

const dataList1 = ref<CustomBoxType>(
    {
        title: t('whyViewTitle'),
        list: [
            {
                text: t('whyBox2Sentence'),
            },
            {
                text: t('whyBox2Sentence1'),
            },
            {
                text: t('whyBox2Sentence2'),
            },
            {
                text: t('whyBox2Sentence3'),
            },
        ]
    }
)


const textList = ref<CustomBoxItemType[]>([
    {
        title: '100',
        text: t('whyBoxSentence'),
    },
    {
        title: '200,000+',
        text: t('whyBoxSentence1'),
    },
    {
        title: '30',
        text: t('whyBoxSentence2'),
    },
    {
        title: '24/7',
        text: t('whyBoxSentence3'),
    },
])
</script>

<style lang="scss" scoped>
.why-view {
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
