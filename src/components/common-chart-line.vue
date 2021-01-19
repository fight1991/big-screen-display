<template>
  <div :id="idName" class="chartLine"></div>
</template>

<script>
import options from "./mixins/common-chart-line";

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
      // 是否是多个图
      if (this.optionData.more) {
        this.option.series = this.optionData.series
      } else {
        const seriesKey = Object.keys(this.optionData.series)
        for (const k of seriesKey) {
          this.option.series[0][k] = this.optionData.series[k]
        }
      }
      if (this.optionData.xAxis) {
        const xAxisKey = Object.keys(this.optionData.xAxis)
        for (const k of xAxisKey) {
          this.option.xAxis[0][k] = this.optionData.xAxis[k]
        }
      }
      if (this.optionData.yAxis) {
        const yAxisKey = Object.keys(this.optionData.yAxis)
        for (const k of yAxisKey) {
          this.option.yAxis[0][k] = this.optionData.yAxis[k]
        }
      }
      if (this.optionData.tooltip) {
        const tooltipKey = Object.keys(this.optionData.tooltip)
        for (const k of tooltipKey) {
          this.option.tooltip[k] = this.optionData.tooltip[k]
        }
      }
      if (this.optionData.grid) {
        const gridKey = Object.keys(this.optionData.grid)
        for (const k of gridKey) {
          this.option.grid[k] = this.optionData.grid[k]
        }
      }
      if (this.optionData.legend) {
        const legendKey = Object.keys(this.optionData.legend)
        for (const k of legendKey) {
          this.option.legend[k] = this.optionData.legend[k]
        }
      }
      if(this.optionData.color){
        this.option.color=this.optionData.color
      }
      this.myChart = this.$echarts.init(document.getElementById(this.idName));
      this.myChart.setOption(this.option);
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
