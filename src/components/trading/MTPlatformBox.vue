<template>
    <div class="mt-platform-box">
        <div class="title">{{ props.data.title }}</div>
        <div class="intro">{{ props.data.intro }}</div>
        <div class="container">
            <div class="left">
                <img src="@/assets/img/trading/platform/mtn.jpg" alt="">
            </div>
            <div class="right">
                <div v-for="(item, index) in props.data.list" :key="index" class="item">
                    <div class="icon" v-html="nike"></div>
                    <div class="text">{{ item }}</div>
                </div>
            </div>
        </div>
        <div class="platform">
            <div v-for="(item, index) in props.data.platform" :key="index" class="platform-list">
                <div class="platform-header">
                    <img :src="item.icon" alt="" />
                    <!-- <div class="icon" v-html="item.icon"></div> -->
                    <div class="text">{{ item.title }}</div>
                </div>
                <div v-for="(item1, index1) in item.btn" :key="index1" class="btn">
                    <CustomButton :name="item1.btnText" :type="1" @toPage="item1.btnClick" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { CustomMTBoxType } from "@/types/index"

import CustomButton from '@/components/custom/CustomButton.vue'

import nike from '@/assets/img/trading/platform/tick.svg?raw'

const props = withDefaults(
    defineProps<{
        data?: CustomMTBoxType
    }>(),
    {
        data: () => ({
            title: '',
            intro: '',
            list: [],
            platform: [],
        }),
    },
)
</script>

<style lang="scss" scoped>
.mt-platform-box {
    width: var(--custom-width);
    margin: 0 auto;
    padding: 80px 0;
    box-sizing: border-box;

    @media (max-width: 1100px) {
        padding: 80px 40px;
    }

    @media (max-width: 768px) {
        padding: 40px 24px;
    }

    .title {
        font-size: 36px;
        font-weight: 900;
        text-align: center;
        padding: 0 80px;

        @media (max-width: 768px) {
            font-size: 24px;
            padding: 0;
        }
    }

    .intro {
        margin: 30px 0;
        font-size: 18px;
        text-align: center;
        color: var(--gray-color-1);
        margin-bottom: 70px;
        padding: 0 80px;

        @media (max-width: 768px) {
            margin-bottom: 30px;
            padding: 0;
        }
    }

    .container {
        display: flex;
        align-items: center;
        background-color: var(--bg-color-2);
        border-radius: 66px;
        padding: 30px 80px;

        @media (max-width: 1100px) {
            flex-direction: column;
            padding: 30px 50px;
        }

        @media (max-width: 768px) {
            padding: 30px;
            border-radius: 33px;
        }

        .left {
            width: 50%;

            @media (max-width: 1100px) {
                width: 100%;
            }

            img {
                width: 100%;
                --mask-image: linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%);
                mask-image: var(--mask-image);
                -webkit-mask-image: var(--mask-image);
                mask-composite: intersect;
            }
        }

        .right {
            padding: 0 50px;

            @media (max-width: 1100px) {
                padding: 0;
            }

            .item {
                display: flex;
                padding: 5px 0;

                .icon {
                    margin-inline-end: 10px;
                }

                .text {
                    font-size: 18px;
                    line-height: 20px;

                    @media (max-width: 768px) {
                        font-size: 14px;
                    }
                }
            }
        }

    }

    .platform {
        display: flex;
        justify-content: center;
        padding: 10px 80px;

        @media (max-width: 1100px) {
            flex-direction: column;
            align-items: center;
        }

        @media (max-width: 768px) {
            padding: 10px 0;
        }

        .platform-list {
            // width: 25%;
            flex: 1;
            margin: 50px 20px;

            display: flex;
            flex-direction: column;
            align-items: center;

            @media (max-width: 1100px) {
                width: 50%;
                margin: 30px 20px;
            }

            @media (max-width: 768px) {
                width: 100%;
                margin: 20px;
            }

            .platform-header {
                display: flex;
                flex-direction: column;

                // .icon {
                //     display: flex;
                //     justify-content: center;

                //     :deep(svg) {
                //         margin: 0 10px;
                //     }
                // }

                img {
                    --size: 200px;
                    width: var(--size);
                    height: var(--size);
                    --mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);
                    mask-image: var(--mask-image);
                    -webkit-mask-image: var(--mask-image);
                    mask-composite: intersect;
                }

                .text {
                    text-align: center;
                    margin: 10px 0 30px;
                }
            }

            .btn {
                width: 100%;
                margin: 10px 0;

                :deep(.el-button) {
                    width: 100%;
                }
            }


        }
    }
}
</style>
