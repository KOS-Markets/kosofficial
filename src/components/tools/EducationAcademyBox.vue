<template>
    <div class="education-academy-box">
        <div class="education-academy-header">
            <div class="header-left">
                <div class="title">{{ t('educationAcademyBox1Sentence') }}</div>
                <div class="intro">{{ t('educationAcademyBox1Sentence1') }}</div>
            </div>
            <div class="header-right">
                <div class="item">Trading Basics</div>
                <div class="item">Trading Basics</div>
                <div class="item">Trading Basics</div>
                <div class="item">Trading Basics</div>
                <div class="item">Trading Basics</div>
                <div class="item">Trading Basics</div>
                <div class="item">Trading Basics</div>
                <div class="item">Trading Basics</div>
                <div class="item">Trading Basics</div>
                <div class="item">Trading Basics</div>
            </div>
        </div>

        <div class="container">
            <div class="list">
                <div class="item">
                    <div class="item-cover">
                        <img src="@/assets/img/tools/education-academy/814abe994258b1e6c760d361c34468d058ac773e.jpg"
                            alt="">
                    </div>
                    <div class="item-title">Trading Basics - How to start trading</div>
                    <div class="item-btn">
                        <CustomButton :type="7" :name="'Watch Now'" :right="true" />
                    </div>
                </div>
                <div class="item">
                    <div class="item-cover">
                        <img src="@/assets/img/tools/education-academy/814abe994258b1e6c760d361c34468d058ac773e.jpg"
                            alt="">
                    </div>
                    <div class="item-title">Trading Basics - How to start trading</div>
                    <div class="item-btn">
                        <CustomButton :type="7" :name="'Watch Now'" :right="true" />
                    </div>
                </div>
                <div class="item">
                    <div class="item-cover">
                        <img src="@/assets/img/tools/education-academy/814abe994258b1e6c760d361c34468d058ac773e.jpg"
                            alt="">
                    </div>
                    <div class="item-title">Trading Basics - How to start trading</div>
                    <div class="item-btn">
                        <CustomButton :type="7" :name="'Watch Now'" :right="true" />
                    </div>
                </div>
            </div>
            <div class="pagination">
                <el-pagination layout="prev, pager, next" :total="50" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import CustomButton from '@/components/custom/CustomButton.vue'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style lang="scss" scoped>
.education-academy-box {
    width: var(--custom-width);
    margin: 0 auto;
    padding: 100px 0;

    @media (max-width: 1100px) {
        padding: 60px 0;
    }

    @media (max-width: 768px) {
        padding: 30px 0;
    }

    .education-academy-header {
        display: flex;
        justify-content: space-between;
        align-items: start;
        padding-bottom: 10px;

        @media (max-width: 1100px) {
            flex-direction: column;
        }

        .header-left {
            .title {
                font-size: 36px;

                @media (max-width: 768px) {
                    font-size: 24px;
                }
            }

            .intro {
                margin: 10px 0;
                font-size: 24px;
                color: var(--gray-color-1);
                margin-bottom: 30px;

                @media (max-width: 768px) {
                    font-size: 18px;
                    margin-bottom: 30px;
                }
            }
        }

        .header-right {
            display: flex;
            flex-wrap: wrap;
            align-items: start;
            width: 50%;
            margin: 0 -3px;

            @media (max-width: 1100px) {
                width: 100%;
            }

            .item {
                background-color: var(--bg-color-1);
                padding: 8px 12px;
                margin: 3px;
                width: calc(20% - 6px);
                box-sizing: border-box;
                border-radius: 3px;

                @media (max-width: 1100px) {
                    width: calc(25% - 6px);
                }

                @media (max-width: 768px) {
                    width: calc(50% - 6px);
                }



            }
        }

    }

    .container {
        .list {
            display: flex;

            @media (max-width: 768px) {
                flex-direction: column;
            }

            .item {
                width: calc(33.3% - 20px);
                padding: 8px 8px 15px;
                background-color: var(--bg-color-1);
                border-radius: 8px;
                box-sizing: border-box;
                margin: 10px;

                @media (max-width: 768px) {
                    width: calc(100% - 20px);
                }

                .item-cover {
                    border-radius: 8px;
                    overflow: hidden;

                    img {
                        width: 100%;
                    }
                }

                .item-title {
                    font-weight: 500;
                    padding: 16px 16px 16px 6px;
                }
            }
        }

        .pagination {
            margin-top: 30px;
            display: flex;
            justify-content: center;

            :deep(.el-pagination button) {
                color: var(--primary-color);
                font-weight: 700;
            }

            :deep(.el-pagination .el-pager .number) {
                background-color: var(--bg-color-1);
                margin: 0 3px;
            }

            :deep(.el-pagination .el-pager .is-active) {
                background-color: var(--menu-color);
                color: var(--text-color);
            }

            :deep(.el-pagination button .el-icon) {
                font-size: 16px;
            }


        }
    }
}
</style>
