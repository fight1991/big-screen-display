<template>
  <div :id="idName" class="chartLine"></div>
</template>

<script>
import options from "./mixins/common-chart-line";
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
     const option = merge({},this.option, this.optionData)
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
.chartLine {
  width: 100%;
  height: 100%;
}
</style>
