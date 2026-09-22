<template>
    <div class="custom-text-box">
        <div class="item" v-for="(item, index) in props.list" :key="index">
            <div class="title">{{ item.title }}</div>
            <div class="text">{{ item.text }}</div>
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
    padding: 80px 80px;
    display: flex;
    justify-content: center;
    box-sizing: border-box;

    @media (max-width: 1100px) {
        flex-direction: column;
        align-items: center;
        padding: 80px 40px;
    }

    @media (max-width: 768px) {
        padding: 80px 24px;
    }

    .item {
        margin: 20px;
        text-align: center;
        // flex: 1;
        width: min(334px, 100%);
        

        @media (max-width: 768px) {
            margin: 20px 0;
        }

        .title {
            font-size: 24px;
            color: var(--text-color);
            margin-bottom: 20px;
            line-height: 44px;
        }

        .text {
            color: var(--gray-color-1);
            line-height: 30px;
        }
    }
}
</style>
