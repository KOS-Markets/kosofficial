<template>
  <section class="rules-section reveal">
    <div class="rules-inner">
      <h2 class="rules-title">{{ t('worldCup2026RulesTitle') }}</h2>
      <p class="rules-intro">{{ t('worldCup2026RulesIntro') }}</p>

      <ul class="rules-list">
        <li v-for="rule in rules" :key="rule.text" class="rule-item" :class="rule.type">
          <span class="rule-icon">{{ rule.type === 'ok' ? '✅' : '❌' }}</span>
          {{ rule.text }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import type { WorldCup2026Rule } from '@/types'

const { t } = useI18n()

const rules = computed<WorldCup2026Rule[]>(() => [
  {
    text: t('worldCup2026Rule1'),
    type: 'ok',
  },
  {
    text: t('worldCup2026Rule3'),
    type: 'ok',
  },
  {
    text: t('worldCup2026Rule4'),
    type: 'no',
  },
  {
    text: t('worldCup2026Rule5'),
    type: 'no',
  },
  {
    text: t('worldCup2026Rule6'),
    type: 'no',
  },
])
</script>

<style scoped lang="scss">
.rules-section {
  padding: 90px 24px;
  border-top: 1px solid rgba(201, 168, 76, 0.1);
  border-bottom: 1px solid rgba(201, 168, 76, 0.1);
  background: #0a0a0a;
  opacity: 0;
  transform: translateY(28px);
  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
}

.rules-section.visible {
  opacity: 1;
  transform: none;
}

.rules-inner {
  max-width: 900px;
  margin: 0 auto;
}

.rules-title {
  margin-bottom: 8px;
  color: #fff;
  font-family: 'Poppins', serif;
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 400;
}

.rules-intro {
  margin-bottom: 36px;
  color: var(--text-muted);
  font-size: 13px;
  font-style: italic;
}

.rules-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
  list-style: none;
  padding: 0;
}

.rule-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 14px 18px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  background: var(--bg-card);
  color: var(--text-primary);
  font-size: 14px;
  line-height: 1.6;
  transition: all 0.2s;
}

.rule-item:hover {
  transform: translateX(4px);
  border-color: rgba(255, 255, 255, 0.1);
  background: var(--bg-card-hover);
}

.rule-icon {
  flex-shrink: 0;
  margin-top: 1px;
  font-size: 17px;
}

.rule-item.ok .rule-icon {
  color: var(--green-glow);
}

.rule-item.no .rule-icon {
  color: #e74c3c;
}

@media (prefers-reduced-motion: reduce) {
  .rules-section,
  .rules-section::before,
  .rules-section::after,
  .rules-section * {
    animation: none !important;
    transition: none !important;
  }

  .rules-section {
    opacity: 1;
    transform: none;
  }
}
</style>
