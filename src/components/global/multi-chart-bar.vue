<template>
  <div :id="idName" class="chartBar"></div>
</template>

<script>
import {merge} from 'lodash-es'

export default {
  props: {
    idName: String,
    optionData: Object
  },
  data() {
    return {
      myChart: "",
    };
  },
  methods: {
    renderChart() {
      this.myChart = this.$echarts.init(document.getElementById(this.idName));
      this.myChart.setOption(this.optionData);
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
