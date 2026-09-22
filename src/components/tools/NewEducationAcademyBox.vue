<template>
    <div class="education-academy-tab">
        <div class="item" v-for="(item, index) in textList" :key="index" @click="clickTab(index)">
            <div class="left">
                <div class="title">{{ item.title }}</div>
                <div class="text">{{ item.text }}</div>
            </div>
            <div class="right">
                <el-icon><ArrowRight /></el-icon>
            </div>
        </div>
    </div>
    <div class="education-academy-box">
        <div class="education-academy-level">
            <el-select v-model="levelValue" @change="videoPlay = false">
                <el-option
                    v-for="(item, index) in levelOptions"
                    :key="index"
                    :label="item.label"
                    :value="index"
                />
            </el-select>
        </div>

        <div class="education-academy-header">
            <div class="header-left">
                <div class="title">{{ currentCategory?.title }}</div>
                <!-- <div class="intro">{{ educationAcademyList[levelValue].list[firstListValue].intro }}</div> -->
            </div>
            <div class="header-right">
                <el-select v-model="firstListValue" @change="videoPlay = false">
                    <el-option
                        v-for="(item, index) in currentLevel?.list"
                        :key="index"
                        :label="item.title"
                        :value="index"
                    />
                </el-select>
            </div>
        </div>

        <div class="container">
            <div class="list">
                <div class="content">
                    <div class="title">{{ currentLesson?.title }}</div>
                    <div class="intro">{{ currentLesson?.intro }}</div>
                </div>
                <div class="item">
                    <div class="item-cover">
                        <div v-if="videoPlay" class="video" v-html="currentLesson?.content"></div>
                        <img v-else src="@/assets/img/tools/education-academy/bg-2.jpg"
                            alt="">
                    </div>
                    <div class="item-title">{{ currentLesson?.title }}</div>
                    <div class="item-btn">
                        <CustomButton :type="7" :name="t('watchNow')" :right="true" @click="videoPlay = true" />
                    </div>
                </div>
            </div>
            <div class="pagination">
                <el-pagination v-model:current-page="secondListValue" layout="prev, pager, next" :total="currentCategory?.list.length ?? 0" v-model:page-size="size" :size="size" @change="videoPlay = false" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

import CustomButton from '@/components/custom/CustomButton.vue'

import type { CustomBoxItemType } from "@/types/index"

import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { useStaticDataStore } from '@/stores/staticData'
const staticDataStore = useStaticDataStore()
import { usePageSettingsStore } from '@/stores/pageSettings'
const pageSettingsStore = usePageSettingsStore()

const educationAcademyList = computed(()=>{
    const lang = pageSettingsStore.lang as keyof typeof staticDataStore.educationAcademy
    return staticDataStore.educationAcademy[lang] ?? staticDataStore.educationAcademy.en
})

const currentLevel = computed(() => {
    return educationAcademyList.value[levelValue.value] ?? educationAcademyList.value[0]
})

const currentCategory = computed(() => {
    return currentLevel.value?.list[firstListValue.value] ?? currentLevel.value?.list[0]
})

const currentLesson = computed(() => {
    return currentCategory.value?.list[secondListValue.value - 1] ?? currentCategory.value?.list[0]
})


const textList = ref<CustomBoxItemType[]>([
    {
        title: t('newEducationAcademyBoxSentence'),
        text: t('newEducationAcademyBoxSentence1'),
    },
    {
        title: t('newEducationAcademyBoxSentence2'),
        text: t('newEducationAcademyBoxSentence3'),
    },
    {
        title: t('newEducationAcademyBoxSentence4'),
        text: t('newEducationAcademyBoxSentence5'),
    },
])

const levelValue = ref<number>(0)
const levelOptions = computed(() => [
    {
        label: t('newEducationAcademyBoxSentence'),
        value: '',
    },
    {
        label: t('newEducationAcademyBoxSentence2'),
        value: '',
    },
    {
        label: t('newEducationAcademyBoxSentence4'),
        value: '',
    }
])

const firstListValue = ref<number>(0)
const secondListValue = ref<number>(1)

const size = ref<number>(1)

const videoPlay = ref<boolean>(false)


const clickTab = (index: number) => {
    levelValue.value = index;
    window.scrollBy(0, 500)
}
</script>

<style lang="scss" scoped>
.education-academy-tab {
    width: var(--custom-width);
    margin: 0 auto;
    padding: 120px 80px;

    display: flex;
    justify-content: center;
    gap: 32px;
    box-sizing: border-box;

    @media (max-width: 1100px) {
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 768px) {
        padding: 80px 24px;
    }

    .item {
        width: min(334px, 100%);
        display: flex;
        background-color: var(--tab-bg-color-1);
        border: 1px solid var(--tab-border-color-1);
        padding: 24px;
        border-radius: 8px;
        box-sizing: border-box;
        cursor: pointer;

        .left {
            .title {
                font-size: 24px;
                line-height: 44px;
            }

            .text {
                font-size: 18px;
                line-height: 30px;
                color: var(--gray-color-3);
            }
        }

        .right {
            padding-left: 10px;
            display: flex;
            flex-direction: column;
            justify-content: end;
        }
    }
}

.education-academy-box {
    width: var(--custom-width);
    margin: 0 auto;
    padding: 100px 80px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media (max-width: 1100px) {
        padding: 60px 60px;
    }

    @media (max-width: 768px) {
        padding: 40px 24px;
    }

    .education-academy-level {
        display: flex;
        justify-content: end;

        :deep(.el-select) {
            width: 250px;
        }

        :deep(.el-select__wrapper) {
            background-color: var(--tab-bg-color-1);
            box-shadow: 0 0 0 0;
            border-radius: 8px;
            border: 1px solid var(--tab-border-color-1);
            color: var(--gray-color-3);
            padding: 16px 24px;
        }

    }

    .education-academy-header {
        display: flex;
        justify-content: space-between;
        align-items: start;
        gap: 32px;

        @media (max-width: 1100px) {
            flex-direction: column;
        }

        .header-left {
            width: min(450px, 100%);

            .title {
                font-size: 28px;
                color: var(--primary-color);

                @media (max-width: 768px) {
                    font-size: 24px;
                }
            }

            .intro {
                margin: 10px 0;
                font-size: 16px;
                color: var(--primary-color);

                @media (max-width: 768px) {
                    font-size: 14px;
                }
            }
        }

        .header-right {
            display: flex;
            flex-wrap: wrap;
            align-items: start;
            flex: 1;
            margin: 0 -3px;

            @media (max-width: 1100px) {
                width: 100%;
            }

            :deep(.el-select__wrapper) {
                background-color: var(--tab-bg-color-2);
                box-shadow: 0 0 0 0;
                border: 1px solid var(--primary-color);
                border-radius: 100px;
                color: var(--gray-color-3);
                padding: 16px 24px;
            }

        }

    }

    .container {
        .list {
            display: flex;
            gap: 32px;

            @media (max-width: 1100px) {
                flex-direction: column;
            }

            .content {
                width: min(450px, 100%);
                display: flex;
                flex-direction: column;
                gap: 32px;

                @media (max-width: 1100px) {
                    width: 100%;
                }

                .title {
                    font-size: 24px;
                    font-weight: 500;
                }

                .intro {
                    font-size: 16px;
                    font-weight: 500;
                }
                
                
            }

            .item {
                // width: calc(33.3% - 20px);
                flex: 1;
                padding: 8px 8px 15px;
                background-color: var(--bg-color-1);
                border-radius: 8px;
                box-sizing: border-box;

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
