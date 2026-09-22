<template>
  <el-dialog
    :model-value="modelValue"
    :z-index="4000"
    :show-close="false"
    :close-on-click-modal="true"
    :close-on-press-escape="true"
    align-center
    width="100%"
    class="world-cup-2026-code-dialog"
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

    <p class="popup-headline">{{ t('worldCup2026CodePopupHeadline') }}</p>
    <h3 id="world-cup-2026-code-popup-title" class="popup-title">
      {{ t('worldCup2026CodePopupTitle') }}
    </h3>

    <p class="popup-msg">{{ t('worldCup2026CodePopupMessage') }}</p>

    <form class="popup-form" @submit.prevent="handleSubmit">
      <el-input
        ref="inputRef"
        v-model.trim="codeValue"
        class="popup-input"
        type="text"
        name="lotteryCode"
        autocomplete="off"
        :disabled="isSubmitting"
        :placeholder="t('worldCup2026CodePopupPlaceholder')"
      />

      <p v-if="errorMessage" class="popup-error">{{ errorMessage }}</p>

      <el-button class="btn-gold popup-btn" native-type="submit" :loading="isSubmitting">
        {{ t('worldCup2026CodePopupSubmit') }}
      </el-button>
    </form>
  </el-dialog>
</template>

<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import type { InputInstance } from 'element-plus'
import { useI18n } from 'vue-i18n'

const props = defineProps<{
  modelValue: boolean
  isSubmitting?: boolean
}>()

const emit = defineEmits<{
  (event: 'close'): void
  (event: 'submit', code: string): void
}>()

const { t } = useI18n()

const inputRef = ref<InputInstance | null>(null)
const codeValue = ref('')
const errorMessage = ref('')

function resetForm() {
  codeValue.value = ''
  errorMessage.value = ''
}

function focusInput() {
  nextTick(() => {
    inputRef.value?.focus()
  })
}

function handleSubmit() {
  if (props.isSubmitting) {
    return
  }

  if (!codeValue.value) {
    errorMessage.value = t('worldCup2026CodePopupEmptyError')
    focusInput()
    return
  }

  errorMessage.value = ''
  emit('submit', codeValue.value)
}

function handleDialogVisibilityChange(isVisible: boolean) {
  if (!isVisible && props.modelValue) {
    emit('close')
  }
}

watch(codeValue, () => {
  if (errorMessage.value) {
    errorMessage.value = ''
  }
})

watch(
  () => props.modelValue,
  (isVisible) => {
    if (isVisible) {
      focusInput()
      return
    }

    resetForm()
  },
  { immediate: true },
)
</script>

<style scoped lang="scss">
:global(.world-cup-2026-code-dialog) {
  --popup-gold: #ccb478;
  --popup-gold-light: #e5d19a;
  --popup-gold-dim: #8a7c5c;
  --popup-text-muted: #e9ecf3;
  --popup-border: rgba(204, 180, 120, 0.72);

  width: min(440px, calc(100vw - 48px));
  max-width: 440px;
  margin: 0;
  border: 1px solid var(--popup-border);
  border-radius: 20px;
  background: linear-gradient(145deg, rgba(17, 17, 17, 0.98) 0%, rgba(24, 18, 8, 0.98) 100%);
  box-shadow:
    0 18px 45px rgba(0, 0, 0, 0.38),
    0 0 24px rgba(201, 168, 76, 0.12);
  overflow: hidden;
}

:global(.world-cup-2026-code-dialog .el-dialog__header) {
  display: none;
}

:global(.world-cup-2026-code-dialog .el-dialog__body) {
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

.popup-headline {
  margin-bottom: 10px;
  color: var(--popup-gold);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.popup-title {
  margin-bottom: 16px;
  color: #fff;
  font-family: 'Poppins', serif;
  font-size: clamp(1.4rem, 4vw, 2rem);
  font-weight: 500;
  line-height: 1.2;
}

.popup-msg {
  margin-bottom: 24px;
  color: var(--popup-text-muted);
  font-size: 13px;
  line-height: 1.6;
}

.popup-form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.popup-input {
  :deep(.el-input__wrapper) {
    padding: 0 18px;
    min-height: 50px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: inset 0 0 0 1px rgba(204, 180, 120, 0.32);
    transition:
      box-shadow 0.2s,
      background 0.2s;
  }

  :deep(.el-input__inner) {
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
  }

  :deep(.el-input__inner::placeholder) {
    color: rgba(233, 236, 243, 0.56);
  }

  :deep(.el-input__wrapper.is-focus) {
    background: rgba(255, 255, 255, 0.08);
    box-shadow:
      inset 0 0 0 1px rgba(229, 209, 154, 0.72),
      0 0 0 4px rgba(204, 180, 120, 0.12);
  }
}

.popup-btn.el-button {
  width: 100%;
  height: 52px;
  margin: 0;
}

.popup-error {
  color: #ffb8a8;
  font-size: 12px;
  line-height: 1.5;
  text-align: left;
  padding: 0 10px;
}

.btn-gold.el-button {
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

.btn-gold.el-button::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), transparent);
  opacity: 0;
  transition: opacity 0.3s;
}

.btn-gold.el-button :deep(span) {
  color: #1a0f00;
  font-weight: 700;
  letter-spacing: 0.06em;
}

.btn-gold.el-button:hover {
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 8px 50px rgba(201, 168, 76, 0.6);
  background: linear-gradient(
    135deg,
    var(--popup-gold-light) 0%,
    var(--popup-gold) 50%,
    var(--popup-gold-dim) 100%
  );
  border-color: transparent;
  color: #1a0f00;
}

.btn-gold.el-button:hover::before {
  opacity: 1;
}

.btn-gold.el-button:active {
  transform: translateY(-1px);
}

@media (max-width: 600px) {
  :global(.world-cup-2026-code-dialog) {
    width: calc(100vw - 32px);
  }

  :global(.world-cup-2026-code-dialog .el-dialog__body) {
    padding: 36px 24px 32px;
  }
}

@media (prefers-reduced-motion: reduce) {
  :global(.world-cup-2026-code-dialog),
  :global(.world-cup-2026-code-dialog *) {
    animation: none !important;
    transition: none !important;
  }
}
</style>
