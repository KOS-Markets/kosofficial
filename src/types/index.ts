// API 通用响应
export interface ApiResponse<T = unknown> {
    code: number;
    msg?: string;
    data?: T;
    token?: string;
}

export interface ApiPageData<T> {
    list?: T[];
    total: number;
}

//自定义Box类型
export interface CustomBoxType {
    title?: string;
    intro?: string;
    list?: CustomBoxItemType[];
}

export interface CustomBoxItemType {
    icon?: string;
    show?: boolean;
    title?: string;
    intro?: string;
    text?: string;
    option?: OptionItemType[];
    click?: () => void;
}

export interface OptionItemType {
    name: string;
    number: string;
}

//自定义MTBOX类型
export interface CustomMTBoxType {
    title: string;
    intro: string;
    list: string[];
    platform: CustomPlatformItemType[]
}

export interface CustomPlatformItemType {
    icon: string;
    title: string;
    btn: CustomBtnItemType[]
}

export interface CustomBtnItemType {
    btnText: string;
    btnClick: () => void;
}

//菜单类型
export interface MenuItemType {
    name: string;
    subTitle: string;
    path: string;
    icon: string;
    childrenShow: boolean;
    children: MenuChildItemType[];
}

export interface MenuChildItemType {
    name: string;
    subTitle: string;
    path: string;
    icon: string;
}


export interface SystemSettingType {
    id: string;
    timezone: string;
}


export type AnnouncementType = 0 | 1 | 2 | 3

export interface TradingHoursRow {
    symbol: string;
    category: string;
    sessions: string[];
}

export interface TradingHoursContent {
    kind: 'tradingHours';
    documentTitle?: string;
    dates: string[];
    rows: TradingHoursRow[];
    sourceName?: string;
    timezone?: string;
    headers?: {
        symbol?: string;
        category?: string;
        sessionGroup?: string;
        dates?: string[];
    };
}

export interface DividendAdjustmentContent {
    kind: 'dividendAdjustment';
    introParagraphs: string[];
    tableHeaders: string[];
    rows: string[][];
    footerParagraphs: string[];
    sourceName?: string;
    documentTitle?: string;
}

// WebSocket / 行情
// type: 0外汇 1指数 3能源 4贵金属 5股票
export interface CoinItem {
    symbol: string;
    name: string;
    decimal: number;
    type: number;
    leverage: string;
    tradingHours: string;
}

export interface MarketQuote {
    bidPrice: number;
    askPrice: number;
    last: number;
    previousPrice: number;
    symbolsize: number;
    decimals: number;
    up: boolean;
}

export interface PriceUpdate {
    symbol: string;
    bidPrice: number;
    askPrice: number;
    last: number;
    symbolsize: number;
    decimals: number;
}


export interface AnnouncementItemType {
    id: string;
    title: string;
    content: string;
    lang: string;
    created_at: string;
    updated_at: string;
    remark: string;
    weight: number;
    type: number;
    deleted: number;
}

export type WorldCup2026PrizeId = number | string

export interface WorldCup2026Prize {
    id: WorldCup2026PrizeId
    name: string
    img: string
}

export interface LotteryPrizeRawType {
    id: WorldCup2026PrizeId;
    name: string;
    logo: string;
}

export interface WorldCup2026Rule {
    text: string
    type: 'ok' | 'no'
}

export interface WorldCup2026WheelExposed {
    spinToPrizeId: (prizeId: WorldCup2026PrizeId) => boolean
    scrollToSpin: () => void
}
