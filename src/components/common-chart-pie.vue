<template>
  <div :id="idName" class="chartPie"></div>
</template>

<script>
import options from "./mixins/common-chart-pie";

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
      // title
      if (this.optionData.title) {
        this.option.title = this.optionData.title
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
      if (this.optionData.colorList) {
        this.option.color = this.optionData.colorList;
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
.chartPie {
  width: 100%;
  height: 100%;
}
</style>
