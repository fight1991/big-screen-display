export default {
  data () {
    return {
      parkBarOps: {
        // xAxis: {
        //   type: 'category',
        //   data: ['车位锁', '地磁', '道闸', '其它']
        // },
        // yAxis: {
        //     type: 'value'
        // },
        // series: [{
        //   data: [120, 200, 150, 80],
        //   type: 'bar',
        //   itemStyle: {
        //     color: new echarts.graphic.LinearGradient(
        //       0, 1, 0, 0,
        //       [
        //         {offset: 0, color: '#19EFFF'},
        //         {offset: 1, color: '#1D8EE7'}
        //       ]
        //     )
        //   },
        // }, {
        //   data: [90, 200, 140, 60],
        //   type: 'bar',
        //   itemStyle: {
        //     color: new echarts.graphic.LinearGradient(
        //       0, 1, 0, 0,
        //       [
        //         {offset: 0, color: '#FCE417'},
        //         {offset: 1, color: '#D87E42'}
        //       ]
        //     )
        //   },
        // }]
        legend: {
          top:"top"
        },
        tooltip: {},
        dataset: {
          source: [
            ['product', '公用', '月租'],
            ['车位锁', 30, 65],
            ['地磁', 40, 85],
            ['道闸', 20, 75],
            ['其它', 35, 85]
          ]
        },
        xAxis: {type: 'category'},
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
            {
              type: 'bar',
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
              type: 'bar',
              barMinWidth: "8",
              barMaxWidth: "20",
              itemStyle: {
                barBorderRadius: [5, 5, 0, 0],
                color: new echarts.graphic.LinearGradient(
                  0, 1, 0, 0,
                  [
                    {offset: 0, color: '#FCE417'},
                    {offset: 1, color: '#D87E42'}
                  ]
                )
              },
            },
        ]
      }
    }
  }
}