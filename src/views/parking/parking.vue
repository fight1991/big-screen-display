<template>
<div class="outer-container">
  <div class="max-screen">
    <HeaderNav></HeaderNav>
    <div class="content">
      <div class="pandect">
        <!-- 左边部分 -->
        <div class="left">
          <border-box-2 title="泊位统计">
            <multi-bar-chart idName="parkBar" :optionData="parkBarOps"></multi-bar-chart>
          </border-box-2>
          <border-box-2 title="车流量分析">
            <tranfic></tranfic>
          </border-box-2>
          <border-box-2 title="实时泊位概况">
            <parking-status></parking-status>
          </border-box-2>
        </div>
        <!-- 中间部分 -->
        <div class="center">
          <div class="center-top">
            <map-data></map-data>
          </div>
          <div class="center-bottom">
            <border-box-2 title="支付分析">
              <pay-data></pay-data>
            </border-box-2>
          </div>
        </div>
        <!-- 右边部分 -->
        <div class="right">
          <border-box-2 title="近一周收入">
            <line-chart idName="weekLineIncome" :optionData="lineOps"></line-chart>
          </border-box-2>
          <border-box-2 title="设备概况">
            <horizon-bar-chart idName="deviceChartBar" :optionData="deviceStatus"></horizon-bar-chart>
          </border-box-2>
          <border-box-2 title="实时交易记录">
            <pay-note></pay-note>
          </border-box-2>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import HeaderNav from '../header/parkingHeader.vue'

import tranfic from './components/tranfic'
import payNote from './components/payNote'
import mapData from './components/mapData'
import parkingStatus from './components/parkingStatus'
import payData from './components/payData'

import parkBar from './mixins/parkBar'
import weekLine from './mixins/weekLine'
import deviceStatus from './mixins/deviceStatusBar'


export default {
  name: "parking",
  mixins: [parkBar, weekLine, deviceStatus],
  components: {
    tranfic,
    payNote,
    mapData,
    parkingStatus,
    HeaderNav,
    payData
  },
  data() {
    return {
   
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "./parking";
.outer-container {
  background:url("../../assets/img/pandect/bg.png") no-repeat;
  background-size: cover;
}
</style>
