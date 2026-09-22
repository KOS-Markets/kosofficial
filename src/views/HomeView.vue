<template>
  <div class="home-view">
    <div class="carousel">
      <div class="content">
        <div class="content-text">
          <motion.div class="title" :initial="{ opacity: 0, y: 30 }" :whileInView="{ opacity: 1, y: 0, transition: { delay: 0, duration: 0.7 } }">
            <span class="title-main">{{ t('carouselTitle') }}</span>
            <span class="title-accent">{{ t('carouselTitleAccent') }}</span>
          </motion.div>
          <motion.div class="intro" :initial="{ opacity: 0, y: 30 }" :whileInView="{ opacity: 1, y: 0, transition: { delay: 0.15, duration: 0.7 } }">{{ t('carouselIntro') }}</motion.div>
          <motion.div class="actions" :initial="{ opacity: 0, y: 30 }" :whileInView="{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.7 } }">
            <CustomButton :name="t('register')" :type="1" right @toPage="browserRedirection(link_config.register_link)" />
          </motion.div>
          <motion.div class="trust-bar" :initial="{ opacity: 0, y: 30 }" :whileInView="{ opacity: 1, y: 0, transition: { delay: 0.45, duration: 0.7 } }">
            <div class="trust-item">
              <img src="@/assets/img/home/icon-forex.png" alt="">
              <span>{{ t('forex') }}</span>
            </div>
            <div class="trust-item">
              <img src="@/assets/img/home/icon-indices.png" alt="">
              <span>{{ t('indices') }}</span>
            </div>
            <div class="trust-item">
              <img src="@/assets/img/home/icon-crypto.png" alt="">
              <span>{{ t('cryptoCFDs') }}</span>
            </div>
            <div class="trust-item">
              <img src="@/assets/img/home/icon-energy.png" alt="">
              <span>{{ t('energy') }}</span>
            </div>
            <div class="trust-item">
              <img src="@/assets/img/home/icon-metals.png" alt="">
              <span>{{ t('metals') }}</span>
            </div>
            <div class="trust-item">
              <img src="@/assets/img/home/icon-shares.png" alt="">
              <span>{{ t('shares') }}</span>
            </div>
          </motion.div>
        </div>
      </div>
      <div class="mobile-img">
        <img src="@/assets/img/home/hero.png" alt="" />
      </div>
      <motion.div class="hero-media" :initial="{ opacity: 0 }" :whileInView="{ opacity: 1 }">
        <div class="hero-glow hero-glow-1"></div>
        <div class="hero-glow hero-glow-2"></div>
        <div class="hero-glow hero-glow-3"></div>
        <div class="hero-glow hero-glow-4"></div>
        <div class="hero-img-wrap">
          <img src="@/assets/img/home/hero.png" alt="">
          <div class="hero-orbits">
            <div class="orb orb-orange"></div>
            <div class="orb orb-blue orb-blue-1"></div>
            <div class="orb orb-blue orb-blue-2"></div>
            <div class="orb orb-blue orb-blue-3"></div>
            <div class="orb orb-blue orb-blue-4"></div>
          </div>
        </div>
      </motion.div>
    </div>

    <div class="ticker-section">
      <CustomTabList />
    </div>

    <HomeAdvantagesBox />
    <HomeAccountTypesBox />
    <HomeGlobalStatsBox />
    <HomePlatformBox />
  </div>
</template>

<script setup lang="ts">
import CustomButton from '@/components/custom/CustomButton.vue'
import CustomTabList from '@/components/custom/CustomTabList.vue';
import HomeAdvantagesBox from '@/components/home/HomeAdvantagesBox.vue';
import HomeAccountTypesBox from '@/components/home/HomeAccountTypesBox.vue';
import HomeGlobalStatsBox from '@/components/home/HomeGlobalStatsBox.vue';
import HomePlatformBox from '@/components/home/HomePlatformBox.vue';

import { browserRedirection } from '@/utils/tools'

import { motion } from 'motion-v'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { link_config } from '@/config';
</script>

