<template>
  <div ref="rootRef" class="world-cup-2026">
    <WorldCup2026HeroSection>
      <WorldCup2026Wheel
        ref="wheelRef"
        :prizes="prizes"
        :is-locked="isCodePopupVisible || isResultPopupVisible"
        @request-spin="handleSpinRequest"
        @spin-complete="handleSpinComplete"
      />
    </WorldCup2026HeroSection>

    <WorldCup2026PrizesSection :prizes="prizes" />

    <WorldCup2026RulesSection />

    <WorldCup2026CtaSection @claim="scrollToSpin" />

    <WorldCup2026CodePopup
      :model-value="isCodePopupVisible"
      :is-submitting="lotteryCodeLoading"
      @close="closeCodePopup"
      @submit="handleCodeSubmit"
    />

    <WorldCup2026Popup
      :model-value="isResultPopupVisible"
      :prize="resultPrize"
      @close="closeResultPopup"
    />
  </div>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useI18n } from 'vue-i18n'

import WorldCup2026CodePopup from '@/components/promotion/world-cup-2026/WorldCup2026CodePopup.vue'
import WorldCup2026CtaSection from '@/components/promotion/world-cup-2026/WorldCup2026CtaSection.vue'
import WorldCup2026HeroSection from '@/components/promotion/world-cup-2026/WorldCup2026HeroSection.vue'
import WorldCup2026Popup from '@/components/promotion/world-cup-2026/WorldCup2026Popup.vue'
import WorldCup2026PrizesSection from '@/components/promotion/world-cup-2026/WorldCup2026PrizesSection.vue'
import WorldCup2026RulesSection from '@/components/promotion/world-cup-2026/WorldCup2026RulesSection.vue'
import WorldCup2026Wheel from '@/components/promotion/world-cup-2026/WorldCup2026Wheel.vue'
import type {
  WorldCup2026Prize,
  WorldCup2026PrizeId,
  WorldCup2026WheelExposed,
} from '@/types'

import { lotteryPrizeAll, lotteryCodeClaim } from '@/apis/index'
import { editImageUrl } from '@/utils/tools'

const { t } = useI18n()

const prizes = ref<WorldCup2026Prize[]>([])

const rootRef = ref<HTMLElement | null>(null)
const wheelRef = ref<WorldCup2026WheelExposed | null>(null)
const spinTargetId = ref<WorldCup2026PrizeId>(0)
const isCodePopupVisible = ref(false)
const isResultPopupVisible = ref(false)
const resultPrize = ref<WorldCup2026Prize | null>(null)

let revealObserver: IntersectionObserver | null = null

function handleSpinRequest() {
  isCodePopupVisible.value = true
}

function closeCodePopup() {
  isCodePopupVisible.value = false
}

function handleSpinComplete(prize: WorldCup2026Prize) {
  resultPrize.value = prize
  isResultPopupVisible.value = true
}

function closeResultPopup() {
  isResultPopupVisible.value = false
}

function scrollToSpin() {
  wheelRef.value?.scrollToSpin()
}

function setupRevealObserver() {
  const revealElements = Array.from(rootRef.value?.querySelectorAll<HTMLElement>('.reveal') ?? [])

  if (!revealElements.length) {
    return
  }

  if (typeof IntersectionObserver === 'undefined') {
    revealElements.forEach((element) => element.classList.add('visible'))
    return
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          revealObserver?.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12 },
  )

  revealElements.forEach((element) => revealObserver?.observe(element))
}

onMounted(() => {
  setupRevealObserver()
  void getPrizeList()
})

onBeforeUnmount(() => {
  revealObserver?.disconnect()
})


const lotteryCodeLoading = ref(false)

const getPrizeList = async () => {
  const res = await lotteryPrizeAll()

  if (res.code == 200 && res.data) {
    prizes.value = res.data.map((item) => {
      return {
        id: item.id,
        name: item.name,
        img: editImageUrl(item.logo),
      }
    })
  }
}

const handleCodeSubmit = async (code: string) => {
  if (code == '') {
    ElMessage.error(t('worldCup2026CodePopupEmptyError'))
    return
  }

  if (lotteryCodeLoading.value) {
    return
  }

  lotteryCodeLoading.value = true

  try {
    const res = await lotteryCodeClaim({ code })

    if (res.code == 200 && res.data) {
      spinTargetId.value = res.data.id
      isCodePopupVisible.value = false
      await nextTick()
      wheelRef.value?.spinToPrizeId(spinTargetId.value)
    } else {
      ElMessage.error(res.msg)
    }
  } finally {
    lotteryCodeLoading.value = false
  }
}
</script>

<style scoped lang="scss">
:global(html) {
  scroll-behavior: smooth;
}

.world-cup-2026 {
  --gold: #ccb478;
  --gold-light: #ccb478;
  --gold-dim: #8a7c5c;
  --green-glow: #bafcde;
  --green-dark: #2ecc85;
  --bg-dark: #0a0a0a;
  --bg-card: rgba(255, 255, 255, 0.04);
  --bg-card-hover: rgba(255, 255, 255, 0.08);
  --text-primary: #f5f0e8;
  --text-muted: #e9ecf3;
  --border: rgba(201, 168, 76, 0.25);
  --border-strong: rgba(201, 168, 76, 0.55);

  background: var(--bg-dark);
  color: var(--text-primary);
  font-family: 'Poppins', sans-serif;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}
</style>
