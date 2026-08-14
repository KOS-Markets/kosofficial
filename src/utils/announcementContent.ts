import type {
    AnnouncementItemType,
    DividendAdjustmentContent,
    TradingHoursContent,
} from '@/types/index'

type TradingHoursCellDisplay = {
    className: 'vh-empty' | 'vh-value'
    text: string
}

export function parseStructuredAnnouncementContent(
    announcement: AnnouncementItemType,
): TradingHoursContent | DividendAdjustmentContent | null {
    if (announcement.type !== 2 && announcement.type !== 3) {
        return null
    }

    try {
        return JSON.parse(announcement.content) as TradingHoursContent | DividendAdjustmentContent
    } catch {
        return null
    }
}

export function getAnnouncementDisplayTitle(
    announcement: AnnouncementItemType,
    content: TradingHoursContent | DividendAdjustmentContent | null,
) {
    return content?.documentTitle || announcement.title || ''
}

export function getTradingHoursDates(content: TradingHoursContent) {
    return content.dates?.length ? content.dates : content.headers?.dates || []
}

export function getTradingHoursLabels(content: TradingHoursContent) {
    const fallback = {
        symbol: 'SYMBOL',
        category: 'TYPE',
        sessionGroup: 'MT4 / MT5 TRADING HOURS',
    }

    return {
        symbol: content.headers?.symbol || fallback.symbol,
        category: content.headers?.category || fallback.category,
        sessionGroup: content.headers?.sessionGroup || fallback.sessionGroup,
    }
}

export function getTradingHoursTimezone(content: TradingHoursContent) {
    if (content.timezone) {
        return content.timezone
    }

    const match = [content.documentTitle, content.headers?.sessionGroup]
        .filter(Boolean)
        .map((value) => value!.match(/GMT\s*[+-]\s*\d+/i))
        .find(Boolean)

    return match?.[0]?.replace(/\s+/g, '') || ''
}

export function formatTradingHoursCell(
    value: string | null | undefined,
): TradingHoursCellDisplay {
    const trimmed = value?.trim()

    if (!trimmed) {
        return {
            className: 'vh-empty',
            text: '—',
        }
    }

    return {
        className: 'vh-value',
        text: trimmed,
    }
}

export function formatDividendCell(value: string) {
    const trimmed = value.trim()
    if (!trimmed) return { text: '—', className: 'neutral' }

    const numeric = Number.parseFloat(trimmed.replace(/[^0-9.+-]/g, ''))
    if (Number.isNaN(numeric)) {
        return { text: trimmed, className: 'neutral' }
    }

    if (numeric > 0) {
        return { text: `+${numeric.toFixed(2)}`, className: 'positive' }
    }

    if (numeric < 0) {
        return { text: numeric.toFixed(2), className: 'negative' }
    }

    return { text: '0.00', className: 'neutral' }
}
