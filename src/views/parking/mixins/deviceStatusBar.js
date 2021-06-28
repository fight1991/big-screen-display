export default {
  data () {
    return {
      deviceStatus: {
        color: ['#1AB5FE', '#00EBE3', '#F49042', '#B4B4B4'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            top: '0',
            data: ['总数', '在线', '故障', '离线']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ['道闸', '地磁', '泊位机器人']
        },
        series: [
            {
                name: '总数',
                type: 'bar',
                data: [18203, 23489, 29034, 104970]
            },
            {
                name: '在线',
                type: 'bar',
                data: [19325, 23438, 31000, 121594]
            },
            {
              name: '故障',
              type: 'bar',
              data: [19325, 23438, 31000, 121594]
            },
            {
              name: '离线',
              type: 'bar',
              data: [19325, 23438, 31000, 121594]
            }
        ]
      }
    }
  }
}