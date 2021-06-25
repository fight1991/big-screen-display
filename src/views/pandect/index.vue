<template>
  <div class="pandect">
    <!-- 左边部分 -->
    <div class="left">
      <border-box title="近一周流量统计">
        <bar-chart idName="flowChartBar" :optionData="flowBarOps"></bar-chart>
      </border-box>
      <border-box title="交通指数排行">
        <tranfic></tranfic>
      </border-box>
      <border-box title="实时过车记录">
        <pass-note></pass-note>
      </border-box>
    </div>
    <!-- 中间部分 -->
    <div class="center">
      <div class="center-top">
        <map-data></map-data>
      </div>
      <div class="center-bottom">
        <border-box title="车辆分析">
          <carAlany></carAlany>
        </border-box>
      </div>
    </div>
    <!-- 右边部分 -->
    <div class="right">
      <border-box title="近一周违法统计">
        <line-chart idName="breakRules" :optionData="breakOps"></line-chart>
      </border-box>
      <border-box title="近一周违法排行">
        <bar-chart idName="breakChartBar" :optionData="breakBarOps"></bar-chart>
      </border-box>
      <border-box title="实时违法记录">
        <break-note></break-note>
      </border-box>
    </div>
  </div>
</template>

<script>

import tranfic from './components/tranfic'
import passNote from './components/passNote'
import breakNote from './components/breakNote'
import carAlany from './components/carAlany'
import mapData from './components/mapData'

import flowBar from './mixins/flowBar'
import breakRules from './mixins/breakRules'
import breakBar from './mixins/breakBar'

export default {
  name: "pandect",
  mixins: [flowBar, breakRules, breakBar],
  components: {
    tranfic,
    passNote,
    breakNote,
    carAlany,
    mapData
  },
  data() {
    return {
   
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "./pandect";

</style>
