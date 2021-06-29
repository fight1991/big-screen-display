export default {
  data () {
    return {
      pieOpsForParking: {
        color: ['#1AB5FE', '#069BC9', '#83BA0D'],
        tooltip: {
            trigger: 'item'
        },
        legend: {
            // orient: 'horizonal',
            left: 'center',
            show: false,
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '75%',
                center: ['50%', '50%'],
                data: [
                    {value: 1048, name: '占有',},
                    {value: 735, name: '空闲'},
                    {value: 535, name: '预约'},
                ],
                label: {
                  normal: {
                      show: true,
                      position: 'inside',
                      formatter: '{b}\n{d}%',//模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。{d}数据会根据value值计算百分比

                    textStyle : {                   
                      align : 'center',
                      baseline : 'middle',
                      fontFamily : '微软雅黑',
                      fontSize : this.echartsSize(10),
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