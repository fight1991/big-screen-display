export default {
  data() {
    return {
      option: {
        tooltip: {
          formatter: function(params) {
            if (params.componentSubType === "gauge") {
              return params.seriesName + "：" + params.value;
            }
          }
        },
        series: [
          {
            name: "CPU",
            min: 0,
            max: 100,
            radius: "100%",
            splitNumber: 5,
            type: "gauge",
            detail: {
              show: false
            },
            splitLine: {
              show: true,
              length: "40%",
              lineStyle: {
                color: "auto"
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              distance: 0,
              color: "#4672A2"
            },
            pointer: {
              width: 5,
              length: "50%"
            },
            data: []
          },
          //指针外环
          {
            type: "pie",
            hoverAnimation: false,
            legendHoverLink: false,
            radius: ["3%", "9%"],
            z: 10,
            label: {
              normal: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: 100,
                itemStyle: {
                  color: ""
                }
              }
            ]
          },
          //指针内环
          {
            type: "pie",
            hoverAnimation: false,
            legendHoverLink: false,
            radius: ["0%", "3%"],
            z: 10,
            label: {
              normal: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: 100,
                itemStyle: {
                  normal: {
                    color: "#fff"
                  }
                }
              }
            ]
          }
        ]
      }
    };
  }
};
