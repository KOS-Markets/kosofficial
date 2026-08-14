<template>
    <div class="location-modal">
        <el-dialog v-model="pageSettingsStore.locationModal" title="" :width="'min(500px, calc(100% - 20px))'" :show-close="false"
            z-index="9999">
            <div class="location-modal-content">
                <div style="margin: 0 0 20px;">
                    <p>We have detected that you are visiting from Europe.</p>
                    <p>To comply with regulatory requirements, you will be redirected to kosmarkets.com, which is operated
                        by Kosmarkets (CYPRUS) LTD, authorized and regulated by the Cyprus Securities and
                        Exchange Commission (CYSEC) under license number 411/22.</p>
                    <p>You will be automatically redirected in 5 seconds.</p>
                </div>
                <!-- <el-button type="primary" style="width: 100%;font-size: 18px;height: 45px;" @click="goToLink">Visit {{ link }}</el-button> -->
            </div>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { usePageSettingsStore } from '@/stores/pageSettings'
const pageSettingsStore = usePageSettingsStore()

const link = ref<string>(import.meta.env.VITE_ATWEB)

const goToLink = () => {
    window.open("https://" + import.meta.env.VITE_ATWEB + "/", '_self')
}
</script>

<style lang="scss" scoped>
.location-modal {
    :deep(.el-button) {
        background-color: var(--green-color);
        border-color: var(--green-color);
    }

    :deep(.el-button:hover) {
        background-color: var(--primary-color-1);
        border-color: var(--primary-color-1);
    }

    :deep(.el-dialog) {
        border-radius: 15px !important;
    }

    .location-modal-content {
        padding: 0 10px 10px;

        p {
            margin: 0 0 10px;
        }
    }
}
</style>
