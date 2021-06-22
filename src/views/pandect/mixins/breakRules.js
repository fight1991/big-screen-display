export default {
  data () {
    return {
      breakOps: {
        color: ['#00FFEA', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value',
            name: '(次)'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
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
        }]
      }
    }
  }
}