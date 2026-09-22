<template>
    <div class="home-box">
        <div class="home-box-header">
            <motion.div class="tag" :initial="{ opacity: 0, y: 20 }" :whileInView="{ opacity: 1, y: 0, transition: { delay: 0, duration: 0.6 } }">{{ t('advantagesTag') }}</motion.div>
            <motion.div class="title" :initial="{ opacity: 0, y: 20 }" :whileInView="{ opacity: 1, y: 0, transition: { delay: 0.12, duration: 0.6 } }">{{ dataList.title }}</motion.div>
            <motion.div class="intro" :initial="{ opacity: 0, y: 20 }" :whileInView="{ opacity: 1, y: 0, transition: { delay: 0.24, duration: 0.6 } }">{{ dataList.intro }}</motion.div>
        </div>
        <div class="home-box-list">
            <motion.div class="item" :class="'item-' + (index % 6)" v-for="(item, index) in dataList.list" :key="index" initial="hidden" :whileInView="'visible'" whileHover="hover" :variants="upListHoverAnimateVariants" :custom="index">
                <div class="icon">
                    <img :src="item.icon" alt="">
                </div>
                <div class="content">
                    <div class="title">{{ item.title }}</div>
                    <div class="intro">{{ item.intro }}</div>
                </div>
            </motion.div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { motion } from 'motion-v'

import type { CustomBoxType } from "@/types/index"
import { upListHoverAnimateVariants } from "@/utils/motion.ts"

import icon1 from '@/assets/img/home/advantages/icon-technology.png'
import icon2 from '@/assets/img/home/advantages/icon-spreads.png'
import icon3 from '@/assets/img/home/advantages/icon-products.png'
import icon4 from '@/assets/img/home/advantages/icon-support.png'
import icon5 from '@/assets/img/home/advantages/icon-latency.png'
import icon6 from '@/assets/img/home/advantages/icon-leverage.png'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const dataList = ref<CustomBoxType>(
    {
        title: t('homeboxSentence'),
        intro: t('homeboxSentence1'),
        list: [
            {
                icon: icon1,
                title: t('homeboxSentence2'),
                intro: t('homeboxSentence3')
            },
            {
                icon: icon2,
                title: t('homeboxSentence4'),
                intro: t('homeboxSentence5')
            },
            {
                icon: icon3,
                title: t('homeboxSentence6'),
                intro: t('homeboxSentence7')
            }, {
                icon: icon4,
                title: t('homeboxSentence8'),
                intro: t('homeboxSentence9')
            },
            {
                icon: icon5,
                title: t('homeboxSentence10'),
                intro: t('homeboxSentence11')
            },
            {
                icon: icon6,
                title: t('homeboxSentence12'),
                intro: t('homeboxSentence13')
            }
        ]
    }
)
</script>

<style lang="scss" scoped>
.home-box {
    padding: 120px 0;
    width: var(--custom-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    @media (max-width: 1100px) {
        padding: 80px 0;
    }

    @media (max-width: 768px) {
        padding: 60px 0;
    }

    .home-box-header {
        padding: 0 80px;
        margin-bottom: 60px;
        text-align: center;

        @media (max-width: 1100px) {
            padding: 0 40px;
            margin-bottom: 40px;
        }

        @media (max-width: 768px) {
            padding: 0 24px;
            margin-bottom: 30px;
        }

        .tag {
            display: inline-block;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: var(--primary-color);
            background: rgba(37, 99, 235, 0.08);
            padding: 6px 14px;
            border-radius: 20px;
            margin-bottom: 16px;
        }

        .title {
            font-size: 40px;
            margin-bottom: 14px;
            color: var(--text-color);
            font-weight: 700;

            @media (max-width: 768px) {
                font-size: 26px;
            }
        }

        .intro {
            color: var(--gray-color-1);
            font-size: 16px;
            line-height: 26px;
            max-width: 620px;
            margin: 0 auto;
        }
    }

    .home-box-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 24px;
        padding: 0 80px;

        @media (max-width: 1100px) {
            padding: 0 40px;
            gap: 20px;
        }

        @media (max-width: 768px) {
            padding: 0 24px;
            gap: 16px;
        }

        .item {
            width: calc(33.3% - 16px);
            max-width: 380px;
            padding: 28px 32px;
            box-sizing: border-box;
            border-radius: 28px;
            background: #ffffff;
            color: var(--gray-color-1);
            position: relative;
            cursor: pointer;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 22px;
            text-align: left;
            transition: transform 0.25s ease, box-shadow 0.25s ease;

            @media (max-width: 1100px) {
                width: calc(50% - 10px);
            }

            @media (max-width: 768px) {
                width: 100%;
                max-width: 100%;
                padding: 24px;
                gap: 18px;
            }

            &:hover {
                transform: translateY(-4px);
                box-shadow: 0 16px 40px rgba(15, 23, 42, 0.1);
            }

            &.item-0,
            &.item-4 {
                background: #E8FAF4;
            }

            &.item-1,
            &.item-5 {
                background: #FFF1EE;
            }

            &.item-2,
            &.item-3 {
                background: #EDF5FF;
            }

            .icon {
                flex-shrink: 0;
                width: 72px;
                height: 72px;
                display: flex;
                align-items: center;
                justify-content: center;

                @media (max-width: 768px) {
                    width: 60px;
                    height: 60px;
                }

                img {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                }
            }

            .content {
                flex: 1;
                min-width: 0;
            }

            .title {
                font-size: 19px;
                font-weight: 700;
                margin: 0 0 8px;
                color: var(--text-color);
            }

            .intro {
                font-size: 14px;
                line-height: 22px;
                color: var(--gray-color-1);
            }
        }
    }
}
</style>
