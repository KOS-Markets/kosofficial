<template>
    <div class="sample-card-btn">
        <button class="export-btn" @click="exportTable">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
            {{ t('exportTable') }}
        </button>
    </div>
    <div ref="captureArea" class="sample-card hours-card">
        <div class="sample-card-header">
            <div>
                <div class="sample-card-title">{{ t('announcementTradingHoursTitle') }}</div>
                <div class="sample-card-sub">{{ title }}</div>
            </div>
            <div class="sample-card-meta">
                <span class="sample-meta-label">{{ t('announcementTradingHoursServerTime') }}</span>
                <span class="sample-meta-value">{{ timezone || '—' }}</span>
            </div>
        </div>

        <div class="sample-scroll">
            <table class="sample-table hours-table">
                <thead>
                    <tr>
                        <th>{{ labels.symbol }}</th>
                        <th>{{ labels.category }}</th>
                        <th class="span-col" :colspan="columnCount">
                            <span v-html="labels.sessionGroup"></span>
                        </th>
                        <!-- {{`\u2066（GMT+3) MT4/MT5 \u2069  وقت التداول على`}} -->
                    </tr>
                    <tr>
                        <th></th>
                        <th></th>
                        <th
                            v-for="index in columnCount"
                            :key="`date-${index}`"
                            class="date-col"
                        >
                            {{ dates[index - 1] || '—' }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, rowIndex) in tableRows" :key="`${row.symbol}-${row.category}-${rowIndex}`">
                        <td class="sym">{{ row.symbol }}</td>
                        <td>
                            <span class="badge">{{ row.category }}</span>
                        </td>
                        <td
                            v-for="(sessionDisplay, sessionIndex) in row.sessionDisplays"
                            :key="`${row.symbol}-${sessionIndex}`"
                            class="tcell"
                        >
                            <span :class="sessionDisplay.className">
                                {{ sessionDisplay.text }}
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="sample-card-footer">
            <span class="sample-footer-note">
                {{ t('announcementTradingHoursAllTimes') }} <strong>{{ timezone || '—' }}</strong>
                · {{ content.rows.length }} {{ instrumentUnit }}
                · {{ columnCount }} {{ sessionUnit }}
            </span>
            <span class="sample-footer-note">
                <span class="footer-dot">●</span>
                {{ t('announcementTradingHoursFooterExample') }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import html2canvas from 'html2canvas'

import {
    formatTradingHoursCell,
    getTradingHoursDates,
    getTradingHoursLabels,
    getTradingHoursTimezone,
} from '@/utils/announcementContent'
import type { TradingHoursContent } from '@/types/index'

import {
    ANNOUNCEMENT_EXPORT_BACKGROUND,
    createAnnouncementExportSandbox,
} from '@/utils/announcementExport'

const props = defineProps<{
    title: string
    content: TradingHoursContent
}>()

const { t } = useI18n()

const dates = computed(() => getTradingHoursDates(props.content))
const labels = computed(() => getTradingHoursLabels(props.content))
const timezone = computed(() => getTradingHoursTimezone(props.content))
const columnCount = computed(() => Math.max(
    dates.value.length,
    ...props.content.rows.map((row) => row.sessions.length),
    1,
))
const tableRows = computed(() => props.content.rows.map((row) => ({
    ...row,
    sessionDisplays: Array.from(
        { length: columnCount.value },
        (_, index) => formatTradingHoursCell(row.sessions[index]),
    ),
})))
const instrumentUnit = computed(() => (
    props.content.rows.length === 1
        ? t('announcementTradingHoursInstrument')
        : t('announcementTradingHoursInstruments')
))
const sessionUnit = computed(() => (
    columnCount.value === 1
        ? t('announcementTradingHoursSession')
        : t('announcementTradingHoursSessions')
))

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
    max-width: 1040px;
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
    max-width: 1040px;
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
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
    padding: 32px;
    border-bottom: 1px solid rgba(204, 180, 120, 0.18);
    background: rgba(204, 180, 120, 0.12);
}

.sample-card-title {
    font-size: 22px;
    font-weight: 700;
    line-height: 1.2;
    color: #f1f5f9;
}

.sample-card-sub {
    margin-top: 4px;
    font-size: 13px;
    color: #909090;
    line-height: 1.6;
}

.sample-card-meta {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
}

.sample-meta-label {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #909090;
}

.sample-meta-value {
    font-size: 23px;
    font-weight: 700;
    color: #ccb478;
}

.sample-scroll {
    overflow-x: auto;
}

.sample-table {
    width: 100%;
    border-collapse: collapse;
    min-width: 720px;
}

.hours-table thead tr:first-child th {
    background: rgba(255, 255, 255, 0.04);
    color: #909090;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 16px 32px 8px;
    border-bottom: 1px solid rgba(204, 180, 120, 0.18);
    text-align: left;
    white-space: nowrap;
}

.hours-table thead tr:first-child th.span-col {
    text-align: center;
    color: #ccb478;
    font-size: 11px;
    border-left: 1px solid rgba(204, 180, 120, 0.18);
}

.hours-table thead tr:nth-child(2) th {
    background: rgba(255, 255, 255, 0.04);
    color: #909090;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 8px 32px 16px;
    border-bottom: 2px solid #ccb478;
    text-align: left;
    white-space: nowrap;
}

.hours-table thead tr:nth-child(2) th.date-col {
    text-align: center;
    color: #f1f5f9;
    font-size: 11px;
    font-weight: 700;
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

.sym {
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.04em;
    color: #ccb478;
    font-variant-numeric: tabular-nums;
}

.badge {
    display: inline-block;
    padding: 3px 10px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.05em;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(204, 180, 120, 0.18);
    color: #909090;
}

.tcell {
    text-align: center;
    font-variant-numeric: tabular-nums;
    border-left: 1px solid rgba(204, 180, 120, 0.18);
}

.vh-empty {
    color: #909090;
    font-weight: 500;
}

.vh-value {
    color: #f1f5f9;
    font-weight: 600;
    font-size: 14px;
}

.sample-card-footer {
    padding: 16px 32px;
    border-top: 1px solid rgba(204, 180, 120, 0.18);
    background: rgba(255, 255, 255, 0.04);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px;
}

.sample-footer-note {
    font-size: 11px;
    color: #909090;
}

.sample-footer-note strong {
    color: #ccb478;
}

.footer-dot {
    color: #9b9b9b;
}
</style>
