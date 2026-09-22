<template>
    <div class="about-box custom-border-color">
        <div class="left">
            <img src="@/assets/img/company/about/bg-1.jpg" alt="">
        </div>
        <div class="right">
            <div class="title">{{ t('aboutBox2Sentence') }}</div>
            <div class="text">{{ t('aboutBox2Sentence1') }}</div>
            <div class="title">{{ t('aboutBox2Sentence2') }}</div>
            <div class="text">{{ t('aboutBox2Sentence3') }}</div>
            <div class="title">{{ t('aboutBox2Sentence4') }}</div>
            <div class="text">{{ t('aboutBox2Sentence5') }}</div>
            <div class="text">{{ t('aboutBox2Sentence6') }}</div>
            <div class="text">{{ t('aboutBox2Sentence7') }}</div>
        </div>
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
    padding: 80px;
    display: flex;
    box-sizing: border-box;

    @media (max-width: 1100px) {
        padding: 80px 40px;
    }

    @media (max-width: 768px) {
        padding: 80px 24px;
        flex-direction: column;
    }

    .left {
        width: 50%;
        padding-inline-end: 30px;
        display: flex;
        align-items: center;

        @media (max-width: 768px) {
            width: 100%;
            padding: 0 0 30px;
        }

        img {
            width: 100%;
        }
    }

    .right {
        width: 50%;

        @media (max-width: 768px) {
            width: 100%;
        }

        .title {
            font-size: 24px;
            line-height: 84px;
            color: var(--primary-color);
        }

        .text {
            margin: 30px 0;
            line-height: 30px;
            color: var(--gray-color-1);

            @media (max-width: 1100px) {
                font-size: 14px;
            }
        }



    }



}
</style>