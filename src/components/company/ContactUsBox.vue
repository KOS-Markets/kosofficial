<template>
    <div class="home-box">
        <div class="home-box-list">
            <motion.div class="item" v-for="(item, index) in dataList.list" :key="index" whileHover="hover" :variants="hoverUpAnimateVariants">
                <div class="icon">
                    <img :src="item.icon" alt="">
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

import icon2 from '@/assets/img/company/contact-us/icon-2.jpg'
import icon3 from '@/assets/img/company/contact-us/icon-3.jpg'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import { link_config } from "@/config"

const dataList = ref<CustomBoxType>(
    {
        list: [
            {
                icon: icon2,
                title: t('contactUsBoxSentence1')
            },
            {
                icon: icon3,
                title: t('contactUsBoxSentence2'),
                intro: link_config.email_link
            }
        ]
    }
)
</script>

<style lang="scss" scoped>
.home-box {
    padding: 112px 80px;
    width: var(--custom-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    @media (max-width: 1100px) {
        padding: 92px 40px;
    }

    @media (max-width: 768px) {
        padding: 92px 24px;
    }

    .home-box-list {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;

        @media (max-width: 1100px) {
            flex-direction: column;
            align-items: center;
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
            width: min(350px, 100%);
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
                margin: 10px 0;
            }

            .icon {
                img {
                    --h: 130px;
                    height: var(--h);
                    --mask-image: linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%);
                    mask-image: var(--mask-image);
                    -webkit-mask-image: var(--mask-image);
                    mask-composite: intersect;
                }
            }

            .title {
                font-size: 20px;
                font-weight: 700;
                margin: 20px 0;
            }

            .intro {
                font-size: 18px;
            }


        }

    }

}
</style>
