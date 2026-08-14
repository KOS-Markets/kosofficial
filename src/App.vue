<template>
  <RouterView />

  <NotificationBar v-if="store.showNotificationBar" />
  <!-- <LocationModal /> -->
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { RouterView } from 'vue-router'

import NotificationBar from '@/components/NotificationBar.vue'

import { useAppStore } from '@/stores/app'
import { useWsConnectStore } from '@/stores/wsConnect'

const store = useAppStore()
const wsConnectStore = useWsConnectStore()

onBeforeMount(async () => {
  try {
    await store.selectSystemSetting()
    await store.getLocation()
  } catch (err) {
    console.warn(err)
  }
})

document.documentElement.setAttribute('class', 'light')

store.getUsername()
wsConnectStore.connectWs()
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

html, body {
  background-color: var(--bg-color);
  color: var(--text-color);
  font-family: 'Poppins', sans-serif;
}

:root {
  --red-color: #EF4444;
  --green-color: #10B981;
  --primary-color: #2563EB;
  --primary-color-1: #1D4ED8;

  --bg-color: #FFFFFF;
  --bg-color-1: #F1F5F9;
  --bg-color-2: #F1F5F98C;
  --surface-color: #FFFFFF;
  --surface-border-color: #E2E8F0;

  --text-color: #0F172A;
  --text-color-1: #1E293B;
  --text-color-1-30: #1E293B4D;
  --text-color-dark: #FFFFFF;
  --text-color-2: #475569;
  --gray-color: #94A3B8;
  --gray-color-1: #64748B;
  --gray-color-2: #94A3B8;
  --gray-color-3: #CBD5E1;

  --menu-color: #2563EB14;
  --menu-color-1: #FFFFFFF2;

  --header-overlay-rgb: 255, 255, 255;

  --border-color: #E2E8F0;
  --border-color-1: #CBD5E1;

  --max-width: 1500px;
  --custom-width: min(var(--max-width), 100%);

  --el-color-primary: #2563EB;

  --tab-bg-color: #2563EB14;
  --tab-border-color: #2563EB;
  --tab-bg-color-1: #2563EB24;
  --tab-border-color-1: #2563EB;
  --tab-bg-color-2: #2563EB0F;

  --button-bg-color: #2563EB;
  --button-text-color: #FFFFFF;
  --button-border-color: transparent;
  --button-bg-hover-color: #1D4ED8;
  --button-text-hover-color: #FFFFFF;
  --button-border-hover-color: transparent;

  --button-bg-color-1: #2563EB;
  --button-text-color-1: #FFFFFF;
  --button-border-color-1: transparent;
  --button-bg-hover-color-1: #1D4ED8;
  --button-text-hover-color-1: #FFFFFF;
  --button-border-hover-color-1: transparent;

  --button-bg-color-2: transparent;
  --button-text-color-2: #0F172A;
  --button-border-color-2: #0F172A;
  --button-bg-hover-color-2: #2563EB14;
  --button-text-hover-color-2: #0F172A;
  --button-border-hover-color-2: #0F172A;

  --button-bg-color-3: transparent;
  --button-text-color-3: #2563EB;
  --button-border-color-3: #2563EB;
  --button-bg-hover-color-3: #2563EB;
  --button-text-hover-color-3: #FFFFFF;
  --button-border-hover-color-3: #2563EB;

  --button-bg-color-4: transparent;
  --button-text-color-4: var(--green-color);
  --button-border-color-4: var(--green-color);
  --button-bg-hover-color-4: transparent;
  --button-text-hover-color-4: #0F172A;
  --button-border-hover-color-4: #0F172A;

  --button-bg-color-5: transparent;
  --button-text-color-5: #0F172A;
  --button-border-color-5: #2563EB;
  --button-bg-hover-color-5: #2563EB14;
  --button-text-hover-color-5: #0F172A;
  --button-border-hover-color-5: #2563EB;

  --button-bg-color-6: transparent;
  --button-text-color-6: #0F172A;
  --button-border-color-6: #2563EB;
  --button-bg-hover-color-6: #2563EB14;
  --button-text-hover-color-6: #0F172A;
  --button-border-hover-color-6: #2563EB;
}

.el-dropdown__list {
  padding: 10px !important;
}

.el-dropdown {
  color: var(--text-color) !important;
}

.el-dropdown__list .dropdown .dropdown-item {
  display: flex;
  justify-content: center;
  cursor: pointer;
  padding: 2px 0;
}

.el-popup-parent--hidden {
  overflow: visible !important;
}

::-webkit-scrollbar {
  width: 3px;
  height: 7px;
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: lightgray;
}

.custom-border-color {
  border-bottom: 1px solid transparent;
  border-image: linear-gradient(to right, transparent, transparent, var(--primary-color), transparent, transparent) 0 0 1 0;
}

.section-media-bg {
  position: absolute;
  inset: 0;
}

.section-media-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  display: block;
}

html[dir="rtl"] {
  direction: rtl;
  text-align: right;
}

html[dir="rtl"] img.flip-in-rtl,
body[dir="rtl"] img.flip-in-rtl {
  transform: scaleX(-1);
}

html[dir="rtl"] video.flip-in-rtl,
body[dir="rtl"] video.flip-in-rtl {
  transform: scaleX(-1);
}
</style>
