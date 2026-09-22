<template>
    <div class="education-academy-view">
        <CustomCarousel :title="t('educationAcademyViewTitle')" :btnText="t('marketNewsViewBtnText')"
            :background="background" @toPage="browserRedirection(link_config.register_link)"/>

        <NewEducationAcademyBox />
    </div>
</template>

<script setup lang="ts">
import CustomCarousel from '@/components/custom/CustomCarousel.vue';
import NewEducationAcademyBox from '@/components/tools/NewEducationAcademyBox.vue';

import background from '@/assets/img/tools/education-academy/bg.jpg';

import { browserRedirection } from '@/utils/tools'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import { link_config } from '@/config';
</script>

<style lang="scss" scoped></style>
