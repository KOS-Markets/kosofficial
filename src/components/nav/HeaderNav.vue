<template>
    <div class="header-view" :class="`is-${mode}`" ref="header">
        <div class="header-content">
            <div class="header-left">
                <img src="/long-logo-2.png" alt="" @click="router.push({ name: 'home' })">
                <div class="pc">
                    <div class="item" v-for="(item, index) in store.menuList" :key="index"
                        @click="item.children.length == 0 ? router.push({ name: item.path }) : ''">
                        {{ t(item.name) }}

                        <!-- 子菜单 -->
                        <div class="sub-list" v-if="item.children && item.children.length > 0">
                            <div class="sub-content">
                                <div class="sub-item" v-for="(item1, index1) in item.children" :key="index1"
                                    @click="() => { item1.path ? router.push({ name: item1.path }) : '' }">
                                    <div class="sub-item-left">
                                        <el-icon v-if="item1.icon">
                                            <component :is="item1.icon" />
                                        </el-icon>
                                    </div>
                                    <div class="sub-item-right">
                                        <div class="name">{{ t(item1.name) }}</div>
                                        <div class="sub-title">{{ t(item1.subTitle) }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-right">
                <div class="pc">
                    <CustomButton :name="t('login')" :type="2" @toPage="browserRedirection(link_config.login_link)"
                        style="margin-inline-end: 18px;" />
                    <CustomButton :name="t('register')" :type="1" @toPage="browserRedirection(link_config.register_link)"
                        style="margin-inline-end: 18px;" />
                    <!-- <CustomLanguage /> -->
                    <div class="more-language-btn">
                        <div class="icon" :style="`--icon: url(${ langIcon })`"></div>
                        <div class="text">
                            <div class="name">{{ currentLanguage.label }}</div>
                            <div>-</div>
                            <div class="code">{{ currentLanguage.shortLabel }}</div>
                        </div>
                        <div class="sub-list">
                            <div class="text" :class="{ choose: pageSettingsStore.lang === language.code }" v-for="language in LANGUAGE_CONFIGS" :key="language.code" @click="selectLang(language.code)">
                                <!-- <div class="name">{{ v.name }}</div>
                                <div class="code">{{ k }}</div> -->
                                <div class="name">{{ language.label }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="menu" @click.stop="toggleDrawer">
                    <motion.nav initial="closed" :animate="sideDrawer ? 'open' : 'closed'" ref="containerRef" class="nav"
                        style="pointer-events: none;">
                        <svg width="30" height="30" viewBox="0 0 23 18">
                            <motion.path fill="transparent" stroke-width="1" stroke="var(--text-color)" stroke-linecap="round"
                                :variants="{
                                    closed: { d: 'M 2 4 L 20 4' },
                                    open: { d: 'M 3 16.5 L 20 2.5' },
                                }" />
                            <motion.path fill="transparent" stroke-width="1" stroke="var(--text-color)" stroke-linecap="round"
                                :variants="{
                                    closed: { d: 'M 5 9.423 L 30 9.423', opacity: 1 },
                                    open: { d: 'M 0 9.423 L 0 9.423', opacity: 0 },
                                }" :transition="{ duration: 0.1 }" />
                            <motion.path fill="transparent" stroke-width="1" stroke="var(--text-color)" stroke-linecap="round"
                                :variants="{
                                    closed: { d: 'M 2 15 L 20 15' },
                                    open: { d: 'M 3 2.5 L 20 16.346' },
                                }" />
                        </svg>
                    </motion.nav>
                </div>
            </div>
        </div>
        <!-- mobile menu -->
        <div v-if="sideDrawer" class="mobile-menu">
            <div class="mobile-menu-item" v-for="(item, index) in store.menuList" :key="index"
                @click="toggleMobileMenu(index)">
                <div class="content">
                    {{ t(item.name) }}
                    <el-icon v-if="item.children.length > 0" :style="{
                        transition: `transform ${ease}`,
                        transform: item.childrenShow ? 'rotate(180deg)' : '',
                    }">
                        <ArrowDown />
                    </el-icon>
                </div>
                <motion.div class="sub-list" :animate="item.childrenShow ? 'visible' : 'hidden'" initial="hidden" :variants="heightListAnimateVariants">
                    <div class="sub-item" v-for="(item1, index1) in item.children" :key="index1"
                        @click="router.push({ name: item1.path });sideDrawer = false;">{{ t(item1.name) }}</div>
                </motion.div>
            </div>
            <div class="btn">
                <div style="width: 100%;display: flex;justify-content: center;margin-bottom: 10px;"><CustomLanguage /></div>
                <CustomButton :name="t('login')" :type="2" @toPage="browserRedirection(link_config.login_link)"
                    style="margin-inline-end: 10px;" />
                <CustomButton :name="t('register')" :type="1" @toPage="browserRedirection(link_config.register_link)" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { motion, spring } from 'motion-v'
