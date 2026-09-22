<template>
    <div class="pamm-box">
        <div class="title">{{ t('pammViewTitle') }}</div>
        <div class="intro">{{ t('pammBox2Sentence') }}</div>
        <div class="container">
            <div class="left">
                <div class="left-title">{{ t('pammBox2Sentence5') }}</div>
                <div class="item">
                    <div class="icon" v-html="nike"></div>
                    <div class="text">{{ t('pammBox2Sentence6') }}</div>
                </div>
                <div class="item">
                    <div class="icon" v-html="nike"></div>
                    <div class="text">{{ t('pammBox2Sentence7') }}</div>
                </div>
                <div class="item">
                    <div class="icon" v-html="nike"></div>
                    <div class="text">{{ t('pammBox2Sentence8') }}</div>
                </div>
                <div class="item">
                    <div class="icon" v-html="nike"></div>
                    <div class="text">{{ t('pammBox2Sentence9') }}</div>
                </div>
                <div class="item">
                    <div class="icon" v-html="nike"></div>
                    <div class="text">{{ t('pammBox2Sentence10') }}</div>
                </div>
                <div class="item">
                    <div class="icon" v-html="nike"></div>
                    <div class="text">{{ t('pammBox2Sentence11') }}</div>
                </div>
            </div>
            <div class="line"></div>
            <div class="right">
                <div class="item">
                    <div class="item-number">98%</div>
                    <div class="item-title">{{ t('pammBox2Sentence1') }}</div>
                </div>
                <div class="item">
                    <div class="item-number">15k+</div>
                    <div class="item-title">{{ t('pammBox2Sentence2') }}</div>
                </div>
                <div class="item">
                    <div class="item-number">50+</div>
                    <div class="item-title">{{ t('pammBox2Sentence3') }}</div>
                </div>
                <div class="item">
                    <div class="item-number">4.9/5</div>
                    <div class="item-title">{{ t('pammBox2Sentence4') }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import nike from '@/assets/img/trading/platform/tick.svg?raw'

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
        padding: 80px 24px;
    }

    .title {
        font-size: 32px;
        text-align: center;
        padding: 0 80px;

        @media (max-width: 1100px) {
            padding: 0;
            font-size: 24px;
        }
    }

    .intro {
        margin: 30px 0 70px;
        text-align: center;
        color: var(--gray-color-1);
        padding: 0 80px;

        @media (max-width: 1100px) {
            padding: 0;
            font-size: 14px;
        }

        @media (max-width: 768px) {
            margin-bottom: 30px;
        }
    }

    .container {
        display: flex;
        flex-direction: row-reverse;
        background-color: var(--bg-color-2);
        border-radius: 66px;
        padding: 40px 80px;

        @media (max-width: 1100px) {
            flex-direction: column-reverse;
        }

        @media (max-width: 768px) {
            padding: 40px 24px;
            border-radius: 33px;
        }

        .left {
            width: 50%;


            @media (max-width: 1100px) {
                width: 100%;
                margin-top: 40px;
            }

            .item {
                display: flex;
                padding: 5px 0;

                .icon {
                    margin-inline-end: 10px;
                }

                .text {
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
            display: flex;
            flex-wrap: wrap;

            @media (max-width: 1100px) {
                width: 100%;
            }

            .item {
                width: 50%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin: 10px 0;

                .item-number {
                    font-size: 48px;
                    font-weight: 300;
                    color: var(--primary-color-1);

                    @media (max-width: 768px) {
                        font-size: 32px;
                    }
                }

                .item-title {
                    font-size: 14px;
                    color: var(--gray-color-1);
                }
            }
        }

        .left-title {
            font-size: 24px;
            color: var(--primary-color-1);
            margin-bottom: 30px;
        }

    }
}
</style>
