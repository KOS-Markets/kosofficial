<template>
  <section
    class="cta-section"
    :style="{ background: `url(${backgroundLast}) center center / cover no-repeat` }"
  >
    <div class="cta-content">
      <p class="cta-dates">{{ t('worldCup2026CampaignDates') }}</p>
      <h2 class="cta-title">{{ t('worldCup2026CtaTitle') }}</h2>
      <p class="cta-text">{{ t('worldCup2026CtaText') }}</p>

      <button class="btn-gold" type="button" @click="$emit('claim')">
        {{ t('worldCup2026CtaButton') }}
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import backgroundLast from '@/assets/img/promotion/world-cup-2026/background-last-section.jpg'

defineEmits<{
  (event: 'claim'): void
}>()

const { t } = useI18n()
</script>

<style scoped lang="scss">
.cta-section {
  position: relative;
  overflow: hidden;
  padding: 120px 24px;
  text-align: center;
}

.cta-section::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.65) 50%,
    rgba(0, 0, 0, 0.85) 100%
  );
}

.cta-content {
  position: relative;
  z-index: 2;
  margin: 0 auto;
}

.cta-dates {
  margin-bottom: 20px;
  color: var(--gold);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.cta-title {
  margin-bottom: 16px;
  color: #fff;
  font-family: 'Poppins', serif;
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 400;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
}

.cta-text {
  max-width: 900px;
  margin: 0 auto 40px;
  color: var(--text-muted);
  font-size: 14px;
  line-height: 1.7;
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
  background: linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 50%, var(--gold-dim) 100%);
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
</style>
