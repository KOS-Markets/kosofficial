<template>
    <div class="partnership-box">
        <div class="partnership-box-header">
            <div class="title">{{ t('partnershipBox1Sentence') }}</div>
            <div class="intro">{{ t('partnershipBox1Sentence1') }}</div>
        </div>
        <div class="partnership-box-list">
            <motion.div class="item" whileHover="hover" :variants="hoverUpAnimateVariants">
                <div class="title">{{ t('partnershipBox1Sentence2') }}</div>
                <div class="text">{{ t('partnershipBox1Sentence3') }}</div>
                <div class="title">{{ t('partnershipBox1Sentence4') }}</div>
                <div class="list">
                    <div class="option">
                        <div class="icon" v-html="nike"></div>
                        <span>{{ t('partnershipBox1Sentence5') }}</span>
                    </div>
                    <div class="option">
                        <div class="icon" v-html="nike"></div>
                        <span>{{ t('partnershipBox1Sentence6') }}</span>
                    </div>
                    <div class="option">
                        <div class="icon" v-html="nike"></div>
                        <span>{{ t('partnershipBox1Sentence7') }}</span>
                    </div>
                    <div class="option">
                        <div class="icon" v-html="nike"></div>
                        <span>{{ t('partnershipBox1Sentence8') }}</span>
                    </div>
                </div>
            </motion.div>
            <motion.div class="item" whileHover="hover" :variants="hoverUpAnimateVariants">
                <div class="title">{{ t('partnershipBox1Sentence9') }}</div>
                <div class="text">{{ t('partnershipBox1Sentence10') }}</div>
                <div class="title">{{ t('partnershipBox1Sentence4') }}</div>
                <div class="list">
                    <div class="option">
                        <div class="icon" v-html="nike"></div>
                        <span>{{ t('partnershipBox1Sentence11') }}</span>
                    </div>
                    <div class="option">
                        <div class="icon" v-html="nike"></div>
                        <span>{{ t('partnershipBox1Sentence12') }}</span>
                    </div>
                    <div class="option">
                        <div class="icon" v-html="nike"></div>
                        <span>{{ t('partnershipBox1Sentence13') }}</span>
                    </div>
                    <div class="option">
                        <div class="icon" v-html="nike"></div>
                        <span>{{ t('partnershipBox1Sentence14') }}</span>
                    </div>
                </div>
            </motion.div>
            <motion.div class="item" whileHover="hover" :variants="hoverUpAnimateVariants">
                <div class="title">{{ t('partnershipBox1Sentence15') }}</div>
                <div class="text">{{ t('partnershipBox1Sentence16') }}</div>
                <div class="title">{{ t('partnershipBox1Sentence4') }}</div>
                <div class="list">
                    <div class="option">
                        <div class="icon" v-html="nike"></div>
                        <span>{{ t('partnershipBox1Sentence17') }}</span>
                    </div>
                    <div class="option">
                        <div class="icon" v-html="nike"></div>
                        <span>{{ t('partnershipBox1Sentence18') }}</span>
                    </div>
                    <div class="option">
                        <div class="icon" v-html="nike"></div>
                        <span>{{ t('partnershipBox1Sentence19') }}</span>
                    </div>
                    <div class="option">
                        <div class="icon" v-html="nike"></div>
                        <span>{{ t('partnershipBox1Sentence20') }}</span>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'

import { hoverUpAnimateVariants } from "@/utils/motion.ts"

import nike from '@/assets/img/trading/platform/tick.svg?raw'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()
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
        padding: 0 24px;
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
        // justify-content: space-between;
        justify-content: center;
        // flex-wrap: wrap;

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
            width: min(400px, 100%);
            margin: 10px;
            padding: 32px;
            box-sizing: border-box;
            border-radius: 24px;
            color: var(--gray-color-1);
            position: relative;

            background: linear-gradient(180deg, var(--tab-bg-color) 0%, transparent 100%);
            cursor: pointer;


            @media (max-width: 1100px) {
                margin: 10px 0;
            }

            @media (max-width: 768px) {
                // width: 100%;
            }

            .title {
                font-size: 20px;
                font-weight: 500;
                margin-bottom: 20px;
                color: var(--primary-color-1);
            }

            .text {
                margin-bottom: 20px;
                line-height: 24.3px;

                @media (max-width: 1100px) {
                    font-size: 14px;
                }
            }

            .list {
                .option {
                    display: flex;
                    margin: 10px 0;

                    .icon {
                        margin-inline-end: 10px;
                    }
                }
            }


        }

    }

}
</style>
