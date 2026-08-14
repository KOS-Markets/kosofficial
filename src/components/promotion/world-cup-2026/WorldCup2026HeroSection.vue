<template>
  <section
    class="hero"
    :style="{ background: `url(${backgroundFirst}) center center / cover no-repeat` }"
  >
    <h1 class="hero-title">{{ t('worldCup2026HeroTitle') }}</h1>

    <div class="hero-visual-wrap">
      <img :src="worldCupVisualBg" alt="" class="hero-visual" />
    </div>

    <p class="hero-dates">{{ t('worldCup2026CampaignDates') }}</p>

    <p class="hero-sub">{{ t('worldCup2026HeroSubtitle') }}</p>

    <div class="eligibility">
      <p class="eligibility-label">{{ t('worldCup2026EligibilityLabel') }}</p>

      <div class="eligibility-pills">
        <div v-for="item in eligibilityItems" :key="item" class="pill">
          <span class="pill-icon">-</span>
          <span>{{ item }}</span>
        </div>
      </div>
    </div>

    <div class="wheel-section">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import backgroundFirst from '@/assets/img/promotion/world-cup-2026/background-first-section.jpg'
import worldCupVisualBg from '@/assets/img/promotion/world-cup-2026/bg.jpg'

const { t } = useI18n()

const eligibilityItems = computed(() => [
  t('worldCup2026EligibilityDepositRequirement'),
  t('worldCup2026EligibilityTradingRequirement'),
])
</script>

<style scoped lang="scss">
.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 24px 80px;
  text-align: center;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.55) 0%,
    rgba(0, 0, 0, 0.35) 40%,
    rgba(0, 0, 0, 0.7) 100%
  );
}

.hero > * {
  position: relative;
  z-index: 1;
}

.hero-title {
  max-width: 850px;
  padding: 24px;
  color: #fff;
  font-family: 'Poppins', serif;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.01em;
  text-shadow: 0 2px 30px rgba(0, 0, 0, 0.5);
  animation: fade-down 0.7s 0.1s ease both;
}

.hero-visual-wrap {
  width: 100%;
  background: #000;
}

.hero-visual {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}

.hero-dates {
  margin-top: 32px;
  color: var(--gold);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.08em;
  animation: fade-down 0.7s 0.2s ease both;
}

.hero-sub {
  max-width: 900px;
  margin-top: 12px;
  color: var(--text-muted);
  font-size: 15px;
  line-height: 1.6;
  animation: fade-down 0.7s 0.25s ease both;
}

.eligibility {
  margin-top: 24px;
  animation: fade-down 0.7s 0.3s ease both;
}

.eligibility-label {
  margin-bottom: 32px;
  color: var(--gold);
  font-size: 16px;
  font-weight: 400;
}

.eligibility-pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}

.pill {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: rgba(201, 168, 76, 0.1);
  color: var(--text-primary);
  font-size: 13px;
  font-weight: 500;
  transition: all 0.25s;
}

.pill:hover {
  transform: translateY(-1px);
  border-color: var(--gold);
  background: rgba(201, 168, 76, 0.18);
}

.pill-icon {
  color: var(--gold);
  font-size: 16px;
}

.wheel-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 0;
  animation: fade-up 0.8s 0.4s ease both;
}

@keyframes fade-down {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 600px) {
  .hero {
    padding: 48px 20px 60px;
  }

  .pill {
    padding: 8px 14px;
    font-size: 12px;
  }
}

@media (max-width: 380px) {
  .eligibility-pills {
    flex-direction: column;
    align-items: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero,
  .hero::before,
  .hero::after,
  .hero * {
    animation: none !important;
    transition: none !important;
  }
}
</style>
