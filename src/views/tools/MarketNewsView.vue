<template>
    <div class="market-news-view">
        <CustomCarousel :title="t('marketNewsViewTitle')" :intro="t('marketNewsViewIntro')"
            :btnText="t('marketNewsViewBtnText')" :background="background" @toPage="browserRedirection(link_config.register_link)"
            style="--mask-image: linear-gradient(to right, transparent 0%, black 20%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%); --bg-h: var(--bg-h-v); --right: var(--right-pos); --opacity: var(--opacity-v)" />

        <div class="iframe" v-loading="loading">
            <!-- <div class="title">
                {{ t('marketNewsSentence') }}
            </div> -->

            <!-- <div class="list">
                <div class="item" v-for="(item, index) in list" :key="index"> -->
                    <!-- <video :src="item.link" control style="width: 100%;"></video> -->

                    <!-- <img :src="item.image" alt=""> -->
                    <!-- <iframe
                        @load="handleLoad"
                        scrolling="no"
                        allowtransparency="true"
                        frameborder="0"
                        :src="item.link"
                        allowfullscreen
                        allow="fullscreen"
                        title="timeline TradingView widget"
                        style="width: 100%; height: 100%;"
                        lang="en"></iframe> -->

                    <!-- <video :src="item.sources[5].file" control style="width: 100%;height: 500px;"></video> -->

                    <!-- <iframe
                        @load="handleLoad"
                        scrolling="no"
                        allowtransparency="true"
                        frameborder="0"
                        :src="item.sources[5].file"
                        title="timeline TradingView widget"
                        style="width: 100%;height: 754px;"
                        lang="en"></iframe> -->


                <!-- </div>
            </div> -->
            <!-- <iframe @load="handleLoad" allowtransparency="true" frameborder="0" :src="address" title=""
                lang="en"></iframe> -->
            <iframe
                @load="handleLoad"
                scrolling="no"
                allowtransparency="true"
                frameborder="0"
                src="https://www.tradingview-widget.com/embed-widget/timeline/#%7B%22displayMode%22%3A%22regular%22%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Afalse%2C%22width%22%3A1080%2C%22height%22%3A800%2C%22utm_source%22%3A%22www.gvdmarkets.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22timeline%22%2C%22page-uri%22%3A%22www.gvdmarkets.com%2Fmarket-news%2F%22%7D"
                title="timeline TradingView widget"
                lang="en"></iframe>

            <!-- <div class="btn">
                <CustomButton :name="t('marketNewsSentence1')" :type="1" />
            </div> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, watch } from 'vue'
import axios from 'axios'

import CustomCarousel from '@/components/custom/CustomCarousel.vue';
import CustomButton from '@/components/custom/CustomButton.vue'

import { iframeNews } from '@/apis/index'
import { browserRedirection } from '@/utils/tools'

import background from '@/assets/img/tools/market-news/bg.jpg';

import { link_config } from '@/config';

import { useAppStore } from '@/stores/app'
const store = useAppStore()
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { usePageSettingsStore } from '@/stores/pageSettings'
const pageSettingsStore = usePageSettingsStore()

const loading = ref<boolean>(true)
const address = ref<string>('')

const list = ref<any>([])
const linkList = ref<string[]>(['https://videos.tradingcentral.com/v2/playlists/CBHwkOqa?format=json','https://videos.tradingcentral.com/v2/playlists/bYWRudo5?format=json'])

onBeforeMount(() => {
    getAddress()
    getLinkJSON()
})

watch(() => pageSettingsStore.lang, () => {
    getLinkJSON()
})

const handleLoad = () => {
    loading.value = false
};

const getAddress = async () => {
    loading.value = true
    const res = await iframeNews({ usi: store.uuid })
    if (res.code == 200 && res.data) {
        address.value = res.data
    }
}


const getLinkJSON = async() => {
    try {
        loading.value = true
        let link: any = ''

        if (pageSettingsStore.lang != 'ar')
            link = linkList.value[0]
        else
            link = linkList.value[1]

        const res = await axios.get(link)

        list.value = res.data.playlist


    } catch (error) {
        // console.error('请求失败：', error)
    } finally {
        loading.value = false
    }
}
</script>

<style lang="scss" scoped>
.market-news-view {
    --bg-h-v: 100%;
    --right-pos: 100px;
    --opacity-v: 1;

    @media (max-width: 1500px) {
        --right-pos: 50px;
    }

    @media (max-width: 1100px) {
        --opacity-v: 0.5;
        --right-pos: 0;
    }

    @media (max-width: 650px) {
        --right-pos: -50px;
        --opacity-v: 0.2;
        --bg-h-v: 80%;
    }

    .iframe {
        width: var(--custom-width);
        margin: 0 auto;
        box-sizing: border-box;
        padding: 120px 80px;

        @media (max-width: 1100px) {
            padding: 60px 40px;
        }

        @media (max-width: 768px) {
            padding: 60px 24px;
        }

        .title {
            text-align: center;
            font-size: 36px;
            margin-bottom: 40px;

            @media (max-width: 1100px) {
                font-size: 24px;
            }
        }

        iframe {
            width: 100%;
            height: 500px;
        }

        .btn {
            display: flex;
            justify-content: center;
            margin-top: 30px;
        }

        .list {
            display: flex;
            flex-direction: column;
            // flex-wrap: wrap;
            align-items: center;

            .item {
                margin: 20px 0;
                width: min(600px, 100%);aspect-ratio: 16 / 9;

                img {
                    border-radius: 10px;
                }
            }
        }
    }
}
</style>
