<template>
    <div class="page-layout">
        <Header />
        <router-view v-slot="{ Component }">
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
        </router-view>
        <Footer />
    </div>
</template>

<style lang="scss" scoped></style>

<script setup lang="ts">
import Header from '@/components/nav/HeaderNav.vue';
import Footer from '@/components/nav/FooterNav.vue';
</script>