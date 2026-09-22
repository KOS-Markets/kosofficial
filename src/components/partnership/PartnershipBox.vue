<template>
    <div class="partnership-box">
        <img class="partnership-background section-media-bg section-media-img" src="@/assets/img/partnership/Section2.png" alt="">
        <div class="container">
            <div v-if="props.data.title != ''" class="title">{{ props.data.title }}</div>
            <div v-if="props.data.intro != ''" class="intro">{{ props.data.intro }}</div>
            <div class="list">
                <div v-for="(item, index) in props.data.list" :key="index" class="item">
                    <div class="icon">
                        <img :src="item.icon" alt="">
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
.partnership-box {
    position: relative;

    .partnership-background {
        /* 保持比例，覆盖整个容器 */
    }

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
            padding: 80px 40px;
        }

        @media (max-width: 768px) {
            padding: 60px 24px;
        }


        .title {
            font-size: 32px;
            text-align: center;

            @media (max-width: 768px) {
                font-size: 24px;
            }
        }
        

        .intro {
            color: var(--gray-color-1);
            margin-top: 30px;
            text-align: center;
        }

        .list {
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
            margin: 80px 0;
            width: 100%;

            @media (max-width: 1100px) {
                margin: 50px 0;
                flex-direction: column;
                align-items: center;
            }

            @media (max-width: 768px) {
                margin: 30px 0;
            }

            .item {
                padding: 32px;
                border-radius: 8px;
                width: min(368px, 100%);
                margin: 20px 40px;
                color: var(--text-color-1);
                display: flex;
                flex-direction: column;
                border: 1px solid var(--primary-color);
                box-sizing: border-box;

                @media (max-width: 1100px) {
                    margin: 10px 0;
                }

                .item-title {
                    margin: 20px 0;
                    color: var(--text-color-1);
                }

                .text {
                    flex: 1;
                    color: var(--gray-color-1);
                }

            }
        }


    }
}
</style>
