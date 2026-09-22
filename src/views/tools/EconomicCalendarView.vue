<template>
    <div class="economic-calendar-view">
        <CustomCarousel :title="t('economicCalendarViewTitle')" :intro="t('economicCalendarViewIntro')"
            :btnText="t('marketNewsViewBtnText')" :background="background" @toPage="browserRedirection(link_config.register_link)"
            style="--mask-image: linear-gradient(to right, transparent 0%, black 20%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%); --bg-h: var(--bg-h-v); --right: var(--right-pos); --opacity: var(--opacity-v)" />

        <div class="iframe" v-loading="loading">
            <!-- <div class="title">
                {{ t('marketNewsSentence') }}
            </div> -->
            <!-- <iframe @load="handleLoad" allowtransparency="true" frameborder="0" :src="address" title=""
                lang="en"></iframe> -->
            <iframe 
                @load="handleLoad"
                scrolling="no"
                allowtransparency="true"
                frameborder="0"
                src="https://www.tradingview-widget.com/embed-widget/events/?locale=en#%7B%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Afalse%2C%22countryFilter%22%3A%22ar%2Cau%2Cbr%2Cca%2Ccn%2Cfr%2Cde%2Cin%2Cid%2Cit%2Cjp%2Ckr%2Cmx%2Cru%2Csa%2Cza%2Ctr%2Cgb%2Cus%2Ceu%22%2C%22importanceFilter%22%3A%22-1%2C0%2C1%22%2C%22width%22%3A1080%2C%22height%22%3A800%2C%22utm_source%22%3A%22www.gvdmarkets.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22events%22%2C%22page-uri%22%3A%22www.gvdmarkets.com%2Feconomic-calendar%2F%22%7D"
                title="events TradingView widget"
                lang="en"></iframe>
            <!-- <div class="btn">
                <CustomButton :name="t('marketNewsSentence1')" :type="1" />
            </div> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'

import CustomCarousel from '@/components/custom/CustomCarousel.vue';

import { browserRedirection } from '@/utils/tools'
import { iframeCalendar } from '@/apis/index'

import background from '@/assets/img/tools/economic-calendar/bg.jpg';

import { useAppStore } from '@/stores/app'
const store = useAppStore()
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import { link_config } from '@/config';

const loading = ref<boolean>(true)
const address = ref<string>('')

onBeforeMount(() => {
    getAddress()
})
const handleLoad = () => {
    loading.value = false
};

const getAddress = async () => {
    loading.value = true
    const res = await iframeCalendar({ usi: store.uuid })
    if (res.code == 200 && res.data) {
        address.value = res.data
    }
}
</script>

<style lang="scss" scoped>
.economic-calendar-view {
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
        --right-pos: -100px;
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
        
    }
}
</style>
