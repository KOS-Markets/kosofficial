<template>
  <div ref="wheelWrapper" class="wheel-wrapper">
    <div class="wheel-pointer" aria-hidden="true">
      <svg
        width="28"
        height="22"
        viewBox="0 0 28 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14 22L0.870836 0.25L27.1292 0.25L14 22Z" fill="#9DE7C6" />
        <path d="M14 22L0.870836 0.25L27.1292 0.25L14 22Z" stroke="#F0E3AD" stroke-width="1" />
      </svg>
    </div>

    <div class="wheel-ring" aria-hidden="true"></div>

    <canvas ref="wheelCanvas" @click="onSpinClick"></canvas>

    <button
      ref="spinButton"
      class="wheel-center-btn"
      type="button"
      :aria-label="t('worldCup2026SpinWheelAriaLabel')"
      :disabled="isSpinDisabled"
      @click="onSpinClick"
    >
      {{ spinButtonLabel }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

import type { WorldCup2026Prize, WorldCup2026PrizeId, WorldCup2026WheelExposed } from '@/types'

const props = defineProps<{
  prizes: WorldCup2026Prize[]
  isLocked?: boolean
}>()

const emit = defineEmits<{
  (event: 'request-spin'): void
  (event: 'spin-complete', prize: WorldCup2026Prize): void
}>()

const { t } = useI18n()

const wheelWrapper = ref<HTMLDivElement | null>(null)
const wheelCanvas = ref<HTMLCanvasElement | null>(null)
const spinButton = ref<HTMLButtonElement | null>(null)

const wheelSegmentColor = '#0E2018'
const wheelAccentColor = '#C9A84C'

const isSpinning = ref(false)
const isResultPending = ref(false)
const isSpinDisabled = computed(() => isSpinning.value || isResultPending.value || !!props.isLocked)
const spinButtonLabel = computed(() =>
  isSpinning.value ? '···' : t('worldCup2026SpinButtonLabel'),
)

let currentAngle = 0
let animationFrameId: number | null = null
let popupTimeoutId: number | null = null
let prizeImages: HTMLImageElement[] = []
let resizeObserver: ResizeObserver | null = null

const wheelSize = computed(() => props.prizes.length)
const wheelArc = computed(() => (wheelSize.value > 0 ? (2 * Math.PI) / wheelSize.value : 0))
const prizeImageKeys = computed(() =>
  props.prizes.map((prize) => `${prize.id}:${prize.img}:${prize.name}`).join('|'),
)

function syncCanvasSize() {
  const wrapper = wheelWrapper.value
  const canvas = wheelCanvas.value

  if (!wrapper || !canvas) {
    return
  }

  const size = wrapper.offsetWidth
  canvas.width = size
  canvas.height = size
}

function redrawWheel() {
  syncCanvasSize()
  drawWheel(currentAngle)
}

function drawWheel(rotation: number) {
  const canvas = wheelCanvas.value
  const context = canvas?.getContext('2d')

  if (!canvas || !context) {
    return
  }

  const width = canvas.width
  const height = canvas.height
  const centerX = width / 2
  const centerY = height / 2
  const radius = width / 2

  context.clearRect(0, 0, width, height)

  if (!wheelSize.value || !wheelArc.value) {
    return
  }

  for (let index = 0; index < wheelSize.value; index += 1) {
    const prize = props.prizes[index]

    if (!prize) {
      continue
    }

    const start = rotation + index * wheelArc.value - Math.PI / 2
    const end = start + wheelArc.value

    context.beginPath()
    context.moveTo(centerX, centerY)
    context.arc(centerX, centerY, radius, start, end)
    context.closePath()

    const gradient = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius)
    gradient.addColorStop(0, '#1A2E20')
    gradient.addColorStop(0.5, wheelSegmentColor)
    gradient.addColorStop(1, '#080F09')
    context.fillStyle = gradient
    context.fill()

    context.strokeStyle = wheelAccentColor
    context.lineWidth = 1.5
    context.stroke()

    const mid = start + wheelArc.value / 2
    const imageRadius = radius * 0.68
    const imageX = centerX + Math.cos(mid) * imageRadius
    const imageY = centerY + Math.sin(mid) * imageRadius
    const imageSize = radius * 0.22

    context.save()
    context.translate(imageX, imageY)
    context.rotate(mid + Math.PI / 2)

    context.beginPath()
    context.arc(0, 0, imageSize * 0.72, 0, Math.PI * 2)
    context.fillStyle = 'rgba(201,168,76,0.12)'
    context.fill()
    context.strokeStyle = 'rgba(201,168,76,0.35)'
    context.lineWidth = 1
    context.stroke()

    const image = prizeImages[index]

    if (image && image.complete && image.naturalWidth > 0) {
      const drawSize = imageSize * 1.1
      context.drawImage(image, -drawSize / 2, -drawSize / 2, drawSize, drawSize)
    } else {
      context.beginPath()
      context.arc(0, 0, imageSize * 0.28, 0, Math.PI * 2)
      context.fillStyle = wheelAccentColor
      context.fill()
    }

    context.restore()
  }

  context.beginPath()
  context.arc(centerX, centerY, radius - 1, 0, Math.PI * 2)
  context.strokeStyle = 'rgba(201,168,76,0.6)'
  context.lineWidth = 2
  context.stroke()

  const hubRadius = radius * 0.17
  const hubGradient = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, hubRadius)
  hubGradient.addColorStop(0, 'rgba(255,255,255,0.15)')
  hubGradient.addColorStop(1, 'rgba(0,0,0,0.4)')

  context.beginPath()
  context.arc(centerX, centerY, hubRadius, 0, Math.PI * 2)
  context.fillStyle = hubGradient
  context.fill()
  context.strokeStyle = 'rgba(201,168,76,0.7)'
  context.lineWidth = 2
  context.stroke()
}

