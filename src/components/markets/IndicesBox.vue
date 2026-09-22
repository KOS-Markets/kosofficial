<template>
    <div class="indices-box">
        <img class="indices-box-background section-media-bg section-media-img" src="@/assets/img/markets/indices/why-1.jpg" alt="">
        <div class="container">
            <div class="title">{{ dataList.title }}</div>
            <div class="intro">{{ dataList.intro }}</div>
            <div class="list">
                <div v-for="(item, index) in dataList.list" :key="index" class="item">
                    <div class="item-title">{{ item.title }}</div>
                    <div class="intro">{{ item.intro }}</div>
                    <div class="text">{{ item.text }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

import type { CustomBoxType } from "@/types/index"

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const dataList = ref<CustomBoxType>(
    {
        title: t('indicesBoxSentence'),
        intro: t('indicesBoxSentence1'),
        list: [
            {
                title: '1:2000',
                intro: t('indicesBoxSentence2'),
                text: t('indicesBoxSentence3'),
            },
            {
                title: t('indicesBoxSentence4'),
                intro: t('indicesBoxSentence5'),
                text: t('indicesBoxSentence6'),
            },
            {
                title: t('indicesBoxSentence7'),
                intro: t('indicesBoxSentence8'),
                text: t('indicesBoxSentence9'),
            },
            {
                title: t('indicesBoxSentence10'),
                intro: t('indicesBoxSentence11'),
                text: t('indicesBoxSentence12'),
            },
            {
                title: t('indicesBoxSentence13'),
                intro: t('indicesBoxSentence14'),
                text: t('indicesBoxSentence15'),
            },
            {
                title: '24/7',
                intro: t('indicesBoxSentence16'),
                text: t('indicesBoxSentence17'),
            },
        ]
    }
)
</script>

<style lang="scss" scoped>
.indices-box {
    position: relative;

    .indices-box-background {
        /* 保持比例，覆盖整个容器 */
        /* 关键：图片底部对齐，水平居中 */
        opacity: 0.1;
    }

    .container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: var(--custom-width);
        margin: 0 auto;
        padding: 80px;
        box-sizing: border-box;

        @media (max-width: 1100px) {
            padding: 80px 40px;
        }

        @media (max-width: 768px) {
            padding: 60px 24px;
        }


        .title {
            font-size: 36px;
            text-align: center;

            @media (max-width: 768px) {
                font-size: 24px;
            }
        }

        .intro {
            margin-top: 30px;
            color: var(--gray-color-1);
            text-align: center;
        }

        .list {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            width: 100%;
            margin: 80px 0;

            @media (max-width: 1100px) {
                align-items: center;
                margin: 50px 0;
            }

            @media (max-width: 768px) {
                margin: 30px 0;
            }

            .item {
                padding: 32px;
                border-radius: 8px;
                width: 314px;
                margin: 20px;
                color: var(--text-color-1);
                display: flex;
                flex-direction: column;
                align-items: center;
                border: 1px solid var(--primary-color);
                text-align: center;

                @media (max-width: 768px) {
                    margin: 10px 0;
                }

                .item-title {
                    font-size: 24px;
                    font-weight: 600;
                    color: var(--primary-color-1);
                }

                .intro {
                    font-size: 18px;
                    margin: 20px 0;
                    color: var(--text-color);
                }

                .text {
                    flex: 1;
                    font-size: 14px;
                    color: var(--gray-color-1);
                    line-height: 24.3px;
                }



                .btn {
                    margin-top: 30px;
                }


            }

            .item:nth-child(1) {
                .coin {
                    color: var(--text-color);
                }
            }
        }


    }
}
</style>
