<template>
    <div class="custom-button" :class="buttonVariantClass">
        <el-button type="primary" @click="emit('toPage')" :size="props.size">
            {{ props.name }}
            <el-icon v-if="props.right" class="custom-button__icon">
                <ArrowRight />
            </el-icon>
        </el-button>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type ButtonVariant = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7

const props = withDefaults(
    defineProps<{
        type?: ButtonVariant
        name?: string
        right?: boolean
        size?: 'small' | 'default' | 'large'
    }>(),
    {
        type: 0,
        name: '',
        right: false,
        size: 'default'
    },
)

const emit = defineEmits<{
    (event: 'toPage'): void
}>()

const buttonVariantClassMap: Record<ButtonVariant, string> = {
    0: 'primary',
    1: 'primary1',
    2: 'secondary',
    3: 'secondary1',
    4: 'secondary2',
    5: 'secondary3',
    6: 'secondary4',
    7: 'secondary5',
}

const buttonVariantClass = computed(() => buttonVariantClassMap[props.type] ?? 'primary')
</script>

<style lang="scss" scoped>
.custom-button {
    --button-bg-current: var(--button-bg-color);
    --button-border-current: var(--button-border-color);
    --button-text-current: var(--button-text-color);
    --button-bg-hover-current: var(--button-bg-hover-color);
    --button-border-hover-current: var(--button-border-hover-color);
    --button-text-hover-current: var(--button-text-hover-color);
    --button-padding-inline: 32px;

    .el-button {
        height: 38px;
        font-weight: 550;
        font-size: 14px;
        border-radius: 8px;
        padding: 0 var(--button-padding-inline);
        background-color: var(--button-bg-current);
        border-color: var(--button-border-current);
        color: var(--button-text-current);
        transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;

        &:hover,
        &:focus-visible {
            background-color: var(--button-bg-hover-current);
            border-color: var(--button-border-hover-current);
            color: var(--button-text-hover-current);
        }
    }

    &__icon {
        margin-inline-start: 10px;
    }

    &.primary1 {
        --button-bg-current: var(--button-bg-color-1);
        --button-border-current: var(--button-border-color-1);
        --button-text-current: var(--button-text-color-1);
        --button-bg-hover-current: var(--button-bg-hover-color-1);
        --button-border-hover-current: var(--button-border-hover-color-1);
        --button-text-hover-current: var(--button-text-hover-color-1);
    }

    &.secondary {
        --button-bg-current: var(--button-bg-color-2);
        --button-border-current: var(--button-border-color-2);
        --button-text-current: var(--button-text-color-2);
        --button-bg-hover-current: var(--button-bg-hover-color-2);
        --button-border-hover-current: var(--button-border-hover-color-2);
        --button-text-hover-current: var(--button-text-hover-color-2);
    }

    &.secondary1 {
        --button-bg-current: var(--button-bg-color-3);
        --button-border-current: var(--button-border-color-3);
        --button-text-current: var(--button-text-color-3);
        --button-bg-hover-current: var(--button-bg-hover-color-3);
        --button-border-hover-current: var(--button-border-hover-color-3);
        --button-text-hover-current: var(--button-text-hover-color-3);
    }

    &.secondary2 {
        --button-bg-current: var(--button-bg-color-4);
        --button-border-current: var(--button-border-color-4);
        --button-text-current: var(--button-text-color-4);
        --button-bg-hover-current: var(--button-bg-hover-color-4);
        --button-border-hover-current: var(--button-border-hover-color-4);
        --button-text-hover-current: var(--button-text-hover-color-4);
        --button-padding-inline: 20px;
    }

    &.secondary3 {
        --button-bg-current: var(--button-bg-color-5);
        --button-border-current: var(--button-border-color-5);
        --button-text-current: var(--button-text-color-5);
        --button-bg-hover-current: var(--button-bg-hover-color-5);
        --button-border-hover-current: var(--button-border-hover-color-5);
        --button-text-hover-current: var(--button-text-hover-color-5);
    }

    &.secondary4,
    &.secondary5 {
        --button-bg-current: var(--button-bg-color-6);
        --button-border-current: var(--button-border-color-6);
        --button-text-current: var(--button-text-color-6);
        --button-bg-hover-current: var(--button-bg-hover-color-6);
        --button-border-hover-current: var(--button-border-hover-color-6);
        --button-text-hover-current: var(--button-text-hover-color-6);
    }

    &.secondary5 {
        --button-padding-inline: 20px;
    }
}
</style>
