export default {
  data () {
    return {
      payEchart: {
        color: ['#1AB5FE', '#069BC9', '#83BA0D', '#FF8562', '#FFC637'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'cross'
          }
        },
        grid: [
          {
            width: '50%',
            left: '0'
          }
        ],
        legend: {
            data: ['微信', '支付宝', '银联', '现金', '其它'],
            top: 'top',
            right: '0'
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {
                  alignWithLabel: true
                },
                axisLabel: {
                  textStyle: {
                    color: '##33CBFF'
                  }
                },
                data: ['微信', '支付宝', '银联', '现金', '其它']
            }
        ],
        yAxis: [
            {
              type: 'value',
              min: 0,
              max: 250,
              position: 'left',
              axisLine: {
                  show: false,
                  lineStyle: {
                      color: '##33CBFF'
                  }
              },
              axisLabel: {
                  formatter: '{value}'
              },
              splitLine: {
                show: false,
              }
            }
        ],
        series: [
          {
            type: 'bar',
            data: [120, 200, 150, 80, 45],
            barMinWidth: "8",
            barMaxWidth: "20",
            itemStyle: {
              barBorderRadius: [5, 5, 0, 0],
              color: new echarts.graphic.LinearGradient(
                0, 1, 0, 0,
                [
                  {offset: 0, color: '#19EFFF'},
                  {offset: 1, color: '#1D8EE7'}
                ]
              )
            },
          },
          {
            type: 'pie',
            radius: ['20%', '50%'],
            center: ['75%', '50%'],
            data: [
                {value: 1048, name: '微信',},
                {value: 735, name: '支付宝'},
                {value: 535, name: '银联'},
                {value: 635, name: '现金'},
                {value: 135, name: '其它'},
            ],
            roseType: 'area',
            itemStyle: {
                borderRadius: 8
            },
            label: {
              normal: {
                  show: true,
                  // position: 'inside',
                  formatter: '{d}%',//模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。{d}数据会根据value值计算百分比

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