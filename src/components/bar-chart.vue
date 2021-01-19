<template>
  <div :style="parentStyle"></div>
</template>

<script>
  import {merge,cloneDeep} from 'lodash-es'
  export default {
    name: "bar-chart",
    props:{
      parentStyle:{
        type: Object,
        default: function(){
          return {
            width: '100%',
            height: '100%'
          }
        }
      },
      data:{
        type: Array,
        default: ()=>{
          return []
        }
      },
      initOption :{
        type: Object,
        default: ()=>{}
      }
    },
    data(){
      return {
        initOptions:{
          xAxis: {
            type: 'category',
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(220, 220, 220, 0.8)'
            }
          }]
        }
      }
    },
    methods:{
      renderChart(){
        let options = this.initOptions
        if(this.data&&this.data.length){
          let series = this.initOptions.series[0]
          let seriesAll = this.data.map(item=>{
            item = merge(cloneDeep(series), item)
            return item
          })
          options.series = seriesAll
        }

        options = merge({}, options, this.initOptions)
        this.ecInstance = this.$echarts.init(this.$el)
        this.ecInstance.setOption(options)
        window.addEventListener("resize", ()=> {
          this.ecInstance.resize();
        });
      }
    },
    mounted(){
      this.renderChart()
    }
  }
</script>

<style scoped>

</style>
