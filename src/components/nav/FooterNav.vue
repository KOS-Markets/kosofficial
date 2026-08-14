<template>
    <div class="footer-menu">
        <div class="img-box">
            <img :src="profitImg" alt="" />
        </div>
        <div class="container-box">
            <div class="logo">
                <img src="/long-logo-2.png" alt="" />
                <div class="text">{{ t('copyright') }}</div>
            </div>
            <div class="content">
                <div class="list" v-for="(item, index) in store.menuList" :key="index">
                    <div class="title">{{ t(item.name).toLocaleUpperCase() }}</div>
                    <div class="item" v-for="(item1, index1) in item.children" @click="() => { item1.path ? router.push({ name: item1.path }) : '' }"
                        :key="index1">
                        {{ t(item1.name) }}
                    </div>
                    <div class="item" v-if="item.children.length == 0" @click="() => { item.path ? router.push({ name: item.path }) : '' }">
                        {{ t(item.name) }}
                    </div>
                </div>
            </div>
        </div>
        <div class="container-box-lg">
            <img src="/long-logo-2.png" alt="" />
            <div class="content">
                <div class="list" v-for="(item, index) in store.menuList" :key="index">
                    <div class="title">{{ t(item.name).toLocaleUpperCase() }}</div>
                    <div class="item" v-for="(item1, index1) in item.children" @click="() => { item1.path ? router.push({ name: item1.path }) : '' }"
                        :key="index1">
                        {{ t(item1.name) }}
                    </div>
                    <div class="item" v-if="item.children.length == 0" @click="() => { item.path ? router.push({ name: item.path }) : '' }">
                        {{ t(item.name) }}
                    </div>
                </div>
            </div>
            <div class="text">{{ t('copyright') }}</div>
        </div>
    </div>
    <div class="footer-statement">
        <div class="content">
            <div class="content-text" v-html="t('footerContent')"></div>
            <!-- <div class="list">
                <div class="item" @click="downloadFile(0)">Privacy Policy</div>
                <div class="item" @click="downloadFile(1)">Cookies Policy</div>
                <div class="item" @click="downloadFile(2)">Legal Documentation</div>
            </div> -->
            <!-- <div class="text">Copyright © 2026 KOSMARKETS. All Rights Reserved. </div> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app'
const store = useAppStore()
import { useRouter } from 'vue-router'
const router = useRouter()
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import profitImg from '@/assets/img/home/profit-img.jpg';
// import pdfFile1 from '@/assets/pdf/Privacy Policy.pdf'
// import pdfFile2 from '@/assets/pdf/Cookies Policy.pdf'
// const downloadFile = (index: number) => {
//     if (index == 0) {
//         window.open(pdfFile1, "_blank")
//     } else if (index == 1) {
//         window.open(pdfFile2, "_blank")
//     } else {
//         router.push({ name: 'aboutLegalDocumentation' })
//     }
// }
</script>

