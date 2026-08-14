<template>
    <div class="home-box">
        <div class="home-box__bg section-media-bg">
            <img class="home-box__img section-media-img" src="@/assets/img/trading/platform/account-type-2.jpg" alt="">
        </div>
        <div class="home-box__content">
            <div class="home-box__title">{{ staticDataStore.accountDataList.title }}</div>
            <div class="home-box__list">
                <div v-for="(item, index) in staticDataStore.accountDataList.list" :key="index" class="home-box__item">
                    <div class="home-box__item-header">
                        <img src="@/assets/img/trading/platform/home.jpg" alt="" />
                        <!-- <div class="home-box__icon" v-html="item.icon"></div> -->
                        <div class="home-box__item-title">{{ item.title }}</div>
                        <CustomButton :name="t('register')" :type="1" @toPage="browserRedirection(link_config.register_link)" />
                    </div>
                    <div v-for="(option, index) in item.option" :key="index" class="home-box__option">
                        <div class="name">{{ option.name }}</div>
                        <div class="home-box__number" v-html="option.number"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import CustomButton from '@/components/custom/CustomButton.vue'

import { browserRedirection } from '@/utils/tools'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { useStaticDataStore } from '@/stores/staticData'
const staticDataStore = useStaticDataStore()

import { link_config } from '@/config';
</script>

<style lang="scss" scoped>
.home-box {
    position: relative;

    .home-box__img {
        opacity: 0.1;
    }

    .home-box__content {
        position: relative;
        width: var(--custom-width);
        margin: 0 auto;
        padding: 120px 80px;
        box-sizing: border-box;

        @media (max-width: 1100px) {
            padding: 120px 40px;
        }

        @media (max-width: 768px) {
            padding: 60px 24px;
        }

        .home-box__title {
            font-size: 36px;
            font-weight: 900;
            text-align: center;

            @media (max-width: 768px) {
                font-size: 24px;
            }
        }

        .home-box__list {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            margin: 20px 0;
            box-sizing: border-box;

            @media (max-width: 1100px) {
                align-items: center;
                margin: 20px 0;
            }

            @media (max-width: 768px) {
                margin: 20px 0;
            }

            .home-box__item {
                width: calc(25% - 10px);
                display: flex;
                flex-direction: column;
                margin: 30px 0;

                @media (max-width: 1100px) {
                    width: calc(50% - 10px);
                }

                @media (max-width: 768px) {
                    width: 100%;
                }

                .home-box__item-header {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 50px;

                    @media (max-width: 768px) {
                        margin-bottom: 30px;
                    }

                    img {
                        height: 50px;
                        margin-bottom: 20px;
                    }

                    .home-box__item-title {
                        font-weight: 700;
                        margin-bottom: 20px;
                    }
                }

                .home-box__option {
                    display: flex;
                    padding: 12px 16px;
                    border-radius: 8px;
                    background-color: var(--bg-color-1);
                    margin: 5px 0;

                    .name,
                    .home-box__number {
                        width: 50%;
                    }

                    .home-box__number {
                        text-align: center;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                }
            }
        }
    }
}
</style>
