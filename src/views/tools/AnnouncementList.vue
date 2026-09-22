<template>
    <div class="announcement-list">
        <AnnouncementCarousel :title="t('announcement')"
            :background="background"/>

        <div class="list" v-loading="loading">
            <AnnouncementItem v-for="item in dataList" :key="item.id" :title="item.title" :time="formatTime(item.created_at)" @click="clickAnnouncement(item)" />
            <el-empty v-if="dataList.length == 0" :description="t('nodata')" />
            <div class="pagination">
                <el-pagination layout="prev, pager, next" :total="total"
                v-model:current-page="page" v-model:page-size="size"
                :page-sizes="[10, 20, 50, 100]" :size="size" @current-change="getData" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { ElMessage } from 'element-plus'

import AnnouncementCarousel from '@/components/tools/AnnouncementCarousel.vue';
import AnnouncementItem from '@/components/tools/AnnouncementItem.vue';

import background from '@/assets/img/tools/announcement/bg.jpg';

import { announcementUserList } from '@/apis/index'
import { formatTime, editImageUrl } from '@/utils/tools'
import type { AnnouncementItemType } from '@/types/index'

import { useRouter } from 'vue-router';
const router = useRouter();
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const dataList = ref<AnnouncementItemType[]>([]);
const loading = ref<boolean>(false)
const page = ref<number>(1);
const size = ref<number>(10);
const total = ref<number>(0);

onBeforeMount(()=>{
    getData()
})

const getData = async () => {
  loading.value = true
  const res = await announcementUserList({ page: page.value, size: size.value })

  if (res.code == 200 && res.data) {
    dataList.value = res.data.list ?? []
    total.value = res.data.total
  } else {
    ElMessage.error(res.msg)
  }
  loading.value = false
}


const clickAnnouncement = (item: AnnouncementItemType) => {
    if (item.type == 1) {
        window.open(editImageUrl(item.content), "_blank")
        return
    }

    router.push({name: 'toolsAnnouncementDetail', query: {id: item.id}})
}


</script>

<style lang="scss" scoped>
.announcement-list {
    .list {
        width: min(992px, 100%);
        margin: 0 auto;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 10px;

        padding: 80px;

        @media (max-width: 1100px) {
            padding: 60px 40px;
        }

        @media (max-width: 768px) {
            padding: 60px 24px;
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
