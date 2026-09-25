"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStaticDataStore = void 0;
var vue_1 = require("vue");
var pinia_1 = require("pinia");
var cent_account_svg_raw_1 = require("@/assets/img/trading/account/cent account.svg?raw");
var standard_account_svg_raw_1 = require("@/assets/img/trading/account/standard account.svg?raw");
var premium_account_svg_raw_1 = require("@/assets/img/trading/account/premium account.svg?raw");
var pro_account_svg_raw_1 = require("@/assets/img/trading/account/pro account.svg?raw");
var yes_svg_raw_1 = require("@/assets/img/trading/account/yes.svg?raw");
var no_svg_raw_1 = require("@/assets/img/trading/account/no.svg?raw");
var vue_i18n_1 = require("vue-i18n");
exports.useStaticDataStore = (0, pinia_1.defineStore)('staticData', function () {
    var t = (0, vue_i18n_1.useI18n)().t;
    var accountDataList = (0, vue_1.ref)({
        title: t('accountSentence'),
        list: [
            {
                icon: cent_account_svg_raw_1.default,
                title: t('accountSentence1'),
                intro: 'CENT',
                text: 'US Cent',
                option: [
                    {
                        name: t('accountSentence6'),
                        number: t('accountSentence7', { num: '1.6' })
                    },
                    {
                        name: t('accountSentence8'),
                        number: no_svg_raw_1.default
                    },
                    {
                        name: t('accountSentence9'),
                        number: t('accountSentence10', { num: '1:2000' })
                    },
                    {
                        name: t('accountSentence11'),
                        number: no_svg_raw_1.default
                    },
                    {
                        name: t('accountSentence12'),
                        number: '50%'
                    },
                    {
                        name: t('accountSentence13'),
                        number: yes_svg_raw_1.default
                    },
                    {
                        name: t('accountSentence14'),
                        number: no_svg_raw_1.default
                    },
                    {
                        name: t('accountSentence15'),
                        number: t('accountSentence16')
                    },
                    {
                        name: t('accountSentence17'),
                        number: no_svg_raw_1.default
                    },
                    {
                        name: t('accountSentence18'),
                        number: yes_svg_raw_1.default
                    },
                    {
                        name: t('accountSentence19'),
                        number: yes_svg_raw_1.default
                    },
                    {
                        name: t('accountSentence20'),
                        number: yes_svg_raw_1.default
                    },
                    {
                        name: t('accountSentence21'),
                        number: yes_svg_raw_1.default
                    },
                    {
                        name: t('accountSentence22'),
                        number: yes_svg_raw_1.default
                    },
                ]
            },
            {
                icon: standard_account_svg_raw_1.default,
                title: t('accountSentence2'),
                intro: 'STD',
                text: 'USD',
                option: [
                    {
                        name: t('accountSentence6'),
                        number: t('accountSentence7', { num: '2.1' })
                    },
                    {
                        name: t('accountSentence8'),
                        number: no_svg_raw_1.default
                    },
                    {
                        name: t('accountSentence9'),
                        number: t('accountSentence10', { num: '1:2000' })
                    },
                    {
                        name: t('accountSentence11'),
                        number: yes_svg_raw_1.default
                    },
                    {
                        name: t('accountSentence12'),
                        number: '50%'
                    },
                    {
                        name: t('accountSentence13'),
                        number: yes_svg_raw_1.default
                    },
                    {
                        name: t('accountSentence14'),
                        number: yes_svg_raw_1.default
                    },
                    {
                        name: t('accountSentence15'),
                        number: t('accountSentence16')
                    },
                    {
                        name: t('accountSentence17'),
                        number: yes_svg_raw_1.default
                    },
                    {
                        name: t('accountSentence18'),
                        number: yes_svg_raw_1.default
                    },
                    {
                        name: t('accountSentence19'),
                        number: yes_svg_raw_1.default
                    },
                    {
                        name: t('accountSentence20'),
                        number: yes_svg_raw_1.default
                    },
                    {
                        name: t('accountSentence21'),
                        number: yes_svg_raw_1.default
                    },
                    {
                        name: t('accountSentence22'),
                        number: yes_svg_raw_1.default
                    },
                ]
            },
            {
                icon: premium_account_svg_raw_1.default,
                title: t('accountSentence3'),
                intro: 'STP',
                text: 'USD',
                option: [
                    {
                        name: t('accountSentence6'),
                        number: t('accountSentence7', { num: '1.6' })
                    },
                    {
                        name: t('accountSentence8'),
                        number: no_svg_raw_1.default
                    },
                    {
                        name: t('accountSentence9'),
                        number: t('accountSentence10', { num: '1:2000' })
                    },
                    {
                        name: t('accountSentence11'),
                        number: yes_svg_raw_1.default
                    },
                    {
                        name: t('accountSentence12'),
                        number: '50%'
                    },
                    {
                        name: t('accountSentence13'),
                        number: yes_svg_raw_1.default
                    },
                    {
                        name: t('accountSentence14'),
                        number: yes_svg_raw_1.default
                    },
                    {
                        name: t('accountSentence15'),
                        number: t('accountSentence16')
                    },
                    {
                        name: t('accountSentence17'),
                        number: yes_svg_raw_1.default
                    },
                    {
                        name: t('accountSentence18'),
                        number: yes_svg_raw_1.default
                    },
                    {
                        name: t('accountSentence19'),
                        number: yes_svg_raw_1.default
                    },
                    {
                        name: t('accountSentence20'),
                        number: yes_svg_raw_1.default
                    },
                    {
                        name: t('accountSentence21'),
                        number: yes_svg_raw_1.default
                    },
                    {
                        name: t('accountSentence22'),
                        number: yes_svg_raw_1.default
                    },
                ]
            },
            {
                icon: pro_account_svg_raw_1.default,
                title: t('accountSentence4'),
                intro: 'ECN',
                text: 'USD',
                option: [
                    {
                        name: t('accountSentence6'),
                        number: no_svg_raw_1.default
                    },
                    {
                        name: t('accountSentence8'),
                        number: '7'
                    },
                    {
                        name: t('accountSentence9'),
                        number: t('accountSentence10', { num: '1:2000' })
                    },
                    {
                        name: t('accountSentence11'),
                        number: yes_svg_raw_1.default
                    },
                    {
                        name: t('accountSentence12'),
                        number: '50%'
                    },
                    {
                        name: t('accountSentence13'),
                        number: yes_svg_raw_1.default
                    },
                    {
                        name: t('accountSentence14'),
                        number: yes_svg_raw_1.default
                    },
                    {
                        name: t('accountSentence15'),
                        number: t('accountSentence16')
                    },
                    {
                        name: t('accountSentence17'),
                        number: yes_svg_raw_1.default
                    },
                    {
                        name: t('accountSentence18'),
                        number: yes_svg_raw_1.default
                    },
                    {
                        name: t('accountSentence19'),
                        number: yes_svg_raw_1.default
                    },
                    {
                        name: t('accountSentence20'),
                        number: yes_svg_raw_1.default
                    },
                    {
                        name: t('accountSentence21'),
                        number: yes_svg_raw_1.default
                    },
                    {
                        name: t('accountSentence22'),
                        number: yes_svg_raw_1.default
                    },
                ]
            },
        ]
    });
    //en
    var enBasicForexEducationList = (0, vue_1.reactive)([
        {
            title: "1. Why Trade Forex",
            intro: "Indeed, the foreign exchange market, often referred to as Forex or \nFX, involves the trading of one currency for another. This market is \nutilized by various participants, including multinational corporations, \nto facilitate international trade and manage currency exposure. Multinational companies often need to convert currencies to pay for expenses in different countries where they operate or sell their products.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/SsvOt8SqIkSSoP0EdBBRg\" title=\"1. Why Trade Forex\"></iframe></div>"
        },
        {
            title: "2. When To Trade Forex",
            intro: "Even though the forex market operates 24 hours a day, \nit's important to exercise caution and not trade excessively. \nTrading too frequently can lead to fatigue, increased risks, and \npotentially poor decision-making. Effective traders focus on quality \ntrades rather than attempting to trade every minute the market is open.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/VmaRZl5ejUyOZoP6c5NI2A\" title=\"2. When To Trade Forex\"></iframe></div>"
        },
        {
            title: "3. Trading Terminology Or Where Am I Going Long",
            intro: "Trading jargon can often sound like a foreign language to \nthose unfamiliar with the trading world. Traders use specialized terms\n and phrases to communicate effectively about market concepts, \nstrategies, and actions. Understanding this language is crucial for anyone looking to navigate the world of trading and make informed decisions in the financial markets.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/rGjuPDUUTEKcbNA9Jo0I4A\" title=\"3. Trading Terminology Or Where Am I Going Long\"></iframe></div>"
        },
        {
            title: "4. How To Trade With Leverage",
            intro: "In the Forex market, trading in small quantities, such as 1 Euro at a \ntime, would indeed result in minimal profits or losses. To address this, \ncurrencies are traded in standardized quantities called \"Lots.\" \nA micro lot consists of 1,000 units, a mini lot is made up of 10,000 units, \nand a standard lot comprises 100,000 units. These lot sizes allow traders to engage in meaningful transactions and manage risk effectively.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/ntnioeBQo0GYv2dPL2nTg\" title=\"4. How To Trade With Leverage\"></iframe></div>"
        },
        {
            title: "5. What Is A PIP",
            intro: "A PIP, also known as a point or percentage in point, represents the\n smallest price move that a given exchange rate can make based \non market convention. For most currency pairs, a PIP is equivalent \nto 0.0001, or one ten-thousandth of the quoted decimal price.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/f8fMDDBkCU2rLfK2ZWMUBA\" title=\"5. What Is A PIP\"></iframe></div>"
        },
        {
            title: "6. How To Place A Trade In Forex",
            intro: "In the Forex market, you trade one currency for another with the\n expectation that the currency you've bought will appreciate in value\n relative to the one you've sold. Each Forex transaction involves two \ncurrencies, as you both buy one currency and sell another simultaneously.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/JeRoXr17z0uTGQVVqRRvQ\" title=\"6. How To Place A Trade In Forex\"></iframe></div>"
        },
        {
            title: "7. Types Of Forex Orders",
            intro: "An order is a directive from a trader to a broker that specifies how\n the trader wants to enter or exit the market. In this lesson, you will \nlearn about some of the most common types of order tabs.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/CJeYBH0Mx02ZnCUzGddExw\" title=\"7. Types Of Forex Orders\"></iframe></div>"
        },
        {
            title: "8. Technical Analysis In Forex",
            intro: "The theory behind technical analysis is based on the belief that\n future price movements can be predicted by analyzing historical \nmarket data.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/mC8YI9ZecUONN1M6B16tg\" title=\"8. Technical Analysis In Forex\"></iframe></div>"
        },
        {
            title: "9. Fundamental Analysis In Forex",
            intro: "Fundamental Analysis involves predicting future price movements\n by analyzing the overall economic conditions and considering factors\n like interest rates, employment, housing, production, and\n manufacturing to make informed forecasts.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/oyPQto5jDkehNPj15VMz0Q\" title=\"9. Fundamental Analysis In Forex\"></iframe></div>"
        },
        {
            title: "10. Types Of Forex Charts",
            intro: "In today's lesson, our focus will be on exploring the most widely \nused types of charts in trading and technical analysis.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/6hIjhkMpVUQTdmSc3U6GA\" title=\"10. Types Of Forex Charts\"></iframe></div>"
        },
        {
            title: "11. Support And Resistance In Forex",
            intro: "Support and resistance are fundamental concepts in technical analysis. \nThese levels represent specific price points where the movement of\n an asset is likely to experience a halt or a reversal due to market\n psychology and historical price action. Support refers to a price level where a security or asset tends to stop falling and might even bounce back, while resistance indicates a level at which the price often halts its upward movement and might reverse. These levels are crucial for traders and analysts to make informed decisions about entry and exit points in the market.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/039z6p2HgkaZuno8YykvLg\" title=\"11. Support And Resistance In Forex\"></iframe></div>"
        },
        {
            title: "12. Trendlines",
            intro: "Support and resistance lines can take on various forms, including \ndiagonal lines known as trendlines. Trendlines are drawn by\n connecting two or more price peaks or troughs, creating a \ndiagonal support or resistance line that reflects the trend's direction.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/JtcCiz2UokKkJBKM1gNYw\" title=\"12. Trendlines\"></iframe></div>"
        },
    ]);
    var enFibonacciList = (0, vue_1.reactive)([
        {
            title: "1. Fibonacci",
            intro: "Fibonacci, an Italian mathematician, is renowned for discovering the \nFibonacci sequence, which is a series where each number is the\n sum of the two preceding numbers. For example, 1 + 1 = 2,\n 1 + 2 = 3, 2 + 3 = 5, and so on.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/Ta6rBSYjUuQU0UgXf5ag\" title=\"1. Fibonacci\"></iframe></div>"
        },
        {
            title: "2. Forex Fibonacci Extensions",
            intro: "The Fibonacci Extension is a tool used to establish profit targets, \nemploying the same Fibonacci sequence ratios as the Fibonacci\n retracement.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/aT1fnGeKAEayGitdqB4Zmw\" title=\"2. Forex Fibonacci Extensions\"></iframe></div>"
        },
        {
            title: "3. Learn Forex Fibonacci Fan And Arcs",
            intro: "Fibonacci ratios are utilized through tools like Fibonacci fans and \narcs to identify potential support and resistance levels. Similar to\n other Fibonacci tools, fans are drawn from the swing low to the\n swing high.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/dwAMf39kW9BLbe0NaEXw\" title=\"3. Learn Forex Fibonacci Fan And Arcs\"></iframe></div>"
        },
        {
            title: "4. Learn Forex Combining Fibonacci With Other Technical Analysis Tools",
            intro: "Combining Fibonacci retracements with other technical analysis \ntools can be helpful due to the subjective nature of drawing them \nand to enhance analysis accuracy.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/vWRmIxejAkGKhlpVP3pBA\" title=\"4. Learn Forex Combining Fibonacci With Other Technical Analysis Tools\"></iframe></div>"
        },
    ]);
    var enUnderstandingCandlesticksList = (0, vue_1.reactive)([
        {
            title: "1. Candlesticks",
            intro: "Candlestick trading is a powerful tool in technical analysis, \noffering insights into market sentiment, conditions, trend changes, \nand price reversals.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/RiyHzX8zhUq5ttS9UM9FhQ\" title=\"1. Candlesticks\"></iframe></div>"
        },
        {
            title: "2. Doji Candlestick In Forex",
            intro: "A \"Doji\" candlestick pattern is formed when the opening and \nclosing prices are the same, resulting in a horizontal line for its real \nbody. This pattern indicates indecision in the market.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/yYr9FleiLEKmpOYZNao63Q\" title=\"2. Doji Candlestick In Forex\"></iframe></div>"
        },
        {
            title: "3. Marubozu Candlestick In Forex",
            intro: "\"Marubozu\" is a candlestick pattern that is the complete opposite \nof a \"Doji.\" While a Doji indicates market indecision, a Marubozu\n reflects strong conviction in the price direction.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/wXq1jGroQkq3ozuSULoqw\" title=\"3. Marubozu Candlestick In Forex\"></iframe></div>"
        },
        {
            title: "4. Hammer And Hanging Man Candlesticks",
            intro: "A \"hammer\" is a bullish reversal signal characterized by a small\n real body, a very small or no upper shadow, and a long lower shadow.\n Similarly, the \"hanging man\" appears the same as a hammer, \nbut it's typically found in an uptrend.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/IH6O1EyfjUCrSayE5TnYLw\" title=\"4. Hammer And Hanging Man Candlesticks\"></iframe></div>"
        },
        {
            title: "5. Shooting Star And Inverted Hammer Candlestick",
            intro: "The \"shooting star\" is a bearish reversal signal characterized by a \nsmall real body, a very small or no lower shadow, and a long upper \nshadow that's at least twice the size of the real body. Conversely, the\n \"inverted hammer\" is often considered a bullish reversal signal.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/2Sb0e00vUm86wMeQx4Tng\" title=\"5. Shooting Star And Inverted Hammer Candlestick\"></iframe></div>"
        },
        {
            title: "6. Bullish Piercing Pattern",
            intro: "The \"bullish piercing pattern\" is a double candlestick reversal signal \nwith a bullish pattern. The first candlestick is a long bearish candle, \nfollowed by a long bullish candle that closes above the midpoint of\n the first candle, suggesting a potential bullish reversal.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/UY8BNhdQ10GK6Uflj8sFtw\" title=\"6. Bullish Piercing Pattern\"></iframe></div>"
        },
        {
            title: "7. Dark Cloud Cover Pattern",
            intro: "The \"dark cloud cover\" is a two-candlestick bearish reversal pattern. \nThe first candle forms a long bullish pattern, and the second is a\n long bearish candle that closes below the midpoint of the first candle,\n signaling potential downward reversal.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/6iSfM5402EOHlP9yyYHpMA\" title=\"7. Dark Cloud Cover Pattern\"></iframe></div>"
        },
        {
            title: "8. Bullish And Bearish Engulfing Patterns",
            intro: "The \"bullish engulfing pattern\" is a two-candlestick bullish reversal signal.\n The first candlestick is bearish, and the second candlestick is \nbullish and completely engulfs the range of the first candlestick, \nindicating potential upward reversal.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/cfJpbfLvkSIefMmAuraFg\" title=\"8. Bullish And Bearish Engulfing Patterns\"></iframe></div>"
        },
        {
            title: "9. Tweezer Tops And Bottoms",
            intro: "\"Tweezer Tops\" is a bearish reversal pattern formed by two \ncandlesticks with nearly identical highs, indicating potential \nresistance and a possible downward reversal.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/7sQo9e4DEuHEWMSJ3Wcmw\" title=\"9. Tweezer Tops And Bottoms\"></iframe></div>"
        },
        {
            title: "10. Morning And Evening Star Patterns",
            intro: "The \"Morning Star\" is a bullish reversal pattern consisting of three \ncandlesticks. The first candlestick is long and bearish, followed by a \nsmall Doji candle indicating market indecision, and finally a long\n bullish candle closing above the midpoint of the first candle, \nsuggesting a potential upward reversal.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/QpR9EKmBW0phW9Git0uaQ\" title=\"10. Morning And Evening Star Patterns\"></iframe></div>"
        },
        {
            title: "11. 3 White Soldiers 3 Black Crows",
            intro: "The \"Three White Soldiers\" is a bullish reversal signal characterized\n by three consecutive candlesticks with large real bodies and minimal \nor absent shadows. This pattern suggests a strong upward reversal\n in the market.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/Q2l1qsDsw0Khph9RIRbYyw\" title=\"11. 3 White Soldiers 3 Black Crows\"></iframe></div>"
        },
        {
            title: "12. 3 Insideup 3 Inside Down Pattern",
            intro: "The Three Inside Up is a bullish reversal pattern involving three\n candlesticks. The first candle is long and bearish, followed by a \nbullish candle that closes at least at the midpoint of the first candle. \nThe third candle is also bullish and closes above the opening price of the first candle, establishing a new high. Conversely, the Three Inside Down is the opposite signal. The first session features a long bullish candle, followed by a bearish candle that closes at least at the midpoint of the first. The third candle is the reversal signal, closing below the opening price of the first candle and confirming the reversal.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/tkOWVRa6Z02sEMjf1wVFCQ\" title=\"12. 3 Insideup 3 Inside Down Pattern\"></iframe></div>"
        },
        {
            title: "13. Rising And Falling Three Methods",
            intro: "The Rising Three Method is a noteworthy bullish continuation pattern\n in the five-candlestick method. It starts with a long bullish candle,\n followed by three small bearish candles that remain within the range\n of the first candle. Finally, the pattern concludes with another long \nbullish candle that closes above the closing price of the first candle.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/UntkQEZku02DctJn3WM0A\" title=\"13. Rising And Falling Three Methods\"></iframe></div>"
        },
    ]);
    var enChartFormationPatternsList = (0, vue_1.reactive)([
        {
            title: "1. Forex Double Top And Double Bottom Formation Patterns",
            intro: "The Double Top is a bearish reversal pattern formed during a strong\n upward movement. It features two consecutive peaks with nearly\n identical highs. Typically, the first peak is a part of an uptrend and\n establishes a new high. Conversely, the Double Bottom is the opposite \npattern, emerging after a substantial downward move, and indicates a potential bullish reversal.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/egoZraIp1ESrUfzPIYDO2w\" title=\"1. Forex Double Top And Double Bottom Formation Patterns\"></iframe></div>"
        },
        {
            title: "2. Learn Forex Head And Shoulders Pattern",
            intro: "The head and shoulders pattern is a bearish reversal pattern that \noften emerges after a strong upward trend. It comprises a peak \ntermed the left shoulder, a higher peak referred to as the head, and \na lower peak designated as the right shoulder. This formation\n indicates a potential trend reversal to the downside.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/WVSHKcDEJEeghi5fQsoQ\" title=\"2. Learn Forex Head And Shoulders Pattern\"></iframe></div>"
        },
        {
            title: "3. Forex Inverse Head And Shoulders Pattern",
            intro: "The inverse head and shoulders is a bullish reversal pattern that\n develops after a strong downtrend. It comprises a low forming the \nleft shoulder, a lower low forming the head, and a higher low forming\n the right shoulder. The neckline is drawn by connecting the highs\n between the shoulders. This pattern signals a potential trend reversal to the upside.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/UfvDbUN0k2IZgnuGViWbw\" title=\"3. Forex Inverse Head And Shoulders Pattern\"></iframe></div>"
        },
        {
            title: "4. Forex Bull Flag Formation Patterns",
            intro: "A bull flag is a bullish continuation pattern that forms within an uptrend, \ncharacterized by a strong upward move (flagpole) followed by a \nconsolidation phase (flag). This pattern suggests that the market is \nlikely to continue moving higher after the consolidation period.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/hBvXTQZxbkqxahUsr8a62g\" title=\"4. Forex Bull Flag Formation Patterns\"></iframe></div>"
        },
        {
            title: "5. Forex Bear Flag Patterns",
            intro: "A bear flag is a continuation pattern that occurs within a bearish trend, \ncharacterized by a strong downward move (flagpole) followed by a \nconsolidation phase (flag). This pattern indicates that the market is \nlikely to continue moving lower after the consolidation period.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/NttidUiuUe4nYUImkrrGg\" title=\"5. Forex Bear Flag Patterns\"></iframe></div>"
        },
        {
            title: "6. Forex Bullish And Bearish Pennant Formation",
            intro: "A bullish pennant is a continuation pattern seen within an ongoing \nbullish trend, characterized by a strong upward move (flagpole)\n followed by a consolidation phase (pennant). Conversely, a bearish \npennant is a continuation pattern occurring within a downtrend, marked by a strong downward movement followed by consolidation.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/aJtufBshLECnyL1FDcxqQ\" title=\"6. Forex Bullish And Bearish Pennant Formation\"></iframe></div>"
        },
        {
            title: "7. Forex Falling Wedge Pattern",
            intro: "A falling wedge is a bullish formation pattern characterized by \nlower lows and lower highs in the price, where the resistance line \nis steeper than the support line.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/N1Z39i5UsU6cmFlcOSXw\" title=\"7. Forex Falling Wedge Pattern\"></iframe></div>"
        },
        {
            title: "8. Forex Ascending And Descending Triangle Formations",
            intro: "An ascending triangle is a bullish continuation pattern that forms \nduring an uptrend, where the price consolidates under a resistance\n level while making higher lows. Conversely, a descending triangle\n is a bearish continuation pattern occurring in a downtrend, where the price consolidates above a support level while forming lower highs.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/zlwBXeFEkKdvxF0eNUAg\" title=\"8. Forex Ascending And Descending Triangle Formations\"></iframe></div>"
        },
        {
            title: "9. Forex Symmetrical Triangle Pattern",
            intro: "A neutral chart formation is known as a symmetrical triangle, which \noccurs when the resistance line is sloping downwards and the support \nline is sloping upwards. As these lines converge, a breakout is \nanticipated due to the tightening price range and diminishing volatility.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/JSr4DEPLE2SDMS2DyaQVA\" title=\"9. Forex Symmetrical Triangle Pattern\"></iframe></div>"
        },
        {
            title: "10. Forex Box Range",
            intro: "A neutral chart pattern is characterized by a box range, which occurs \nduring a prolonged period of market indecision. This pattern is defined\n by strong and parallel support and resistance lines, indicating that \nneither bullish nor bearish sentiment is dominant.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/KrGz4iFH0kvxhji3X7sYQ\" title=\"10. Forex Box Range\"></iframe></div>"
        },
        {
            title: "11. Forex Cup And Handle Formation Pattern",
            intro: "The cup and handle pattern is a bullish continuation pattern characterized \nby a U-shaped price movement forming the cup, followed by a \nsmall and sharp downward movement at resistance, creating the handle. \nThis pattern is named for its resemblance to a teacup and suggests a potential continuation of the upward trend.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/wakgBjbUn0ufTT8pZXhisQ\" title=\"11. Forex Cup And Handle Formation Pattern\"></iframe></div>"
        },
        {
            title: "12. Forex Inverse Cup And Handle Pattern",
            intro: "The inverse cup and handle pattern is a bearish continuation pattern \nformed by an inverted U-shaped price movement representing the \ncup, followed by a small and sharp upward movement resembling the \nhandle. This pattern suggests a potential continuation of the downward trend.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/opVk1D06L0Gp5NXNysdsQ\" title=\"12. Forex Inverse Cup And Handle Pattern\"></iframe></div>"
        },
        {
            title: "13. Forex Rising Wedge Pattern",
            intro: "rising wedge is a bearish formation pattern characterized by higher \nhighs and higher lows in the price, where the support line is steeper\n than the resistance line. This pattern indicates that each new high is \nformed with decreasing momentum, suggesting underlying weakness\n in the market.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/wKPIUstbECtV0G6GVzuww\" title=\"13. Forex Rising Wedge Pattern\"></iframe></div>"
        },
    ]);
    var enForexIndicatorsList = (0, vue_1.reactive)([
        {
            title: "1. Forex Indicators",
            intro: "The Relative Strength Index (RSI), a momentum indicator, assesses \noverbought and oversold conditions within the market.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/SPyDWUb8kSHCpbxty33RQ\" title=\"1. Forex Indicators\"></iframe></div>"
        },
        {
            title: "2. Forex RSI Stochastic Oscillator",
            intro: "The stochastic oscillator, a momentum indicator, gauges overbought \nand oversold market conditions. Generally, a reading above 80 \nindicates overbought conditions, while a reading below 20 \nsignifies oversold conditions.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/hsHC3S2lUCtkig75XfkPg\" title=\"2. Forex RSI Stochastic Oscillator\"></iframe></div>"
        },
        {
            title: "3. Forex ATR Average True Range",
            intro: "The ATR (Average True Range) serves as a volatility indicator by\n calculating the range between session highs and lows, then \naveraging that range over a specified number of sessions, such as \n14 days on a daily chart.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/d9tQeXKBxEuGnHVBz1YoQ\" title=\"3. Forex ATR Average True Range\"></iframe></div>"
        },
        {
            title: "4. Forex Moving Average",
            intro: "If you aim to smoothen price fluctuations, the moving average is a \nvaluable technical indicator that represents the average price over\n a specified number of periods for a stock.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/s84GfIkQkaPSd8xXes4Dw\" title=\"4. Forex Moving Average\"></iframe></div>"
        },
        {
            title: "5. Forex Moving Average Convergence Divergence MACD",
            intro: "MACD, or Moving Average Convergence Divergence, is a\nmomentum indicator that illustrates the relationship between \ntwo moving averages of prices.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/VbBUDTGmBE6dZFatgRs65A\" title=\"5. Forex Moving Average Convergence Divergence MACD\"></iframe></div>"
        },
        {
            title: "6. Forex Average Directional Index ADX",
            intro: "The Average Directional Index (ADX) is a directional movement\n indicator used to assess trend strength and direction. It comprises \nfour primary components: the ADX line, the +Di Line, the -Di Line,\n and the 20 level.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/XvZDxTamF0iul4YoMgW6Q\" title=\"6. Forex Average Directional Index ADX\"></iframe></div>"
        },
        {
            title: "7. Forex Bollinger Bands",
            intro: "Bollinger Bands are a volatility indicator composed of a central \nmoving average and two price channels, known as The Bands, \npositioned above and below the moving average.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/8P3JSy5gDUuY8bn3oGPXow\" title=\"7. Forex Bollinger Bands\"></iframe></div>"
        },
        {
            title: "8. Forex Parabolic SAR",
            intro: "Parabolic SAR is a trend-following indicator that uses dots \npositioned above and below the price to indicate trends.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/aMAPUUctak1VUGQPUOFUA\" title=\"8. Forex Parabolic SAR\"></iframe></div>"
        },
        {
            title: "9. Forex Ichimoku Kinko Hyo",
            intro: "Ichimoku is a trend direction momentum indicator that provides\n trading signals for support and resistance levels. Its main components \nconsist of the Tenkan-Sen Line, Kijun-Sen Line, Chikou Span, \nand the Kumo Cloud.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/5B4oZb1HE0G0GNADMggKig\" title=\"9. Forex Ichimoku Kinko Hyo\"></iframe></div>"
        },
        {
            title: "10. Forex Pivot Points",
            intro: "Pivot Points are technical indicators utilized to identify potential \nsupport and resistance zones.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/jRwlZT9jmEaQofaSy60BQ\" title=\"10. Forex Pivot Points\"></iframe></div>"
        },
    ]);
    var enTimingInForexList = (0, vue_1.reactive)([
        {
            title: "1. Timing Your Entries When Trading Forex",
            intro: "Approximately fifty percent of a successful trade depends on timing.\n Entering too early poses the risk of being trapped in the wrong direction, \nwhile entering too late can erode most of your profit. This video will \ncover several tips to assist you in achieving optimal timing.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/VXnKjxjf9kmJz5QDIthE0A\" title=\"1. Timing Your Entries When Trading Forex\"></iframe></div>"
        },
        {
            title: "2. Timing Your Exits When Trading Forex",
            intro: "Ensuring precise trade exits is equally crucial as well-timed entries. \nIn this video, I will unveil strategies to assist you in achieving this objective.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/uYcN8de9kC7vinwOU4QuQ\" title=\"2. Timing Your Exits When Trading Forex\"></iframe></div>"
        },
    ]);
    var enMT4List = (0, vue_1.reactive)([
        {
            title: "1. Getting Started With MT4",
            intro: "This tutorial is designed to guide you through the initial steps of \nusing the 'Meta Trader' Trading Platform, commonly known as MT4.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/STTnbHn8TESnpEtmyOY2mA\" title=\"1. Getting Started With MT4\"></iframe></div>"
        },
        {
            title: "2. Market Watch Basics",
            intro: "The market watch window is situated at the top-left corner of the \napplication. Right-clicking the panel and selecting 'show all' unveils \na display of all symbols and quotes provided by your broker. \nAdditionally, you can utilize the chart window option to add the chart of the chosen symbol to your chart window.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/357sD6xSw06MZdcQcptVQ\" title=\"2. Market Watch Basics\"></iframe></div>"
        },
        {
            title: "3. Chart Window Basics",
            intro: "The central panel on the screen is the 'Chart Window'. It showcases \nthe historical data of financial instruments. Right-clicking on the panel \nbrings up a drop-down menu box that enables you to customize the interface.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/nImgbgTZL06uaW8iuWJVg\" title=\"3. Chart Window Basics\"></iframe></div>"
        },
        {
            title: "4. Terminal Window Basics - Part 1",
            intro: "The terminal window is located at the bottom of the MT4 platform \nwindow. Here, you can gain an overview of various modules' features, \nincluding trade, account history, news, alerts, mailbox, and journal.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/XjuvPqba0O7MJdczIc9g\" title=\"4. Terminal Window Basics - Part 1\"></iframe></div>"
        },
        {
            title: "5. Terminal Window Basics - Part 2",
            intro: "Recently, additional tabs have been introduced to the terminal window, \nincluding signals, code base, experts, and market tabs.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/1KjL21T1UOBNFvrdZPFQ\" title=\"5. Terminal Window Basics - Part 2\"></iframe></div>"
        },
        {
            title: "6. Navigator Window Basics",
            intro: "The Navigator Window Panel is situated on the left-hand side, \nbetween the market watch and terminal window. You can reveal or \nconceal this panel through three approaches: press Ctrl+N on your \nkeyboard, use the toolbar shortcut button, or utilize the view toolbar \noption to select the navigator window and set it to open.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/U24lZE0ZRU62ppvrOWX7QQ\" title=\"6. Navigator Window Basics\"></iframe></div>"
        },
        {
            title: "7. Placing Orders",
            intro: "This tutorial will demonstrate the different methods available for \nplacing orders.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/JZ73pn2lHU6RX7UESWEpA\" title=\"7. Placing Orders\"></iframe></div>"
        },
        {
            title: "8. Account History - Closed Trades",
            intro: "This tutorial aims to enhance your comprehension of trade \nmanagement and monitoring closed trades effectively.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/fCgfVyTjrkmtyVQRjNOpAQ\" title=\"8. Account History - Closed Trades\"></iframe></div>"
        },
        {
            title: "9. Market Watch Detailed",
            intro: "Located at the top-left corner of the application, you'll encounter the \nmarket watch window. Opting to right-click the panel and selecting \n\"show all\" will unveil all symbols and quotes provided by your broker.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/OQTDPeuZuUOkFsm4ZlyhXA\" title=\"9. Market Watch Detailed\"></iframe></div>"
        },
        {
            title: "10. All About Charts",
            intro: "This tutorial emphasizes the management of the chart window,\n where historical data of currency pair symbols is displayed.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/50kjaDNQUOqVQT7cB8zQ\" title=\"10. All About Charts\"></iframe></div>"
        },
        {
            title: "11. Chart Window Properties",
            intro: "To access chart window properties, press F8 or find them displayed\n at the bottom of the dropdown menu within the chart window by \nright-clicking anywhere in the menu area.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/XKgaDC2lo0Cnc90FbmFHA\" title=\"11. Chart Window Properties\"></iframe></div>"
        },
        {
            title: "12. Indicators And Scripts",
            intro: "This tutorial will provide insights into indicators and scripts.\n Indicators encompass graphical and/or metrical tools that empower\n you to analyze market conditions effectively.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/6VsMJ21RDkaXQQS3egvEQA\" title=\"12. Indicators And Scripts\"></iframe></div>"
        },
    ]);
    var enCryptocurrenciesList = (0, vue_1.reactive)([
        {
            title: "1. Background - Early Digital Currencies (1980-2009)",
            intro: "A cryptocurrency is a digital asset engineered to function as a \nmedium of exchange. To secure their units of exchange,\n cryptocurrencies employ cryptographic protocols\u2014elaborate code \nsystems designed to encrypt sensitive data transfers.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/DyurcXGd8kqga3STSEZ7A\" title=\"1. Background - Early Digital Currencies (1980-2009)\"></iframe></div>"
        },
        {
            title: "2. Evolution Of Blockchain And Cryptocurrencies",
            intro: "A blockchain serves as a mechanism for ensuring secure online transactions. \nWithin the context of a cryptocurrency, its blockchain acts as the central \nledger that documents and retains historical transactions and activities. \nThis ledger validates the ownership of all units of the currency at any specific moment.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/xAGpFiQExUOVfoO0o1wDiA\" title=\"2. Evolution Of Blockchain And Cryptocurrencies\"></iframe></div>"
        },
        {
            title: "3. The Future Of Digital Currencies And Blockchain",
            intro: "Following the increased fascination with Bitcoin and blockchain since \n2009, numerous other cryptocurrencies (or tokens) have emerged.\n Currently, there are more than 850 cryptocurrencies being traded \nglobally. Litecoin, Dash, Ripple, Stratis, ZCash, and Monero are \nnotable examples of popular coins. In June 2017, the collective\n market capitalization of all cryptocurrencies surpassed $100 billion, \nmarking a significant milestone in the cryptocurrency evolution.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/tZyVjR60cUWOkkOY0DPQWg\" title=\"3. The Future Of Digital Currencies And Blockchain\"></iframe></div>"
        },
        {
            title: "4. Background - Concept Of Owning A Digital Currency",
            intro: "While digital currency is in its nascent stages, its potential to shape \nthe future of financial services is significant. With the increasing \nadoption of technologies like bitcoin, our financial system is poised to\n transition from dependence on a few large centralized institutions to \na model that draws strength from a vast network of peers across the globe.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/Uhv4SsTeUiUXAd9K476DQ\" title=\"4. Background - Concept Of Owning A Digital Currency\"></iframe></div>"
        },
        {
            title: "5. What Are Wallets And How Do They Work",
            intro: "A wallet serves as the repository for the essential data required for conducting bitcoin transactions. Despite the common portrayal of wallets as mere repositories for housing bitcoins, the inherent structure of the system results in bitcoins being inherently intertwined with the transaction ledger known as the blockchain. A more accurate depiction of a wallet would be that of a construct responsible for \"retaining the digital authentication mechanisms pertaining to one's bitcoin holdings,\" thereby enabling the capability to both access and utilize them.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/C0BzxVoCEO3iPnAAjvGdw\" title=\"5. What Are Wallets And How Do They Work\"></iframe></div>"
        },
        {
            title: "6. Backups & Offline Storage - Why Is It Important, How To Do It",
            intro: "Modern operating systems constantly leak information without the user\u2019s knowledge or consent.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/ozP3YnIuUqEtxVFBfJRTQ\" title=\"6. Backups & Offline Storage - Why Is It Important, How To Do It\"></iframe></div>"
        },
        {
            title: "7. Mobile Security - How To Safely Protect Your Mobile Wallet",
            intro: "Your adherence to sound security practices stands as the primary bulwark safeguarding your personal information, an aspect that assumes paramount importance, particularly in the realm of online financial administration. While the initial setup might initially appear somewhat daunting, it remains incumbent upon each cryptocurrency investor to allocate time towards acquiring a profound comprehension of the optimal practices at their disposal, aimed at enhancing their self-protective measures.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/eTrUCURbPEikYx8nkoBZcQ\" title=\"7. Mobile Security - How To Safely Protect Your Mobile Wallet\"></iframe></div>"
        },
        {
            title: "8. Types Of Crypto Currencies",
            intro: "Bitcoin pioneered decentralized peer-to-peer networks and established itself as the prevailing standard for cryptocurrencies. Following Bitcoin's emergence, Litecoin (2011) earned recognition as 'silver to Bitcoin's gold.' Ethereum (2015) introduced a decentralized platform enabling the creation and operation of Smart Contracts and Distributed Applications (\u0110Apps) devoid of third-party interference. Zcash (2016), an open-source cryptocurrency, exhibited notable potential. Dash (originally Darkcoin) enhanced privacy relative to Bitcoin through a decentralized mastercode network, ensuring nearly untraceable transactions. Ripple offered a real-time global settlement network for rapid, cost-effective international transactions. Monero, launched in April 2014, stood out as a secure, private, and untraceable open-source cryptocurrency that captured substantial attention within the cryptography community.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/txkrgROMrUHcJ3dYtLSAg\" title=\"8. Types Of Crypto Currencies\"></iframe></div>"
        },
        {
            title: "9. What Is Bitcoin",
            intro: "Bitcoin is a global cryptocurrency and payment system that serves \nas the pioneering decentralized digital currency. Operating without \na central repository or single administrator, the system functions in\n a decentralized manner.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/9FqF1Vm5g0eUC8ComqAPxQ\" title=\"9. What Is Bitcoin\"></iframe></div>"
        },
        {
            title: "10. The History Of Bitcoin",
            intro: "Bitcoin is a global cryptocurrency and payment system that holds \nthe distinction of being the first decentralized digital currency. \nOperating without a central repository or single administrator, the \nsystem functions through a decentralized network.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/eacb36F570iNh9c2gK3vQ\" title=\"10. The History Of Bitcoin\"></iframe></div>"
        },
        {
            title: "11. Ways To Use Bitcoin Besides Investing",
            intro: "The increasing popularity and limited supply of Bitcoin facilitate its \nutilization for purchasing a wide range of goods and services\n across the world.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/pwF09ZVof0Kfj4Mq0vAU5Q\" title=\"11. Ways To Use Bitcoin Besides Investing\"></iframe></div>"
        },
        {
            title: "12. How To Invest In Bitcoin",
            intro: "Certain Argentinian citizens have opted to purchase bitcoins as a \nsafeguard against substantial inflation and the potential risk of \ngovernment appropriation of savings accounts. Another avenue f\nor investment includes bitcoin funds.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/9AWWX5HFj02JwfRoPw6Nw\" title=\"12. How To Invest In Bitcoin\"></iframe></div>"
        },
        {
            title: "13. What Are The Risks Involved In Bitcoin Trading",
            intro: "When examining historical data, it's evident that very few asset \nclasses, if any, have surpassed the performance of the stock \nmarket over extended periods. Factoring in dividend reinvestment \nand inflation, the stock market has yielded an average annual \nreturn of 7%. It has consistently outperformed other assets such as gold, bonds, oil, and even real estate prices.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/1mHui9me0alPTK1DtY6Uw\" title=\"13. What Are The Risks Involved In Bitcoin Trading\"></iframe></div>"
        },
        {
            title: "14. How To Buy Bitcoin",
            intro: "Purchasing cryptocurrency can be perplexing for many individuals. \nIt diverges from stocks and conventional \"investments.\" It deviates\n from most familiar concepts. Rather than receiving shares, you \nacquire digital coins or tokens.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/DG4IyYlsAEOjkOEd5aGlAw\" title=\"14. How To Buy Bitcoin\"></iframe></div>"
        },
        {
            title: "15. Why Accept Bitcoin",
            intro: "When deliberating whether to accept Bitcoin for your business,\n it's essential to consider the advantages that this cryptocurrency \nbrings to the table.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/rXq8QWBsG0ymqJZo0oWlzw\" title=\"15. Why Accept Bitcoin\"></iframe></div>"
        },
        {
            title: "16. What Are The Risks Involved In Using Bitcoin",
            intro: "It's crucial to acknowledge the potential risk posed by fraudsters who \nmight send counterfeit invoices to your customers, luring them into \nmaking payments to a Bitcoin address under their control rather \nthan yours.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/TRZ1DmUbhkOQKvfhLuohuA\" title=\"16. What Are The Risks Involved In Using Bitcoin\"></iframe></div>"
        },
        {
            title: "17. How To Accept Bitcoin For Services Or Goods",
            intro: "When incorporating Bitcoin acceptance into a small business, it's \nprudent to initiate the process in a manner that maintains\n straightforward accounting practices, tailored to your specific \nbusiness type and operations.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/3hDpAaUfOke2iOTeUWfurA\" title=\"17. How To Accept Bitcoin For Services Or Goods\"></iframe></div>"
        },
        {
            title: "18. Outlook On Taxation, Accounting & Legalities",
            intro: "None of the forthcoming information constitutes legal advice. \nGiven the array of issues discussed below, it is highly advisable to seek consultation with your accountant.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/bBGn4uUOXEqHEYG9kXoKw\" title=\"18. Outlook On Taxation, Accounting & Legalities\"></iframe></div>"
        },
    ]);
    var enIntroductionToTheStockMarketList = (0, vue_1.reactive)([
        {
            title: "1. Introduction To The Stock Market",
            intro: "The initial approach is termed fundamental analysis. This method largely \nrevolves around scrutinizing financial statements. Referred to as \nquantitative analysis, it entails assessing revenue, expenses, assets,\n liabilities, and various financial facets of a company. Fundamental \nanalysts leverage this data to glean insights into a company's prospective performance.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/DTfHrENzEysK3KV6Blew\" title=\"1. Introduction To The Stock Market\"></iframe></div>"
        },
        {
            title: "2. Can Stock Charts Predict The Future & Trading Systems",
            intro: "Regardless of the quality of our analysis, its accuracy hinges on the\n present available information. The uncertainty of tomorrow's outcomes\n remains constant. Forecasts regarding future movements are conducted \nunder the premise of \"all else being equal.\" This implies that a stock is anticipated to ascend based on a current trend, assuming no changes from the current conditions.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/mjcJOMMEhUmlOJVzVRHw\" title=\"2. Can Stock Charts Predict The Future & Trading Systems\"></iframe></div>"
        },
        {
            title: "3. Support And Resistance Levels",
            intro: "Support and resistance levels are horizontal price levels that typically \nlink highs of price bars to other highs, or lows to lows, creating\n horizontal lines on a price chart. These levels materialize when price \naction reverses and alters direction, creating peaks or troughs (swing points) in the market.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/jSYBwDOQaEm7fM5PobLvmg\" title=\"3. Support And Resistance Levels\"></iframe></div>"
        },
        {
            title: "4. How To Identify The Market Direction - Part 1",
            intro: "Market direction is commonly denoted as trends in technical terminology.\n A stock rising indicates an uptrend, while a declining stock signifies \na downtrend. Periodically, stocks enter a sideways or no-trade zone\n due to the interplay of supply and demand. As markets ascend, they \nprompt a supply-oriented scenario, and conversely, as markets descend, they induce demand-driven conditions.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/yypQ4YSuUi0JRkItu05hw\" title=\"4. How To Identify The Market Direction - Part 1\"></iframe></div>"
        },
        {
            title: "5. How To Identify The Market Direction - Part 2",
            intro: "Trends in the market consist of swing highs and swing lows, forming \nwaves that naturally occur. Market movements exhibit a gradual \nup-and-down pattern over extended durations. During a downtrend, \nthe market experiences a sequence of decreasing swing highs and\n lower swing lows.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/nd6ZoIZyXE2Y7ExIYJv82Q\" title=\"5. How To Identify The Market Direction - Part 2\"></iframe></div>"
        },
        {
            title: "6. Chart Patterns Introduction",
            intro: "Chart patterns offer tradable opportunities across various time frames:\n from intraday and swing trading to long-term investments. On shorter \ntime frames like 5, 10, or 15 minutes, continuation or reversal chart patterns \ncan be traded intraday. However, longer time frames such as daily, weekly, \nor monthly also hold potential, as emotions and demand adhere to universal laws, rendering chart patterns effective even on extended horizons.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/4xSKIVXe4kC7gfyhxj6mtg\" title=\"6. Chart Patterns Introduction\"></iframe></div>"
        },
        {
            title: "7. Symmetrical Triangles",
            intro: "A symmetrical triangle forms as prices converge towards a central \npoint, reflecting a juncture where both bulls and bears face a \ndecision-making impasse. Bears anticipate a price decline with \nconviction, while bulls hold a strong belief in price ascent.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/hhNXbCKf4k6J4QDAU7ce7g\" title=\"7. Symmetrical Triangles\"></iframe></div>"
        },
        {
            title: "8. Symmetrical Triangles Trading Strategy",
            intro: "Having discerned authentic breakouts from false ones and established \nthe symmetrical triangle target, it's now essential to address trade risks.\n Prior to entering any trade, it's crucial to determine your acceptable\n risk amount. Should circumstances require exceeding the risk defined in your trading plan, it's advisable to abstain from the trade and pursue more favorable opportunities.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/C41KDQWcykmGUyZuuI2g\" title=\"8. Symmetrical Triangles Trading Strategy\"></iframe></div>"
        },
        {
            title: "9. Flags And Pennants",
            intro: "A flag in technical chart analysis resembles a flag on a pole, \nindicating a likely continuation of the ongoing trend. Flags are \ncharacterized by tight consolidation after a sharp price movement\n and generally encompass 5 to 20 price bars. It's important to note that the lower point of the flag must not dip below the midpoint of the preceding flagpole.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/7l3WfIAMUUKtbARJlJtfqA\" title=\"9. Flags And Pennants\"></iframe></div>"
        },
        {
            title: "10. Flags And Pennants Trading Strategy",
            intro: "The ascending triangle pattern features a level top, indicating numerous \nattempts to breach that level without success, thus establishing a resistance\n line. Simultaneously, a rising trendline forms, contributing to the bullish pattern. \nA prerequisite for any continuation pattern is contextual relevance. In this case, the breakout is anticipated, but only within a preceding uptrend. Ascending triangles manifest within existing uptrends.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/M0vZVgrP2ki2pBD3s1BWYg\" title=\"10. Flags And Pennants Trading Strategy\"></iframe></div>"
        },
        {
            title: "11. Ascending Triangles",
            intro: "Triangles serve as significant patterns in trend trading, particularly\n for trading trend continuations. These patterns are applicable to both \nstrengthening and diminishing positions. In an upward trend, enhancing \na long position is feasible when a robust ascending triangle materializes. \nSimilarly, during a downtrend, augmenting a short position is viable upon the emergence of a descending triangle.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/rDM5L8NslE6hz257KCWP3Q\" title=\"11. Ascending Triangles\"></iframe></div>"
        },
        {
            title: "12. Ascending Triangles Trading Strategy",
            intro: "Volume refers to the count of traded shares in stocks, bonds, \noptions, or futures contracts during a specified timeframe \n(e.g., daily, weekly, monthly). Advancing volume encompasses the\n aggregate volume of stocks experiencing price increases, while declining volume pertains to stocks with price decreases. For stability, applying a moving average (e.g., 5 days) to this metric can help alleviate fluctuations and enhance accuracy.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/v1EiAxkBc0mUBy6sl7zF9w\" title=\"12. Ascending Triangles Trading Strategy\"></iframe></div>"
        },
        {
            title: "13. Volumes And Trends",
            intro: "Trading is the act of buying and selling securities based on short-term movements to profit from the price movements on a short-term stock chart.\nIntraday trading involves buying and selling of stocks within the same trading day. Fundamental analysis involves analyzing a company\u2019s financial statements to determine the fair value of the business.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/lIIdOdX090y580dCV9C1ug\" title=\"13. Volumes And Trends\"></iframe></div>"
        },
    ]);
    var enAdvancedStockMarketTradingLevel1List = (0, vue_1.reactive)([
        {
            title: "1. Market Indicators",
            intro: "Market indicators encompass a subset of technical indicators utilized\n for forecasting the trajectory of significant financial indexes or clusters \nof securities. These indicators, akin to their technical counterparts, \nemploy statistical calculations on data points to infer insights. The distinction lies in the utilization of data points from multiple securities, contrasting with the focus on a single security observed in technical indicators.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/fOEFxo7KHkyXcH275PzD2A\" title=\"1. Market Indicators\"></iframe></div>"
        },
        {
            title: "2. Trading Methodology",
            intro: "Trading involves purchasing and selling securities to capitalize on \nshort-term price fluctuations depicted on stock charts. This approach\n contrasts with the long-term, buy-and-hold strategy. While the latter \nrests on the belief that long-term price trends overshadow short-term fluctuations and thus, the latter should be disregarded, active trading adopts a distinct mindset.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/ry9aRe2gmE6cK9OBMNGiWg\" title=\"2. Trading Methodology\"></iframe></div>"
        },
        {
            title: "3. Round Numbers",
            intro: "As a natural inclination, traders often gravitate toward rounded\n currency values over random ones. This psychological predisposition \nleads to the creation of support and resistance zones around specific \nprice levels, as traders subconsciously position stops and take profits at these rounded levels.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/zGprvlvEGmIW9Ishrycw\" title=\"3. Round Numbers\"></iframe></div>"
        },
        {
            title: "4. Setting Up A Trade",
            intro: "As a trader, it's important to recognize that your options extend beyond\n stocks. You can choose from a diverse range of financial instruments, \nincluding Bonds, Forex (FX), Commodities, Options, Exchange-traded \nfunds (ETFs), Futures, and current e-mini futures contracts like the \ne-mini S&P 500. However, selecting instruments with ample volatility and liquidity is crucial to unlocking profitable opportunities in trading.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/soofsUZgUEGpuIpr1Hv1LQ\" title=\"4. Setting Up A Trade\"></iframe></div>"
        },
        {
            title: "5. Technical Analysis For Professional Traders",
            intro: "Two primary methods employed for securities analysis and investment\n decisions are fundamental analysis and technical analysis. \nFundamental analysis entails evaluating a company's financial \nstatements to ascertain its fair value, while technical analysis operates \non the assumption that a security's price already incorporates all publicly-available information, concentrating instead on statistical examination of price movements.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/ra2VMstGEkquTSFCF59g\" title=\"5. Technical Analysis For Professional Traders\"></iframe></div>"
        },
        {
            title: "6. Practical Technical Analysis",
            intro: "Technical analysis involves visualizing price-time charts combined\n with simple mathematical calculations plotted on the graph. Yet, \nmany traders tend to focus solely on the visual aspect, neglecting \nthe mathematical dimension. In intelligent finance, effective \ntechnical analysis and comprehensive research highlight the significance of incorporating straightforward mathematical validations of graphs, charts, and patterns, emphasizing their equal importance in trade decisions.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/mkPh896ytEeG8sAHOUxGGQ\" title=\"6. Practical Technical Analysis\"></iframe></div>"
        },
        {
            title: "7. Trading Psychology",
            intro: "The Secret to Success lies in a day trading system comprising Entry, \ntechnical points accounting for 10% for specific trade conditions, \neffective Financial Management with a weightage of 30% encompassing \nplanning, control, organization, and observation of financial assets, \nand paramount psychological capabilities amounting to 60%.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/oCi8x0t4kEW9spnJE0u2lA\" title=\"7. Trading Psychology\"></iframe></div>"
        },
        {
            title: "8. Risk & Position Management",
            intro: "Before entering a risk position, it's crucial to assess the target, \nestablish pre-defined stop-loss points, and understand that these\n serve primarily to manage risk, preserve capital, regulate emotions, \nand ensure that trades are executed based on the current market bid price for selling or buying a stock.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/aJmSkjh9EKFvudAamP6Mw\" title=\"8. Risk & Position Management\"></iframe></div>"
        },
        {
            title: "9. Intra-Day Trading",
            intro: "Intraday trading revolves around purchasing and selling stocks within\n a single trading day. The objective isn't long-term investment, \nbut rather capitalizing on stock index movements for profit. This \nstrategy entails exploiting price fluctuations to earn profits through stock trading.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/EmglvUCq902NuvQeutEUNQ\" title=\"9. Intra-Day Trading\"></iframe></div>"
        },
        {
            title: "10. Trading Arbitrage",
            intro: "Arbitrage involves the concurrent buying and selling of stocks to \ncapitalize on price disparities. This trade leverages variations in the \nprices of identical or similar financial instruments across distinct \nmarkets or forms. Arbitrage exploits market inefficiencies and would cease to exist if all markets were perfectly efficient.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/wib5kFsgF0pleY3YxlJhA\" title=\"10. Trading Arbitrage\"></iframe></div>"
        },
        {
            title: "11. Trading Preparation & Sectors",
            intro: "Preparation for the trading room is an unparalleled experience, \nakin to stepping onto the grand stage when the spotlight shines. \nYou're either poised or not, sufficiently practiced or not. Success\n hinges on amassing practice before entering the trading room and being adept at your craft. As you accumulate personal trading experience and eventually contemplate joining a trading room, whether from home or in a physical setting, remember a few valuable insights that can prove useful.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/gp14wNI5Tkq0HzQbikYhaw\" title=\"11. Trading Preparation & Sectors\"></iframe></div>"
        },
    ]);
    var enAdvancedStockMarketTradingLevel2List = (0, vue_1.reactive)([
        {
            title: "1. Trading Small Caps",
            intro: "Small cap stocks frequently face a negative portrayal in the media, \nemphasizing perceived risks, susceptibility to fraud, and potential \nlack of quality that investors desire. While these concerns hold merit, \nit's crucial to acknowledge that even large-cap companies have \nbeen entangled in significant internal fraud incidents causing shareholder losses. Clearly, a company's size isn't the sole determinant of scam vulnerability. Gaining insight into critical factors within this trading category empowers investors to make well-informed choices about investing in smaller-cap firms.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/xOJsqF9gKUy238KhVgZvA\" title=\"1. Trading Small Caps\"></iframe></div>"
        },
        {
            title: "2. Identifying Institutional Tactics And Copying Them",
            intro: "The act of trading securities can range from the straightforward action \nof pressing the buy or sell button on an electronic trading account to \nmore intricate strategies. A seasoned trader might employ a sophisticated \napproach by establishing a limit price for a block trade distributed across multiple brokers and executed over several days. These distinctions hinge on factors such as the trader's category (retail or institutional), their level of sophistication, and the urgency of transaction execution.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/LY3oNkM4kqyBxsUVNZlLw\" title=\"2. Identifying Institutional Tactics And Copying Them\"></iframe></div>"
        },
        {
            title: "3. Using Hot Keys",
            intro: "Hot keys serve as concise shortcuts that trigger predefined actions \nor sequences of actions with a single keystroke or key combination. \nThis streamlined approach contrasts with the potentially \ntime-consuming process of executing tasks through mouse clicks and additional inputs. Trading platforms notably benefit from hot keys by enhancing speed and thus efficiency. This time-saving advantage can translate into improved entry/exit points, swifter trade executions, and reduced distractions.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/4lOOPBPoFkShBVUYlJOFtw\" title=\"3. Using Hot Keys\"></iframe></div>"
        },
        {
            title: "4. Advanced Use Of Time & Sale",
            intro: "The time and sales feature offers the most comprehensive presentation of a market's trading data. It instantly reveals every trade as it happens, offering diverse details for each trade, including the precise timing, direction, contract quantity, and more. While graphical charts offer a broad perspective on price movement, the time and sales tool provides an in-depth view of every nuance in price changes. Thus, these two approaches often complement each other to provide a comprehensive understanding of market dynamics.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/7iJ3DqhpBkaTQyyuiwzw\" title=\"4. Advanced Use Of Time & Sale\"></iframe></div>"
        },
        {
            title: "5. Manage \u201CWatch Lists\u201D",
            intro: "In the U.S., over 8,000 issues are listed on stock exchanges. \nHowever, traders and fund managers usually focus on only a fraction\n due to ineffective watchlist creation. This arises from the challenge \nof identifying stocks that align with successful strategies, requiring a \nrange of skills not commonly possessed. Despite the learning curve, \nthe endeavor proves valuable as it provides a lasting trading advantage.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/s0CT6YzXE2mRLgLlHnBbw\" title=\"5. Manage \u201CWatch Lists\u201D\"></iframe></div>"
        },
        {
            title: "6. The Fixed Quantities Paradox",
            intro: "Referred to by various names, including the Two Envelope Paradox, \nthis intriguing dilemma has captivated mathematicians, economists,\n philosophers, psychologists, and more. The foundational scenario is \nas follows: You encounter two identical envelopes, each containing\n a positive sum of money. One envelope holds double the amount of the other. You opt for one envelope at random and are poised to receive its contents. However, just before opening the chosen envelope, you're presented with the chance to switch to the other envelope.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/JEWe3dIhE0iCNgE2XN7JSw\" title=\"6. The Fixed Quantities Paradox\"></iframe></div>"
        },
        {
            title: "7. Identifying \u201CTrade Traps\u201D",
            intro: "Numerous authors have explored psychological and behavioral \npitfalls that steer individuals off-course in their overall life trajectories. \nRemarkably, these same forms of dysfunctional psychology often \nsurface prominently in the realm of investing behavior.\nThis examination delves into prevalent psychological pitfalls encountered in investing and strategies for sidestepping them. An initial trap is the anchoring trap, characterized by an excessive reliance on one's initial perceptions. To illustrate, consider placing a bet on a boxing match based solely on the boxer who has thrown the most punches in their last five fights.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/JkOzJlVdIEumbICwelTnbw\" title=\"7. Identifying \u201CTrade Traps\u201D\"></iframe></div>"
        },
        {
            title: "8. The \u201C20-20\u201D Method \u2013 How Do Experts Read The Chart-",
            intro: "The 20/20 Channel Breakout Trading System, attributed to Richard \nDonchian, stands as a straightforward methodology rooted in the \nprinciples of technical analysis. Acknowledged as a trailblazer in this \nfield, Donchian pioneered the concept of channel breakouts. He \nintroduced a 4-week rule to govern trading based on channel breakouts. This approach gained prominence when Richard Dennis, a renowned commodity trader, extensively employed the channel breakout system, ultimately amassing substantial wealth in the commodities market.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/0nSBcr3SUEOk3tb2gwQkPg\" title=\"8. The \u201C20-20\u201D Method \u2013 How Do Experts Read The Chart-\"></iframe></div>"
        },
        {
            title: "9. How To Trade Using Failure Patterns",
            intro: "While we're often taught that trading failures equate to monetary \nlosses, observing a stock over a period can reveal the potential \nbenefits of utilizing failing patterns. Some traders effectively \ncapitalize on these patterns, turning them into profitable opportunities. Let's delve deeper. The most opportune trade might arise by going against the conventional approach when a well-known price pattern deviates from the textbook guidelines found in popular resources. Patterns like the bull flag and head and shoulders exhibit clearly defined levels that can trigger trade entry signals opposing their apparent direction.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/5MTwc3tm0uZutIsJzuxlA\" title=\"9. How To Trade Using Failure Patterns\"></iframe></div>"
        },
        {
            title: "10. Using NRB And WRB Candles",
            intro: "WRB Analysis combines volatility and supply/demand assessment. \nIt helps traders identify key price areas with supply/demand shifts \nbefore trade signals emerge. This method suits various charts and\n trading styles\u2014day, swing, or position trading\u2014by pinpointing price action shifts between pivotal points.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/jvXqVdFE0O2aQKAR62XzQ\" title=\"10. Using NRB And WRB Candles\"></iframe></div>"
        },
        {
            title: "11. Trading IPOs - Day Trading And Swing Trading",
            intro: "IPO trading transpires when a privately-held company introduces \nits shares for trading on public markets such as NYSE or Nasdaq. \nThis move aims to generate capital, with potential for future secondary\n offerings. While this is widely understood, the question arises: how can one profit from IPOs? This can be effectively explored through a discussion on swing trading, which I will elaborate upon here.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/WmbvxTOtFUujjzJBC5fhrA\" title=\"11. Trading IPOs - Day Trading And Swing Trading\"></iframe></div>"
        },
    ]);
    var enTopTraderList = (0, vue_1.reactive)([
        {
            title: "1. Advanced Trading And Technical Analysis",
            intro: "A prevailing pattern among investors is the presence of a vulnerable\n point, akin to an Achilles heel, that undermines their capacity to \nyield profits. On Wall Street, an enduring adage postulates that \nmarket dynamics are primarily propelled by the forces of fear and greed, albeit this notion is somewhat simplified. Nevertheless, it often holds true. Yielding to these emotions can wield a profound and adverse influence on both investors' portfolios and the broader stock market. Maintaining emotional detachment becomes challenging when personal financial stakes are at play\u2014especially amid instances like the Dow plummeting by over 1100 points in a single day. Yet, mastery over the skill of maintaining emotional composure in the face of market fluctuations is the cornerstone of prosperous investment endeavors.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/HOjoSATfrEOSiAxi9DkPQ\" title=\"1. Advanced Trading And Technical Analysis\"></iframe></div>"
        },
        {
            title: "2. Advanced Stock Trading Strategies - The Trailing Stop",
            intro: "The assertion that garners widespread agreement among traders is \nthat the most challenging aspect of trading pertains to effectively \npositioning stop losses and take profit levels. The bulk of educational \ncontent targeted at novice traders emphasizes the identification of optimal trade entry points. While the significance of precise entry cannot be understated, it is imperative to recognize that adept trade management, encompassing the selection and dynamic adjustment of appropriate stop losses and take profit levels as the trade unfolds, holds equal importance.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/meLiQ9lpT0OZAPv01ucSOg\" title=\"2. Advanced Stock Trading Strategies - The Trailing Stop\"></iframe></div>"
        },
        {
            title: "3. Pivot Points In Stock Trading",
            intro: "A pivot point serves as a technical analysis tool to ascertain the \nmarket trend across various time frames. Computed by averaging \nthe prior day's high, low, and closing prices, the pivot point is\n indicative of market sentiment. Trading above it is seen as a sign of ongoing bullish sentiment, whereas trading below it suggests bearish sentiment for the subsequent day.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/otcbN1ecUEqsx252fxGjYw\" title=\"3. Pivot Points In Stock Trading\"></iframe></div>"
        },
        {
            title: "4. Trade According To Game Theory",
            intro: "Game theory entails the examination of human interactions marked \nby both conflict and collaboration within the context of competitive \nscenarios. It can be construed as the systematic exploration of \nstrategic actions, or more precisely, the optimal decision-making \nundertaken by disparate and competing entities operating within a strategic milieu.\n\nAt its core, game theory furnishes a framework replete with terminology and structured analysis, thereby facilitating the process of making rational choices within environments characterized by competition. This formal construct enables the articulation of cogent decisions in situations defined by their competitive dynamics.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/TSdc1boNrEmVeX6oBVQFTg\" title=\"4. Trade According To Game Theory\"></iframe></div>"
        },
        {
            title: "5. Practice VWAP Strategies",
            intro: "A VWAP cross signifies a trading indicator that materializes \nwhen the price of a security intersects with the volume-weighted \naverage price (VWAP). Technical frameworks are conventionally \namenable to algorithmic configuration, facilitating the depiction of a security's market price and its corresponding VWAP through the utilization of candlestick patterns and trend lines delineated on a technical chart. Upon the event of the security's price intersecting with a VWAP trendline, a VWAP cross signal is generated. This occurrence prompts traders to perceive VWAP trendlines akin to levels of resistance and support, akin to traditional trendlines.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/9aZ8g5fRgU6Nc9NduLPk3w\" title=\"5. Practice VWAP Strategies\"></iframe></div>"
        },
        {
            title: "6. Trade Management",
            intro: "Trade management encapsulates the set of guidelines formulated \nto govern real-time trading endeavors. In essence, it necessitates \nthe establishment of predetermined courses of action for every \nconceivable scenario, ensuring a state of readiness such that unanticipated circumstances do not catch one unprepared. This meticulous preparation is vital to circumvent being caught off-guard, underscoring the importance of having a well-defined response strategy. To curtail and regulate the extent of investment vulnerability to potential hazards, practitioners such as fund managers and investors diligently engage in the practices of both risk management and trade management.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/u32Xu7ynt026fC1T9OAauw\" title=\"6. Trade Management\"></iframe></div>"
        },
    ]);
    var enAdvancedTradingToolsAndTechniquesList = (0, vue_1.reactive)([
        {
            title: "1. Introduction To MT5",
            intro: "MetaTrader 5 stands as a widely acclaimed and contemporary\n trading platform utilized globally. Renowned for its adaptability, t\nhis platform predominantly caters to Contracts for Differences (CFDs) and Foreign Exchange (FX) trading. Embraced by a multitude of forex traders, MT5 is favored for its user-friendly interface and a comprehensive selection of supplementary features that enrich the trading journey.\nThrough MetaTrader 5, a spectrum of opportunities unfolds across financial markets. These encompass trading, both fundamental and technical analysis, rigorous testing of trading strategies, creation and implementation of trading algorithms, and the formulation of customized technical indicators and scripts.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/BgtGT0u5CUOHrjzX8dMtA\" title=\" 1. Introduction To MT5\"></iframe></div>"
        },
        {
            title: "2. Forex Markets Basics And Trading Examples",
            intro: "Diverging from traditional financial markets such as the New York \nStock Exchange or the London Stock Exchange, the forex market \nlacks a physical venue or central exchange. Functioning as an \nOver-the-Counter (OTC) or \"Interbank\" market, it operates exclusively through electronic means within a network of banks, perpetually active across a 24-hour cycle. Consequently, the spot forex market is geographically dispersed, devoid of a central hub. Trade activities can materialize anywhere across the globe.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/D0HGD3VvXkCC9Id4VHBFWA\" title=\"2. Forex Markets Basics And Trading Examples\"></iframe></div>"
        },
        {
            title: "3. Commodities Markets Basics And Trading Examples",
            intro: "A new commodities bull market is in progress. From household\n items to vehicles, commodities surround us, and their prices are\n regulated by futures markets. These markets prevent scarcity and\n price spikes for essentials like oil, metals, grains, and more. Growing Asian economies, especially China, are amplifying global demand for commodities as they transition from exporters to importers due to their vast populations.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/RPBMEdlYSUWoHjwdCp6lVA\" title=\"3. Commodities Markets Basics And Trading Examples\"></iframe></div>"
        },
        {
            title: "4. Trading Global Indices",
            intro: "Each day witnesses the trading of over five thousand stocks on the \nNew York Stock Exchange and Nasdaq, the prominent U.S. stock \nexchanges. Amid this dynamic environment, where stocks fluctuate \nin diverse directions throughout the trading session, the question arises: How is it possible to determine whether the market experienced a positive or negative day?\nThe answer lies in the reference to a market index when discussing the stock market's performance. Prominent indices like the Dow Jones Industrial Average, often referred to as \"the Dow,\" or the Standard & Poor\u2019s 500, commonly known as the S&P 500, serve as benchmarks. These indices encapsulate a selection of stocks, enabling observers to gauge the market's overall performance, even in the midst of myriad individual stock movements.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/7ktC6jZtMES5zwabl8raNQ\" title=\"4. Trading Global Indices\"></iframe></div>"
        },
        {
            title: "5. Market News Trading Technique",
            intro: "Within the equities market, fundamental analysis assumes the role \nof gauging a company's intrinsic value as the foundation for making\n investment decisions. A parallel practice occurs within the retail forex market, where forex fundamental traders assess currencies and their respective nations, akin to analyzing companies, relying on economic announcements to ascertain a currency's underlying worth.\nMuch like news releases, economic data, and political events concerning a\n company inform investors about its value, similar information pertains to currencies. These elements collectively influence the perception of value, which evolves over time due to diverse influences such as economic expansion and fiscal robustness. Fundamental traders meticulously examine this amalgamation of data to assess the value of a nation's currency.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/0EhImzYQ0Gnrk7oKr63Og\" title=\"5. Market News Trading Technique\"></iframe></div>"
        },
        {
            title: "6. Trend Trading",
            intro: "Trend trading constitutes a trading approach aimed at harnessing \nprofits by analyzing a security's momentum in a specific direction. In instances of an upward trend, trend traders adopt long positions, while during downtrends, they opt for short positions.\nThe bedrock of trend trading strategies rests on the assumption that a security will persist in its current trajectory. Such strategies often integrate provisions for take-profit or stop-loss mechanisms to mitigate potential reversals. This strategy can be embraced by traders across short-, intermediate-, and long-term time frames. Irrespective of the chosen timeframe, traders maintain their position until they discern a reversal in the trend, acknowledging that reversals may manifest at distinct points for each timeframe.",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/9cKgUeeyakSdRGWAjPdEpQ\" title=\"6. Trend Trading\"></iframe></div>"
        },
    ]);
    //ar
    var arBasicForexEducationList = (0, vue_1.reactive)([
        {
            title: " \u0644\u0645\u0627\u0630\u0627 \u064A\u062C\u0628 \u0623\u0646 \u062A\u062A\u062F\u0627\u0648\u0644 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633 ",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/87CYYfs5b0uR2PqoIXtQTA\" title=\" \u0644\u0645\u0627\u0630\u0627 \u064A\u062C\u0628 \u0627\u0654\u0646 \u062A\u062A\u062F\u0627\u0648\u0644 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633\"></iframe></div>"
        },
        {
            title: " \u0645\u062A\u0649 \u064A\u062C\u0628 \u0623\u0646 \u062A\u062A\u062F\u0627\u0648\u0644 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/fhOuA45qkWub8Vgh8jJ9Q\" title=\" \u0645\u062A\u0649 \u064A\u062C\u0628 \u0627\u0654\u0646 \u062A\u062A\u062F\u0627\u0648\u0644 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633\"></iframe></div>"
        },
        {
            title: " .\u200F\u0645\u0635\u0637\u0644\u062D\u0627\u062A \u0627\u0644\u062A\u062F\u0627\u0648\u0644 \u0623\u0648 \u0645\u062A\u0649 \u064A\u062C\u0628 \u0623\u0646 \u0623\u0634\u062A\u0631\u064A",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/S5QYXgPHF0mNYt1dNCd3qg\" title=\"-\u200F\u0645\u0635\u0637\u0644\u062D\u0627\u062A \u0627\u0644\u062A\u062F\u0627\u0648\u0644 \u0627\u0654\u0648 \u0645\u062A\u0649 \u064A\u062C\u0628 \u0627\u0654\u0646 \u0627\u0654\u0634\u062A\u0631\u064A\"></iframe></div>"
        },
        {
            title: "  \u0643\u064A\u0641 \u062A\u062A\u062F\u0627\u0648\u0644 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0631\u0641\u0639 \u0627\u0644\u0645\u0627\u0644\u064A",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/TePlHy8GTkOL5Y8Lz3RiLw\" title=\"  \u0643\u064A\u0641 \u062A\u062A\u062F\u0627\u0648\u0644 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0631\u0641\u0639 \u0627\u0644\u0645\u0627\u0644\u064A\"></iframe></div>"
        },
        {
            title: "  \u0645\u0627 \u0647\u0648 \u0627\u0644\u0640PIP",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/CWXUivY0Ue7nGfjxZYlA\" title=\" \u0645\u0627 \u0647\u0648 \u0627\u0644\u0640PIP\"></iframe></div>"
        },
        {
            title: "  \u200F\u0643\u064A\u0641 \u062A\u0636\u0639 \u062A\u062F\u0627\u0648\u0644 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/rJmZv9rJHkSAqYKgHk0hQ\" title=\" \u200F\u0643\u064A\u0641 \u062A\u0636\u0639 \u062A\u062F\u0627\u0648\u0644 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633\"></iframe></div>"
        },
        {
            title: " \u200F\u0623\u0646\u0648\u0627\u0639 \u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0641\u0648\u0631\u0643\u0633",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/WRB3shnqJkSKJ7z26cCoCA\" title=\"\u0627\u0646\u0648\u0627\u0639 \u0631\u0633\u0648\u0645 \u0641\u0648\u0631\u0643\u0633 \u0627\u0644\u0628\u064A\u0627\u0646\u064A\u0629\"></iframe></div>"
        },
        {
            title: " \u0627\u0644\u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0641\u0646\u064A \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/xv4NqPrvrEmwdkd2oXGFg\" title=\"\u0627\u0644\u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0641\u0646\u064A \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633\"></iframe></div>"
        },
        {
            title: " \u0627\u0644\u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0623\u0633\u0627\u0633\u064A \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/PxaVBOe4AkeMTth9qDrNnw\" title=\" \u0627\u0644\u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0627\u0654\u0633\u0627\u0633\u064A \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633\"></iframe></div>"
        },
        {
            title: " \u0627\u0646\u0648\u0627\u0639 \u0631\u0633\u0648\u0645 \u0641\u0648\u0631\u0643\u0633 \u0627\u0644\u0628\u064A\u0627\u0646\u064A\u0629",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/HFMVwXD8zEGf4AJmmakRmA\" title=\" \u200F\u0627\u0654\u0646\u0648\u0627\u0639 \u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0641\u0648\u0631\u0643\u0633\"></iframe></div>"
        },
        {
            title: "  \u0627\u0644\u062F\u0639\u0645 \u0648\u0627\u0644\u0645\u0642\u0627\u0648\u0645\u0629 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/d6mv3I1T7UeWfrSJSQAw\" title=\" \u0627\u0644\u062F\u0639\u0645 \u0648\u0627\u0644\u0645\u0642\u0627\u0648\u0645\u0629 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633\"></iframe></div>"
        },
        {
            title: " \u0645\u0633\u0627\u0631\u0627\u062A \u0627\u0644\u0627\u062A\u062C\u0627\u0647",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/Oz7IJotTzEqAzA7kzVGcqg\" title=\"\u0645\u0633\u0627\u0631\u0627\u062A \u0627\u0644\u0627\u062A\u062C\u0627\u0647\"></iframe></div>"
        },
    ]);
    var arFibonacciList = (0, vue_1.reactive)([
        {
            title: " \u0641\u064A\u0628\u0648\u0646\u0627\u062A\u0634\u064A",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/KfN2JSFOx0ycwMS5bAJUQ\" title=\" \u0641\u064A\u0628\u0648\u0646\u0627\u062A\u0634\u064A\"></iframe></div>"
        },
        {
            title: " \u0627\u0645\u062A\u062F\u0627\u062F\u0627\u062A \u0641\u064A\u0628\u0648\u0646\u0627\u062A\u0634\u064A \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/OBbYzczKAkK8FSysT8Ew\" title=\" \u0627\u0645\u062A\u062F\u0627\u062F\u0627\u062A \u0641\u064A\u0628\u0648\u0646\u0627\u062A\u0634\u064A \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633\"></iframe></div>"
        },
        {
            title: " \u062A\u0639\u0644\u0651\u0645 \u0645\u0631\u0648\u062D\u0629 \u0648\u0623\u0642\u0648\u0627\u0633 \u0641\u064A\u0628\u0648\u0646\u0627\u062A\u0634\u064A \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/ZBIWNdQ4H0mspMISajYbnQ\" title=\" \u062A\u0639\u0644\u0651\u0645 \u0645\u0631\u0648\u062D\u0629 \u0648\u0627\u0654\u0642\u0648\u0627\u0633 \u0641\u064A\u0628\u0648\u0646\u0627\u062A\u0634\u064A \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633\"></iframe></div>"
        },
        {
            title: " \u062A\u0639\u0644\u0651\u0645 \u0643\u064A\u0641 \u062A\u062F\u0645\u062C \u0627\u0644\u0641\u0648\u0631\u0643\u0633 \u0641\u064A\u0628\u0648\u0646\u0627\u062A\u0634\u064A \u0645\u0639 \u0623\u062F\u0648\u0627\u062A \u0627\u0644\u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0623\u062E\u0631\u0649",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/uF5DN88g2kmjGaEhaxWANA\" title=\" \u062A\u0639\u0644\u0651\u0645 \u0643\u064A\u0641 \u062A\u062F\u0645\u062C \u0627\u0644\u0641\u0648\u0631\u0643\u0633 \u0641\u064A\u0628\u0648\u0646\u0627\u062A\u0634\u064A \u0645\u0639 \u0627\u0654\u062F\u0648\u0627\u062A \u0627\u0644\u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0627\u0654\u062E\u0631\u0649\"></iframe></div>"
        },
    ]);
    var arUnderstandingCandlesticksList = (0, vue_1.reactive)([
        {
            title: "\u200F \u0627\u0644\u0634\u0645\u0648\u0639",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/BH7R9twriky9JGKTDqgwg\" title=\"\u200F \u0627\u0644\u0634\u0645\u0648\u0639\"></iframe></div>"
        },
        {
            title: "  \u200F\u0634\u0645\u0648\u0639 \u062F\u0648\u062C\u064A \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/3I7c5JhLHU2G7Tyzicm74g\" title=\" \u200F\u0634\u0645\u0648\u0639 \u062F\u0648\u062C\u064A \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633\"></iframe></div>"
        },
        {
            title: " \u0634\u0645\u0648\u0639 \u0645\u0627\u0631\u0648\u0628\u0627\u0632\u0648 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/JHdlaAQWEk2Rd2wHjZx6A\" title=\" \u0634\u0645\u0648\u0639 \u0645\u0627\u0631\u0648\u0628\u0627\u0632\u0648 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633\"></iframe></div>"
        },
        {
            title: "  \u0634\u0645\u0648\u0639 \u0627\u0644\u0645\u0637\u0631\u0642\u0629 \u0648\u0627\u0644\u0631\u062C\u0644 \u0627\u0644\u0645\u0634\u0646\u0648\u0642",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/2DJbC80B2UCSmJ21RmVw\" title=\" \u0634\u0645\u0648\u0639 \u0627\u0644\u0645\u0637\u0631\u0642\u0629 \u0648\u0627\u0644\u0631\u062C\u0644 \u0627\u0644\u0645\u0634\u0646\u0648\u0642\"></iframe></div>"
        },
        {
            title: " \u200F\u0634\u0645\u0648\u0639 \u0627\u0644\u0634\u0647\u0627\u0628 \u0648\u0627\u0644\u0645\u0637\u0631\u0642\u0629 \u0627\u0644\u0645\u0642\u0644\u0648\u0628\u0629",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/u2TfMHln90OZqYKd9dN9tA\" title=\" \u200F\u0634\u0645\u0648\u0639 \u0627\u0644\u0634\u0647\u0627\u0628 \u0648\u0627\u0644\u0645\u0637\u0631\u0642\u0629 \u0627\u0644\u0645\u0642\u0644\u0648\u0628\u0629\"></iframe></div>"
        },
        {
            title: " \u0627\u0644\u0646\u0645\u0637 \u0627\u0644\u062B\u0627\u0642\u0628 \u0627\u0644\u0635\u0627\u0639\u062F",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/vScOYyIdgUCZsWtnputnWQ\" title=\"\u0627\u0644\u0646\u0645\u0637 \u0627\u0644\u062B\u0627\u0642\u0628 \u0627\u0644\u0635\u0627\u0639\u062F\"></iframe></div>"
        },
        {
            title: " \u0646\u0645\u0637 \u063A\u0637\u0627\u0621 \u0627\u0644\u0633\u062D\u0627\u0628\u0629 \u0627\u0644\u0642\u0627\u062A\u0645\u0629",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/MTOn9LlHCkqImP6cfRkXHQ\" title=\" \u0646\u0645\u0637 \u063A\u0637\u0627\u0621 \u0627\u0644\u0633\u062D\u0627\u0628\u0629 \u0627\u0644\u0642\u0627\u062A\u0645\u0629\"></iframe></div>"
        },
        {
            title: " \u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0627\u0628\u062A\u0644\u0627\u0639 \u0627\u0644\u0635\u0639\u0648\u062F\u064A\u0629 \u0648\u0627\u0644\u0647\u0627\u0628\u0637\u0629",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/6YUog1RvHECTksgVHWZhAw\" title=\"\u0627\u0654\u0646\u0645\u0627\u0637 \u0627\u0644\u0627\u0628\u062A\u0644\u0627\u0639 \u0627\u0644\u0635\u0639\u0648\u062F\u064A\u0629 \u0648\u0627\u0644\u0647\u0627\u0628\u0637\u0629\"></iframe></div>"
        },
        {
            title: " \u0645\u0644\u0642\u0627\u0637 \u0627\u0644\u0642\u0645\u0645 \u0648\u0627\u0644\u0642\u064A\u0639\u0627\u0646",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/QBUI9QZO40ua5roR6K0vA\" title=\" \u0645\u0644\u0642\u0627\u0637 \u0627\u0644\u0642\u0645\u0645 \u0648\u0627\u0644\u0642\u064A\u0639\u0627\u0646\"></iframe></div>"
        },
        {
            title: " \u200F\u0627\u0646\u0645\u0627\u0637 \u0646\u062C\u0645\u0629 \u0627\u0644\u0635\u0628\u0627\u062D \u0648\u0646\u062C\u0645\u0629 \u0627\u0644\u0645\u0633\u0627\u0621",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/1DwLw8JL60OitZKS7hrReg\" title=\" \u200F\u0627\u0646\u0645\u0627\u0637 \u0646\u062C\u0645\u0629 \u0627\u0644\u0635\u0628\u0627\u062D \u0648\u0646\u062C\u0645\u0629 \u0627\u0644\u0645\u0633\u0627\u0621\"></iframe></div>"
        },
        {
            title: " \u200F\u062C\u0646\u0648\u062F \u0628\u064A\u0636 \u0648 \u0663 \u063A\u0631\u0628\u0627\u0646 \u0633\u0648\u062F\u0627\u0621",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/0B2iBdslCkCz7LKdWyUw\" title=\" \u200F\u062C\u0646\u0648\u062F \u0628\u064A\u0636 \u0648 \u0663 \u063A\u0631\u0628\u0627\u0646 \u0633\u0648\u062F\u0627\u0621\"></iframe></div>"
        },
        {
            title: " \u200F\u062B\u0644\u0627\u062B\u0629 \u0634\u0645\u0648\u0639 \u062F\u0627\u062E\u0644\u064A\u0629 \u0644\u0623\u0639\u0644\u0649 \u0648\u062B\u0644\u0627\u062B\u0629 \u0634\u0645\u0648\u0639 \u062F\u0627\u062E\u0644\u064A\u0629 \u0644\u0623\u0633\u0641\u0644",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/TXYVDi0PEUWflANDeE4dlw\" title=\"\u200F\u062B\u0644\u0627\u062B\u0629 \u0634\u0645\u0648\u0639 \u062F\u0627\u062E\u0644\u064A\u0629 \u0644\u0627\u0654\u0639\u0644\u0649 \u0648\u062B\u0644\u0627\u062B\u0629 \u0634\u0645\u0648\u0639 \u062F\u0627\u062E\u0644\u064A\u0629 \u0644\u0627\u0654\u0633\u0641\u0644\"></iframe></div>"
        },
        {
            title: " \u0627\u0644\u0637\u0631\u0642 \u0627\u0644\u062B\u0644\u0627\u062B\u0629 \u0627\u0644\u0635\u0627\u0639\u062F\u0629 \u0648\u0627\u0644\u0647\u0627\u0628\u0637\u0629",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/JHdlaAQWEk2Rd2wHjZx6A\" title=\" \u0634\u0645\u0648\u0639 \u0645\u0627\u0631\u0648\u0628\u0627\u0632\u0648 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633\"></iframe></div>"
        },
    ]);
    var arChartFormationPatternsList = (0, vue_1.reactive)([
        {
            title: " \u200F\u0627\u0646\u0645\u0627\u0637 \u0648\u062A\u0643\u0648\u064A\u0646 \u0627\u0644\u0642\u0645\u0629 \u0627\u0644\u0645\u0632\u062F\u0648\u062C\u0629 \u0648\u0627\u0644\u0642\u0627\u0639 \u0627\u0644\u0645\u0632\u062F\u0648\u062C \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/mXSvNKvkmkmAgCg6c3IKQw\" title=\" \u200F\u0627\u0646\u0645\u0627\u0637 \u0648\u062A\u0643\u0648\u064A\u0646 \u0627\u0644\u0642\u0645\u0629 \u0627\u0644\u0645\u0632\u062F\u0648\u062C\u0629 \u0648\u0627\u0644\u0642\u0627\u0639 \u0627\u0644\u0645\u0632\u062F\u0648\u062C \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633\"></iframe></div>"
        },
        {
            title: " \u200F\u062A\u0639\u0644\u0645 \u0646\u0645\u0637 \u0627\u0644\u0631\u0623\u0633 \u0648\u0627\u0644\u0623\u0643\u062A\u0627\u0641 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/bBwIoANZl0C5uWaLN3Yzw\" title=\" \u200F\u062A\u0639\u0644\u0645 \u0646\u0645\u0637 \u0627\u0644\u0631\u0627\u0654\u0633 \u0648\u0627\u0644\u0627\u0654\u0643\u062A\u0627\u0641 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633\"></iframe></div>"
        },
        {
            title: " \u200F\u062A\u0639\u0644\u0645 \u0646\u0645\u0637 \u0627\u0644\u0631\u0623\u0633 \u0648\u0627\u0644\u0623\u0643\u062A\u0627\u0641 \u0627\u0644\u0645\u0639\u0643\u0648\u0633 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/7MMvU4OX0A0W7IQ7M7w\" title=\" \u200F\u062A\u0639\u0644\u0645 \u0646\u0645\u0637 \u0627\u0644\u0631\u0627\u0654\u0633 \u0648\u0627\u0644\u0627\u0654\u0643\u062A\u0627\u0641 \u0627\u0644\u0645\u0639\u0643\u0648\u0633 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633\"></iframe></div>"
        },
        {
            title: " \u200F\u062A\u0639\u0644\u0645 \u0627\u0646\u0645\u0627\u0637 \u062A\u0643\u0648\u064A\u0646 \u0639\u0644\u0645 \u0627\u0644\u0635\u0639\u0648\u062F \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/cG0p1lqlfkmSN4gr25VDQ\" title=\" \u200F\u062A\u0639\u0644\u0645 \u0627\u0646\u0645\u0627\u0637 \u062A\u0643\u0648\u064A\u0646 \u0639\u0644\u0645 \u0627\u0644\u0635\u0639\u0648\u062F \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633\"></iframe></div>"
        },
        {
            title: "\u200F\u062A\u0639\u0644\u0645 \u0627\u0646\u0645\u0627\u0637 \u0639\u0644\u0645 \u0627\u0644\u0647\u0628\u0648\u0637 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/cRD1usdHW02IiaYQiwpiTw\" title=\"\u200F\u062A\u0639\u0644\u0645 \u0627\u0646\u0645\u0627\u0637 \u0639\u0644\u0645 \u0627\u0644\u0647\u0628\u0648\u0637 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633\"></iframe></div>"
        },
        {
            title: " \u200F\u062A\u0639\u0644\u0645 \u062A\u0643\u0648\u064A\u0646 \u0627\u0644\u0631\u0627\u064A\u0629 \u0627\u0644\u0635\u0627\u0639\u062F\u0629 \u0648\u0627\u0644\u0647\u0627\u0628\u0637\u0629 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/fVn7R8gKHUqLthaRGr0tQQ\" title=\" \u200F\u062A\u0639\u0644\u0645 \u062A\u0643\u0648\u064A\u0646 \u0627\u0644\u0631\u0627\u064A\u0629 \u0627\u0644\u0635\u0627\u0639\u062F\u0629 \u0648\u0627\u0644\u0647\u0627\u0628\u0637\u0629 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633\"></iframe></div>"
        },
        {
            title: " \u200F\u062A\u0639\u0644\u0645 \u0646\u0645\u0637 \u0627\u0644\u0648\u062A\u062F \u0627\u0644\u0647\u0627\u0628\u0637 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/YHIXIVkkWU6loJG83Te38w\" title=\" \u200F\u062A\u0639\u0644\u0645 \u0646\u0645\u0637 \u0627\u0644\u0648\u062A\u062F \u0627\u0644\u0647\u0627\u0628\u0637 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633\"></iframe></div>"
        },
        {
            title: " \u200F\u062A\u0639\u0644\u0645 \u062A\u0643\u0648\u064A\u0646\u0627\u062A \u0627\u0644\u0645\u062B\u0644\u062B \u0627\u0644\u0635\u0627\u0639\u062F \u0648\u0627\u0644\u0647\u0627\u0628\u0637 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/bIhYr0KQkyJtMgsSBjf9w\" title=\" \u200F\u062A\u0639\u0644\u0645 \u062A\u0643\u0648\u064A\u0646\u0627\u062A \u0627\u0644\u0645\u062B\u0644\u062B \u0627\u0644\u0635\u0627\u0639\u062F \u0648\u0627\u0644\u0647\u0627\u0628\u0637 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633\"></iframe></div>"
        },
        {
            title: " \u200F\u062A\u0639\u0644\u0645 \u0646\u0645\u0637 \u0627\u0644\u0645\u062B\u0644\u062B \u0627\u0644\u0645\u062A\u0645\u0627\u062B\u0644 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/2z1f5SWLrk5nAXBho0x8Q\" title=\" \u200F\u062A\u0639\u0644\u0645 \u0646\u0645\u0637 \u0627\u0644\u0645\u062B\u0644\u062B \u0627\u0644\u0645\u062A\u0645\u0627\u062B\u0644 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633\"></iframe></div>"
        },
        {
            title: " \u200F\u0646\u0637\u0627\u0642 \u0627\u0644\u0635\u0646\u062F\u0648\u0642 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/HbBbSxBHv0eEkdjQyFamw\" title=\" \u200F\u0646\u0637\u0627\u0642 \u0627\u0644\u0635\u0646\u062F\u0648\u0642 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633\"></iframe></div>"
        },
        {
            title: " \u200F\u062A\u0639\u0644\u0645 \u0646\u0645\u0637 \u062A\u0643\u0648\u064A\u0646 \u0627\u0644\u0643\u0648\u0628 \u0648\u0627\u0644\u0639\u0631\u0648\u0629 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/ua6TIpisl0S2WXTHYXymXw\" title=\" \u200F\u062A\u0639\u0644\u0645 \u0646\u0645\u0637 \u062A\u0643\u0648\u064A\u0646 \u0627\u0644\u0643\u0648\u0628 \u0648\u0627\u0644\u0639\u0631\u0648\u0629 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633\"></iframe></div>"
        },
        {
            title: " \u200F\u062A\u0639\u0644\u0645 \u0646\u0645\u0637 \u062A\u0643\u0648\u064A\u0646 \u0627\u0644\u0643\u0648\u0628 \u0648\u0627\u0644\u0639\u0631\u0648\u0629 \u0627\u0644\u0645\u0639\u0643\u0648\u0633 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/g05KWi8vDk6LjhHVZRA8iQ\" title=\" \u200F\u062A\u0639\u0644\u0645 \u0646\u0645\u0637 \u062A\u0643\u0648\u064A\u0646 \u0627\u0644\u0643\u0648\u0628 \u0648\u0627\u0644\u0639\u0631\u0648\u0629 \u0627\u0644\u0645\u0639\u0643\u0648\u0633 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633\"></iframe></div>"
        },
        {
            title: " \u200F\u062A\u0639\u0644\u0645 \u0646\u0645\u0637 \u0627\u0644\u0648\u062A\u062F \u0627\u0644\u0635\u0627\u0639\u062F \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/GY08nT7BEmO80FItPpzQ\" title=\" \u200F\u062A\u0639\u0644\u0645 \u0646\u0645\u0637 \u0627\u0644\u0648\u062A\u062F \u0627\u0644\u0635\u0627\u0639\u062F \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633\"></iframe></div>"
        },
    ]);
    var arForexIndicatorsList = (0, vue_1.reactive)([
        {
            title: "\u0645\u0624\u0634\u0631\u0627\u062A \u0627\u0644\u0641\u0648\u0631\u0643\u0633",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/4jhzVDy4JkWaR9cYFIlYtg\" title=\"\u0645\u0648\u0654\u0634\u0631\u0627\u062A \u0627\u0644\u0641\u0648\u0631\u0643\u0633\"></iframe></div>"
        },
        {
            title: "\u0645\u0630\u0628\u0630\u0628 \u0633\u062A\u0648\u0643\u0627\u0633\u062A\u064A\u0643 \u0645\u0624\u0634\u0631 \u0627\u0644\u0642\u0648\u0629 \u0627\u0644\u0646\u0633\u0628\u064A\u0629 \u0644\u0644\u0641\u0648\u0631\u0643\u0633",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/sxeAaMdtWkCLW5wdSclBg\" title=\"\u0645\u0630\u0628\u0630\u0628 \u0633\u062A\u0648\u0643\u0627\u0633\u062A\u064A\u0643 \u0645\u0648\u0654\u0634\u0631 \u0627\u0644\u0642\u0648\u0629 \u0627\u0644\u0646\u0633\u0628\u064A\u0629 \u0644\u0644\u0641\u0648\u0631\u0643\u0633\"></iframe></div>"
        },
        {
            title: ". \u0645\u062A\u0648\u0633\u0637 \u0627\u0644\u0646\u0637\u0627\u0642 \u0627\u0644\u062D\u0642\u064A\u0642\u064A (ATR) \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/Nm1mAAseBUeQSBKuFBXIg\" title=\"- \u0645\u062A\u0648\u0633\u0637 \u0627\u0644\u0646\u0637\u0627\u0642 \u0627\u0644\u062D\u0642\u064A\u0642\u064A (ATR) \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633\"></iframe></div>"
        },
        {
            title: " \u200F\u0627\u0644\u0645\u062A\u0648\u0633\u0637 \u0627\u0644\u0645\u062A\u062D\u0631\u0643 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/NoXUi49beky9URVlqSzKPw\" title=\" \u200F\u0627\u0644\u0645\u062A\u0648\u0633\u0637 \u0627\u0644\u0645\u062A\u062D\u0631\u0643 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633\"></iframe></div>"
        },
        {
            title: " \u200F\u062A\u0642\u0627\u0631\u0628 \u0648\u062A\u0628\u0627\u0639\u062F \u0627\u0644\u0645\u062A\u0648\u0633\u0637 \u0627\u0644\u0645\u062A\u062D\u0631\u0643 \u0623\u0648 (MACD) \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/l9q2IuQJQ0WMg6056ejtnQ\" title=\" \u200F\u062A\u0642\u0627\u0631\u0628 \u0648\u062A\u0628\u0627\u0639\u062F \u0627\u0644\u0645\u062A\u0648\u0633\u0637 \u0627\u0644\u0645\u062A\u062D\u0631\u0643 \u0627\u0654\u0648 (MACD) \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633\"></iframe></div>"
        },
        {
            title: " \u0645\u0624\u0634\u0631 \u0627\u0644\u0645\u062A\u0648\u0633\u0637 \u0627\u0644\u0627\u062A\u062C\u0627\u0647\u064A \u0623\u0648 (ADX) \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/v9MGxeWNYketQ8RBUkGQCw\" title=\" \u0627\u062A\u0634\u064A\u0645\u0648\u0643\u0648 \u0643\u064A\u0646\u0643\u0648 \u0647\u064A\u0648\"></iframe></div>"
        },
        {
            title: " \u0645\u0624\u0634\u0631 \u0646\u0637\u0627\u0642\u0627\u062A \u0628\u0648\u0644\u064A\u0646\u062C\u0631 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/URoS6mTkUym2qownCAysQ\" title=\" \u0645\u0648\u0654\u0634\u0631 \u0646\u0637\u0627\u0642\u0627\u062A \u0628\u0648\u0644\u064A\u0646\u062C\u0631 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633\"></iframe></div>"
        },
        {
            title: "\u200F\u0645\u0624\u0634\u0631 \u0627\u0644\u0642\u0637\u0639 \u0627\u0644\u0645\u0643\u0627\u0641\u0626 \u0644\u0644\u062A\u0648\u0642\u0641 \u0648\u0627\u0644\u0627\u0646\u0639\u0643\u0627\u0633 \u0623\u0648 Parabolic SAR",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/7CGdtUPKD0WDKPlJIT5Nug\" title=\"\u200F\u0645\u0648\u0654\u0634\u0631 \u0627\u0644\u0642\u0637\u0639 \u0627\u0644\u0645\u0643\u0627\u0641\u064A\u0654 \u0644\u0644\u062A\u0648\u0642\u0641 \u0648\u0627\u0644\u0627\u0646\u0639\u0643\u0627\u0633 \u0627\u0654\u0648 Parabolic SAR\"></iframe></div>"
        },
        {
            title: " \u0627\u062A\u0634\u064A\u0645\u0648\u0643\u0648 \u0643\u064A\u0646\u0643\u0648 \u0647\u064A\u0648",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/v9MGxeWNYketQ8RBUkGQCw\" title=\" \u0627\u062A\u0634\u064A\u0645\u0648\u0643\u0648 \u0643\u064A\u0646\u0643\u0648 \u0647\u064A\u0648\"></iframe></div>"
        },
        {
            title: "\u0627\u0644\u0646\u0642\u0627\u0637 \u0627\u0644\u0645\u062D\u0648\u0631\u064A\u0629 \u0644\u0644\u0641\u0648\u0631\u0643\u0633",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/QBY6T7MRCUWj4UrgCjt74Q\" title=\"\u0627\u0644\u0646\u0642\u0627\u0637 \u0627\u0644\u0645\u062D\u0648\u0631\u064A\u0629 \u0644\u0644\u0641\u0648\u0631\u0643\u0633\"></iframe></div>"
        },
    ]);
    var arTimingInForexList = (0, vue_1.reactive)([
        {
            title: " \u062A\u0648\u0642\u064A\u062A \u062F\u062E\u0648\u0644\u0643 \u0639\u0646\u062F \u0627\u0644\u062A\u062F\u0627\u0648\u0644 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/7vcDVbgq00q6nWC2LBucUg\" title=\" \u062A\u0648\u0642\u064A\u062A \u062F\u062E\u0648\u0644\u0643 \u0639\u0646\u062F \u0627\u0644\u062A\u062F\u0627\u0648\u0644 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633\"></iframe></div>"
        },
        {
            title: " \u062A\u0648\u0642\u064A\u062A \u062E\u0631\u0648\u062C\u0643 \u0645\u0646 \u0627\u0644\u062A\u062F\u0627\u0648\u0644 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/O3yWYwiaNUug3OCaoWqlIA\" title=\" \u062A\u0648\u0642\u064A\u062A \u062E\u0631\u0648\u062C\u0643 \u0645\u0646 \u0627\u0644\u062A\u062F\u0627\u0648\u0644 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633\"></iframe></div>"
        },
    ]);
    var arMT4List = (0, vue_1.reactive)([
        {
            title: "\u0628\u062F\u0621 \u0627\u0644\u0639\u0645\u0644 \u0628\u0640MT4",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/za2lvw8kpk7h0nLMSRu1w\" title=\"\u0628\u062F\u0621 \u0627\u0644\u0639\u0645\u0644 \u0628\u0640MT4\"></iframe></div>"
        },
        {
            title: " \u0623\u0633\u0627\u0633\u064A\u0627\u062A \u0645\u0631\u0627\u0642\u0628\u0629 \u0627\u0644\u0633\u0648\u0642",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/1iFlUyThkuZ8Dgcnt2YA\" title=\" \u0627\u0654\u0633\u0627\u0633\u064A\u0627\u062A \u0645\u0631\u0627\u0642\u0628\u0629 \u0627\u0644\u0633\u0648\u0642\"></iframe></div>"
        },
        {
            title: "\u0623\u0633\u0627\u0633\u064A\u0627\u062A \u0646\u0627\u0641\u0630\u0629 \u0627\u0644\u0631\u0633\u0645 \u0627\u0644\u0628\u064A\u0627\u0646\u064A",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/c3SaVCMdUy9TViDhbIuHg\" title=\"\u0627\u0654\u0633\u0627\u0633\u064A\u0627\u062A \u0646\u0627\u0641\u0630\u0629 \u0627\u0644\u0631\u0633\u0645 \u0627\u0644\u0628\u064A\u0627\u0646\u064A\"></iframe></div>"
        },
        {
            title: " \u0623\u0633\u0627\u0633\u064A\u0627\u062A \u0627\u0644\u0646\u0627\u0641\u0630\u0629 \u0627\u0644\u0637\u0631\u0641\u064A\u0629 - \u0627\u0644\u062C\u0632\u0621 \u0627\u0644\u0623\u0648\u0644",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/wr7Jjz4k9ksfqBpsHKXgg\" title=\" \u0627\u0654\u0633\u0627\u0633\u064A\u0627\u062A \u0627\u0644\u0646\u0627\u0641\u0630\u0629 \u0627\u0644\u0637\u0631\u0641\u064A\u0629 - \u0627\u0644\u062C\u0632\u0621 \u0627\u0644\u0627\u0654\u0648\u0644\"></iframe></div>"
        },
        {
            title: " \u0623\u0633\u0627\u0633\u064A\u0627\u062A \u0627\u0644\u0646\u0627\u0641\u0630\u0629 \u0627\u0644\u0637\u0631\u0641\u064A\u0629 - \u0627\u0644\u062C\u0632\u0621 \u0627\u0644\u062B\u0627\u0646\u064A",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/KDiUPNWU2BjchT2Dbww\" title=\" \u0627\u0654\u0633\u0627\u0633\u064A\u0627\u062A \u0627\u0644\u0646\u0627\u0641\u0630\u0629 \u0627\u0644\u0637\u0631\u0641\u064A\u0629 - \u0627\u0644\u062C\u0632\u0621 \u0627\u0644\u062B\u0627\u0646\u064A\"></iframe></div>"
        },
        {
            title: " \u0623\u0633\u0627\u0633\u064A\u0627\u062A \u0646\u0627\u0641\u0630\u0629 \u0627\u0644\u0645\u0633\u062A\u0643\u0634\u0641",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/8HXJeA4dWULDkkr42t8Vg\" title=\" \u0627\u0654\u0633\u0627\u0633\u064A\u0627\u062A \u0646\u0627\u0641\u0630\u0629 \u0627\u0644\u0645\u0633\u062A\u0643\u0634\u0641\"></iframe></div>"
        },
        {
            title: " \u0648\u0636\u0639 \u0627\u0644\u0637\u0644\u0628\u0627\u062A",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/HVudFlt54kWJPW5O9vLXPA\" title=\" \u0648\u0636\u0639 \u0627\u0644\u0637\u0644\u0628\u0627\u062A\"></iframe></div>"
        },
        {
            title: " \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062D\u0633\u0627\u0628 / \u0627\u0644\u062A\u062F\u0627\u0648\u0644\u0627\u062A \u0627\u0644\u0645\u063A\u0644\u0642\u0629",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/M8mkJZ26E0OfCZluxZoWw\" title=\" \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062D\u0633\u0627\u0628 - \u0627\u0644\u062A\u062F\u0627\u0648\u0644\u0627\u062A \u0627\u0644\u0645\u063A\u0644\u0642\u0629\"></iframe></div>"
        },
        {
            title: " \u062A\u0641\u0627\u0635\u064A\u0644 \u0645\u0631\u0627\u0642\u0628\u0629 \u0627\u0644\u0633\u0648\u0642",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/1gwAh6v7EyhaGOP88qK8A\" title=\" \u062A\u0641\u0627\u0635\u064A\u0644 \u0645\u0631\u0627\u0642\u0628\u0629 \u0627\u0644\u0633\u0648\u0642\"></iframe></div>"
        },
        {
            title: " \u0643\u0644 \u0634\u064A\u0621 \u062D\u0648\u0644 \u0627\u0644\u0631\u0633\u0648\u0645 \u0627\u0644\u0628\u064A\u0627\u0646\u064A\u0629",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/9I87h7JbAkagl1o3nah7Dw\" title=\" \u0643\u0644 \u0634\u064A\u0621 \u062D\u0648\u0644 \u0627\u0644\u0631\u0633\u0648\u0645 \u0627\u0644\u0628\u064A\u0627\u0646\u064A\u0629\"></iframe></div>"
        },
        {
            title: " \u062E\u0635\u0627\u0626\u0635 \u0646\u0627\u0641\u0630\u0629 \u0627\u0644\u0631\u0633\u0645 \u0627\u0644\u0628\u064A\u0627\u0646\u064A",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/BSCoVJML0U2F1vlCjUCz5w\" title=\" \u062E\u0635\u0627\u064A\u0654\u0635 \u0646\u0627\u0641\u0630\u0629 \u0627\u0644\u0631\u0633\u0645 \u0627\u0644\u0628\u064A\u0627\u0646\u064A\"></iframe></div>"
        },
        {
            title: ". \u0627\u0644\u0645\u0624\u0634\u0631\u0627\u062A \u0648\u0627\u0644\u0646\u0635\u0648\u0635",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/4TaNU42KxEWgHvqz8l0zww\" title=\"- \u0627\u0644\u0645\u0648\u0654\u0634\u0631\u0627\u062A \u0648\u0627\u0644\u0646\u0635\u0648\u0635\"></iframe></div>"
        },
    ]);
    var arCryptocurrenciesList = (0, vue_1.reactive)([
        {
            title: " \u062E\u0644\u0641\u064A\u0629 - \u0627\u0644\u0639\u0645\u0644\u0627\u062A \u0627\u0644\u0645\u0634\u0641\u0631\u0629 \u0627\u0644\u0645\u0628\u0643\u0631\u0629 (1980-2009)",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/tldOFuDjUuXZeiFUUDeIA\" title=\" \u062E\u0644\u0641\u064A\u0629 - \u0627\u0644\u0639\u0645\u0644\u0627\u062A \u0627\u0644\u0645\u0634\u0641\u0631\u0629 \u0627\u0644\u0645\u0628\u0643\u0631\u0629 (1980-2009)\"></iframe></div>"
        },
        {
            title: " \u062A\u0637\u0648\u0631 \u0633\u0644\u0633\u0644\u0629 \u0627\u0644\u0643\u062A\u0644 \u0648\u0627\u0644\u0639\u0645\u0644\u0627\u062A \u0627\u0644\u0645\u0634\u0641\u0631\u0629",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/rszR0RN1l0G9JPxrvNyxuQ\" title=\" \u062A\u0637\u0648\u0631 \u0633\u0644\u0633\u0644\u0629 \u0627\u0644\u0643\u062A\u0644 \u0648\u0627\u0644\u0639\u0645\u0644\u0627\u062A \u0627\u0644\u0645\u0634\u0641\u0631\u0629\"></iframe></div>"
        },
        {
            title: " \u0645\u0633\u062A\u0642\u0628\u0644 \u0627\u0644\u0639\u0645\u0644\u0627\u062A \u0627\u0644\u0631\u0642\u0645\u064A\u0629",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/zfg4mhyfNUGeMjStJUNDw\" title=\" \u0645\u0633\u062A\u0642\u0628\u0644 \u0627\u0644\u0639\u0645\u0644\u0627\u062A \u0627\u0644\u0631\u0642\u0645\u064A\u0629\"></iframe></div>"
        },
        {
            title: " \u062E\u0644\u0641\u064A\u0629 - \u0645\u0641\u0647\u0648\u0645 \u0627\u0645\u062A\u0644\u0627\u0643 \u0639\u0645\u0644\u0629 \u0645\u0634\u0641\u0631\u0629",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/tTn0HfY1JE2gsj79xVtUA\" title=\" \u062E\u0644\u0641\u064A\u0629 - \u0645\u0641\u0647\u0648\u0645 \u0627\u0645\u062A\u0644\u0627\u0643 \u0639\u0645\u0644\u0629 \u0645\u0634\u0641\u0631\u0629\"></iframe></div>"
        },
        {
            title: " \u0645\u0627 \u0647\u064A \u0627\u0644\u0645\u062D\u0627\u0641\u0638 \u0648\u0643\u064A\u0641 \u062A\u0639\u0645\u0644",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/h61HUpUCWUe9zfssZw3dMw\" title=\" \u0645\u0627 \u0647\u064A \u0627\u0644\u0645\u062D\u0627\u0641\u0638 \u0648\u0643\u064A\u0641 \u062A\u0639\u0645\u0644\"></iframe></div>"
        },
        {
            title: "  \u0627\u0644\u0646\u0633\u062E \u0627\u0644\u0627\u062D\u062A\u064A\u0627\u0637\u064A\u0629 \u0648 \u0627\u0644\u062A\u062E\u0632\u064A\u0646 \u0623\u0648\u0641\u0644\u0627\u064A\u0646 - \u0644\u0645\u0627\u0630\u0627 \u0647\u0648 \u0645\u0647\u0645 \u0648 \u0643\u064A\u0641 \u062A\u0641\u0639\u0644\u0647",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/SBeNHNgUKEWesfAZEBwjwQ\" title=\"  \u0627\u0644\u0646\u0633\u062E \u0627\u0644\u0627\u062D\u062A\u064A\u0627\u0637\u064A\u0629 \u0648 \u0627\u0644\u062A\u062E\u0632\u064A\u0646 \u0627\u0654\u0648\u0641\u0644\u0627\u064A\u0646 - \u0644\u0645\u0627\u0630\u0627 \u0647\u0648 \u0645\u0647\u0645 \u0648 \u0643\u064A\u0641 \u062A\u0641\u0639\u0644\u0647\"></iframe></div>"
        },
        {
            title: "\u0627\u0644\u062F\u0631\u0633 \u0627\u0644\u0631\u0627\u0628\u0639: \u0623\u0645\u0627\u0646 \u0627\u0644\u0647\u0627\u062A\u0641 \u0627\u0644\u0645\u062D\u0641\u0638\u0629 \u0647\u0627\u062A\u0641\u0643 \u0627\u0644\u0645\u062D\u0645\u0648\u0644                ",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/AB58kAzc0yWPhr2G26XYg\" title=\"-\u0627\u0644\u062F\u0631\u0633 \u0627\u0644\u0631\u0627\u0628\u0639- \u0627\u0654\u0645\u0627\u0646 \u0627\u0644\u0647\u0627\u062A\u0641 \u0627\u0644\u0645\u062D\u0641\u0638\u0629 \u0647\u0627\u062A\u0641\u0643 \u0627\u0644\u0645\u062D\u0645\u0648\u0644---\"></iframe></div>"
        },
        {
            title: " \u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0639\u0645\u0644\u0627\u062A \u0627\u0644\u0645\u0634\u0641\u0631\u0629",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/Xb16cNOlEXWrwe1pJUQ\" title=\" \u0627\u0654\u0646\u0648\u0627\u0639 \u0627\u0644\u0639\u0645\u0644\u0627\u062A \u0627\u0644\u0645\u0634\u0641\u0631\u0629\"></iframe></div>"
        },
        {
            title: " \u0645\u0627 \u0647\u064A \u0627\u0644\u0628\u064A\u062A\u0643\u0648\u064A\u0646 \u061F",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/dY9O8HsaD0iKLJCP7wjSg\" title=\" \u0645\u0627 \u0647\u064A \u0627\u0644\u0628\u064A\u062A\u0643\u0648\u064A\u0646 \u061F\"></iframe></div>"
        },
        {
            title: " \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u064A\u062A\u0643\u0648\u064A\u0646",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/LLOpra5gEW1IQSiJ5k6w\" title=\" \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u064A\u062A\u0643\u0648\u064A\u0646\"></iframe></div>"
        },
        {
            title: " \u0637\u0631\u0642 \u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0628\u064A\u062A\u0643\u0648\u064A\u0646 \u0628\u062E\u0644\u0627\u0641 \u0627\u0644\u0627\u0633\u062A\u062B\u0645\u0627\u0631",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/joCzHW6x0UahaeA3LQeO5A\" title=\" \u0637\u0631\u0642 \u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0628\u064A\u062A\u0643\u0648\u064A\u0646 \u0628\u062E\u0644\u0627\u0641 \u0627\u0644\u0627\u0633\u062A\u062B\u0645\u0627\u0631\"></iframe></div>"
        },
        {
            title: "\u0627\u0644\u062F\u0631\u0633 \u0627\u0644\u0631\u0627\u0628\u0639: \u0627\u0633\u062A\u062B\u0645\u0631 \u0641\u064A \u0627\u0644\u0628\u064A\u062A\u0643\u0648\u064A\u0646",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/MhQzclxLTEivtOtLlHF6Vg\" title=\"\u0627\u0644\u062F\u0631\u0633 \u0627\u0644\u0631\u0627\u0628\u0639- \u0627\u0633\u062A\u062B\u0645\u0631 \u0641\u064A \u0627\u0644\u0628\u064A\u062A\u0643\u0648\u064A\u0646\"></iframe></div>"
        },
        {
            title: "\u0627\u0644\u062F\u0631\u0633 \u0627\u0644\u062E\u0627\u0645\u0633: \u0645\u062E\u0627\u0637\u0631 \u062A\u062C\u0627\u0631\u0629 \u0627\u0644\u0628\u064A\u062A\u0643\u0648\u064A\u0646",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/M41ecHMEEOugR7rk3rqQ\" title=\"\u0627\u0644\u062F\u0631\u0633 \u0627\u0644\u062E\u0627\u0645\u0633- \u0645\u062E\u0627\u0637\u0631 \u062A\u062C\u0627\u0631\u0629 \u0627\u0644\u0628\u064A\u062A\u0643\u0648\u064A\u0646\"></iframe></div>"
        },
        {
            title: " \u0643\u064A\u0641 \u064A\u0645\u0643\u0646\u0643 \u0634\u0631\u0627\u0621 \u0627\u0644\u0628\u064A\u062A\u0643\u0648\u064A\u0646",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/7Id85tb1WEOzv3zohQAXsg\" title=\" \u0643\u064A\u0641 \u064A\u0645\u0643\u0646\u0643 \u0634\u0631\u0627\u0621 \u0627\u0644\u0628\u064A\u062A\u0643\u0648\u064A\u0646\"></iframe></div>"
        },
        {
            title: "\u0627\u0644\u062F\u0631\u0633 \u0627\u0644\u0623\u0648\u0644: \u0644\u0645\u0627\u0630\u0627 \u064A\u062C\u0628 \u0623\u0646 \u062A\u0642\u0628\u0644 \u0627\u0644\u0628\u064A\u062A\u0643\u0648\u064A\u0646",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/uPxLbl8yi0i6vXf2r9Cf2w\" title=\"\u0627\u0644\u062F\u0631\u0633 \u0627\u0644\u0627\u0654\u0648\u0644- \u0644\u0645\u0627\u0630\u0627 \u064A\u062C\u0628 \u0627\u0654\u0646 \u062A\u0642\u0628\u0644 \u0627\u0644\u0628\u064A\u062A\u0643\u0648\u064A\u0646\"></iframe></div>"
        },
        {
            title: "\u0627\u0644\u062F\u0631\u0633 2. \u0645\u0627 \u0647\u064A \u0627\u0644\u0645\u062E\u0627\u0637\u0631 \u0627\u0644\u062A\u064A \u062A\u0646\u0637\u0648\u064A \u0639\u0644\u064A\u0647\u0627\u0628\u064A\u062A\u0643\u0648\u064A\u0646",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/RBkVLmLyGEKQWDBnjzyXUw\" title=\"\u0627\u0644\u062F\u0631\u0633 2. \u0645\u0627 \u0647\u064A \u0627\u0644\u0645\u062E\u0627\u0637\u0631 \u0627\u0644\u062A\u064A \u062A\u0646\u0637\u0648\u064A \u0639\u0644\u064A\u0647\u0627\u0628\u064A\u062A\u0643\u0648\u064A\u0646\"></iframe></div>"
        },
        {
            title: "\u0627\u0644\u062F\u0631\u0633 3: \u0642\u0628\u0648\u0644 Bitcoin \u0644\u0644\u0633\u0644\u0639 \u0648\u0627\u0644\u062E\u062F\u0645\u0627\u062A",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/APGzXm0Q5Uicmy4G18cZFA\" title=\"\u0627\u0644\u062F\u0631\u0633 3- \u0642\u0628\u0648\u0644 Bitcoin \u0644\u0644\u0633\u0644\u0639 \u0648\u0627\u0644\u062E\u062F\u0645\u0627\u062A\"></iframe></div>"
        },
        {
            title: "\u0627\u0644\u062F\u0631\u0633 \u0627\u0644\u0631\u0627\u0628\u0639: \u0627\u0644\u0646\u0638\u0631\u0629 \u0627\u0644\u0636\u0631\u064A\u0628\u064A\u0629 \u0648\u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A\u0629",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/UGO5iiw0y02gQAdF0vAQ\" title=\"\u0627\u0644\u062F\u0631\u0633 \u0627\u0644\u0631\u0627\u0628\u0639- \u0627\u0644\u0646\u0638\u0631\u0629 \u0627\u0644\u0636\u0631\u064A\u0628\u064A\u0629 \u0648\u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A\u0629\"></iframe></div>"
        },
    ]);
    var arIntroductionToTheStockMarketList = (0, vue_1.reactive)([
        {
            title: "\u0645\u0642\u062F\u0645\u0629 \u0644\u0633\u0648\u0642 \u0627\u0644\u0623\u0648\u0631\u0627\u0642 \u0627\u0644\u0645\u0627\u0644\u064A\u0629.",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/5KJoQL41tkqzD4zK597G4Q\" title=\"\u0645\u0642\u062F\u0645\u0629 \u0644\u0633\u0648\u0642 \u0627\u0644\u0627\u0654\u0648\u0631\u0627\u0642 \u0627\u0644\u0645\u0627\u0644\u064A\u0629-\"></iframe></div>"
        },
        {
            title: "\u0647\u0644 \u064A\u0645\u0643\u0646 \u0644\u0645\u062E\u0637\u0637\u0627\u062A \u0627\u0644\u0623\u0633\u0647\u0645 \u0627\u0644\u062A\u0646\u0628\u0624 \u0628\u0627\u0644\u0645\u0633\u062A\u0642\u0628\u0644\u061F \u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u062A\u062F\u0627\u0648\u0644",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/JaLUKP6jekmfxpb5v9qCZw\" title=\"\u0647\u0644 \u064A\u0645\u0643\u0646 \u0644\u0645\u062E\u0637\u0637\u0627\u062A \u0627\u0644\u0627\u0654\u0633\u0647\u0645 \u0627\u0644\u062A\u0646\u0628\u0648\u0654 \u0628\u0627\u0644\u0645\u0633\u062A\u0642\u0628\u0644\u061F \u0627\u0654\u0646\u0638\u0645\u0629 \u0627\u0644\u062A\u062F\u0627\u0648\u0644\"></iframe></div>"
        },
        {
            title: "\u0625\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u062A\u062F\u0627\u0648\u0644 \u0645\u0633\u062A\u0648\u064A\u0627\u062A \u0627\u0644\u062F\u0639\u0645 \u0648\u0627\u0644\u0645\u0642\u0627\u0648\u0645\u0629",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/iTYr5PTe0Wa7ESldTTlXw\" title=\"\u0627\u0655\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u062A\u062F\u0627\u0648\u0644 \u0645\u0633\u062A\u0648\u064A\u0627\u062A \u0627\u0644\u062F\u0639\u0645 \u0648\u0627\u0644\u0645\u0642\u0627\u0648\u0645\u0629\"></iframe></div>"
        },
        {
            title: "\u0643\u064A\u0641 \u062A\u062D\u062F\u062F \u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u0633\u0648\u0642\u061F \u0627\u0644\u0646\u0638\u0631\u064A\u0629",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:57.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" webkitallowfullscreen mozallowfullscreen allowfullscreen src=\"https://videos.dyntube.com/iframes/eTc4bAv8d0i8MzNwLfhHEA\" title=\"\u0643\u064A\u0641 \u062A\u062D\u062F\u062F \u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u0633\u0648\u0642\u061F \u0627\u0644\u0646\u0638\u0631\u064A\u0629\"></iframe></div>"
        },
        {
            title: "\u0643\u064A\u0641 \u062A\u062D\u062F\u062F \u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u0633\u0648\u0642\u061F \u0627\u0644\u062C\u0632\u0621 2",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/Err6GB3p80KRuRjFsGvkbA\" title=\"\u0643\u064A\u0641 \u062A\u062D\u062F\u062F \u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u0633\u0648\u0642\u061F \u0627\u0644\u062C\u0632\u0621 2\"></iframe></div>"
        },
        {
            title: "\u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0631\u0633\u0645 \u0627\u0644\u0628\u064A\u0627\u0646\u064A: \u0645\u0642\u062F\u0645\u0629",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/K8kqUSQfRUqldBemmZIlA\" title=\"\u0627\u0654\u0646\u0645\u0627\u0637 \u0627\u0644\u0631\u0633\u0645 \u0627\u0644\u0628\u064A\u0627\u0646\u064A- \u0645\u0642\u062F\u0645\u0629\"></iframe></div>"
        },
        {
            title: "\u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0631\u0633\u0645 \u0627\u0644\u0628\u064A\u0627\u0646\u064A: \u0645\u062B\u0644\u062B\u0627\u062A \u0645\u062A\u0646\u0627\u0638\u0631\u0629",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/dAnGsL0EmNzb54r6YuHQ\" title=\"\u0627\u0654\u0646\u0645\u0627\u0637 \u0627\u0644\u0631\u0633\u0645 \u0627\u0644\u0628\u064A\u0627\u0646\u064A- \u0645\u062B\u0644\u062B\u0627\u062A \u0645\u062A\u0646\u0627\u0638\u0631\u0629\"></iframe></div>"
        },
        {
            title: "\u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0631\u0633\u0645 \u0627\u0644\u0628\u064A\u0627\u0646\u064A: \u0625\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u062A\u062F\u0627\u0648\u0644 \u0627\u0644\u0645\u062B\u0644\u062B\u0627\u062A \u0627\u0644\u0645\u062A\u0645\u0627\u062B\u0644\u0629",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/nSTDEEhbUmgpRI5i4MH6g\" title=\"\u0627\u0654\u0646\u0645\u0627\u0637 \u0627\u0644\u0631\u0633\u0645 \u0627\u0644\u0628\u064A\u0627\u0646\u064A- \u0627\u0655\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u062A\u062F\u0627\u0648\u0644 \u0627\u0644\u0645\u062B\u0644\u062B\u0627\u062A \u0627\u0644\u0645\u062A\u0645\u0627\u062B\u0644\u0629\"></iframe></div>"
        },
        {
            title: "\u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0631\u0633\u0645 \u0627\u0644\u0628\u064A\u0627\u0646\u064A: \u0627\u0644\u0623\u0639\u0644\u0627\u0645 \u0648\u0627\u0644\u0631\u0627\u064A\u0627\u062A",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:57.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" webkitallowfullscreen mozallowfullscreen allowfullscreen src=\"https://videos.dyntube.com/iframes/BuL1ue3FE6P7HFgNJSLbg\" title=\"\u0627\u0654\u0646\u0645\u0627\u0637 \u0627\u0644\u0631\u0633\u0645 \u0627\u0644\u0628\u064A\u0627\u0646\u064A- \u0627\u0644\u0627\u0654\u0639\u0644\u0627\u0645 \u0648\u0627\u0644\u0631\u0627\u064A\u0627\u062A\"></iframe></div>"
        },
        {
            title: "\u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0631\u0633\u0645 \u0627\u0644\u0628\u064A\u0627\u0646\u064A: \u0625\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u062A\u062F\u0627\u0648\u0644 \u0627\u0644\u0623\u0639\u0644\u0627\u0645 \u0648\u0627\u0644\u0631\u0627\u064A\u0627\u062A",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/6zBJBKdDi0ShDLJKmjMnQ\" title=\"\u0627\u0654\u0646\u0645\u0627\u0637 \u0627\u0644\u0631\u0633\u0645 \u0627\u0644\u0628\u064A\u0627\u0646\u064A- \u0627\u0655\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u062A\u062F\u0627\u0648\u0644 \u0627\u0644\u0627\u0654\u0639\u0644\u0627\u0645 \u0648\u0627\u0644\u0631\u0627\u064A\u0627\u062A\"></iframe></div>"
        },
        {
            title: "\u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0631\u0633\u0645 \u0627\u0644\u0628\u064A\u0627\u0646\u064A: \u0627\u0644\u0645\u062B\u0644\u062B\u0627\u062A \u0627\u0644\u0635\u0627\u0639\u062F\u0629",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/oxfjrphRAEGryrTfRXQ3pg\" title=\"\u0627\u0654\u0646\u0645\u0627\u0637 \u0627\u0644\u0631\u0633\u0645 \u0627\u0644\u0628\u064A\u0627\u0646\u064A- \u0627\u0644\u0645\u062B\u0644\u062B\u0627\u062A \u0627\u0644\u0635\u0627\u0639\u062F\u0629\"></iframe></div>"
        },
        {
            title: "\u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0631\u0633\u0645 \u0627\u0644\u0628\u064A\u0627\u0646\u064A: \u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u062A\u062F\u0627\u0648\u0644 \u0627\u0644\u0645\u062B\u0644\u062B\u0627\u062A \u0627\u0644\u0635\u0627\u0639\u062F\u0629",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/qwwfy1eJJ0Cb45QPl6RYMw\" title=\"\u0627\u0654\u0646\u0645\u0627\u0637 \u0627\u0644\u0631\u0633\u0645 \u0627\u0644\u0628\u064A\u0627\u0646\u064A- \u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u062A\u062F\u0627\u0648\u0644 \u0627\u0644\u0645\u062B\u0644\u062B\u0627\u062A \u0627\u0644\u0635\u0627\u0639\u062F\u0629\"></iframe></div>"
        },
        {
            title: "\u0627\u0644\u0623\u062D\u062C\u0627\u0645 \u0648\u0627\u0644\u0627\u062A\u062C\u0627\u0647\u0627\u062A",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/YFeivBLGm0mrqRETk3Cow\" title=\"\u0627\u0644\u0627\u0654\u062D\u062C\u0627\u0645 \u0648\u0627\u0644\u0627\u062A\u062C\u0627\u0647\u0627\u062A\"></iframe></div>"
        },
    ]);
    var arAdvancedStockMarketTradingLevel1List = (0, vue_1.reactive)([
        {
            title: "\u0648\u0644 \u0633\u0648\u0642 \u0627\u0644\u0623\u0633\u0647\u0645 \u0627\u0644\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0623\u0648\u0644 \u060C",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/JVL8iO1sJkmXiRKllHviJA\" title=\"\u0648\u0644 \u0633\u0648\u0642 \u0627\u0644\u0627\u0654\u0633\u0647\u0645 \u0627\u0644\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0627\u0654\u0648\u0644 \u060C\"></iframe></div>"
        },
        {
            title: "\u0645\u0646\u0647\u062C\u064A\u0629 \u0627\u0644\u062A\u062F\u0627\u0648\u0644 \u0641\u064A \u0627\u0644\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0623\u0648\u0644 \u0644\u0633\u0648\u0642 \u0627\u0644\u0623\u0633\u0647\u0645",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/2Q26goWMPEiLkqD5MtEA\" title=\"\u0645\u0646\u0647\u062C\u064A\u0629 \u0627\u0644\u062A\u062F\u0627\u0648\u0644 \u0641\u064A \u0627\u0644\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0627\u0654\u0648\u0644 \u0644\u0633\u0648\u0642 \u0627\u0644\u0627\u0654\u0633\u0647\u0645\"></iframe></div>"
        },
        {
            title: "\u062A\u0642\u0631\u064A\u0628 \u0627\u0644\u0623\u0631\u0642\u0627\u0645",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/HJQtJWz0WdTEhmXGdwkQ\" title=\"\u062A\u0642\u0631\u064A\u0628 \u0627\u0644\u0627\u0654\u0631\u0642\u0627\u0645\"></iframe></div>"
        },
        {
            title: "\u0625\u0646\u0634\u0627\u0621 \u0635\u0641\u0642\u0629",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/baqOcQakSG5CJMSs6TdQ\" title=\"\u0627\u0655\u0646\u0634\u0627\u0621 \u0635\u0641\u0642\u0629\"></iframe></div>"
        },
        {
            title: "\u0645\u0642\u062F\u0645\u0629 \u0641\u064A \u0627\u0644\u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0641\u0646\u064A.",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/oimBxq460SShZQFCd3CaQ\" title=\"\u0645\u0642\u062F\u0645\u0629 \u0641\u064A \u0627\u0644\u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0641\u0646\u064A-\"></iframe></div>"
        },
        {
            title: "\u0627\u0644\u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0641\u0646\u064A \u0627\u0644\u0639\u0645\u0644\u064A",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/l7E9954JCkiuOkPk5B4w\" title=\"\u0627\u0644\u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0641\u0646\u064A \u0627\u0644\u0639\u0645\u0644\u064A\"></iframe></div>"
        },
        {
            title: "\u0639\u0644\u0645 \u0646\u0641\u0633 \u0627\u0644\u062A\u062F\u0627\u0648\u0644.",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/vlU13vADBUuoEFIogCX6Bg\" title=\"\u0639\u0644\u0645 \u0646\u0641\u0633 \u0627\u0644\u062A\u062F\u0627\u0648\u0644-\"></iframe></div>"
        },
        {
            title: "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u062E\u0627\u0637\u0631 \u0648\u0627\u0644\u0645\u0648\u0627\u0642\u0641",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/iBNECsFQqUmO2vpoIrm2nA\" title=\"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u062E\u0627\u0637\u0631 \u0648\u0627\u0644\u0645\u0648\u0627\u0642\u0641\"></iframe></div>"
        },
        {
            title: "\u0627\u0646\u062A\u0642\u0627\u0621 \u0627\u0644\u0623\u0633\u0647\u0645 \u0648\u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0627\u0642\u062A\u0635\u0627\u062F\u064A\u0629.",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/KCjath11eU6FuETXDfT7g\" title=\"\u0627\u0646\u062A\u0642\u0627\u0621 \u0627\u0644\u0627\u0654\u0633\u0647\u0645 \u0648\u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0627\u0642\u062A\u0635\u0627\u062F\u064A\u0629-\"></iframe></div>"
        },
        {
            title: "\u0627\u0644\u062A\u062F\u0627\u0648\u0644 \u062E\u0644\u0627\u0644 \u0627\u0644\u064A\u0648\u0645.",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/XDjA161jqUm0pWPrf5s8DA\" title=\"\u0627\u0644\u062A\u062F\u0627\u0648\u0644 \u062E\u0644\u0627\u0644 \u0627\u0644\u064A\u0648\u0645-10\"></iframe></div>"
        },
        {
            title: "\u0645\u0631\u0627\u062C\u062D\u0629 \u0627\u0644\u062A\u062F\u0627\u0648\u0644.",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/wTJcpXomUiVkWQYZVbwg\" title=\"\u0645\u0631\u0627\u062C\u062D\u0629 \u0627\u0644\u062A\u062F\u0627\u0648\u0644-\"></iframe></div>"
        },
        {
            title: "\u062A\u062F\u0627\u0648\u0644 \u0633\u0648\u0642 \u0627\u0644\u0623\u0633\u0647\u0645 \u0627\u0644\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0623\u0648\u0644.",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/QYc8AUfh0KbQVL92B0Oqg\" title=\"\u062A\u062F\u0627\u0648\u0644 \u0633\u0648\u0642 \u0627\u0644\u0627\u0654\u0633\u0647\u0645 \u0627\u0644\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0627\u0654\u0648\u0644-\"></iframe></div>"
        },
    ]);
    var arAdvancedStockMarketTradingLevel2List = (0, vue_1.reactive)([
        {
            title: "\u062A\u062F\u0627\u0648\u0644 \u0631\u0624\u0648\u0633 \u0627\u0644\u0623\u0645\u0648\u0627\u0644 \u0627\u0644\u0635\u063A\u064A\u0631\u0629.",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/xwjSKT8qo0S86yhogQ3YQ\" title=\"\u062A\u062F\u0627\u0648\u0644 \u0631\u0648\u0654\u0648\u0633 \u0627\u0644\u0627\u0654\u0645\u0648\u0627\u0644 \u0627\u0644\u0635\u063A\u064A\u0631\u0629-\"></iframe></div>"
        },
        {
            title: "\u062A\u062D\u062F\u064A\u062F \u0627\u0644\u062A\u0643\u062A\u064A\u0643\u0627\u062A \u0627\u0644\u0645\u0624\u0633\u0633\u064A\u0629 \u0648\u0627\u0644\u062A\u0639\u0627\u0645\u0644 \u0645\u0639\u0647\u0627",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/fTzHqPWMqkWTDIRu2X7Y3A\" title=\"\u062A\u062D\u062F\u064A\u062F \u0627\u0644\u062A\u0643\u062A\u064A\u0643\u0627\u062A \u0627\u0644\u0645\u0648\u0654\u0633\u0633\u064A\u0629 \u0648\u0627\u0644\u062A\u0639\u0627\u0645\u0644 \u0645\u0639\u0647\u0627\"></iframe></div>"
        },
        {
            title: "\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0645\u0641\u0627\u062A\u064A\u062D \u0627\u0644\u0627\u062E\u062A\u0635\u0627\u0631.",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/0yxEdNSS0OfXh9W1AAg\" title=\"\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0645\u0641\u0627\u062A\u064A\u062D \u0627\u0644\u0627\u062E\u062A\u0635\u0627\u0631-\"></iframe></div>"
        },
        {
            title: "\u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0645\u062A\u0642\u062F\u0645 \u0644\u0644\u0648\u0642\u062A \u0648\u0627\u0644\u0628\u064A\u0639",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/LSVncmMokEWGcsS4NsYOcA\" title=\"\u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0645\u062A\u0642\u062F\u0645 \u0644\u0644\u0648\u0642\u062A \u0648\u0627\u0644\u0628\u064A\u0639\"></iframe></div>"
        },
        {
            title: "\u0625\u062F\u0627\u0631\u0629 \u0642\u0648\u0627\u0626\u0645 \u0627\u0644\u0645\u0631\u0627\u0642\u0628\u0629",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/1rTk7e5nTkysevYUoq7OVw\" title=\"\u0627\u0655\u062F\u0627\u0631\u0629 \u0642\u0648\u0627\u064A\u0654\u0645 \u0627\u0644\u0645\u0631\u0627\u0642\u0628\u0629\"></iframe></div>"
        },
        {
            title: "\u0645\u0641\u0627\u0631\u0642\u0629 \u0627\u0644\u0643\u0645\u064A\u0627\u062A \u0627\u0644\u062B\u0627\u0628\u062A\u0629",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/LpMUtoJiEywLU1illqYYA\" title=\"\u0645\u0641\u0627\u0631\u0642\u0629 \u0627\u0644\u0643\u0645\u064A\u0627\u062A \u0627\u0644\u062B\u0627\u0628\u062A\u0629\"></iframe></div>"
        },
        {
            title: "\u062A\u062D\u062F\u064A\u062F \"\u0627\u0644\u0623\u0641\u062E\u0627\u062E \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629\"",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/taPzuig7VkK96xhuviv0WA\" title=\"\u062A\u062D\u062F\u064A\u062F -\u0627\u0644\u0627\u0654\u0641\u062E\u0627\u062E \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629-\"></iframe></div>"
        },
        {
            title: "\u0637\u0631\u064A\u0642\u0629 \"20:20\" - \u0643\u064A\u0641 \u064A\u0642\u0631\u0623 \u0627\u0644\u062E\u0628\u0631\u0627\u0621 \u0627\u0644\u0645\u062E\u0637\u0637\u061F",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/nHYxYLIyukWUQKwH5vamOA\" title=\"\u0637\u0631\u064A\u0642\u0629 -20-20- - \u0643\u064A\u0641 \u064A\u0642\u0631\u0627\u0654 \u0627\u0644\u062E\u0628\u0631\u0627\u0621 \u0627\u0644\u0645\u062E\u0637\u0637\u061F\"></iframe></div>"
        },
        {
            title: "\u0643\u064A\u0641\u064A\u0629 \u0627\u0644\u062A\u062F\u0627\u0648\u0644 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0641\u0634\u0644",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/AA4xmEnF4k6SyPwspOubkA\" title=\"\u0643\u064A\u0641\u064A\u0629 \u0627\u0644\u062A\u062F\u0627\u0648\u0644 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0654\u0646\u0645\u0627\u0637 \u0627\u0644\u0641\u0634\u0644\"></iframe></div>"
        },
        {
            title: "\u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0634\u0645\u0648\u0639 NLB \u0648 WRP",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/wb1fXhfCvEeAZ3wbd8ug\" title=\"\u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0634\u0645\u0648\u0639 NLB \u0648 WRP\"></iframe></div>"
        },
        {
            title: "\u062A\u062F\u0627\u0648\u0644 \u0627\u0644\u0627\u0643\u062A\u062A\u0627\u0628\u0627\u062A \u0627\u0644\u064A\u0648\u0645\u064A\u0629 \u0627\u0644\u062A\u062F\u0627\u0648\u0644 \u0648\u0627\u0644\u062A\u062F\u0627\u0648\u0644 \u0627\u0644\u0645\u062A\u0623\u0631\u062C\u062D",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/1g0FF0mgbECvCNlF1W3OOw\" title=\"\u062A\u062F\u0627\u0648\u0644 \u0627\u0644\u0627\u0643\u062A\u062A\u0627\u0628\u0627\u062A \u0627\u0644\u064A\u0648\u0645\u064A\u0629 \u0627\u0644\u062A\u062F\u0627\u0648\u0644 \u0648\u0627\u0644\u062A\u062F\u0627\u0648\u0644 \u0627\u0644\u0645\u062A\u0627\u0654\u0631\u062C\u062D\"></iframe></div>"
        },
    ]);
    var arTopTraderList = (0, vue_1.reactive)([
        {
            title: "\u062F\u0648\u0631\u0629 \u0627\u0644\u062A\u0627\u062C\u0631 \u0627\u0644\u0627\u0641\u0636\u0644",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/bBOfjT1fekmAcg50sWvJQ\" title=\"\u062F\u0648\u0631\u0629 \u0627\u0644\u062A\u0627\u062C\u0631 \u0627\u0644\u0627\u0641\u0636\u0644\"></iframe></div>"
        },
        {
            title: "\u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0627\u062A \u062A\u062F\u0627\u0648\u0644 \u0627\u0644\u0623\u0633\u0647\u0645 \u0627\u0644\u0645\u062A\u0642\u062F\u0645\u0629 - \u0627\u0644\u0625\u064A\u0642\u0627\u0641 \u0627\u0644\u0645\u062A\u062D\u0631\u0643",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/slpoZE1UKkWIX724Vw\" title=\"\u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0627\u062A \u062A\u062F\u0627\u0648\u0644 \u0627\u0644\u0627\u0654\u0633\u0647\u0645 \u0627\u0644\u0645\u062A\u0642\u062F\u0645\u0629 - \u0627\u0644\u0627\u0655\u064A\u0642\u0627\u0641 \u0627\u0644\u0645\u062A\u062D\u0631\u0643\"></iframe></div>"
        },
        {
            title: "\u0627\u0644\u0646\u0642\u0627\u0637 \u0627\u0644\u0645\u062D\u0648\u0631\u064A\u0629 \u0641\u064A \u062A\u062F\u0627\u0648\u0644 \u0627\u0644\u0623\u0633\u0647\u0645",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/32F49oUpEESyaMZgR06SYg\" title=\"\u0627\u0644\u0646\u0642\u0627\u0637 \u0627\u0644\u0645\u062D\u0648\u0631\u064A\u0629 \u0641\u064A \u062A\u062F\u0627\u0648\u0644 \u0627\u0644\u0627\u0654\u0633\u0647\u0645\"></iframe></div>"
        },
        {
            title: "\u062A\u062F\u0627\u0648\u0644 \u0648\u0641\u0642\u064B\u0627 \u0644\u0646\u0638\u0631\u064A\u0629 \u0627\u0644\u0623\u0644\u0639\u0627\u0628",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/KqbjoprsukCMCwsbJLg23A\" title=\"\u062A\u062F\u0627\u0648\u0644 \u0648\u0641\u0642\u064B\u0627 \u0644\u0646\u0638\u0631\u064A\u0629 \u0627\u0644\u0627\u0654\u0644\u0639\u0627\u0628\"></iframe></div>"
        },
        {
            title: "\u0645\u0645\u0627\u0631\u0633\u0629 \u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0627\u062A VWAP",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/8qj74W832UKaV4ObsuuA1g\" title=\"\u0645\u0645\u0627\u0631\u0633\u0629 \u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0627\u062A VWAP\"></iframe></div>"
        },
        {
            title: "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u062A\u062C\u0627\u0631\u0629",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/cSgoOXxE8UKnMp5wlLEtRQ\" title=\"\u0627\u0655\u062F\u0627\u0631\u0629 \u0627\u0644\u062A\u062C\u0627\u0631\u0629\"></iframe></div>"
        },
    ]);
    var arAdvancedTradingToolsAndTechniquesList = (0, vue_1.reactive)([
        {
            title: "\u0645\u0642\u062F\u0645\u0629 \u0625\u0644\u0649 MT5 \u060C",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/7AaCow4R0kydCOEZeG49vw\" title=\"\u0645\u0642\u062F\u0645\u0629 \u0627\u0655\u0644\u0649 MT5 \u060C\"></iframe></div>"
        },
        {
            title: "\u0648\u0623\u0645\u062B\u0644\u0629 \u062A\u062F\u0627\u0648\u0644 \u0627\u0644\u0641\u0648\u0631\u0643\u0633 \u0648\u0623\u0633\u0648\u0627\u0642 \u0627\u0644\u0641\u0648\u0631\u0643\u0633 \u0648\u0623\u0633\u0627\u0633\u064A\u0627\u062A \u0648",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/SjIwWlWYTUqkb9yxw1Zmg\" title=\"\u0648\u0627\u0654\u0645\u062B\u0644\u0629 \u062A\u062F\u0627\u0648\u0644 \u0627\u0644\u0641\u0648\u0631\u0643\u0633 \u0648\u0627\u0654\u0633\u0648\u0627\u0642 \u0627\u0644\u0641\u0648\u0631\u0643\u0633 \u0648\u0627\u0654\u0633\u0627\u0633\u064A\u0627\u062A \u0648\"></iframe></div>"
        },
        {
            title: "\u0623\u0633\u0627\u0633\u064A\u0627\u062A \u0623\u0633\u0648\u0627\u0642 \u0627\u0644\u0633\u0644\u0639 \u0648\u0623\u0645\u062B\u0644\u0629 \u0639\u0644\u0649 \u0627\u0644\u062A\u062F\u0627\u0648\u0644",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/UjgQN9hzS0qc3XaEVTRJbg\" title=\"\u0627\u0654\u0633\u0627\u0633\u064A\u0627\u062A \u0627\u0654\u0633\u0648\u0627\u0642 \u0627\u0644\u0633\u0644\u0639 \u0648\u0627\u0654\u0645\u062B\u0644\u0629 \u0639\u0644\u0649 \u0627\u0644\u062A\u062F\u0627\u0648\u0644\"></iframe></div>"
        },
        {
            title: "\u062A\u062F\u0627\u0648\u0644 \u0627\u0644\u0645\u0624\u0634\u0631\u0627\u062A \u0627\u0644\u0639\u0627\u0644\u0645\u064A\u0629",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/HF9u3edhkSVY4h1OafKA\" title=\"\u062A\u062F\u0627\u0648\u0644 \u0627\u0644\u0645\u0648\u0654\u0634\u0631\u0627\u062A \u0627\u0644\u0639\u0627\u0644\u0645\u064A\u0629\"></iframe></div>"
        },
        {
            title: "\u062A\u0642\u0646\u064A\u0629 \u062A\u062F\u0627\u0648\u0644 \u0623\u062E\u0628\u0627\u0631 \u0627\u0644\u0633\u0648\u0642",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/p2G9brw6U6epw3c3qBY1w\" title=\"\u062A\u0642\u0646\u064A\u0629 \u062A\u062F\u0627\u0648\u0644 \u0627\u0654\u062E\u0628\u0627\u0631 \u0627\u0644\u0633\u0648\u0642\"></iframe></div>"
        },
        {
            title: "\u062A\u062C\u0627\u0631\u0629 \u0627\u0644\u0627\u062A\u062C\u0627\u0647",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/SQHYLQjRkCyXfW5JdlDIQ\" title=\"\u062A\u062C\u0627\u0631\u0629 \u0627\u0644\u0627\u062A\u062C\u0627\u0647\"></iframe></div>"
        },
    ]);
    //cn
    var cnBasicForexEducationList = (0, vue_1.reactive)([
        {
            title: "1. \u4E3A\u4F55\u4EA4\u6613",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/K8hKzjXyUOjVNb7WZw7kg\" title=\"1. \u4E3A\u4F55\u4EA4\u6613\"></iframe></div>"
        },
        {
            title: "2. \u4F55\u65F6\u8FDB\u884C\u5916\u6C47\u4EA4\u6613",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/k48SQiOtOkaHg1GlU3UElA\" title=\"2. \u4F55\u65F6\u8FDB\u884C\u5916\u6C47\u4EA4\u6613\"></iframe></div>"
        },
        {
            title: "3. \u4EA4\u6613\u672F\u8BED\u6216\u6211\u8981\u5728\u54EA\u91CC\u505A\u591A",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/W8upAgppAEQ2p3epAsPrg\" title=\"3. \u4EA4\u6613\u672F\u8BED\u6216\u6211\u8981\u5728\u54EA\u91CC\u505A\u591A\"></iframe></div>"
        },
        {
            title: "4. \u5982\u4F55\u5229\u7528\u6760\u6746\u4EA4\u6613",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/ZQDdObBH10aqsEgDffQrsA\" title=\"4. \u5982\u4F55\u5229\u7528\u6760\u6746\u4EA4\u6613\"></iframe></div>"
        },
        {
            title: "5. \u4EC0\u4E48\u662F PIP",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/jHqNDjtHEa20qIOBnt7iA\" title=\"5. \u4EC0\u4E48\u662F PIP\"></iframe></div>"
        },
        {
            title: "6. \u5982\u4F55\u8FDB\u884C\u5916\u6C47\u4EA4\u6613",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/i8mPSHV6k6n43JS97jQg\" title=\"6. \u5982\u4F55\u8FDB\u884C\u5916\u6C47\u4EA4\u6613\"></iframe></div>"
        },
        {
            title: "7. \u5916\u6C47\u8BA2\u5355\u7C7B\u578B",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/5flqj1xFUuMtlXHyVEdg\" title=\"7. \u5916\u6C47\u8BA2\u5355\u7C7B\u578B\"></iframe></div>"
        },
        {
            title: "8\u3002\u5916\u6C47\u4E2D\u7684\u6280\u672F\u5206\u6790",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/w2rUAQonfEuLYBTlTVl5lw\" title=\"8\u3002\u5916\u6C47\u4E2D\u7684\u6280\u672F\u5206\u6790\"></iframe></div>"
        },
        {
            title: "9. \u5916\u6C47\u4E2D\u7684\u57FA\u672C\u9762\u5206\u6790",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/43fAKsvYhEeprUvmDN2QOg\" title=\"9. \u5916\u6C47\u4E2D\u7684\u57FA\u672C\u9762\u5206\u6790\"></iframe></div>"
        },
        {
            title: "10. \u5916\u6C47\u56FE\u8868\u7C7B\u578B",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/jWXshQ5EkqgUilOXFWuog\" title=\"10. \u5916\u6C47\u56FE\u8868\u7C7B\u578B\"></iframe></div>"
        },
        {
            title: "11. \u5916\u6C47\u4E2D\u7684\u652F\u6491\u548C\u963B\u529B",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/fPZAtfjsOEKQtDPtFBk37w\" title=\"11. \u5916\u6C47\u4E2D\u7684\u652F\u6491\u548C\u963B\u529B\"></iframe></div>"
        },
        {
            title: "12. \u8D8B\u52BF\u7EBF",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/s026kNkt0y5AaIO604HRg\" title=\"12. \u8D8B\u52BF\u7EBF\"></iframe></div>"
        },
    ]);
    var cnFibonacciList = (0, vue_1.reactive)([
        {
            title: "1. \u6590\u6CE2\u90A3\u5951",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/bFEwIG0XVEibL6edWeoVMQ\" title=\"1. \u6590\u6CE2\u90A3\u5951\"></iframe></div>"
        },
        {
            title: "2. \u5916\u6C47\u6590\u6CE2\u90A3\u5951\u6269\u5C55",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/bE0e3TOPNUe173J1a91MMQ\" title=\"2. \u5916\u6C47\u6590\u6CE2\u90A3\u5951\u6269\u5C55\"></iframe></div>"
        },
        {
            title: "3. \u5B66\u4E60\u5916\u6C47\u6590\u6CE2\u90A3\u5951\u6247\u5F62\u548C\u5F27\u5F62",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/Vi8EH3jU2REWYOR6jZow\" title=\"3. \u5B66\u4E60\u5916\u6C47\u6590\u6CE2\u90A3\u5951\u6247\u5F62\u548C\u5F27\u5F62\"></iframe></div>"
        },
        {
            title: "4. \u5B66\u4E60\u5916\u6C47\u5C06\u6590\u6CE2\u90A3\u5951\u4E0E\u5176\u4ED6\u6280\u672F\u5206\u6790\u5DE5\u5177\u76F8\u7ED3\u5408",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/UWV9HhyAuECE8pdHYGq2OQ\" title=\"4. \u5B66\u4E60\u5916\u6C47\u5C06\u6590\u6CE2\u90A3\u5951\u4E0E\u5176\u4ED6\u6280\u672F\u5206\u6790\u5DE5\u5177\u76F8\u7ED3\u5408\"></iframe></div>"
        },
    ]);
    var cnUnderstandingCandlesticksList = (0, vue_1.reactive)([
        {
            title: "1. K\u7EBF",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/y0nGxUDlxU6FkxTShWi3g\" title=\"1. K\u7EBF\"></iframe></div>"
        },
        {
            title: "2. \u5916\u6C47\u4E2D\u7684\u5341\u5B57\u661FK\u7EBF",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/D5U0pmlOa0iXI4KiNj4wqA\" title=\"2. \u5916\u6C47\u4E2D\u7684\u5341\u5B57\u661FK\u7EBF\"></iframe></div>"
        },
        {
            title: "3. \u5916\u6C47\u4E2D\u7684 Marubozu K\u7EBF",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/BIUq9K5ujkmVdh60TgRw\" title=\"3. \u5916\u6C47\u4E2D\u7684 Marubozu K\u7EBF\"></iframe></div>"
        },
        {
            title: "4. \u9524\u5B50\u548C\u540A\u4EBAK\u7EBF",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/0G2FUBJyUEKQGmujASBHhA\" title=\"4. \u9524\u5B50\u548C\u540A\u4EBAK\u7EBF\"></iframe></div>"
        },
        {
            title: "5. \u5C04\u51FB\u4E4B\u661F\u548C\u5012\u9524K\u7EBF",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/sKhcZhpD3kWi0dCYvRxXwA\" title=\"5. \u5C04\u51FB\u4E4B\u661F\u548C\u5012\u9524K\u7EBF\"></iframe></div>"
        },
        {
            title: "6. \u770B\u6DA8\u523A\u7A7F\u5F62\u6001",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/14VadTkMOkCJIA7VfrSrw\" title=\"6. \u770B\u6DA8\u523A\u7A7F\u5F62\u6001\"></iframe></div>"
        },
        {
            title: "7. \u4E4C\u4E91\u76D6\u9876\u5F62\u6001",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/QKXrkhkUPEO956ODExiYmQ\" title=\"7. \u4E4C\u4E91\u76D6\u9876\u5F62\u6001\"></iframe></div>"
        },
        {
            title: "8. \u770B\u6DA8\u548C\u770B\u8DCC\u541E\u6CA1\u5F62\u6001",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/6XuD93jwTEqSU1cCUh0NVw\" title=\"8. \u770B\u6DA8\u548C\u770B\u8DCC\u541E\u6CA1\u5F62\u6001\"></iframe></div>"
        },
        {
            title: "9. \u954A\u5B50\u9876\u90E8\u548C\u5E95\u90E8",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/5n8D0h38MkKhMoq6Sy1A\" title=\"9. \u954A\u5B50\u9876\u90E8\u548C\u5E95\u90E8\"></iframe></div>"
        },
        {
            title: "10. \u6668\u661F\u548C\u9EC4\u660F\u4E4B\u661F\u6A21\u5F0F",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/1f3eLBH7JkGdHiygvEqvAQ\" title=\"10. \u6668\u661F\u548C\u9EC4\u660F\u4E4B\u661F\u6A21\u5F0F\"></iframe></div>"
        },
        {
            title: "11. 3 \u767D\u5175 3 \u9ED1\u4E4C\u9E26",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/bqFyhVVCbEW6VEUmjRXanQ\" title=\"11. 3 \u767D\u5175 3 \u9ED1\u4E4C\u9E26\"></iframe></div>"
        },
        {
            title: "12. 3 \u5185\u5347 3 \u5185\u964D\u6A21\u5F0F",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/HcZWdtM9Eky421hHrOf3XQ\" title=\"12. 3 \u5185\u5347 3 \u5185\u964D\u6A21\u5F0F\"></iframe></div>"
        },
        {
            title: "13. \u4E0A\u6DA8\u548C\u4E0B\u8DCC\u7684\u4E09\u79CD\u65B9\u6CD5",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/dRpXD63O606wD9demHoNhg\" title=\"13. \u4E0A\u6DA8\u548C\u4E0B\u8DCC\u7684\u4E09\u79CD\u65B9\u6CD5\"></iframe></div>"
        },
    ]);
    var cnChartFormationPatternsList = (0, vue_1.reactive)([
        {
            title: "1. \u5916\u6C47\u53CC\u9876\u548C\u53CC\u5E95\u5F62\u6210\u6A21\u5F0F",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/4IjRWqcOkUCegLw6EaRQVg\" title=\"1. \u5916\u6C47\u53CC\u9876\u548C\u53CC\u5E95\u5F62\u6210\u6A21\u5F0F\"></iframe></div>"
        },
        {
            title: "2. \u5B66\u4E60\u5916\u6C47\u5934\u80A9\u5F62\u6001",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/tVNsrTqYt0m2M6174JC6Q\" title=\"2. \u5B66\u4E60\u5916\u6C47\u5934\u80A9\u5F62\u6001\"></iframe></div>"
        },
        {
            title: "3. \u5B66\u4E60\u5916\u6C47\u5012\u5934\u80A9\u5F62\u6001",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/ccLNGecoqkWg67PPJkk6TA\" title=\"3. \u5B66\u4E60\u5916\u6C47\u5012\u5934\u80A9\u5F62\u6001\"></iframe></div>"
        },
        {
            title: "4\u3002\u5B66\u4E60\u5916\u6C47\u725B\u5E02\u65D7\u5F62\u5F62\u6210\u6A21\u5F0F",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/NmBLEupbEetbkbOXzgIGw\" title=\"4\u3002\u5B66\u4E60\u5916\u6C47\u725B\u5E02\u65D7\u5F62\u5F62\u6210\u6A21\u5F0F\"></iframe></div>"
        },
        {
            title: "5. \u5B66\u4E60\u5916\u6C47\u718A\u5E02\u65D7\u5F62\u6A21\u5F0F",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/u2nrzlEG9kKH8D4gvbxivA\" title=\"5. \u5B66\u4E60\u5916\u6C47\u718A\u5E02\u65D7\u5F62\u6A21\u5F0F\"></iframe></div>"
        },
        {
            title: "6. \u5B66\u4E60\u5916\u6C47\u770B\u6DA8\u548C\u770B\u8DCC\u4E09\u89D2\u65D7\u5F62\u6001",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/MukRxIAxuES8SevqfrzLA\" title=\"6. \u5B66\u4E60\u5916\u6C47\u770B\u6DA8\u548C\u770B\u8DCC\u4E09\u89D2\u65D7\u5F62\u6001\"></iframe></div>"
        },
        {
            title: "7. \u5B66\u4E60\u5916\u6C47\u4E0B\u964D\u6954\u5F62\u6A21\u5F0F",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/exEzjKWkoEeAhPcRLdE8A\" title=\"7. \u5B66\u4E60\u5916\u6C47\u4E0B\u964D\u6954\u5F62\u6A21\u5F0F\"></iframe></div>"
        },
        {
            title: "8. \u5B66\u4E60\u5916\u6C47\u4E0A\u5347\u548C\u4E0B\u964D\u4E09\u89D2\u5F62\u5F62\u6001",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/SO5LQvhAj0e2kioEZuMsTg\" title=\"8. \u5B66\u4E60\u5916\u6C47\u4E0A\u5347\u548C\u4E0B\u964D\u4E09\u89D2\u5F62\u5F62\u6001\"></iframe></div>"
        },
        {
            title: "9. \u5B66\u4E60\u5916\u6C47\u5BF9\u79F0\u4E09\u89D2\u5F62\u6A21\u5F0F",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/1Y4S4p86oEKzhshP8qMmA\" title=\"9. \u5B66\u4E60\u5916\u6C47\u5BF9\u79F0\u4E09\u89D2\u5F62\u6A21\u5F0F\"></iframe></div>"
        },
        {
            title: "10. \u5B66\u4E60\u5916\u6C47\u7BB1\u5F62\u533A\u95F4",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/5G739nXbEy85qxMq4O0Q\" title=\"10. \u5B66\u4E60\u5916\u6C47\u7BB1\u5F62\u533A\u95F4\"></iframe></div>"
        },
        {
            title: "11. \u5B66\u4E60\u5916\u6C47\u676F\u67C4\u5F62\u6210\u6A21\u5F0F",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/JnzXs2je0yfnpFOh3OTmA\" title=\"11. \u5B66\u4E60\u5916\u6C47\u676F\u67C4\u5F62\u6210\u6A21\u5F0F\"></iframe></div>"
        },
        {
            title: "12. \u5B66\u4E60\u5916\u6C47\u5012\u676F\u67C4\u5F62\u6001",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/cWRl4NuPE2KJSIKgBXUcg\" title=\"12. \u5B66\u4E60\u5916\u6C47\u5012\u676F\u67C4\u5F62\u6001\"></iframe></div>"
        },
        {
            title: "13. \u5B66\u4E60\u5916\u6C47\u4E0A\u5347\u6954\u5F62\u6A21\u5F0F",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/1ePJZSJCxU67KmZBmhauuQ\" title=\"13. \u5B66\u4E60\u5916\u6C47\u4E0A\u5347\u6954\u5F62\u6A21\u5F0F\"></iframe></div>"
        },
    ]);
    var cnForexIndicatorsList = (0, vue_1.reactive)([
        {
            title: "1.\u5916\u6C47 RSI \u76F8\u5BF9\u5F3A\u5F31\u6307\u6570",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/4JFDkqpccUWqmjRSGfeA\" title=\"1.\u5916\u6C47 RSI \u76F8\u5BF9\u5F3A\u5F31\u6307\u6570\"></iframe></div>"
        },
        {
            title: "2. \u5916\u6C47 RSI \u968F\u673A\u9707\u8361\u6307\u6807",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/ZXRP9ZUmLE6upvFphijzQ\" title=\"2. \u5916\u6C47 RSI \u968F\u673A\u9707\u8361\u6307\u6807\"></iframe></div>"
        },
        {
            title: "3. \u5916\u6C47 ATR \u5E73\u5747\u771F\u5B9E\u6CE2\u52A8\u8303\u56F4",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/rcxpYhOInU6rTCjTs5g9Hg\" title=\"3. \u5916\u6C47 ATR \u5E73\u5747\u771F\u5B9E\u6CE2\u52A8\u8303\u56F4\"></iframe></div>"
        },
        {
            title: "4. \u5B66\u4E60\u5916\u6C47\u79FB\u52A8\u5E73\u5747\u7EBF",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/FvkHbVn9wUeb5HucKbun7Q\" title=\"4. \u5B66\u4E60\u5916\u6C47\u79FB\u52A8\u5E73\u5747\u7EBF\"></iframe></div>"
        },
        {
            title: "5. \u5916\u6C47\u79FB\u52A8\u5E73\u5747\u7EBF\u6536\u655B\u53D1\u6563 MACD",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/0nwGU7RQEC8YlwDVX9wXw\" title=\"5. \u5916\u6C47\u79FB\u52A8\u5E73\u5747\u7EBF\u6536\u655B\u53D1\u6563 MACD\"></iframe></div>"
        },
        {
            title: "6. \u5916\u6C47\u5E73\u5747\u65B9\u5411\u6307\u6570 ADX",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/8RP0XwICNEq4UXggnxPmww\" title=\"6. \u5916\u6C47\u5E73\u5747\u65B9\u5411\u6307\u6570 ADX\"></iframe></div>"
        },
        {
            title: "7. \u5916\u6C47\u5E03\u6797\u7EBF",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/5T3QYpHDSEGpW4n90aqwg\" title=\"7. \u5916\u6C47\u5E03\u6797\u7EBF\"></iframe></div>"
        },
        {
            title: "8. \u5916\u6C47\u629B\u7269\u7EBF SAR",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/f114zsWJkkSbmwDC7YStlA\" title=\"8. \u5916\u6C47\u629B\u7269\u7EBF SAR\"></iframe></div>"
        },
        {
            title: "9. \u5916\u6C47 Ichimoku Kinko Hyo",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/LpJeRUMT0KpL2GfJjq4Xw\" title=\"9. \u5916\u6C47 Ichimoku Kinko Hyo\"></iframe></div>"
        },
        {
            title: "10. \u5916\u6C47\u67A2\u8F74\u70B9",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/i4IQPcGpz0mINKzJ7lXx5g\" title=\"10. \u5916\u6C47\u67A2\u8F74\u70B9\"></iframe></div>"
        },
    ]);
    var cnTimingInForexList = (0, vue_1.reactive)([
        {
            title: "1. \u5916\u6C47\u4EA4\u6613\u4E2D\u7684\u5165\u573A\u65F6\u673A",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/lJv9JaYx5EuNWJ1QxLgIgA\" title=\"1. \u5916\u6C47\u4EA4\u6613\u4E2D\u7684\u5165\u573A\u65F6\u673A\"></iframe></div>"
        },
        {
            title: "2. \u5916\u6C47\u4EA4\u6613\u65F6\u9000\u51FA\u65F6\u673A",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/6cV4qFSz3kiI4RYzeGC21g\" title=\"2. \u5916\u6C47\u4EA4\u6613\u65F6\u9000\u51FA\u65F6\u673A\"></iframe></div>"
        },
    ]);
    var cnMT4List = (0, vue_1.reactive)([
        {
            title: "1. MT4 \u5165\u95E8",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/1VUL9ffqAkmJFhZqUZWtQ\" title=\"1. MT4 \u5165\u95E8\"></iframe></div>"
        },
        {
            title: "2. \u5E02\u573A\u89C2\u5BDF - \u57FA\u7840\u77E5\u8BC6",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/uZTWgo9EUa7rj4hmXnew\" title=\"2. \u5E02\u573A\u89C2\u5BDF - \u57FA\u7840\u77E5\u8BC6\"></iframe></div>"
        },
        {
            title: "3. \u56FE\u8868\u7A97\u53E3\u57FA\u7840\u77E5\u8BC6",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/MjDZVFflnkOUHQoTkMDYJw\" title=\"3. \u56FE\u8868\u7A97\u53E3\u57FA\u7840\u77E5\u8BC6\"></iframe></div>"
        },
        {
            title: "4. \u7EC8\u7AEF\u7A97\u53E3\u57FA\u7840\u77E5\u8BC6 - \u7B2C 1 \u90E8\u5206",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/7UfBHwe6UGkkIzt2dHuLw\" title=\"4. \u7EC8\u7AEF\u7A97\u53E3\u57FA\u7840\u77E5\u8BC6 - \u7B2C 1 \u90E8\u5206\"></iframe></div>"
        },
        {
            title: "5. \u7EC8\u7AEF\u7A97\u53E3\u57FA\u7840\u77E5\u8BC6 - \u7B2C 2 \u90E8\u5206",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/BkJuusnVPEiWxbyE0hzZA\" title=\"5. \u7EC8\u7AEF\u7A97\u53E3\u57FA\u7840\u77E5\u8BC6 - \u7B2C 2 \u90E8\u5206\"></iframe></div>"
        },
        {
            title: "6. \u5BFC\u822A\u5668\u7A97\u53E3\u57FA\u7840\u77E5\u8BC6",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/3PHrPszZ40SOjT7cQEzR0g\" title=\"6. \u5BFC\u822A\u5668\u7A97\u53E3\u57FA\u7840\u77E5\u8BC6\"></iframe></div>"
        },
        {
            title: "7. \u4E0B\u8BA2\u5355",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/ujtmM5jtjUm5tRatcNzXDA\" title=\"7. \u4E0B\u8BA2\u5355\"></iframe></div>"
        },
        {
            title: "8. \u8D26\u6237\u5386\u53F2\u8BB0\u5F55/\u5DF2\u5E73\u4ED3\u4EA4\u6613",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/i3eNRjpyKEWvS4n2rM5t8g\" title=\"8. \u8D26\u6237\u5386\u53F2\u8BB0\u5F55-\u5DF2\u5E73\u4ED3\u4EA4\u6613\"></iframe></div>"
        },
        {
            title: "9. \u5E02\u573A\u89C2\u5BDF\u8BE6\u60C5",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/9sYqvvzPnke6fD2uyndssg\" title=\"9. \u5E02\u573A\u89C2\u5BDF\u8BE6\u60C5\"></iframe></div>"
        },
        {
            title: "10. \u5173\u4E8E\u56FE\u8868\u7684\u4E00\u5207",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/sB5uOacimU29behPMFb4yA\" title=\"10. \u5173\u4E8E\u56FE\u8868\u7684\u4E00\u5207\"></iframe></div>"
        },
        {
            title: "11. \u56FE\u8868\u7A97\u53E3\u5C5E\u6027",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/i9Eda7NNckKbFg6yq4SyZQ\" title=\"11. \u56FE\u8868\u7A97\u53E3\u5C5E\u6027\"></iframe></div>"
        },
        {
            title: "12. \u6307\u6807\u548C\u811A\u672C",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/8gUzvo3jEU6L6tBTyWQnw\" title=\"12. \u6307\u6807\u548C\u811A\u672C\"></iframe></div>"
        },
    ]);
    var cnCryptocurrenciesList = (0, vue_1.reactive)([
        {
            title: "1. \u80CC\u666F - \u65E9\u671F\u6570\u5B57\u8D27\u5E01",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/GG5xhrhnlUy1EPxmvZnswA\" title=\"1. \u80CC\u666F - \u65E9\u671F\u6570\u5B57\u8D27\u5E01\"></iframe></div>"
        },
        {
            title: "2. \u533A\u5757\u94FE\u548C\u52A0\u5BC6\u8D27\u5E01\u7684\u6F14\u53D8",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/gGheNFOqYkOFsPfnn3ribg\" title=\"2. \u533A\u5757\u94FE\u548C\u52A0\u5BC6\u8D27\u5E01\u7684\u6F14\u53D8\"></iframe></div>"
        },
        {
            title: "3. \u6570\u5B57\u8D27\u5E01\u548C\u533A\u5757\u94FE\u7684\u672A\u6765",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/msBj8nFNlkOm1uUZd5dig\" title=\"3. \u6570\u5B57\u8D27\u5E01\u548C\u533A\u5757\u94FE\u7684\u672A\u6765\"></iframe></div>"
        },
        {
            title: "4. \u80CC\u666F - \u62E5\u6709\u6570\u5B57\u8D27\u5E01\u7684\u6982\u5FF5",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/3zP7wFaWr0y93otNu56rWw\" title=\"4. \u80CC\u666F - \u62E5\u6709\u6570\u5B57\u8D27\u5E01\u7684\u6982\u5FF5\"></iframe></div>"
        },
        {
            title: "5. \u4EC0\u4E48\u662F\u94B1\u5305\u4EE5\u53CA\u5B83\u4EEC\u5982\u4F55\u5DE5\u4F5C",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/tkgAsLfDEECXw6n0tadxWA\" title=\"5. \u4EC0\u4E48\u662F\u94B1\u5305\u4EE5\u53CA\u5B83\u4EEC\u5982\u4F55\u5DE5\u4F5C\"></iframe></div>"
        },
        {
            title: "6. \u5907\u4EFD\u548C\u79BB\u7EBF\u5B58\u50A8 - \u4E3A\u4EC0\u4E48\u5B83\u5F88\u91CD\u8981\uFF0C\u5982\u4F55\u505A\u5230",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/1UA3zl1IeUSChdPkxyV37Q\" title=\"6. \u5907\u4EFD\u548C\u79BB\u7EBF\u5B58\u50A8 - \u4E3A\u4EC0\u4E48\u5B83\u5F88\u91CD\u8981\uFF0C\u5982\u4F55\u505A\u5230\"></iframe></div>"
        },
        {
            title: "7. \u79FB\u52A8\u5B89\u5168 - \u5982\u4F55\u5B89\u5168\u5730\u4FDD\u62A4\u60A8\u7684\u79FB\u52A8\u94B1\u5305",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/GoUh04EeZkuZVLlc2B1L7A\" title=\"7. \u79FB\u52A8\u5B89\u5168 - \u5982\u4F55\u5B89\u5168\u5730\u4FDD\u62A4\u60A8\u7684\u79FB\u52A8\u94B1\u5305\"></iframe></div>"
        },
        {
            title: "8. \u52A0\u5BC6\u8D27\u5E01\u7684\u7C7B\u578B",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/SGgWJHO30iVbGcqEgr5g\" title=\"8. \u52A0\u5BC6\u8D27\u5E01\u7684\u7C7B\u578B\"></iframe></div>"
        },
        {
            title: "9. \u4EC0\u4E48\u662F\u6BD4\u7279\u5E01\uFF1F",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/Voi2UKjxqketXTZskEVqng\" title=\"9. \u4EC0\u4E48\u662F\u6BD4\u7279\u5E01\uFF1F\"></iframe></div>"
        },
        {
            title: "10. \u6BD4\u7279\u5E01\u7684\u5386\u53F2",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/stuaW8U2SEmMSMlqZPifZQ\" title=\"10. \u6BD4\u7279\u5E01\u7684\u5386\u53F2\"></iframe></div>"
        },
        {
            title: "11. \u9664\u4E86\u6295\u8D44\u4E4B\u5916\uFF0C\u6BD4\u7279\u5E01\u7684\u4F7F\u7528\u65B9\u5F0F",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/JrrrVThpkIQONfzzbjIQ\" title=\"11. \u9664\u4E86\u6295\u8D44\u4E4B\u5916\uFF0C\u6BD4\u7279\u5E01\u7684\u4F7F\u7528\u65B9\u5F0F\"></iframe></div>"
        },
        {
            title: "12. \u5982\u4F55\u6295\u8D44\u6BD4\u7279\u5E01",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/aB1kCfK9UKMOQLPTdGVuA\" title=\"12. \u5982\u4F55\u6295\u8D44\u6BD4\u7279\u5E01\"></iframe></div>"
        },
        {
            title: "13. \u6BD4\u7279\u5E01\u4EA4\u6613\u6D89\u53CA\u54EA\u4E9B\u98CE\u9669",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/k5OSEh48aEqlTYqEeSgHPQ\" title=\"13. \u6BD4\u7279\u5E01\u4EA4\u6613\u6D89\u53CA\u54EA\u4E9B\u98CE\u9669\"></iframe></div>"
        },
        {
            title: "14. \u5982\u4F55\u8D2D\u4E70\u6BD4\u7279\u5E01",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/MhT1L3if10GncA8W19T8DQ\" title=\"14. \u5982\u4F55\u8D2D\u4E70\u6BD4\u7279\u5E01\"></iframe></div>"
        },
        {
            title: "15. \u4E3A\u4EC0\u4E48\u63A5\u53D7\u6BD4\u7279\u5E01\uFF1F",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/zFyQyW8ROk2y2G5JsaIfwA\" title=\"15. \u4E3A\u4EC0\u4E48\u63A5\u53D7\u6BD4\u7279\u5E01\uFF1F\"></iframe></div>"
        },
        {
            title: "16. \u63A5\u53D7\u6BD4\u7279\u5E01\u6D89\u53CA\u54EA\u4E9B\u98CE\u9669",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/sfNGDQNtB02CNVXuOUojw\" title=\"16. \u63A5\u53D7\u6BD4\u7279\u5E01\u6D89\u53CA\u54EA\u4E9B\u98CE\u9669\"></iframe></div>"
        },
        {
            title: "17. \u5982\u4F55\u63A5\u53D7\u6BD4\u7279\u5E01\u652F\u4ED8\u670D\u52A1\u6216\u5546\u54C1",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/1lwjpTrscEGkT6VuLjSw3w\" title=\"17. \u5982\u4F55\u63A5\u53D7\u6BD4\u7279\u5E01\u652F\u4ED8\u670D\u52A1\u6216\u5546\u54C1\"></iframe></div>"
        },
        {
            title: "18. \u7A0E\u52A1\u3001\u4F1A\u8BA1\u548C\u6CD5\u5F8B\u5C55\u671B",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/Zm9DQoEQAE2MclmAyPCGDw\" title=\"18. \u7A0E\u52A1\u3001\u4F1A\u8BA1\u548C\u6CD5\u5F8B\u5C55\u671B\"></iframe></div>"
        },
    ]);
    var cnIntroductionToTheStockMarketList = (0, vue_1.reactive)([
        {
            title: "1. \u80A1\u7968\u5E02\u573A\u7B80\u4ECB",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/CsgJ5mHXkeGVh11t9qmXw\" title=\"1. \u80A1\u7968\u5E02\u573A\u7B80\u4ECB\"></iframe></div>"
        },
        {
            title: "2. \u80A1\u7968\u56FE\u8868\u53EF\u4EE5\u9884\u6D4B\u672A\u6765\u548C\u4EA4\u6613\u7CFB\u7EDF\u5417\uFF1F",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/AGBHo0YIUy4Uw5yBDZSBg\" title=\"2. \u80A1\u7968\u56FE\u8868\u53EF\u4EE5\u9884\u6D4B\u672A\u6765\u548C\u4EA4\u6613\u7CFB\u7EDF\u5417\uFF1F\"></iframe></div>"
        },
        {
            title: "3. \u652F\u6491\u4F4D\u548C\u963B\u529B\u4F4D\u4EA4\u6613\u7B56\u7565",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/9trieaYIB0yZtSjdenE9g\" title=\"3. \u652F\u6491\u4F4D\u548C\u963B\u529B\u4F4D\u4EA4\u6613\u7B56\u7565\"></iframe></div>"
        },
        {
            title: "4. \u5982\u4F55\u786E\u5B9A\u5E02\u573A\u65B9\u5411 - \u7B2C 1 \u90E8\u5206",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/4GBnzAhYkSTaViFWrbEAA\" title=\"4. \u5982\u4F55\u786E\u5B9A\u5E02\u573A\u65B9\u5411 - \u7B2C 1 \u90E8\u5206\"></iframe></div>"
        },
        {
            title: "5. \u5982\u4F55\u786E\u5B9A\u5E02\u573A\u65B9\u5411 - \u7B2C 2 \u90E8\u5206",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/IuGnCO4UC4rHIALW53lQ\" title=\"5. \u5982\u4F55\u786E\u5B9A\u5E02\u573A\u65B9\u5411 - \u7B2C 2 \u90E8\u5206\"></iframe></div>"
        },
        {
            title: "6. \u56FE\u8868\u6A21\u5F0F\uFF1A\u7B80\u4ECB",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/bcv6NHK3a0SgvzZXyJNstA\" title=\"6. \u56FE\u8868\u6A21\u5F0F\uFF1A\u7B80\u4ECB\"></iframe></div>"
        },
        {
            title: "7. \u5BF9\u79F0\u4E09\u89D2\u5F62",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/UHigXan1EescMspGcSC9g\" title=\"7. \u5BF9\u79F0\u4E09\u89D2\u5F62\"></iframe></div>"
        },
        {
            title: "8. \u5BF9\u79F0\u4E09\u89D2\u5F62\u4EA4\u6613\u7B56\u7565",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/UZObzq1f2ESvIYoCgamN5Q\" title=\"8. \u5BF9\u79F0\u4E09\u89D2\u5F62\u4EA4\u6613\u7B56\u7565\"></iframe></div>"
        },
        {
            title: "9. \u65D7\u5E1C\u548C\u4E09\u89D2\u65D7",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/yx0ODfT56UiVZC9OsaUiA\" title=\"9. \u65D7\u5E1C\u548C\u4E09\u89D2\u65D7\"></iframe></div>"
        },
        {
            title: "10. \u65D7\u5E1C\u548C\u4E09\u89D2\u65D7\u4EA4\u6613\u7B56\u7565",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/4DMLGwgmbUOKRJKwojhJ1g\" title=\"10. \u65D7\u5E1C\u548C\u4E09\u89D2\u65D7\u4EA4\u6613\u7B56\u7565\"></iframe></div>"
        },
        {
            title: "11. \u4E0A\u5347\u4E09\u89D2\u5F62",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/agVAwlXmTUCpKusXRJLToA\" title=\"11. \u4E0A\u5347\u4E09\u89D2\u5F62\"></iframe></div>"
        },
        {
            title: "12. \u4E0A\u5347\u4E09\u89D2\u5F62\u4EA4\u6613\u7B56\u7565",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/esvAi82X0ChgUfAuiE2bw\" title=\"12. \u4E0A\u5347\u4E09\u89D2\u5F62\u4EA4\u6613\u7B56\u7565\"></iframe></div>"
        },
        {
            title: "13. \u4EA4\u6613\u91CF\u548C\u8D8B\u52BF",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/0jl7O6g71EEKoT7uREuQ\" title=\"13. \u4EA4\u6613\u91CF\u548C\u8D8B\u52BF\"></iframe></div>"
        },
    ]);
    var cnAdvancedStockMarketTradingLevel1List = (0, vue_1.reactive)([
        {
            title: "1. \u5E02\u573A\u6307\u6807",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/pLi3rE1WSkBHVvNSh7cQ\" title=\"1. \u5E02\u573A\u6307\u6807\"></iframe></div>"
        },
        {
            title: "2. \u4EA4\u6613\u65B9\u6CD5",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/MXRFtxmq5EqOj1SzWbcrhQ\" title=\"2\"></iframe></div>"
        },
        {
            title: "3. \u6574\u6570",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/DUiZQcc7i06I0Im763NK0A\" title=\"3. \u6574\u6570\"></iframe></div>"
        },
        {
            title: "4. \u5EFA\u7ACB\u4EA4\u6613",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/0FIqSXOMuEiYRb2I8wMjFQ\" title=\"4. \u5EFA\u7ACB\u4EA4\u6613\"></iframe></div>"
        },
        {
            title: "5. \u4E13\u4E1A\u4EA4\u6613\u5458\u7684\u6280\u672F\u5206\u6790",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/wZQBsd4DmkmvZoiYSNyZ6g\" title=\"5. \u4E13\u4E1A\u4EA4\u6613\u5458\u7684\u6280\u672F\u5206\u6790\"></iframe></div>"
        },
        {
            title: "6. \u5B9E\u7528\u6280\u672F\u5206\u6790",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/tWuRGegbOUqNgKgKGIgefQ\" title=\"6. \u5B9E\u7528\u6280\u672F\u5206\u6790\"></iframe></div>"
        },
        {
            title: "7. \u4EA4\u6613\u5FC3\u7406\u5B66",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/ViPFCKcVCUyJgMl5ogDg\" title=\"7. \u4EA4\u6613\u5FC3\u7406\u5B66\"></iframe></div>"
        },
        {
            title: "8. \u98CE\u9669\u548C\u5934\u5BF8\u7BA1\u7406",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/rF3GozwzOEeBC558dekszg\" title=\"8. \u98CE\u9669\u548C\u5934\u5BF8\u7BA1\u7406\"></iframe></div>"
        },
        {
            title: "9. \u65E5\u5185\u4EA4\u6613",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/N2k4VDwwEKpr6nJ2jwog\" title=\"9. \u65E5\u5185\u4EA4\u6613\"></iframe></div>"
        },
        {
            title: "10. \u4EA4\u6613\u5957\u5229",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/BkTzQNHR04yybQnIPGCQ\" title=\"10. \u4EA4\u6613\u5957\u5229\"></iframe></div>"
        },
        {
            title: "11. \u4EA4\u6613\u51C6\u5907\u548C\u884C\u4E1A",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/4AQnx34xBkK8Q2FtfGpcuQ\" title=\"11. \u4EA4\u6613\u51C6\u5907\u548C\u884C\u4E1A\"></iframe></div>"
        },
    ]);
    var cnAdvancedStockMarketTradingLevel2List = (0, vue_1.reactive)([
        {
            title: "1. \u4EA4\u6613\u5C0F\u578B\u80A1",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/NwmdrPwEQ0qydAEnuVof2g\" title=\"1. \u4EA4\u6613\u5C0F\u578B\u80A1\"></iframe></div>"
        },
        {
            title: "2. \u8BC6\u522B\u673A\u6784\u7B56\u7565\u5E76\u5E94\u5BF9\u5B83\u4EEC",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/reefHVoqqkSOl37seR6MLQ\" title=\"2. \u8BC6\u522B\u673A\u6784\u7B56\u7565\u5E76\u5E94\u5BF9\u5B83\u4EEC\"></iframe></div>"
        },
        {
            title: "3. \u4F7F\u7528\u70ED\u952E",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/XIY4ITzJT060PSw1c3eJpw\" title=\"3. \u4F7F\u7528\u70ED\u952E\"></iframe></div>"
        },
        {
            title: "4. \u65F6\u95F4\u4E0E\u9500\u552E\u7684\u9AD8\u7EA7\u4F7F\u7528",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/qDvSbRF8aEWWbhqACyeS1g\" title=\"4. \u65F6\u95F4\u4E0E\u9500\u552E\u7684\u9AD8\u7EA7\u4F7F\u7528\"></iframe></div>"
        },
        {
            title: "5. \u7BA1\u7406\u201C\u89C2\u5BDF\u540D\u5355\u201D",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/KMkFLuJK0KZtl5Q711fdA\" title=\"5. \u7BA1\u7406\u201C\u89C2\u5BDF\u540D\u5355\u201D\"></iframe></div>"
        },
        {
            title: "6. \u56FA\u5B9A\u6570\u91CF\u6096\u8BBA",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/GN0dcaw8EmYiQN5mCzb2Q\" title=\"6. \u56FA\u5B9A\u6570\u91CF\u6096\u8BBA\"></iframe></div>"
        },
        {
            title: "7. \u8BC6\u522B\u201C\u4EA4\u6613\u9677\u9631\u201D",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/oeX5siYOWUGSnx16YbPtnQ\" title=\"7. \u8BC6\u522B\u201C\u4EA4\u6613\u9677\u9631\u201D\"></iframe></div>"
        },
        {
            title: "8. \u201C20:20\u201D\u65B9\u6CD5\u2014\u2014\u4E13\u5BB6\u5982\u4F55\u9605\u8BFB\u56FE\u8868\uFF1F",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/n4GVq55mB0SCCvGBhmy2OA\" title=\"8. \u201C20-20\u201D\u65B9\u6CD5\u2014\u2014\u4E13\u5BB6\u5982\u4F55\u9605\u8BFB\u56FE\u8868\uFF1F\"></iframe></div>"
        },
        {
            title: "9. \u5982\u4F55\u4F7F\u7528\u5931\u8D25\u6A21\u5F0F\u8FDB\u884C\u4EA4\u6613",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/yiMBZu8C3kukiX6miTMVw\" title=\"9. \u5982\u4F55\u4F7F\u7528\u5931\u8D25\u6A21\u5F0F\u8FDB\u884C\u4EA4\u6613\"></iframe></div>"
        },
        {
            title: "10. \u4F7F\u7528 NRB \u548C WRB K\u7EBF\u56FE",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/59V5EvGfLka0Z4kdz9l5Q\" title=\"10. \u4F7F\u7528 NRB \u548C WRB K\u7EBF\u56FE\"></iframe></div>"
        },
        {
            title: "11. \u4EA4\u6613 IPO\uFF1A\u65E5\u5185\u4EA4\u6613\u548C\u6CE2\u6BB5\u4EA4\u6613",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/tJCoayd0ybXTOvn8KLg\" title=\"11. \u4EA4\u6613 IPO\uFF1A\u65E5\u5185\u4EA4\u6613\u548C\u6CE2\u6BB5\u4EA4\u6613\"></iframe></div>"
        },
    ]);
    var cnTopTraderList = (0, vue_1.reactive)([
        {
            title: "1. \u9AD8\u7EA7\u4EA4\u6613\u548C\u6280\u672F\u5206\u6790",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/bpAToXurk6uB9EqtNcsuQ\" title=\"1. \u9AD8\u7EA7\u4EA4\u6613\u548C\u6280\u672F\u5206\u6790\"></iframe></div>"
        },
        {
            title: "2. \u9AD8\u7EA7\u80A1\u7968\u4EA4\u6613\u7B56\u7565 - \u8FFD\u8E2A\u6B62\u635F",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/sgkoHOpC6E0wwaX9MhJQg\" title=\"2. \u9AD8\u7EA7\u80A1\u7968\u4EA4\u6613\u7B56\u7565 - \u8FFD\u8E2A\u6B62\u635F\"></iframe></div>"
        },
        {
            title: "3. \u80A1\u7968\u4EA4\u6613\u4E2D\u7684\u67A2\u8F74\u70B9",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/lEQdWdjCskim87l8eq2Wvg\" title=\"3. \u80A1\u7968\u4EA4\u6613\u4E2D\u7684\u67A2\u8F74\u70B9\"></iframe></div>"
        },
        {
            title: "4. \u6839\u636E\u535A\u5F08\u8BBA\u8FDB\u884C\u4EA4\u6613",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/MnEZ7naqwEq75kVvdlYXvg\" title=\"4. \u6839\u636E\u535A\u5F08\u8BBA\u8FDB\u884C\u4EA4\u6613\"></iframe></div>"
        },
        {
            title: "5. \u7EC3\u4E60 VWAP \u7B56\u7565",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/nSDCn2vkNUCkEOCVcMKug\" title=\"5. \u7EC3\u4E60 VWAP \u7B56\u7565\"></iframe></div>"
        },
        {
            title: "6. \u4EA4\u6613\u7BA1\u7406",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/nSGzO6VsPE6u3jxNlj5A\" title=\"6. \u4EA4\u6613\u7BA1\u7406\"></iframe></div>"
        },
    ]);
    var cnAdvancedTradingToolsAndTechniquesList = (0, vue_1.reactive)([
        {
            title: "1. MT5 \u7B80\u4ECB",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/y93QJpUM706LkNk8RJFtXw\" title=\"1. MT5 \u7B80\u4ECB\"></iframe></div>"
        },
        {
            title: "2. \u5916\u6C47\u5E02\u573A\u57FA\u7840\u77E5\u8BC6\u548C\u4EA4\u6613\u793A\u4F8B",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/fJCWchZq506luhhfZUGg\" title=\"2. \u5916\u6C47\u5E02\u573A\u57FA\u7840\u77E5\u8BC6\u548C\u4EA4\u6613\u793A\u4F8B\"></iframe></div>"
        },
        {
            title: "3. \u5927\u5B97\u5546\u54C1\u5E02\u573A\u57FA\u7840\u77E5\u8BC6\u548C\u4EA4\u6613\u793A\u4F8B",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/gpVZ5un8m0aT3kuUmUFNg\" title=\"3. \u5927\u5B97\u5546\u54C1\u5E02\u573A\u57FA\u7840\u77E5\u8BC6\u548C\u4EA4\u6613\u793A\u4F8B\"></iframe></div>"
        },
        {
            title: "4. \u4EA4\u6613\u5168\u7403\u6307\u6570",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/kQEPXi7uMUmfdswHvsu3ig\" title=\"4. \u4EA4\u6613\u5168\u7403\u6307\u6570\"></iframe></div>"
        },
        {
            title: "5. \u5E02\u573A\u65B0\u95FB\u4EA4\u6613\u6280\u672F",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/0IWiuWl5s0qbpf1ixP2izg\" title=\"5. \u5E02\u573A\u65B0\u95FB\u4EA4\u6613\u6280\u672F\"></iframe></div>"
        },
        {
            title: "6. \u8D8B\u52BF\u4EA4\u6613",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/Ki8pHFa4skWhAM6TVU53A\" title=\"6. \u8D8B\u52BF\u4EA4\u6613\"></iframe></div>"
        },
    ]);
    //vn
    var vnBasicForexEducationList = (0, vue_1.reactive)([
        {
            title: "T\u1EA1i sao n\u00EAn giao d\u1ECBch Forex",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/Ck8eepOSR0uQQhP2l8ZzOw\" title=\"Ta\u0323i sao ne\u0302n giao di\u0323ch Forex\"></iframe></div>"
        },
        {
            title: "Khi n\u00E0o n\u00EAn giao d\u1ECBch Forex",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/RUcE49Xdmk9X44ggaBpJw\" title=\"Khi na\u0300o ne\u0302n giao di\u0323ch Forex\"></iframe></div>"
        },
        {
            title: "Thu\u1EADt ng\u1EEF giao d\u1ECBch Ho\u1EB7c T\u00F4i se\u0303 \u201Clong\u201D \u01A1\u0309 \u0111\u00E2u",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/5TytuWjUnE6kPbSIU59BGQ\" title=\"Thu\u1EADt ng\u1EEF giao d\u1ECBch Ho\u1EB7c T\u00F4i se\u0303 \u201Clong\u201D \u01A1\u0309 \u0111\u00E2u\"></iframe></div>"
        },
        {
            title: "Giao di\u0323ch s\u1EED d\u1EE5ng \u0111\u00F2n b\u1EA9y hi\u1EC7u qu\u1EA3",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/6zqBj8amB0m1pbCANvbtHg\" title=\"Giao di\u0323ch s\u1EED d\u1EE5ng \u0111\u00F2n b\u1EA9y hi\u1EC7u qu\u1EA3\"></iframe></div>"
        },
        {
            title: "PIP l\u00E0 g\u00EC?",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/vg0gvM2iEk2A5mCdxUOgQA\" title=\"PIP la\u0300 gi\u0300-\"></iframe></div>"
        },
        {
            title: "L\u00E0m th\u1EBF n\u00E0o \u0111\u1EC3 \u0111\u1EB7t m\u1EDF m\u1ED9t giao d\u1ECBch Forex",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/38jHslkpTkqrQJFiITKQ\" title=\"La\u0300m the\u0302\u0301 na\u0300o \u0111e\u0302\u0309 \u0111a\u0323\u0306t mo\u031B\u0309 mo\u0323\u0302t giao di\u0323ch Forex\"></iframe></div>"
        },
        {
            title: "C\u00E1c l\u1EC7nh Forex",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/U08ml855QUiGgT66O1PUgQ\" title=\"Ca\u0301c le\u0323\u0302nh Forex\"></iframe></div>"
        },
        {
            title: "Ph\u00E2n t\u00EDch k\u0129 thu\u1EADt giao d\u1ECBch Forex",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/Va5XJhl0EuP0AAiFlO9Sg\" title=\"Pha\u0302n ti\u0301ch ki\u0303 thua\u0323\u0302t giao di\u0323ch Forex\"></iframe></div>"
        },
        {
            title: "Ph\u00E2n t\u00EDch c\u01A1 b\u1EA3n trong Forex",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/8Msm5enzkke3GxfkuhNAQ\" title=\"Pha\u0302n ti\u0301ch co\u031B ba\u0309n trong Forex\"></iframe></div>"
        },
        {
            title: "C\u00E1c d\u1EA1ng \u0111\u1ED3 th\u1ECB Forex",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/aWBE3z6YEC5cAg6fj1XbA\" title=\"Ca\u0301c da\u0323ng \u0111o\u0302\u0300 thi\u0323 Forex\"></iframe></div>"
        },
        {
            title: "H\u1ED7 tr\u1EE3 v\u00E0 Kh\u00E1ng c\u1EF1 trong Forex",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/krCDTpFUCbDSZO40jMFQ\" title=\"Ho\u0302\u0303 tro\u031B\u0323 va\u0300 Kha\u0301ng cu\u031B\u0323 trong Forex\"></iframe></div>"
        },
        {
            title: "\u0110\u01B0\u1EDDng xu h\u01B0\u1EDBng",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/3UlR6Ek2n0OIPYBrseoiNg\" title=\"\u0110u\u031Bo\u031B\u0300ng xu hu\u031Bo\u031B\u0301ng\"></iframe></div>"
        },
    ]);
    var vnFibonacciList = (0, vue_1.reactive)([
        {
            title: "D\u00E3y Fibonacci",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/NdUW0jy5Bk21c35zkEBuqw\" title=\"Da\u0303y Fibonacci\"></iframe></div>"
        },
        {
            title: "D\u00E3y Fibonacci m\u1EDF r\u1ED9ng trong Forex",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/APdQh6K0l0q765vjsEVq4w\" title=\"Da\u0303y Fibonacci mo\u031B\u0309 ro\u0323\u0302ng trong Forex\"></iframe></div>"
        },
        {
            title: "T\u00ECm hi\u1EC3u v\u1EC1 Fibonacci h\u00ECnh qu\u1EA1t v\u00E0 h\u00ECnh cung trong Forex",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/7Y0qfhfRDkyZYSvFldPg\" title=\"Ti\u0300m hie\u0302\u0309u ve\u0302\u0300 Fibonacci hi\u0300nh qua\u0323t va\u0300 hi\u0300nh cung trong Forex\"></iframe></div>"
        },
        {
            title: "T\u00ECm hi\u1EC3u D\u00E3y Fibonacci k\u1EBFt h\u1EE3p v\u1EDBi c\u00E1c c\u00F4ng c\u1EE5 ph\u00E2n t\u00EDch k\u1EF9 thu\u1EADt kh\u00E1c trong Forex",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/KqaljsuVE6f8JOKRqNLHg\" title=\"Ti\u0300m hie\u0302\u0309u Da\u0303y Fibonacci ke\u0302\u0301t ho\u031B\u0323p vo\u031B\u0301i ca\u0301c co\u0302ng cu\u0323 pha\u0302n ti\u0301ch ky\u0303 thua\u0323\u0302t kha\u0301c trong Forex\"></iframe></div>"
        },
    ]);
    var vnUnderstandingCandlesticksList = (0, vue_1.reactive)([
        {
            title: "Ch\u00E2n n\u1EBFn",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/dhOwxiB8akiMEsun9Y60gA\" title=\"Cha\u0302n ne\u0302\u0301n\"></iframe></div>"
        },
        {
            title: "N\u1EBFn Doji trong Forex",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/XPQfeAMRYE6yYeQ8RYwtJw\" title=\"Ne\u0302\u0301n Doji trong Forex\"></iframe></div>"
        },
        {
            title: "N\u1EBFn Marubozu trong Forex",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/eMUjtRLYUErgPrH1JM7g\" title=\"Ne\u0302\u0301n Marubozu trong Forex\"></iframe></div>"
        },
        {
            title: "N\u1EBFn B\u00FAa v\u00E0 Ng\u01B0\u1EDDi treo c\u1ED5",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/v8wJFQ7vk6mXMu4ur813g\" title=\"Ne\u0302\u0301n Bu\u0301a va\u0300 Ngu\u031Bo\u031B\u0300i treo co\u0302\u0309\"></iframe></div>"
        },
        {
            title: "N\u1EBFn B\u00FAa ng\u01B0\u1EE3c v\u00E0 Sao b\u0103ng",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/OqcOABHiL0i45nnzihmOPw\" title=\"Ne\u0302\u0301n Bu\u0301a ngu\u031Bo\u031B\u0323c va\u0300 Sao ba\u0306ng\"></iframe></div>"
        },
        {
            title: "M\u1EABu h\u00ECnh n\u1EBFn xuy\u00EAn t\u0103ng",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/f9TbKXMXU02HIurzNICusg\" title=\"Ma\u0302\u0303u hi\u0300nh ne\u0302\u0301n xuye\u0302n ta\u0306ng\"></iframe></div>"
        },
        {
            title: "M\u1EABu h\u00ECnh m\u00E2y \u0111en che ph\u1EE7",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/05ByWAxhu0uDQAcfFyfiA\" title=\"Ma\u0302\u0303u hi\u0300nh ma\u0302y \u0111en che phu\u0309\"></iframe></div>"
        },
        {
            title: "C\u00E1c h\u00ECnh m\u1EABu n\u1EBFn nh\u1EA5n ch\u00ECm t\u0103ng v\u00E0 gi\u1EA3m",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/f9gRL2CPrUyFDnYOdwQExg\" title=\"Ca\u0301c hi\u0300nh ma\u0302\u0303u ne\u0302\u0301n nha\u0302\u0301n chi\u0300m ta\u0306ng va\u0300 gia\u0309m\"></iframe></div>"
        },
        {
            title: "\u0110\u1EC9nh nh\u00EDp v\u00E0 \u0110\u00E1y nh\u00EDp",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/ijtdlEq7PUaXxMCcDSt9sw\" title=\"\u0110i\u0309nh nhi\u0301p va\u0300 \u0110a\u0301y nhi\u0301p\"></iframe></div>"
        },
        {
            title: "M\u1EABu h\u00ECnh Sao h\u00F4m v\u00E0 Sao mai",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/TTbzxLpug0KbiMcJutuaA\" title=\"Ma\u0302\u0303u hi\u0300nh Sao ho\u0302m va\u0300 Sao mai\"></iframe></div>"
        },
        {
            title: "l\u00EDnh tr\u1EAFng 3 qu\u1EA1 \u0111en",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/CHQXaIqCxkyWN11gLl4XA\" title=\"li\u0301nh tra\u0306\u0301ng 3 qua\u0323 \u0111en\"></iframe></div>"
        },
        {
            title: "M\u1EABu h\u00ECnh 3 b\u00EAn trong ng\u01B0\u1EE3c l\u00EAn 3 b\u00EAn trong \u00FAp xu\u1ED1ng",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/GKmuSOgq0ymm3R8ydMW7A\" title=\"Ma\u0302\u0303u hi\u0300nh 3 be\u0302n trong ngu\u031Bo\u031B\u0323c le\u0302n 3 be\u0302n trong u\u0301p xuo\u0302\u0301ng\"></iframe></div>"
        },
        {
            title: "C\u00F4ng th\u1EE9c t\u0103ng v\u00E0 gi\u1EA3m 3",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/3nVxn35RU2x9a1EEijvhA\" title=\"Co\u0302ng thu\u031B\u0301c ta\u0306ng va\u0300 gia\u0309m 3\"></iframe></div>"
        },
    ]);
    var vnChartFormationPatternsList = (0, vue_1.reactive)([
        {
            title: "M\u1EABu h\u00ECnh th\u00E0nh 2 \u0111\u1EC9nh v\u00E0 2 \u0111\u00E1y trong Forex",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/kY8SlUCpEEGt4tizenayMA\" title=\"Ma\u0302\u0303u hi\u0300nh tha\u0300nh 2 \u0111i\u0309nh va\u0300 2 \u0111a\u0301y trong Forex\"></iframe></div>"
        },
        {
            title: "T\u00ECm hi\u1EC3u m\u1EABu h\u00ECnh \u0111\u1EA7u v\u00E0 vai Forex",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/hohcQSjoLUyz5aOvzg6jA\" title=\"Ti\u0300m hie\u0302\u0309u ma\u0302\u0303u hi\u0300nh \u0111a\u0302\u0300u va\u0300 vai Forex\"></iframe></div>"
        },
        {
            title: "T\u00ECm hi\u1EC3u m\u00F4 h\u00ECnh ngh\u1ECBch \u0111\u1EA3o \u0111\u1EA7u v\u00E0 vai Forex",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/6FoSnhkBt06vz4E6cE9fyw\" title=\"Ti\u0300m hie\u0302\u0309u mo\u0302 hi\u0300nh nghi\u0323ch \u0111a\u0309o \u0111a\u0302\u0300u va\u0300 vai Forex\"></iframe></div>"
        },
        {
            title: "T\u00ECm hi\u1EC3u m\u1EABu h\u00ECnh c\u1EDD t\u0103ng Forex",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/T7lYp3ManUmovPWArxUSTA\" title=\"Ti\u0300m hie\u0302\u0309u ma\u0302\u0303u hi\u0300nh co\u031B\u0300 ta\u0306ng Forex\"></iframe></div>"
        },
        {
            title: "T\u00ECm hi\u1EC3u m\u1EABu h\u00ECnh c\u1EDD gi\u1EA3m Forex",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/m63VJ14eLkWU8qNkG08l6g\" title=\"Ti\u0300m hie\u0302\u0309u ma\u0302\u0303u hi\u0300nh co\u031B\u0300 gia\u0309m Forex\"></iframe></div>"
        },
        {
            title: "T\u00ECm hi\u1EC3u m\u1EABu h\u00ECnh c\u1EDD hi\u1EC7u t\u0103ng v\u00E0 gi\u1EA3m trong Forex ",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/v10sRlnbBkyPZDlO9cr5A\" title=\"Ti\u0300m hie\u0302\u0309u ma\u0302\u0303u hi\u0300nh co\u031B\u0300 hie\u0323\u0302u ta\u0306ng va\u0300 gia\u0309m trong Forex\"></iframe></div>"
        },
        {
            title: "T\u00ECm hi\u1EC3u m\u1EABu h\u00ECnh c\u00E1i n\u00EAm h\u01B0\u1EDBng xu\u1ED1ng",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/gBjQAdnvzkCSUdhPg2Drg\" title=\"Ti\u0300m hie\u0302\u0309u ma\u0302\u0303u hi\u0300nh ca\u0301i ne\u0302m hu\u031Bo\u031B\u0301ng xuo\u0302\u0301ng\"></iframe></div>"
        },
        {
            title: "T\u00ECm hi\u1EC3u m\u1EABu h\u00ECnh tam gi\u00E1c t\u0103ng d\u1EA7n v\u00E0 gi\u1EA3m d\u1EA7n trong Forex",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/H4Y8y0mKekKUivFNUeEA\" title=\"Ti\u0300m hie\u0302\u0309u ma\u0302\u0303u hi\u0300nh tam gia\u0301c ta\u0306ng da\u0302\u0300n va\u0300 gia\u0309m da\u0302\u0300n trong Forex\"></iframe></div>"
        },
        {
            title: "T\u00ECm hi\u1EC3u m\u00F4 h\u00ECnh tam gi\u00E1c \u0111\u1ED1i x\u1EE9ng trong Forex",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/lVDOsffwQEC9uo3KiP0Vgw\" title=\"Ti\u0300m hie\u0302\u0309u mo\u0302 hi\u0300nh tam gia\u0301c \u0111o\u0302\u0301i xu\u031B\u0301ng trong Forex\"></iframe></div>"
        },
        {
            title: "Ph\u1EA1m vi H\u1ED9p trong Forex",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/QT8CW2d9NUKtH8AZS0xvSg\" title=\"Pha\u0323m vi Ho\u0323\u0302p trong Forex\"></iframe></div>"
        },
        {
            title: "T\u00ECm hi\u1EC3u m\u1EABu h\u00ECnh C\u1ED1c v\u00E0 Tay c\u1EA7m trong Forex",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/wADLTsIkO39V17l49Nw\" title=\"Ti\u0300m hie\u0302\u0309u ma\u0302\u0303u hi\u0300nh Co\u0302\u0301c va\u0300 Tay ca\u0302\u0300m trong Forex\"></iframe></div>"
        },
        {
            title: "T\u00ECm hi\u1EC3u m\u1EABu h\u00ECnh C\u1ED1c v\u00E0 Tay c\u1EA7m \u0111\u1EA3o ng\u01B0\u1EE3c trong Forex",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/M3p357TcMUmBuA3QXZaiEQ\" title=\"Ti\u0300m hie\u0302\u0309u ma\u0302\u0303u hi\u0300nh Co\u0302\u0301c va\u0300 Tay ca\u0302\u0300m \u0111a\u0309o ngu\u031Bo\u031B\u0323c trong Forex\"></iframe></div>"
        },
        {
            title: "T\u00ECm hi\u1EC3u m\u1EABu h\u00ECnh n\u00EAm h\u01B0\u1EDBng l\u00EAn trong Forex",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/lRb15ens9Eu5bVZCDSCX9Q\" title=\"Ti\u0300m hie\u0302\u0309u ma\u0302\u0303u hi\u0300nh ne\u0302m hu\u031Bo\u031B\u0301ng le\u0302n trong Forex\"></iframe></div>"
        },
    ]);
    var vnForexIndicatorsList = (0, vue_1.reactive)([
        {
            title: "Ch\u1EC9 b\u00E1o ngo\u1EA1i h\u1ED1i RSI",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/RThsiIzkSEKe2ppXjNdDGg\" title=\"Chi\u0309 ba\u0301o ngoa\u0323i ho\u0302\u0301i RSI\"></iframe></div>"
        },
        {
            title: "Ch\u1EC9 b\u00E1o ngo\u1EA1i h\u1ED1i Stochastic Oscillator",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/LrKupcRQbEmlmhZvlpJV4Q\" title=\"Chi\u0309 ba\u0301o ngoa\u0323i ho\u0302\u0301i Stochastic Oscillator\"></iframe></div>"
        },
        {
            title: "Ch\u1EC9 b\u00E1o ngo\u1EA1i h\u1ED1i ATR",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/1wGQQUqiC0O5jUl2WQnkpA\" title=\"Chi\u0309 ba\u0301o ngoa\u0323i ho\u0302\u0301i ATR\"></iframe></div>"
        },
        {
            title: "Ch\u1EC9 b\u00E1o ngo\u1EA1i h\u1ED1i MA \u2013 Ch\u1EC9 b\u00E1o trung b\u00ECnh \u0111\u1ED9ng",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/EtByg0U3U6dAfVFdee5AQ\" title=\"Chi\u0309 ba\u0301o ngoa\u0323i ho\u0302\u0301i MA \u2013 Chi\u0309 ba\u0301o trung bi\u0300nh \u0111o\u0323\u0302ng\"></iframe></div>"
        },
        {
            title: "Ch\u1EC9 b\u00E1o ngo\u1EA1i h\u1ED1i MACD \u2013 Ch\u1EC9 b\u00E1o trung b\u00ECnh \u0111\u1ED9ng h\u1ED9i t\u1EE5 ph\u00E2n k\u1EF3",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/bS0nweenXEtprnZ60gDag\" title=\"Chi\u0309 ba\u0301o ngoa\u0323i ho\u0302\u0301i MACD \u2013 Chi\u0309 ba\u0301o trung bi\u0300nh \u0111o\u0323\u0302ng ho\u0323\u0302i tu\u0323 pha\u0302n ky\u0300\"></iframe></div>"
        },
        {
            title: "Ch\u1EC9 b\u00E1o ngo\u1EA1i h\u1ED1i ADX \u2013 Ch\u1EC9 b\u00E1o \u0111\u1ECBnh h\u01B0\u1EDBng trung b\u00ECnh",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/7CJUSIp8EOjk5hah9CJfA\" title=\"Chi\u0309 ba\u0301o ngoa\u0323i ho\u0302\u0301i ADX \u2013 Chi\u0309 ba\u0301o \u0111i\u0323nh hu\u031Bo\u031B\u0301ng trung bi\u0300nh\"></iframe></div>"
        },
        {
            title: "Ch\u1EC9 b\u00E1o ngo\u1EA1i h\u1ED1i Bollinger Bands",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/s9qX6gjVkCMIsQpGEHKQ\" title=\"Chi\u0309 ba\u0301o ngoa\u0323i ho\u0302\u0301i Bollinger Bands\"></iframe></div>"
        },
        {
            title: "Ch\u1EC9 b\u00E1o ngo\u1EA1i h\u1ED1i Parabolic SAR",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/svy8Z15o10ulVyVZ2OuAOw\" title=\"Chi\u0309 ba\u0301o ngoa\u0323i ho\u0302\u0301i Parabolic SAR\"></iframe></div>"
        },
        {
            title: "Ch\u1EC9 s\u1ED1 ngo\u1EA1i h\u1ED1i Ichimoku Kinko Hyo",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/n50zvtFgAUC0gPkm9LlfrQ\" title=\"Chi\u0309 so\u0302\u0301 ngoa\u0323i ho\u0302\u0301i Ichimoku Kinko Hyo\"></iframe></div>"
        },
        {
            title: "Ch\u1EC9 b\u00E1o ngo\u1EA1i h\u1ED1i Pivot Points \u2013 Ch\u1EC9 b\u00E1o \u0111i\u1EC3m tr\u1EE5c",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/O0jeOn9KIkm5ehA1k9N6Yg\" title=\"Chi\u0309 ba\u0301o ngoa\u0323i ho\u0302\u0301i Pivot Points \u2013 Chi\u0309 ba\u0301o \u0111ie\u0302\u0309m tru\u0323c\"></iframe></div>"
        },
    ]);
    var vnTimingInForexList = (0, vue_1.reactive)([
        {
            title: "X\u00E1c \u0111inh th\u1EDDi \u0111i\u1EC3m v\u00E0o l\u1EC7nh khi giao d\u1ECBch ngo\u1EA1i h\u1ED1i",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/4Gzmtkoe50Yd19IVxwl0Q\" title=\"Xa\u0301c \u0111inh tho\u031B\u0300i \u0111ie\u0302\u0309m va\u0300o le\u0323\u0302nh khi giao di\u0323ch ngoa\u0323i ho\u0302\u0301i\"></iframe></div>"
        },
        {
            title: "X\u00E1c \u0111inh th\u1EDDi \u0111i\u1EC3m tho\u00E1t l\u1EC7nh trong giao d\u1ECBch ngo\u1EA1i h\u1ED1i",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/uzSGBrGDECeCJHHZLmM8w\" title=\"Xa\u0301c \u0111inh tho\u031B\u0300i \u0111ie\u0302\u0309m thoa\u0301t le\u0323\u0302nh trong giao di\u0323ch ngoa\u0323i ho\u0302\u0301i\"></iframe></div>"
        },
    ]);
    var vnMT4List = (0, vue_1.reactive)([
        {
            title: "B\u1EAFt \u0111\u1EA7u v\u1EDBi MT4",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/ya7HqVBhrUGyxitSZQHqw\" title=\"Ba\u0306\u0301t \u0111a\u0302\u0300u vo\u031B\u0301i MT4\"></iframe></div>"
        },
        {
            title: "Theo d\u00F5i th\u1ECB tr\u01B0\u1EDDng- Kh\u00E1i ni\u1EC7m c\u01A1 b\u1EA3n",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/y1oAaVRkjk6YDNNplNEhiw\" title=\"Theo do\u0303i thi\u0323 tru\u031Bo\u031B\u0300ng- Kha\u0301i nie\u0323\u0302m co\u031B ba\u0309n\"></iframe></div>"
        },
        {
            title: "Kh\u00E1i ni\u1EC7m c\u01A1 b\u1EA3n v\u1EC1 c\u1EEDa s\u1ED5 bi\u1EC3u \u0111\u1ED3",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/VN1rU3N0qL4weMdgKfDw\" title=\"Kha\u0301i nie\u0323\u0302m co\u031B ba\u0309n ve\u0302\u0300 cu\u031B\u0309a so\u0302\u0309 bie\u0302\u0309u \u0111o\u0302\u0300\"></iframe></div>"
        },
        {
            title: "Kh\u00E1i ni\u1EC7m c\u01A1 b\u1EA3n v\u1EC1 c\u1EEDa s\u1ED5 Terminal - Ph\u1EA7n 1",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/k5lIImUapUu2kO8DOcZKQ\" title=\"Kha\u0301i nie\u0323\u0302m co\u031B ba\u0309n ve\u0302\u0300 cu\u031B\u0309a so\u0302\u0309 Terminal - Pha\u0302\u0300n 1\"></iframe></div>"
        },
        {
            title: "Kh\u00E1i ni\u1EC7m c\u01A1 b\u1EA3n v\u1EC1 c\u1EEDa s\u1ED5 Terminal - Ph\u1EA7n 2",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/C2M8rJoXbEzaFWDxHh7A\" title=\"Kha\u0301i nie\u0323\u0302m co\u031B ba\u0309n ve\u0302\u0300 cu\u031B\u0309a so\u0302\u0309 Terminal - Pha\u0302\u0300n 2\"></iframe></div>"
        },
        {
            title: "C\u01A1 b\u1EA3n v\u1EC1 C\u1EEDa s\u1ED5 \u0110i\u1EC1u h\u01B0\u1EDBng",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/hKbMh6sr9EFDBX3sI4ZiA\" title=\"Co\u031B ba\u0309n ve\u0302\u0300 Cu\u031B\u0309a so\u0302\u0309 \u0110ie\u0302\u0300u hu\u031Bo\u031B\u0301ng\"></iframe></div>"
        },
        {
            title: "\u0110\u1EB7t h\u00E0ng",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/GU0pYxPpika5NuEdMAfQ\" title=\"\u0110a\u0323\u0306t ha\u0300ng\"></iframe></div>"
        },
        {
            title: "L\u1ECBch s\u1EED t\u00E0i kho\u1EA3n / Giao d\u1ECBch \u0111\u00E3 \u0111\u00F3ng",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/PyQR9YEx0Em4bYrnuNaUA\" title=\"Li\u0323ch su\u031B\u0309 ta\u0300i khoa\u0309n - Giao di\u0323ch \u0111a\u0303 \u0111o\u0301ng\"></iframe></div>"
        },
        {
            title: "Theo D\u00F5i Th\u1ECB Tr\u01B0\u1EDDng Chi Ti\u1EBFt",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/aUbj5skaxE6FXWaZrjmIlg\" title=\"Theo Do\u0303i Thi\u0323 Tru\u031Bo\u031B\u0300ng Chi Tie\u0302\u0301t\"></iframe></div>"
        },
        {
            title: "T\u1EA5t t\u1EA7n t\u1EADt v\u1EC1 bi\u1EC3u \u0111\u1ED3",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/EsPooggjU2q3Fd7iaERQw\" title=\"Ta\u0302\u0301t ta\u0302\u0300n ta\u0323\u0302t ve\u0302\u0300 bie\u0302\u0309u \u0111o\u0302\u0300\"></iframe></div>"
        },
        {
            title: "Thu\u1ED9c t\u00EDnh c\u1EEDa s\u1ED5 bi\u1EC3u \u0111\u1ED3",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/2XtVO6UwT0uyGKnGDm1f5Q\" title=\"Thuo\u0323\u0302c ti\u0301nh cu\u031B\u0309a so\u0302\u0309 bie\u0302\u0309u \u0111o\u0302\u0300\"></iframe></div>"
        },
        {
            title: "C\u00E1c ch\u1EC9 b\u00E1o v\u00E0 t\u1EADp l\u1EC7nh",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/V5u3odWpKUKWZWUcUI7m6Q\" title=\"C\u00E1c ch\u1EC9 b\u00E1o v\u00E0 t\u1EADp l\u1EC7nh\"></iframe></div>"
        },
    ]);
    var vnCryptocurrenciesList = (0, vue_1.reactive)([
        {
            title: "B\u1ED1i c\u1EA3nh \u2013 nh\u1EEFng \u0111\u1ED3ng ti\u1EC1n \u0111i\u1EC7n t\u1EED \u0111\u1EA7u ti\u00EAn (1980-2009)",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/nJziHbTEXrAZQHg1nJw\" title=\"Bo\u0302\u0301i ca\u0309nh \u2013 nhu\u031B\u0303ng \u0111o\u0302\u0300ng tie\u0302\u0300n \u0111ie\u0323\u0302n tu\u031B\u0309 \u0111a\u0302\u0300u tie\u0302n (1980-2009)\"></iframe></div>"
        },
        {
            title: "S\u1EF1 ph\u00E1t tri\u1EC3n c\u1EE7a blockchain v\u00E0 ti\u1EC1n \u0111i\u1EC7n t\u1EED",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/ZNNGC4t01Eugz3tequLg9A\" title=\"Su\u031B\u0323 pha\u0301t trie\u0302\u0309n cu\u0309a blockchain va\u0300 tie\u0302\u0300n \u0111ie\u0323\u0302n tu\u031B\u0309\"></iframe></div>"
        },
        {
            title: "T\u01B0\u01A1ng lai c\u1EE7a ti\u1EC1n t\u1EC7 k\u1EF9 thu\u1EADt s\u1ED1",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/tpq23unSkarBvbXUJQhEQ\" title=\"Tu\u031Bo\u031Bng lai cu\u0309a tie\u0302\u0300n te\u0323\u0302 ky\u0303 thua\u0323\u0302t so\u0302\u0301\"></iframe></div>"
        },
        {
            title: "N\u1EC1n t\u1EA3ng - Kh\u00E1i ni\u1EC7m v\u1EC1 vi\u1EC7c s\u1EDF h\u1EEFu m\u1ED9t lo\u1EA1i ti\u1EC1n k\u1EF9 thu\u1EADt s\u1ED1",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/wrXuCR7LFk62EqoIZjO9w\" title=\"Ne\u0302\u0300n ta\u0309ng - Kha\u0301i nie\u0323\u0302m ve\u0302\u0300 vie\u0323\u0302c so\u031B\u0309 hu\u031B\u0303u mo\u0323\u0302t loa\u0323i tie\u0302\u0300n ky\u0303 thua\u0323\u0302t so\u0302\u0301\"></iframe></div>"
        },
        {
            title: "V\u00ED\" Wallet l\u00E0 g\u00EC v\u00E0 ch\u00FAng ho\u1EA1t \u0111\u1ED9ng nh\u01B0 th\u1EBF n\u00E0o",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/X8zc1gRpBkqmL2Zv08XeuA\" title=\"Vi\u0301- Wallet la\u0300 gi\u0300 va\u0300 chu\u0301ng hoa\u0323t \u0111o\u0323\u0302ng nhu\u031B the\u0302\u0301 na\u0300o\"></iframe></div>"
        },
        {
            title: "Sao l\u01B0u & L\u01B0u tr\u1EEF ngo\u1EA1i tuy\u1EBFn - t\u1EA1i sao n\u00F3 quan tr\u1ECDng, l\u00E0m th\u1EBF n\u00E0o \u0111\u1EC3 l\u00E0m \u0111i\u1EC1u \u0111\u00F3?",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/9p8JFPlM4E2yYuQ1U2v6Mw\" title=\"Sao lu\u031Bu & Lu\u031Bu tru\u031B\u0303 ngoa\u0323i tuye\u0302\u0301n - ta\u0323i sao no\u0301 quan tro\u0323ng, la\u0300m the\u0302\u0301 na\u0300o \u0111e\u0302\u0309 la\u0300m \u0111ie\u0302\u0300u \u0111o\u0301-\"></iframe></div>"
        },
        {
            title: "B\u1EA3o m\u1EADt tr\u1EF1c tuy\u1EBFn: c\u00E1ch b\u1EA3o v\u1EC7 v\u00ED di \u0111\u1ED9ng c\u1EE7a b\u1EA1n m\u1ED9t c\u00E1ch an to\u00E0n",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/gPgwmki2N0eg6igb0kArcg\" title=\"Ba\u0309o ma\u0323\u0302t tru\u031B\u0323c tuye\u0302\u0301n- ca\u0301ch ba\u0309o ve\u0323\u0302 vi\u0301 di \u0111o\u0323\u0302ng cu\u0309a ba\u0323n mo\u0323\u0302t ca\u0301ch an toa\u0300n\"></iframe></div>"
        },
        {
            title: "C\u00E1c lo\u1EA1i ti\u1EC1n \u0111i\u1EC7n t\u1EED",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/G13tId1cEOCuSZApQkA0A\" title=\"Ca\u0301c loa\u0323i tie\u0302\u0300n \u0111ie\u0323\u0302n tu\u031B\u0309\"></iframe></div>"
        },
        {
            title: "Bitcoin l\u00E0 g\u00EC?",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/vdj3CtNSJEmDheR5btmg\" title=\"Bitcoin la\u0300 gi\u0300-\"></iframe></div>"
        },
        {
            title: "L\u1ECBch s\u1EED c\u1EE7a bitcoin",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/UabIyJg47kCRMsDbTEP0Iw\" title=\"Li\u0323ch su\u031B\u0309 cu\u0309a bitcoin\"></iframe></div>"
        },
        {
            title: "C\u00E1ch s\u1EED d\u1EE5ng bitcoin b\u00EAn c\u1EA1nh vi\u1EC7c \u0111\u1EA7u t\u01B0",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/VHMKIagYzkuGzsLX2h2mww\" title=\"Ca\u0301ch su\u031B\u0309 du\u0323ng bitcoin be\u0302n ca\u0323nh vie\u0323\u0302c \u0111a\u0302\u0300u tu\u031B\"></iframe></div>"
        },
        {
            title: "C\u00E1ch \u0111\u1EA7u t\u01B0 v\u00E0o Bitcoin",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/RVO86EIVw0W3wNvT0eLmYg\" title=\"Ca\u0301ch \u0111a\u0302\u0300u tu\u031B va\u0300o Bitcoin\"></iframe></div>"
        },
        {
            title: "R\u1EE7i ro li\u00EAn quan \u0111\u1EBFn giao d\u1ECBch bitcoin l\u00E0 g\u00EC",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/Cx9qLTfi0G0PuFj2NJ66w\" title=\"Nhu\u031B\u0303ng ru\u0309i ro lie\u0302n quan \u0111e\u0302\u0301n vie\u0323\u0302c cha\u0302\u0301p nha\u0323\u0302n bitcoin la\u0300 gi\u0300-\"></iframe></div>"
        },
        {
            title: "C\u00E1ch mua Bitcoin",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/yiglv7rNUyHWvj5NrIrw\" title=\"Ca\u0301ch mua Bitcoin\"></iframe></div>"
        },
        {
            title: "T\u1EA1i sao ph\u1EA3i ch\u1EA5p nh\u1EADn bitcoin?",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/ehvccb1Wk6KrnhLDfE6Jw\" title=\"Ta\u0323i sao pha\u0309i cha\u0302\u0301p nha\u0323\u0302n bitcoin-\"></iframe></div>"
        },
        {
            title: "Nh\u1EEFng r\u1EE7i ro li\u00EAn quan \u0111\u1EBFn vi\u1EC7c ch\u1EA5p nh\u1EADn bitcoin l\u00E0 g\u00EC?",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/TBYyAXFN6kSs0DyOc0S9mg\" title=\"Ru\u0309i ro lie\u0302n quan \u0111e\u0302\u0301n giao di\u0323ch bitcoin la\u0300 gi\u0300\"></iframe></div>"
        },
        {
            title: "C\u00E1ch ch\u1EA5p nh\u1EADn Bitcoin",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/NV3DN8cf8Ua9bMgXvOtIsA\" title=\"Ca\u0301ch cha\u0302\u0301p nha\u0323\u0302n Bitcoin\"></iframe></div>"
        },
        {
            title: "Tri\u1EC3n v\u1ECDng v\u1EC1 Thu\u1EBF v\u00E0 Ph\u00E1p l\u00FD",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/61XfgPAkwUC0rINEKybPA\" title=\"Trie\u0302\u0309n vo\u0323ng ve\u0302\u0300 Thue\u0302\u0301 va\u0300 Pha\u0301p ly\u0301\"></iframe></div>"
        },
    ]);
    var vnIntroductionToTheStockMarketList = (0, vue_1.reactive)([
        {
            title: "Gi\u1EDBi thi\u1EC7u th\u1ECB tr\u01B0\u1EDDng ch\u1EE9ng kho\u00E1n",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/UQepfIvFJEG2RjTGehbfFw\" title=\"Gio\u031B\u0301i thie\u0323\u0302u thi\u0323 tru\u031Bo\u031B\u0300ng chu\u031B\u0301ng khoa\u0301n\"></iframe></div>"
        },
        {
            title: "Bi\u1EC3u \u0111\u1ED3 ch\u1EE9ng kho\u00E1n c\u00F3 th\u1EC3 d\u1EF1 \u0111o\u00E1n t\u01B0\u01A1ng lai kh\u00F4ng? C\u00E1c h\u1EC7 th\u1ED1ng giao d\u1ECBch",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/hT2BHMNBpkeBJWmDXlkPjA\" title=\"Bie\u0302\u0309u \u0111o\u0302\u0300 chu\u031B\u0301ng khoa\u0301n co\u0301 the\u0302\u0309 du\u031B\u0323 \u0111oa\u0301n tu\u031Bo\u031Bng lai kho\u0302ng- Ca\u0301c he\u0323\u0302 tho\u0302\u0301ng giao di\u0323ch\"></iframe></div>"
        },
        {
            title: "Chi\u1EBFn l\u01B0\u1EE3c giao d\u1ECBch v\u00F9ng h\u1ED7 tr\u1EE3 v\u00E0 kh\u00E1ng c\u1EF1",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/NKeZCmbUjEqHOaZ6CkPjyA\" title=\"Chie\u0302\u0301n lu\u031Bo\u031B\u0323c giao di\u0323ch vu\u0300ng ho\u0302\u0303 tro\u031B\u0323 va\u0300 kha\u0301ng cu\u031B\u0323\"></iframe></div>"
        },
        {
            title: "L\u00E0m th\u1EBF n\u00E0o \u0111\u1EC3 x\u00E1c \u0111\u1ECBnh h\u01B0\u1EDBng th\u1ECB tr\u01B0\u1EDDng?",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/0AP636d5G0KtQmBog0yRyg\" title=\"La\u0300m the\u0302\u0301 na\u0300o \u0111e\u0302\u0309 xa\u0301c \u0111i\u0323nh hu\u031Bo\u031B\u0301ng thi\u0323 tru\u031Bo\u031B\u0300ng-\"></iframe></div>"
        },
        {
            title: "X\u00E1c \u0111\u1ECBnh \u0111\u1ECBnh h\u01B0\u1EDBng th\u1ECB tr\u01B0\u1EDDng nh\u01B0 th\u1EBF n\u00E0o? Ph\u1EA7n 2",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/HDXPDjOwwESjUNczaG4oKA\" title=\"Xa\u0301c \u0111i\u0323nh \u0111i\u0323nh hu\u031Bo\u031B\u0301ng thi\u0323 tru\u031Bo\u031B\u0300ng nhu\u031B the\u0302\u0301 na\u0300o- Pha\u0302\u0300n 2\"></iframe></div>"
        },
        {
            title: "M\u1EABu bi\u1EC3u \u0111\u1ED3: Gi\u1EDBi thi\u1EC7u",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/VRYKLAJakaifq4wFr0ydQ\" title=\"Ma\u0302\u0303u bie\u0302\u0309u \u0111o\u0302\u0300- Gio\u031B\u0301i thie\u0323\u0302u\"></iframe></div>"
        },
        {
            title: "M\u1EABu bi\u1EC3u \u0111\u1ED3: Tam gi\u00E1c \u0111\u1ED1i x\u1EE9ng",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/elNCIeCgkm6TQE8S05PYw\" title=\"Ma\u0302\u0303u bie\u0302\u0309u \u0111o\u0302\u0300- Tam gia\u0301c \u0111o\u0302\u0301i xu\u031B\u0301ng\"></iframe></div>"
        },
        {
            title: "M\u1EABu bi\u1EC3u \u0111\u1ED3: chi\u1EBFn l\u01B0\u1EE3c kinh doanh m\u00F4 h\u00ECnh tam gi\u00E1c \u0111\u1ED1i x\u1EE9ng",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/wTurRUP5RkaLGSWIMIFQOA\" title=\"Ma\u0302\u0303u bie\u0302\u0309u \u0111o\u0302\u0300- chie\u0302\u0301n lu\u031Bo\u031B\u0323c kinh doanh mo\u0302 hi\u0300nh tam gia\u0301c \u0111o\u0302\u0301i xu\u031B\u0301ng\"></iframe></div>"
        },
        {
            title: "M\u1EABu bi\u1EC3u \u0111\u1ED3: C\u1EDD v\u00E0 c\u1EDD hi\u1EC7u",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/1jcOSp5l6EmyL2rGYPJWNQ\" title=\"Ma\u0302\u0303u bie\u0302\u0309u \u0111o\u0302\u0300- Co\u031B\u0300 va\u0300 co\u031B\u0300 hie\u0323\u0302u\"></iframe></div>"
        },
        {
            title: "M\u1EABu bi\u1EC3u \u0111\u1ED3: chi\u1EBFn l\u01B0\u1EE3c kinh doanh c\u1EDD v\u00E0 c\u1EDD hi\u1EC7u",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/ghbrjRGk6EuCW36Sh0H4zQ\" title=\"Ma\u0302\u0303u bie\u0302\u0309u \u0111o\u0302\u0300- chie\u0302\u0301n lu\u031Bo\u031B\u0323c kinh doanh co\u031B\u0300 va\u0300 co\u031B\u0300 hie\u0323\u0302u\"></iframe></div>"
        },
        {
            title: "M\u1EABu bi\u1EC3u \u0111\u1ED3: Tam gi\u00E1c t\u0103ng",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/WOBVnwl5hUW1gJHiBzau7Q\" title=\"Ma\u0302\u0303u bie\u0302\u0309u \u0111o\u0302\u0300- Tam gia\u0301c ta\u0306ng\"></iframe></div>"
        },
        {
            title: "M\u1EABu bi\u1EC3u \u0111\u1ED3: M\u00F4 h\u00ECnh tam gi\u00E1c t\u0103ng",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/tqXvYRD9dkCV4Q4FsskvlA\" title=\"Ma\u0302\u0303u bie\u0302\u0309u \u0111o\u0302\u0300- Mo\u0302 hi\u0300nh tam gia\u0301c ta\u0306ng\"></iframe></div>"
        },
        {
            title: "Kh\u1ED1i l\u01B0\u1EE3ng v\u00E0 Xu h\u01B0\u1EDBng",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/dfR5c0nSyEaJp4cQVTOoXg\" title=\"Kho\u0302\u0301i lu\u031Bo\u031B\u0323ng va\u0300 Xu hu\u031Bo\u031B\u0301ng\"></iframe></div>"
        },
    ]);
    var vnAdvancedStockMarketTradingLevel1List = (0, vue_1.reactive)([
        {
            title: "C\u00E1c ch\u1EC9 s\u1ED1 th\u1ECB tr\u01B0\u1EDDng",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/yaQlu1LPeUO1TWsTS9Rfaw\" title=\"Ca\u0301c chi\u0309 so\u0302\u0301 thi\u0323 tru\u031Bo\u031B\u0300ng\"></iframe></div>"
        },
        {
            title: "Ph\u01B0\u01A1ng ph\u00E1p giao d\u1ECBch",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/dVJstH5r0uxC7lawscXzA\" title=\"Phu\u031Bo\u031Bng pha\u0301p giao di\u0323ch\"></iframe></div>"
        },
        {
            title: "S\u1ED1 tr\u00F2n",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/SBjr4HedrEaz1bdFLPRgg\" title=\"So\u0302\u0301 tro\u0300n\"></iframe></div>"
        },
        {
            title: "Thi\u1EBFt l\u1EADp giao d\u1ECBch",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/v8c0rwnVCk61Ktcj98eerQ\" title=\"Thie\u0302\u0301t la\u0323\u0302p giao di\u0323ch\"></iframe></div>"
        },
        {
            title: "Gi\u1EDBi thi\u1EC7u v\u1EC1 ph\u00E2n t\u00EDch k\u1EF9 thu\u1EADt",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/xpDf6QadrkWRezCtIRnjA\" title=\"Gio\u031B\u0301i thie\u0323\u0302u ve\u0302\u0300 pha\u0302n ti\u0301ch ky\u0303 thua\u0323\u0302t\"></iframe></div>"
        },
        {
            title: "Ph\u00E2n t\u00EDch k\u1EF9 thu\u1EADt th\u1EF1c t\u1EBF",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/Sg1f45ZsdUyqLFXNJ61Fg\" title=\"Pha\u0302n ti\u0301ch ky\u0303 thua\u0323\u0302t thu\u031B\u0323c te\u0302\u0301\"></iframe></div>"
        },
        {
            title: "T\u00E2m l\u00FD giao d\u1ECBch",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/DrChTMWLkkCaeh09R9LV2A\" title=\"Ta\u0302m ly\u0301 giao di\u0323ch\"></iframe></div>"
        },
        {
            title: "Qu\u1EA3n l\u00FD r\u1EE7i ro v\u00E0 v\u1ECB tr\u00ED",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/3OKBexAAEU24hg6QVS9giA\" title=\"Qua\u0309n ly\u0301 ru\u0309i ro va\u0300 vi\u0323 tri\u0301\"></iframe></div>"
        },
        {
            title: "Ch\u1ECDn c\u1ED5 phi\u1EBFu & ph\u00E2n t\u00EDch d\u1EEF li\u1EC7u ",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/D8dxb75E02RUceVupLOaw\" title=\"Cho\u0323n co\u0302\u0309 phie\u0302\u0301u & pha\u0302n ti\u0301ch du\u031B\u0303 lie\u0323\u0302u\"></iframe></div>"
        },
        {
            title: "Kinh doanh ch\u00EAnh l\u1EC7ch gi\u00E1",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/RzyO4iUMXkmQxsi5muQQ\" title=\"Kinh doanh che\u0302nh le\u0323\u0302ch gia\u0301\"></iframe></div>"
        },
        {
            title: "Chu\u1EA9n b\u1ECB & Giao d\u1ECBch",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/pI6AwdjtUCBWUicwTPvXw\" title=\"Chua\u0302\u0309n bi\u0323 & Giao di\u0323ch\"></iframe></div>"
        },
    ]);
    var vnAdvancedStockMarketTradingLevel2List = (0, vue_1.reactive)([
        {
            title: "Giao d\u1ECBch m\u0169 nh\u1ECF",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/uTUvcgkYUKg1xAtZSYo7A\" title=\"Giao di\u0323ch mu\u0303 nho\u0309\"></iframe></div>"
        },
        {
            title: "X\u00E1c \u0111\u1ECBnh c\u00E1c chi\u1EBFn thu\u1EADt th\u1EC3 ch\u1EBF v\u00E0 \u0111\u1ED1i ph\u00F3 v\u1EDBi ch\u00FAng",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/J5Gt1B7w4U6oFAoiJlVVw\" title=\"Xa\u0301c \u0111i\u0323nh ca\u0301c chie\u0302\u0301n thua\u0323\u0302t the\u0302\u0309 che\u0302\u0301 va\u0300 \u0111o\u0302\u0301i pho\u0301 vo\u031B\u0301i chu\u0301ng\"></iframe></div>"
        },
        {
            title: "S\u1EED d\u1EE5ng ph\u00EDm n\u00F3ng",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/RXHyEjIkNkmIdTE2D9Lwgg\" title=\"Su\u031B\u0309 du\u0323ng phi\u0301m no\u0301ng\"></iframe></div>"
        },
        {
            title: "S\u1EED d\u1EE5ng n\u00E2ng cao th\u1EDDi gian v\u00E0 b\u00E1n h\u00E0ng",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/Hbv0g788AEuupxA7JFXgGg\" title=\"Su\u031B\u0309 du\u0323ng na\u0302ng cao tho\u031B\u0300i gian va\u0300 ba\u0301n ha\u0300ng\"></iframe></div>"
        },
        {
            title: "Qu\u1EA3n l\u00FD danh s\u00E1ch theo d\u00F5i",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/6B6z1WAQMEyva9anj7Yefg\" title=\"Qua\u0309n ly\u0301 danh sa\u0301ch theo do\u0303i\"></iframe></div>"
        },
        {
            title: "Ngh\u1ECBch l\u00FD s\u1ED1 l\u01B0\u1EE3ng c\u1ED1 \u0111\u1ECBnh",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/DGoFcPdJEOSZVsZLV7Pw\" title=\"Nghi\u0323ch ly\u0301 so\u0302\u0301 lu\u031Bo\u031B\u0323ng co\u0302\u0301 \u0111i\u0323nh\"></iframe></div>"
        },
        {
            title: "X\u00E1c \u0111\u1ECBnh b\u1EABy th\u01B0\u01A1ng m\u1EA1i",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/anrwG9Jvo06E6VwV8wgK7g\" title=\"Xa\u0301c \u0111i\u0323nh ba\u0302\u0303y thu\u031Bo\u031Bng ma\u0323i\"></iframe></div>"
        },
        {
            title: "Ph\u01B0\u01A1ng ph\u00E1p c\u1EE7a 20:20 20 - l\u00E0m th\u1EBF n\u00E0o \u0111\u1EC3 c\u00E1c chuy\u00EAn gia \u0111\u1ECDc bi\u1EC3u \u0111\u1ED3?",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/GOYmx32Yl02fWRNN2QQWCQ\" title=\"Phu\u031Bo\u031Bng pha\u0301p cu\u0309a 20-20 20 - la\u0300m the\u0302\u0301 na\u0300o \u0111e\u0302\u0309 ca\u0301c chuye\u0302n gia \u0111o\u0323c bie\u0302\u0309u \u0111o\u0302\u0300-\"></iframe></div>"
        },
        {
            title: " C\u00E1ch giao d\u1ECBch b\u1EB1ng c\u00E1ch s\u1EED d\u1EE5ng c\u00E1c m\u1EABu Th\u1EA5t b\u1EA1i",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/bayni4O5kkaIFMwES8AM6A\" title=\" Ca\u0301ch giao di\u0323ch ba\u0306\u0300ng ca\u0301ch su\u031B\u0309 du\u0323ng ca\u0301c ma\u0302\u0303u Tha\u0302\u0301t ba\u0323i\"></iframe></div>"
        },
        {
            title: " S\u1EED d\u1EE5ng n\u1EBFn NRB v\u00E0 WRB",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/FVpXBPOk00GcDcJGvO7sWA\" title=\" Su\u031B\u0309 du\u0323ng ne\u0302\u0301n NRB va\u0300 WRB\"></iframe></div>"
        },
        {
            title: "Giao d\u1ECBch IPO ng\u00E0y giao d\u1ECBch v\u00E0 giao d\u1ECBch swing",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/IIX4Bz5xUE6hLQREYl2hmQ\" title=\"Giao di\u0323ch IPO nga\u0300y giao di\u0323ch va\u0300 giao di\u0323ch swing\"></iframe></div>"
        },
    ]);
    var vnTopTraderList = (0, vue_1.reactive)([
        {
            title: "Ph\u00E2n t\u00EDch k\u1EF9 thu\u1EADt v\u00E0 Giao d\u1ECBch ti\u00EAn ti\u1EBFn",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/upd6XaLl0ajnbhfb3cIBw\" title=\"Pha\u0302n ti\u0301ch ky\u0303 thua\u0323\u0302t va\u0300 Giao di\u0323ch tie\u0302n tie\u0302\u0301n\"></iframe></div>"
        },
        {
            title: "L\u1EC7nh Trailing Stop v\u00E0 Chi\u1EBFn l\u01B0\u1EE3c kinh doanh c\u1ED5 phi\u1EBFu ti\u00EAn ti\u1EBFn",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/WBxEa4TwEeeGAvmMouA\" title=\"Le\u0323\u0302nh Trailing Stop va\u0300 Chie\u0302\u0301n lu\u031Bo\u031B\u0323c kinh doanh co\u0302\u0309 phie\u0302\u0301u tie\u0302n tie\u0302\u0301n\"></iframe></div>"
        },
        {
            title: "\u0110i\u1EC3m xoay trong kinh doanh ch\u1EE9ng kho\u00E1n",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/abVO4kPyo0OvXTwCVf33w\" title=\"\u0110ie\u0302\u0309m xoay trong kinh doanh chu\u031B\u0301ng khoa\u0301n\"></iframe></div>"
        },
        {
            title: "Kinh doanh theo L\u00FD thuy\u1EBFt Tr\u00F2 ch\u01A1i",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/qOqc50tuE2VWilb0Irqew\" title=\"Kinh doanh theo Ly\u0301 thuye\u0302\u0301t Tro\u0300 cho\u031Bi\"></iframe></div>"
        },
        {
            title: "Chi\u1EBFn l\u01B0\u1EE3c VWAP",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/i8gKuzHzkkWiUTkVFM14Qw\" title=\"Chie\u0302\u0301n lu\u031Bo\u031B\u0323c VWAP\"></iframe></div>"
        },
        {
            title: "Qu\u1EA3n l\u00FD giao d\u1ECBch",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/ItXdqS5ElEK1KNC8PA2GuQ\" title=\"Qua\u0309n ly\u0301 giao di\u0323ch\"></iframe></div>"
        },
    ]);
    var vnAdvancedTradingToolsAndTechniquesList = (0, vue_1.reactive)([
        {
            title: "Gi\u1EDBi thi\u1EC7u v\u1EC1 MT5",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/fwI4XWBGl0KQ4FhHmfb7A\" title=\"Gio\u031B\u0301i thie\u0323\u0302u ve\u0302\u0300 MT5\"></iframe></div>"
        },
        {
            title: "C\u01A1 b\u1EA3n v\u1EC1 th\u1ECB tr\u01B0\u1EDDng ngo\u1EA1i h\u1ED1i v\u00E0 v\u00ED d\u1EE5",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/BglRQsj5l0eishIywc6JQ\" title=\"Co\u031B ba\u0309n ve\u0302\u0300 thi\u0323 tru\u031Bo\u031B\u0300ng ngoa\u0323i ho\u0302\u0301i va\u0300 vi\u0301 du\u0323\"></iframe></div>"
        },
        {
            title: "Th\u1ECB tr\u01B0\u1EDDng h\u00E0ng h\u00F3a v\u00E0 c\u00E1c v\u00ED d\u1EE5",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/X8a9mKmp1kG8pcrRqkMG1Q\" title=\"Thi\u0323 tru\u031Bo\u031B\u0300ng ha\u0300ng ho\u0301a va\u0300 ca\u0301c vi\u0301 du\u0323\"></iframe></div>"
        },
        {
            title: "C\u00E1c ch\u1EC9 s\u1ED1 giao d\u1ECBch to\u00E0n c\u1EA7u v\u00E0 c\u00E1c v\u00ED d\u1EE5",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/xV8IQufrkCuYRxT7Lpmog\" title=\"Ca\u0301c chi\u0309 so\u0302\u0301 giao di\u0323ch toa\u0300n ca\u0302\u0300u va\u0300 ca\u0301c vi\u0301 du\u0323\"></iframe></div>"
        },
        {
            title: "Tin t\u1EE9c th\u1ECB tr\u01B0\u1EDDng Nguy\u00EAn t\u1EAFc v\u00E0 v\u00ED d\u1EE5 k\u1EF9 thu\u1EADt giao d\u1ECBch",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/FvZWFvdxtE68LPKvMgbuLw\" title=\"Tin tu\u031B\u0301c thi\u0323 tru\u031Bo\u031B\u0300ng Nguye\u0302n ta\u0306\u0301c va\u0300 vi\u0301 du\u0323 ky\u0303 thua\u0323\u0302t giao di\u0323ch\"></iframe></div>"
        },
        {
            title: "Giao d\u1ECBch xu h\u01B0\u1EDBng",
            intro: "",
            content: "<div style=\"position:relative;width:100%;overflow:hidden;padding-top:56.25%\"><iframe style=\"position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none\" allow=\"autoplay; fullscreen\" allowfullscreen src=\"https://videos.dyntube.com/iframes/74xEXzJIEG1i89Zs5ZQ\" title=\"Giao di\u0323ch xu hu\u031Bo\u031B\u0301ng\"></iframe></div>"
        },
    ]);
    var enEducationAcademyList = (0, vue_1.reactive)([
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
                    intro: "Fundamental or quantitative analysis involves looking at revenue, expenses, assets, liabilities in order to gain insight on a company's future performance. Market direction is actually referred to in the technical world, as trends. Trends are made of swing highs and swing lows, or waves. Welcome to the stock market.",
                    list: enIntroductionToTheStockMarketList
                },
                {
                    title: 'Advanced Stock Market Trading - Level 1',
                    intro: 'This chapter covers the core tools and methods used by professional traders. You’ll learn how to read market indicators, structure and execute trades, apply practical technical analysis, and manage risk effectively. The lessons also focus on trading psychology, intraday strategies, arbitrage concepts, and market preparation—providing a complete framework for disciplined, consistent trading.',
                    list: enAdvancedStockMarketTradingLevel1List
                },
                {
                    title: 'Advanced Stock Market Trading - Level 2',
                    intro: "Trading securities can be as simple as pressing the buy or sell button on an electronic trading account.The time and sales are the most detailed display of a market's trading information. The WRB Analysis is a method that involves the combination of analyzing changes in volatility and supply/demand.",
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
    ]);
    var arEducationAcademyList = (0, vue_1.reactive)([
        {
            title: "BEGINNER",
            intro: "",
            list: [
                {
                    title: "\u200F\u062A\u0639\u0644\u064A\u0645 \u0623\u0633\u0627\u0633\u064A\u0627\u062A \u0627\u0644\u0641\u0648\u0631\u0643\u0633\u200F",
                    intro: "",
                    list: arBasicForexEducationList
                },
                {
                    title: "\u0641\u064A\u0628\u0648\u0646\u0627\u062A\u0634\u064A",
                    intro: "",
                    list: arFibonacciList
                },
                {
                    title: "\u200F\u0625\u0634\u0627\u0631\u0627\u062A \u0634\u0645\u0648\u0639 \u0627\u0644\u0641\u0648\u0631\u0643\u0633",
                    intro: "",
                    list: arUnderstandingCandlesticksList
                },
                {
                    title: "\u200F\u0627\u0646\u0645\u0627\u0637 \u062A\u0643\u0648\u064A\u0646 \u0627\u0644\u0631\u0633\u0648\u0645 \u0627\u0644\u0628\u064A\u0627\u0646\u064A\u0629 \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633",
                    intro: "",
                    list: arChartFormationPatternsList
                },
            ]
        },
        {
            title: "INTERMEDIATE",
            intro: "",
            list: [
                {
                    title: "\u0645\u0648\u0634\u0631\u0627\u062A \u0627\u0644\u0641\u0648\u0631\u0643\u0633",
                    intro: "",
                    list: arForexIndicatorsList
                },
                {
                    title: "\u0627\u0644\u062A\u0648\u0642\u064A\u062A \u0641\u064A \u0627\u0644\u0641\u0648\u0631\u0643\u0633",
                    intro: "",
                    list: arTimingInForexList
                },
                {
                    title: "MT4",
                    intro: "",
                    list: arMT4List
                },
                {
                    title: "\u0627\u0644\u0639\u0645\u0644\u0627\u062A \u0627\u0644\u0645\u0634\u0641\u0631\u0629",
                    intro: "",
                    list: arCryptocurrenciesList
                },
            ]
        },
        {
            title: "ADVANCED",
            intro: "",
            list: [
                {
                    title: "\u0645\u0642\u062F\u0645\u0629 \u0644\u0633\u0648\u0642 \u0627\u0644\u0623\u0648\u0631\u0627\u0642 \u0627\u0644\u0645\u0627\u0644\u064A\u0629.",
                    intro: "",
                    list: arIntroductionToTheStockMarketList
                },
                {
                    title: "\u062A\u062F\u0627\u0648\u0644 \u0633\u0648\u0642 \u0627\u0644\u0623\u0633\u0647\u0645 \u0627\u0644\u0645\u062A\u0642\u062F\u0645 - \u0627\u0644\u0645\u0633\u062A\u0648\u0649\u00A01",
                    intro: "",
                    list: arAdvancedStockMarketTradingLevel1List
                },
                {
                    title: "\u062A\u062F\u0627\u0648\u0644 \u0633\u0648\u0642 \u0627\u0644\u0623\u0633\u0647\u0645 \u0627\u0644\u0645\u062A\u0642\u062F\u0645 - \u0627\u0644\u0645\u0633\u062A\u0648\u0649\u00A02",
                    intro: "",
                    list: arAdvancedStockMarketTradingLevel2List
                },
                {
                    title: "\u200F\u0627\u0644\u0645\u062A\u062F\u0627\u0648\u0644 \u0627\u0644\u0623\u0641\u0636\u0644",
                    intro: "",
                    list: arTopTraderList
                },
                {
                    title: "\u200F\u0623\u062F\u0648\u0627\u062A \u0648 \u062A\u0643\u062A\u064A\u0643\u0627\u062A \u0627\u0644\u062A\u062F\u0627\u0648\u0644 \u0627\u0644\u0645\u062A\u0642\u062F\u0645\u0629",
                    intro: "",
                    list: arAdvancedTradingToolsAndTechniquesList
                },
            ]
        },
    ]);
    var cnEducationAcademyList = (0, vue_1.reactive)([
        {
            title: "BEGINNER",
            intro: "",
            list: [
                {
                    title: "\u5916\u6C47\u57FA\u7840\u77E5\u8BC6",
                    intro: "",
                    list: cnBasicForexEducationList
                },
                {
                    title: "\u6590\u6CE2\u90A3\u5951",
                    intro: "",
                    list: cnFibonacciList
                },
                {
                    title: "\u4E86\u89E3K\u7EBF",
                    intro: "",
                    list: cnUnderstandingCandlesticksList
                },
                {
                    title: "\u56FE\u8868\u5F62\u6210\u6A21\u5F0F",
                    intro: "",
                    list: cnChartFormationPatternsList
                },
            ]
        },
        {
            title: "INTERMEDIATE",
            intro: "",
            list: [
                {
                    title: "\u5916\u6C47\u6307\u6807",
                    intro: "",
                    list: cnForexIndicatorsList
                },
                {
                    title: "\u5916\u6C47\u4EA4\u6613\u4E2D\u7684\u65F6\u673A",
                    intro: "",
                    list: cnTimingInForexList
                },
                {
                    title: "MT4",
                    intro: "",
                    list: cnMT4List
                },
                {
                    title: "Cryptocurrencies",
                    intro: "",
                    list: cnCryptocurrenciesList
                },
            ]
        },
        {
            title: "ADVANCED",
            intro: "",
            list: [
                {
                    title: "\u80A1\u7968\u5E02\u573A\u7B80\u4ECB",
                    intro: "",
                    list: cnIntroductionToTheStockMarketList
                },
                {
                    title: "\u9AD8\u7EA7\u80A1\u7968\u5E02\u573A\u4EA4\u6613 - 1 \u7EA7",
                    intro: "",
                    list: cnAdvancedStockMarketTradingLevel1List
                },
                {
                    title: "\u9AD8\u7EA7\u80A1\u7968\u5E02\u573A\u4EA4\u6613 - \u7B2C 2 \u7EA7",
                    intro: "",
                    list: cnAdvancedStockMarketTradingLevel2List
                },
                {
                    title: "\u9876\u7EA7\u4EA4\u6613\u5458",
                    intro: "",
                    list: cnTopTraderList
                },
                {
                    title: "\u9AD8\u7EA7\u4EA4\u6613\u5DE5\u5177\u548C\u6280\u672F",
                    intro: "",
                    list: cnAdvancedTradingToolsAndTechniquesList
                },
            ]
        },
    ]);
    var vnEducationAcademyList = (0, vue_1.reactive)([
        {
            title: "BEGINNER",
            intro: "",
            list: [
                {
                    title: "Gi\u00E1o d\u1EE5c ngo\u1EA1i h\u1ED1i c\u01A1 b\u1EA3n",
                    intro: "",
                    list: vnBasicForexEducationList
                },
                {
                    title: "Fibonacci",
                    intro: "",
                    list: vnFibonacciList
                },
                {
                    title: "Hi\u1EC3u ch\u00E2n n\u1EBFn",
                    intro: "",
                    list: vnUnderstandingCandlesticksList
                },
                {
                    title: "M\u00F4 h\u00ECnh h\u00ECnh th\u00E0nh bi\u1EC3u \u0111\u1ED3",
                    intro: "",
                    list: vnChartFormationPatternsList
                },
            ]
        },
        {
            title: "INTERMEDIATE",
            intro: "",
            list: [
                {
                    title: "C\u00E1c ch\u1EC9 b\u00E1o ngo\u1EA1i h\u1ED1i",
                    intro: "",
                    list: vnForexIndicatorsList
                },
                {
                    title: "Th\u1EDDi \u0111i\u1EC3m trong giao d\u1ECBch ngo\u1EA1i h\u1ED1i",
                    intro: "",
                    list: vnTimingInForexList
                },
                {
                    title: "MT4",
                    intro: "",
                    list: vnMT4List
                },
                {
                    title: "Ti\u1EC1n \u0111i\u1EC7n t\u1EED",
                    intro: "",
                    list: vnCryptocurrenciesList
                },
            ]
        },
        {
            title: "ADVANCED",
            intro: "",
            list: [
                {
                    title: "Gi\u1EDBi thi\u1EC7u th\u1ECB tr\u01B0\u1EDDng ch\u1EE9ng kho\u00E1n",
                    intro: "",
                    list: vnIntroductionToTheStockMarketList
                },
                {
                    title: "Giao d\u1ECBch th\u1ECB tr\u01B0\u1EDDng ch\u1EE9ng kho\u00E1n n\u00E2ng cao - C\u1EA5p \u0111\u1ED9 1",
                    intro: "",
                    list: vnAdvancedStockMarketTradingLevel1List
                },
                {
                    title: "Giao d\u1ECBch tr\u00EAn th\u1ECB tr\u01B0\u1EDDng ch\u1EE9ng kho\u00E1n n\u00E2ng cao - C\u1EA5p \u0111\u1ED9 2",
                    intro: "",
                    list: vnAdvancedStockMarketTradingLevel2List
                },
                {
                    title: "Nh\u00E0 giao d\u1ECBch h\u00E0ng \u0111\u1EA7u",
                    intro: "",
                    list: vnTopTraderList
                },
                {
                    title: "C\u00F4ng c\u1EE5 v\u00E0 k\u1EF9 thu\u1EADt giao d\u1ECBch n\u00E2ng cao",
                    intro: "",
                    list: vnAdvancedTradingToolsAndTechniquesList
                },
            ]
        },
    ]);
    var educationAcademy = (0, vue_1.reactive)({
        en: enEducationAcademyList,
        ar: arEducationAcademyList,
        cn: cnEducationAcademyList,
        vn: vnEducationAcademyList
    });
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
    return { accountDataList: accountDataList, educationAcademy: educationAcademy };
});
