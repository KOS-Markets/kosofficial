import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

import type { CustomBoxType } from '@/types/index'

import icon1 from '@/assets/img/trading/account/cent account.svg?raw'
import icon2 from '@/assets/img/trading/account/standard account.svg?raw'
import icon3 from '@/assets/img/trading/account/premium account.svg?raw'
import icon4 from '@/assets/img/trading/account/pro account.svg?raw'
import yes from '@/assets/img/trading/account/yes.svg?raw'
import no from '@/assets/img/trading/account/no.svg?raw'

import { useI18n } from 'vue-i18n'
import ar from '@/language/lang/ar'
import { educationLocales } from './educationLocales'


export const useStaticDataStore = defineStore('staticData', () => {
    const { t } = useI18n()

    const accountDataList = ref<CustomBoxType>(
        {
            title: t('accountSentence'),
            list: [
                {
                    icon: icon1,
                    title: t('accountSentence1'),
                    intro: 'CENT',
                    text: 'US Cent',
                    option: [
                        {
                            name: t('accountSentence6'),
                            number: t('accountSentence7', {num: '1.6'})
                        },
                        {
                            name: t('accountSentence8'),
                            number: no
                        },
                        {
                            name: t('accountSentence9'),
                            number: t('accountSentence10', {num: '1:2000'})
                        },
                        {
                            name: t('accountSentence11'),
                            number: no
                        },
                        {
                            name: t('accountSentence12'),
                            number: '50%'
                        },
                        {
                            name: t('accountSentence13'),
                            number: yes
                        },
                        {
                            name: t('accountSentence14'),
                            number: no
                        },
                        {
                            name: t('accountSentence15'),
                            number: t('accountSentence16')
                        },
                        {
                            name: t('accountSentence17'),
                            number: no
                        },
                        {
                            name: t('accountSentence18'),
                            number: yes
                        },
                        {
                            name: t('accountSentence19'),
                            number: yes
                        },
                        {
                            name: t('accountSentence20'),
                            number: yes
                        },
                        {
                            name: t('accountSentence21'),
                            number: yes
                        },
                        {
                            name: t('accountSentence22'),
                            number: yes
                        },
                    ]
    
                },
                {
                    icon: icon2,
                    title: t('accountSentence2'),
                    intro: 'STD',
                    text: 'USD',
                    option: [
                        {
                            name: t('accountSentence6'),
                            number: t('accountSentence7', {num: '2.1'})
                        },
                        {
                            name: t('accountSentence8'),
                            number: no
                        },
                        {
                            name: t('accountSentence9'),
                            number: t('accountSentence10', {num: '1:2000'})
                        },
                        {
                            name: t('accountSentence11'),
                            number: yes
                        },
                        {
                            name: t('accountSentence12'),
                            number: '50%'
                        },
                        {
                            name: t('accountSentence13'),
                            number: yes
                        },
                        {
                            name: t('accountSentence14'),
                            number: yes
                        },
                        {
                            name: t('accountSentence15'),
                            number: t('accountSentence16')
                        },
                        {
                            name: t('accountSentence17'),
                            number: yes
                        },
                        {
                            name: t('accountSentence18'),
                            number: yes
                        },
                        {
                            name: t('accountSentence19'),
                            number: yes
                        },
                        {
                            name: t('accountSentence20'),
                            number: yes
                        },
                        {
                            name: t('accountSentence21'),
                            number: yes
                        },
                        {
                            name: t('accountSentence22'),
                            number: yes
                        },
                    ]
    
                },
                {
                    icon: icon3,
                    title: t('accountSentence3'),
                    intro: 'STP',
                    text: 'USD',
                    option: [
                        {
                            name: t('accountSentence6'),
                            number: t('accountSentence7', {num: '1.6'})
                        },
                        {
                            name: t('accountSentence8'),
                            number: no
                        },
                        {
                            name: t('accountSentence9'),
                            number: t('accountSentence10', {num: '1:2000'})
                        },
                        {
                            name: t('accountSentence11'),
                            number: yes
                        },
                        {
                            name: t('accountSentence12'),
                            number: '50%'
                        },
                        {
                            name: t('accountSentence13'),
                            number: yes
                        },
                        {
                            name: t('accountSentence14'),
                            number: yes
                        },
                        {
                            name: t('accountSentence15'),
                            number: t('accountSentence16')
                        },
                        {
                            name: t('accountSentence17'),
                            number: yes
                        },
                        {
                            name: t('accountSentence18'),
                            number: yes
                        },
                        {
                            name: t('accountSentence19'),
                            number: yes
                        },
                        {
                            name: t('accountSentence20'),
                            number: yes
                        },
                        {
                            name: t('accountSentence21'),
                            number: yes
                        },
                        {
                            name: t('accountSentence22'),
                            number: yes
                        },
                    ]
    
                },
                {
                    icon: icon4,
                    title: t('accountSentence4'),
                    intro: 'ECN',
                    text: 'USD',
                    option: [
                        {
                            name: t('accountSentence6'),
                            number: no
                        },
                        {
                            name: t('accountSentence8'),
                            number: '7'
                        },
                        {
                            name: t('accountSentence9'),
                            number: t('accountSentence10', {num: '1:2000'})
                        },
                        {
                            name: t('accountSentence11'),
                            number: yes
                        },
                        {
                            name: t('accountSentence12'),
                            number: '50%'
                        },
                        {
                            name: t('accountSentence13'),
                            number: yes
                        },
                        {
                            name: t('accountSentence14'),
                            number: yes
                        },
                        {
                            name: t('accountSentence15'),
                            number: t('accountSentence16')
                        },
                        {
                            name: t('accountSentence17'),
                            number: yes
                        },
                        {
                            name: t('accountSentence18'),
                            number: yes
                        },
                        {
                            name: t('accountSentence19'),
                            number: yes
                        },
                        {
                            name: t('accountSentence20'),
                            number: yes
                        },
                        {
                            name: t('accountSentence21'),
                            number: yes
                        },
                        {
                            name: t('accountSentence22'),
                            number: yes
                        },
                    ]
    
                },
            ]
        }
    )



    //en
    const enBasicForexEducationList = reactive([
        {
            title: `1. Why Trade Forex`,
            intro: `Indeed, the foreign exchange market, often referred to as Forex or 
FX, involves the trading of one currency for another. This market is 
utilized by various participants, including multinational corporations, 
to facilitate international trade and manage currency exposure. Multinational companies often need to convert currencies to pay for expenses in different countries where they operate or sell their products.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/SsvOt8SqIkSSoP0EdBBRg" title="1. Why Trade Forex"></iframe></div>`
        },
        {
            title: `2. When To Trade Forex`,
            intro: `Even though the forex market operates 24 hours a day, 
it's important to exercise caution and not trade excessively. 
Trading too frequently can lead to fatigue, increased risks, and 
potentially poor decision-making. Effective traders focus on quality 
trades rather than attempting to trade every minute the market is open.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/VmaRZl5ejUyOZoP6c5NI2A" title="2. When To Trade Forex"></iframe></div>`
        },
        {
            title: `3. Trading Terminology Or Where Am I Going Long`,
            intro: `Trading jargon can often sound like a foreign language to 
those unfamiliar with the trading world. Traders use specialized terms
 and phrases to communicate effectively about market concepts, 
strategies, and actions. Understanding this language is crucial for anyone looking to navigate the world of trading and make informed decisions in the financial markets.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/rGjuPDUUTEKcbNA9Jo0I4A" title="3. Trading Terminology Or Where Am I Going Long"></iframe></div>`
        },
        {
            title: `4. How To Trade With Leverage`,
            intro: `In the Forex market, trading in small quantities, such as 1 Euro at a 
time, would indeed result in minimal profits or losses. To address this, 
currencies are traded in standardized quantities called "Lots." 
A micro lot consists of 1,000 units, a mini lot is made up of 10,000 units, 
and a standard lot comprises 100,000 units. These lot sizes allow traders to engage in meaningful transactions and manage risk effectively.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/ntnioeBQo0GYv2dPL2nTg" title="4. How To Trade With Leverage"></iframe></div>`
        },
        {
            title: `5. What Is A PIP`,
            intro: `A PIP, also known as a point or percentage in point, represents the
 smallest price move that a given exchange rate can make based 
on market convention. For most currency pairs, a PIP is equivalent 
to 0.0001, or one ten-thousandth of the quoted decimal price.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/f8fMDDBkCU2rLfK2ZWMUBA" title="5. What Is A PIP"></iframe></div>`
        },
        {
            title: `6. How To Place A Trade In Forex`,
            intro: `In the Forex market, you trade one currency for another with the
 expectation that the currency you've bought will appreciate in value
 relative to the one you've sold. Each Forex transaction involves two 
currencies, as you both buy one currency and sell another simultaneously.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/JeRoXr17z0uTGQVVqRRvQ" title="6. How To Place A Trade In Forex"></iframe></div>`
        },
        {
            title: `7. Types Of Forex Orders`,
            intro: `An order is a directive from a trader to a broker that specifies how
 the trader wants to enter or exit the market. In this lesson, you will 
learn about some of the most common types of order tabs.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/CJeYBH0Mx02ZnCUzGddExw" title="7. Types Of Forex Orders"></iframe></div>`
        },
        {
            title: `8. Technical Analysis In Forex`,
            intro: `The theory behind technical analysis is based on the belief that
 future price movements can be predicted by analyzing historical 
market data.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/mC8YI9ZecUONN1M6B16tg" title="8. Technical Analysis In Forex"></iframe></div>`
        },
        {
            title: `9. Fundamental Analysis In Forex`,
            intro: `Fundamental Analysis involves predicting future price movements
 by analyzing the overall economic conditions and considering factors
 like interest rates, employment, housing, production, and
 manufacturing to make informed forecasts.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/oyPQto5jDkehNPj15VMz0Q" title="9. Fundamental Analysis In Forex"></iframe></div>`
        },
        {
            title: `10. Types Of Forex Charts`,
            intro: `In today's lesson, our focus will be on exploring the most widely 
used types of charts in trading and technical analysis.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/6hIjhkMpVUQTdmSc3U6GA" title="10. Types Of Forex Charts"></iframe></div>`
        },
        {
            title: `11. Support And Resistance In Forex`,
            intro: `Support and resistance are fundamental concepts in technical analysis. 
These levels represent specific price points where the movement of
 an asset is likely to experience a halt or a reversal due to market
 psychology and historical price action. Support refers to a price level where a security or asset tends to stop falling and might even bounce back, while resistance indicates a level at which the price often halts its upward movement and might reverse. These levels are crucial for traders and analysts to make informed decisions about entry and exit points in the market.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/039z6p2HgkaZuno8YykvLg" title="11. Support And Resistance In Forex"></iframe></div>`
        },
        {
            title: `12. Trendlines`,
            intro: `Support and resistance lines can take on various forms, including 
diagonal lines known as trendlines. Trendlines are drawn by
 connecting two or more price peaks or troughs, creating a 
diagonal support or resistance line that reflects the trend's direction.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/JtcCiz2UokKkJBKM1gNYw" title="12. Trendlines"></iframe></div>`
        },
    ])

    const enFibonacciList = reactive([
        {
            title: `1. Fibonacci`,
            intro: `Fibonacci, an Italian mathematician, is renowned for discovering the 
Fibonacci sequence, which is a series where each number is the
 sum of the two preceding numbers. For example, 1 + 1 = 2,
 1 + 2 = 3, 2 + 3 = 5, and so on.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/Ta6rBSYjUuQU0UgXf5ag" title="1. Fibonacci"></iframe></div>`
        },
        {
            title: `2. Forex Fibonacci Extensions`,
            intro: `The Fibonacci Extension is a tool used to establish profit targets, 
employing the same Fibonacci sequence ratios as the Fibonacci
 retracement.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/aT1fnGeKAEayGitdqB4Zmw" title="2. Forex Fibonacci Extensions"></iframe></div>`
        },
        {
            title: `3. Learn Forex Fibonacci Fan And Arcs`,
            intro: `Fibonacci ratios are utilized through tools like Fibonacci fans and 
arcs to identify potential support and resistance levels. Similar to
 other Fibonacci tools, fans are drawn from the swing low to the
 swing high.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/dwAMf39kW9BLbe0NaEXw" title="3. Learn Forex Fibonacci Fan And Arcs"></iframe></div>`
        },
        {
            title: `4. Learn Forex Combining Fibonacci With Other Technical Analysis Tools`,
            intro: `Combining Fibonacci retracements with other technical analysis 
tools can be helpful due to the subjective nature of drawing them 
and to enhance analysis accuracy.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/vWRmIxejAkGKhlpVP3pBA" title="4. Learn Forex Combining Fibonacci With Other Technical Analysis Tools"></iframe></div>`
        },
    ])

    const enUnderstandingCandlesticksList = reactive([
        {
            title: `1. Candlesticks`,
            intro: `Candlestick trading is a powerful tool in technical analysis, 
offering insights into market sentiment, conditions, trend changes, 
and price reversals.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/RiyHzX8zhUq5ttS9UM9FhQ" title="1. Candlesticks"></iframe></div>`
        },
        {
            title: `2. Doji Candlestick In Forex`,
            intro: `A "Doji" candlestick pattern is formed when the opening and 
closing prices are the same, resulting in a horizontal line for its real 
body. This pattern indicates indecision in the market.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/yYr9FleiLEKmpOYZNao63Q" title="2. Doji Candlestick In Forex"></iframe></div>`
        },
        {
            title: `3. Marubozu Candlestick In Forex`,
            intro: `"Marubozu" is a candlestick pattern that is the complete opposite 
of a "Doji." While a Doji indicates market indecision, a Marubozu
 reflects strong conviction in the price direction.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/wXq1jGroQkq3ozuSULoqw" title="3. Marubozu Candlestick In Forex"></iframe></div>`
        },
        {
            title: `4. Hammer And Hanging Man Candlesticks`,
            intro: `A "hammer" is a bullish reversal signal characterized by a small
 real body, a very small or no upper shadow, and a long lower shadow.
 Similarly, the "hanging man" appears the same as a hammer, 
but it's typically found in an uptrend.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/IH6O1EyfjUCrSayE5TnYLw" title="4. Hammer And Hanging Man Candlesticks"></iframe></div>`
        },
        {
            title: `5. Shooting Star And Inverted Hammer Candlestick`,
            intro: `The "shooting star" is a bearish reversal signal characterized by a 
small real body, a very small or no lower shadow, and a long upper 
shadow that's at least twice the size of the real body. Conversely, the
 "inverted hammer" is often considered a bullish reversal signal.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/2Sb0e00vUm86wMeQx4Tng" title="5. Shooting Star And Inverted Hammer Candlestick"></iframe></div>`
        },
        {
            title: `6. Bullish Piercing Pattern`,
            intro: `The "bullish piercing pattern" is a double candlestick reversal signal 
with a bullish pattern. The first candlestick is a long bearish candle, 
followed by a long bullish candle that closes above the midpoint of
 the first candle, suggesting a potential bullish reversal.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/UY8BNhdQ10GK6Uflj8sFtw" title="6. Bullish Piercing Pattern"></iframe></div>`
        },
        {
            title: `7. Dark Cloud Cover Pattern`,
            intro: `The "dark cloud cover" is a two-candlestick bearish reversal pattern. 
The first candle forms a long bullish pattern, and the second is a
 long bearish candle that closes below the midpoint of the first candle,
 signaling potential downward reversal.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/6iSfM5402EOHlP9yyYHpMA" title="7. Dark Cloud Cover Pattern"></iframe></div>`
        },
        {
            title: `8. Bullish And Bearish Engulfing Patterns`,
            intro: `The "bullish engulfing pattern" is a two-candlestick bullish reversal signal.
 The first candlestick is bearish, and the second candlestick is 
bullish and completely engulfs the range of the first candlestick, 
indicating potential upward reversal.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/cfJpbfLvkSIefMmAuraFg" title="8. Bullish And Bearish Engulfing Patterns"></iframe></div>`
        },
        {
            title: `9. Tweezer Tops And Bottoms`,
            intro: `"Tweezer Tops" is a bearish reversal pattern formed by two 
candlesticks with nearly identical highs, indicating potential 
resistance and a possible downward reversal.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/7sQo9e4DEuHEWMSJ3Wcmw" title="9. Tweezer Tops And Bottoms"></iframe></div>`
        },
        {
            title: `10. Morning And Evening Star Patterns`,
            intro: `The "Morning Star" is a bullish reversal pattern consisting of three 
candlesticks. The first candlestick is long and bearish, followed by a 
small Doji candle indicating market indecision, and finally a long
 bullish candle closing above the midpoint of the first candle, 
suggesting a potential upward reversal.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/QpR9EKmBW0phW9Git0uaQ" title="10. Morning And Evening Star Patterns"></iframe></div>`
        },
        {
            title: `11. 3 White Soldiers 3 Black Crows`,
            intro: `The "Three White Soldiers" is a bullish reversal signal characterized
 by three consecutive candlesticks with large real bodies and minimal 
or absent shadows. This pattern suggests a strong upward reversal
 in the market.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/Q2l1qsDsw0Khph9RIRbYyw" title="11. 3 White Soldiers 3 Black Crows"></iframe></div>`
        },
        {
            title: `12. 3 Insideup 3 Inside Down Pattern`,
            intro: `The Three Inside Up is a bullish reversal pattern involving three
 candlesticks. The first candle is long and bearish, followed by a 
bullish candle that closes at least at the midpoint of the first candle. 
The third candle is also bullish and closes above the opening price of the first candle, establishing a new high. Conversely, the Three Inside Down is the opposite signal. The first session features a long bullish candle, followed by a bearish candle that closes at least at the midpoint of the first. The third candle is the reversal signal, closing below the opening price of the first candle and confirming the reversal.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/tkOWVRa6Z02sEMjf1wVFCQ" title="12. 3 Insideup 3 Inside Down Pattern"></iframe></div>`
        },
        {
            title: `13. Rising And Falling Three Methods`,
            intro: `The Rising Three Method is a noteworthy bullish continuation pattern
 in the five-candlestick method. It starts with a long bullish candle,
 followed by three small bearish candles that remain within the range
 of the first candle. Finally, the pattern concludes with another long 
bullish candle that closes above the closing price of the first candle.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/UntkQEZku02DctJn3WM0A" title="13. Rising And Falling Three Methods"></iframe></div>`
        },
    ])

    const enChartFormationPatternsList = reactive([
        {
            title: `1. Forex Double Top And Double Bottom Formation Patterns`,
            intro: `The Double Top is a bearish reversal pattern formed during a strong
 upward movement. It features two consecutive peaks with nearly
 identical highs. Typically, the first peak is a part of an uptrend and
 establishes a new high. Conversely, the Double Bottom is the opposite 
pattern, emerging after a substantial downward move, and indicates a potential bullish reversal.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/egoZraIp1ESrUfzPIYDO2w" title="1. Forex Double Top And Double Bottom Formation Patterns"></iframe></div>`
        },
        {
            title: `2. Learn Forex Head And Shoulders Pattern`,
            intro: `The head and shoulders pattern is a bearish reversal pattern that 
often emerges after a strong upward trend. It comprises a peak 
termed the left shoulder, a higher peak referred to as the head, and 
a lower peak designated as the right shoulder. This formation
 indicates a potential trend reversal to the downside.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/WVSHKcDEJEeghi5fQsoQ" title="2. Learn Forex Head And Shoulders Pattern"></iframe></div>`
        },
        {
            title: `3. Forex Inverse Head And Shoulders Pattern`,
            intro: `The inverse head and shoulders is a bullish reversal pattern that
 develops after a strong downtrend. It comprises a low forming the 
left shoulder, a lower low forming the head, and a higher low forming
 the right shoulder. The neckline is drawn by connecting the highs
 between the shoulders. This pattern signals a potential trend reversal to the upside.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/UfvDbUN0k2IZgnuGViWbw" title="3. Forex Inverse Head And Shoulders Pattern"></iframe></div>`
        },
        {
            title: `4. Forex Bull Flag Formation Patterns`,
            intro: `A bull flag is a bullish continuation pattern that forms within an uptrend, 
characterized by a strong upward move (flagpole) followed by a 
consolidation phase (flag). This pattern suggests that the market is 
likely to continue moving higher after the consolidation period.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/hBvXTQZxbkqxahUsr8a62g" title="4. Forex Bull Flag Formation Patterns"></iframe></div>`
        },
        {
            title: `5. Forex Bear Flag Patterns`,
            intro: `A bear flag is a continuation pattern that occurs within a bearish trend, 
characterized by a strong downward move (flagpole) followed by a 
consolidation phase (flag). This pattern indicates that the market is 
likely to continue moving lower after the consolidation period.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/NttidUiuUe4nYUImkrrGg" title="5. Forex Bear Flag Patterns"></iframe></div>`
        },
        {
            title: `6. Forex Bullish And Bearish Pennant Formation`,
            intro: `A bullish pennant is a continuation pattern seen within an ongoing 
bullish trend, characterized by a strong upward move (flagpole)
 followed by a consolidation phase (pennant). Conversely, a bearish 
pennant is a continuation pattern occurring within a downtrend, marked by a strong downward movement followed by consolidation.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/aJtufBshLECnyL1FDcxqQ" title="6. Forex Bullish And Bearish Pennant Formation"></iframe></div>`
        },
        {
            title: `7. Forex Falling Wedge Pattern`,
            intro: `A falling wedge is a bullish formation pattern characterized by 
lower lows and lower highs in the price, where the resistance line 
is steeper than the support line.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/N1Z39i5UsU6cmFlcOSXw" title="7. Forex Falling Wedge Pattern"></iframe></div>`
        },
        {
            title: `8. Forex Ascending And Descending Triangle Formations`,
            intro: `An ascending triangle is a bullish continuation pattern that forms 
during an uptrend, where the price consolidates under a resistance
 level while making higher lows. Conversely, a descending triangle
 is a bearish continuation pattern occurring in a downtrend, where the price consolidates above a support level while forming lower highs.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/zlwBXeFEkKdvxF0eNUAg" title="8. Forex Ascending And Descending Triangle Formations"></iframe></div>`
        },
        {
            title: `9. Forex Symmetrical Triangle Pattern`,
            intro: `A neutral chart formation is known as a symmetrical triangle, which 
occurs when the resistance line is sloping downwards and the support 
line is sloping upwards. As these lines converge, a breakout is 
anticipated due to the tightening price range and diminishing volatility.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/JSr4DEPLE2SDMS2DyaQVA" title="9. Forex Symmetrical Triangle Pattern"></iframe></div>`
        },
        {
            title: `10. Forex Box Range`,
            intro: `A neutral chart pattern is characterized by a box range, which occurs 
during a prolonged period of market indecision. This pattern is defined
 by strong and parallel support and resistance lines, indicating that 
neither bullish nor bearish sentiment is dominant.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/KrGz4iFH0kvxhji3X7sYQ" title="10. Forex Box Range"></iframe></div>`
        },
        {
            title: `11. Forex Cup And Handle Formation Pattern`,
            intro: `The cup and handle pattern is a bullish continuation pattern characterized 
by a U-shaped price movement forming the cup, followed by a 
small and sharp downward movement at resistance, creating the handle. 
This pattern is named for its resemblance to a teacup and suggests a potential continuation of the upward trend.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/wakgBjbUn0ufTT8pZXhisQ" title="11. Forex Cup And Handle Formation Pattern"></iframe></div>`
        },
        {
            title: `12. Forex Inverse Cup And Handle Pattern`,
            intro: `The inverse cup and handle pattern is a bearish continuation pattern 
formed by an inverted U-shaped price movement representing the 
cup, followed by a small and sharp upward movement resembling the 
handle. This pattern suggests a potential continuation of the downward trend.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/opVk1D06L0Gp5NXNysdsQ" title="12. Forex Inverse Cup And Handle Pattern"></iframe></div>`
        },
        {
            title: `13. Forex Rising Wedge Pattern`,
            intro: `rising wedge is a bearish formation pattern characterized by higher 
highs and higher lows in the price, where the support line is steeper
 than the resistance line. This pattern indicates that each new high is 
formed with decreasing momentum, suggesting underlying weakness
 in the market.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/wKPIUstbECtV0G6GVzuww" title="13. Forex Rising Wedge Pattern"></iframe></div>`
        },
    ])

    const enForexIndicatorsList = reactive([
        {
            title: `1. Forex Indicators`,
            intro: `The Relative Strength Index (RSI), a momentum indicator, assesses 
overbought and oversold conditions within the market.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/SPyDWUb8kSHCpbxty33RQ" title="1. Forex Indicators"></iframe></div>`
        },
        {
            title: `2. Forex RSI Stochastic Oscillator`,
            intro: `The stochastic oscillator, a momentum indicator, gauges overbought 
and oversold market conditions. Generally, a reading above 80 
indicates overbought conditions, while a reading below 20 
signifies oversold conditions.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/hsHC3S2lUCtkig75XfkPg" title="2. Forex RSI Stochastic Oscillator"></iframe></div>`
        },
        {
            title: `3. Forex ATR Average True Range`,
            intro: `The ATR (Average True Range) serves as a volatility indicator by
 calculating the range between session highs and lows, then 
averaging that range over a specified number of sessions, such as 
14 days on a daily chart.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/d9tQeXKBxEuGnHVBz1YoQ" title="3. Forex ATR Average True Range"></iframe></div>`
        },
        {
            title: `4. Forex Moving Average`,
            intro: `If you aim to smoothen price fluctuations, the moving average is a 
valuable technical indicator that represents the average price over
 a specified number of periods for a stock.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/s84GfIkQkaPSd8xXes4Dw" title="4. Forex Moving Average"></iframe></div>`
        },
        {
            title: `5. Forex Moving Average Convergence Divergence MACD`,
            intro: `MACD, or Moving Average Convergence Divergence, is a
momentum indicator that illustrates the relationship between 
two moving averages of prices.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/VbBUDTGmBE6dZFatgRs65A" title="5. Forex Moving Average Convergence Divergence MACD"></iframe></div>`
        },
        {
            title: `6. Forex Average Directional Index ADX`,
            intro: `The Average Directional Index (ADX) is a directional movement
 indicator used to assess trend strength and direction. It comprises 
four primary components: the ADX line, the +Di Line, the -Di Line,
 and the 20 level.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/XvZDxTamF0iul4YoMgW6Q" title="6. Forex Average Directional Index ADX"></iframe></div>`
        },
        {
            title: `7. Forex Bollinger Bands`,
            intro: `Bollinger Bands are a volatility indicator composed of a central 
moving average and two price channels, known as The Bands, 
positioned above and below the moving average.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/8P3JSy5gDUuY8bn3oGPXow" title="7. Forex Bollinger Bands"></iframe></div>`
        },
        {
            title: `8. Forex Parabolic SAR`,
            intro: `Parabolic SAR is a trend-following indicator that uses dots 
positioned above and below the price to indicate trends.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/aMAPUUctak1VUGQPUOFUA" title="8. Forex Parabolic SAR"></iframe></div>`
        },
        {
            title: `9. Forex Ichimoku Kinko Hyo`,
            intro: `Ichimoku is a trend direction momentum indicator that provides
 trading signals for support and resistance levels. Its main components 
consist of the Tenkan-Sen Line, Kijun-Sen Line, Chikou Span, 
and the Kumo Cloud.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/5B4oZb1HE0G0GNADMggKig" title="9. Forex Ichimoku Kinko Hyo"></iframe></div>`
        },
        {
            title: `10. Forex Pivot Points`,
            intro: `Pivot Points are technical indicators utilized to identify potential 
support and resistance zones.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/jRwlZT9jmEaQofaSy60BQ" title="10. Forex Pivot Points"></iframe></div>`
        },
    ])

    
    const enTimingInForexList = reactive([
        {
            title: `1. Timing Your Entries When Trading Forex`,
            intro: `Approximately fifty percent of a successful trade depends on timing.
 Entering too early poses the risk of being trapped in the wrong direction, 
while entering too late can erode most of your profit. This video will 
cover several tips to assist you in achieving optimal timing.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/VXnKjxjf9kmJz5QDIthE0A" title="1. Timing Your Entries When Trading Forex"></iframe></div>`
        },
        {
            title: `2. Timing Your Exits When Trading Forex`,
            intro: `Ensuring precise trade exits is equally crucial as well-timed entries. 
In this video, I will unveil strategies to assist you in achieving this objective.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/uYcN8de9kC7vinwOU4QuQ" title="2. Timing Your Exits When Trading Forex"></iframe></div>`
        },
    ])

    const enMT4List = reactive([
        {
            title: `1. Getting Started With MT4`,
            intro: `This tutorial is designed to guide you through the initial steps of 
using the 'Meta Trader' Trading Platform, commonly known as MT4.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/STTnbHn8TESnpEtmyOY2mA" title="1. Getting Started With MT4"></iframe></div>`
        },
        {
            title: `2. Market Watch Basics`,
            intro: `The market watch window is situated at the top-left corner of the 
application. Right-clicking the panel and selecting 'show all' unveils 
a display of all symbols and quotes provided by your broker. 
Additionally, you can utilize the chart window option to add the chart of the chosen symbol to your chart window.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/357sD6xSw06MZdcQcptVQ" title="2. Market Watch Basics"></iframe></div>`
        },
        {
            title: `3. Chart Window Basics`,
            intro: `The central panel on the screen is the 'Chart Window'. It showcases 
the historical data of financial instruments. Right-clicking on the panel 
brings up a drop-down menu box that enables you to customize the interface.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/nImgbgTZL06uaW8iuWJVg" title="3. Chart Window Basics"></iframe></div>`
        },
        {
            title: `4. Terminal Window Basics - Part 1`,
            intro: `The terminal window is located at the bottom of the MT4 platform 
window. Here, you can gain an overview of various modules' features, 
including trade, account history, news, alerts, mailbox, and journal.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/XjuvPqba0O7MJdczIc9g" title="4. Terminal Window Basics - Part 1"></iframe></div>`
        },
        {
            title: `5. Terminal Window Basics - Part 2`,
            intro: `Recently, additional tabs have been introduced to the terminal window, 
including signals, code base, experts, and market tabs.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/1KjL21T1UOBNFvrdZPFQ" title="5. Terminal Window Basics - Part 2"></iframe></div>`
        },
        {
            title: `6. Navigator Window Basics`,
            intro: `The Navigator Window Panel is situated on the left-hand side, 
between the market watch and terminal window. You can reveal or 
conceal this panel through three approaches: press Ctrl+N on your 
keyboard, use the toolbar shortcut button, or utilize the view toolbar 
option to select the navigator window and set it to open.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/U24lZE0ZRU62ppvrOWX7QQ" title="6. Navigator Window Basics"></iframe></div>`
        },
        {
            title: `7. Placing Orders`,
            intro: `This tutorial will demonstrate the different methods available for 
placing orders.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/JZ73pn2lHU6RX7UESWEpA" title="7. Placing Orders"></iframe></div>`
        },
        {
            title: `8. Account History - Closed Trades`,
            intro: `This tutorial aims to enhance your comprehension of trade 
management and monitoring closed trades effectively.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/fCgfVyTjrkmtyVQRjNOpAQ" title="8. Account History - Closed Trades"></iframe></div>`
        },
        {
            title: `9. Market Watch Detailed`,
            intro: `Located at the top-left corner of the application, you'll encounter the 
market watch window. Opting to right-click the panel and selecting 
"show all" will unveil all symbols and quotes provided by your broker.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/OQTDPeuZuUOkFsm4ZlyhXA" title="9. Market Watch Detailed"></iframe></div>`
        },
        {
            title: `10. All About Charts`,
            intro: `This tutorial emphasizes the management of the chart window,
 where historical data of currency pair symbols is displayed.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/50kjaDNQUOqVQT7cB8zQ" title="10. All About Charts"></iframe></div>`
        },
        {
            title: `11. Chart Window Properties`,
            intro: `To access chart window properties, press F8 or find them displayed
 at the bottom of the dropdown menu within the chart window by 
right-clicking anywhere in the menu area.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/XKgaDC2lo0Cnc90FbmFHA" title="11. Chart Window Properties"></iframe></div>`
        },
        {
            title: `12. Indicators And Scripts`,
            intro: `This tutorial will provide insights into indicators and scripts.
 Indicators encompass graphical and/or metrical tools that empower
 you to analyze market conditions effectively.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/6VsMJ21RDkaXQQS3egvEQA" title="12. Indicators And Scripts"></iframe></div>`
        },
    ])

    const enCryptocurrenciesList = reactive([
        {
            title: `1. Background - Early Digital Currencies (1980-2009)`,
            intro: `A cryptocurrency is a digital asset engineered to function as a 
medium of exchange. To secure their units of exchange,
 cryptocurrencies employ cryptographic protocols—elaborate code 
systems designed to encrypt sensitive data transfers.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/DyurcXGd8kqga3STSEZ7A" title="1. Background - Early Digital Currencies (1980-2009)"></iframe></div>`
        },
        {
            title: `2. Evolution Of Blockchain And Cryptocurrencies`,
            intro: `A blockchain serves as a mechanism for ensuring secure online transactions. 
Within the context of a cryptocurrency, its blockchain acts as the central 
ledger that documents and retains historical transactions and activities. 
This ledger validates the ownership of all units of the currency at any specific moment.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/xAGpFiQExUOVfoO0o1wDiA" title="2. Evolution Of Blockchain And Cryptocurrencies"></iframe></div>`
        },
        {
            title: `3. The Future Of Digital Currencies And Blockchain`,
            intro: `Following the increased fascination with Bitcoin and blockchain since 
2009, numerous other cryptocurrencies (or tokens) have emerged.
 Currently, there are more than 850 cryptocurrencies being traded 
globally. Litecoin, Dash, Ripple, Stratis, ZCash, and Monero are 
notable examples of popular coins. In June 2017, the collective
 market capitalization of all cryptocurrencies surpassed $100 billion, 
marking a significant milestone in the cryptocurrency evolution.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/tZyVjR60cUWOkkOY0DPQWg" title="3. The Future Of Digital Currencies And Blockchain"></iframe></div>`
        },
        {
            title: `4. Background - Concept Of Owning A Digital Currency`,
            intro: `While digital currency is in its nascent stages, its potential to shape 
the future of financial services is significant. With the increasing 
adoption of technologies like bitcoin, our financial system is poised to
 transition from dependence on a few large centralized institutions to 
a model that draws strength from a vast network of peers across the globe.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/Uhv4SsTeUiUXAd9K476DQ" title="4. Background - Concept Of Owning A Digital Currency"></iframe></div>`
        },
        {
            title: `5. What Are Wallets And How Do They Work`,
            intro: `A wallet serves as the repository for the essential data required for conducting bitcoin transactions. Despite the common portrayal of wallets as mere repositories for housing bitcoins, the inherent structure of the system results in bitcoins being inherently intertwined with the transaction ledger known as the blockchain. A more accurate depiction of a wallet would be that of a construct responsible for "retaining the digital authentication mechanisms pertaining to one's bitcoin holdings," thereby enabling the capability to both access and utilize them.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/C0BzxVoCEO3iPnAAjvGdw" title="5. What Are Wallets And How Do They Work"></iframe></div>`
        },
        {
            title: `6. Backups & Offline Storage - Why Is It Important, How To Do It`,
            intro: `Modern operating systems constantly leak information without the user’s knowledge or consent.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/ozP3YnIuUqEtxVFBfJRTQ" title="6. Backups & Offline Storage - Why Is It Important, How To Do It"></iframe></div>`
        },
        {
            title: `7. Mobile Security - How To Safely Protect Your Mobile Wallet`,
            intro: `Your adherence to sound security practices stands as the primary bulwark safeguarding your personal information, an aspect that assumes paramount importance, particularly in the realm of online financial administration. While the initial setup might initially appear somewhat daunting, it remains incumbent upon each cryptocurrency investor to allocate time towards acquiring a profound comprehension of the optimal practices at their disposal, aimed at enhancing their self-protective measures.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/eTrUCURbPEikYx8nkoBZcQ" title="7. Mobile Security - How To Safely Protect Your Mobile Wallet"></iframe></div>`
        },
        {
            title: `8. Types Of Crypto Currencies`,
            intro: `Bitcoin pioneered decentralized peer-to-peer networks and established itself as the prevailing standard for cryptocurrencies. Following Bitcoin's emergence, Litecoin (2011) earned recognition as 'silver to Bitcoin's gold.' Ethereum (2015) introduced a decentralized platform enabling the creation and operation of Smart Contracts and Distributed Applications (ĐApps) devoid of third-party interference. Zcash (2016), an open-source cryptocurrency, exhibited notable potential. Dash (originally Darkcoin) enhanced privacy relative to Bitcoin through a decentralized mastercode network, ensuring nearly untraceable transactions. Ripple offered a real-time global settlement network for rapid, cost-effective international transactions. Monero, launched in April 2014, stood out as a secure, private, and untraceable open-source cryptocurrency that captured substantial attention within the cryptography community.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/txkrgROMrUHcJ3dYtLSAg" title="8. Types Of Crypto Currencies"></iframe></div>`
        },
        {
            title: `9. What Is Bitcoin`,
            intro: `Bitcoin is a global cryptocurrency and payment system that serves 
as the pioneering decentralized digital currency. Operating without 
a central repository or single administrator, the system functions in
 a decentralized manner.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/9FqF1Vm5g0eUC8ComqAPxQ" title="9. What Is Bitcoin"></iframe></div>`
        },
        {
            title: `10. The History Of Bitcoin`,
            intro: `Bitcoin is a global cryptocurrency and payment system that holds 
the distinction of being the first decentralized digital currency. 
Operating without a central repository or single administrator, the 
system functions through a decentralized network.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/eacb36F570iNh9c2gK3vQ" title="10. The History Of Bitcoin"></iframe></div>`
        },
        {
            title: `11. Ways To Use Bitcoin Besides Investing`,
            intro: `The increasing popularity and limited supply of Bitcoin facilitate its 
utilization for purchasing a wide range of goods and services
 across the world.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/pwF09ZVof0Kfj4Mq0vAU5Q" title="11. Ways To Use Bitcoin Besides Investing"></iframe></div>`
        },
        {
            title: `12. How To Invest In Bitcoin`,
            intro: `Certain Argentinian citizens have opted to purchase bitcoins as a 
safeguard against substantial inflation and the potential risk of 
government appropriation of savings accounts. Another avenue f
or investment includes bitcoin funds.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/9AWWX5HFj02JwfRoPw6Nw" title="12. How To Invest In Bitcoin"></iframe></div>`
        },
        {
            title: `13. What Are The Risks Involved In Bitcoin Trading`,
            intro: `When examining historical data, it's evident that very few asset 
classes, if any, have surpassed the performance of the stock 
market over extended periods. Factoring in dividend reinvestment 
and inflation, the stock market has yielded an average annual 
return of 7%. It has consistently outperformed other assets such as gold, bonds, oil, and even real estate prices.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/1mHui9me0alPTK1DtY6Uw" title="13. What Are The Risks Involved In Bitcoin Trading"></iframe></div>`
        },
        {
            title: `14. How To Buy Bitcoin`,
            intro: `Purchasing cryptocurrency can be perplexing for many individuals. 
It diverges from stocks and conventional "investments." It deviates
 from most familiar concepts. Rather than receiving shares, you 
acquire digital coins or tokens.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/DG4IyYlsAEOjkOEd5aGlAw" title="14. How To Buy Bitcoin"></iframe></div>`
        },
        {
            title: `15. Why Accept Bitcoin`,
            intro: `When deliberating whether to accept Bitcoin for your business,
 it's essential to consider the advantages that this cryptocurrency 
brings to the table.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/rXq8QWBsG0ymqJZo0oWlzw" title="15. Why Accept Bitcoin"></iframe></div>`
        },
        {
            title: `16. What Are The Risks Involved In Using Bitcoin`,
            intro: `It's crucial to acknowledge the potential risk posed by fraudsters who 
might send counterfeit invoices to your customers, luring them into 
making payments to a Bitcoin address under their control rather 
than yours.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/TRZ1DmUbhkOQKvfhLuohuA" title="16. What Are The Risks Involved In Using Bitcoin"></iframe></div>`
        },
        {
            title: `17. How To Accept Bitcoin For Services Or Goods`,
            intro: `When incorporating Bitcoin acceptance into a small business, it's 
prudent to initiate the process in a manner that maintains
 straightforward accounting practices, tailored to your specific 
business type and operations.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/3hDpAaUfOke2iOTeUWfurA" title="17. How To Accept Bitcoin For Services Or Goods"></iframe></div>`
        },
        {
            title: `18. Outlook On Taxation, Accounting & Legalities`,
            intro: `None of the forthcoming information constitutes legal advice. 
Given the array of issues discussed below, it is highly advisable to seek consultation with your accountant.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/bBGn4uUOXEqHEYG9kXoKw" title="18. Outlook On Taxation, Accounting & Legalities"></iframe></div>`
        },
    ])


    const enIntroductionToTheStockMarketList = reactive([
        {
            title: `1. Introduction To The Stock Market`,
            intro: `The initial approach is termed fundamental analysis. This method largely 
revolves around scrutinizing financial statements. Referred to as 
quantitative analysis, it entails assessing revenue, expenses, assets,
 liabilities, and various financial facets of a company. Fundamental 
analysts leverage this data to glean insights into a company's prospective performance.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/DTfHrENzEysK3KV6Blew" title="1. Introduction To The Stock Market"></iframe></div>`
        },
        {
            title: `2. Can Stock Charts Predict The Future & Trading Systems`,
            intro: `Regardless of the quality of our analysis, its accuracy hinges on the
 present available information. The uncertainty of tomorrow's outcomes
 remains constant. Forecasts regarding future movements are conducted 
under the premise of "all else being equal." This implies that a stock is anticipated to ascend based on a current trend, assuming no changes from the current conditions.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/mjcJOMMEhUmlOJVzVRHw" title="2. Can Stock Charts Predict The Future & Trading Systems"></iframe></div>`
        },
        {
            title: `3. Support And Resistance Levels`,
            intro: `Support and resistance levels are horizontal price levels that typically 
link highs of price bars to other highs, or lows to lows, creating
 horizontal lines on a price chart. These levels materialize when price 
action reverses and alters direction, creating peaks or troughs (swing points) in the market.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/jSYBwDOQaEm7fM5PobLvmg" title="3. Support And Resistance Levels"></iframe></div>`
        },
        {
            title: `4. How To Identify The Market Direction - Part 1`,
            intro: `Market direction is commonly denoted as trends in technical terminology.
 A stock rising indicates an uptrend, while a declining stock signifies 
a downtrend. Periodically, stocks enter a sideways or no-trade zone
 due to the interplay of supply and demand. As markets ascend, they 
prompt a supply-oriented scenario, and conversely, as markets descend, they induce demand-driven conditions.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/yypQ4YSuUi0JRkItu05hw" title="4. How To Identify The Market Direction - Part 1"></iframe></div>`
        },
        {
            title: `5. How To Identify The Market Direction - Part 2`,
            intro: `Trends in the market consist of swing highs and swing lows, forming 
waves that naturally occur. Market movements exhibit a gradual 
up-and-down pattern over extended durations. During a downtrend, 
the market experiences a sequence of decreasing swing highs and
 lower swing lows.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/nd6ZoIZyXE2Y7ExIYJv82Q" title="5. How To Identify The Market Direction - Part 2"></iframe></div>`
        },
        {
            title: `6. Chart Patterns Introduction`,
            intro: `Chart patterns offer tradable opportunities across various time frames:
 from intraday and swing trading to long-term investments. On shorter 
time frames like 5, 10, or 15 minutes, continuation or reversal chart patterns 
can be traded intraday. However, longer time frames such as daily, weekly, 
or monthly also hold potential, as emotions and demand adhere to universal laws, rendering chart patterns effective even on extended horizons.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/4xSKIVXe4kC7gfyhxj6mtg" title="6. Chart Patterns Introduction"></iframe></div>`
        },
        {
            title: `7. Symmetrical Triangles`,
            intro: `A symmetrical triangle forms as prices converge towards a central 
point, reflecting a juncture where both bulls and bears face a 
decision-making impasse. Bears anticipate a price decline with 
conviction, while bulls hold a strong belief in price ascent.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/hhNXbCKf4k6J4QDAU7ce7g" title="7. Symmetrical Triangles"></iframe></div>`
        },
        {
            title: `8. Symmetrical Triangles Trading Strategy`,
            intro: `Having discerned authentic breakouts from false ones and established 
the symmetrical triangle target, it's now essential to address trade risks.
 Prior to entering any trade, it's crucial to determine your acceptable
 risk amount. Should circumstances require exceeding the risk defined in your trading plan, it's advisable to abstain from the trade and pursue more favorable opportunities.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/C41KDQWcykmGUyZuuI2g" title="8. Symmetrical Triangles Trading Strategy"></iframe></div>`
        },
        {
            title: `9. Flags And Pennants`,
            intro: `A flag in technical chart analysis resembles a flag on a pole, 
indicating a likely continuation of the ongoing trend. Flags are 
characterized by tight consolidation after a sharp price movement
 and generally encompass 5 to 20 price bars. It's important to note that the lower point of the flag must not dip below the midpoint of the preceding flagpole.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/7l3WfIAMUUKtbARJlJtfqA" title="9. Flags And Pennants"></iframe></div>`
        },
        {
            title: `10. Flags And Pennants Trading Strategy`,
            intro: `The ascending triangle pattern features a level top, indicating numerous 
attempts to breach that level without success, thus establishing a resistance
 line. Simultaneously, a rising trendline forms, contributing to the bullish pattern. 
A prerequisite for any continuation pattern is contextual relevance. In this case, the breakout is anticipated, but only within a preceding uptrend. Ascending triangles manifest within existing uptrends.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/M0vZVgrP2ki2pBD3s1BWYg" title="10. Flags And Pennants Trading Strategy"></iframe></div>`
        },
        {
            title: `11. Ascending Triangles`,
            intro: `Triangles serve as significant patterns in trend trading, particularly
 for trading trend continuations. These patterns are applicable to both 
strengthening and diminishing positions. In an upward trend, enhancing 
a long position is feasible when a robust ascending triangle materializes. 
Similarly, during a downtrend, augmenting a short position is viable upon the emergence of a descending triangle.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/rDM5L8NslE6hz257KCWP3Q" title="11. Ascending Triangles"></iframe></div>`
        },
        {
            title: `12. Ascending Triangles Trading Strategy`,
            intro: `Volume refers to the count of traded shares in stocks, bonds, 
options, or futures contracts during a specified timeframe 
(e.g., daily, weekly, monthly). Advancing volume encompasses the
 aggregate volume of stocks experiencing price increases, while declining volume pertains to stocks with price decreases. For stability, applying a moving average (e.g., 5 days) to this metric can help alleviate fluctuations and enhance accuracy.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/v1EiAxkBc0mUBy6sl7zF9w" title="12. Ascending Triangles Trading Strategy"></iframe></div>`
        },
        {
            title: `13. Volumes And Trends`,
            intro: `Trading is the act of buying and selling securities based on short-term movements to profit from the price movements on a short-term stock chart.
Intraday trading involves buying and selling of stocks within the same trading day. Fundamental analysis involves analyzing a company’s financial statements to determine the fair value of the business.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/lIIdOdX090y580dCV9C1ug" title="13. Volumes And Trends"></iframe></div>`
        },
    ])

    const enAdvancedStockMarketTradingLevel1List = reactive([
        {
            title: `1. Market Indicators`,
            intro: `Market indicators encompass a subset of technical indicators utilized
 for forecasting the trajectory of significant financial indexes or clusters 
of securities. These indicators, akin to their technical counterparts, 
employ statistical calculations on data points to infer insights. The distinction lies in the utilization of data points from multiple securities, contrasting with the focus on a single security observed in technical indicators.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/fOEFxo7KHkyXcH275PzD2A" title="1. Market Indicators"></iframe></div>`
        },
        {
            title: `2. Trading Methodology`,
            intro: `Trading involves purchasing and selling securities to capitalize on 
short-term price fluctuations depicted on stock charts. This approach
 contrasts with the long-term, buy-and-hold strategy. While the latter 
rests on the belief that long-term price trends overshadow short-term fluctuations and thus, the latter should be disregarded, active trading adopts a distinct mindset.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/ry9aRe2gmE6cK9OBMNGiWg" title="2. Trading Methodology"></iframe></div>`
        },
        {
            title: `3. Round Numbers`,
            intro: `As a natural inclination, traders often gravitate toward rounded
 currency values over random ones. This psychological predisposition 
leads to the creation of support and resistance zones around specific 
price levels, as traders subconsciously position stops and take profits at these rounded levels.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/zGprvlvEGmIW9Ishrycw" title="3. Round Numbers"></iframe></div>`
        },
        {
            title: `4. Setting Up A Trade`,
            intro: `As a trader, it's important to recognize that your options extend beyond
 stocks. You can choose from a diverse range of financial instruments, 
including Bonds, Forex (FX), Commodities, Options, Exchange-traded 
funds (ETFs), Futures, and current e-mini futures contracts like the 
e-mini S&P 500. However, selecting instruments with ample volatility and liquidity is crucial to unlocking profitable opportunities in trading.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/soofsUZgUEGpuIpr1Hv1LQ" title="4. Setting Up A Trade"></iframe></div>`
        },
        {
            title: `5. Technical Analysis For Professional Traders`,
            intro: `Two primary methods employed for securities analysis and investment
 decisions are fundamental analysis and technical analysis. 
Fundamental analysis entails evaluating a company's financial 
statements to ascertain its fair value, while technical analysis operates 
on the assumption that a security's price already incorporates all publicly-available information, concentrating instead on statistical examination of price movements.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/ra2VMstGEkquTSFCF59g" title="5. Technical Analysis For Professional Traders"></iframe></div>`
        },
        {
            title: `6. Practical Technical Analysis`,
            intro: `Technical analysis involves visualizing price-time charts combined
 with simple mathematical calculations plotted on the graph. Yet, 
many traders tend to focus solely on the visual aspect, neglecting 
the mathematical dimension. In intelligent finance, effective 
technical analysis and comprehensive research highlight the significance of incorporating straightforward mathematical validations of graphs, charts, and patterns, emphasizing their equal importance in trade decisions.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/mkPh896ytEeG8sAHOUxGGQ" title="6. Practical Technical Analysis"></iframe></div>`
        },
        {
            title: `7. Trading Psychology`,
            intro: `The Secret to Success lies in a day trading system comprising Entry, 
technical points accounting for 10% for specific trade conditions, 
effective Financial Management with a weightage of 30% encompassing 
planning, control, organization, and observation of financial assets, 
and paramount psychological capabilities amounting to 60%.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/oCi8x0t4kEW9spnJE0u2lA" title="7. Trading Psychology"></iframe></div>`
        },
        {
            title: `8. Risk & Position Management`,
            intro: `Before entering a risk position, it's crucial to assess the target, 
establish pre-defined stop-loss points, and understand that these
 serve primarily to manage risk, preserve capital, regulate emotions, 
and ensure that trades are executed based on the current market bid price for selling or buying a stock.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/aJmSkjh9EKFvudAamP6Mw" title="8. Risk & Position Management"></iframe></div>`
        },
        {
            title: `9. Intra-Day Trading`,
            intro: `Intraday trading revolves around purchasing and selling stocks within
 a single trading day. The objective isn't long-term investment, 
but rather capitalizing on stock index movements for profit. This 
strategy entails exploiting price fluctuations to earn profits through stock trading.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/EmglvUCq902NuvQeutEUNQ" title="9. Intra-Day Trading"></iframe></div>`
        },
        {
            title: `10. Trading Arbitrage`,
            intro: `Arbitrage involves the concurrent buying and selling of stocks to 
capitalize on price disparities. This trade leverages variations in the 
prices of identical or similar financial instruments across distinct 
markets or forms. Arbitrage exploits market inefficiencies and would cease to exist if all markets were perfectly efficient.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/wib5kFsgF0pleY3YxlJhA" title="10. Trading Arbitrage"></iframe></div>`
        },
        {
            title: `11. Trading Preparation & Sectors`,
            intro: `Preparation for the trading room is an unparalleled experience, 
akin to stepping onto the grand stage when the spotlight shines. 
You're either poised or not, sufficiently practiced or not. Success
 hinges on amassing practice before entering the trading room and being adept at your craft. As you accumulate personal trading experience and eventually contemplate joining a trading room, whether from home or in a physical setting, remember a few valuable insights that can prove useful.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/gp14wNI5Tkq0HzQbikYhaw" title="11. Trading Preparation & Sectors"></iframe></div>`
        },
    ])

    const enAdvancedStockMarketTradingLevel2List = reactive([
        {
            title: `1. Trading Small Caps`,
            intro: `Small cap stocks frequently face a negative portrayal in the media, 
emphasizing perceived risks, susceptibility to fraud, and potential 
lack of quality that investors desire. While these concerns hold merit, 
it's crucial to acknowledge that even large-cap companies have 
been entangled in significant internal fraud incidents causing shareholder losses. Clearly, a company's size isn't the sole determinant of scam vulnerability. Gaining insight into critical factors within this trading category empowers investors to make well-informed choices about investing in smaller-cap firms.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/xOJsqF9gKUy238KhVgZvA" title="1. Trading Small Caps"></iframe></div>`
        },
        {
            title: `2. Identifying Institutional Tactics And Copying Them`,
            intro: `The act of trading securities can range from the straightforward action 
of pressing the buy or sell button on an electronic trading account to 
more intricate strategies. A seasoned trader might employ a sophisticated 
approach by establishing a limit price for a block trade distributed across multiple brokers and executed over several days. These distinctions hinge on factors such as the trader's category (retail or institutional), their level of sophistication, and the urgency of transaction execution.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/LY3oNkM4kqyBxsUVNZlLw" title="2. Identifying Institutional Tactics And Copying Them"></iframe></div>`
        },
        {
            title: `3. Using Hot Keys`,
            intro: `Hot keys serve as concise shortcuts that trigger predefined actions 
or sequences of actions with a single keystroke or key combination. 
This streamlined approach contrasts with the potentially 
time-consuming process of executing tasks through mouse clicks and additional inputs. Trading platforms notably benefit from hot keys by enhancing speed and thus efficiency. This time-saving advantage can translate into improved entry/exit points, swifter trade executions, and reduced distractions.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/4lOOPBPoFkShBVUYlJOFtw" title="3. Using Hot Keys"></iframe></div>`
        },
        {
            title: `4. Advanced Use Of Time & Sale`,
            intro: `The time and sales feature offers the most comprehensive presentation of a market's trading data. It instantly reveals every trade as it happens, offering diverse details for each trade, including the precise timing, direction, contract quantity, and more. While graphical charts offer a broad perspective on price movement, the time and sales tool provides an in-depth view of every nuance in price changes. Thus, these two approaches often complement each other to provide a comprehensive understanding of market dynamics.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/7iJ3DqhpBkaTQyyuiwzw" title="4. Advanced Use Of Time & Sale"></iframe></div>`
        },
        {
            title: `5. Manage “Watch Lists”`,
            intro: `In the U.S., over 8,000 issues are listed on stock exchanges. 
However, traders and fund managers usually focus on only a fraction
 due to ineffective watchlist creation. This arises from the challenge 
of identifying stocks that align with successful strategies, requiring a 
range of skills not commonly possessed. Despite the learning curve, 
the endeavor proves valuable as it provides a lasting trading advantage.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/s0CT6YzXE2mRLgLlHnBbw" title="5. Manage “Watch Lists”"></iframe></div>`
        },
        {
            title: `6. The Fixed Quantities Paradox`,
            intro: `Referred to by various names, including the Two Envelope Paradox, 
this intriguing dilemma has captivated mathematicians, economists,
 philosophers, psychologists, and more. The foundational scenario is 
as follows: You encounter two identical envelopes, each containing
 a positive sum of money. One envelope holds double the amount of the other. You opt for one envelope at random and are poised to receive its contents. However, just before opening the chosen envelope, you're presented with the chance to switch to the other envelope.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/JEWe3dIhE0iCNgE2XN7JSw" title="6. The Fixed Quantities Paradox"></iframe></div>`
        },
        {
            title: `7. Identifying “Trade Traps”`,
            intro: `Numerous authors have explored psychological and behavioral 
pitfalls that steer individuals off-course in their overall life trajectories. 
Remarkably, these same forms of dysfunctional psychology often 
surface prominently in the realm of investing behavior.
This examination delves into prevalent psychological pitfalls encountered in investing and strategies for sidestepping them. An initial trap is the anchoring trap, characterized by an excessive reliance on one's initial perceptions. To illustrate, consider placing a bet on a boxing match based solely on the boxer who has thrown the most punches in their last five fights.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/JkOzJlVdIEumbICwelTnbw" title="7. Identifying “Trade Traps”"></iframe></div>`
        },
        {
            title: `8. The “20-20” Method – How Do Experts Read The Chart-`,
            intro: `The 20/20 Channel Breakout Trading System, attributed to Richard 
Donchian, stands as a straightforward methodology rooted in the 
principles of technical analysis. Acknowledged as a trailblazer in this 
field, Donchian pioneered the concept of channel breakouts. He 
introduced a 4-week rule to govern trading based on channel breakouts. This approach gained prominence when Richard Dennis, a renowned commodity trader, extensively employed the channel breakout system, ultimately amassing substantial wealth in the commodities market.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/0nSBcr3SUEOk3tb2gwQkPg" title="8. The “20-20” Method – How Do Experts Read The Chart-"></iframe></div>`
        },
        {
            title: `9. How To Trade Using Failure Patterns`,
            intro: `While we're often taught that trading failures equate to monetary 
losses, observing a stock over a period can reveal the potential 
benefits of utilizing failing patterns. Some traders effectively 
capitalize on these patterns, turning them into profitable opportunities. Let's delve deeper. The most opportune trade might arise by going against the conventional approach when a well-known price pattern deviates from the textbook guidelines found in popular resources. Patterns like the bull flag and head and shoulders exhibit clearly defined levels that can trigger trade entry signals opposing their apparent direction.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/5MTwc3tm0uZutIsJzuxlA" title="9. How To Trade Using Failure Patterns"></iframe></div>`
        },
        {
            title: `10. Using NRB And WRB Candles`,
            intro: `WRB Analysis combines volatility and supply/demand assessment. 
It helps traders identify key price areas with supply/demand shifts 
before trade signals emerge. This method suits various charts and
 trading styles—day, swing, or position trading—by pinpointing price action shifts between pivotal points.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/jvXqVdFE0O2aQKAR62XzQ" title="10. Using NRB And WRB Candles"></iframe></div>`
        },
        {
            title: `11. Trading IPOs - Day Trading And Swing Trading`,
            intro: `IPO trading transpires when a privately-held company introduces 
its shares for trading on public markets such as NYSE or Nasdaq. 
This move aims to generate capital, with potential for future secondary
 offerings. While this is widely understood, the question arises: how can one profit from IPOs? This can be effectively explored through a discussion on swing trading, which I will elaborate upon here.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/WmbvxTOtFUujjzJBC5fhrA" title="11. Trading IPOs - Day Trading And Swing Trading"></iframe></div>`
        },
    ])


    const enTopTraderList = reactive([
        {
            title: `1. Advanced Trading And Technical Analysis`,
            intro: `A prevailing pattern among investors is the presence of a vulnerable
 point, akin to an Achilles heel, that undermines their capacity to 
yield profits. On Wall Street, an enduring adage postulates that 
market dynamics are primarily propelled by the forces of fear and greed, albeit this notion is somewhat simplified. Nevertheless, it often holds true. Yielding to these emotions can wield a profound and adverse influence on both investors' portfolios and the broader stock market. Maintaining emotional detachment becomes challenging when personal financial stakes are at play—especially amid instances like the Dow plummeting by over 1100 points in a single day. Yet, mastery over the skill of maintaining emotional composure in the face of market fluctuations is the cornerstone of prosperous investment endeavors.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/HOjoSATfrEOSiAxi9DkPQ" title="1. Advanced Trading And Technical Analysis"></iframe></div>`
        },
        {
            title: `2. Advanced Stock Trading Strategies - The Trailing Stop`,
            intro: `The assertion that garners widespread agreement among traders is 
that the most challenging aspect of trading pertains to effectively 
positioning stop losses and take profit levels. The bulk of educational 
content targeted at novice traders emphasizes the identification of optimal trade entry points. While the significance of precise entry cannot be understated, it is imperative to recognize that adept trade management, encompassing the selection and dynamic adjustment of appropriate stop losses and take profit levels as the trade unfolds, holds equal importance.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/meLiQ9lpT0OZAPv01ucSOg" title="2. Advanced Stock Trading Strategies - The Trailing Stop"></iframe></div>`
        },
        {
            title: `3. Pivot Points In Stock Trading`,
            intro: `A pivot point serves as a technical analysis tool to ascertain the 
market trend across various time frames. Computed by averaging 
the prior day's high, low, and closing prices, the pivot point is
 indicative of market sentiment. Trading above it is seen as a sign of ongoing bullish sentiment, whereas trading below it suggests bearish sentiment for the subsequent day.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/otcbN1ecUEqsx252fxGjYw" title="3. Pivot Points In Stock Trading"></iframe></div>`
        },
        {
            title: `4. Trade According To Game Theory`,
            intro: `Game theory entails the examination of human interactions marked 
by both conflict and collaboration within the context of competitive 
scenarios. It can be construed as the systematic exploration of 
strategic actions, or more precisely, the optimal decision-making 
undertaken by disparate and competing entities operating within a strategic milieu.

At its core, game theory furnishes a framework replete with terminology and structured analysis, thereby facilitating the process of making rational choices within environments characterized by competition. This formal construct enables the articulation of cogent decisions in situations defined by their competitive dynamics.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/TSdc1boNrEmVeX6oBVQFTg" title="4. Trade According To Game Theory"></iframe></div>`
        },
        {
            title: `5. Practice VWAP Strategies`,
            intro: `A VWAP cross signifies a trading indicator that materializes 
when the price of a security intersects with the volume-weighted 
average price (VWAP). Technical frameworks are conventionally 
amenable to algorithmic configuration, facilitating the depiction of a security's market price and its corresponding VWAP through the utilization of candlestick patterns and trend lines delineated on a technical chart. Upon the event of the security's price intersecting with a VWAP trendline, a VWAP cross signal is generated. This occurrence prompts traders to perceive VWAP trendlines akin to levels of resistance and support, akin to traditional trendlines.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/9aZ8g5fRgU6Nc9NduLPk3w" title="5. Practice VWAP Strategies"></iframe></div>`
        },
        {
            title: `6. Trade Management`,
            intro: `Trade management encapsulates the set of guidelines formulated 
to govern real-time trading endeavors. In essence, it necessitates 
the establishment of predetermined courses of action for every 
conceivable scenario, ensuring a state of readiness such that unanticipated circumstances do not catch one unprepared. This meticulous preparation is vital to circumvent being caught off-guard, underscoring the importance of having a well-defined response strategy. To curtail and regulate the extent of investment vulnerability to potential hazards, practitioners such as fund managers and investors diligently engage in the practices of both risk management and trade management.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/u32Xu7ynt026fC1T9OAauw" title="6. Trade Management"></iframe></div>`
        },
    ])

    const enAdvancedTradingToolsAndTechniquesList = reactive([
        {
            title: `1. Introduction To MT5`,
            intro: `MetaTrader 5 stands as a widely acclaimed and contemporary
 trading platform utilized globally. Renowned for its adaptability, t
his platform predominantly caters to Contracts for Differences (CFDs) and Foreign Exchange (FX) trading. Embraced by a multitude of forex traders, MT5 is favored for its user-friendly interface and a comprehensive selection of supplementary features that enrich the trading journey.
Through MetaTrader 5, a spectrum of opportunities unfolds across financial markets. These encompass trading, both fundamental and technical analysis, rigorous testing of trading strategies, creation and implementation of trading algorithms, and the formulation of customized technical indicators and scripts.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/BgtGT0u5CUOHrjzX8dMtA" title=" 1. Introduction To MT5"></iframe></div>`
        },
        {
            title: `2. Forex Markets Basics And Trading Examples`,
            intro: `Diverging from traditional financial markets such as the New York 
Stock Exchange or the London Stock Exchange, the forex market 
lacks a physical venue or central exchange. Functioning as an 
Over-the-Counter (OTC) or "Interbank" market, it operates exclusively through electronic means within a network of banks, perpetually active across a 24-hour cycle. Consequently, the spot forex market is geographically dispersed, devoid of a central hub. Trade activities can materialize anywhere across the globe.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/D0HGD3VvXkCC9Id4VHBFWA" title="2. Forex Markets Basics And Trading Examples"></iframe></div>`
        },
        {
            title: `3. Commodities Markets Basics And Trading Examples`,
            intro: `A new commodities bull market is in progress. From household
 items to vehicles, commodities surround us, and their prices are
 regulated by futures markets. These markets prevent scarcity and
 price spikes for essentials like oil, metals, grains, and more. Growing Asian economies, especially China, are amplifying global demand for commodities as they transition from exporters to importers due to their vast populations.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/RPBMEdlYSUWoHjwdCp6lVA" title="3. Commodities Markets Basics And Trading Examples"></iframe></div>`
        },
        {
            title: `4. Trading Global Indices`,
            intro: `Each day witnesses the trading of over five thousand stocks on the 
New York Stock Exchange and Nasdaq, the prominent U.S. stock 
exchanges. Amid this dynamic environment, where stocks fluctuate 
in diverse directions throughout the trading session, the question arises: How is it possible to determine whether the market experienced a positive or negative day?
The answer lies in the reference to a market index when discussing the stock market's performance. Prominent indices like the Dow Jones Industrial Average, often referred to as "the Dow," or the Standard & Poor’s 500, commonly known as the S&P 500, serve as benchmarks. These indices encapsulate a selection of stocks, enabling observers to gauge the market's overall performance, even in the midst of myriad individual stock movements.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/7ktC6jZtMES5zwabl8raNQ" title="4. Trading Global Indices"></iframe></div>`
        },
        {
            title: `5. Market News Trading Technique`,
            intro: `Within the equities market, fundamental analysis assumes the role 
of gauging a company's intrinsic value as the foundation for making
 investment decisions. A parallel practice occurs within the retail forex market, where forex fundamental traders assess currencies and their respective nations, akin to analyzing companies, relying on economic announcements to ascertain a currency's underlying worth.
Much like news releases, economic data, and political events concerning a
 company inform investors about its value, similar information pertains to currencies. These elements collectively influence the perception of value, which evolves over time due to diverse influences such as economic expansion and fiscal robustness. Fundamental traders meticulously examine this amalgamation of data to assess the value of a nation's currency.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/0EhImzYQ0Gnrk7oKr63Og" title="5. Market News Trading Technique"></iframe></div>`
        },
        {
            title: `6. Trend Trading`,
            intro: `Trend trading constitutes a trading approach aimed at harnessing 
profits by analyzing a security's momentum in a specific direction. In instances of an upward trend, trend traders adopt long positions, while during downtrends, they opt for short positions.
The bedrock of trend trading strategies rests on the assumption that a security will persist in its current trajectory. Such strategies often integrate provisions for take-profit or stop-loss mechanisms to mitigate potential reversals. This strategy can be embraced by traders across short-, intermediate-, and long-term time frames. Irrespective of the chosen timeframe, traders maintain their position until they discern a reversal in the trend, acknowledging that reversals may manifest at distinct points for each timeframe.`,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/9cKgUeeyakSdRGWAjPdEpQ" title="6. Trend Trading"></iframe></div>`
        },
    ])


    //ar
    const arBasicForexEducationList = reactive([
        {
            title: ` لماذا يجب أن تتداول في الفوركس `,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/87CYYfs5b0uR2PqoIXtQTA" title=" لماذا يجب أن تتداول في الفوركس"></iframe></div>`
        },
        {
            title: ` متى يجب أن تتداول في الفوركس`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/fhOuA45qkWub8Vgh8jJ9Q" title=" متى يجب أن تتداول في الفوركس"></iframe></div>`
        },
        {
            title: ` .‏مصطلحات التداول أو متى يجب أن أشتري`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/S5QYXgPHF0mNYt1dNCd3qg" title="-‏مصطلحات التداول أو متى يجب أن أشتري"></iframe></div>`
        },
        {
            title: `  كيف تتداول باستخدام الرفع المالي`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/TePlHy8GTkOL5Y8Lz3RiLw" title="  كيف تتداول باستخدام الرفع المالي"></iframe></div>`
        },
        {
            title: `  ما هو الـPIP`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/CWXUivY0Ue7nGfjxZYlA" title=" ما هو الـPIP"></iframe></div>`
        },
        {
            title: `  ‏كيف تضع تداول في الفوركس`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/rJmZv9rJHkSAqYKgHk0hQ" title=" ‏كيف تضع تداول في الفوركس"></iframe></div>`
        },
        {
            title: ` ‏أنواع طلبات الفوركس`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/WRB3shnqJkSKJ7z26cCoCA" title="انواع رسوم فوركس البيانية"></iframe></div>`
        },
        {
            title: ` التحليل الفني في الفوركس`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/xv4NqPrvrEmwdkd2oXGFg" title="التحليل الفني في الفوركس"></iframe></div>`
        },
        {
            title: ` التحليل الأساسي في الفوركس`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/PxaVBOe4AkeMTth9qDrNnw" title=" التحليل الأساسي في الفوركس"></iframe></div>`
        },
        {
            title: ` انواع رسوم فوركس البيانية`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/HFMVwXD8zEGf4AJmmakRmA" title=" ‏أنواع طلبات الفوركس"></iframe></div>`
        },
        {
            title: `  الدعم والمقاومة في الفوركس`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/d6mv3I1T7UeWfrSJSQAw" title=" الدعم والمقاومة في الفوركس"></iframe></div>`
        },
        {
            title: ` مسارات الاتجاه`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/Oz7IJotTzEqAzA7kzVGcqg" title="مسارات الاتجاه"></iframe></div>`
        },
    ])

    const arFibonacciList = reactive([
        {
            title: ` فيبوناتشي`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/KfN2JSFOx0ycwMS5bAJUQ" title=" فيبوناتشي"></iframe></div>`
        },
        {
            title: ` امتدادات فيبوناتشي في الفوركس`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/OBbYzczKAkK8FSysT8Ew" title=" امتدادات فيبوناتشي في الفوركس"></iframe></div>`
        },
        {
            title: ` تعلّم مروحة وأقواس فيبوناتشي في الفوركس`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/ZBIWNdQ4H0mspMISajYbnQ" title=" تعلّم مروحة وأقواس فيبوناتشي في الفوركس"></iframe></div>`
        },
        {
            title: ` تعلّم كيف تدمج الفوركس فيبوناتشي مع أدوات التحليل الأخرى`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/uF5DN88g2kmjGaEhaxWANA" title=" تعلّم كيف تدمج الفوركس فيبوناتشي مع أدوات التحليل الأخرى"></iframe></div>`
        },
    ])

    const arUnderstandingCandlesticksList = reactive([
        {
            title: `‏ الشموع`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/BH7R9twriky9JGKTDqgwg" title="‏ الشموع"></iframe></div>`
        },
        {
            title: `  ‏شموع دوجي في الفوركس`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/3I7c5JhLHU2G7Tyzicm74g" title=" ‏شموع دوجي في الفوركس"></iframe></div>`
        },
        {
            title: ` شموع ماروبازو في الفوركس`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/JHdlaAQWEk2Rd2wHjZx6A" title=" شموع ماروبازو في الفوركس"></iframe></div>`
        },
        {
            title: `  شموع المطرقة والرجل المشنوق`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/2DJbC80B2UCSmJ21RmVw" title=" شموع المطرقة والرجل المشنوق"></iframe></div>`
        },
        {
            title: ` ‏شموع الشهاب والمطرقة المقلوبة`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/u2TfMHln90OZqYKd9dN9tA" title=" ‏شموع الشهاب والمطرقة المقلوبة"></iframe></div>`
        },
        {
            title: ` النمط الثاقب الصاعد`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/vScOYyIdgUCZsWtnputnWQ" title="النمط الثاقب الصاعد"></iframe></div>`
        },
        {
            title: ` نمط غطاء السحابة القاتمة`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/MTOn9LlHCkqImP6cfRkXHQ" title=" نمط غطاء السحابة القاتمة"></iframe></div>`
        },
        {
            title: ` أنماط الابتلاع الصعودية والهابطة`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/6YUog1RvHECTksgVHWZhAw" title="أنماط الابتلاع الصعودية والهابطة"></iframe></div>`
        },
        {
            title: ` ملقاط القمم والقيعان`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/QBUI9QZO40ua5roR6K0vA" title=" ملقاط القمم والقيعان"></iframe></div>`
        },
        {
            title: ` ‏انماط نجمة الصباح ونجمة المساء`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/1DwLw8JL60OitZKS7hrReg" title=" ‏انماط نجمة الصباح ونجمة المساء"></iframe></div>`
        },
        {
            title: ` ‏جنود بيض و ٣ غربان سوداء`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/0B2iBdslCkCz7LKdWyUw" title=" ‏جنود بيض و ٣ غربان سوداء"></iframe></div>`
        },
        {
            title: ` ‏ثلاثة شموع داخلية لأعلى وثلاثة شموع داخلية لأسفل`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/TXYVDi0PEUWflANDeE4dlw" title="‏ثلاثة شموع داخلية لأعلى وثلاثة شموع داخلية لأسفل"></iframe></div>`
        },
        {
            title: ` الطرق الثلاثة الصاعدة والهابطة`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/JHdlaAQWEk2Rd2wHjZx6A" title=" شموع ماروبازو في الفوركس"></iframe></div>`
        },
    ])

    const arChartFormationPatternsList = reactive([
        {
            title: ` ‏انماط وتكوين القمة المزدوجة والقاع المزدوج في الفوركس`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/mXSvNKvkmkmAgCg6c3IKQw" title=" ‏انماط وتكوين القمة المزدوجة والقاع المزدوج في الفوركس"></iframe></div>`
        },
        {
            title: ` ‏تعلم نمط الرأس والأكتاف في الفوركس`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/bBwIoANZl0C5uWaLN3Yzw" title=" ‏تعلم نمط الرأس والأكتاف في الفوركس"></iframe></div>`
        },
        {
            title: ` ‏تعلم نمط الرأس والأكتاف المعكوس في الفوركس`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/7MMvU4OX0A0W7IQ7M7w" title=" ‏تعلم نمط الرأس والأكتاف المعكوس في الفوركس"></iframe></div>`
        },
        {
            title: ` ‏تعلم انماط تكوين علم الصعود في الفوركس`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/cG0p1lqlfkmSN4gr25VDQ" title=" ‏تعلم انماط تكوين علم الصعود في الفوركس"></iframe></div>`
        },
        {
            title: `‏تعلم انماط علم الهبوط في الفوركس`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/cRD1usdHW02IiaYQiwpiTw" title="‏تعلم انماط علم الهبوط في الفوركس"></iframe></div>`
        },
        {
            title: ` ‏تعلم تكوين الراية الصاعدة والهابطة في الفوركس`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/fVn7R8gKHUqLthaRGr0tQQ" title=" ‏تعلم تكوين الراية الصاعدة والهابطة في الفوركس"></iframe></div>`
        },
        {
            title: ` ‏تعلم نمط الوتد الهابط في الفوركس`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/YHIXIVkkWU6loJG83Te38w" title=" ‏تعلم نمط الوتد الهابط في الفوركس"></iframe></div>`
        },
        {
            title: ` ‏تعلم تكوينات المثلث الصاعد والهابط في الفوركس`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/bIhYr0KQkyJtMgsSBjf9w" title=" ‏تعلم تكوينات المثلث الصاعد والهابط في الفوركس"></iframe></div>`
        },
        {
            title: ` ‏تعلم نمط المثلث المتماثل في الفوركس`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/2z1f5SWLrk5nAXBho0x8Q" title=" ‏تعلم نمط المثلث المتماثل في الفوركس"></iframe></div>`
        },
        {
            title: ` ‏نطاق الصندوق في الفوركس`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/HbBbSxBHv0eEkdjQyFamw" title=" ‏نطاق الصندوق في الفوركس"></iframe></div>`
        },
        {
            title: ` ‏تعلم نمط تكوين الكوب والعروة في الفوركس`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/ua6TIpisl0S2WXTHYXymXw" title=" ‏تعلم نمط تكوين الكوب والعروة في الفوركس"></iframe></div>`
        },
        {
            title: ` ‏تعلم نمط تكوين الكوب والعروة المعكوس في الفوركس`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/g05KWi8vDk6LjhHVZRA8iQ" title=" ‏تعلم نمط تكوين الكوب والعروة المعكوس في الفوركس"></iframe></div>`
        },
        {
            title: ` ‏تعلم نمط الوتد الصاعد في الفوركس`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/GY08nT7BEmO80FItPpzQ" title=" ‏تعلم نمط الوتد الصاعد في الفوركس"></iframe></div>`
        },
    ])

    const arForexIndicatorsList = reactive([
        {
            title: `مؤشرات الفوركس`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/4jhzVDy4JkWaR9cYFIlYtg" title="مؤشرات الفوركس"></iframe></div>`
        },
        {
            title: `مذبذب ستوكاستيك مؤشر القوة النسبية للفوركس`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/sxeAaMdtWkCLW5wdSclBg" title="مذبذب ستوكاستيك مؤشر القوة النسبية للفوركس"></iframe></div>`
        },
        {
            title: `. متوسط النطاق الحقيقي (ATR) في الفوركس`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/Nm1mAAseBUeQSBKuFBXIg" title="- متوسط النطاق الحقيقي (ATR) في الفوركس"></iframe></div>`
        },
        {
            title: ` ‏المتوسط المتحرك في الفوركس`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/NoXUi49beky9URVlqSzKPw" title=" ‏المتوسط المتحرك في الفوركس"></iframe></div>`
        },
        {
            title: ` ‏تقارب وتباعد المتوسط المتحرك أو (MACD) في الفوركس`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/l9q2IuQJQ0WMg6056ejtnQ" title=" ‏تقارب وتباعد المتوسط المتحرك أو (MACD) في الفوركس"></iframe></div>`
        },
        {
            title: ` مؤشر المتوسط الاتجاهي أو (ADX) في الفوركس`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/v9MGxeWNYketQ8RBUkGQCw" title=" اتشيموكو كينكو هيو"></iframe></div>`
        },
        {
            title: ` مؤشر نطاقات بولينجر في الفوركس`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/URoS6mTkUym2qownCAysQ" title=" مؤشر نطاقات بولينجر في الفوركس"></iframe></div>`
        },
        {
            title: `‏مؤشر القطع المكافئ للتوقف والانعكاس أو Parabolic SAR`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/7CGdtUPKD0WDKPlJIT5Nug" title="‏مؤشر القطع المكافئ للتوقف والانعكاس أو Parabolic SAR"></iframe></div>`
        },
        {
            title: ` اتشيموكو كينكو هيو`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/v9MGxeWNYketQ8RBUkGQCw" title=" اتشيموكو كينكو هيو"></iframe></div>`
        },
        {
            title: `النقاط المحورية للفوركس`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/QBY6T7MRCUWj4UrgCjt74Q" title="النقاط المحورية للفوركس"></iframe></div>`
        },
    ])

    
    const arTimingInForexList = reactive([
        {
            title: ` توقيت دخولك عند التداول في الفوركس`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/7vcDVbgq00q6nWC2LBucUg" title=" توقيت دخولك عند التداول في الفوركس"></iframe></div>`
        },
        {
            title: ` توقيت خروجك من التداول في الفوركس`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/O3yWYwiaNUug3OCaoWqlIA" title=" توقيت خروجك من التداول في الفوركس"></iframe></div>`
        },
    ])

    const arMT4List = reactive([
        {
            title: `بدء العمل بـMT4`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/za2lvw8kpk7h0nLMSRu1w" title="بدء العمل بـMT4"></iframe></div>`
        },
        {
            title: ` أساسيات مراقبة السوق`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/1iFlUyThkuZ8Dgcnt2YA" title=" أساسيات مراقبة السوق"></iframe></div>`
        },
        {
            title: `أساسيات نافذة الرسم البياني`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/c3SaVCMdUy9TViDhbIuHg" title="أساسيات نافذة الرسم البياني"></iframe></div>`
        },
        {
            title: ` أساسيات النافذة الطرفية - الجزء الأول`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/wr7Jjz4k9ksfqBpsHKXgg" title=" أساسيات النافذة الطرفية - الجزء الأول"></iframe></div>`
        },
        {
            title: ` أساسيات النافذة الطرفية - الجزء الثاني`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/KDiUPNWU2BjchT2Dbww" title=" أساسيات النافذة الطرفية - الجزء الثاني"></iframe></div>`
        },
        {
            title: ` أساسيات نافذة المستكشف`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/8HXJeA4dWULDkkr42t8Vg" title=" أساسيات نافذة المستكشف"></iframe></div>`
        },
        {
            title: ` وضع الطلبات`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/HVudFlt54kWJPW5O9vLXPA" title=" وضع الطلبات"></iframe></div>`
        },
        {
            title: ` تاريخ الحساب / التداولات المغلقة`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/M8mkJZ26E0OfCZluxZoWw" title=" تاريخ الحساب - التداولات المغلقة"></iframe></div>`
        },
        {
            title: ` تفاصيل مراقبة السوق`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/1gwAh6v7EyhaGOP88qK8A" title=" تفاصيل مراقبة السوق"></iframe></div>`
        },
        {
            title: ` كل شيء حول الرسوم البيانية`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/9I87h7JbAkagl1o3nah7Dw" title=" كل شيء حول الرسوم البيانية"></iframe></div>`
        },
        {
            title: ` خصائص نافذة الرسم البياني`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/BSCoVJML0U2F1vlCjUCz5w" title=" خصائص نافذة الرسم البياني"></iframe></div>`
        },
        {
            title: `. المؤشرات والنصوص`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/4TaNU42KxEWgHvqz8l0zww" title="- المؤشرات والنصوص"></iframe></div>`
        },
    ])

    const arCryptocurrenciesList = reactive([
        {
            title: ` خلفية - العملات المشفرة المبكرة (1980-2009)`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/tldOFuDjUuXZeiFUUDeIA" title=" خلفية - العملات المشفرة المبكرة (1980-2009)"></iframe></div>`
        },
        {
            title: ` تطور سلسلة الكتل والعملات المشفرة`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/rszR0RN1l0G9JPxrvNyxuQ" title=" تطور سلسلة الكتل والعملات المشفرة"></iframe></div>`
        },
        {
            title: ` مستقبل العملات الرقمية`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/zfg4mhyfNUGeMjStJUNDw" title=" مستقبل العملات الرقمية"></iframe></div>`
        },
        {
            title: ` خلفية - مفهوم امتلاك عملة مشفرة`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/tTn0HfY1JE2gsj79xVtUA" title=" خلفية - مفهوم امتلاك عملة مشفرة"></iframe></div>`
        },
        {
            title: ` ما هي المحافظ وكيف تعمل`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/h61HUpUCWUe9zfssZw3dMw" title=" ما هي المحافظ وكيف تعمل"></iframe></div>`
        },
        {
            title: `  النسخ الاحتياطية و التخزين أوفلاين - لماذا هو مهم و كيف تفعله`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/SBeNHNgUKEWesfAZEBwjwQ" title="  النسخ الاحتياطية و التخزين أوفلاين - لماذا هو مهم و كيف تفعله"></iframe></div>`
        },
        {
            title: `الدرس الرابع: أمان الهاتف المحفظة هاتفك المحمول                `,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/AB58kAzc0yWPhr2G26XYg" title="-الدرس الرابع- أمان الهاتف المحفظة هاتفك المحمول---"></iframe></div>`
        },
        {
            title: ` أنواع العملات المشفرة`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/Xb16cNOlEXWrwe1pJUQ" title=" أنواع العملات المشفرة"></iframe></div>`
        },
        {
            title: ` ما هي البيتكوين ؟`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/dY9O8HsaD0iKLJCP7wjSg" title=" ما هي البيتكوين ؟"></iframe></div>`
        },
        {
            title: ` تاريخ البيتكوين`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/LLOpra5gEW1IQSiJ5k6w" title=" تاريخ البيتكوين"></iframe></div>`
        },
        {
            title: ` طرق لاستخدام البيتكوين بخلاف الاستثمار`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/joCzHW6x0UahaeA3LQeO5A" title=" طرق لاستخدام البيتكوين بخلاف الاستثمار"></iframe></div>`
        },
        {
            title: `الدرس الرابع: استثمر في البيتكوين`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/MhQzclxLTEivtOtLlHF6Vg" title="الدرس الرابع- استثمر في البيتكوين"></iframe></div>`
        },
        {
            title: `الدرس الخامس: مخاطر تجارة البيتكوين`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/M41ecHMEEOugR7rk3rqQ" title="الدرس الخامس- مخاطر تجارة البيتكوين"></iframe></div>`
        },
        {
            title: ` كيف يمكنك شراء البيتكوين`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/7Id85tb1WEOzv3zohQAXsg" title=" كيف يمكنك شراء البيتكوين"></iframe></div>`
        },
        {
            title: `الدرس الأول: لماذا يجب أن تقبل البيتكوين`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/uPxLbl8yi0i6vXf2r9Cf2w" title="الدرس الأول- لماذا يجب أن تقبل البيتكوين"></iframe></div>`
        },
        {
            title: `الدرس 2. ما هي المخاطر التي تنطوي عليهابيتكوين`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/RBkVLmLyGEKQWDBnjzyXUw" title="الدرس 2. ما هي المخاطر التي تنطوي عليهابيتكوين"></iframe></div>`
        },
        {
            title: `الدرس 3: قبول Bitcoin للسلع والخدمات`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/APGzXm0Q5Uicmy4G18cZFA" title="الدرس 3- قبول Bitcoin للسلع والخدمات"></iframe></div>`
        },
        {
            title: `الدرس الرابع: النظرة الضريبية والقانونية`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/UGO5iiw0y02gQAdF0vAQ" title="الدرس الرابع- النظرة الضريبية والقانونية"></iframe></div>`
        },
    ])


    const arIntroductionToTheStockMarketList = reactive([
        {
            title: `مقدمة لسوق الأوراق المالية.`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/5KJoQL41tkqzD4zK597G4Q" title="مقدمة لسوق الأوراق المالية-"></iframe></div>`
        },
        {
            title: `هل يمكن لمخططات الأسهم التنبؤ بالمستقبل؟ أنظمة التداول`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/JaLUKP6jekmfxpb5v9qCZw" title="هل يمكن لمخططات الأسهم التنبؤ بالمستقبل؟ أنظمة التداول"></iframe></div>`
        },
        {
            title: `إستراتيجية تداول مستويات الدعم والمقاومة`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/iTYr5PTe0Wa7ESldTTlXw" title="إستراتيجية تداول مستويات الدعم والمقاومة"></iframe></div>`
        },
        {
            title: `كيف تحدد اتجاه السوق؟ النظرية`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:57.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" webkitallowfullscreen mozallowfullscreen allowfullscreen src="https://videos.dyntube.com/iframes/eTc4bAv8d0i8MzNwLfhHEA" title="كيف تحدد اتجاه السوق؟ النظرية"></iframe></div>`
        },
        {
            title: `كيف تحدد اتجاه السوق؟ الجزء 2`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/Err6GB3p80KRuRjFsGvkbA" title="كيف تحدد اتجاه السوق؟ الجزء 2"></iframe></div>`
        },
        {
            title: `أنماط الرسم البياني: مقدمة`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/K8kqUSQfRUqldBemmZIlA" title="أنماط الرسم البياني- مقدمة"></iframe></div>`
        },
        {
            title: `أنماط الرسم البياني: مثلثات متناظرة`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/dAnGsL0EmNzb54r6YuHQ" title="أنماط الرسم البياني- مثلثات متناظرة"></iframe></div>`
        },
        {
            title: `أنماط الرسم البياني: إستراتيجية تداول المثلثات المتماثلة`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/nSTDEEhbUmgpRI5i4MH6g" title="أنماط الرسم البياني- إستراتيجية تداول المثلثات المتماثلة"></iframe></div>`
        },
        {
            title: `أنماط الرسم البياني: الأعلام والرايات`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:57.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" webkitallowfullscreen mozallowfullscreen allowfullscreen src="https://videos.dyntube.com/iframes/BuL1ue3FE6P7HFgNJSLbg" title="أنماط الرسم البياني- الأعلام والرايات"></iframe></div>`
        },
        {
            title: `أنماط الرسم البياني: إستراتيجية تداول الأعلام والرايات`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/6zBJBKdDi0ShDLJKmjMnQ" title="أنماط الرسم البياني- إستراتيجية تداول الأعلام والرايات"></iframe></div>`
        },
        {
            title: `أنماط الرسم البياني: المثلثات الصاعدة`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/oxfjrphRAEGryrTfRXQ3pg" title="أنماط الرسم البياني- المثلثات الصاعدة"></iframe></div>`
        },
        {
            title: `أنماط الرسم البياني: استراتيجية تداول المثلثات الصاعدة`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/qwwfy1eJJ0Cb45QPl6RYMw" title="أنماط الرسم البياني- استراتيجية تداول المثلثات الصاعدة"></iframe></div>`
        },
        {
            title: `الأحجام والاتجاهات`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/YFeivBLGm0mrqRETk3Cow" title="الأحجام والاتجاهات"></iframe></div>`
        },
    ])

    const arAdvancedStockMarketTradingLevel1List = reactive([
        {
            title: `ول سوق الأسهم المستوى الأول ،`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/JVL8iO1sJkmXiRKllHviJA" title="ول سوق الأسهم المستوى الأول ،"></iframe></div>`
        },
        {
            title: `منهجية التداول في المستوى الأول لسوق الأسهم`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/2Q26goWMPEiLkqD5MtEA" title="منهجية التداول في المستوى الأول لسوق الأسهم"></iframe></div>`
        },
        {
            title: `تقريب الأرقام`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/HJQtJWz0WdTEhmXGdwkQ" title="تقريب الأرقام"></iframe></div>`
        },
        {
            title: `إنشاء صفقة`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/baqOcQakSG5CJMSs6TdQ" title="إنشاء صفقة"></iframe></div>`
        },
        {
            title: `مقدمة في التحليل الفني.`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/oimBxq460SShZQFCd3CaQ" title="مقدمة في التحليل الفني-"></iframe></div>`
        },
        {
            title: `التحليل الفني العملي`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/l7E9954JCkiuOkPk5B4w" title="التحليل الفني العملي"></iframe></div>`
        },
        {
            title: `علم نفس التداول.`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/vlU13vADBUuoEFIogCX6Bg" title="علم نفس التداول-"></iframe></div>`
        },
        {
            title: `إدارة المخاطر والمواقف`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/iBNECsFQqUmO2vpoIrm2nA" title="إدارة المخاطر والمواقف"></iframe></div>`
        },
        {
            title: `انتقاء الأسهم وتحليل البيانات الاقتصادية.`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/KCjath11eU6FuETXDfT7g" title="انتقاء الأسهم وتحليل البيانات الاقتصادية-"></iframe></div>`
        },
        {
            title: `التداول خلال اليوم.`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/XDjA161jqUm0pWPrf5s8DA" title="التداول خلال اليوم-10"></iframe></div>`
        },
        {
            title: `مراجحة التداول.`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/wTJcpXomUiVkWQYZVbwg" title="مراجحة التداول-"></iframe></div>`
        },
        {
            title: `تداول سوق الأسهم المستوى الأول.`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/QYc8AUfh0KbQVL92B0Oqg" title="تداول سوق الأسهم المستوى الأول-"></iframe></div>`
        },
    ])

    const arAdvancedStockMarketTradingLevel2List = reactive([
        {
            title: `تداول رؤوس الأموال الصغيرة.`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/xwjSKT8qo0S86yhogQ3YQ" title="تداول رؤوس الأموال الصغيرة-"></iframe></div>`
        },
        {
            title: `تحديد التكتيكات المؤسسية والتعامل معها`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/fTzHqPWMqkWTDIRu2X7Y3A" title="تحديد التكتيكات المؤسسية والتعامل معها"></iframe></div>`
        },
        {
            title: `استخدام مفاتيح الاختصار.`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/0yxEdNSS0OfXh9W1AAg" title="استخدام مفاتيح الاختصار-"></iframe></div>`
        },
        {
            title: `الاستخدام المتقدم للوقت والبيع`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/LSVncmMokEWGcsS4NsYOcA" title="الاستخدام المتقدم للوقت والبيع"></iframe></div>`
        },
        {
            title: `إدارة قوائم المراقبة`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/1rTk7e5nTkysevYUoq7OVw" title="إدارة قوائم المراقبة"></iframe></div>`
        },
        {
            title: `مفارقة الكميات الثابتة`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/LpMUtoJiEywLU1illqYYA" title="مفارقة الكميات الثابتة"></iframe></div>`
        },
        {
            title: `تحديد "الأفخاخ التجارية"`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/taPzuig7VkK96xhuviv0WA" title="تحديد -الأفخاخ التجارية-"></iframe></div>`
        },
        {
            title: `طريقة "20:20" - كيف يقرأ الخبراء المخطط؟`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/nHYxYLIyukWUQKwH5vamOA" title="طريقة -20-20- - كيف يقرأ الخبراء المخطط؟"></iframe></div>`
        },
        {
            title: `كيفية التداول باستخدام أنماط الفشل`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/AA4xmEnF4k6SyPwspOubkA" title="كيفية التداول باستخدام أنماط الفشل"></iframe></div>`
        },
        {
            title: `باستخدام شموع NLB و WRP`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/wb1fXhfCvEeAZ3wbd8ug" title="باستخدام شموع NLB و WRP"></iframe></div>`
        },
        {
            title: `تداول الاكتتابات اليومية التداول والتداول المتأرجح`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/1g0FF0mgbECvCNlF1W3OOw" title="تداول الاكتتابات اليومية التداول والتداول المتأرجح"></iframe></div>`
        },
    ])


    const arTopTraderList = reactive([
        {
            title: `دورة التاجر الافضل`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/bBOfjT1fekmAcg50sWvJQ" title="دورة التاجر الافضل"></iframe></div>`
        },
        {
            title: `استراتيجيات تداول الأسهم المتقدمة - الإيقاف المتحرك`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/slpoZE1UKkWIX724Vw" title="استراتيجيات تداول الأسهم المتقدمة - الإيقاف المتحرك"></iframe></div>`
        },
        {
            title: `النقاط المحورية في تداول الأسهم`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/32F49oUpEESyaMZgR06SYg" title="النقاط المحورية في تداول الأسهم"></iframe></div>`
        },
        {
            title: `تداول وفقًا لنظرية الألعاب`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/KqbjoprsukCMCwsbJLg23A" title="تداول وفقًا لنظرية الألعاب"></iframe></div>`
        },
        {
            title: `ممارسة استراتيجيات VWAP`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/8qj74W832UKaV4ObsuuA1g" title="ممارسة استراتيجيات VWAP"></iframe></div>`
        },
        {
            title: `إدارة التجارة`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/cSgoOXxE8UKnMp5wlLEtRQ" title="إدارة التجارة"></iframe></div>`
        },
    ])

    const arAdvancedTradingToolsAndTechniquesList = reactive([
        {
            title: `مقدمة إلى MT5 ،`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/7AaCow4R0kydCOEZeG49vw" title="مقدمة إلى MT5 ،"></iframe></div>`
        },
        {
            title: `وأمثلة تداول الفوركس وأسواق الفوركس وأساسيات و`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/SjIwWlWYTUqkb9yxw1Zmg" title="وأمثلة تداول الفوركس وأسواق الفوركس وأساسيات و"></iframe></div>`
        },
        {
            title: `أساسيات أسواق السلع وأمثلة على التداول`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/UjgQN9hzS0qc3XaEVTRJbg" title="أساسيات أسواق السلع وأمثلة على التداول"></iframe></div>`
        },
        {
            title: `تداول المؤشرات العالمية`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/HF9u3edhkSVY4h1OafKA" title="تداول المؤشرات العالمية"></iframe></div>`
        },
        {
            title: `تقنية تداول أخبار السوق`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/p2G9brw6U6epw3c3qBY1w" title="تقنية تداول أخبار السوق"></iframe></div>`
        },
        {
            title: `تجارة الاتجاه`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/SQHYLQjRkCyXfW5JdlDIQ" title="تجارة الاتجاه"></iframe></div>`
        },
    ])


    //cn
    const cnBasicForexEducationList = reactive([
        {
            title: `1. 为何交易`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/K8hKzjXyUOjVNb7WZw7kg" title="1. 为何交易"></iframe></div>`
        },
        {
            title: `2. 何时进行外汇交易`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/k48SQiOtOkaHg1GlU3UElA" title="2. 何时进行外汇交易"></iframe></div>`
        },
        {
            title: `3. 交易术语或我要在哪里做多`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/W8upAgppAEQ2p3epAsPrg" title="3. 交易术语或我要在哪里做多"></iframe></div>`
        },
        {
            title: `4. 如何利用杠杆交易`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/ZQDdObBH10aqsEgDffQrsA" title="4. 如何利用杠杆交易"></iframe></div>`
        },
        {
            title: `5. 什么是 PIP`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/jHqNDjtHEa20qIOBnt7iA" title="5. 什么是 PIP"></iframe></div>`
        },
        {
            title: `6. 如何进行外汇交易`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/i8mPSHV6k6n43JS97jQg" title="6. 如何进行外汇交易"></iframe></div>`
        },
        {
            title: `7. 外汇订单类型`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/5flqj1xFUuMtlXHyVEdg" title="7. 外汇订单类型"></iframe></div>`
        },
        {
            title: `8。外汇中的技术分析`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/w2rUAQonfEuLYBTlTVl5lw" title="8。外汇中的技术分析"></iframe></div>`
        },
        {
            title: `9. 外汇中的基本面分析`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/43fAKsvYhEeprUvmDN2QOg" title="9. 外汇中的基本面分析"></iframe></div>`
        },
        {
            title: `10. 外汇图表类型`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/jWXshQ5EkqgUilOXFWuog" title="10. 外汇图表类型"></iframe></div>`
        },
        {
            title: `11. 外汇中的支撑和阻力`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/fPZAtfjsOEKQtDPtFBk37w" title="11. 外汇中的支撑和阻力"></iframe></div>`
        },
        {
            title: `12. 趋势线`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/s026kNkt0y5AaIO604HRg" title="12. 趋势线"></iframe></div>`
        },
    ])

    const cnFibonacciList = reactive([
        {
            title: `1. 斐波那契`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/bFEwIG0XVEibL6edWeoVMQ" title="1. 斐波那契"></iframe></div>`
        },
        {
            title: `2. 外汇斐波那契扩展`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/bE0e3TOPNUe173J1a91MMQ" title="2. 外汇斐波那契扩展"></iframe></div>`
        },
        {
            title: `3. 学习外汇斐波那契扇形和弧形`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/Vi8EH3jU2REWYOR6jZow" title="3. 学习外汇斐波那契扇形和弧形"></iframe></div>`
        },
        {
            title: `4. 学习外汇将斐波那契与其他技术分析工具相结合`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/UWV9HhyAuECE8pdHYGq2OQ" title="4. 学习外汇将斐波那契与其他技术分析工具相结合"></iframe></div>`
        },
    ])

    const cnUnderstandingCandlesticksList = reactive([
        {
            title: `1. K线`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/y0nGxUDlxU6FkxTShWi3g" title="1. K线"></iframe></div>`
        },
        {
            title: `2. 外汇中的十字星K线`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/D5U0pmlOa0iXI4KiNj4wqA" title="2. 外汇中的十字星K线"></iframe></div>`
        },
        {
            title: `3. 外汇中的 Marubozu K线`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/BIUq9K5ujkmVdh60TgRw" title="3. 外汇中的 Marubozu K线"></iframe></div>`
        },
        {
            title: `4. 锤子和吊人K线`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/0G2FUBJyUEKQGmujASBHhA" title="4. 锤子和吊人K线"></iframe></div>`
        },
        {
            title: `5. 射击之星和倒锤K线`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/sKhcZhpD3kWi0dCYvRxXwA" title="5. 射击之星和倒锤K线"></iframe></div>`
        },
        {
            title: `6. 看涨刺穿形态`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/14VadTkMOkCJIA7VfrSrw" title="6. 看涨刺穿形态"></iframe></div>`
        },
        {
            title: `7. 乌云盖顶形态`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/QKXrkhkUPEO956ODExiYmQ" title="7. 乌云盖顶形态"></iframe></div>`
        },
        {
            title: `8. 看涨和看跌吞没形态`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/6XuD93jwTEqSU1cCUh0NVw" title="8. 看涨和看跌吞没形态"></iframe></div>`
        },
        {
            title: `9. 镊子顶部和底部`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/5n8D0h38MkKhMoq6Sy1A" title="9. 镊子顶部和底部"></iframe></div>`
        },
        {
            title: `10. 晨星和黄昏之星模式`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/1f3eLBH7JkGdHiygvEqvAQ" title="10. 晨星和黄昏之星模式"></iframe></div>`
        },
        {
            title: `11. 3 白兵 3 黑乌鸦`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/bqFyhVVCbEW6VEUmjRXanQ" title="11. 3 白兵 3 黑乌鸦"></iframe></div>`
        },
        {
            title: `12. 3 内升 3 内降模式`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/HcZWdtM9Eky421hHrOf3XQ" title="12. 3 内升 3 内降模式"></iframe></div>`
        },
        {
            title: `13. 上涨和下跌的三种方法`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/dRpXD63O606wD9demHoNhg" title="13. 上涨和下跌的三种方法"></iframe></div>`
        },
    ])

    const cnChartFormationPatternsList = reactive([
        {
            title: `1. 外汇双顶和双底形成模式`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/4IjRWqcOkUCegLw6EaRQVg" title="1. 外汇双顶和双底形成模式"></iframe></div>`
        },
        {
            title: `2. 学习外汇头肩形态`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/tVNsrTqYt0m2M6174JC6Q" title="2. 学习外汇头肩形态"></iframe></div>`
        },
        {
            title: `3. 学习外汇倒头肩形态`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/ccLNGecoqkWg67PPJkk6TA" title="3. 学习外汇倒头肩形态"></iframe></div>`
        },
        {
            title: `4。学习外汇牛市旗形形成模式`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/NmBLEupbEetbkbOXzgIGw" title="4。学习外汇牛市旗形形成模式"></iframe></div>`
        },
        {
            title: `5. 学习外汇熊市旗形模式`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/u2nrzlEG9kKH8D4gvbxivA" title="5. 学习外汇熊市旗形模式"></iframe></div>`
        },
        {
            title: `6. 学习外汇看涨和看跌三角旗形态`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/MukRxIAxuES8SevqfrzLA" title="6. 学习外汇看涨和看跌三角旗形态"></iframe></div>`
        },
        {
            title: `7. 学习外汇下降楔形模式`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/exEzjKWkoEeAhPcRLdE8A" title="7. 学习外汇下降楔形模式"></iframe></div>`
        },
        {
            title: `8. 学习外汇上升和下降三角形形态`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/SO5LQvhAj0e2kioEZuMsTg" title="8. 学习外汇上升和下降三角形形态"></iframe></div>`
        },
        {
            title: `9. 学习外汇对称三角形模式`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/1Y4S4p86oEKzhshP8qMmA" title="9. 学习外汇对称三角形模式"></iframe></div>`
        },
        {
            title: `10. 学习外汇箱形区间`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/5G739nXbEy85qxMq4O0Q" title="10. 学习外汇箱形区间"></iframe></div>`
        },
        {
            title: `11. 学习外汇杯柄形成模式`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/JnzXs2je0yfnpFOh3OTmA" title="11. 学习外汇杯柄形成模式"></iframe></div>`
        },
        {
            title: `12. 学习外汇倒杯柄形态`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/cWRl4NuPE2KJSIKgBXUcg" title="12. 学习外汇倒杯柄形态"></iframe></div>`
        },
        {
            title: `13. 学习外汇上升楔形模式`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/1ePJZSJCxU67KmZBmhauuQ" title="13. 学习外汇上升楔形模式"></iframe></div>`
        },
    ])

    const cnForexIndicatorsList = reactive([
        {
            title: `1.外汇 RSI 相对强弱指数`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/4JFDkqpccUWqmjRSGfeA" title="1.外汇 RSI 相对强弱指数"></iframe></div>`
        },
        {
            title: `2. 外汇 RSI 随机震荡指标`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/ZXRP9ZUmLE6upvFphijzQ" title="2. 外汇 RSI 随机震荡指标"></iframe></div>`
        },
        {
            title: `3. 外汇 ATR 平均真实波动范围`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/rcxpYhOInU6rTCjTs5g9Hg" title="3. 外汇 ATR 平均真实波动范围"></iframe></div>`
        },
        {
            title: `4. 学习外汇移动平均线`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/FvkHbVn9wUeb5HucKbun7Q" title="4. 学习外汇移动平均线"></iframe></div>`
        },
        {
            title: `5. 外汇移动平均线收敛发散 MACD`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/0nwGU7RQEC8YlwDVX9wXw" title="5. 外汇移动平均线收敛发散 MACD"></iframe></div>`
        },
        {
            title: `6. 外汇平均方向指数 ADX`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/8RP0XwICNEq4UXggnxPmww" title="6. 外汇平均方向指数 ADX"></iframe></div>`
        },
        {
            title: `7. 外汇布林线`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/5T3QYpHDSEGpW4n90aqwg" title="7. 外汇布林线"></iframe></div>`
        },
        {
            title: `8. 外汇抛物线 SAR`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/f114zsWJkkSbmwDC7YStlA" title="8. 外汇抛物线 SAR"></iframe></div>`
        },
        {
            title: `9. 外汇 Ichimoku Kinko Hyo`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/LpJeRUMT0KpL2GfJjq4Xw" title="9. 外汇 Ichimoku Kinko Hyo"></iframe></div>`
        },
        {
            title: `10. 外汇枢轴点`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/i4IQPcGpz0mINKzJ7lXx5g" title="10. 外汇枢轴点"></iframe></div>`
        },
    ])

    
    const cnTimingInForexList = reactive([
        {
            title: `1. 外汇交易中的入场时机`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/lJv9JaYx5EuNWJ1QxLgIgA" title="1. 外汇交易中的入场时机"></iframe></div>`
        },
        {
            title: `2. 外汇交易时退出时机`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/6cV4qFSz3kiI4RYzeGC21g" title="2. 外汇交易时退出时机"></iframe></div>`
        },
    ])

    const cnMT4List = reactive([
        {
            title: `1. MT4 入门`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/1VUL9ffqAkmJFhZqUZWtQ" title="1. MT4 入门"></iframe></div>`
        },
        {
            title: `2. 市场观察 - 基础知识`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/uZTWgo9EUa7rj4hmXnew" title="2. 市场观察 - 基础知识"></iframe></div>`
        },
        {
            title: `3. 图表窗口基础知识`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/MjDZVFflnkOUHQoTkMDYJw" title="3. 图表窗口基础知识"></iframe></div>`
        },
        {
            title: `4. 终端窗口基础知识 - 第 1 部分`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/7UfBHwe6UGkkIzt2dHuLw" title="4. 终端窗口基础知识 - 第 1 部分"></iframe></div>`
        },
        {
            title: `5. 终端窗口基础知识 - 第 2 部分`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/BkJuusnVPEiWxbyE0hzZA" title="5. 终端窗口基础知识 - 第 2 部分"></iframe></div>`
        },
        {
            title: `6. 导航器窗口基础知识`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/3PHrPszZ40SOjT7cQEzR0g" title="6. 导航器窗口基础知识"></iframe></div>`
        },
        {
            title: `7. 下订单`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/ujtmM5jtjUm5tRatcNzXDA" title="7. 下订单"></iframe></div>`
        },
        {
            title: `8. 账户历史记录/已平仓交易`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/i3eNRjpyKEWvS4n2rM5t8g" title="8. 账户历史记录-已平仓交易"></iframe></div>`
        },
        {
            title: `9. 市场观察详情`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/9sYqvvzPnke6fD2uyndssg" title="9. 市场观察详情"></iframe></div>`
        },
        {
            title: `10. 关于图表的一切`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/sB5uOacimU29behPMFb4yA" title="10. 关于图表的一切"></iframe></div>`
        },
        {
            title: `11. 图表窗口属性`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/i9Eda7NNckKbFg6yq4SyZQ" title="11. 图表窗口属性"></iframe></div>`
        },
        {
            title: `12. 指标和脚本`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/8gUzvo3jEU6L6tBTyWQnw" title="12. 指标和脚本"></iframe></div>`
        },
    ])

    const cnCryptocurrenciesList = reactive([
        {
            title: `1. 背景 - 早期数字货币`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/GG5xhrhnlUy1EPxmvZnswA" title="1. 背景 - 早期数字货币"></iframe></div>`
        },
        {
            title: `2. 区块链和加密货币的演变`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/gGheNFOqYkOFsPfnn3ribg" title="2. 区块链和加密货币的演变"></iframe></div>`
        },
        {
            title: `3. 数字货币和区块链的未来`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/msBj8nFNlkOm1uUZd5dig" title="3. 数字货币和区块链的未来"></iframe></div>`
        },
        {
            title: `4. 背景 - 拥有数字货币的概念`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/3zP7wFaWr0y93otNu56rWw" title="4. 背景 - 拥有数字货币的概念"></iframe></div>`
        },
        {
            title: `5. 什么是钱包以及它们如何工作`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/tkgAsLfDEECXw6n0tadxWA" title="5. 什么是钱包以及它们如何工作"></iframe></div>`
        },
        {
            title: `6. 备份和离线存储 - 为什么它很重要，如何做到`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/1UA3zl1IeUSChdPkxyV37Q" title="6. 备份和离线存储 - 为什么它很重要，如何做到"></iframe></div>`
        },
        {
            title: `7. 移动安全 - 如何安全地保护您的移动钱包`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/GoUh04EeZkuZVLlc2B1L7A" title="7. 移动安全 - 如何安全地保护您的移动钱包"></iframe></div>`
        },
        {
            title: `8. 加密货币的类型`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/SGgWJHO30iVbGcqEgr5g" title="8. 加密货币的类型"></iframe></div>`
        },
        {
            title: `9. 什么是比特币？`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/Voi2UKjxqketXTZskEVqng" title="9. 什么是比特币？"></iframe></div>`
        },
        {
            title: `10. 比特币的历史`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/stuaW8U2SEmMSMlqZPifZQ" title="10. 比特币的历史"></iframe></div>`
        },
        {
            title: `11. 除了投资之外，比特币的使用方式`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/JrrrVThpkIQONfzzbjIQ" title="11. 除了投资之外，比特币的使用方式"></iframe></div>`
        },
        {
            title: `12. 如何投资比特币`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/aB1kCfK9UKMOQLPTdGVuA" title="12. 如何投资比特币"></iframe></div>`
        },
        {
            title: `13. 比特币交易涉及哪些风险`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/k5OSEh48aEqlTYqEeSgHPQ" title="13. 比特币交易涉及哪些风险"></iframe></div>`
        },
        {
            title: `14. 如何购买比特币`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/MhT1L3if10GncA8W19T8DQ" title="14. 如何购买比特币"></iframe></div>`
        },
        {
            title: `15. 为什么接受比特币？`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/zFyQyW8ROk2y2G5JsaIfwA" title="15. 为什么接受比特币？"></iframe></div>`
        },
        {
            title: `16. 接受比特币涉及哪些风险`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/sfNGDQNtB02CNVXuOUojw" title="16. 接受比特币涉及哪些风险"></iframe></div>`
        },
        {
            title: `17. 如何接受比特币支付服务或商品`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/1lwjpTrscEGkT6VuLjSw3w" title="17. 如何接受比特币支付服务或商品"></iframe></div>`
        },
        {
            title: `18. 税务、会计和法律展望`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/Zm9DQoEQAE2MclmAyPCGDw" title="18. 税务、会计和法律展望"></iframe></div>`
        },
    ])


    const cnIntroductionToTheStockMarketList = reactive([
        {
            title: `1. 股票市场简介`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/CsgJ5mHXkeGVh11t9qmXw" title="1. 股票市场简介"></iframe></div>`
        },
        {
            title: `2. 股票图表可以预测未来和交易系统吗？`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/AGBHo0YIUy4Uw5yBDZSBg" title="2. 股票图表可以预测未来和交易系统吗？"></iframe></div>`
        },
        {
            title: `3. 支撑位和阻力位交易策略`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/9trieaYIB0yZtSjdenE9g" title="3. 支撑位和阻力位交易策略"></iframe></div>`
        },
        {
            title: `4. 如何确定市场方向 - 第 1 部分`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/4GBnzAhYkSTaViFWrbEAA" title="4. 如何确定市场方向 - 第 1 部分"></iframe></div>`
        },
        {
            title: `5. 如何确定市场方向 - 第 2 部分`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/IuGnCO4UC4rHIALW53lQ" title="5. 如何确定市场方向 - 第 2 部分"></iframe></div>`
        },
        {
            title: `6. 图表模式：简介`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/bcv6NHK3a0SgvzZXyJNstA" title="6. 图表模式：简介"></iframe></div>`
        },
        {
            title: `7. 对称三角形`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/UHigXan1EescMspGcSC9g" title="7. 对称三角形"></iframe></div>`
        },
        {
            title: `8. 对称三角形交易策略`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/UZObzq1f2ESvIYoCgamN5Q" title="8. 对称三角形交易策略"></iframe></div>`
        },
        {
            title: `9. 旗帜和三角旗`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/yx0ODfT56UiVZC9OsaUiA" title="9. 旗帜和三角旗"></iframe></div>`
        },
        {
            title: `10. 旗帜和三角旗交易策略`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/4DMLGwgmbUOKRJKwojhJ1g" title="10. 旗帜和三角旗交易策略"></iframe></div>`
        },
        {
            title: `11. 上升三角形`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/agVAwlXmTUCpKusXRJLToA" title="11. 上升三角形"></iframe></div>`
        },
        {
            title: `12. 上升三角形交易策略`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/esvAi82X0ChgUfAuiE2bw" title="12. 上升三角形交易策略"></iframe></div>`
        },
        {
            title: `13. 交易量和趋势`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/0jl7O6g71EEKoT7uREuQ" title="13. 交易量和趋势"></iframe></div>`
        },
    ])

    const cnAdvancedStockMarketTradingLevel1List = reactive([
        {
            title: `1. 市场指标`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/pLi3rE1WSkBHVvNSh7cQ" title="1. 市场指标"></iframe></div>`
        },
        {
            title: `2. 交易方法`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/MXRFtxmq5EqOj1SzWbcrhQ" title="2"></iframe></div>`
        },
        {
            title: `3. 整数`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/DUiZQcc7i06I0Im763NK0A" title="3. 整数"></iframe></div>`
        },
        {
            title: `4. 建立交易`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/0FIqSXOMuEiYRb2I8wMjFQ" title="4. 建立交易"></iframe></div>`
        },
        {
            title: `5. 专业交易员的技术分析`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/wZQBsd4DmkmvZoiYSNyZ6g" title="5. 专业交易员的技术分析"></iframe></div>`
        },
        {
            title: `6. 实用技术分析`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/tWuRGegbOUqNgKgKGIgefQ" title="6. 实用技术分析"></iframe></div>`
        },
        {
            title: `7. 交易心理学`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/ViPFCKcVCUyJgMl5ogDg" title="7. 交易心理学"></iframe></div>`
        },
        {
            title: `8. 风险和头寸管理`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/rF3GozwzOEeBC558dekszg" title="8. 风险和头寸管理"></iframe></div>`
        },
        {
            title: `9. 日内交易`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/N2k4VDwwEKpr6nJ2jwog" title="9. 日内交易"></iframe></div>`
        },
        {
            title: `10. 交易套利`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/BkTzQNHR04yybQnIPGCQ" title="10. 交易套利"></iframe></div>`
        },
        {
            title: `11. 交易准备和行业`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/4AQnx34xBkK8Q2FtfGpcuQ" title="11. 交易准备和行业"></iframe></div>`
        },
    ])

    const cnAdvancedStockMarketTradingLevel2List = reactive([
        {
            title: `1. 交易小型股`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/NwmdrPwEQ0qydAEnuVof2g" title="1. 交易小型股"></iframe></div>`
        },
        {
            title: `2. 识别机构策略并应对它们`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/reefHVoqqkSOl37seR6MLQ" title="2. 识别机构策略并应对它们"></iframe></div>`
        },
        {
            title: `3. 使用热键`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/XIY4ITzJT060PSw1c3eJpw" title="3. 使用热键"></iframe></div>`
        },
        {
            title: `4. 时间与销售的高级使用`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/qDvSbRF8aEWWbhqACyeS1g" title="4. 时间与销售的高级使用"></iframe></div>`
        },
        {
            title: `5. 管理“观察名单”`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/KMkFLuJK0KZtl5Q711fdA" title="5. 管理“观察名单”"></iframe></div>`
        },
        {
            title: `6. 固定数量悖论`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/GN0dcaw8EmYiQN5mCzb2Q" title="6. 固定数量悖论"></iframe></div>`
        },
        {
            title: `7. 识别“交易陷阱”`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/oeX5siYOWUGSnx16YbPtnQ" title="7. 识别“交易陷阱”"></iframe></div>`
        },
        {
            title: `8. “20:20”方法——专家如何阅读图表？`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/n4GVq55mB0SCCvGBhmy2OA" title="8. “20-20”方法——专家如何阅读图表？"></iframe></div>`
        },
        {
            title: `9. 如何使用失败模式进行交易`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/yiMBZu8C3kukiX6miTMVw" title="9. 如何使用失败模式进行交易"></iframe></div>`
        },
        {
            title: `10. 使用 NRB 和 WRB K线图`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/59V5EvGfLka0Z4kdz9l5Q" title="10. 使用 NRB 和 WRB K线图"></iframe></div>`
        },
        {
            title: `11. 交易 IPO：日内交易和波段交易`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/tJCoayd0ybXTOvn8KLg" title="11. 交易 IPO：日内交易和波段交易"></iframe></div>`
        },
    ])


    const cnTopTraderList = reactive([
        {
            title: `1. 高级交易和技术分析`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/bpAToXurk6uB9EqtNcsuQ" title="1. 高级交易和技术分析"></iframe></div>`
        },
        {
            title: `2. 高级股票交易策略 - 追踪止损`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/sgkoHOpC6E0wwaX9MhJQg" title="2. 高级股票交易策略 - 追踪止损"></iframe></div>`
        },
        {
            title: `3. 股票交易中的枢轴点`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/lEQdWdjCskim87l8eq2Wvg" title="3. 股票交易中的枢轴点"></iframe></div>`
        },
        {
            title: `4. 根据博弈论进行交易`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/MnEZ7naqwEq75kVvdlYXvg" title="4. 根据博弈论进行交易"></iframe></div>`
        },
        {
            title: `5. 练习 VWAP 策略`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/nSDCn2vkNUCkEOCVcMKug" title="5. 练习 VWAP 策略"></iframe></div>`
        },
        {
            title: `6. 交易管理`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/nSGzO6VsPE6u3jxNlj5A" title="6. 交易管理"></iframe></div>`
        },
    ])

    const cnAdvancedTradingToolsAndTechniquesList = reactive([
        {
            title: `1. MT5 简介`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/y93QJpUM706LkNk8RJFtXw" title="1. MT5 简介"></iframe></div>`
        },
        {
            title: `2. 外汇市场基础知识和交易示例`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/fJCWchZq506luhhfZUGg" title="2. 外汇市场基础知识和交易示例"></iframe></div>`
        },
        {
            title: `3. 大宗商品市场基础知识和交易示例`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/gpVZ5un8m0aT3kuUmUFNg" title="3. 大宗商品市场基础知识和交易示例"></iframe></div>`
        },
        {
            title: `4. 交易全球指数`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/kQEPXi7uMUmfdswHvsu3ig" title="4. 交易全球指数"></iframe></div>`
        },
        {
            title: `5. 市场新闻交易技术`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/0IWiuWl5s0qbpf1ixP2izg" title="5. 市场新闻交易技术"></iframe></div>`
        },
        {
            title: `6. 趋势交易`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/Ki8pHFa4skWhAM6TVU53A" title="6. 趋势交易"></iframe></div>`
        },
    ])

    //vn
    const vnBasicForexEducationList = reactive([
        {
            title: `Tại sao nên giao dịch Forex`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/Ck8eepOSR0uQQhP2l8ZzOw" title="Tại sao nên giao dịch Forex"></iframe></div>`
        },
        {
            title: `Khi nào nên giao dịch Forex`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/RUcE49Xdmk9X44ggaBpJw" title="Khi nào nên giao dịch Forex"></iframe></div>`
        },
        {
            title: `Thuật ngữ giao dịch Hoặc Tôi sẽ “long” ở đâu`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/5TytuWjUnE6kPbSIU59BGQ" title="Thuật ngữ giao dịch Hoặc Tôi sẽ “long” ở đâu"></iframe></div>`
        },
        {
            title: `Giao dịch sử dụng đòn bẩy hiệu quả`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/6zqBj8amB0m1pbCANvbtHg" title="Giao dịch sử dụng đòn bẩy hiệu quả"></iframe></div>`
        },
        {
            title: `PIP là gì?`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/vg0gvM2iEk2A5mCdxUOgQA" title="PIP là gì-"></iframe></div>`
        },
        {
            title: `Làm thế nào để đặt mở một giao dịch Forex`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/38jHslkpTkqrQJFiITKQ" title="Làm thế nào để đặt mở một giao dịch Forex"></iframe></div>`
        },
        {
            title: `Các lệnh Forex`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/U08ml855QUiGgT66O1PUgQ" title="Các lệnh Forex"></iframe></div>`
        },
        {
            title: `Phân tích kĩ thuật giao dịch Forex`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/Va5XJhl0EuP0AAiFlO9Sg" title="Phân tích kĩ thuật giao dịch Forex"></iframe></div>`
        },
        {
            title: `Phân tích cơ bản trong Forex`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/8Msm5enzkke3GxfkuhNAQ" title="Phân tích cơ bản trong Forex"></iframe></div>`
        },
        {
            title: `Các dạng đồ thị Forex`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/aWBE3z6YEC5cAg6fj1XbA" title="Các dạng đồ thị Forex"></iframe></div>`
        },
        {
            title: `Hỗ trợ và Kháng cự trong Forex`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/krCDTpFUCbDSZO40jMFQ" title="Hỗ trợ và Kháng cự trong Forex"></iframe></div>`
        },
        {
            title: `Đường xu hướng`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/3UlR6Ek2n0OIPYBrseoiNg" title="Đường xu hướng"></iframe></div>`
        },
    ])

    const vnFibonacciList = reactive([
        {
            title: `Dãy Fibonacci`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/NdUW0jy5Bk21c35zkEBuqw" title="Dãy Fibonacci"></iframe></div>`
        },
        {
            title: `Dãy Fibonacci mở rộng trong Forex`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/APdQh6K0l0q765vjsEVq4w" title="Dãy Fibonacci mở rộng trong Forex"></iframe></div>`
        },
        {
            title: `Tìm hiểu về Fibonacci hình quạt và hình cung trong Forex`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/7Y0qfhfRDkyZYSvFldPg" title="Tìm hiểu về Fibonacci hình quạt và hình cung trong Forex"></iframe></div>`
        },
        {
            title: `Tìm hiểu Dãy Fibonacci kết hợp với các công cụ phân tích kỹ thuật khác trong Forex`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/KqaljsuVE6f8JOKRqNLHg" title="Tìm hiểu Dãy Fibonacci kết hợp với các công cụ phân tích kỹ thuật khác trong Forex"></iframe></div>`
        },
    ])

    const vnUnderstandingCandlesticksList = reactive([
        {
            title: `Chân nến`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/dhOwxiB8akiMEsun9Y60gA" title="Chân nến"></iframe></div>`
        },
        {
            title: `Nến Doji trong Forex`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/XPQfeAMRYE6yYeQ8RYwtJw" title="Nến Doji trong Forex"></iframe></div>`
        },
        {
            title: `Nến Marubozu trong Forex`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/eMUjtRLYUErgPrH1JM7g" title="Nến Marubozu trong Forex"></iframe></div>`
        },
        {
            title: `Nến Búa và Người treo cổ`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/v8wJFQ7vk6mXMu4ur813g" title="Nến Búa và Người treo cổ"></iframe></div>`
        },
        {
            title: `Nến Búa ngược và Sao băng`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/OqcOABHiL0i45nnzihmOPw" title="Nến Búa ngược và Sao băng"></iframe></div>`
        },
        {
            title: `Mẫu hình nến xuyên tăng`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/f9TbKXMXU02HIurzNICusg" title="Mẫu hình nến xuyên tăng"></iframe></div>`
        },
        {
            title: `Mẫu hình mây đen che phủ`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/05ByWAxhu0uDQAcfFyfiA" title="Mẫu hình mây đen che phủ"></iframe></div>`
        },
        {
            title: `Các hình mẫu nến nhấn chìm tăng và giảm`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/f9gRL2CPrUyFDnYOdwQExg" title="Các hình mẫu nến nhấn chìm tăng và giảm"></iframe></div>`
        },
        {
            title: `Đỉnh nhíp và Đáy nhíp`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/ijtdlEq7PUaXxMCcDSt9sw" title="Đỉnh nhíp và Đáy nhíp"></iframe></div>`
        },
        {
            title: `Mẫu hình Sao hôm và Sao mai`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/TTbzxLpug0KbiMcJutuaA" title="Mẫu hình Sao hôm và Sao mai"></iframe></div>`
        },
        {
            title: `lính trắng 3 quạ đen`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/CHQXaIqCxkyWN11gLl4XA" title="lính trắng 3 quạ đen"></iframe></div>`
        },
        {
            title: `Mẫu hình 3 bên trong ngược lên 3 bên trong úp xuống`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/GKmuSOgq0ymm3R8ydMW7A" title="Mẫu hình 3 bên trong ngược lên 3 bên trong úp xuống"></iframe></div>`
        },
        {
            title: `Công thức tăng và giảm 3`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/3nVxn35RU2x9a1EEijvhA" title="Công thức tăng và giảm 3"></iframe></div>`
        },
    ])

    const vnChartFormationPatternsList = reactive([
        {
            title: `Mẫu hình thành 2 đỉnh và 2 đáy trong Forex`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/kY8SlUCpEEGt4tizenayMA" title="Mẫu hình thành 2 đỉnh và 2 đáy trong Forex"></iframe></div>`
        },
        {
            title: `Tìm hiểu mẫu hình đầu và vai Forex`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/hohcQSjoLUyz5aOvzg6jA" title="Tìm hiểu mẫu hình đầu và vai Forex"></iframe></div>`
        },
        {
            title: `Tìm hiểu mô hình nghịch đảo đầu và vai Forex`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/6FoSnhkBt06vz4E6cE9fyw" title="Tìm hiểu mô hình nghịch đảo đầu và vai Forex"></iframe></div>`
        },
        {
            title: `Tìm hiểu mẫu hình cờ tăng Forex`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/T7lYp3ManUmovPWArxUSTA" title="Tìm hiểu mẫu hình cờ tăng Forex"></iframe></div>`
        },
        {
            title: `Tìm hiểu mẫu hình cờ giảm Forex`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/m63VJ14eLkWU8qNkG08l6g" title="Tìm hiểu mẫu hình cờ giảm Forex"></iframe></div>`
        },
        {
            title: `Tìm hiểu mẫu hình cờ hiệu tăng và giảm trong Forex `,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/v10sRlnbBkyPZDlO9cr5A" title="Tìm hiểu mẫu hình cờ hiệu tăng và giảm trong Forex"></iframe></div>`
        },
        {
            title: `Tìm hiểu mẫu hình cái nêm hướng xuống`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/gBjQAdnvzkCSUdhPg2Drg" title="Tìm hiểu mẫu hình cái nêm hướng xuống"></iframe></div>`
        },
        {
            title: `Tìm hiểu mẫu hình tam giác tăng dần và giảm dần trong Forex`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/H4Y8y0mKekKUivFNUeEA" title="Tìm hiểu mẫu hình tam giác tăng dần và giảm dần trong Forex"></iframe></div>`
        },
        {
            title: `Tìm hiểu mô hình tam giác đối xứng trong Forex`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/lVDOsffwQEC9uo3KiP0Vgw" title="Tìm hiểu mô hình tam giác đối xứng trong Forex"></iframe></div>`
        },
        {
            title: `Phạm vi Hộp trong Forex`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/QT8CW2d9NUKtH8AZS0xvSg" title="Phạm vi Hộp trong Forex"></iframe></div>`
        },
        {
            title: `Tìm hiểu mẫu hình Cốc và Tay cầm trong Forex`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/wADLTsIkO39V17l49Nw" title="Tìm hiểu mẫu hình Cốc và Tay cầm trong Forex"></iframe></div>`
        },
        {
            title: `Tìm hiểu mẫu hình Cốc và Tay cầm đảo ngược trong Forex`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/M3p357TcMUmBuA3QXZaiEQ" title="Tìm hiểu mẫu hình Cốc và Tay cầm đảo ngược trong Forex"></iframe></div>`
        },
        {
            title: `Tìm hiểu mẫu hình nêm hướng lên trong Forex`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/lRb15ens9Eu5bVZCDSCX9Q" title="Tìm hiểu mẫu hình nêm hướng lên trong Forex"></iframe></div>`
        },
    ])

    const vnForexIndicatorsList = reactive([
        {
            title: `Chỉ báo ngoại hối RSI`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/RThsiIzkSEKe2ppXjNdDGg" title="Chỉ báo ngoại hối RSI"></iframe></div>`
        },
        {
            title: `Chỉ báo ngoại hối Stochastic Oscillator`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/LrKupcRQbEmlmhZvlpJV4Q" title="Chỉ báo ngoại hối Stochastic Oscillator"></iframe></div>`
        },
        {
            title: `Chỉ báo ngoại hối ATR`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/1wGQQUqiC0O5jUl2WQnkpA" title="Chỉ báo ngoại hối ATR"></iframe></div>`
        },
        {
            title: `Chỉ báo ngoại hối MA – Chỉ báo trung bình động`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/EtByg0U3U6dAfVFdee5AQ" title="Chỉ báo ngoại hối MA – Chỉ báo trung bình động"></iframe></div>`
        },
        {
            title: `Chỉ báo ngoại hối MACD – Chỉ báo trung bình động hội tụ phân kỳ`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/bS0nweenXEtprnZ60gDag" title="Chỉ báo ngoại hối MACD – Chỉ báo trung bình động hội tụ phân kỳ"></iframe></div>`
        },
        {
            title: `Chỉ báo ngoại hối ADX – Chỉ báo định hướng trung bình`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/7CJUSIp8EOjk5hah9CJfA" title="Chỉ báo ngoại hối ADX – Chỉ báo định hướng trung bình"></iframe></div>`
        },
        {
            title: `Chỉ báo ngoại hối Bollinger Bands`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/s9qX6gjVkCMIsQpGEHKQ" title="Chỉ báo ngoại hối Bollinger Bands"></iframe></div>`
        },
        {
            title: `Chỉ báo ngoại hối Parabolic SAR`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/svy8Z15o10ulVyVZ2OuAOw" title="Chỉ báo ngoại hối Parabolic SAR"></iframe></div>`
        },
        {
            title: `Chỉ số ngoại hối Ichimoku Kinko Hyo`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/n50zvtFgAUC0gPkm9LlfrQ" title="Chỉ số ngoại hối Ichimoku Kinko Hyo"></iframe></div>`
        },
        {
            title: `Chỉ báo ngoại hối Pivot Points – Chỉ báo điểm trục`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/O0jeOn9KIkm5ehA1k9N6Yg" title="Chỉ báo ngoại hối Pivot Points – Chỉ báo điểm trục"></iframe></div>`
        },
    ])

    
    const vnTimingInForexList = reactive([
        {
            title: `Xác đinh thời điểm vào lệnh khi giao dịch ngoại hối`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/4Gzmtkoe50Yd19IVxwl0Q" title="Xác đinh thời điểm vào lệnh khi giao dịch ngoại hối"></iframe></div>`
        },
        {
            title: `Xác đinh thời điểm thoát lệnh trong giao dịch ngoại hối`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/uzSGBrGDECeCJHHZLmM8w" title="Xác đinh thời điểm thoát lệnh trong giao dịch ngoại hối"></iframe></div>`
        },
    ])

    const vnMT4List = reactive([
        {
            title: `Bắt đầu với MT4`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/ya7HqVBhrUGyxitSZQHqw" title="Bắt đầu với MT4"></iframe></div>`
        },
        {
            title: `Theo dõi thị trường- Khái niệm cơ bản`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/y1oAaVRkjk6YDNNplNEhiw" title="Theo dõi thị trường- Khái niệm cơ bản"></iframe></div>`
        },
        {
            title: `Khái niệm cơ bản về cửa sổ biểu đồ`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/VN1rU3N0qL4weMdgKfDw" title="Khái niệm cơ bản về cửa sổ biểu đồ"></iframe></div>`
        },
        {
            title: `Khái niệm cơ bản về cửa sổ Terminal - Phần 1`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/k5lIImUapUu2kO8DOcZKQ" title="Khái niệm cơ bản về cửa sổ Terminal - Phần 1"></iframe></div>`
        },
        {
            title: `Khái niệm cơ bản về cửa sổ Terminal - Phần 2`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/C2M8rJoXbEzaFWDxHh7A" title="Khái niệm cơ bản về cửa sổ Terminal - Phần 2"></iframe></div>`
        },
        {
            title: `Cơ bản về Cửa sổ Điều hướng`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/hKbMh6sr9EFDBX3sI4ZiA" title="Cơ bản về Cửa sổ Điều hướng"></iframe></div>`
        },
        {
            title: `Đặt hàng`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/GU0pYxPpika5NuEdMAfQ" title="Đặt hàng"></iframe></div>`
        },
        {
            title: `Lịch sử tài khoản / Giao dịch đã đóng`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/PyQR9YEx0Em4bYrnuNaUA" title="Lịch sử tài khoản - Giao dịch đã đóng"></iframe></div>`
        },
        {
            title: `Theo Dõi Thị Trường Chi Tiết`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/aUbj5skaxE6FXWaZrjmIlg" title="Theo Dõi Thị Trường Chi Tiết"></iframe></div>`
        },
        {
            title: `Tất tần tật về biểu đồ`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/EsPooggjU2q3Fd7iaERQw" title="Tất tần tật về biểu đồ"></iframe></div>`
        },
        {
            title: `Thuộc tính cửa sổ biểu đồ`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/2XtVO6UwT0uyGKnGDm1f5Q" title="Thuộc tính cửa sổ biểu đồ"></iframe></div>`
        },
        {
            title: `Các chỉ báo và tập lệnh`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/V5u3odWpKUKWZWUcUI7m6Q" title="Các chỉ báo và tập lệnh"></iframe></div>`
        },
    ])

    const vnCryptocurrenciesList = reactive([
        {
            title: `Bối cảnh – những đồng tiền điện tử đầu tiên (1980-2009)`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/nJziHbTEXrAZQHg1nJw" title="Bối cảnh – những đồng tiền điện tử đầu tiên (1980-2009)"></iframe></div>`
        },
        {
            title: `Sự phát triển của blockchain và tiền điện tử`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/ZNNGC4t01Eugz3tequLg9A" title="Sự phát triển của blockchain và tiền điện tử"></iframe></div>`
        },
        {
            title: `Tương lai của tiền tệ kỹ thuật số`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/tpq23unSkarBvbXUJQhEQ" title="Tương lai của tiền tệ kỹ thuật số"></iframe></div>`
        },
        {
            title: `Nền tảng - Khái niệm về việc sở hữu một loại tiền kỹ thuật số`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/wrXuCR7LFk62EqoIZjO9w" title="Nền tảng - Khái niệm về việc sở hữu một loại tiền kỹ thuật số"></iframe></div>`
        },
        {
            title: `Ví" Wallet là gì và chúng hoạt động như thế nào`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/X8zc1gRpBkqmL2Zv08XeuA" title="Ví- Wallet là gì và chúng hoạt động như thế nào"></iframe></div>`
        },
        {
            title: `Sao lưu & Lưu trữ ngoại tuyến - tại sao nó quan trọng, làm thế nào để làm điều đó?`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/9p8JFPlM4E2yYuQ1U2v6Mw" title="Sao lưu & Lưu trữ ngoại tuyến - tại sao nó quan trọng, làm thế nào để làm điều đó-"></iframe></div>`
        },
        {
            title: `Bảo mật trực tuyến: cách bảo vệ ví di động của bạn một cách an toàn`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/gPgwmki2N0eg6igb0kArcg" title="Bảo mật trực tuyến- cách bảo vệ ví di động của bạn một cách an toàn"></iframe></div>`
        },
        {
            title: `Các loại tiền điện tử`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/G13tId1cEOCuSZApQkA0A" title="Các loại tiền điện tử"></iframe></div>`
        },
        {
            title: `Bitcoin là gì?`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/vdj3CtNSJEmDheR5btmg" title="Bitcoin là gì-"></iframe></div>`
        },
        {
            title: `Lịch sử của bitcoin`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/UabIyJg47kCRMsDbTEP0Iw" title="Lịch sử của bitcoin"></iframe></div>`
        },
        {
            title: `Cách sử dụng bitcoin bên cạnh việc đầu tư`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/VHMKIagYzkuGzsLX2h2mww" title="Cách sử dụng bitcoin bên cạnh việc đầu tư"></iframe></div>`
        },
        {
            title: `Cách đầu tư vào Bitcoin`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/RVO86EIVw0W3wNvT0eLmYg" title="Cách đầu tư vào Bitcoin"></iframe></div>`
        },
        {
            title: `Rủi ro liên quan đến giao dịch bitcoin là gì`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/Cx9qLTfi0G0PuFj2NJ66w" title="Những rủi ro liên quan đến việc chấp nhận bitcoin là gì-"></iframe></div>`
        },
        {
            title: `Cách mua Bitcoin`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/yiglv7rNUyHWvj5NrIrw" title="Cách mua Bitcoin"></iframe></div>`
        },
        {
            title: `Tại sao phải chấp nhận bitcoin?`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/ehvccb1Wk6KrnhLDfE6Jw" title="Tại sao phải chấp nhận bitcoin-"></iframe></div>`
        },
        {
            title: `Những rủi ro liên quan đến việc chấp nhận bitcoin là gì?`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/TBYyAXFN6kSs0DyOc0S9mg" title="Rủi ro liên quan đến giao dịch bitcoin là gì"></iframe></div>`
        },
        {
            title: `Cách chấp nhận Bitcoin`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/NV3DN8cf8Ua9bMgXvOtIsA" title="Cách chấp nhận Bitcoin"></iframe></div>`
        },
        {
            title: `Triển vọng về Thuế và Pháp lý`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/61XfgPAkwUC0rINEKybPA" title="Triển vọng về Thuế và Pháp lý"></iframe></div>`
        },
    ])


    const vnIntroductionToTheStockMarketList = reactive([
        {
            title: `Giới thiệu thị trường chứng khoán`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/UQepfIvFJEG2RjTGehbfFw" title="Giới thiệu thị trường chứng khoán"></iframe></div>`
        },
        {
            title: `Biểu đồ chứng khoán có thể dự đoán tương lai không? Các hệ thống giao dịch`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/hT2BHMNBpkeBJWmDXlkPjA" title="Biểu đồ chứng khoán có thể dự đoán tương lai không- Các hệ thống giao dịch"></iframe></div>`
        },
        {
            title: `Chiến lược giao dịch vùng hỗ trợ và kháng cự`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/NKeZCmbUjEqHOaZ6CkPjyA" title="Chiến lược giao dịch vùng hỗ trợ và kháng cự"></iframe></div>`
        },
        {
            title: `Làm thế nào để xác định hướng thị trường?`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/0AP636d5G0KtQmBog0yRyg" title="Làm thế nào để xác định hướng thị trường-"></iframe></div>`
        },
        {
            title: `Xác định định hướng thị trường như thế nào? Phần 2`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/HDXPDjOwwESjUNczaG4oKA" title="Xác định định hướng thị trường như thế nào- Phần 2"></iframe></div>`
        },
        {
            title: `Mẫu biểu đồ: Giới thiệu`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/VRYKLAJakaifq4wFr0ydQ" title="Mẫu biểu đồ- Giới thiệu"></iframe></div>`
        },
        {
            title: `Mẫu biểu đồ: Tam giác đối xứng`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/elNCIeCgkm6TQE8S05PYw" title="Mẫu biểu đồ- Tam giác đối xứng"></iframe></div>`
        },
        {
            title: `Mẫu biểu đồ: chiến lược kinh doanh mô hình tam giác đối xứng`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/wTurRUP5RkaLGSWIMIFQOA" title="Mẫu biểu đồ- chiến lược kinh doanh mô hình tam giác đối xứng"></iframe></div>`
        },
        {
            title: `Mẫu biểu đồ: Cờ và cờ hiệu`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/1jcOSp5l6EmyL2rGYPJWNQ" title="Mẫu biểu đồ- Cờ và cờ hiệu"></iframe></div>`
        },
        {
            title: `Mẫu biểu đồ: chiến lược kinh doanh cờ và cờ hiệu`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/ghbrjRGk6EuCW36Sh0H4zQ" title="Mẫu biểu đồ- chiến lược kinh doanh cờ và cờ hiệu"></iframe></div>`
        },
        {
            title: `Mẫu biểu đồ: Tam giác tăng`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/WOBVnwl5hUW1gJHiBzau7Q" title="Mẫu biểu đồ- Tam giác tăng"></iframe></div>`
        },
        {
            title: `Mẫu biểu đồ: Mô hình tam giác tăng`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/tqXvYRD9dkCV4Q4FsskvlA" title="Mẫu biểu đồ- Mô hình tam giác tăng"></iframe></div>`
        },
        {
            title: `Khối lượng và Xu hướng`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/dfR5c0nSyEaJp4cQVTOoXg" title="Khối lượng và Xu hướng"></iframe></div>`
        },
    ])

    const vnAdvancedStockMarketTradingLevel1List = reactive([
        {
            title: `Các chỉ số thị trường`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/yaQlu1LPeUO1TWsTS9Rfaw" title="Các chỉ số thị trường"></iframe></div>`
        },
        {
            title: `Phương pháp giao dịch`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/dVJstH5r0uxC7lawscXzA" title="Phương pháp giao dịch"></iframe></div>`
        },
        {
            title: `Số tròn`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/SBjr4HedrEaz1bdFLPRgg" title="Số tròn"></iframe></div>`
        },
        {
            title: `Thiết lập giao dịch`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/v8c0rwnVCk61Ktcj98eerQ" title="Thiết lập giao dịch"></iframe></div>`
        },
        {
            title: `Giới thiệu về phân tích kỹ thuật`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/xpDf6QadrkWRezCtIRnjA" title="Giới thiệu về phân tích kỹ thuật"></iframe></div>`
        },
        {
            title: `Phân tích kỹ thuật thực tế`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/Sg1f45ZsdUyqLFXNJ61Fg" title="Phân tích kỹ thuật thực tế"></iframe></div>`
        },
        {
            title: `Tâm lý giao dịch`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/DrChTMWLkkCaeh09R9LV2A" title="Tâm lý giao dịch"></iframe></div>`
        },
        {
            title: `Quản lý rủi ro và vị trí`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/3OKBexAAEU24hg6QVS9giA" title="Quản lý rủi ro và vị trí"></iframe></div>`
        },
        {
            title: `Chọn cổ phiếu & phân tích dữ liệu `,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/D8dxb75E02RUceVupLOaw" title="Chọn cổ phiếu & phân tích dữ liệu"></iframe></div>`
        },
        {
            title: `Kinh doanh chênh lệch giá`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/RzyO4iUMXkmQxsi5muQQ" title="Kinh doanh chênh lệch giá"></iframe></div>`
        },
        {
            title: `Chuẩn bị & Giao dịch`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/pI6AwdjtUCBWUicwTPvXw" title="Chuẩn bị & Giao dịch"></iframe></div>`
        },
    ])

    const vnAdvancedStockMarketTradingLevel2List = reactive([
        {
            title: `Giao dịch mũ nhỏ`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/uTUvcgkYUKg1xAtZSYo7A" title="Giao dịch mũ nhỏ"></iframe></div>`
        },
        {
            title: `Xác định các chiến thuật thể chế và đối phó với chúng`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/J5Gt1B7w4U6oFAoiJlVVw" title="Xác định các chiến thuật thể chế và đối phó với chúng"></iframe></div>`
        },
        {
            title: `Sử dụng phím nóng`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/RXHyEjIkNkmIdTE2D9Lwgg" title="Sử dụng phím nóng"></iframe></div>`
        },
        {
            title: `Sử dụng nâng cao thời gian và bán hàng`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/Hbv0g788AEuupxA7JFXgGg" title="Sử dụng nâng cao thời gian và bán hàng"></iframe></div>`
        },
        {
            title: `Quản lý danh sách theo dõi`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/6B6z1WAQMEyva9anj7Yefg" title="Quản lý danh sách theo dõi"></iframe></div>`
        },
        {
            title: `Nghịch lý số lượng cố định`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/DGoFcPdJEOSZVsZLV7Pw" title="Nghịch lý số lượng cố định"></iframe></div>`
        },
        {
            title: `Xác định bẫy thương mại`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/anrwG9Jvo06E6VwV8wgK7g" title="Xác định bẫy thương mại"></iframe></div>`
        },
        {
            title: `Phương pháp của 20:20 20 - làm thế nào để các chuyên gia đọc biểu đồ?`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/GOYmx32Yl02fWRNN2QQWCQ" title="Phương pháp của 20-20 20 - làm thế nào để các chuyên gia đọc biểu đồ-"></iframe></div>`
        },
        {
            title: ` Cách giao dịch bằng cách sử dụng các mẫu Thất bại`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/bayni4O5kkaIFMwES8AM6A" title=" Cách giao dịch bằng cách sử dụng các mẫu Thất bại"></iframe></div>`
        },
        {
            title: ` Sử dụng nến NRB và WRB`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/FVpXBPOk00GcDcJGvO7sWA" title=" Sử dụng nến NRB và WRB"></iframe></div>`
        },
        {
            title: `Giao dịch IPO ngày giao dịch và giao dịch swing`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/IIX4Bz5xUE6hLQREYl2hmQ" title="Giao dịch IPO ngày giao dịch và giao dịch swing"></iframe></div>`
        },
    ])


    const vnTopTraderList = reactive([
        {
            title: `Phân tích kỹ thuật và Giao dịch tiên tiến`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/upd6XaLl0ajnbhfb3cIBw" title="Phân tích kỹ thuật và Giao dịch tiên tiến"></iframe></div>`
        },
        {
            title: `Lệnh Trailing Stop và Chiến lược kinh doanh cổ phiếu tiên tiến`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/WBxEa4TwEeeGAvmMouA" title="Lệnh Trailing Stop và Chiến lược kinh doanh cổ phiếu tiên tiến"></iframe></div>`
        },
        {
            title: `Điểm xoay trong kinh doanh chứng khoán`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/abVO4kPyo0OvXTwCVf33w" title="Điểm xoay trong kinh doanh chứng khoán"></iframe></div>`
        },
        {
            title: `Kinh doanh theo Lý thuyết Trò chơi`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/qOqc50tuE2VWilb0Irqew" title="Kinh doanh theo Lý thuyết Trò chơi"></iframe></div>`
        },
        {
            title: `Chiến lược VWAP`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/i8gKuzHzkkWiUTkVFM14Qw" title="Chiến lược VWAP"></iframe></div>`
        },
        {
            title: `Quản lý giao dịch`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/ItXdqS5ElEK1KNC8PA2GuQ" title="Quản lý giao dịch"></iframe></div>`
        },
    ])

    const vnAdvancedTradingToolsAndTechniquesList = reactive([
        {
            title: `Giới thiệu về MT5`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/fwI4XWBGl0KQ4FhHmfb7A" title="Giới thiệu về MT5"></iframe></div>`
        },
        {
            title: `Cơ bản về thị trường ngoại hối và ví dụ`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/BglRQsj5l0eishIywc6JQ" title="Cơ bản về thị trường ngoại hối và ví dụ"></iframe></div>`
        },
        {
            title: `Thị trường hàng hóa và các ví dụ`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/X8a9mKmp1kG8pcrRqkMG1Q" title="Thị trường hàng hóa và các ví dụ"></iframe></div>`
        },
        {
            title: `Các chỉ số giao dịch toàn cầu và các ví dụ`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/xV8IQufrkCuYRxT7Lpmog" title="Các chỉ số giao dịch toàn cầu và các ví dụ"></iframe></div>`
        },
        {
            title: `Tin tức thị trường Nguyên tắc và ví dụ kỹ thuật giao dịch`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/FvZWFvdxtE68LPKvMgbuLw" title="Tin tức thị trường Nguyên tắc và ví dụ kỹ thuật giao dịch"></iframe></div>`
        },
        {
            title: `Giao dịch xu hướng`,
            intro: ``,
            content: `<div style="position:relative;width:100%;overflow:hidden;padding-top:56.25%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" allowfullscreen src="https://videos.dyntube.com/iframes/74xEXzJIEG1i89Zs5ZQ" title="Giao dịch xu hướng"></iframe></div>`
        },
    ])



    const enEducationAcademyList = reactive([
        {
            title: 'BEGINNER',
            intro: '',
            list: [
                {
                    title: 'Basic Forex Education',
                    intro: 'The foreign exchange market, also known as Forex, or the currency exchange market, is the place where currencies are traded. The global need for governments, businesses, and individuals to exchange currencies is the primary reason why Forex is the largest, most popular, and most liquid financial market in the world.',
                    list: enBasicForexEducationList
                },
                {
                    title: 'Fibonacci',
                    intro: 'Traders use Fibonacci ratios to find the potential reversal points in the market, as the price tends to find support and resistance of Fibonacci levels.',
                    list: enFibonacciList
                },
                {
                    title: 'Understanding Candlesticks',
                    intro: 'Candlestick trading is a very powerful tool in technical analysis. It provides us with great sentiment and market condition insights, as well as signals trend changes and price reversals.',
                    list: enUnderstandingCandlesticksList
                },
                {
                    title: 'Chart Formation Patterns',
                    intro: 'Using Chart formation patterns are vital for professional traders. And enables them to efficiently analyze various market situations.',
                    list: enChartFormationPatternsList
                },
            ]
        },
        {
            title: 'INTERMEDIATE',
            intro: '',
            list: [
                {
                    title: 'Forex Indicators',
                    intro: 'Learn how to trade using forex indicators. Forex indicators are used by technical analysts to help interpret price data and generate tradable buy and sell signals.',
                    list: enForexIndicatorsList
                },
                {
                    title: 'Timing In Forex',
                    intro: 'Fifty percent of good trade is about timing. Enter too early - and you risk being caught in the wrong direction. Enter too late - and most of your profit is gone. In this video we’ll go through a couple of tips that will help you get the timing right.',
                    list: enTimingInForexList
                },
                {
                    title: 'MT4',
                    intro: '',
                    list: enMT4List
                },
                {
                    title: 'Cryptocurrencies',
                    intro: 'Learn how to trade cryptocurrencies, its trading methodology and sharpen your trading skills in this unique and innovative asset.',
                    list: enCryptocurrenciesList
                },
            ]
        },
        {
            title: 'ADVANCED',
            intro: '',
            list: [
                {
                    title: 'Introduction To The Stock Market',
                    intro: `Fundamental or quantitative analysis involves looking at revenue, expenses, assets, liabilities in order to gain insight on a company's future performance. Market direction is actually referred to in the technical world, as trends. Trends are made of swing highs and swing lows, or waves. Welcome to the stock market.`,
                    list: enIntroductionToTheStockMarketList
                },
                {
                    title: 'Advanced Stock Market Trading - Level 1',
                    intro: 'This chapter covers the core tools and methods used by professional traders. You’ll learn how to read market indicators, structure and execute trades, apply practical technical analysis, and manage risk effectively. The lessons also focus on trading psychology, intraday strategies, arbitrage concepts, and market preparation—providing a complete framework for disciplined, consistent trading.',
                    list: enAdvancedStockMarketTradingLevel1List
                },
                {
                    title: 'Advanced Stock Market Trading - Level 2',
                    intro: `Trading securities can be as simple as pressing the buy or sell button on an electronic trading account.The time and sales are the most detailed display of a market's trading information. The WRB Analysis is a method that involves the combination of analyzing changes in volatility and supply/demand.`,
                    list: enAdvancedStockMarketTradingLevel2List
                },
                {
                    title: 'Top Trader',
                    intro: 'The hardest thing to get right in trading is the placement of stop losses and take profit levels.Trade management is the rules one lays down for trade implemented in real time; and a pivot point is a technical analysis indicator used to determine the overall trend of the market over different time frames.',
                    list: enTopTraderList
                },
                {
                    title: 'Advanced Trading Tools And Techniques',
                    intro: 'MetaTrader 5 is one of the most popular trading platforms used across the world; provides an array of opportunities for a pool of actions in the financial markets, such as trading, analysis, testing of trading strategies etc.',
                    list: enAdvancedTradingToolsAndTechniquesList
                },
            ]
        },
    ])


    const arEducationAcademyList = reactive([
        {
            title: `BEGINNER`,
            intro: ``,
            list: [
                {
                    title: `‏تعليم أساسيات الفوركس‏`,
                    intro: ``,
                    list: arBasicForexEducationList
                },
                {
                    title: `فيبوناتشي`,
                    intro: ``,
                    list: arFibonacciList
                },
                {
                    title: `‏إشارات شموع الفوركس`,
                    intro: ``,
                    list: arUnderstandingCandlesticksList
                },
                {
                    title: `‏انماط تكوين الرسوم البيانية في الفوركس`,
                    intro: ``,
                    list: arChartFormationPatternsList
                },
            ]
        },
        {
            title: `INTERMEDIATE`,
            intro: ``,
            list: [
                {
                    title: `موشرات الفوركس`,
                    intro: ``,
                    list: arForexIndicatorsList
                },
                {
                    title: `التوقيت في الفوركس`,
                    intro: ``,
                    list: arTimingInForexList
                },
                {
                    title: `MT4`,
                    intro: ``,
                    list: arMT4List
                },
                {
                    title: `العملات المشفرة`,
                    intro: ``,
                    list: arCryptocurrenciesList
                },
            ]
        },
        {
            title: `ADVANCED`,
            intro: ``,
            list: [
                {
                    title: `مقدمة لسوق الأوراق المالية.`,
                    intro: ``,
                    list: arIntroductionToTheStockMarketList
                },
                {
                    title: `تداول سوق الأسهم المتقدم - المستوى 1`,
                    intro: ``,
                    list: arAdvancedStockMarketTradingLevel1List
                },
                {
                    title: `تداول سوق الأسهم المتقدم - المستوى 2`,
                    intro: ``,
                    list: arAdvancedStockMarketTradingLevel2List
                },
                {
                    title: `‏المتداول الأفضل`,
                    intro: ``,
                    list: arTopTraderList
                },
                {
                    title: `‏أدوات و تكتيكات التداول المتقدمة`,
                    intro: ``,
                    list: arAdvancedTradingToolsAndTechniquesList
                },
            ]
        },
    ])


    const cnEducationAcademyList = reactive([
        {
            title: `BEGINNER`,
            intro: ``,
            list: [
                {
                    title: `外汇基础知识`,
                    intro: ``,
                    list: cnBasicForexEducationList
                },
                {
                    title: `斐波那契`,
                    intro: ``,
                    list: cnFibonacciList
                },
                {
                    title: `了解K线`,
                    intro: ``,
                    list: cnUnderstandingCandlesticksList
                },
                {
                    title: `图表形成模式`,
                    intro: ``,
                    list: cnChartFormationPatternsList
                },
            ]
        },
        {
            title: `INTERMEDIATE`,
            intro: ``,
            list: [
                {
                    title: `外汇指标`,
                    intro: ``,
                    list: cnForexIndicatorsList
                },
                {
                    title: `外汇交易中的时机`,
                    intro: ``,
                    list: cnTimingInForexList
                },
                {
                    title: `MT4`,
                    intro: ``,
                    list: cnMT4List
                },
                {
                    title: `Cryptocurrencies`,
                    intro: ``,
                    list: cnCryptocurrenciesList
                },
            ]
        },
        {
            title: `ADVANCED`,
            intro: ``,
            list: [
                {
                    title: `股票市场简介`,
                    intro: ``,
                    list: cnIntroductionToTheStockMarketList
                },
                {
                    title: `高级股票市场交易 - 1 级`,
                    intro: ``,
                    list: cnAdvancedStockMarketTradingLevel1List
                },
                {
                    title: `高级股票市场交易 - 第 2 级`,
                    intro: ``,
                    list: cnAdvancedStockMarketTradingLevel2List
                },
                {
                    title: `顶级交易员`,
                    intro: ``,
                    list: cnTopTraderList
                },
                {
                    title: `高级交易工具和技术`,
                    intro: ``,
                    list: cnAdvancedTradingToolsAndTechniquesList
                },
            ]
        },
    ])

    const vnEducationAcademyList = reactive([
        {
            title: `BEGINNER`,
            intro: ``,
            list: [
                {
                    title: `Giáo dục ngoại hối cơ bản`,
                    intro: ``,
                    list: vnBasicForexEducationList
                },
                {
                    title: `Fibonacci`,
                    intro: ``,
                    list: vnFibonacciList
                },
                {
                    title: `Hiểu chân nến`,
                    intro: ``,
                    list: vnUnderstandingCandlesticksList
                },
                {
                    title: `Mô hình hình thành biểu đồ`,
                    intro: ``,
                    list: vnChartFormationPatternsList
                },
            ]
        },
        {
            title: `INTERMEDIATE`,
            intro: ``,
            list: [
                {
                    title: `Các chỉ báo ngoại hối`,
                    intro: ``,
                    list: vnForexIndicatorsList
                },
                {
                    title: `Thời điểm trong giao dịch ngoại hối`,
                    intro: ``,
                    list: vnTimingInForexList
                },
                {
                    title: `MT4`,
                    intro: ``,
                    list: vnMT4List
                },
                {
                    title: `Tiền điện tử`,
                    intro: ``,
                    list: vnCryptocurrenciesList
                },
            ]
        },
        {
            title: `ADVANCED`,
            intro: ``,
            list: [
                {
                    title: `Giới thiệu thị trường chứng khoán`,
                    intro: ``,
                    list: vnIntroductionToTheStockMarketList
                },
                {
                    title: `Giao dịch thị trường chứng khoán nâng cao - Cấp độ 1`,
                    intro: ``,
                    list: vnAdvancedStockMarketTradingLevel1List
                },
                {
                    title: `Giao dịch trên thị trường chứng khoán nâng cao - Cấp độ 2`,
                    intro: ``,
                    list: vnAdvancedStockMarketTradingLevel2List
                },
                {
                    title: `Nhà giao dịch hàng đầu`,
                    intro: ``,
                    list: vnTopTraderList
                },
                {
                    title: `Công cụ và kỹ thuật giao dịch nâng cao`,
                    intro: ``,
                    list: vnAdvancedTradingToolsAndTechniquesList
                },
            ]
        },
    ])

    const educationAcademy = reactive({
        en: enEducationAcademyList,
        ar: arEducationAcademyList,
        cn: cnEducationAcademyList,
        tw: cnEducationAcademyList,
        ja: educationLocales.ja,
        ms: educationLocales.ms,
        ko: educationLocales.ko,
        id: educationLocales.id,
        th: educationLocales.th,
        vi: vnEducationAcademyList,
        vn: vnEducationAcademyList
    })





    // const arEducationAcademyList = reactive([
    //     {
    //         title: `BEGINNER`,
    //         intro: ``,
    //         list: [
    //             {
    //                 title: ``,
    //                 intro: ``,
    //                 list: []
    //             },
    //         ]
    //     },
    //     {
    //         title: `INTERMEDIATE`,
    //         intro: ``,
    //         list: [
    //             {
    //                 title: ``,
    //                 intro: ``,
    //                 list: []
    //             },
    //         ]
    //     },
    //     {
    //         title: `ADVANCED`,
    //         intro: ``,
    //         list: [
    //             {
    //                 title: ``,
    //                 intro: ``,
    //                 list: []
    //             },
    //         ]
    //     },
    // ])

    // const enBasicForexEducationList = reactive([
    //     {
    //         title: ``,
    //         intro: ``,
    //         content: ``
    //     },
    // ])

    // const enFibonacciList = reactive([
    //     {
    //         title: ``,
    //         intro: ``,
    //         content: ``
    //     },
    // ])

    // const enUnderstandingCandlesticksList = reactive([
    //     {
    //         title: ``,
    //         intro: ``,
    //         content: ``
    //     },
    // ])

    // const enChartFormationPatternsList = reactive([
    //     {
    //         title: ``,
    //         intro: ``,
    //         content: ``
    //     },
    // ])

    // const enForexIndicatorsList = reactive([
    //     {
    //         title: ``,
    //         intro: ``,
    //         content: ``
    //     },
    // ])

    
    // const enTimingInForexList = reactive([
    //     {
    //         title: ``,
    //         intro: ``,
    //         content: ``
    //     },
    // ])

    // const enMT4List = reactive([
    //     {
    //         title: ``,
    //         intro: ``,
    //         content: ``
    //     },
    // ])

    // const enCryptocurrenciesList = reactive([
    //     {
    //         title: ``,
    //         intro: ``,
    //         content: ``
    //     },
    // ])


    // const enIntroductionToTheStockMarketList = reactive([
    //     {
    //         title: ``,
    //         intro: ``,
    //         content: ``
    //     },
    // ])

    // const enAdvancedStockMarketTradingLevel1List = reactive([
    //     {
    //         title: ``,
    //         intro: ``,
    //         content: ``
    //     },
    // ])

    // const enAdvancedStockMarketTradingLevel2List = reactive([
    //     {
    //         title: ``,
    //         intro: ``,
    //         content: ``
    //     },
    // ])


    // const enTopTraderList = reactive([
    //     {
    //         title: ``,
    //         intro: ``,
    //         content: ``
    //     },
    // ])

    // const enAdvancedTradingToolsAndTechniquesList = reactive([
    //     {
    //         title: ``,
    //         intro: ``,
    //         content: ``
    //     },
    // ])




    return { accountDataList, educationAcademy }
})
