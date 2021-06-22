<template>
  <div class="pandect">
    <!-- 左边部分 -->
    <div class="left">
      <border-box title="近一周流量统计">
        <chart-bar idName="flowChartBar" :optionData="flowBarOps"></chart-bar>
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
      <div class="center-top"></div>
      <div class="center-bottom">
        <border-box title="车辆分析">
          <carAlany></carAlany>
        </border-box>
      </div>
    </div>
    <!-- 右边部分 -->
    <div class="right">
      <border-box title="近一周违法统计">
        <chart-line idName="breakRules" :optionData="breakOps"></chart-line>
      </border-box>
      <border-box title="近一周违法排行">
        <chart-bar idName="breakChartBar" :optionData="breakBarOps"></chart-bar>
      </border-box>
      <border-box title="实时违法记录">
        <break-note></break-note>
      </border-box>
    </div>
  </div>
</template>

<script>
import borderBox from '@/components/border-box'

import chartBar from '@/components/common-chart-bar';
import chartLine from '@/components/common-chart-line';

import tranfic from './components/tranfic'
import passNote from './components/passNote'
import breakNote from './components/breakNote'
import carAlany from './components/carAlany'

import flowBar from './mixins/flowBar'
import breakRules from './mixins/breakRules'
import breakBar from './mixins/breakBar'

export default {
  name: "pandect",
  mixins: [flowBar, breakRules, breakBar],
  components: {
    borderBox,
    chartBar,
    chartLine,
    tranfic,
    passNote,
    breakNote,
    carAlany
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
