<template>
    <div class="about-box custom-border-color">
        <div class="title">{{ t('aboutViewTitle') }}</div>
        <div class="text">{{ t('aboutBox1Sentence') }} 
            <!-- <span v-html="t('aboutBox1Sentence3')" @click="openPDF"></span> -->
        </div>
        <div class="text">{{ t('aboutBox1Sentence1') }}</div>
        <div class="text">{{ t('aboutBox1Sentence2') }}</div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style lang="scss" scoped>
.about-box {
    width: var(--custom-width);
    margin: 0 auto;
    padding: 120px 80px 80px;
    box-sizing: border-box;

    @media (max-width: 1100px) {
        padding: 60px 40px;
    }

    @media (max-width: 768px) {
        padding: 60px 24px;
    }

    .title {
        font-size: 32px;
    }

    .text {
        margin-top: 30px;
        color: var(--gray-color-1);

        @media (max-width: 1100px) {
            font-size: 14px;
        }

        :deep(span strong) {
            color: var(--primary-color);
            cursor: pointer;
        }
    }


}
</style>
