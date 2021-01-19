<template>
  <div :id="idName"></div>
</template>

<script>
import options from "./mixins/common-chart-radar";

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
      let _this = this;
      if (this.optionData.radarShow) {
        this.option.series = this.optionData.series;
        if (this.optionData.radar) {
          for (let i in this.optionData.radar) {
            if (this.option.radar[i]) {
              this.option.radar[i] = this.optionData.radar[i];
            }
          }
        }
      } else {
        this.$set(this.option.series[0], "data", this.optionData.data[0].data); //数据初始化
        this.option.series[0].name = this.optionData.data[0].name;
        this.option.radar.center = this.optionData.center;
        this.option.radar.radius = this.optionData.radius;
        this.option.radar.indicator = this.optionData.indicator;
      }
      this.option.tooltip = {
        ...this.option.tooltip,
        ...this.optionData.tooltip
      };
      this.option.legend = { ...this.option.legend, ...this.optionData.legend };

      this.myChart = this.$echarts.init(document.getElementById(this.idName));
      this.myChart.setOption(this.option);

      this.myChart.on("mouseover", function(params) {
        var isSelectedDot = params.event.target.__dimIdx;
        _this.$emit("openAbsenteeismDot", isSelectedDot);
        if (isSelectedDot == undefined) return;
        //做鼠标滑过拐点的操作
      });

      window.addEventListener("resize", function() {
        _this.myChart.resize();
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
.echarts {
  width: 100%;
  height: 100%;
}
.title {
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  text-align: left;
}
</style>
