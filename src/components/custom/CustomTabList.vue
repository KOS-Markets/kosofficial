<template>
    <div class="custom-tab-list">
        <div class="custom-tab">
            <div
                v-for="tab in tabs"
                :key="tab.type"
                class="custom-tab-item"
                :class="{ 'active': activeTab == tab.type }"
                @click="changeTab(tab.type)"
            >
                {{ tab.label }}
            </div>
        </div>
        <div class="custom-list">
            <swiper
                :key="activeTab"
                style="width: 100%;"
                :free-mode="true"
                :loop="true"
                :speed="3000"
                :allow-touch-move="false"
                :autoplay="{
                    delay: 0,
                    disableOnInteraction: false,
                }"
                @swiper="onSwiper"
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave"
                :slides-per-view="'auto'"
                :space-between="16"
            >
                <swiper-slide
                    v-for="(item) in list"
                    :key="item.symbol"
                    class="ticker-slide"
                >
                    <div class="custom-list-item">
                        <div class="icon" :style="getIconStyle(item.symbol)">
                            {{ getCurrencyInitials(item.name) }}
                        </div>
                        <div class="info">
                            <div class="name">{{ item.name }}</div>
                            <div class="price">
                                {{ formatPrice(item.symbol, item.decimal) }}
                            </div>
                        </div>
                        <div class="change" :class="getChangeClass(item.symbol)">
                            <span class="arrow">{{ getChangeIcon(item.symbol) }}</span>
                            {{ getChangePercent(item.symbol) }}%
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import BigNumber from 'bignumber.js'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { useWsConnectStore } from "@/stores/wsConnect";
const wsConnectStore = useWsConnectStore()

import { Swiper, SwiperSlide } from 'swiper/vue';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import { register } from 'swiper/element/bundle';
register();

const swiperInstance = ref<SwiperType | null>(null);

const onSwiper = (swiper: SwiperType) => {
  swiperInstance.value = swiper;
};

const handleMouseEnter = () => {
    if (!swiperInstance.value) return;

    const currentTranslate = swiperInstance.value.getTranslate();
    swiperInstance.value.translateTo(currentTranslate, 0);
    swiperInstance.value.autoplay.stop();
    swiperInstance.value.translateTo(currentTranslate, 3000);
};

const handleMouseLeave = () => {
    if (!swiperInstance.value) return;

    swiperInstance.value.autoplay.start();
};

const props = withDefaults(
    defineProps<{
        active?: number
    }>(),
    {
        active: 0,
    },
)

const activeTab = ref<number>(props.active)

const tabs = computed(() => [
    { label: t('forex'), type: 0 },
    { label: t('indices'), type: 1 },
    { label: t('energy'), type: 3 },
    { label: t('metals'), type: 4 },
    { label: t('shares'), type: 5 },
])

const list = computed(() =>
    wsConnectStore.coinList.filter((item) => item.type == activeTab.value)
)

const changeTab = (num: number) => {
    activeTab.value = num
    wsConnectStore.subscribePrice(activeTab.value)
}

function formatPrice(symbol: string, decimal: number): string {
    const quote = wsConnectStore.market[symbol]
    if (!quote) return '0.' + '0'.repeat(decimal)
    const raw = quote.last || quote.askPrice || 0
    if (raw === 0) return '0.' + '0'.repeat(decimal)
    return BigNumber(raw).decimalPlaces(decimal, BigNumber.ROUND_FLOOR).toString()
}

function hashCode(str: string): number {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash)
    }
    return hash
}

function getIconStyle(symbol: string) {
    const hash = hashCode(symbol)
    const hue = Math.abs(hash) % 360
    return {
        background: `linear-gradient(135deg, hsl(${hue}, 72%, 58%), hsl(${(hue + 45) % 360}, 72%, 46%))`
    }
}

function getCurrencyInitials(name: string): string {
    return name.slice(0, 2).toUpperCase()
}

