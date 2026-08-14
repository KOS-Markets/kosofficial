<template>
    <div class="stocks-box">
        <img class="stocks-box-background section-media-bg section-media-img" src="@/assets/img/markets/indices/why-1.jpg" alt="">
        <div class="container">
            <div class="title">{{ props.data.title }}</div>
            <div class="intro">{{ props.data.intro }}</div>
            <div class="list">
                <div v-for="(item, index) in props.data.list" :key="index" class="item">
                    <img :src="item.icon" alt="">
                    <div class="content">
                        <div class="item-title">{{ item.title }}</div>
                        <div class="item-intro">{{ item.intro }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { CustomBoxType } from '@/types/index'

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
.stocks-box {
    position: relative;

    .stocks-box-background {
        /* 保持比例，覆盖整个容器 */
        /* 关键：图片底部对齐，水平居中 */
        opacity: 0.1;
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
            padding: 60px 40px;
        }

        @media (max-width: 768px) {
            padding: 60px 24px;
        }


        .title {
            font-size: 36px;
            text-align: center;

            @media (max-width: 768px) {
                font-size: 24px;
            }
        }

        .intro {
            font-size: 18px;
            text-align: center;
            color: var(--text-color-1);
            margin-top: 40px;

            @media (max-width: 768px) {
                font-size: 14px;
                margin-top: 20px;
            }
        }

        .list {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            width: 100%;
            margin: 80px 0;
            box-sizing: border-box;

            @media (max-width: 1100px) {
                flex-direction: column;
                align-items: center;
                margin: 50px 0;
            }

            @media (max-width: 768px) {
                margin: 30px 0;
            }

            .item {
                border-radius: 8px;
                width: min(354px, 100%);
                margin: 20px;
                color: var(--text-color-1);
                display: flex;
                flex-direction: column;
                border: 1px solid var(--primary-color);
                overflow: hidden;

                @media (max-width: 768px) {
                    margin: 10px 0;
                }

                img {
                    border-radius: 10px;
                }

                .content {
                    padding: 20px 32px;
                }

                .item-title {
                    font-size: 16px;
                    font-weight: 700;
                    color: var(--text-color);

                }

                .item-intro {
                    margin-top: 20px;
                    color: var(--gray-color-1);
                    line-height: 24.3px;
                    font-size: 14px;
                }


            }
        }


    }
}
</style>
