<template>
  <line-chart idName="monthLineIncome" :optionData="lineOps"></line-chart>
</template>
<script>
export default {
  data () {
    return {
      lineOps: {
        color: ['#22CCDE', '#D87E42'],
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: [
          {
            type: 'value',
            name: '交易次数(次)',
            position: 'left'
          },
          {
            type: 'value',
            name: '收入(元)',
            position: 'right'

          }
        ],
        legend: {
          data: ['交易次数', '交易金额'],
          top: 'top',
      },
        series: [{
            name: '交易次数',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true,
            areaStyle: {
              opacity: 0.1,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#00FCFF'
              }, {
                offset: 1,
                color: '#020D32'
              }])
            }
        },
        {
          name: '交易金额',
          data: [420, 732, 701, 834, 1090, 1030, 1020],
          type: 'line',
          smooth: true,
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