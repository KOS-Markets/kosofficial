<template>
    <div class="partnership-box">
        <div class="partnership-box-header">
            <div class="title">{{ t('partnershipBox2Sentence') }}</div>
            <div class="intro">{{ t('partnershipBox2Sentence1') }}</div>
        </div>
        <div class="partnership-box-list">
            <div class="item">
                <div class="number">1</div>
                <div class="title">{{ t('partnershipBox2Sentence2') }}</div>
                <div class="text">{{ t('partnershipBox2Sentence3') }}</div>
            </div>
            <div class="item">
                <div class="number">2</div>
                <div class="title">{{ t('partnershipBox2Sentence4') }}</div>
                <div class="text">{{ t('partnershipBox2Sentence5') }}</div>
            </div>
            <div class="item">
                <div class="number">3</div>
                <div class="title">{{ t('partnershipBox2Sentence6') }}</div>
                <div class="text">{{ t('partnershipBox2Sentence7') }}</div>
            </div>
        </div>
        <div class="tips">{{ t('partnershipBox2Sentence8', {email: link}) }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const link = ref<string>(import.meta.env.VITE_WEB_EMAIL)
</script>

<style lang="scss" scoped>
.partnership-box {
    padding: 80px;
    width: var(--custom-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    @media (max-width: 1100px) {
        padding: 80px 40px;
    }

    @media (max-width: 768px) {
        padding: 60px 24px;
    }

    .partnership-box-header {
        margin-bottom: 70px;
        text-align: center;

        @media (max-width: 1100px) {
            margin-bottom: 50px;
        }

        @media (max-width: 768px) {
            margin-bottom: 30px;
        }

        .title {
            font-size: 36px;
            margin-bottom: 30px;
            color: var(--text-color);

            @media (max-width: 768px) {
                font-size: 24px;
            }
        }

        .intro {
            color: var(--gray-color-1);
        }
    }

    .partnership-box-list {
        display: flex;
        justify-content: center;
        
        @media (max-width: 1100px) {
            flex-direction: column;
            align-items: center;
        }

        .item {
            width: min(400px, 100%);       
            margin: 10px 0;
            padding: 32px;
            box-sizing: border-box;
            border-radius: 24px;
            color: var(--gray-color-1);
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;

            .number {
                width: 100%;
                border: 1px solid var(--primary-color);
                border-radius: 50px;
                font-size: 50px;
                color: var(--primary-color-1);
            }

            .title {
                font-size: 20px;
                margin: 20px 0;
                color: var(--primary-color-1);
            }

            .text {
                line-height: 24.3px;

                @media (max-width: 1100px) {
                    font-size: 14px;
                }
            }

        }
    }

    .tips {
        margin-top: 50px;
        text-align: center;
        color: var(--gray-color-1);

        @media (max-width: 1100px) {
            font-size: 14px;
        }
    }

}
</style>
