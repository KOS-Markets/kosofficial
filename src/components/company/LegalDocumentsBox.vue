<template>
    <div class="legal-documents-box">
        <div class="item">
            <div class="icon">
                <img src="@/assets/img/company/legal-documents/pdf.svg" alt="">
            </div>
            <div class="text">PDF</div>
        </div>
        <div class="item">
            <div class="icon">
                <img src="@/assets/img/company/legal-documents/pdf.svg" alt="">
            </div>
            <div class="text">PDF</div>
        </div>
        <div class="item">
            <div class="icon">
                <img src="@/assets/img/company/legal-documents/pdf.svg" alt="">
            </div>
            <div class="text">PDF</div>
        </div>
        <div class="item">
            <div class="icon">
                <img src="@/assets/img/company/legal-documents/pdf.svg" alt="">
            </div>
            <div class="text">PDF</div>
        </div>
        <div class="item">
            <div class="icon">
                <img src="@/assets/img/company/legal-documents/pdf.svg" alt="">
            </div>
            <div class="text">PDF</div>
        </div>
        <div class="item">
            <div class="icon">
                <img src="@/assets/img/company/legal-documents/pdf.svg" alt="">
            </div>
            <div class="text">PDF</div>
        </div>
        <div class="item">
            <div class="icon">
                <img src="@/assets/img/company/legal-documents/pdf.svg" alt="">
            </div>
            <div class="text">PDF</div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.legal-documents-box {
    width: var(--custom-width);
    margin: 0 auto;
    padding: 112px 80px;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;


    @media (max-width: 1100px) {
        padding: 80px 0;
    }

    @media (max-width: 768px) {
        padding: 60px 0;
    }


    .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20px 0;
        flex: 1;

        @media (max-width: 1100px) {
            flex: 0 0 25%;
        }

        @media (max-width: 768px) {
            flex: 0 0 33.3%;
        }

        .text {
            margin-top: 10px;
        }
    }
}
</style>