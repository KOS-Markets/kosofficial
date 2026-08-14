<template>
    <div class="pamm-box">
        <img class="pamm-box-background section-media-bg section-media-img" src="@/assets/img/tools/pamm/pamm.jpg"
            alt="">
        <div class="container">
            <div class="title">{{ dataList.title }}</div>
            <div class="intro">{{ dataList.intro }}</div>
            <div class="list">
                <div v-for="(item, index) in dataList.list" :key="index" class="item">
                    <div class="icon">
                        <img :src="item.icon" alt="">
                    </div>
                    <div class="text">{{ item.text }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

import type { CustomBoxType } from "@/types/index"

import icon1 from '@/assets/img/tools/pamm/pamm-1.jpg'
import icon2 from '@/assets/img/tools/pamm/pamm-2.jpg'
import icon3 from '@/assets/img/tools/pamm/pamm-3.jpg'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const dataList = ref<CustomBoxType>(
    {
        title: t('pammBox1Sentence'),
        intro: t('pammBox1Sentence1'),
        list: [
            {
                icon: icon1,
                text: t('pammBox1Sentence2'),
            },
            {
                icon: icon2,
                text: t('pammBox1Sentence3'),
            },
            {
                icon: icon3,
                text: t('pammBox1Sentence4'),
            },
        ]
    }
)
</script>

<style lang="scss" scoped>
.pamm-box {
    position: relative;

    .pamm-box-background {
        /* 保持比例，覆盖整个容器 */
        /* 关键：图片底部对齐，水平居中 */
        opacity: 8%;
    }

    .container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: var(--custom-width);
        margin: 0 auto;
        padding: 120px 80px 80px;
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

            @media (max-width: 1100px) {
                font-size: 24px;
            }
        }

        .intro {
            margin-top: 30px;
            color: var(--gray-color-1);
            text-align: center;

            @media (max-width: 1100px) {
                font-size: 14px;
            }
        }

        .list {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            width: 100%;
            margin: 80px 0;

            @media (max-width: 1100px) {
                flex-direction: column;
                align-items: center;
                margin: 50px 0;
            }

            @media (max-width: 768px) {
                margin: 30px 0;
            }

            .item {
                padding: 32px;
                border-radius: 8px;
                width: min(314px, 100%);
                margin: 20px;
                color: var(--text-color-1);
                display: flex;
                flex-direction: column;
                align-items: center;
                border: 1px solid var(--primary-color);
                text-align: center;
                box-sizing: border-box;

                @media (max-width: 768px) {
                    margin: 10px 0;
                }

                .icon {
                    margin-bottom: 20px;

                    img {
                        --h: 120px;
                        height: var(--h);
                        --mask-image: linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%);
                        mask-image: var(--mask-image);
                        -webkit-mask-image: var(--mask-image);
                        mask-composite: intersect;
                    }
                }

                .text {
                    flex: 1;
                    color: var(--gray-color-1);
                    font-size: 14px;
                }

            }
        }


    }
}
</style>
