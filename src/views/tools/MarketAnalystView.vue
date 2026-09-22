<template>
    <div class="market-analyst-view">
        <CustomCarousel :title="t('marketAnalystViewTitle')" :intro="t('marketAnalystViewIntro')"
            :btnText="t('marketNewsViewBtnText')" :background="background" @toPage="browserRedirection(link_config.register_link)"
            style="--mask-image: linear-gradient(to right, transparent 0%, black 20%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%); --right: 0" />
    </div>
</template>

<script setup lang="ts">
import CustomCarousel from '@/components/custom/CustomCarousel.vue';

import background from '@/assets/img/tools/market-analyst/bg.jpg';

import { browserRedirection } from '@/utils/tools'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import { link_config } from '@/config';
</script>

<style lang="scss" scoped></style>
