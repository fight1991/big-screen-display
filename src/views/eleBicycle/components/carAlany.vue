<template>
  <div class="car-box">
    <div class="pie-left">
      <div class="today-num num">30000</div>
      <div class="today-txt text">今日活跃度</div>
    </div>
    <div class="chart">
      <pie-chart idName="carAlay" :optionData="pieOps"></pie-chart>
    </div>
    <div class="pie-right">
      <div class="week-num num">80000</div>
      <div class="week-txt text">本周活跃度</div>
    </div>
  </div>
</template>
<script>
import pieData from '../mixins/pieData'

export default {
  mixins: [pieData],
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
  .car-box {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .chart {
      width: 50%;
      height: 100%;
    }
    .num {
      font-size: 22px;
      margin-bottom: 10px;
      font-weight: bold;
    }
    .text {
      color: #60C6FF;
    }
    .today-num {
      color: #EFF200;
    }
    .week-num {
      color: #14FFB4;
    }
    .pie-left,.pie-right {
      text-align: center;
    }
  }
</style>
