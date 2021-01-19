require('echarts-wordcloud');
export default {
  data() {
    return {
      optionBase: {
        tooltip: {
          show: true,
          backgroundColor: "#2853AF"
        },
        series: [
          {
            type: "wordCloud",
            gridSize: this.echartsSize(2),
            sizeRange: [15, 65],
            rotationRange: [-90, 90],
            rotationStep: 90,
            shape: "diamond",
            width: this.echartsSize(600),
            height: this.echartsSize(400),
            textStyle: {
              normal: {
                color: function() {
                  return (
                    "rgb(" +
                    [
                      Math.round(Math.random() * 255),
                      Math.round(Math.random() * 255),
                      Math.round(Math.random() * 255)
                    ].join(",") +
                    ")"
                  );
                }
              },
              emphasis: {
                shadowBlur: this.echartsSize(10),
                shadowColor: "#333"
              }
            },
            data: []
          }
        ]
      }
    };
  }
};
