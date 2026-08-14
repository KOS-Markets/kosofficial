<template>
    <div class="custom-title">
        <div class="content">
            {{ props.name }}
        </div>
    </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name?: string
  }>(),
  {
    name: '',
  },
)
</script>

<style lang="scss" scoped>
.custom-title {
    background-color: var(--bg-color-1);
    padding: 36px 0;

    .content {
        font-size: 25px;
        font-weight: 300;
        width: var(--custom-width);
        margin: 0 auto;
        box-sizing: border-box;
        
    }
}
</style>
