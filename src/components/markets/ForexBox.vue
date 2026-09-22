<template>
    <div class="home-box">
        <div class="home-box-header">
            <div class="title">{{ dataList.title }}</div>
            <div class="intro">{{ dataList.intro }}</div>
        </div>
        <div class="home-box-list">
            <motion.div class="item" v-for="(item, index) in dataList.list" :key="index" whileHover="hover" :variants="hoverUpAnimateVariants">
                <!-- <div class="icon" v-html="item.icon"></div> -->
                <div class="img-box">
                    <img :src="item.icon" alt="" />
                </div>
                <div class="title">{{ item.title }}</div>
                <div class="intro">{{ item.intro }}</div>
            </motion.div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { motion } from 'motion-v'

import type { CustomBoxType } from "@/types/index"
import { hoverUpAnimateVariants } from "@/utils/motion.ts"

import icon1 from '@/assets/img/markets/forex/why-1.jpg'
import icon2 from '@/assets/img/markets/forex/why-2.jpg'
import icon3 from '@/assets/img/markets/forex/why-3.jpg'
import icon4 from '@/assets/img/markets/forex/why-4.jpg'
import icon5 from '@/assets/img/markets/forex/why-5.jpg'
import icon6 from '@/assets/img/markets/forex/why-6.jpg'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const dataList = ref<CustomBoxType>(
    {
        title: t('forexBoxSentence'),
        intro: t('forexBoxSentence1'),
        list: [
            {
                icon: icon1,
                title: t('forexBoxSentence2'),
                intro: t('forexBoxSentence3')
            },
            {
                icon: icon2,
                title: t('forexBoxSentence4'),
                intro: t('forexBoxSentence5')
            },
            {
                icon: icon3,
                title: t('forexBoxSentence6'),
                intro: t('forexBoxSentence7')
            }, {
                icon: icon4,
                title: t('forexBoxSentence8'),
                intro: t('forexBoxSentence9')
            },
            {
                icon: icon5,
                title: t('forexBoxSentence10'),
                intro: t('forexBoxSentence11')
            },
            {
                icon: icon6,
                title: t('forexBoxSentence12'),
                intro: t('forexBoxSentence13')
            }
        ]
    }
)
</script>

<style lang="scss" scoped>
.home-box {
    padding: 100px 80px;
    width: var(--custom-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    @media (max-width: 1100px) {
        padding: 60px 40px;
    }

    @media (max-width: 768px) {
        padding: 60px 24px;
    }

    .home-box-header {
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

    .home-box-list {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        @media (max-width: 1100px) {
            padding: 32px 80px;
        }

        @media (max-width: 768px) {
            padding: 32px 0;
        }

        /* 创建带圆角的渐变边框 */
        .item::before {
            content: "";
            position: absolute;
            inset: 0;
            /* 覆盖整个元素 */
            border-radius: inherit;
            /* 继承父级圆角 */
            padding: 1px;
            /* 边框宽度 */
            background: linear-gradient(180deg, var(--tab-border-color) 0%, transparent 100%);

            /* 挖空内容区域，只保留边框 */
            -webkit-mask:
                linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
            mask:
                linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
            // -webkit-mask-composite: xor;
            mask-composite: exclude;

            pointer-events: none;
            /* 确保不阻挡点击 */
        }

        .item {
            width: min(504px, calc(50% - 20px));
            margin: 10px;
            padding: 32px;
            box-sizing: border-box;
            border-radius: 24px;
            color: var(--gray-color-1);
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;

            background: linear-gradient(180deg, var(--tab-bg-color) 0%, transparent 100%);
            cursor: pointer;


            @media (max-width: 1100px) {
                width: 100%;
                margin: 10px 0;
            }

            .img-box {
                box-sizing: border-box;
                --size: 170px;
                width: var(--size);
                height: var(--size);
                background-color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 100vw;
                overflow: hidden;
                border: 1px solid var(--tab-border-color);

                img {
                    height: 120px;
                }
            }

            .title {
                font-size: 20px;
                font-weight: 500;
                margin: 20px 0;
                color: var(--text-color);
            }

            .intro {
                font-size: 14px;
                color: var(--gray-color-1);
            }


        }

    }

}
</style>
