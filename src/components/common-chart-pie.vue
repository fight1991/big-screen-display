<template>
  <div :id="idName" class="chartPie"></div>
</template>

<script>
import options from "./mixins/common-chart-pie";
import {merge} from 'lodash-es'

export default {
  mixins: [options],
  props: {
    idName: String,
    optionData: Object
  },
  data() {
    return { myChart: "" };
  },
  methods: {
    renderChart() {
      let option = merge({},this.option, this.optionData)
      console.log(option)
      // option.series[0].label = {show:false}
      this.myChart = this.$echarts.init(document.getElementById(this.idName));
      this.myChart.setOption(option);
      window.addEventListener("resize", () => {
        this.myChart.resize();
      });
    }
  },
  mounted() {
    this.renderChart();
  },
  watch: {
    optionData: {
      handler: function() {
        this.renderChart();
      },
      deep: true
    }
  }
};
</script>
<style scoped>
.chartPie {
  width: 100%;
  height: 100%;
}
</style>
