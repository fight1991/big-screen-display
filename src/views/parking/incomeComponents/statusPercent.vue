<template>
  <pie-chart idName="pieStatusPercent" :optionData="chartData"></pie-chart>
</template>
<script>
export default {
  data () {
    return {
      chartData: {
        color: ['#1AB5FE', '#069BC9', '#83BA0D', '#FF8562', '#FFC637'],
        legend: {
          show: true,
          orient: 'vertical',
          right: 'right',
          top: 'top'
        },
        series: [
            {
                name: '面积模式',
                type: 'pie',
                radius: '80%',
                center: ['50%', '50%'],
                itemStyle: {
                    borderRadius: 8,
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 5
                },
                label: {
                  normal: {
                      show: true,
                      position: 'inside',
                      formatter: '{d}%',//模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。{d}数据会根据value值计算百分比   
                },
              },
                data: [
                  {value: 1048, name: '车位锁',},
                  {value: 735, name: '地磁'},
                  {value: 535, name: '道闸'},
                ]
            }
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>