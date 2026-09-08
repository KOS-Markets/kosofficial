<template>
  <button
    class="livechat-control"
    type="button"
    title="Online customer service"
    :aria-label="isExpanded ? 'Collapse online customer service' : 'Open online customer service'"
    :aria-expanded="isExpanded"
    @click="toggleChat"
  >
    <span class="livechat-control__icon" aria-hidden="true"></span>
  </button>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const isExpanded = ref(false)
let retryTimer: number | undefined

const callWidget = (method: 'maximize' | 'minimize') => {
  const widget = window.LiveChatWidget as (Window['LiveChatWidget'] & { _h?: unknown }) | undefined
  if (widget?._h) {
    widget.call(method)
    return true
  }
  return false
}

const toggleChat = () => {
  isExpanded.value = !isExpanded.value
  const handled = callWidget(isExpanded.value ? 'maximize' : 'minimize')
  if (!handled && isExpanded.value) {
    window.open('https://www.livechat.com/chat-with/19871111/', '_blank', 'noopener,noreferrer')
  }
}

const syncWidgetState = (...args: unknown[]) => {
  const state = args[0]
  if (typeof state === 'string') {
    isExpanded.value = state === 'expanded' || state === 'maximized'
  }
}

onMounted(() => {
  const connect = () => {
    if (window.LiveChatWidget) {
      window.LiveChatWidget.on('state_changed', syncWidgetState)
      window.LiveChatWidget.on('visibility_changed', syncWidgetState)
      return
    }
    retryTimer = window.setTimeout(connect, 500)
  }
  connect()
})

onBeforeUnmount(() => {
  if (retryTimer) window.clearTimeout(retryTimer)
})
</script>

<style scoped lang="scss">
.livechat-control {
  display: inline-flex;
  position: fixed;
  right: 16px;
  bottom: 18px;
  z-index: 2147483646;
  align-items: center;
  width: 48px;
  height: 48px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: #2563eb;
  color: #fff;
  box-shadow: 0 8px 22px rgba(15, 23, 42, 0.24);
  cursor: pointer;
  font: inherit;
  justify-content: center;

  &:hover,
  &:focus-visible {
    background: #1d4ed8;
  }

  &:focus-visible {
    outline: 3px solid rgba(37, 99, 235, 0.28);
    outline-offset: 3px;
  }

  &__icon {
    width: 15px;
    height: 12px;
    border: 2px solid currentColor;
    border-radius: 7px;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 1px;
      bottom: -5px;
      width: 5px;
      height: 5px;
      border-left: 2px solid currentColor;
      transform: skew(-25deg);
    }
  }

  @media (max-width: 480px) {
    right: 12px;
    bottom: 12px;
    width: 46px;
    height: 46px;
  }
}
</style>
