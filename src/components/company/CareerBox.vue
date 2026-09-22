<template>
    <div class="career-box">
        <div class="container">
            <div class="title">{{ t('careerBoxSentence4') }}</div>
            <div class="text">{{ t('careerBoxSentence') }}</div>
            <ul class="list">
                <li>{{ t('careerBoxSentence5') }}</li>
                <li>{{ t('careerBoxSentence6') }}</li>
                <li>{{ t('careerBoxSentence7') }}</li>
                <li>{{ t('careerBoxSentence8') }}</li>
            </ul>
            <div class="text">{{ t('careerBoxSentence1') }}</div>
            <ul class="list">
                <li>{{ t('careerBoxSentence9') }}</li>
                <li>{{ t('careerBoxSentence10') }}</li>
                <li>{{ t('careerBoxSentence11') }}</li>
                <li>{{ t('careerBoxSentence12') }}</li>
                <li>{{ t('careerBoxSentence13') }}</li>
            </ul>

            <div class="footer">
                <div class="title">{{ t('careerBoxSentence2') }}</div>
                <div class="text">{{ t('careerBoxSentence3') }}</div>
            </div>

            <div class="title">{{ t('careerBoxSentence14') }}</div>
            <div class="text">{{ t('careerBoxSentence') }}</div>
            <ul class="list">
                <li>{{ t('careerBoxSentence15') }}</li>
                <li>{{ t('careerBoxSentence16') }}</li>
                <li>{{ t('careerBoxSentence17') }}</li>
                <li>{{ t('careerBoxSentence18') }}</li>
                <li>{{ t('careerBoxSentence19') }}</li>
            </ul>
            <div class="text">{{ t('careerBoxSentence1') }}</div>
            <ul class="list">
                <li>{{ t('careerBoxSentence20') }}</li>
                <li>{{ t('careerBoxSentence21') }}</li>
                <li>{{ t('careerBoxSentence22') }}</li>
                <li>{{ t('careerBoxSentence23') }}</li>
            </ul>

            <div class="footer">
                <div class="title">{{ t('careerBoxSentence2') }}</div>
                <div class="text">{{ t('careerBoxSentence3') }}</div>
            </div>

            <div class="title">{{ t('careerBoxSentence24') }}</div>
            <div class="text">{{ t('careerBoxSentence') }}</div>
            <ul class="list">
                <li>{{ t('careerBoxSentence25') }}</li>
            </ul>

            <div class="footer">
                <div class="title">{{ t('careerBoxSentence26') }}</div>
                <div class="text">{{ t('careerBoxSentence3') }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style lang="scss" scoped>
.career-box {
    width: var(--custom-width);
    margin: 0 auto;
    padding: 80px 0;
    box-sizing: border-box;

    @media (max-width: 1100px) {
        padding: 80px 40px;
    }

    @media (max-width: 768px) {
        padding: 60px 24px;
    }

    .container {
        padding: 40px 80px;
        display: flex;
        flex-direction: column;
        background-color: var(--bg-color-2);
        box-sizing: border-box;
        border-radius: 12px;

        @media (max-width: 1100px) {
            padding: 40px;
        }

        @media (max-width: 768px) {
            padding: 40px 24px;
        }
    }

    .text {
        color: var(--text-color-1);
        margin: 10px 0 0;
        line-height: 20px;
    }

    .list {
        color: var(--gray-color-1);

        li {
            margin: 15px 0;
            line-height: 20px;
        }
    }

    .title {
        font-size: 24px;
        color: var(--primary-color);
        margin-bottom: 10px;
    }

    .footer {
        border-left: 1px solid var(--primary-color);
        padding: 10px 10px 10px 20px;
        margin: 30px 0 50px;

        .title {
            font-size: 18px;
        }

        .text {
            color: var(--text-color-2);
        }

    }


}
</style>
