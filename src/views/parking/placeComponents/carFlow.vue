<template>
  <bar-chart idName="lineBar" :optionData="lineBarOps"></bar-chart>
</template>
<script>
export default {
  data () {
    return {
      lineBarOps: {
        xAxis: {
          type: 'category',
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14']
        },
        legend: {
          top: 'top'
        },
        grid: {
          top: 50
        },
        yAxis: [
          {
            type: 'value',
            name: '平均车流量',
            position: 'left',
            min: 0,
            max: 1000,
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
            type: 'value',
            name: '平均占有率(%)',
            min: 0,
            max: 100,
            position: 'right',
            splitLine: {
              show: true,
              //  改变轴线颜色
              lineStyle: {
                color: ['#4D4D4D'],
                width: 1,
                type: 'dashed'
              }
            },
            nameTextStyle:{
              fontSize: this.echartsSize(14),
              color: "#89CEFF",
            },
            axisLabel: {
              margin: this.echartsSize(8),
              textStyle: {
                fontSize: this.echartsSize(12),
                color: "#89CEFF",
              },
            },
          }
        ],
        series: [{
            name: '平均车流量',
            data: [320, 900, 150, 580, 770, 810, 630, 320, 900, 150, 580, 770, 810, 630],
            type: 'bar',
            itemStyle: {
              color: new echarts.graphic.LinearGradient(
                0, 1, 0, 0,
                [
                  {offset: 0, color: '#19EFFF'},
                  {offset: 1, color: '#1D8EE7'}
                ]
              )
            },
        },{
            name: '平均占有率',
            yAxisIndex: 1,
            smooth: true,
            type: 'line',
            data: [20, 44, 60, 44, 90, 40, 32, 20, 44, 60, 44, 90, 40, 32],
            color: ['#FCE417'],
            areaStyle: {
              opacity: 0.1,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#D87E42'
              }, {
                offset: 1,
                color: '#FCE417'
              }])
            }
        }]
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>