import { link_config } from '@/config';

const ease = spring(0.4, 0.7)

import CustomButton from '@/components/custom/CustomButton.vue'
import CustomLanguage from '@/components/custom/CustomLanguage.vue'

import { browserRedirection } from '@/utils/tools'

import { useAppStore } from '@/stores/app'
const store = useAppStore()
import { useRouter } from 'vue-router'
const router = useRouter()
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import langIcon from '@/assets/img/nav/Language.svg?raw'
import { getLanguageConfig, LANGUAGE_CONFIGS, type AppLang } from '@/language/config'
import { usePageSettingsStore } from '@/stores/pageSettings'
const pageSettingsStore = usePageSettingsStore()
const currentLanguage = computed(() => getLanguageConfig(pageSettingsStore.lang))

const props = withDefaults(
    defineProps<{ mode?: 'fixed' | 'sticky' }>(),
    { mode: 'sticky' }
)

const header = ref<HTMLElement | null>(null)
const sideDrawer = ref<boolean>(false)

const heightListAnimateVariants = {
    visible: () => ({
        height: 'auto',
        opacity: 1,
        paddingTop: 10,
        paddingBottom: 10,
        transition: { duration: 0.3 }
    }),
    hidden: { height: 0, opacity: 0 }
}

const debouncedResize = () => {
    sideDrawer.value = false
}

const dataScroll = () => {
    if (!header.value) return
    const scroll = document.documentElement.scrollTop || document.body.scrollTop
    const progress = Math.min(scroll * 0.005, 1)
    header.value.style.setProperty('--_progress', String(progress))
}

const toggleDrawer = () => {
    sideDrawer.value = !sideDrawer.value
}

const toggleMobileMenu = (index: number) => {
    const item = store.menuList[index]
    if (!item) return

    if (item.children?.length > 0) {
        item.childrenShow = !item.childrenShow
    } else {
        sideDrawer.value = false
        router.push({ name: item.path || item.name })
    }
}

const selectLang = async (lang: AppLang) => {
  try {
    await pageSettingsStore.setLang(lang)
    router.push({ name: 'home' }).then(() => {
      router.go(0)
    })
  } catch (err) {
    console.warn(err)
  }
}

onMounted(() => {
    window.addEventListener('resize', debouncedResize)
    if (props.mode === 'fixed') {
        window.addEventListener('scroll', dataScroll)
        dataScroll()
    }
})

onUnmounted(() => {
    window.removeEventListener('resize', debouncedResize)
    if (props.mode === 'fixed') {
        window.removeEventListener('scroll', dataScroll)
    }
})
</script>

<style lang="scss" scoped>
.header-view {
    --_progress: 0;
    top: 0;
    z-index: 3000;
    width: 100%;

    &.is-sticky {
        position: sticky;
        background-color: var(--bg-color);
    }

    &.is-fixed {
        position: fixed;
        margin: 0 -20px;
        background-color: color-mix(in srgb, rgb(var(--header-overlay-rgb)), transparent calc((1 - var(--_progress)) * 100%));
        box-shadow: 0 1px 0 0 rgba(226, 232, 240, var(--_progress));
    }
}

