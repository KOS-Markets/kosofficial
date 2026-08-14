<template>
  <el-dialog
    :model-value="modelValue"
    :z-index="4000"
    :show-close="false"
    :close-on-click-modal="true"
    :close-on-press-escape="true"
    align-center
    width="100%"
    class="world-cup-2026-result-dialog"
    @update:model-value="handleDialogVisibilityChange"
  >
    <button
      class="popup-close"
      type="button"
      :aria-label="t('worldCup2026Close')"
      @click="$emit('close')"
    >
      ✕
    </button>

    <div class="popup-confetti">🎉</div>

    <p class="popup-headline">{{ t('worldCup2026PopupHeadline') }}</p>
    <h3 id="world-cup-2026-popup-title" class="popup-prize-name">
      {{ prize?.name ?? t('worldCup2026PopupFallbackPrizeName') }}
    </h3>

    <img v-if="prize" class="popup-prize-img" :src="prize.img" :alt="prize.name" />

    <p class="popup-msg">{{ t('worldCup2026PopupMessage') }}</p>

    <button class="btn-gold popup-btn" type="button" @click="$emit('close')">
      {{ t('worldCup2026Close') }}
    </button>
  </el-dialog>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import type { WorldCup2026Prize } from '@/types'

const props = defineProps<{
  modelValue: boolean
  prize: WorldCup2026Prize | null
}>()

const emit = defineEmits<{
  (event: 'close'): void
}>()

const { t } = useI18n()

function handleDialogVisibilityChange(isVisible: boolean) {
  if (!isVisible && props.modelValue) {
    emit('close')
  }
}
</script>

<style scoped lang="scss">
:global(.world-cup-2026-result-dialog) {
  --popup-gold: #ccb478;
  --popup-gold-light: #e5d19a;
  --popup-gold-dim: #8a7c5c;
  --popup-text-muted: #e9ecf3;

  width: min(440px, calc(100vw - 48px));
  max-width: 440px;
  margin: 0;
  border: 1px solid rgba(204, 180, 120, 0.72);
  border-radius: 20px;
  background: linear-gradient(145deg, rgba(17, 17, 17, 0.98) 0%, rgba(24, 18, 8, 0.98) 100%);
  box-shadow:
    0 18px 45px rgba(0, 0, 0, 0.38),
    0 0 24px rgba(201, 168, 76, 0.12);
  overflow: hidden;
}

:global(.world-cup-2026-result-dialog .el-dialog__header) {
  display: none;
}

:global(.world-cup-2026-result-dialog .el-dialog__body) {
  position: relative;
  padding: 48px 36px 40px;
  text-align: center;
  background: transparent;
}

.popup-close {
  position: absolute;
  top: 14px;
  right: 16px;
  padding: 4px 8px;
  border: none;
  background: none;
  color: var(--popup-text-muted);
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  transition:
    color 0.2s,
    transform 0.2s;
}

.popup-close:hover {
  transform: rotate(90deg);
  color: #fff;
}

.popup-confetti {
  margin-bottom: 8px;
  font-size: 32px;
  animation: bounce 0.6s 0.3s ease both;
}

.popup-headline {
  margin-bottom: 10px;
  color: var(--popup-gold);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.popup-prize-name {
  margin-bottom: 24px;
  color: #fff;
  font-family: 'Poppins', serif;
  font-size: clamp(1.4rem, 4vw, 2rem);
  font-weight: 500;
  line-height: 1.2;
}

.popup-prize-img {
  display: block;
  width: 130px;
  height: 130px;
  margin: 0 auto 24px;
  object-fit: contain;
  filter: drop-shadow(0 8px 24px rgba(201, 168, 76, 0.4));
  animation: float-img 3s ease-in-out infinite;
}

.popup-msg {
  margin-bottom: 30px;
  color: var(--popup-text-muted);
  font-size: 13px;
  line-height: 1.6;
}

.popup-btn {
  width: 100%;
}

.btn-gold {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 40px;
  overflow: hidden;
  border: none;
  border-radius: 999px;
  background: linear-gradient(
    135deg,
    var(--popup-gold-light) 0%,
    var(--popup-gold) 50%,
    var(--popup-gold-dim) 100%
  );
  box-shadow: 0 4px 30px rgba(201, 168, 76, 0.4);
  color: #1a0f00;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-gold::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), transparent);
  opacity: 0;
  transition: opacity 0.3s;
}

.btn-gold:hover {
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 8px 50px rgba(201, 168, 76, 0.6);
}

.btn-gold:hover::before {
  opacity: 1;
}

.btn-gold:active {
  transform: translateY(-1px);
}

@keyframes bounce {
  0% {
    transform: scale(0);
  }

  60% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes float-img {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

@media (max-width: 600px) {
  :global(.world-cup-2026-result-dialog) {
    width: calc(100vw - 32px);
  }

  :global(.world-cup-2026-result-dialog .el-dialog__body) {
    padding: 36px 24px 32px;
  }
}

@media (prefers-reduced-motion: reduce) {
  :global(.world-cup-2026-result-dialog),
  :global(.world-cup-2026-result-dialog *) {
    animation: none !important;
    transition: none !important;
  }
}
</style>
