export default {
  data () {
    return {
      breakBarOps: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
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
        }]
      }
    }
  }
}