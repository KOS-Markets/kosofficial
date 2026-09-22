<template>
    <div class="account-view">
        <CustomCarousel style="--mask-image: linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%); --bg-h: var(--bg-h-v); --right: var(--right-pos); --opacity: var(--opacity-v)" :title="t('accountViewTitle')" :intro="t('accountViewIntro')" :background="background" />

        <AccountBox />
    </div>
</template>

<script setup lang="ts">
import CustomCarousel from '@/components/custom/CustomCarousel.vue';
import AccountBox from '@/components/trading/AccountBox.vue';

import background from '@/assets/img/trading/platform/account-type-1.jpg';

import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style lang="scss" scoped>
.account-view {
    --bg-h-v: 100%;
    --opacity-v: 1;
    --right-pos: 0;

    @media (max-width: 650px) {
        --right-pos: -100px;
        --opacity-v: 0.2;
        --bg-h-v: 80%;
    }
}
</style>
