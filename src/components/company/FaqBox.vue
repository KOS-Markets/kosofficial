<template>
    <div class="legal-documents-box">
        <div class="container">
            <div class="text">{{ t('faqBoxSentence') }}</div>

            <div class="collapse-item" v-for="(item, index) in dataList.list" :key="index">
                <div class="collapse-header" @click="item.show = !item.show">
                    <div class="text">{{ item.title }}</div>
                    <div class="icon">
                        <div v-html="item.show ? up : down"></div>
                    </div>
                </div>
                <motion.div class="collapse-content" :animate="item.show ? 'visible' : 'hidden'" initial="hidden"  :variants="heightListAnimateVariants" v-html="item.intro">
                </motion.div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { motion } from 'motion-v'

import type { CustomBoxType } from "@/types/index"
import { heightListAnimateVariants } from "@/utils/motion.ts"

import down from '@/assets/img/company/faq/expand.svg?raw'
import up from '@/assets/img/company/faq/minimise.svg?raw'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const dataList = ref<CustomBoxType>(
    {
        list: [
            {
                show: false,
                title: t('faqBoxSentence1'),
                intro: t('faqBoxSentence2')
            },
            {
                show: false,
                title: t('faqBoxSentence3'),
                intro: t('faqBoxSentence4')
            },
            {
                show: false,
                title: t('faqBoxSentence5'),
                intro: t('faqBoxSentence6')
            }, 
            {
                show: false,
                title: t('faqBoxSentence7'),
                intro: t('faqBoxSentence8')
            }, 
            {
                show: false,
                title: t('faqBoxSentence9'),
                intro: t('faqBoxSentence10')
            }, 
            {
                show: false,
                title: t('faqBoxSentence11'),
                intro: t('faqBoxSentence12')
            }, 
            {
                show: false,
                title: t('faqBoxSentence13'),
                intro: t('faqBoxSentence14')
            }, 
            {
                show: false,
                title: t('faqBoxSentence15'),
                intro: t('faqBoxSentence16')
            }, 
            {
                show: false,
                title: t('faqBoxSentence17'),
                intro: t('faqBoxSentence18')
            }
        ]
    }
)
</script>

<style lang="scss" scoped>
.legal-documents-box {
    width: var(--custom-width);
    margin: 0 auto;
    padding: 80px 0;
    box-sizing: border-box;

    @media (max-width: 1100px) {
        padding: 80px 40px;
    }

    @media (max-width: 768px) {
        padding: 60px 24px;
    }
    

    .container {
        padding: 40px 80px;
        display: flex;
        flex-direction: column;
        background-color: var(--bg-color-2);
        box-sizing: border-box;
        border-radius: 12px;

        @media (max-width: 768px) {
            padding: 40px 24px;
        }
    }

    .text {
        color: var(--gray-color-2);
        line-height: 20px;

        @media (max-width: 1100px) {
            font-size: 14px;
        }
    }

    .collapse-item {
        overflow: hidden;
        

        .collapse-header {
            display: flex;
            align-items: center;
            cursor: pointer;
            padding: 32px 0 0;

            .text {
                font-size: 18px;
                line-height: 20px;
                color: var(--primary-color);

                @media (max-width: 1100px) {
                    font-size: 14px;
                
                }
            }

            .icon {
                margin-inline-start: 10px;

                div {
                    display: flex;
                    align-items: center;
                }
            }
        }

        .collapse-content {
            padding-top: 10px;
            color: var(--gray-color-1);
            line-height: 24px;
        }

    }


}
</style>