import { ref } from 'vue'
import { defineStore } from 'pinia'

import type { MenuItemType } from '@/types/index'
import type { SystemSettingType } from '@/types/index'
import { systemSettingSelect } from '@/apis/index'
import { generateUUID } from '@/utils/tools'


export const useAppStore = defineStore('app', () => {

  const showNotificationBar = ref<boolean>(true)

  const uuid = ref<string | null>('')

  const systemSetting = ref<SystemSettingType>({
    id: "",
    timezone: "0"
  })

  const menuList = ref<MenuItemType[]>([
    {
      name: "trading",
      subTitle: "",
      path: "",
      icon: "",
      childrenShow: false,
      children: [
        {
          name: "platforms",
          subTitle: "platformsViewSubTitle",
          path: "tradingPlatforms",
          icon: "Platform",
        },
        {
          name: "accounts",
          subTitle: "accountViewSubTitle",
          path: "tradingAccount",
          icon: "User",
        },
      ]
    },
    {
      name: "markets",
      subTitle: "",
      path: "",
      icon: "",
      childrenShow: false,
      children: [
        {
          name: "forex",
          subTitle: "forexViewSubTitle",
          path: "marketsForex",
          icon: "MagicStick",
        },
        {
          name: "indices",
          subTitle: "indicesViewSubTitle",
          path: "marketsIndices",
          icon: "Histogram",
        },
        {
          name: "stocks",
          subTitle: "stocksViewSubTitle",
          path: "marketsStocks",
          icon: "Coin",
        },
        {
          name: "energy",
          subTitle: "energyViewSubTitle",
          path: "marketsEnergy",
          icon: "Lightning",
        },
        {
          name: "metals",
          subTitle: "metalsViewSubTitle",
          path: "marketsMetals",
          icon: "Odometer",
        },
        {
          name: "crypto",
          subTitle: "cryptoViewSubTitle",
          path: "marketsCrypto",
          icon: "Money",
        },
      ]
    },
    {
      name: "tools",
      subTitle: "",
      path: "",
      icon: "",
      childrenShow: false,
      children: [
        {
          name: "marketNews",
          subTitle: "marketNewsViewSubTitle",
          path: "toolsMarketNews",
          icon: "CollectionTag",
        },
        {
          name: "economicCalendar",
          subTitle: "economicCalendarViewSubTitle",
          path: "toolsEconomicCalendar",
          icon: "Calendar",
        },
        {
          name: "marketAnalyst",
          subTitle: "marketAnalystViewSubTitle",
          // path: "toolsMarketAnalyst",
          path: "",
          icon: "DataAnalysis",
        },
        {
          name: "pamm",
          subTitle: "pammViewSubTitle",
          // path: "toolsPAMM",
          path: "",
          icon: "Notification",
        },
        {
          name: "tradingSignals",
          subTitle: "tradingSignalsViewSubTitle",
          // path: "toolsTradingSignals",
          path: "",
          icon: "WindPower",
        },
        {
          name: "socialTrading",
          subTitle: "socialTradingViewSubTitle",
          // path: "toolsSocialTrading",
          path: "",
          icon: "PieChart",
        },
        {
          name: "educationAcademy",
          subTitle: "educationAcademyViewSubTitle",
          // path: "toolsEducationAcademy",
          path: "",
          icon: "School",
        },
        {
          name: "announcement",
          subTitle: "announcementListSubTitle",
          path: "toolsAnnouncementList",
          // path: "",
          icon: "Document",
        },
      ]
    },
    {
      name: "company",
      subTitle: "",
      path: "",
      icon: "",
      childrenShow: false,
      children: [
        {
          name: "about",
          subTitle: "aboutViewSubTitle",
          path: "companyAbout",
          icon: "OfficeBuilding",
        },
        {
          name: "why",
          subTitle: "whyViewSubTitle",
          path: "companyWhy",
          icon: "QuestionFilled",
        },
        // {
        //   name: "legalDocuments",
        //   subTitle: "legalDocumentsViewSubTitle",
        //   path: "companyLegalDocuments",
        //   icon: "Reading",
        // },
        {
          name: "contactUs",
          subTitle: "contactUsViewSubTitle",
          path: "companyContactUs",
          icon: "Service",
        },
        {
          name: "career",
          subTitle: "careerViewSubTitle",
          path: "companyCareer",
          icon: "SuitcaseLine",
        },
        {
          name: "faq",
          subTitle: "faqViewSubTitle",
          path: "companyFaq",
          icon: "Warning",
        },
      ]
    },
    // {
    //   name: "partnership",
    //   subTitle: "",
    //   path: "partnership",
    //   icon: "",
    //   childrenShow: false,
    //   children: []
    // },
    // {
    //   name: "promotion",
    //   subTitle: "",
    //   path: "",
    //   icon: "",
    //   childrenShow: false,
    //   children: [
    //     {
    //       name: "worldCup2026",
    //       subTitle: "",
    //       path: "promotionWorldCup2026",
    //       icon: "",
    //     },
    //   ]
    // },
  ])

  //获取位置接口
  //https://ipapi.co/json/ 检测是否是欧盟或者是另外19个国家，是则保留不是则跳转到com
  //强制跳转，点击或五秒后自动跳转
  //位置保存在localstorage中，有则自动检测，无则获取，一天后删除
  //错误或者其他情况保留在此网站
  const getLocation = async () => {
    //locationDate：位置保存日期
    //locationEU：位置是否在欧盟或者另外19个国家，是则为true，否则为false

    let locationDate = localStorage.getItem('locationDate');

    //判断今天是否获取过信息
    const today = new Date().toDateString();
    if(locationDate != null){
      if(today != locationDate) {
        localStorage.removeItem('locationDate')
        localStorage.removeItem('locationEU')
      }
    }

    //获取信息
    let locationData = null;
    let locationEU = localStorage.getItem('locationEU');
    if(locationEU == null){
      try {
        let response = await fetch('https://ipapi.co/json/')
        locationData = await response.json()
        //判断是否在欧盟或者另外19个国家内
        if(locationData.in_eu == true || 
          locationData.country_code == 'MC' || 
          locationData.country_code == 'AD' || 
          locationData.country_code == 'SM' || 
          locationData.country_code == 'VA' || 
          locationData.country_code == 'LI' || 
          locationData.country_code == 'CH' || 
          locationData.country_code == 'NO' || 
          locationData.country_code == 'IS' || 
          locationData.country_code == 'GB' || 
          locationData.country_code == 'UK' || 
          locationData.country_code == 'AL' || 
          locationData.country_code == 'MK' || 
          locationData.country_code == 'BA' || 
          locationData.country_code == 'ME' || 
          locationData.country_code == 'RS' || 
          locationData.country_code == 'MD' || 
          locationData.country_code == 'BY' || 
          locationData.country_code == 'UA' || 
          locationData.country_code == 'RU' || 
          locationData.country_code == 'TR'){
            locationEU = '1'
          }else{
            locationEU = '0'
          }

          //如果在中国范围设置为中文
          if(locationData.country_code == 'CN' ||
            locationData.country_code == 'TW' ||
            locationData.country_code == 'HK' ||
            locationData.country_code == 'MO'
          ){
            let language = localStorage.getItem("lang")
            if(language == null){
              localStorage.setItem("lang", "cn")
              location.reload()
            }
          }


        } catch (err) {
          // console.error('位置获取失败:', err)
          // error.value = err.message || '网络请求失败，请检查连接'
          locationEU = '1'
        }

        localStorage.setItem('locationDate', today)
        localStorage.setItem('locationEU', locationEU + '')
    }

    //判断是否跳转其他网站
    // if(locationEU == '0'){
    //   locationModal.value = true
    //   setTimeout(() => {
    //     window.open("https://" + import.meta.env.VITE_ATWEB + "/", '_self')
    //   }, 5000)
    // }

  }


  //随机uuid连接iframe
  const getUsername = () => {
    uuid.value = localStorage.getItem('username')
    if(uuid.value == null || uuid.value == ''){
      uuid.value = generateUUID();
      localStorage.setItem('username', uuid.value)
    }
  }


  const selectSystemSetting = async () => {
    const res = await systemSettingSelect()
    if (res.code == 200 && res.data) {
      systemSetting.value = res.data
    }
  }


  return { showNotificationBar, menuList, getLocation, getUsername, uuid, selectSystemSetting, systemSetting }
})
