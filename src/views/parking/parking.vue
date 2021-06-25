<template>
<div class="outer-container">
  <div class="max-screen">
    <HeaderNav></HeaderNav>
    <div class="content">
      <div class="pandect">
        <!-- 左边部分 -->
        <div class="left">
          <border-box-2 title="泊位统计">
            <!-- <bar-chart idName="flowChartBar" :optionData="flowBarOps"></bar-chart> -->
          </border-box-2>
          <border-box-2 title="车流量分析">
            <tranfic></tranfic>
          </border-box-2>
          <border-box-2 title="实时泊位概况">
            <pass-note></pass-note>
          </border-box-2>
        </div>
        <!-- 中间部分 -->
        <div class="center">
          <div class="center-top">
            <map-data></map-data>
          </div>
          <div class="center-bottom">
            <border-box-2 title="支付分析">
              <carAlany></carAlany>
            </border-box-2>
          </div>
        </div>
        <!-- 右边部分 -->
        <div class="right">
          <border-box-2 title="近一周">
            <line-chart idName="breakRules" :optionData="breakOps"></line-chart>
          </border-box-2>
          <border-box-2 title="近一周违法排行">
            <bar-chart idName="breakChartBar" :optionData="breakBarOps"></bar-chart>
          </border-box-2>
          <border-box-2 title="实时违法记录">
            <break-note></break-note>
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
import passNote from './components/passNote'
import breakNote from './components/breakNote'
import carAlany from './components/carAlany'
import mapData from './components/mapData'

import flowBar from './mixins/flowBar'
import breakRules from './mixins/breakRules'
import breakBar from './mixins/breakBar'

export default {
  name: "parking",
  mixins: [flowBar, breakRules, breakBar],
  components: {
    tranfic,
    passNote,
    breakNote,
    carAlany,
    mapData,
    HeaderNav
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
