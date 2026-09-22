<template>
  <section class="prizes-section reveal">
    <p class="section-eyebrow">{{ t('worldCup2026PrizesEyebrow') }}</p>
    <h2 class="section-title">{{ t('worldCup2026PrizesTitle') }}</h2>
    <p class="section-sub">{{ t('worldCup2026PrizesSubtitle') }}</p>

    <div class="prizes-grid">
      <div v-for="prize in prizes" :key="prize.id" class="prize-card">
        <div class="prize-img-wrap">
          <img :src="prize.img" :alt="prize.name" />
        </div>

        <p class="prize-name">{{ prize.name }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import type { WorldCup2026Prize } from '@/types'

defineProps<{
  prizes: WorldCup2026Prize[]
}>()

const { t } = useI18n()
</script>

<style scoped lang="scss">
.prizes-section {
  padding: 100px 24px;
  background: #0d0d0d;
  text-align: center;
  opacity: 0;
  transform: translateY(28px);
  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
}

.prizes-section.visible {
  opacity: 1;
  transform: none;
}

.section-eyebrow {
  margin-bottom: 16px;
  color: var(--gold);
  font-size: 16px;
  font-weight: 400;
}

.section-title {
  margin-bottom: 14px;
  color: #fff;
  font-family: 'Poppins', serif;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 400;
}

.section-sub {
  max-width: 900px;
  margin: 0 auto 56px;
  color: var(--text-muted);
  font-size: 14px;
  line-height: 1.7;
}

.prizes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
  max-width: 900px;
  margin: 0 auto;
}

.prize-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding: 24px 16px 20px;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--bg-card);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.prize-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 0%, rgba(201, 168, 76, 0.08) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s;
}

.prize-card:hover {
  transform: translateY(-6px);
  border-color: var(--gold);
  background: var(--bg-card-hover);
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.4),
    0 0 30px rgba(201, 168, 76, 0.12);
}

.prize-card:hover::before {
  opacity: 1;
}

.prize-img-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
}

.prize-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.4));
  transition: transform 0.3s;
}

.prize-card:hover .prize-img-wrap img {
  transform: scale(1.12) translateY(-4px);
  filter: drop-shadow(0 8px 20px rgba(201, 168, 76, 0.3));
}

.prize-name {
  color: var(--text-primary);
  font-size: 13px;
  font-weight: 500;
  line-height: 1.4;
  text-align: center;
}

@media (max-width: 600px) {
  .prizes-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
}

@media (max-width: 380px) {
  .prizes-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (prefers-reduced-motion: reduce) {
  .prizes-section,
  .prizes-section::before,
  .prizes-section::after,
  .prizes-section * {
    animation: none !important;
    transition: none !important;
  }

  .prizes-section {
    opacity: 1;
    transform: none;
  }
}
</style>
