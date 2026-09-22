<template>
    <div class="custom-text-box">
        <div class="item" v-for="(item, index) in props.list" :key="index">
            <div class="title">{{ item.title }}</div>
            <div class="text" v-html="item.text"></div>
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
    padding: 0 80px 20px;
    box-sizing: border-box;

    @media (max-width: 1100px) {
        padding: 0 40px 10px;
    }

    @media (max-width: 768px) {
        padding: 0 24px 5px;
    }

    .item {
        margin: 50px 0;

        @media (max-width: 768px) {
            margin: 30px 0;
        }

        .title {
            font-size: 24px;
            line-height: 84px;
            color: var(--text-color);
            margin-bottom: 30px;

            @media (max-width: 768px) {
                margin-bottom: 20px;
            }
        }

        .text {
            color: var(--gray-color-1);
            line-height: 30px;
        }
    }
}
</style>
