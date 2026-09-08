import { ref } from 'vue'
import { defineStore } from 'pinia'
import { io, type Socket } from 'socket.io-client';
import type { CoinItem, MarketQuote, PriceUpdate } from '@/types/index'

export const useWsConnectStore = defineStore('wsConnect', () => {
    const socket = ref<Socket | null>(null)
    const market = ref<Record<string, MarketQuote>>({})

    const roomList = ref<string[]>([])

    const coinList = ref<CoinItem[]>([
        { symbol: 'EURUSD.c', name: 'EURUSD', decimal: 5, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },
        { symbol: 'GBPUSD.c', name: 'GBPUSD', decimal: 5, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },
        { symbol: 'USDJPY.c', name: 'USDJPY', decimal: 3, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },
        { symbol: 'USDCHF.c', name: 'USDCHF', decimal: 5, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },

        { symbol: 'AUDCAD.c', name: 'AUDCAD', decimal: 5, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },
        { symbol: 'AUDCHF.c', name: 'AUDCHF', decimal: 5, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },
        { symbol: 'AUDJPY.c', name: 'AUDJPY', decimal: 3, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },
        { symbol: 'AUDNZD.c', name: 'AUDNZD', decimal: 5, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },
        { symbol: 'AUDUSD.c', name: 'AUDUSD', decimal: 5, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },
        { symbol: 'CADCHF.c', name: 'CADCHF', decimal: 5, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },
        { symbol: 'CADJPY.c', name: 'CADJPY', decimal: 3, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },
        { symbol: 'CHFJPY.c', name: 'CHFJPY', decimal: 3, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },
        { symbol: 'EURAUD.c', name: 'EURAUD', decimal: 5, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },
        { symbol: 'EURCAD.c', name: 'EURCAD', decimal: 5, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },
        { symbol: 'EURCHF.c', name: 'EURCHF', decimal: 5, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },
        { symbol: 'EURGBP.c', name: 'EURGBP', decimal: 5, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },
        { symbol: 'EURJPY.c', name: 'EURJPY', decimal: 3, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },
        { symbol: 'EURNZD.c', name: 'EURNZD', decimal: 5, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },
        { symbol: 'EURSGD.c', name: 'EURSGD', decimal: 5, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },
        { symbol: 'GBPAUD.c', name: 'GBPAUD', decimal: 5, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },
        { symbol: 'GBPCAD.c', name: 'GBPCAD', decimal: 5, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },
        { symbol: 'GBPCHF.c', name: 'GBPCHF', decimal: 5, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },
        { symbol: 'GBPJPY.c', name: 'GBPJPY', decimal: 3, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },
        { symbol: 'GBPNZD.c', name: 'GBPNZD', decimal: 5, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },
        { symbol: 'GBPSGD.c', name: 'GBPSGD', decimal: 5, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },
        { symbol: 'NZDCAD.c', name: 'NZDCAD', decimal: 5, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },
        { symbol: 'NZDCHF.c', name: 'NZDCHF', decimal: 5, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },
        { symbol: 'NZDJPY.c', name: 'NZDJPY', decimal: 3, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },
        { symbol: 'NZDSGD.c', name: 'NZDSGD', decimal: 5, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },
        { symbol: 'NDZUSD.c', name: 'NDZUSD', decimal: 5, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },
        { symbol: 'USDCAD.c', name: 'USDCAD', decimal: 5, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },
        { symbol: 'USDCHN.c', name: 'USDCHN', decimal: 5, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },
        { symbol: 'USDHKD.c', name: 'USDHKD', decimal: 5, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },
        { symbol: 'USDMXN.c', name: 'USDMXN', decimal: 5, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },
        { symbol: 'USDNOK.c', name: 'USDNOK', decimal: 5, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },
        { symbol: 'USDPLN.c', name: 'USDPLN', decimal: 5, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },
        { symbol: 'USDSEK.c', name: 'USDSEK', decimal: 5, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },
        { symbol: 'USDSGD.c', name: 'USDSGD', decimal: 5, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },
        { symbol: 'USDZAR.c', name: 'USDZAR', decimal: 5, type: 0, leverage: '200-2000', tradingHours: '0:05-23:55' },
    
        
        

        { symbol: 'SP500', name: 'SP500', decimal: 1, type: 1, leverage: '200', tradingHours: '01:05-23:55' },
        { symbol: 'NAS100', name: 'NAS100', decimal: 1, type: 1, leverage: '200', tradingHours: '01:05-23:55' },
        { symbol: 'JP225', name: 'JP225', decimal: 1, type: 1, leverage: '200', tradingHours: '01:05-23:55' },
        { symbol: 'CNA50', name: 'CNA50', decimal: 1, type: 1, leverage: '200', tradingHours: '01:05-23:55' },

        { symbol: 'AUS200', name: 'AUS200', decimal: 1, type: 1, leverage: '200', tradingHours: '01:05-23:55' },
        { symbol: 'DJI30', name: 'DJI30', decimal: 1, type: 1, leverage: '200', tradingHours: '01:05-23:55' },
        { symbol: 'EU50', name: 'EU50', decimal: 1, type: 1, leverage: '200', tradingHours: '01:05-23:55' },
        { symbol: 'FRA40', name: 'FRA40', decimal: 1, type: 1, leverage: '200', tradingHours: '01:05-23:55' },
        { symbol: 'GER30', name: 'GER30', decimal: 1, type: 1, leverage: '200', tradingHours: '01:05-23:55' },
        { symbol: 'HK50', name: 'HK50', decimal: 1, type: 1, leverage: '200', tradingHours: '04:20-07:00；08:00-11:30；12:15-21:45' },
        { symbol: 'SPA35', name: 'SPA35', decimal: 1, type: 1, leverage: '200', tradingHours: '09:05-20:55' },
        { symbol: 'UK100', name: 'UK100', decimal: 1, type: 1, leverage: '200', tradingHours: '01:05-23:55' },





        { symbol: 'XBTUSD', name: 'Bitcoin', decimal: 2, type: 2, leverage: '500', tradingHours: '00:05-24:00' },
        { symbol: 'XETUSD', name: 'Ethereum', decimal: 2, type: 2, leverage: '500', tradingHours: '00:05-24:00' },
        { symbol: 'SOLUSD', name: 'Solana', decimal: 2, type: 2, leverage: '500', tradingHours: '00:05-24:00' },

        { symbol: 'ADAUSD', name: 'Cardano', decimal: 4, type: 2, leverage: '500', tradingHours: '00:05-24:00' },
        { symbol: 'DOTUSD', name: 'Polkadot', decimal: 3, type: 2, leverage: '500', tradingHours: '00:05-24:00' },
        { symbol: 'DSHUSD', name: 'Dash', decimal: 2, type: 2, leverage: '500', tradingHours: '00:05-24:00' },
        { symbol: 'TRXUSD', name: 'TRON', decimal: 4, type: 2, leverage: '500', tradingHours: '00:05-24:00' },
        { symbol: 'XBNUSD', name: 'Bitcoin Cash', decimal: 2, type: 2, leverage: '500', tradingHours: '00:05-24:00' },
        { symbol: 'XLCUSD', name: 'Litecoin', decimal: 2, type: 2, leverage: '500', tradingHours: '00:05-24:00' },




        { symbol: 'XBRUSD.c', name: 'XBRUSD', decimal: 3, type: 3, leverage: '200', tradingHours: '01:05-23:55' },
        { symbol: 'XNGUSD.c', name: 'XNGUSD', decimal: 4, type: 3, leverage: '200', tradingHours: '01:05-23:55' },
        { symbol: 'XTIUSD.c', name: 'XTIUSD', decimal: 3, type: 3, leverage: '200', tradingHours: '01:05-23:55' },



        { symbol: 'XAUUSD.c', name: 'XAUUSD', decimal: 2, type: 4, leverage: '200-2000', tradingHours: '01:10-23:55' },
        { symbol: 'XAGUSD.c', name: 'XAGUSD', decimal: 3, type: 4, leverage: '200-2000', tradingHours: '01:10-23:55' },



        { symbol: 'AAPL', name: 'AAPL', decimal: 2, type: 5, leverage: '20', tradingHours: '16:35-22:55' },
        { symbol: 'AMZN', name: 'AMZN', decimal: 2, type: 5, leverage: '20', tradingHours: '16:35-22:55' },
        { symbol: 'META', name: 'META', decimal: 2, type: 5, leverage: '20', tradingHours: '16:35-22:55' },
        { symbol: 'TSLA', name: 'TSLA', decimal: 2, type: 5, leverage: '20', tradingHours: '16:35-22:55' },

        { symbol: 'BIDU', name: 'BIDU', decimal: 2, type: 5, leverage: '20', tradingHours: '16:35-22:55' },
        { symbol: 'BILI', name: 'BILI', decimal: 2, type: 5, leverage: '20', tradingHours: '16:35-22:55' },
        { symbol: 'BNTX', name: 'BNTX', decimal: 2, type: 5, leverage: '20', tradingHours: '16:35-22:55' },
        { symbol: 'JD', name: 'JD', decimal: 2, type: 5, leverage: '20', tradingHours: '16:35-22:55' },
        { symbol: 'LI', name: 'LI', decimal: 2, type: 5, leverage: '20', tradingHours: '16:35-22:55' },
        { symbol: 'MSFT', name: 'MSFT', decimal: 2, type: 5, leverage: '20', tradingHours: '16:35-22:55' },
        { symbol: 'PDD', name: 'PDD', decimal: 2, type: 5, leverage: '20', tradingHours: '16:35-22:55' },

        
        // 期货

        //type: 0外汇 1指数 2加密货币cfds 3能源 4贵金属 5股票
    ])


    const connectWs = () => {

        //设置初始价格
        coinList.value.forEach(item => {
            market.value[item.symbol] = {
                bidPrice: 0,//买价
                askPrice: 0,//卖价
                last: 0,
                previousPrice: 0,
                symbolsize: 0,
                decimals: 2,
                up: true
            }
        })


        socket.value = io(import.meta.env.VITE_WS_URL, {
            withCredentials: true,  // 支持跨域凭证
            transports: ['websocket']  // 优先使用 WebSocket
        });

        // 接收实时quote数据
        socket.value?.on('price.update', (arr: PriceUpdate[]) => {
            arr.forEach((item) => {
                const marketItem = market.value[item.symbol]
                if (!marketItem) return

                marketItem.bidPrice = item.bidPrice
                marketItem.askPrice = item.askPrice
                marketItem.last = item.last
                marketItem.symbolsize = item.symbolsize
                marketItem.decimals = item.decimals
                marketItem.up = marketItem.bidPrice >= marketItem.previousPrice
                marketItem.previousPrice = marketItem.bidPrice
            })
        });

        coinList.value.map((item) => {
            if(item.type == 0)
            roomList.value.push(`price:${item.symbol}`)
        })

        // 第一次连接和重连的时候都去访问这个room数组进行订阅
        socket.value?.on("connect", () => {
            subscribeToRooms(roomList.value);
        });

    }

    const subscribePrice = (type: number) => {
        let list: string[] = []
        coinList.value.forEach((item) => {
            if(item.type == type){
                if(!roomList.value.includes(`price:${item.symbol}`))
                    list.push(`price:${item.symbol}`)
            }
        })

        if(list.length != 0){
            roomList.value.push(...list)
            subscribeToRooms(list)
        }
    }


    const subscribeToRooms = (list: string[]) => {
        //取消订阅
        socket.value?.emit("unsubscribe", [...list]);

        //订阅
        socket.value?.emit("subscribe", [...list]);
    }

    return { socket, market, connectWs, coinList, subscribePrice }
})