function findPrizeIndexById(prizeId: WorldCup2026PrizeId) {
  return props.prizes.findIndex((prize) => prize.id === prizeId)
}

function spinTo(targetIndex: number, onDone: () => void) {
  if (!wheelArc.value) {
    return
  }

  const minSpins = 5
  const maxSpins = 9
  const fullSpins = Math.floor(minSpins + Math.random() * (maxSpins - minSpins + 1))
  const extraSpins = fullSpins * 2 * Math.PI
  const targetMid = targetIndex * wheelArc.value + wheelArc.value / 2
  const needed = (((-currentAngle - targetMid) % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)
  const total = extraSpins + needed
  const duration = 5000 + Math.random() * 2000
  const start = performance.now()
  const startAngle = currentAngle

  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId)
  }

  function easeOut(value: number) {
    return 1 - Math.pow(1 - value, 4)
  }

  function tick(now: number) {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)
    const eased = easeOut(progress)

    currentAngle = startAngle + total * eased
    drawWheel(currentAngle)

    if (progress < 1) {
      animationFrameId = requestAnimationFrame(tick)
      return
    }

    currentAngle = startAngle + total
    drawWheel(currentAngle)
    animationFrameId = null
    onDone()
  }

  animationFrameId = requestAnimationFrame(tick)
}

function spinToPrizeId(prizeId: WorldCup2026PrizeId) {
  if (isSpinDisabled.value) {
    return false
  }

  const prizeIndex = findPrizeIndexById(prizeId)
  const prize = props.prizes[prizeIndex]

  if (prizeIndex < 0 || !prize) {
    return false
  }

  isSpinning.value = true

  spinTo(prizeIndex, () => {
    isSpinning.value = false
    isResultPending.value = true

    popupTimeoutId = window.setTimeout(() => {
      popupTimeoutId = null
      isResultPending.value = false
      emit('spin-complete', prize)
    }, 400)
  })

  return true
}

function onSpinClick() {
  if (isSpinDisabled.value) {
    return
  }

  emit('request-spin')
}

function scrollToSpin() {
  spinButton.value?.scrollIntoView({ behavior: 'smooth' })
}

defineExpose<WorldCup2026WheelExposed>({
  spinToPrizeId,
  scrollToSpin,
})

function syncPrizeImages() {
  prizeImages = props.prizes.map((prize) => {
    const image = new Image()
    image.src = prize.img
    image.onload = () => drawWheel(currentAngle)
    return image
  })

  redrawWheel()
}

onMounted(() => {
  redrawWheel()

  if (typeof ResizeObserver !== 'undefined') {
    resizeObserver = new ResizeObserver(() => {
      redrawWheel()
    })

    if (wheelWrapper.value) {
      resizeObserver.observe(wheelWrapper.value)
    }

    return
  }

  window.addEventListener('resize', redrawWheel)
})

watch(
  prizeImageKeys,
  () => {
    syncPrizeImages()
  },
  { immediate: true },
)

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
  window.removeEventListener('resize', redrawWheel)

  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId)
  }

  if (popupTimeoutId !== null) {
    window.clearTimeout(popupTimeoutId)
    popupTimeoutId = null
    isResultPending.value = false
  }
})
</script>

<style scoped lang="scss">
.wheel-wrapper {
  position: relative;
  width: clamp(280px, 60vw, 460px);
  height: clamp(280px, 60vw, 460px);
}

.wheel-pointer {
  position: absolute;
  top: -18px;
  left: 50%;
  z-index: 20;
  transform: translateX(-50%);
  filter: drop-shadow(0 0 8px var(--gold));
}

.wheel-pointer svg {
  display: block;
}

.wheel-ring {
  position: absolute;
  inset: -8px;
  z-index: 1;
  border-radius: 50%;
  pointer-events: none;
  box-shadow:
    0 0 30px rgba(201, 168, 76, 0.35),
    inset 0 0 30px rgba(201, 168, 76, 0.08);
}

.wheel-ring::after {
  content: '';
  position: absolute;
  inset: 0;
  padding: 6px;
  border-radius: 50%;
  background: linear-gradient(
    90deg,
    #ccb478 0%,
    #f5e3b6 24%,
    #bafcde 49%,
    #fcd87e 73%,
    #665a3c 100%
  );
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.wheel-ring::before {
  content: '';
  position: absolute;
  inset: 4px;
  border: 1px solid rgba(201, 168, 76, 0.3);
  border-radius: 50%;
}

canvas {
  position: relative;
  z-index: 2;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  cursor: pointer;
  transition: box-shadow 0.3s;
}

canvas:hover {
  box-shadow: 0 0 60px rgba(46, 204, 113, 0.3);
}

.wheel-center-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  border: none;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #3aff88, #67b68b 60%, #0d4025);
  box-shadow:
    0 0 30px rgba(129, 199, 158, 0.6),
    0 0 0 6px rgba(46, 204, 113, 0.1);
  color: #fff;
  font-family: 'Poppins', serif;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transform: translate(-50%, -50%);
  transition: all 0.25s;
}

.wheel-center-btn:hover:not(:disabled) {
  transform: translate(-50%, -50%) scale(1.08);
  box-shadow:
    0 0 50px rgba(46, 204, 113, 0.8),
    0 0 0 10px rgba(46, 204, 113, 0.12);
}

.wheel-center-btn:disabled {
  opacity: 1;
  cursor: not-allowed;
  transform: translate(-50%, -50%);
}

@media (prefers-reduced-motion: reduce) {
  .wheel-wrapper,
  .wheel-wrapper::before,
  .wheel-wrapper::after,
  .wheel-wrapper * {
    animation: none !important;
    transition: none !important;
  }
}
</style>