function getChangeData(symbol: string): { value: number; up: boolean } {
    const hash = hashCode(symbol)
    const value = (Math.abs(hash) % 140) / 100 // 0.00 - 1.40
    const up = hash % 2 === 0
    return { value, up }
}

function getChangeClass(symbol: string): string {
    return getChangeData(symbol).up ? 'up' : 'down'
}

function getChangeIcon(symbol: string): string {
    return getChangeData(symbol).up ? '▲' : '▼'
}

function getChangePercent(symbol: string): string {
    return getChangeData(symbol).value.toFixed(2)
}
</script>

<style lang="scss" scoped>
.custom-tab-list {
    display: flex;
    flex-direction: column;
    width: 100%;

    .custom-tab {
        display: flex;
        margin: 0 auto 24px;
        max-width: 100%;
        width: max-content;
        flex-wrap: nowrap;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
        scrollbar-width: none;

        ::-webkit-scrollbar {
            display: none;
        }

        .custom-tab-item {
            padding: 10px 22px;
            background-color: transparent;
            color: var(--gray-color-1);
            cursor: pointer;
            white-space: nowrap;
            font-size: 14px;
            font-weight: 500;
            position: relative;
            transition: color 0.2s ease, background-color 0.2s ease;

            &:hover {
                color: var(--primary-color);
                background-color: rgba(37, 99, 235, 0.08);
                border-radius: 8px;
            }

            &.active {
                color: var(--primary-color);

                &::after {
                    content: '';
                    position: absolute;
                    left: 16px;
                    right: 16px;
                    bottom: 0;
                    height: 2px;
                    background-color: var(--primary-color);
                    border-radius: 2px;
                }
            }
        }
    }

    .custom-list {
        width: 100%;
        padding: 4px 0;

        :deep(.swiper-wrapper) {
            transition-timing-function: linear !important;
        }

        .ticker-slide {
            width: 260px;
            flex-shrink: 0;
        }

        .custom-list-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: var(--surface-color);
            border: 1px solid var(--surface-border-color);
            border-radius: 12px;
            padding: 14px 16px;
            box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
            transition: background-color 0.2s ease, border-color 0.2s ease;

            &:hover {
                background-color: var(--primary-color);
                border-color: var(--primary-color);
            }

            &:hover .info .name,
            &:hover .info .price {
                color: #fff;
            }

            &:hover .icon {
                filter: brightness(1.08);
            }

            &:hover .change {
                background-color: rgba(255, 255, 255, 0.18);
                color: #fff;
            }

            &:hover .change.up {
                color: #6EE7B7;
            }

            &:hover .change.down {
                color: #FCA5A5;
            }

            .icon {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                font-size: 13px;
                font-weight: 700;
                flex-shrink: 0;
                margin-inline-end: 12px;
                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
            }

            .info {
                flex: 1;
                min-width: 0;

                .name {
                    font-size: 15px;
                    color: var(--text-color);
                    font-weight: 600;
                    margin-bottom: 4px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    transition: color 0.2s ease;
                }

                .price {
                    font-size: 13px;
                    color: var(--gray-color-1);
                    font-weight: 500;
                    font-variant-numeric: tabular-nums;
                    transition: color 0.2s ease;
                }
            }

            .change {
                display: inline-flex;
                align-items: center;
                gap: 4px;
                padding: 4px 8px;
                border-radius: 6px;
                font-size: 12px;
                font-weight: 600;
                font-variant-numeric: tabular-nums;
                flex-shrink: 0;
                margin-inline-start: 10px;
                transition: background-color 0.2s ease, color 0.2s ease;

                &.up {
                    background-color: rgba(16, 185, 129, 0.1);
                    color: var(--green-color);
                }

                &.down {
                    background-color: rgba(239, 68, 68, 0.1);
                    color: var(--red-color);
                }

                .arrow {
                    font-size: 10px;
                }
            }
        }
    }
}
</style>
