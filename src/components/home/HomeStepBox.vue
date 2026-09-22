<template>
    <div class="home-step-box">
        <div class="title">{{ dataList.title }}</div>
        <div class="container">
            <div class="left">
                <div class="collapse-item" v-for="(item, index) in dataList.list" :key="index">
                    <div class="collapse-header" @click="item.show = !item.show">
                        <!-- <div class="icon">
                            <div v-html="item.icon"></div>
                        </div> -->
                        <img style="width: 100px" :src="item.icon" alt="" />
                        <div class="text">{{ item.title }}</div>
                        <!-- <div class="icon">
                            <div v-html="item.show ? mins : plus"></div>
                        </div> -->
                    </div>

                    <motion.div class="collapse-content" :animate="item.show ? 'visible' : 'hidden'" initial="hidden" :variants="heightListAnimateVariants">
                        <!-- <div class="icon">
                            <div v-html="item.icon"></div>
                        </div> -->
                        <div class="text">{{ item.intro }}</div>
                        <div class="icon">
                            <div v-html="plus"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div class="right">
                <img :src="rightImg" alt="">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { motion } from 'motion-v'

import type { CustomBoxType } from "@/types/index"
import { heightListAnimateVariants } from "@/utils/motion.ts"

import plus from '@/assets/img/home/homestepbox/+.svg?raw'

// import icon1 from '@/assets/img/home/homestepbox/mutli dimensional leaderboard.svg?raw'
// import icon2 from '@/assets/img/home/homestepbox/one click sync.svg?raw'
// import icon3 from '@/assets/img/home/homestepbox/dynamic risk control.svg?raw'
// import icon4 from '@/assets/img/home/homestepbox/trade replay.svg?raw'

import icon1 from '@/assets/img/home/make-money-1.jpg'
import icon2 from '@/assets/img/home/make-money-2.jpg'
import icon3 from '@/assets/img/home/make-money-3.jpg'

import rightImg from '@/assets/img/home/make-money.jpg';

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const dataList = ref<CustomBoxType>(
    {
        title: t('homestepboxSentence'),
        list: [
            {
                icon: icon1,
                show: false,
                title: t('homestepboxSentence1'),
                intro: t('homestepboxSentence2')
            },
            {
                icon: icon2,
                show: false,
                title: t('homestepboxSentence3'),
                intro: t('homestepboxSentence4')
            },
            {
                icon: icon3,
                show: false,
                title: t('homestepboxSentence5'),
                intro: t('homestepboxSentence6')
            },
            // {
            //     icon: icon4,
            //     show: false,
            //     title: t('homestepboxSentence7'),
            //     intro: t('homestepboxSentence8')
            // }
        ]
    }
)
</script>

<style lang="scss" scoped>
.home-step-box {
    padding: 80px 0;
    width: var(--custom-width);
    margin: 0 auto;
    box-sizing: border-box;

    @media (max-width: 1100px) {
        padding: 80px 40px;
    }

    @media (max-width: 768px) {
        padding: 80px 40px;
    }

    .title {
        font-size: 36px;
        margin-bottom: 30px;
        color: var(--text-color);
        text-align: center;
        padding: 0 80px;

        @media (max-width: 768px) {
            font-size: 24px;
            padding: 0 24px;
        }
    }

    /* 创建带圆角的渐变边框 */
    .container::before {
        content: "";
        position: absolute;
        inset: 0;
        /* 覆盖整个元素 */
        border-radius: inherit;
        /* 继承父级圆角 */
        padding: 1px;
        /* 边框宽度 */
        background: linear-gradient(180deg, var(--primary-color) 0%, transparent 100%);

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

    .container {
        display: flex;
        padding: 80px;
        border-radius: 63px;
        position: relative;
        width: 100%;
        box-sizing: border-box;
        

        @media (max-width: 1100px) {
            flex-direction: column;
            padding: 100px 80px;
        }

        @media (max-width: 768px) {
            padding: 30px;
        }

        .left {
            width: 50%;

            @media (max-width: 1100px) {
                width: 100%;
            }

            .collapse-item {
                padding: 30px 0;
                border-bottom: 1px solid transparent;
                border-image: linear-gradient(to right, transparent, transparent, var(--gray-color-1), transparent, transparent) 0 0 1 0;

                .collapse-header,
                .collapse-content {
                    display: flex;
                    align-items: center;

                    .text {
                        flex: 1;
                        margin: 0 15px;
                    }
                }

                .collapse-header {
                    cursor: pointer;
                    background-color: var(--bg-color);
                    position: relative;
                    z-index: 100;

                    .text {
                        font-size: 24px;
                        color: var(--text-color);
                        font-weight: 600;

                        @media (max-width: 1100px) {
                            font-size: 16px;
                        }
                    }
                }

                .collapse-content {
                    .icon {
                        visibility: hidden;
                    }

                    .text {
                        line-height: 44px;
                        color: var(--gray-color-1);
                    }
                }
            }
        }

        .right {
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 30px 0;

            @media (max-width: 1100px) {
                width: 100%;
            }

            img {
                width: 100%;
            }
        }

    }
}
</style>
