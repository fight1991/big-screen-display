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
      option: {
        grid: {
          top: this.echartsSize(40),
          right: this.echartsSize(30),
          left: this.echartsSize(30),
          bottom: this.echartsSize(20)
        },
        legend: {
          textStyle: {
            color: "#d7e3ff",
            fontSize:12,
          },
          itemWidth: 16,
          itemHeight: 16,
          bottom:"bottom"
        },
        xAxis: [
          {
            axisLabel: {
              margin: this.echartsSize(8),
              textStyle: {
                fontSize: this.echartsSize(8),
                color: "#33CBFF",
              },
            },
          }
        ],
        yAxis: [
          {
            name: "",
            type: "value",
            nameTextStyle: {
              fontSize: this.echartsSize(8),
              color: "#33CBFF",
            },
            axisLabel: {
              margin: this.echartsSize(8),
              textStyle: {
                fontSize: this.echartsSize(8),
                color: "#33CBFF",
              },
            },
            //设置轴线的属性
            axisLine: {
              show:false,
            },
            axisTick: {
              show:false
            },
            // 控制背景网格线是否显示
            splitLine: {
              show: true,
              //  改变轴线颜色
              lineStyle: {
                color: ['#4D4D4D'],
                width: 1,
                type: 'dashed'
              }
            }
          },
          {
            name: "",
            type: "value",
            nameTextStyle: {
              fontSize: this.echartsSize(8),
              color: "#33CBFF",
            },
            axisLabel: {
              margin: this.echartsSize(8),
              textStyle: {
                fontSize: this.echartsSize(8),
                color: "#33CBFF",
              },
            },
            //设置轴线的属性
            axisLine: {
              show:false,
            },
            axisTick: {
              show:false
            },
            // 控制背景网格线是否显示
            splitLine: {
              show: true,
              //  改变轴线颜色
              lineStyle: {
                color: ['#4D4D4D'],
                width: 1,
                type: 'dashed'
              }
            }
          }
        ]
      }
    };
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