<style lang="scss" scoped>
.footer-menu {
    width: 100%;
    height: 600px;
    background: linear-gradient(135deg, #1E40AF 0%, #1E3A8A 50%, #172554 100%);
    position: relative;

    @media (max-width: 1200px) {
        height: 200px;
    }

    @media (max-width: 768px) {
        height: 200px;
    }

    .img-box {
        width: 100%;
        height: 100%;
        position: absolute;

        img {
            height: 100%;
            position: absolute;
            right: 0;
            opacity: 0.2;
            --mask-image: linear-gradient(to right, transparent 0%, black 30%, black 90%, transparent 100%);
            mask-image: var(--mask-image);
            -webkit-mask-image: var(--mask-image);
            mask-composite: intersect;
        }
    }
    
    .container-box {
        box-sizing: border-box;
        width: var(--custom-width);
        height: 100%;
        padding: 80px 0;
        color: #FFFFFF;
        display: flex;
        gap: 50px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        
        @media (max-width: 1200px) {
            display: none;
        }
        
        .content {
            display: flex;
            flex-wrap: wrap;
            // width: var(--custom-width);
            flex: 1;
            margin: 0 auto;
            box-sizing: border-box;
    
            padding: 0 80px;
    
            @media (max-width: 1100px) {
                padding: 80px 40px;
            }
    
            .list {
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
                flex: 1;
                padding: 16px 10px 16px 0;
    
                @media (max-width: 1100px) {
                    flex: 0 0 33.3%;
                }
    
                @media (max-width: 768px) {
                    flex: 0 0 100%;
                }
    
                .title {
                    font-size: 14px;
                    font-weight: 900;
                    color: rgba(255, 255, 255, 0.7);
                    padding-bottom: 16px;
                    white-space: nowrap;
                }
    
                .item {
                    font-size: 14px;
                    color: #FFFFFF;
                    margin: 8px 0;
                    cursor: pointer;
    
                    &:hover {
                        color: rgba(255, 255, 255, 0.8);
                    }
                }
            }
        }
    
        .logo {
            // width: var(--custom-width);
            margin: 0 auto;
            padding: 0 80px 60px;
            box-sizing: border-box;
    
            @media (max-width: 1100px) {
                padding: 0 40px 80px;
            }
    
            img {
                width: 224px;
    
                @media (max-width: 768px) {
                    width: 144px;
                }
            }

            .text {
                padding-top: 50px;
                font-size: 12px;
                color: #fff;
            }
        }
    }

    .container-box-lg {
        box-sizing: border-box;
        display: none;
        width: 100%;
        height: 100%;
        padding: 30px 70px;
        flex-direction: column;
        gap: 20px;
        position: absolute;

        @media (max-width: 1200px) {
            display: flex;
        }

        @media (max-width: 1100px) {
            padding: 40px 40px;
        }

        @media (max-width: 768px) {
            padding: 50px 20px;
        }

        img {
            width: 224px;
            margin: 0 auto;

            @media (max-width: 768px) {
                width: 144px;
            }
        }

        .content {
            display: none;
            box-sizing: border-box;
            width: 100%;
            flex-wrap: wrap;
            margin: 0 auto;
            box-sizing: border-box;
            padding: 0 80px;

            @media (max-width: 768px) {
                flex-direction: column;
                gap: 30px;
                padding: 0;
            }
    
            .list {
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
                flex: 1;
                padding: 16px 10px 16px 0;

                @media (max-width: 768px) {
                    flex-direction: row;
                    flex-wrap: wrap;
                    align-items: start;
                    gap: 20px;
                    padding: 0;
                }
    
                .title {
                    font-size: 14px;
                    font-weight: 900;
                    color: rgba(255, 255, 255, 0.7);
                    padding-bottom: 16px;
                    white-space: nowrap;

                    @media (max-width: 768px) {
                        min-width: 100px;
                        padding-bottom: 0;
                    }
                }
    
                .item {
                    font-size: 14px;
                    color: #FFFFFF;
                    margin: 8px 0;
                    cursor: pointer;

                    @media (max-width: 768px) {
                        margin: 0;
                    }
    
                    &:hover {
                        color: rgba(255, 255, 255, 0.8);
                    }
                }
            }
        }

        .text {
            width: 100%;
            font-size: 12px;
            text-align: center;
            padding-top: 10px;
            color: #fff;
        }
    }
}

.footer-statement {
    background: #172554;
    padding: 40px 0;

    @media (max-width: 768px) {
        padding: 0;
    }

    .content {
        width: var(--custom-width);
        margin: 0 auto;
        font-size: 14px;
        line-height: 32px;
        box-sizing: border-box;
        color: rgba(255, 255, 255, 0.7);
        padding: 0 80px 60px;

        @media (max-width: 1100px) {
            padding: 0 40px 60px;
        }

        @media (max-width: 768px) {
            padding: 80px 24px;
        }

        strong, span {
            font-weight: 700;
        }

        :deep(p) {
            line-height: 2;
        }

        .list {
            display: flex;
            font-weight: 700;
            margin-bottom: 10px;
            flex-wrap: wrap;

            .item {
                margin: 0 10px 10px 0;
                cursor: pointer;
            }
        }

        .text {
            font-weight: 800;
        }
    }
}
</style>
