<template>
    <div class="custom-language" @click="langModal = true">
        <div class="icon" v-html="langIcon"></div>
        <div class="text">{{ currentLanguage.label }} - {{ currentLanguage.shortLabel }}</div>
    </div>

    <el-dialog v-model="langModal" :title="t('language')" width="min(500px, calc(100% - 48px))">
      <div class="lang-modal">
        <div
          v-for="language in LANGUAGE_CONFIGS"
          :key="language.code"
          class="select-item"
          :class="{ choose: pageSettingsStore.lang === language.code }"
          @click="selectLang(language.code)"
        >
          <span>{{ language.label }}</span>
        </div>
      </div>
    </el-dialog>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import langIcon from '@/assets/img/nav/Language.svg?raw'
import { getLanguageConfig, LANGUAGE_CONFIGS, type AppLang } from '@/language/config'

import { useRouter } from 'vue-router'
const router = useRouter()
import { usePageSettingsStore } from '@/stores/pageSettings'
const pageSettingsStore = usePageSettingsStore()
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const langModal = ref<boolean>(false)
const currentLanguage = computed(() => getLanguageConfig(pageSettingsStore.lang))

const selectLang = async (lang: AppLang) => {
  try {
    await pageSettingsStore.setLang(lang)
    router.push({ name: 'home' }).then(() => {
      router.go(0)
    })
  } catch (err) {
    console.warn(err)
  }

  langModal.value = false
}
</script>

<style lang="scss" scoped>
    .custom-language {
        display: flex;
        align-items: center;
        cursor: pointer;

        .icon {
            display: flex;
            margin-inline-end: 5px;
        }

        .text {
          font-size: 14px;
        }
    }

    .lang-modal {
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;

        .select-item {
            width: 33.3%;
            padding: 15px 20px;
            box-sizing: border-box;
            display: flex;
            cursor: pointer;


            img {
                width: 25px;
                height: 18px;
                margin-inline-end: 10px;
            }
        }

        .choose {
            color: var(--green-color);
        }
    }
</style>
