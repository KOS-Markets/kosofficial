<template>
    <div class="about-box custom-border-color">
        <div class="top">
            <div class="left">
                <img src="@/assets/img/company/why/what.jpg" alt="">
            </div>
            <div class="right">
                <div class="title">{{ t('whyBox3Sentence') }}</div>
                <div class="text">{{ t('whyBox3Sentence1') }}</div>
            </div>
        </div>
        <div class="bottom">
            <div class="bottom-list">
                <div class="item">
                    <div class="title">{{ t('whyBox3Sentence2') }}</div>
                    <div class="text">{{ t('whyBox3Sentence3') }}</div>
                </div>
                <div class="item">
                    <div class="title">{{ t('whyBox3Sentence4') }}</div>
                    <div class="text">{{ t('whyBox3Sentence5') }}</div>
                </div>
                <div class="item">
                    <div class="title">{{ t('whyBox3Sentence6') }}</div>
                    <div class="text">{{ t('whyBox3Sentence7') }}</div>
                </div>
            </div>
            <div class="bottom-list">
                <div class="item">
                    <div class="title">{{ t('whyBox3Sentence8') }}</div>
                    <div class="text">{{ t('whyBox3Sentence9') }}</div>
                </div>
                <div class="item">
                    <div class="title">{{ t('whyBox3Sentence10') }}</div>
                    <div class="text">{{ t('whyBox3Sentence11') }}</div>
                </div>
            </div>
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
    padding: 0 80px;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;

    

    @media (max-width: 1100px) {
        padding: 0 40px;
    }

    @media (max-width: 768px) {
        padding: 0 24px;
        flex-direction: column;
    }

    .top {
        display: flex;

        border-top: 1px solid transparent;
        border-bottom: 1px solid transparent;
        border-image: linear-gradient(to right, transparent, transparent, var(--primary-color), transparent, transparent) 1 0 1 0;
        position: relative;

        @media (max-width: 1100px) {
            padding: 32px 0;
        }

        .left {
            width: 50%;
            padding-inline-end: 30px;
            display: flex;
            align-items: center;
            box-sizing: border-box;

            @media (max-width: 768px) {
                width: 100%;
                padding: 0 0 30px;
                position: absolute;
                opacity: 0.1;
            }

            img {
                width: 100%;
            }
        }

        .right {
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-inline-end: 50px;

            @media (max-width: 1100px) {
                padding-inline-end: 0;
            }

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

    .bottom {
        margin-top: 10px;
        width: 100%;
        padding: 80px 0;
        display: flex;

        border-top: 1px solid transparent;
        border-image: linear-gradient(to right, transparent, transparent, var(--primary-color), transparent, transparent) 1 0 0 0;

        @media (max-width: 1100px) {
            flex-direction: column;
            padding: 30px 0;
        }


        .bottom-list {
            width: 50%;
            padding-inline-end: 50px;
            box-sizing: border-box;

            @media (max-width: 1100px) {
                width: 100%;
                padding-inline-end: 0;
            }

            .item {
                margin-bottom: 20px;

                @media (max-width: 1100px) {
                    margin-bottom: 10px;
                }


                .title {
                    color: var(--primary-color);
                    line-height: 84px;

                    @media (max-width: 768px) {
                        font-size: 14px;
                    }
                }

                .text {
                    color: var(--gray-color-1);
                    line-height: 30px;

                    @media (max-width: 768px) {
                        font-size: 14px;
                    }
                }
            }
            
        }
    }



}
</style>