.header-content {
    display: flex;
    justify-content: space-between;
    padding: 20px 80px;
    width: var(--custom-width);
    margin: 0 auto;
    position: relative;
    box-sizing: border-box;

    @media (max-width: 1100px) {
        padding: 20px 40px;
    }

    @media (max-width: 768px) {
        padding: 20px 24px;
    }

    .pc {
        display: flex;
        align-items: center;

        @media (max-width: 1100px) {
            display: none;
        }

        .more-language-btn {
            user-select: none;
            display: flex;
            align-items: center;
            gap: 12px;
            position: relative;
            padding: 12px !important;

            &:hover .sub-list {
                height: 500px;
            }

            .icon {
                --size: 24px;
                --w: var(--size);
                --h: var(--size);
            }

            .text {
                display: flex;
                justify-content: flex-start;
                gap: 5px;

                &>div {
                    font-size: 14px;
                }
            }

            .sub-list {
                width: 150px;
                height: 0;
                position: absolute;
                top: 100%;
                left: 0;
                overflow: hidden;
                color: #fff;
                transition: .3s;

                .text {
                    box-sizing: border-box;
                    padding: 0 40px;
                    background-color: #00000080;
                    text-wrap: nowrap;
                    word-wrap: normal;

                    &>div {
                        line-height: 40px;
                    }

                    &.active, &:hover {
                        // font-weight: 500;
                        // color: var(--text-100);
                        background-color: var(--button-bg-color-1);
                    }
                }
            }
        }
    }

    .header-left {
        display: flex;
        align-items: center;
        height: 72px;
        padding-inline-end: 20px;

        @media (max-width: 1100px) {
            height: auto;
        }

        img {
            width: 150px;
            height: auto;
            cursor: pointer;
            margin-inline-end: 40px;

            @media (max-width: 768px) {
                width: 132px;
            }
        }

        .item {
            padding: 8.5px 18px;
            display: flex;
            align-items: center;
            font-size: 16px;
            cursor: pointer;
            border-radius: 6px;
            position: relative;
            white-space: nowrap;
            color: var(--text-color-1);
            font-weight: 500;

            &:hover .sub-list {
                display: flex;
            }

            .sub-list {
                display: none;
                position: absolute;
                left: 0;
                top: 100%;
                flex-direction: column;
                padding-top: 10px;

                .sub-content {
                    background: var(--menu-color-1);
                    box-shadow: 0 8px 30px rgba(15, 23, 42, 0.12);
                    border: 1px solid var(--border-color);

                    // opacity: 1;
                    padding: 14px;
                    border-radius: 8px;
                }

                .sub-item {
                    display: flex;
                    padding: 8px;
                    border-radius: 4px;
                    font-size: 14px;

                    .sub-item-left {
                        margin: 2px 8px 0 0;
                        font-size: 16px;
                        color: var(--primary-color);
                    }

                    .sub-item-right {
                        .name {
                            font-weight: 700;
                            white-space: nowrap;
                            color: var(--text-color);
                        }

                        .sub-title {
                            margin-top: 5px;
                            color: var(--gray-color-1);
                            white-space: nowrap;
                        }
                    }

                    &:hover {
                        background-color: var(--menu-color);
                    }
                }
            }
        }

        .item:hover {
            background-color: var(--menu-color);
            color: var(--primary-color);
        }
    }

    .header-right {
        display: flex;
        align-items: center;

        .menu {
            display: none;
            align-items: center;
            position: relative;
            z-index: 10001;
            margin-inline-start: 20px;
            cursor: pointer;

            svg path {
                stroke: var(--text-color);
            }

            @media (max-width: 1100px) {
                display: flex;
            }

            .nav {
                display: flex;
                align-items: center;
            }
        }
    }
}

.mobile-menu {
    background-color: var(--bg-color);
    border-top: 1px solid var(--border-color);

    .mobile-menu-item {
        border-bottom: 1px solid var(--border-color);

        .content {
            padding: 12px 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 16px;
            font-weight: 600;
            color: var(--text-color);
        }

        .sub-list {
            background-color: var(--menu-color);
            padding: 0 24px;
            font-size: 14px;
            overflow: hidden;

            .sub-item {
                padding: 8px 0;
                cursor: pointer;
                color: var(--text-color-1);
            }

            .sub-item:hover {
                color: var(--primary-color);
            }
        }
    }

    .btn {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        padding: 15px 24px;
    }
}
</style>
