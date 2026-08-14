<template>
    <div class="pamm-view">
        <CustomCarousel :title="t('pammViewTitle')" :btnText="t('marketNewsViewBtnText')" :background="background" @toPage="browserRedirection(link_config.register_link)"
        style="--mask-image: linear-gradient(to right, transparent 0%, black 20%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%); --right: 100px; --bg-h: 90%" />

        <PAMMOverviewBox />
        <PAMMFeaturesBox />
        <PAMMStatsBox />
    </div>
</template>

<script setup lang="ts">
import CustomCarousel from '@/components/custom/CustomCarousel.vue';

import background from '@/assets/img/tools/pamm/bg.jpg';

import { browserRedirection } from '@/utils/tools'

import PAMMOverviewBox from '@/components/tools/PAMMOverviewBox.vue';
import PAMMFeaturesBox from '@/components/tools/PAMMFeaturesBox.vue';
import PAMMStatsBox from '@/components/tools/PAMMStatsBox.vue';

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import { link_config } from '@/config';
</script>

<style lang="scss" scoped></style>
