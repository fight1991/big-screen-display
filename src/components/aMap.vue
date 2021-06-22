
<template>
<div class="map-container" style="width:100%;height:100%" v-loading="mapLoading">
  <div :id="mapId" class="map-content" :style="{'height': height, 'width': width}"></div>
</div>
</template>
<script>
/*eslint-disable */
import AMapLoader from '@amap/amap-jsapi-loader'
export default {
  data () {
    return {
      ak: 'ffa1527d9cf893866bc676b3c699049f',
      mapLoading: false,
      mapId: '' // 地图容器 若id相同的话只渲染一次
    }
  },
  props: {
    height: {
      default: '100%'
    },
    width: {
      default: '100%'
    },
    autoGps: {
      default: true // h5自动定位
    },
    plugin: {
      type: Array,
      default: () => {
        return ['AMap.PlaceSearch', 'AMap.AutoComplete', 'AMap.Geolocation', 'AMap.Geocoder', 'AMap.MouseTool']
      }
    }
  },
  created () {
    this.mapId = 'map-content' + this.$route.name
    // window.addEventListener('resize', this.asyncInit)
  },
  methods: {
    initAMap () {
      this.mapLoading = true
      return AMapLoader.load({
        key: this.ak, // 申请好的Web端开发者Key，首次调用 load 时必填
        version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: this.plugin, // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        // AMapUI: { // 是否加载 AMapUI，缺省不加载
        //   version: '1.1', // AMapUI 缺省 1.1
        //   plugins: [] // 需要加载的 AMapUI ui插件
        // },
        // Loca: { // 是否加载 Loca， 缺省不加载
        //   version: '2.0.0' // Loca 版本，缺省 1.3.2
        // }
      }).then((AMap) => {
        let map = new AMap.Map(this.mapId, {
          zoom: 12,
          center: [120.30, 31.57],
          resizeEnable: true,
          lang: 'zh_cn'
        })
        return { AMap, map }
      }).catch(e => {
        this.$message.error('地图相关资源加载失败!')
        return {}
      }).finally(() => {
        this.mapLoading = false
      })
    }
  }
}
</script>
<style lang="less" scoped>

</style>
