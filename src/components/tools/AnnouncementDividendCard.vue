<template>
    <div class="sample-card-btn">
        <button class="export-btn" @click="exportTable">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
            {{ t('exportTable') }}
        </button>
    </div>
    <div ref="captureArea" class="sample-card">
        <div class="sample-card-header">
            <div>
                <div class="notice-type">{{ t('announcementDividendNoticeType') }}</div>
                <div class="sample-card-title">{{ title }}</div>
            </div>
            <div class="entry-count">
                <span class="meta-lbl">{{ t('announcementDividendEntries') }}</span>
                <span class="meta-big">{{ content.rows.length }}</span>
            </div>
        </div>

        <div v-if="content.introParagraphs.length" class="notice-body">
            <p v-for="(paragraph, index) in content.introParagraphs" :key="`intro-${index}`">
                {{ paragraph }}
            </p>
        </div>

        <div class="sample-scroll">
            <table class="sample-table dividend-table">
                <thead>
                    <tr>
                        <th
                            v-for="(header, index) in content.tableHeaders"
                            :key="`${header}-${index}`"
                            :class="{ 'numh': index >= 2 }"
                        >
                            {{ header }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, rowIndex) in formattedRows" :key="`row-${rowIndex}`">
                        <td v-for="(cell, cellIndex) in row" :key="`cell-${rowIndex}-${cellIndex}`">
                            <span v-if="cellIndex >= 2" class="td-swap">
                                <span :class="cell.className">
                                    {{ cell.text }}
                                </span>
                            </span>
                            <span v-else :class="cell.className">
                                {{ cell.text }}
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div v-if="content.footerParagraphs.length" class="disclaimer">
            <p v-for="(paragraph, index) in content.footerParagraphs" :key="`footer-${index}`">
                {{ paragraph }}
            </p>
        </div>

        <div class="card-footer">
            <span class="fn">
                {{ t('announcementDividendFooterText') }} <strong>{{ t('announcementDividendFooterHighlight') }}</strong>
            </span>
            <span class="fn">
                <span class="legend-positive">+</span> {{ t('announcementDividendLong') }}
                &nbsp;·&nbsp;
                <span class="legend-negative">−</span> {{ t('announcementDividendShort') }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import html2canvas from 'html2canvas'
import { useI18n } from 'vue-i18n'

import type { DividendAdjustmentContent } from '@/types/index'
import { formatDividendCell } from '@/utils/announcementContent'
import {
    ANNOUNCEMENT_EXPORT_BACKGROUND,
    createAnnouncementExportSandbox,
} from '@/utils/announcementExport'

const { t } = useI18n()

const props = defineProps<{
    title: string
    content: DividendAdjustmentContent
}>()

const formattedRows = computed(() => props.content.rows.map((row) => row.map((cell, cellIndex) => {
    if (cellIndex >= 2) {
        return formatDividendCell(cell)
    }

    return {
        text: cell || '—',
        className: cellIndex === 0 ? 'td-date' : 'td-sym',
    }
})))

const captureArea = ref<HTMLElement | null>(null)

const exportTable = async () => {

    const element = captureArea.value
    if (!element) {
        console.error('Capture area not found')
        return
    }

    const sandbox = createAnnouncementExportSandbox(element)

    try {
        const canvas = await html2canvas(sandbox.wrapper, {
            backgroundColor: ANNOUNCEMENT_EXPORT_BACKGROUND,
            scale: 2,
            useCORS: true,
            logging: false,
        })

        const dataURL = canvas.toDataURL('image/png')
        const link = document.createElement('a')
        link.href = dataURL
        link.download = `capture-${Date.now()}.png`

        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    } catch (error) {
        console.error('Failed to export table image', error)
        alert('error')
    } finally {
        sandbox.cleanup()
    }
}
</script>

<style lang="scss" scoped>
.sample-card-btn {
    width: 100%;
    max-width: 880px;
    margin: 0 auto;
    display: flex;
    justify-content: right;

    .export-btn{display:inline-flex;align-items:center;gap:8px;padding:9px 20px;border-radius:22px;border:1.5px solid var(--primary-color);background:transparent;color:var(--primary-color);font-family:'Poppins',sans-serif;font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;transition:background .2s,transform .2s,box-shadow .2s;backdrop-filter:blur(8px);}
    .export-btn:hover{background:var(--primary-color);color:#1A1A2E;transform:scale(1.04);box-shadow:0 4px 18px rgba(204,180,120,0.35);}
    .export-btn:disabled{opacity:.5;cursor:not-allowed;transform:none;}
    .export-btn svg{flex-shrink:0;}
}


.sample-card {
    width: 100%;
    max-width: 880px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(24px) saturate(140%);
    -webkit-backdrop-filter: blur(24px) saturate(140%);
    border: 1px solid rgba(204, 180, 120, 0.18);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.55);
}

.sample-card-header {
    padding: 32px 32px 24px;
    border-bottom: 1px solid rgba(204, 180, 120, 0.18);
    background: rgba(204, 180, 120, 0.12);
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
}

.notice-type {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #ccb478;
    margin-bottom: 8px;
}

.entry-count {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
}

.meta-lbl {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #909090;
}

.meta-big {
    font-size: 26px;
    font-weight: 700;
    color: #ccb478;
    font-variant-numeric: tabular-nums;
}

.sample-card-title {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.25;
    color: #f1f5f9;
}

.notice-body {
    padding: 24px 32px;
    border-bottom: 1px solid rgba(204, 180, 120, 0.18);
    font-size: 13.5px;
    line-height: 1.78;
    color: #909090;
}

.notice-body p {
    margin: 0 0 8px;
}

.notice-body p:last-child {
    margin-bottom: 0;
}

.disclaimer p + p {
    margin-top: 8px;
}

.sample-scroll {
    overflow-x: auto;
}

.sample-table {
    width: 100%;
    border-collapse: collapse;
    min-width: 720px;
}

.dividend-table thead th {
    padding: 14px 32px;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #909090;
    background: rgba(255, 255, 255, 0.04);
    border-bottom: 2px solid #ccb478;
    text-align: left;
    white-space: nowrap;
}

.dividend-table thead tr, .dividend-table tbody tr, .dividend-table tbody th, .dividend-table tbody td {
    padding: 0;
}

.dividend-table thead th.numh {
    text-align: right;
}

.dividend-table thead th:not(:first-child),
.dividend-table tbody td:not(:first-child) {
    border-left: 1px solid rgba(204, 180, 120, 0.18);
}

.sample-table tbody tr {
    border-bottom: 1px solid rgba(204, 180, 120, 0.18);
    transition: background 0.15s;
}

.sample-table tbody tr:last-child {
    border-bottom: none;
}

.sample-table tbody td {
    padding: 16px 32px;
    vertical-align: middle;
    white-space: nowrap;
}

.sample-table tbody tr:hover {
    background: rgba(204, 180, 120, 0.07);
}

.td-date {
    font-variant-numeric: tabular-nums;
    font-weight: 500;
    font-size: 13px;
    color: #909090;
}

.td-sym {
    font-weight: 800;
    font-size: 15px;
    color: #ccb478;
    letter-spacing: 0.04em;
}

.td-swap {
    display: inline-block;
    width: 100%;
    text-align: right;
    font-variant-numeric: tabular-nums;
}

.positive {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 6px;
    color: #27ae60;
    font-weight: 700;
    font-size: 14px;
    background: rgba(39, 174, 96, 0.14);
}

.negative {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 6px;
    color: #e74c3c;
    font-weight: 700;
    font-size: 14px;
    background: rgba(231, 76, 60, 0.14);
}

.neutral {
    color: #9b9b9b;
    font-weight: 500;
    font-size: 13px;
}

.disclaimer {
    padding: 20px 32px;
    border-top: 1px solid rgba(204, 180, 120, 0.18);
    background: rgba(255, 255, 255, 0.04);
    font-size: 13.5px;
    color: #909090;
    line-height: 1.72;
}

.card-footer {
    padding: 16px 32px;
    border-top: 1px solid rgba(204, 180, 120, 0.18);
    background: rgba(255, 255, 255, 0.04);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px;
}

.fn {
    font-size: 11px;
    color: #909090;
}

.fn strong {
    color: #ccb478;
}

.legend-positive {
    color: #27ae60;
    font-weight: 700;
}

.legend-negative {
    color: #e74c3c;
    font-weight: 700;
}
</style>
