<template>
    <div class="custom-carousel">
      <div class="media">
        <motion.img class="flip-in-rtl" :src="props.background" alt="" :animate="showImg ? 'visible' : 'hidden'" initial="hidden" @load="showImg = true;" :variants="opacityAnimateVariants" />
      </div>
      <div class="content">
        <div class="title">{{ props.title }}</div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { motion } from 'motion-v'
  
  import { opacityAnimateVariants } from "@/utils/motion.ts"
  
  const props = withDefaults(
    defineProps<{
      title?: string
      background?: string
    }>(),
    {
      title: '',
      background: '',
    },
  )
  
  const showImg = ref<boolean>(false)
  </script>
  
  <style lang="scss" scoped>
  .custom-carousel {
    width: 100vw;
    height: 304px;
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;

    .media {
        opacity: 29%;
        display: flex;
        align-items: center;
    }
  
    img {
      width: 100vw;
      min-height: 100%;
      object-fit: cover;
      /* 保持比例，覆盖整个容器 */
      object-position: center end;
      /* 关键：图片底部对齐，水平居中 */
  
  
      @media (max-width: 1100px) {
        // height: auto;
        // opacity: 1%;
      }
    }
  
    .content {
      width: var(--custom-width);
      height: 100%;
      margin: 0 auto;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: absolute;
  
      padding: 10px 80px;
  
      @media (max-width: 1100px) {
        padding: 10px 40px;
      }
  
      @media (max-width: 768px) {
        padding: 10px 24px;
      }
  
      .title {
        font-size: 32px;
        font-weight: 500;
        color: var(--text-color);
        text-align: center;

        @media (max-width: 1100px) {
          font-size: 28px;
        }

        @media (max-width: 768px) {
          font-size: 24px;
        }
  
        // @media (max-width: 1100px) {
        //   font-size: 36px;
        // }
  
        // @media (max-width: 768px) {
        //   font-size: 32px;
        //   line-height: 41px;
        // }
      }
  
    }
  }
  </style>
