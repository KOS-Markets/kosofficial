import BigNumber from "bignumber.js";


import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
dayjs.extend(utc);
dayjs.extend(timezone);

import { useAppStore } from '@/stores/app'



export function browserRedirection (url: string) {
    const userAgentInfo = navigator.userAgent
    if (userAgentInfo.includes('iPhone')) {
        window.location.href = url;
    } else {
        window.open(url)
    }
}


export function generateUUID() {
    let d = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}


export function calculatePipSpread(decimals: number, ask: number, bid: number, round = true) {
    const dec = new BigNumber(decimals);
    const diff = BigNumber(ask).minus(bid);

    if (dec.isNaN() || diff.isNaN() || dec.lt(0) || diff.lt(0)) {
        // throw new Error('decimals 和 difference 必须为非负数字');
        return ''
    }

    // 1 pip = 10^(-decimals)
    const pipSize = new BigNumber(10).pow(dec.negated());

    // 点差 = 差值 / pipSize
    let pips = diff.dividedBy(pipSize);

    if (round) {
        // 四舍五入到整数
        pips = pips.integerValue(BigNumber.ROUND_HALF_UP);
    }

    return pips.toString();
}

export function formatTime(time: string) {
    const store = useAppStore()

    if(store.systemSetting.timezone == '0'){
        return dayjs(Number(time)).format('YYYY-MM-DD')
    }else{
        return dayjs(Number(time)).tz(store.systemSetting.timezone).format('YYYY-MM-DD')
    }
}

export function editImageUrl(url: string) {
    return import.meta.env.VITE_BASE_OSSURL + url
}
