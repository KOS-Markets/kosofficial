<template>
    <div class="partnership-view">
        <CustomCarousel :title="t('partnershipViewTitle')" :intro="t('partnershipViewIntro')" :btnText="t('partnershipViewBtnText')" :background="background" />

        <PartnershipBox :data="dataList" />
        <PartnershipProgramsBox />
        <PartnershipStepsBox />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import CustomCarousel from '@/components/custom/CustomCarousel.vue';
import PartnershipBox from '@/components/partnership/PartnershipBox.vue';
import PartnershipProgramsBox from '@/components/partnership/PartnershipProgramsBox.vue';
import PartnershipStepsBox from '@/components/partnership/PartnershipStepsBox.vue';

import background from '@/assets/img/partnership/Section1_BG Cropped.jpg';
import icon1 from '@/assets/img/partnership/multi  leading.svg'
import icon2 from '@/assets/img/partnership/advanced platform.svg'
import icon3 from '@/assets/img/partnership/support.svg'
import icon4 from '@/assets/img/partnership/commission structure.svg'

import type { CustomBoxType } from "@/types/index"

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const dataList = ref<CustomBoxType>(
    {
        title: t('partnershipBoxSentence'),
        intro: t('partnershipBoxSentence1'),
        list: [
            {
                icon: icon1,
                title: t('partnershipBoxSentence2'),
                text: t('partnershipBoxSentence3'),
            },
            {
                icon: icon2,
                title: t('partnershipBoxSentence4'),
                text: t('partnershipBoxSentence5'),
            },
            {
                icon: icon3,
                title: t('partnershipBoxSentence6'),
                text: t('partnershipBoxSentence7'),
            },
            {
                icon: icon4,
                title: t('partnershipBoxSentence8'),
                text: t('partnershipBoxSentence9'),
            },
        ]
    }
)
</script>

<style lang="scss" scoped>
</style>
