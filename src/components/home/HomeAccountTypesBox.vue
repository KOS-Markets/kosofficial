<template>
    <section ref="accountSection" class="account-types-section">
        <div class="account-types__content">
            <!-- 左侧 Sticky 文案区 -->
            <aside class="account-types__copy">
                <p class="account-types__brand">KOSMARKETS</p>
                <h2>{{ t('homebox1Sentence') }}</h2>
                <p>{{ t('homeAccountTypesCopy') }}</p>
                <CustomButton
                    :name="t('register')"
                    :type="1"
                    :size="'large'"
                    @toPage="browserRedirection(link_config.register_link)"
                />
            </aside>

            <!-- 右侧卡片列表（视差滚动） -->
            <div class="account-types__cards">
                <article
                    v-for="(item, index) in staticDataStore.accountDataList.list"
                    :key="index"
                    class="account-card"
                    :class="'account-card-' + index"
                >
                    <!-- 3D 资源图 -->
                    <div class="account-card__image">
                        <img :src="accountImages[index]" :alt="item.intro" loading="lazy" />
                    </div>

                    <!-- 卡片内容 -->
                    <div class="account-card__body">
                        <div class="account-card__coin">{{ item.intro }}</div>
                        <div class="account-card__currency">{{ t('homebox1Sentence1') }}: {{ item.text }}</div>

                        <div class="account-card__options">
                            <div
                                class="account-card__option"
                                v-for="(option, idx) in item.option?.slice(0, 3)"
                                :key="idx"
                            >
                                <span class="option-name">{{ option.name }}</span>
                                <span class="option-value" v-html="option.number"></span>
                            </div>
                        </div>

                        <div class="account-card__actions">
                            <CustomButton
                                :name="t('homeAccountTypesOpen')"
                                :type="5"
                                @toPage="browserRedirection(link_config.register_link)"
                            />
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CustomButton from '@/components/custom/CustomButton.vue'
import { browserRedirection } from '@/utils/tools'
import { useI18n } from 'vue-i18n'
import { useStaticDataStore } from '@/stores/staticData'

// 4 张 3D 资源图（按账户顺序：CENT=蓝, STD=红, STP=青, ECN=紫）
import centImg from '@/assets/img/home/accountTypes/cent-blue.jpg'
import stdImg from '@/assets/img/home/accountTypes/std-red.jpg'
import stpImg from '@/assets/img/home/accountTypes/stp-cyan.jpg'
import ecnImg from '@/assets/img/home/accountTypes/ecn-purple.jpg'
import { link_config } from '@/config';

const { t } = useI18n()
const staticDataStore = useStaticDataStore()

gsap.registerPlugin(ScrollTrigger)

const accountImages = [centImg, stdImg, stpImg, ecnImg]

const accountSection = ref<HTMLElement | null>(null)
let parallaxContext: gsap.Context | undefined

onMounted(async () => {
    await nextTick()
    if (!accountSection.value) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // 严格参考 BANGHE HomeSpace：仅对卡片本身做单层小幅视差，不叠加图片层
    parallaxContext = gsap.context(() => {
        const cardEls = gsap.utils.toArray<HTMLElement>('.account-card')

        cardEls.forEach((card, index) => {
            const distance = 34 + index * 16
            gsap.fromTo(
                card,
                { y: -distance },
                {
                    y: distance,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: accountSection.value,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true,
                    },
                },
            )
        })
    }, accountSection.value)
})

onBeforeUnmount(() => {
    parallaxContext?.revert()
})
</script>

