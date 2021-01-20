<template>
  <div :id="idName" class="chartBar"></div>
</template>

<script>
import options from "./mixins/common-chart-bar";
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
      let option = merge({},this.option,this.optionData)
      this.myChart = this.$echarts.init(document.getElementById(this.idName));
      this.myChart.setOption(option);
      this.myChart.off("click"); //阻止叠加触发
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
.chartBar {
  width: 100%;
  height: 100%;
}
</style>
