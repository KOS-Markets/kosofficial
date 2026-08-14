<template>
    <div class="trading-signals-box">
        <div class="title">{{ props.data.title }}</div>
        <div v-if="props.data.intro != ''" class="intro">{{ props.data.intro }}</div>
        <div class="container">
            <div v-for="(item, index) in props.data.list" :key="index" class="item">
                <div class="icon" v-html="nike"></div>
                <div class="text">{{ item.text }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { CustomBoxType } from "@/types/index"

import nike from '@/assets/img/trading/platform/tick.svg?raw'

const props = withDefaults(
    defineProps<{
        data?: CustomBoxType
    }>(),
    {
        data: () => ({
            title: '',
            intro: '',
            list: [],
        }),
    },
)
</script>

<style lang="scss" scoped>
.trading-signals-box {
    width: var(--custom-width);
    margin: 0 auto;
    padding: 120px 0 80px;
    box-sizing: border-box;

    @media (max-width: 1100px) {
        padding: 60px 40px;
    }

    @media (max-width: 768px) {
        padding: 60px 24px;
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
        flex-direction: column;
        background-color: var(--bg-color-2);
        border-radius: 12px;
        padding: 40px 80px;

        @media (max-width: 768px) {
            padding: 40px 24px;
        }

        .item {
            display: flex;
            padding: 5px 0;

            .icon {
                margin-inline-end: 10px;
            }

            .text {
                color: var(--gray-color-1);
                line-height: 20px;
            }
        }

    }
}
</style>
