<template>
  <div class="custom-carousel custom-border-color" style="--mask-image: linear-gradient(to right, transparent 0%, black 0%, black 100%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 0%, black 100%, transparent 100%); --right: 0; --bg-h: 100%; --opacity: 1; --text-align: left">
    <div class="custom-carousel__bg">
      <motion.img
        class="custom-carousel__img flip-in-rtl"
        :src="props.background"
        alt=""
        :animate="showImg ? 'visible' : 'hidden'"
        initial="hidden"
        @load="showImg = true;"
        :variants="opacityAnimateVariants"
      />
    </div>
    <div class="custom-carousel__content">
      <div class="custom-carousel__title">{{ props.title }}</div>
      <div v-if="props.intro != ''" class="custom-carousel__intro">{{ props.intro }}</div>
      <div v-if="props.btnText != ''" class="custom-carousel__actions">
        <CustomButton :name="props.btnText" :type="0" @toPage="emit('toPage')" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { motion } from 'motion-v'

import CustomButton from '@/components/custom/CustomButton.vue'

import { opacityAnimateVariants } from "@/utils/motion.ts"

const props = withDefaults(
  defineProps<{
    type?: number
    title?: string
    background?: string
    intro?: string
    btnText?: string
  }>(),
  {
    type: 0,
    title: '',
    background: '',
    intro: '',
    btnText: '',
  },
)

const emit = defineEmits<{ toPage: [] }>()

const showImg = ref<boolean>(false)
</script>

<style lang="scss" scoped>
.custom-carousel {
  width: 100vw;
  height: 60vh;
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.custom-carousel__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: var(--opacity);
}

.custom-carousel__img {
  // width: 100%;
  height: var(--bg-h);
  // object-fit: cover;
  // object-position: right;
  display: block;
  position: absolute;
  right: var(--right);
  mask-image: var(--mask-image);
  -webkit-mask-image: var(--mask-image);
  mask-composite: intersect;
}

.custom-carousel__content {
  position: relative;
  z-index: 1;
  width: var(--custom-width);
  height: 100%;
  margin: 0 auto;
  padding: 10px 80px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1100px) {
    padding: 10px 40px;
  }

  @media (max-width: 768px) {
    padding: 10px 24px;
  }
}

.custom-carousel__title,
.custom-carousel__intro {
  width: min(550px, 100%);
}

.custom-carousel__title {
  font-size: 54px;
  font-weight: 400;
  line-height: 84px;
  margin-bottom: 30px;
  color: var(--text-color);
  text-align: var(--text-align);

  @media (max-width: 1100px) {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 41px;
  }
}

.custom-carousel__intro {
  font-size: 18px;
  line-height: 30px;
  color: var(--gray-color-1);
  margin-bottom: 50px;

  @media (max-width: 1100px) {
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
}
</style>
