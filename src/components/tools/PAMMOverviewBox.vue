<template>
    <div class="pamm-box">
        <div class="title">{{ t('pammViewTitle') }}</div>
        <div class="intro">{{ t('pammBoxSentence') }}</div>
        <div class="container">
            <div class="left">
                <div class="left-title">{{ t('pammViewTitle') }}</div>
                <div class="left-intro">{{ t('pammBoxSentence1') }}</div>
                <div class="item">
                    <div class="icon" v-html="nike"></div>
                    <div class="text">{{ t('pammBoxSentence2') }}</div>
                </div>
                <div class="item">
                    <div class="icon" v-html="nike"></div>
                    <div class="text">{{ t('pammBoxSentence3') }}</div>
                </div>
                <div class="item">
                    <div class="icon" v-html="nike"></div>
                    <div class="text">{{ t('pammBoxSentence4') }}</div>
                </div>
                <div class="item">
                    <div class="icon" v-html="nike"></div>
                    <div class="text">{{ t('pammBoxSentence5') }}</div>
                </div>
            </div>
            <div class="line"></div>
            <div class="right">
                <div class="right-title">{{ t('pammBoxSentence6') }}</div>
                <div class="right-intro">{{ t('pammBoxSentence7') }}</div>
                <CustomButton :name="t('pammBoxSentence8')" :type="1" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import nike from '@/assets/img/trading/platform/tick.svg?raw'

import CustomButton from '@/components/custom/CustomButton.vue'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style lang="scss" scoped>
.pamm-box {
    width: var(--custom-width);
    margin: 0 auto;
    padding: 120px 0 80px;
    box-sizing: border-box;

    @media (max-width: 1100px) {
        padding: 120px 40px 80px;
    }

    @media (max-width: 768px) {
        padding: 60px 24px;
    }

    .title {
        font-size: 32px;
        text-align: center;
        padding: 0 80px;

        @media (max-width: 1100px) {
            font-size: 24px;
            padding: 0 40px;
        }

        @media (max-width: 768px) {
            padding: 0;
            
        }
    }

    .intro {
        margin: 30px 0 70px;
        text-align: center;
        color: var(--gray-color-1);
        padding: 0 80px;

        @media (max-width: 1100px) {
            padding: 0 40px;
            font-size: 14px;
        }

        @media (max-width: 768px) {
            padding: 0;
            margin-bottom: 30px;
        }
    }

    .container {
        display: flex;
        background-color: var(--bg-color-2);
        border-radius: 12px;
        padding: 30px 80px;

        @media (max-width: 1100px) {
            padding: 30px 50px;
        }

        @media (max-width: 768px) {
            flex-direction: column;
            padding: 30px;
        }

        .left {
            width: 50%;

            @media (max-width: 1100px) {
                width: 100%;
                margin-bottom: 30px;
            }

            .item {
                display: flex;
                padding: 5px 0;

                .icon {
                    margin-inline-end: 10px;
                }

                .text {
                    font-size: 14px;
                    line-height: 20px;
                    color: var(--gray-color-1);
                }
            }
        }

        .line {
            height: auto;
            width: 1px;
            background-color: var(--menu-color);
            margin: 0 50px;
        }

        .right {
            width: 50%;

            @media (max-width: 1100px) {
                width: 100%;
            }
        }

        .left-title,
        .right-title {
            font-size: 24px;
            color: var(--primary-color-1);
        }

        .left-intro,
        .right-intro {
            color: var(--gray-color-1);
            margin: 20px 0;

            @media (max-width: 1100px) {
                font-size: 14px;
            }
        }

    }
}
</style>
