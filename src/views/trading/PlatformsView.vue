<template>
    <div class="platforms-view">
        <CustomCarousel style="--mask-image: linear-gradient(to right, transparent 0%, black 10%, black 95%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%); --bg-h: var(--bg-h-v); --right: var(--right-pos); --opacity: var(--opacity-v)" :title="t('platformsViewTitle')" :intro="t('platformsViewIntro')" :background="background" />
        <HomePlatformBox />

        <!-- <MTPlatformBox :data="mt4" /> -->
        <MTPlatformBox :data="mt5" />
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

import type { CustomMTBoxType } from "@/types/index"

import CustomCarousel from '@/components/custom/CustomCarousel.vue';
import HomePlatformBox from '@/components/home/HomePlatformBox.vue';
import MTPlatformBox from '@/components/trading/MTPlatformBox.vue';

// import desktop from '@/assets/img/trading/platform/Desktop meta.svg?raw';
// import android from '@/assets/img/trading/platform/android meta.svg?raw';
// import ios from '@/assets/img/trading/platform/iOS meta.svg?raw';
// import web from '@/assets/img/trading/platform/web meta.svg?raw';
import background from '@/assets/img/trading/platform/bg.jpg';

import icon1 from '@/assets/img/home/homePlatformBox/platform-1.jpg'
import icon2 from '@/assets/img/home/homePlatformBox/platform-2.jpg'
import icon3 from '@/assets/img/home/homePlatformBox/platform-3.jpg'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import { link_config } from "@/config"

// const mt4 = ref<CustomMTBoxType>(
//     {
//         title: t('platformsMT4Sentence'),
//         intro: t('platformsMT4Sentence1'),
//         list: [
//             t('platformsMT4Sentence2'),
//             t('platformsMT4Sentence3'),
//             t('platformsMT4Sentence4'),
//             t('platformsMT4Sentence5'),
//             t('platformsMT4Sentence6'),
//             t('platformsMT4Sentence7'),
//         ],
//         platform: [
//             {
//                 icon: icon1,
//                 title: t('platformsMT4Sentence8'),
//                 btn: [
//                     {
//                         btnText: t('platformsMT4Sentence9'),
//                         btnClick: () => {
//                         },
//                     },
//                     {
//                         btnText: t('platformsMT4Sentence10'),
//                         btnClick: () => { },
//                     },
//                 ]
//             },
//             {
//                 icon: icon2,
//                 title: t('platformsMT4Sentence11'),
//                 btn: [
//                     {
//                         btnText: t('platformsMT4Sentence12'),
//                         btnClick: () => {

//                             window.open(`${window.location.origin}/metatrader4.apk`, '_blank')
//                         },
//                     },
//                     {
//                         btnText: t('platformsMT4Sentence13'),
//                         btnClick: () => {
//                         },
//                     },
//                 ]
//             },
//             {
//                 icon: icon3,
//                 title: t('platformsMT4Sentence14'),
//                 btn: [
//                     {
//                         btnText: t('platformsMT4Sentence15'),
//                         btnClick: () => { },
//                     }
//                 ]
//             }
//         ]
//     }
// )

const mt5 = ref<CustomMTBoxType>(
    {
        title: t('platformsMT5Sentence'),
        intro: t('platformsMT5Sentence1'),
        list: [
            t('platformsMT5Sentence2'),
            t('platformsMT5Sentence3'),
            t('platformsMT5Sentence4'),
            t('platformsMT5Sentence5'),
            t('platformsMT5Sentence6'),
            t('platformsMT5Sentence7'),

        ],
        platform: [
            {
                icon: icon1,
                title: t('platformsMT4Sentence8'),
                btn: [
                    {
                        btnText: t('platformsMT5Sentence8'),
                        btnClick: () => {
                            window.open(link_config.mt5_window_download_link)
                        },
                    },
                    {
                        btnText: t('platformsMT5Sentence9'),
                        btnClick: () => { },
                    },
                ]
            },
            {
                icon: icon2,
                title: t('platformsMT4Sentence11'),
                btn: [
                    {
                        btnText: t('platformsMT4Sentence12'),
                        btnClick: () => {
                            window.open(link_config.mt5_android_download_link, '_blank')
                        },
                    },
                    {
                        btnText: t('platformsMT4Sentence13'),
                        btnClick: () => {
                            window.location.href = link_config.mt5_ios_download_link;
                        },
                    },
                ]
            },
            {
                icon: icon3,
                title: t('platformsMT4Sentence14'),
                btn: [
                    {
                        btnText: t('platformsMT5Sentence10'),
                        btnClick: () => { },
                    }
                ]
            }
        ]
    }
)
</script>

<style lang="scss" scoped>
.platforms-view {
    --right-pos: 200px;
    --bg-h-v: 100%;

    @media (max-width: 1100px) {
        --right-pos: 50px;
    }

    @media (max-width: 650px) {
        --right-pos: 0;
        --opacity-v: 0.2;
        --bg-h-v: 80%;
    }
}
</style>
