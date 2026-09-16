<template>
  <div class="privacy-policy-view">
    <header class="privacy-hero">
      <img :src="heroImage" alt="" class="privacy-hero__image" />
      <div class="privacy-hero__overlay"></div>
      <div class="privacy-hero__content">
        <div class="privacy-hero__eyebrow">{{ content.hero.eyebrow }}</div>
        <h1>{{ content.hero.title }}</h1>
        <p>{{ content.hero.intro }}</p>
        <div class="privacy-hero__date">{{ content.hero.effectiveDate }}</div>
      </div>
    </header>

    <main class="policy-layout">
      <aside class="policy-nav" :aria-label="content.hero.title">
        <div class="policy-nav__title">{{ content.onThisPage }}</div>
        <a v-for="(section, index) in content.sections" :key="section.id" :href="`#${section.id}`">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>{{ section.nav }}
        </a>
      </aside>

      <article class="policy-content">
        <section v-for="(section, sectionIndex) in content.sections" :id="section.id" :key="section.id">
          <h2><span>{{ sectionIndex + 1 }}</span>{{ section.title }}</h2>

          <template v-for="(block, blockIndex) in section.blocks" :key="blockIndex">
            <p v-if="block.type === 'paragraph'">{{ block.text }}</p>

            <template v-else-if="block.type === 'list'">
              <p v-if="block.intro">{{ block.intro }}</p>
              <ul>
                <li v-for="(item, itemIndex) in block.items" :key="itemIndex">
                  <strong v-if="item.label">{{ item.label }}</strong>{{ item.text }}
                </li>
              </ul>
            </template>

            <address v-else>
              <strong>{{ block.company }}</strong><br />
              {{ block.emailLabel }}:
              <a href="mailto:info@kosmarkets.com"><bdi>info@kosmarkets.com</bdi></a><br />
              {{ block.addressLabel }}: <bdi>{{ block.address }}</bdi>
            </address>
          </template>
        </section>
      </article>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, onActivated, onBeforeUnmount, onDeactivated, watch } from 'vue'

import heroImage from '@/assets/img/company/legal-documents/Section1_BG Cropped.jpg'
import { privacyPolicyContent } from '@/content/privacyPolicy'
import { usePageSettingsStore } from '@/stores/pageSettings'

const pageSettingsStore = usePageSettingsStore()
const content = computed(() => privacyPolicyContent[pageSettingsStore.lang] ?? privacyPolicyContent.en)

const defaultPageTitle = 'Kosmarkets - CFDs on Forex Indices Stocks Energy Metals'
const setPageTitle = () => {
  document.title = `${content.value.hero.title} | KOS Markets`
}
const restorePageTitle = () => {
  document.title = defaultPageTitle
}

const stopTitleWatch = watch(content, setPageTitle, { immediate: true })

onActivated(setPageTitle)
onDeactivated(restorePageTitle)
onBeforeUnmount(() => {
  stopTitleWatch()
  restorePageTitle()
})
</script>

<style lang="scss" scoped>
.privacy-policy-view {
  background: var(--bg-color);
  color: var(--text-color-1);
}

.privacy-hero {
  position: relative;
  min-height: 360px;
  overflow: hidden;
  background: #172554;
  color: #fff;
  display: flex;
  align-items: center;
}

.privacy-hero__image,
.privacy-hero__overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.privacy-hero__image {
  object-fit: cover;
  object-position: center;
}

.privacy-hero__overlay {
  background: rgba(15, 23, 42, 0.78);
}

.privacy-hero__content {
  position: relative;
  z-index: 1;
  width: var(--custom-width);
  margin: 0 auto;
  padding: 80px;
  box-sizing: border-box;
}

.privacy-hero__eyebrow {
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  color: #bfdbfe;
  margin-bottom: 18px;
}

.privacy-hero h1 {
  margin: 0 0 20px;
  font-size: 48px;
  line-height: 1.18;
  font-weight: 600;
}

.privacy-hero p {
  max-width: 660px;
  margin: 0 0 28px;
  color: rgba(255, 255, 255, 0.84);
  font-size: 18px;
  line-height: 1.7;
}

.privacy-hero__date {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.68);
}

