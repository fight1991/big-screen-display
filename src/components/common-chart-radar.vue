<template>
  <div :id="idName"></div>
</template>

<script>
import options from "./mixins/common-chart-radar";
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

      const option = merge({},this.option,this.optionData)
      this.myChart = this.$echarts.init(document.getElementById(this.idName));
      this.myChart.setOption(option);

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
