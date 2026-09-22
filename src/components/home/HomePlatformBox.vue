<template>
    <div class="home-box">
        <img class="home-box-background section-media-bg section-media-img" src="@/assets/img/home/download-1.jpg" alt="">
        <div class="container">
            <div class="title">{{ dataList.title }}</div>
            <div class="list">
                <div v-for="(item, index) in dataList.list" :key="index" class="item">
                    <div class="item-header">
                        <div class="item-title">{{ item.title }}</div>
                        <img style="width: 100px" :src="item.icon" alt="">
                    </div>
                    <div class="intro">{{ item.intro }}</div>
                    <div class="text">{{ item.text }}</div>
                    <div class="btn">
                        <CustomButton :name="t('start')" :type="1" @click="item.click" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

import type { CustomBoxType } from "@/types/index"

import CustomButton from '@/components/custom/CustomButton.vue'

import icon1 from '@/assets/img/home/homePlatformBox/platform-1.jpg'
import icon2 from '@/assets/img/home/homePlatformBox/platform-2.jpg'
import icon3 from '@/assets/img/home/homePlatformBox/platform-3.jpg'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import { link_config } from "@/config"

const dataList = ref<CustomBoxType>(
    {
        title: t('HomePlatformBoxSentence'),
        list: [
            // {
            //     icon: icon1,
            //     title: t('HomePlatformBoxSentence1'),
            //     intro: t('HomePlatformBoxSentence2'),
            //     text: t('HomePlatformBoxSentence3'),
            //     click: () => {
            //         window.open("https://download.terminal.free/cdn/web/harmovest.capital.comoros/mt4/harmovest4setup.exe")
            //     },
            // },
            // {
            //     icon: icon2,
            //     title: t('HomePlatformBoxSentence4'),
            //     intro: t('HomePlatformBoxSentence5'),
            //     text: t('HomePlatformBoxSentence6'),
            //     click: () => {
            //         const userAgentInfo = navigator.userAgent
            //         if (userAgentInfo.includes('iPhone')) {
            //             window.location.href = 'https://download.terminal.free/cdn/mobile/mt4/ios?server=Harmovest-Demo,Harmovest-Live';
            //         } else {
            //             // window.open("https://download.terminal.free/cdn/mobile/mt4/android?server=Harmovest-Demo,Harmovest-Live")
            //             window.open(`${window.location.origin}/metatrader4.apk`, '_blank')
            //         }
            //     },

            // },
            // {
            //     icon: icon3,
            //     title: t('HomePlatformBoxSentence7'),
            //     intro: t('HomePlatformBoxSentence8'),
            //     text: t('HomePlatformBoxSentence9'),
            //     click: () => {},
            // },
            {
                icon: icon1,
                title: t('HomePlatformBoxSentence10'),
                intro: t('HomePlatformBoxSentence11'),
                text: t('HomePlatformBoxSentence12'),
                click: () => {
                    window.open(link_config.mt5_window_download_link)
                },
            },
            {
                icon: icon2,
                title: t('HomePlatformBoxSentence13'),
                intro: t('HomePlatformBoxSentence14'),
                text: t('HomePlatformBoxSentence15'),
                click: () => {
                    const userAgentInfo = navigator.userAgent
                    if (userAgentInfo.includes('iPhone')) {
                        window.location.href = link_config.mt5_ios_download_link;
                    } else {
                        // window.open("https://download.terminal.free/cdn/mobile/mt5/android?server=Harmovest-Server")
                        window.open(link_config.mt5_android_download_link, '_blank')
                    }
                },
            },
            {
                icon: icon3,
                title: t('HomePlatformBoxSentence16'),
                intro: t('HomePlatformBoxSentence17'),
                text: t('HomePlatformBoxSentence18'),
                click: () => {},
            },
        ]
    }
)
</script>

<style lang="scss" scoped>
.home-box {
    position: relative;

    .home-box-background {
        /* 保持比例，覆盖整个容器 */
        /* 关键：图片底部对齐，水平居中 */
        opacity: 8%;
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
            padding: 60px 80px;
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

        .list {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            width: 100%;
            margin: 80px 0;

            @media (max-width: 1100px) {
                align-items: center;
                margin: 50px 0;
            }

            @media (max-width: 768px) {
                margin: 30px 0;
            }

            .item {
                padding: 32px;
                border-radius: 19px;
                background: var(--surface-color);
                box-shadow: 0 4px 24px rgba(15, 23, 42, 0.06);
                border: 1px solid var(--border-color);
                width: 314px;
                margin: 20px;
                color: var(--text-color-1);
                display: flex;
                flex-direction: column;

                @media (max-width: 768px) {
                    margin: 10px 0;
                }

                .item-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .item-title {
                        font-size: 24px;
                        font-weight: 600;
                        color: var(--text-color);
                    }
                }

                .intro {
                    font-size: 18px;
                    margin: 20px 0;
                }

                .text {
                    flex: 1;
                    line-height: 25.6px;
                    color: var(--gray-color-1);
                }



                .btn {
                    margin-top: 30px;
                }


            }

            .item:nth-child(1) {
                .coin {
                    color: var(--text-color);
                }
            }
        }


    }
}
</style>