<style lang="scss" scoped>
.account-types-section {
    position: relative;
    background-color: var(--bg-color-1);
    /* 严格参考 HomeSpace：不设 overflow，避免破坏内部 sticky / 产生诡异溢出 */
    padding: 0 0 158px;

    @media (max-width: 1200px) {
        padding: 30px 0 158px;
    }

    .account-types__content {
        display: grid;
        grid-template-columns: minmax(280px, 1fr) 540px;
        justify-content: space-between;
        align-items: start;
        width: var(--custom-width);
        margin: 0 auto;
        padding: 0 80px;
        box-sizing: border-box;

        @media (max-width: 1200px) {
            grid-template-columns: 1fr;
            gap: 48px;
            padding: 0 40px;
        }

        @media (max-width: 768px) {
            padding: 0 24px;
        }
    }

    /* ===== 左侧 Sticky 文案区（参数同 HomeSpace：top 226 / margin-top 208） ===== */
    .account-types__copy {
        position: sticky;
        top: 226px;
        margin-top: 208px;

        @media (max-width: 1200px) {
            position: static;
            top: auto;
            margin-top: 0;
            text-align: center;
        }

        .account-types__brand {
            margin: 0;
            color: var(--text-color);
            font-size: 28px;
            font-weight: 700;
            letter-spacing: -0.05em;

            @media (max-width: 768px) {
                font-size: 22px;
            }
        }

        h2 {
            margin: 40px 0 20px;
            color: var(--text-color);
            font-size: 42px;
            line-height: 1.3;
            font-weight: 700;
            white-space: pre-line;

            @media (max-width: 1200px) {
                font-size: 34px;
                margin: 28px 0 16px;
            }

            @media (max-width: 768px) {
                font-size: 24px;
                margin: 20px 0 14px;
            }
        }

        & > p:not(.account-types__brand) {
            max-width: 340px;
            color: var(--gray-color-1);
            font-size: 16px;
            line-height: 1.8;
            font-weight: 400;

            @media (max-width: 1200px) {
                max-width: 560px;
                margin-left: auto;
                margin-right: auto;
            }

            @media (max-width: 768px) {
                font-size: 14px;
            }
        }

        :deep(.custom-button) {
            margin-top: 32px;

            @media (max-width: 768px) {
                margin-top: 24px;
            }
        }

        .account-types__wave {
            display: block;
            margin-top: 48px;

            @media (max-width: 1200px) {
                margin-top: 28px;
            }
        }
    }

    /* ===== 右侧卡片列表 ===== */
    .account-types__cards {
        position: relative;
        padding-top: 0;
    }
}

/* ===== 单个账户卡片（参数同 HomeSpace SpaceCard：top 186 / min-height 493 / margin-bottom 44） ===== */
.account-card {
    scroll-margin-top: 132px;
    position: sticky;
    top: 186px;
    display: flex;
    flex-direction: column;
    min-height: 440px;
    overflow: hidden;
    margin-bottom: 44px;
    padding: 36px 32px;
    border-radius: 20px;
    background: var(--surface-color, #FFFFFF);
    box-shadow: 0 4px 24px rgba(15, 23, 42, 0.06);
    border: 1px solid var(--border-color);
    isolation: isolate;

    @media (max-width: 1200px) {
        top: 100px;
        min-height: 400px;
        margin-bottom: 20px;
        padding: 28px;
    }

    @media (max-width: 768px) {
        top: 84px;
        min-height: auto;
        margin-bottom: 16px;
        padding: 24px;
        border-radius: 16px;
    }

    &.account-card-0 {
        margin-top: 186px;
        border-top: 4px solid var(--primary-color);

        @media (max-width: 1200px) {
            margin-top: 0;
        }
    }

    &.account-card-1 {
        border-top: 4px solid #F97316;
    }

    &.account-card-2 {
        border-top: 4px solid #14B8A6;
    }

    &.account-card-3 {
        border-top: 4px solid #8B5CF6;
    }

    /* 3D 图片区 */
    .account-card__image {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 150px;
        margin-bottom: 18px;

        img {
            width: auto;
            height: 220px;
            object-fit: contain;
            transition: transform 0.4s ease;
        }

        &:hover img {
            transform: scale(1.06) translateY(-4px);
        }

        @media (max-width: 768px) {
            height: 120px;
            margin-bottom: 14px;

            img {
                height: 95px;
            }
        }
    }

    /* 内容区 */
    .account-card__body {
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    .account-card__coin {
        font-size: 26px;
        font-weight: 700;
        text-align: center;
        color: var(--primary-color);

        @media (max-width: 768px) {
            font-size: 22px;
        }
    }

    .account-card__currency {
        margin-bottom: 14px;
        text-align: center;
        color: var(--gray-color-1);
        font-size: 14px;
    }

    .account-card__options {
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin-bottom: 18px;
    }

    .account-card__option {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
        border-bottom: 1px solid var(--border-color);
        color: var(--text-color-1);
        font-size: 14px;

        .option-name {
            color: var(--text-color-1);
        }

        .option-value {
            color: var(--text-color);
            font-weight: 600;
            margin-inline-start: 12px;
        }
    }

    .account-card__actions {
        display: flex;
        justify-content: center;
        margin-top: auto;
        padding-top: 12px;
    }
}
</style>
