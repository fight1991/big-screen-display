export default {
  data () {
    return {
      pieOps: {
        color: ['#1BDFFC', '#F25CEB'],
      tooltip: {
          trigger: 'item'
      },
      legend: {
          // orient: 'horizonal',
          left: 'center',
          show: true,
      },
      series: [
          {
              name: '访问来源',
              type: 'pie',
              radius: '50%',
              data: [
                  {value: 1048, name: '个人居民',},
                  {value: 735, name: '外卖快递'},
              ],
              label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{d}%',//模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。{d}数据会根据value值计算百分比

                   textStyle : {                   
                    align : 'center',
                    baseline : 'middle',
                    fontFamily : '微软雅黑',
                    fontSize : this.echartsSize(15),
                    // fontWeight : 'bolder'
                 },
                      
                },
            },
              emphasis: {
                  itemStyle: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
              }
          }
      ]
    }
  }
}
}