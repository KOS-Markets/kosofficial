<template>
    <div class="announcement-detail">
        <AnnouncementCarousel :title="t('announcement')"
            :background="background"/>

        <div class="container" v-loading="loading">
            <div class="article-title">{{ announcement.title }}</div>
            <div class="article-content" v-html="announcement.content"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { ElMessage } from 'element-plus'

import AnnouncementCarousel from '@/components/tools/AnnouncementCarousel.vue';
import background from '@/assets/img/tools/announcement/bg.jpg';

import { announcementUserDetail } from '@/apis/index'
import type { NoticeItem } from '@/types/index'

import { useRoute } from 'vue-router';
const route = useRoute();
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const announcement = ref<NoticeItem>({
    id: 0,
    title: '',
    content: '',
    weight: 0,
    create_time: 0,
    update_time: 0,
    language_name: '',
});
const loading = ref<boolean>(false)

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
