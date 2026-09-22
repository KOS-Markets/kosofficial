<template>
    <div class="trading-signals-box">
        <div class="container">
            <div v-if="props.data.title != ''" class="title">{{ props.data.title }}</div>
            <div class="list">
                <div v-for="(item, index) in props.data.list" :key="index" class="item">
                    <div class="icon">
                        <img :src="item.icon" alt="" />
                    </div>
                    <div class="item-title">{{ item.title }}</div>
                    <div v-if="item.text != ''" class="text">{{ item.text }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { CustomBoxType } from "@/types/index"

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
    position: relative;

    .container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: var(--custom-width);
        margin: 0 auto;
        padding: 120px 80px;
        box-sizing: border-box;

        @media (max-width: 1100px) {
            padding: 60px 40px;
        }


        .title {
            font-size: 32px;
            text-align: center;

            @media (max-width: 1100px) {
                font-size: 24px;
            }
        }

        .list {
            display: flex;
            flex-wrap: wrap;
            margin: 80px 0;
            width: 100%;

            @media (max-width: 1100px) {
                margin: 50px 0;
            }

            @media (max-width: 768px) {
                margin: 30px 0;
            }

            .item {
                padding: 32px;
                border-radius: 8px;
                flex: 1;
                margin: 10px;
                color: var(--text-color-1);
                display: flex;
                flex-direction: column;
                align-items: center;
                border: 1px solid var(--primary-color);
                text-align: center;
                box-sizing: border-box;

                @media (max-width: 1100px) {
                    width: 100%;
                    flex: auto;
                    margin: 10px 0;
                    padding: 32px 12px;
                }

                @media (max-width: 768px) {
                    width: 100%;
                }

                .icon {
                    img {
                        --size: 130px;
                        height: var(--size);
                        --mask-image: linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%);
                        mask-image: var(--mask-image);
                        -webkit-mask-image: var(--mask-image);
                        mask-composite: intersect;
                    }
                }

                .item-title {
                    margin: 20px 0;
                    color: var(--primary-color);
                }

                .text {
                    flex: 1;
                    color: var(--gray-color-1);
                    line-height: 24.3px;
                }

            }
        }


    }
}
</style>
