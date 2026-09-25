<template>
    <div class="home-box">
        <div class="title">{{ t('homebox3Sentence') }}</div>
        <div class="intro">
            {{ t('homebox3Sentence1') }}
        </div>

        <div class="list">
            <div class="item">
                <img :src="icon1" alt="">
                <div class="number">2,000,000+</div>
                <div class="name">{{ t('homebox3Sentence2') }}</div>
                <div class="text">{{ t('homebox3Sentence3') }}</div>
            </div>
            <div class="item">
                <img :src="icon2" alt="">
                <div class="number">190+</div>
                <div class="name">{{ t('homebox3Sentence4') }}</div>
                <div class="text">{{ t('homebox3Sentence5') }}</div>
            </div>
            <div class="item">
                <img :src="icon3" alt="">
                <div class="number">70,000+</div>
                <div class="name">{{ t('homebox3Sentence6') }}</div>
                <div class="text">{{ t('homebox3Sentence7') }}</div>
            </div>
            <div class="item">
                <img :src="icon4" alt="">
                <div class="number">1,000+</div>
                <div class="name">{{ t('homebox3Sentence8') }}</div>
                <div class="text">{{ t('homebox3Sentence9') }}</div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import icon1 from '@/assets/img/home/our-number-1.jpg'
import icon2 from '@/assets/img/home/our-number-2.jpg'
import icon3 from '@/assets/img/home/our-number-3.jpg'
import icon4 from '@/assets/img/home/our-number-4.jpg'
</script>

<style lang="scss" scoped>
.home-box {
    width: var(--custom-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 80px 120px;
    box-sizing: border-box;

    @media (max-width: 1100px) {
        padding: 0 40px 120px;
    }

    @media (max-width: 768px) {
        padding: 0 24px;
    }

    .title {
        font-size: 36px;
        text-align: center;
        padding: 0 40px;

        @media (max-width: 768px) {
            font-size: 24px;
            padding: 0;
        }
    }

    .intro {
        margin: 30px 0;
        font-size: 24px;
        color: var(--gray-color-1);
        padding: 0 40px;

        @media (max-width: 768px) {
            padding: 0;
        }
    }

    .list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        border-left: 1px solid var(--primary-color);
        box-sizing: border-box;

        @media (max-width: 768px) {
            flex-direction: column;
        }

        .item {
            width: 25%;
            border-right: 1px solid var(--primary-color);
            text-align: center;
            padding: 16px;
            box-sizing: border-box;

            @media (max-width: 1100px) {
                width: 100%;
            }

            img {
                height: 150px;
            }

            .number {
                font-size: 36px;
                font-weight: 700;
                color: var(--primary-color);

                @media (max-width: 1100px) {
                    font-size: 20px;
                }

            }

            .name {
                color: var(--text-color-1);
                margin: 10px 0;
            }

            .text {
                font-weight: 700;
                color: var(--text-color);
            }
        }
    }


}
</style>