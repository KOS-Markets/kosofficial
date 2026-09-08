<template>
    <div class="home-box">
        <div class="bg-img">
            <img :src="profitImg" alt="" />
        </div>
        <div class="container-box">
            <div class="title">{{ t('homebox2Sentence') }}</div>
            <div class="tag cta-button">
                <CustomButton :name="t('homebox2Sentence1')" :type="1" @toPage="browserRedirection(link_config.register_link)"/>
            </div>
            <div class="list">
                <div class="item">
                    <div class="number">¥1,278,350,000</div>
                    <div class="text">{{ t('homebox2Sentence2') }}</div>
                </div>
                <div class="item">
                    <div class="number">73.4%</div>
                    <div class="text">{{ t('homebox2Sentence3') }}</div>
                </div>
                <div class="item">
                    <div class="number">200,000+</div>
                    <div class="text">{{ t('homebox2Sentence4') }}</div>
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

import { link_config } from '@/config';

import profitImg from '@/assets/img/home/profit-img.jpg';
</script>

<style lang="scss" scoped>
.home-box {
    width: 100%;
    height: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    background: linear-gradient(135deg, #1E40AF 0%, #1E3A8A 50%, #172554 100%);
    color: #FFFFFF;
    position: relative;

    .bg-img {
        width: 100%;
        height: 100%;
        position: absolute;

        img {
            height: 90%;
            position: absolute;
            right: 0;
            opacity: 0.2;
        }
    }

    .container-box {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 100px 80px;
        box-sizing: border-box;
        position: absolute;

        @media (max-width: 1100px) {
            padding: 60px 40px;
        }

        @media (max-width: 768px) {
            padding: 30px 40px;
        }

        .title {
            font-size: 36px;
            text-align: center;
            color: #FFFFFF;
    
            @media (max-width: 768px) {
                font-size: 24px;
            }
        }
    
        .tag {
            margin: 30px 0;
    
            &.cta-button {
                :deep(.el-button) {
                    background-color: #FFFFFF;
                    border-color: #FFFFFF;
                    color: #1E3A8A;
    
                    &:hover,
                    &:focus-visible {
                        background-color: #E2E8F0;
                        border-color: #E2E8F0;
                        color: #1E3A8A;
                    }
                }
            }
        }
    
        .list {
            display: flex;
            justify-content: space-between;
            width: 100%;
            max-width: var(--max-width);
            border-left: 1px solid rgba(255, 255, 255, 0.2);
    
            @media (max-width: 768px) {
                flex-direction: column;
            }
    
            .item {
                width: 33.3%;
                border-right: 1px solid rgba(255, 255, 255, 0.2);
                text-align: center;
                padding: 16px;
                box-sizing: border-box;
    
                @media (max-width: 768px) {
                    width: 100%;
                }
    
                .number {
                    font-size: 19px;
                    font-weight: 700;
                    color: #FFFFFF;
                    margin-bottom: 10px;
                }
    
                .text {
                    color: rgba(255, 255, 255, 0.8);
                }
            }
        }
    }
}
</style>
