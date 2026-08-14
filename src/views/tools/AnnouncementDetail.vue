<template>
    <div class="announcement-detail">
        <AnnouncementCarousel :title="t('announcement')"
            :background="background"/>

        <div class="container" v-loading="loading">
            <template v-if="announcement.type === 0">
                <div class="article-title">{{ announcement.title }}</div>
                <div class="article-content" v-html="announcement.content"></div>
            </template>

            <template v-else-if="announcement.type === 2 && tradingHoursContent">
                <div class="article-title">{{ announcement.title }}</div>
                <AnnouncementTradingHoursCard
                    :title="displayTitle"
                    :content="tradingHoursContent"
                />
            </template>

            <template v-else-if="announcement.type === 3 && dividendContent">
                <div class="article-title">{{ announcement.title }}</div>
                <AnnouncementDividendCard
                    :title="displayTitle"
                    :content="dividendContent"
                />
            </template>

            <div class="btn" v-if="announcement.type === 0">
                <CustomButton :name="t('announcementDetailBtnText')" :type="0" @toPage="browserRedirection('https://hamovest.com/company/contact-us')" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { ElMessage } from 'element-plus'

import AnnouncementCarousel from '@/components/tools/AnnouncementCarousel.vue';
import AnnouncementDividendCard from '@/components/tools/AnnouncementDividendCard.vue';
import AnnouncementTradingHoursCard from '@/components/tools/AnnouncementTradingHoursCard.vue';
import CustomButton from '@/components/custom/CustomButton.vue';

import background from '@/assets/img/tools/announcement/carousel-bg.png';

import { announcementUserDetail } from '@/apis/index'
import { browserRedirection } from '@/utils/tools'
import {
    getAnnouncementDisplayTitle,
    parseStructuredAnnouncementContent,
} from '@/utils/announcementContent'
import type { AnnouncementItemType, DividendAdjustmentContent, TradingHoursContent } from '@/types/index'

import { useRoute } from 'vue-router';
const route = useRoute();
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const announcement = ref<AnnouncementItemType>({
    id: '',
    title: '',
    content: '',
    lang: '',
    created_at: '',
    updated_at: '',
    remark: '',
    weight: 0,
    type: 0,
    deleted: 0
});
const loading = ref<boolean>(false)

const structuredContent = computed(() => parseStructuredAnnouncementContent(announcement.value))
const tradingHoursContent = computed(() => (
    structuredContent.value?.kind === 'tradingHours'
        ? structuredContent.value as TradingHoursContent
        : null
))
const dividendContent = computed(() => (
    structuredContent.value?.kind === 'dividendAdjustment'
        ? structuredContent.value as DividendAdjustmentContent
        : null
))
const displayTitle = computed(() => getAnnouncementDisplayTitle(announcement.value, structuredContent.value))

const getData = async (id: string) => {
    if (!id) return

    loading.value = true
    const res = await announcementUserDetail({ id })

    if (res.code == 200 && res.data) {
        announcement.value = res.data
    } else {
        ElMessage.error(res.msg)
    }
    loading.value = false
}

watch(
    () => route.query.id,
    (id) => {
        getData(String(id || ''))
    },
    { immediate: true }
)
</script>

<style lang="scss" scoped>
.announcement-detail {
    .container {
        width: min(1200px, 100%);
        margin: 0 auto;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 32px;
        padding: 80px;

        @media (max-width: 1100px) {
            padding: 60px 40px;
        }

        @media (max-width: 768px) {
            padding: 60px 24px;
        }
    }

    .article-title {
        font-size: 24px;
        font-weight: 500;
        line-height: 1.3;
        text-align: center;
    }

    .article-content {
        color: var(--text-color-1, inherit);
    }


    .btn {
        display: flex;
        justify-content: center;
    }
}
</style>
