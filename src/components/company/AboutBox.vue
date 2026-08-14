<template>
    <div class="custom-text-box">
        <div class="item" v-for="(item, index) in props.list" :key="index">
            <div class="title">{{ item.title }}</div>
            <div v-if="item.text != ''" class="text">{{ item.text }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { CustomBoxItemType } from '@/types/index'

const props = withDefaults(
    defineProps<{
        list?: CustomBoxItemType[]
    }>(),
    {
        list: () => [],
    },
)
</script>

<style lang="scss" scoped>
.custom-text-box {
    width: var(--custom-width);
    margin: 0 auto;
    padding: 92px 80px;
    display: flex;
    justify-content: space-evenly;
    box-sizing: border-box;

    @media (max-width: 1100px) {
        flex-direction: column;
        padding: 72px 40px;
    }

    @media (max-width: 768px) {
        padding: 72px 24px;
    }

    .item {
        text-align: center;
        margin: 20px 0;

        @media (max-width: 768px) {
            margin: 20px 0;
        }

        .title {
            font-size: 24px;
            line-height: 44px;
            color: var(--primary-color);
            margin-bottom: 20px;
        }

        .text {
            color: var(--gray-color-1);
        }
    }
}
</style>