.policy-layout {
  width: min(1180px, 100%);
  margin: 0 auto;
  padding: 88px 48px 120px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr);
  gap: 88px;
  align-items: start;
}

.policy-nav {
  position: sticky;
  top: 96px;
  max-height: calc(100vh - 120px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  border-inline-start: 1px solid var(--border-color);
  padding-inline-start: 22px;
  scrollbar-width: thin;
}

.policy-nav__title {
  margin-bottom: 18px;
  font-size: 14px;
  font-weight: 700;
  color: var(--text-color);
}

.policy-nav a {
  display: grid;
  grid-template-columns: 28px minmax(0, 1fr);
  gap: 8px;
  padding: 6px 0;
  color: var(--gray-color-1);
  font-size: 13px;
  line-height: 1.45;
  transition: color 0.2s ease;
}

.policy-nav a:hover,
.policy-nav a:focus-visible {
  color: var(--primary-color);
}

.policy-nav a:focus-visible {
  outline: 2px solid var(--primary-color);
  outline-offset: 4px;
}

.policy-nav a span {
  color: var(--primary-color);
  font-size: 11px;
  padding-top: 2px;
}

.policy-content {
  min-width: 0;
}

.policy-content section {
  scroll-margin-top: 96px;
  padding-bottom: 44px;
  margin-bottom: 44px;
  border-bottom: 1px solid var(--border-color);
}

.policy-content section:last-child {
  margin-bottom: 0;
}

.policy-content h2 {
  display: grid;
  grid-template-columns: 38px minmax(0, 1fr);
  gap: 14px;
  align-items: start;
  margin: 0 0 24px;
  color: var(--text-color);
  font-size: 26px;
  line-height: 1.35;
  font-weight: 600;
}

.policy-content h2 span {
  width: 34px;
  height: 34px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #bfdbfe;
  color: var(--primary-color);
  font-size: 13px;
  font-weight: 600;
}

.policy-content p,
.policy-content li,
.policy-content address {
  font-size: 15px;
  line-height: 1.85;
  color: var(--text-color-2);
}

.policy-content p {
  margin: 0 0 18px;
}

.policy-content ul {
  margin: 0 0 24px;
  padding-inline-start: 22px;
}

.policy-content li {
  padding-inline-start: 8px;
  margin-bottom: 12px;
}

.policy-content li::marker {
  color: var(--primary-color);
}

.policy-content strong {
  color: var(--text-color-1);
  font-weight: 600;
}

.policy-content address {
  margin: 0 0 22px;
  font-style: normal;
}

.policy-content address a {
  color: var(--primary-color);
  font-weight: 600;
}

@media (max-width: 1100px) {
  .privacy-hero__content {
    padding: 72px 40px;
  }

  .policy-layout {
    padding: 72px 40px 100px;
    grid-template-columns: 210px minmax(0, 1fr);
    gap: 56px;
  }
}

@media (max-width: 768px) {
  .privacy-hero {
    min-height: 330px;
  }

  .privacy-hero__content {
    padding: 64px 24px;
  }

  .privacy-hero h1 {
    font-size: 34px;
  }

  .privacy-hero p {
    font-size: 15px;
    line-height: 1.65;
  }

  .policy-layout {
    display: block;
    padding: 52px 24px 80px;
  }

  .policy-nav {
    position: static;
    max-height: none;
    overflow: visible;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0 18px;
    margin-bottom: 56px;
    padding: 0 0 28px;
    border-inline-start: 0;
    border-bottom: 1px solid var(--border-color);
  }

  .policy-nav__title {
    grid-column: 1 / -1;
  }

  .policy-content section {
    padding-bottom: 36px;
    margin-bottom: 36px;
  }

  .policy-content h2 {
    grid-template-columns: 34px minmax(0, 1fr);
    gap: 12px;
    font-size: 21px;
  }

  .policy-content h2 span {
    width: 30px;
    height: 30px;
  }

  .policy-content p,
  .policy-content li,
  .policy-content address {
    font-size: 14px;
    line-height: 1.8;
  }
}

@media (max-width: 420px) {
  .policy-nav {
    grid-template-columns: 1fr;
  }
}
</style>
