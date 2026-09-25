import request from '@/utils/request'
import type {
    AnnouncementItemType,
    ApiPageData,
    LotteryPrizeRawType,
    SystemSettingType,
    WorldCup2026PrizeId,
    NoticeItem,
} from '@/types/index'

export function iframeCalendar(data: { usi: string | null }) {
    return request.post<string>('/iframe/calendar', data)
}

export function iframeNews(data: { usi: string | null }) {
    return request.post<string>('/iframe/news', data)
}

export function announcementUserList(data: { page: number; size: number }) {
    return request.post<ApiPageData<AnnouncementItemType>>('/announcement/user/list', data)
}

export function announcementUserDetail(data: { id: string }) {
    return request.get<NoticeItem>('/public/getNoticeDetail', data)
}

export function systemSettingSelect() {
    return request.post<SystemSettingType>('/system-setting/user')
}

export function lotteryPrizeAll() {
    return request.post<LotteryPrizeRawType[]>('/lottery/prize/all')
}

export function lotteryCodeClaim(data: { code: string }) {
    return request.post<{ id: WorldCup2026PrizeId }>('/lottery/code/claim', data)
}

// 新增：获取公告列表（分页）
export const getNoticeList = (params: { page: number, size: number, language?: string, order_by_weight?: 'asc' | 'desc' }) => {
  // ✅ 正确：直接传 url 和 params
  return request.get<ApiPageData<NoticeItem>>('/public/getNoticeList', params)
}