<style lang="scss" scoped>
.home-view {

    .carousel {
      width: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      background-color: var(--bg-color);
      overflow: hidden;

    .content {
      width: var(--custom-width);
      margin: 0 auto;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      min-height: 760px;
      padding: 100px 80px;
      position: relative;
      z-index: 2;

      @media (max-width: 1100px) {
        flex-direction: column;
        padding: 80px 40px;
        min-height: auto;
      }

      @media (max-width: 768px) {
        padding: 60px 24px;
      }

      .content-text {
        max-width: 520px;

        @media (max-width: 1100px) {
          max-width: 100%;
          text-align: center;
          margin-bottom: 40px;
        }
      }

      .title,
      .intro {
        width: 100%;
      }

      .title {
        font-size: 72px;
        font-weight: 700;
        line-height: 84px;
        margin-bottom: 32px;
        color: var(--text-color);

        @media (max-width: 1100px) {
          font-size: 48px;
          line-height: 58px;
        }

        @media (max-width: 768px) {
          font-size: 32px;
          line-height: 41px;
        }

        .title-main {
          display: block;
          color: var(--text-color);
        }

        .title-accent {
          display: block;
          color: var(--primary-color);
        }
      }

      .intro {
        font-size: 18px;
        line-height: 30px;
        color: var(--gray-color-1);
        margin-bottom: 40px;

        @media (max-width: 768px) {
          font-size: 14px;
          margin-bottom: 24px;
        }
      }

      .actions {
        display: flex;
        gap: 16px;

        @media (max-width: 1100px) {
          justify-content: center;
        }
      }

      .trust-bar {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        margin-top: 32px;

        @media (max-width: 1100px) {
          justify-content: center;
        }

        @media (max-width: 768px) {
          gap: 14px;
          margin-top: 24px;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 8px;

          img {
            width: 32px;
            height: 32px;
            object-fit: contain;
            flex-shrink: 0;
          }

          span {
            font-size: 13px;
            font-weight: 500;
            color: var(--gray-color-1);
            white-space: nowrap;
          }
        }
      }
    }

    .mobile-img {
      display: none;

      @media (max-width: 1100px) {
        display: block;
        width: 100%;
        position: absolute;

        img {
          width: 100%;
          opacity: 0.1;
        }
      }
    }

    .hero-media {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: calc(100% - 600px);
      max-width: 1180px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      z-index: 1;
      pointer-events: none;

      @media (max-width: 1100px) {
        // position: static;
        // width: 100%;
        // max-width: 600px;
        // margin: 0 auto;
        // justify-content: center;
        // pointer-events: auto;
        display: none;
      }

      .hero-glow {
        position: absolute;
        border-radius: 50%;
        z-index: 0;
        pointer-events: none;
        mix-blend-mode: screen;

        &.hero-glow-1 {
          top: 6%;
          right: -6%;
          width: 62%;
          height: 74%;
          background: radial-gradient(circle at 60% 40%, rgba(37, 99, 235, 0.75), transparent 62%);
          filter: blur(70px);
          animation: glowPulse1 6.5s ease-in-out infinite;
        }

        &.hero-glow-2 {
          bottom: 2%;
          left: -2%;
          width: 46%;
          height: 56%;
          background: radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.6), transparent 62%);
          filter: blur(64px);
          animation: glowPulse2 5.4s ease-in-out infinite 0.6s;
        }

        &.hero-glow-3 {
          top: 34%;
          left: 28%;
          width: 34%;
          height: 40%;
          background: radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.55), transparent 60%);
          filter: blur(58px);
          animation: glowPulse3 7.2s ease-in-out infinite 1.1s;
        }

        &.hero-glow-4 {
          bottom: 8%;
          right: 10%;
          width: 40%;
          height: 48%;
          background: radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.58), transparent 62%);
          filter: blur(66px);
          animation: glowPulse4 6s ease-in-out infinite 0.3s;
        }
      }

      .hero-img-wrap {
        position: relative;
        z-index: 1;
        height: 100%;
        aspect-ratio: 1536 / 1024;
        flex-shrink: 0;

        @media (max-width: 1100px) {
          width: 100%;
          height: auto;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: right center;
          display: block;

          @media (max-width: 1100px) {
            object-position: center;
          }
        }
      }

      .hero-orbits {
        position: absolute;
        inset: 0;
        z-index: 2;
        pointer-events: none;
      }

      .orb {
        position: absolute;
        aspect-ratio: 1;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        will-change: transform;

        &.orb-orange {
          top: 14%;
          left: 83%;
          height: 8%;
          background: radial-gradient(circle at 35% 35%, #FFBEA3, #F97316);
          box-shadow: 0 0 24px rgba(249, 115, 22, 0.55), inset 0 0 10px rgba(255, 255, 255, 0.4);
          animation: orbFloat1 5.2s ease-in-out infinite;
        }

        &.orb-blue {
          background: radial-gradient(circle at 35% 35%, #BFDBFE, #2563EB);
          box-shadow: 0 0 18px rgba(37, 99, 235, 0.5), inset 0 0 8px rgba(255, 255, 255, 0.35);

          &.orb-blue-1 {
            top: 27%;
            left: 80%;
            height: 4.5%;
            animation: orbFloat2 4.6s ease-in-out infinite;
          }

          &.orb-blue-2 {
            top: 53%;
            left: 17%;
            height: 5.5%;
            animation: orbFloat3 6s ease-in-out infinite;
          }

          &.orb-blue-3 {
            top: 73%;
            left: 32%;
            height: 4.5%;
            animation: orbFloat4 5s ease-in-out infinite;
          }

          &.orb-blue-4 {
            top: 87%;
            left: 57%;
            height: 5%;
            animation: orbFloat5 4.8s ease-in-out infinite;
          }
        }
      }

      @keyframes glowPulse1 {
        0%,
        100% {
          opacity: 0.42;
          transform: scale(1);
        }

        50% {
          opacity: 0.78;
          transform: scale(1.08);
        }
      }

      @keyframes glowPulse2 {
        0%,
        100% {
          opacity: 0.3;
          transform: scale(1);
        }

        50% {
          opacity: 0.62;
          transform: scale(1.1);
        }
      }

      @keyframes glowPulse3 {
        0%,
        100% {
          opacity: 0.26;
          transform: scale(1);
        }

        50% {
          opacity: 0.56;
          transform: scale(1.12);
        }
      }

      @keyframes glowPulse4 {
        0%,
        100% {
          opacity: 0.3;
          transform: scale(1);
        }

        50% {
          opacity: 0.64;
          transform: scale(1.09);
        }
      }

      @keyframes orbFloat1 {
        0%,
        100% {
          transform: translate(-50%, -50%) translateY(0) translateX(0);
        }

        50% {
          transform: translate(-50%, -50%) translateY(-16px) translateX(8px);
        }
      }

      @keyframes orbFloat2 {
        0%,
        100% {
          transform: translate(-50%, -50%) translateY(0) translateX(0);
        }

        50% {
          transform: translate(-50%, -50%) translateY(12px) translateX(-6px);
        }
      }

      @keyframes orbFloat3 {
        0%,
        100% {
          transform: translate(-50%, -50%) translateY(0) translateX(0);
        }

        50% {
          transform: translate(-50%, -50%) translateY(-14px) translateX(-8px);
        }
      }

      @keyframes orbFloat4 {
        0%,
        100% {
          transform: translate(-50%, -50%) translateY(0) translateX(0);
        }

        50% {
          transform: translate(-50%, -50%) translateY(10px) translateX(10px);
        }
      }

      @keyframes orbFloat5 {
        0%,
        100% {
          transform: translate(-50%, -50%) translateY(0) translateX(0);
        }

        50% {
          transform: translate(-50%, -50%) translateY(-12px) translateX(-6px);
        }
      }
    }
  }

  .ticker-section {
    background-color: var(--bg-color);
    padding: 40px 0 80px;

    @media (max-width: 768px) {
      padding: 20px 0 40px;
    }
  }
}
</style>
