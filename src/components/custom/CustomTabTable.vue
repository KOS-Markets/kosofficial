<!-- <template>
  <div class="custom-tab-table">
    <div class="custom-tab">
      <div class="custom-tab-item" :class="{ 'active': active == 0 }" @click="changeTab(0)">{{ t('forex') }}</div>
      <div class="custom-tab-item" :class="{ 'active': active == 1 }" @click="changeTab(1)">{{ t('indices') }}</div>
      <div class="custom-tab-item" :class="{ 'active': active == 3 }" @click="changeTab(3)">{{ t('energy') }}</div>
      <div class="custom-tab-item" :class="{ 'active': active == 4 }" @click="changeTab(4)">{{ t('metals') }}</div>
      <div class="custom-tab-item" :class="{ 'active': active == 5 }" @click="changeTab(5)">{{ t('shares') }}</div>
    </div>
    <div class="custom-list">
      <el-table :data="tableData" :scrollbar-always-on="true">
        <el-table-column :label="t('symbol')">
          <template #default="scope">
            {{ scope.row.symbol.replace('.c', '') }}
          </template>
        </el-table-column>
        <el-table-column :label="t('ask')">
          <template #default="scope">
            {{ BigNumber(wsConnectStore.market[scope.row.symbol]?.askPrice).decimalPlaces(scope.row.decimal, BigNumber.ROUND_FLOOR) }}
          </template>
        </el-table-column>
        <el-table-column :label="t('bid')">
          <template #default="scope">
            {{ BigNumber(wsConnectStore.market[scope.row.symbol]?.bidPrice).decimalPlaces(scope.row.decimal, BigNumber.ROUND_FLOOR) }}
          </template>
        </el-table-column>
        <el-table-column :label="t('spread')">
          <template #default="scope">
            {{ calculatePipSpread(scope.row.decimal, wsConnectStore.market[scope.row.symbol].askPrice, wsConnectStore.market[scope.row.symbol].bidPrice) }}
          </template>
        </el-table-column>
        <el-table-column :label="t('contractSize')">
          <template #default="scope">
            {{ wsConnectStore.market[scope.row.symbol].symbolsize }}
          </template>
        </el-table-column>
        <el-table-column :label="t('leverage')">
          <template #default="scope">
            {{ scope.row.leverage }}
          </template>
        </el-table-column>
        <el-table-column :label="t('tradingHours')">
          <template #default="scope">
            {{ scope.row.tradingHours }}
          </template>
        </el-table-column>

      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import BigNumber from 'bignumber.js'

import { calculatePipSpread } from '@/utils/tools'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { useWsConnectStore } from "@/stores/wsConnect";
const wsConnectStore = useWsConnectStore()

const active = ref<number>(0)

const tableData = computed(()=>{
  return wsConnectStore.coinList.filter((item)=>{
    return item.type == active.value
  })
})

const changeTab = (num: number) => {
    active.value = num
    wsConnectStore.subscribePrice(active.value)
}
</script>

<style lang="scss" scoped>
.custom-tab-table {
  width: var(--custom-width);
  margin: 0 auto;
  padding: 40px 80px;
  box-sizing: border-box;

  @media (max-width: 1100px) {
    padding: 40px 40px;
  }

  @media (max-width: 768px) {
    padding: 40px 24px;
  }

  .custom-tab {
    display: flex;
    margin: 0 auto 30px;

    /* 关键：宽度策略 */
    max-width: 100%;
    /* 确保不超出屏幕 */
    width: max-content;
    /* 内容少时，宽度等于内容总和，从而实现 margin: auto 居中 */

    /* 关键：防止子元素被压缩 */
    flex-wrap: nowrap;

    /* 允许横向滚动 */
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    /* iOS 惯性滚动 */

    /* 隐藏滚动条 */
    -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar {
      display: none;
    }

    .custom-tab-item {
      padding: 8px 32px;
      background-color: transparent;
      color: var(--text-color);
      border-left: 1px solid var(--primary-color);
      border-right: 1px solid var(--primary-color);
      margin: 0 10px;
      cursor: pointer;
      white-space: nowrap;

    }

    .custom-tab-item:hover {
      background-color: var(--menu-color);
    }

    .active {
      background-color: var(--menu-color);
    }
  }

  .custom-list {

    :deep(.el-table__inner-wrapper) {
      background-color: transparent;
    }

    :deep(.el-table--striped .el-table__body tr.el-table__row--striped td.el-table__cell) {
      background-color: transparent;
    }

    :deep(.el-table--enable-row-hover .el-table__body tr:hover>td.el-table__cell) {
      background-color: transparent;
    }

    :deep(.el-table__header-wrapper) {
      background: transparent;
      padding: 5px 0;
      overflow: hidden;
    }


    :deep(.el-table) {
      --el-table-border-color: transparent;
      background-color: transparent;
      color: var(--text-color);
      width: 100%;

      .cell {
        padding: 0;
        height: 100%;
        width: 100%;
      }

      tr {
        background-color: transparent;
      }

      th {
        background-color: transparent;
        color: var(--text-color);
        text-align: center;
        padding: 3px;


        .cell {
          background-color: var(--menu-color);
          padding: 8px;
        }
      }

      td {
        text-align: center;
        padding: 10px 0;
      }

    }


  }
}
</style> -->

<template></template>

<script setup></script>

<style scoped></style>
