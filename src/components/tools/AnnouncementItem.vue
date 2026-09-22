<template>
    <div class="announcement-item">
        <div class="time">{{ props.time }}</div>
        <div class="title">{{ props.title }}</div>
    </div>
  </template>
  
  <script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      title?: string
      time?: string
    }>(),
    {
      title: '',
      time: '',
    },
  )
  </script>
  
  <style lang="scss" scoped>
  .announcement-item {
    padding: 8px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    border-radius: 8px;
    border: 1px solid var(--border-color-1);
    gap: 8px;

    .time {
      white-space: nowrap;
    }

    .title {
      white-space: nowrap;

      display: -webkit-box;
      /* 使用 WebKit 的弹性盒子模型 */
      -webkit-line-clamp: 1;
      /* 限制显示的行数 */
      -webkit-box-orient: vertical;
      /* 设置盒子的方向为垂直 */
      overflow: hidden;
      /* 隐藏溢出的内容 */
      text-overflow: ellipsis;
      /* 溢出的内容显示为省略号 */
      word-break: break-all;
      /* 防止长单词溢出 */
    }
  }

  .announcement-item:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
  }
  </style>
