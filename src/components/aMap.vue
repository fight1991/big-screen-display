
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
      mapId: '', // 地图容器 若id相同的话只渲染一次
      staticPosition: [
        {
          pos: [120.305268,31.574875],
          num: 12
        },
        {
          pos: [120.317284,31.598564],
          num: 123
        },
        {
          pos: [120.272137,31.56727],
          num: 123
        },
        {
          pos: [120.314023,31.49133],
          num: 1253
        },
        {
          pos: [120.220018,31.653308],
          num: 123
        },
        {
          pos: [120.461666,31.48924],
          num: 123
        },
        {
          pos: [120.087164,31.426888],
          num: 1234
        },
        {
          pos: [120.122869,31.522929],
          num: 12
        }
      ]
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
        return ['Map3D', 'AMap.DistrictSearch', 'AMap.MarkerClusterer']
        // 注意: 2.0版本AMap.Object3DLayer报错
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
        // version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: this.plugin, // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        // AMapUI: { // 是否加载 AMapUI，缺省不加载
        //   version: '1.1', // AMapUI 缺省 1.1
        //   plugins: [] // 需要加载的 AMapUI ui插件
        // },
        Loca: { // 是否加载 Loca， 缺省不加载
          // version: '2.0.0' // Loca 版本，缺省 1.3.2
        }
      }).then((AMap) => {
        this.renderBounds(AMap)
        // let map = new AMap.Map(this.mapId, {
        //   viewMode: '3D',
        //   zoom: 11,
        //   features: ['bg', 'road'],
        //   mapStyle: 'amap://styles/darkblue',
        //   center: [120.30, 31.57],
        //   resizeEnable: true,
        //   pitch: 30,
        //   lang: 'zh_cn'
        // })
        // return { AMap, map }
      }).catch(e => {
        // this.$message.error('地图相关资源加载失败!')
        console.log(e)
        return {}
      }).finally(() => {
        this.mapLoading = false
      })
    },
    renderBounds (AMap) {
      var opts = {
        subdistrict: 1,
        extensions: 'all',
        level: 'city'
      };
      var district = new AMap.DistrictSearch(opts)
      district.search('无锡市', (status, result) => {
          var bounds = result.districtList[0].boundaries;
          var mask = []
          for(var i =0;i<bounds.length;i+=1){
              mask.push([bounds[i]])
          }
          var map = new AMap.Map(this.mapId, {
              mask: mask,
              center: [120.30, 31.57],
              disableSocket:true,
              // viewMode:'3D',
              mapStyle: 'amap://styles/darkblue',
              showLabel:false,
              labelzIndex:130,
              pitch:40,
              zoom:9,
              layers:[

              ]
          });
          //添加高度面
          var object3Dlayer = new AMap.Object3DLayer({zIndex:1});
          map.add(object3Dlayer)
          
          var height = -8000;
          var color = '#0088ffcc';//rgba
          var wall = new AMap.Object3D.Wall({
              path:bounds,
              height:height,
              color:color
          });
          wall.transparent = true
          object3Dlayer.add(wall)
          //添加描边
          for(var i =0;i<bounds.length;i+=1){
            new AMap.Polyline({
              path:bounds[i],
              strokeColor:'#0071F1',
              strokeWeight:6,
              map:map
            })
          }
          var lines = new AMap.Object3D.Line();
          var lineGeo = lines.geometry;
          this.addPoints3D(result, lineGeo, lines, map, object3Dlayer)
          this.addMarker(AMap, map)
          map.setFitView()
      })
    },
    addPoints3D (result, lineGeo, lines, map, object3Dlayer) {
      var provinces = result.districtList[0].districtList;
        var points3D = new AMap.Object3D.RoundPoints();
        points3D.transparent = true;
        var pointsGeo = points3D.geometry;
        for (var p = 0; p < provinces.length; p += 1) {
            var center = this.lnglatToG20(provinces[p].center, map);
            var size = Math.max(10, Math.round(Math.random() * 40));
            var height = -size * 10000;

            // 连线
            lineGeo.vertices.push(center.x, center.y, 0);
            lineGeo.vertexColors.push(0, 1, 1, 1);
            lineGeo.vertices.push(center.x, center.y, height);
            lineGeo.vertexColors.push(0, 1, 1, 1);

            pointsGeo.vertices.push(center.x, center.y, 0); // 尾部小点
            pointsGeo.pointSizes.push(10);
            pointsGeo.vertexColors.push(0, 0, 1, 1);

            pointsGeo.vertices.push(center.x, center.y, height); // 空中点
            pointsGeo.pointSizes.push(size);
            pointsGeo.vertexColors.push(p * 0.029, p * 0.015, p * 0.01, 1);
        }

        points3D.borderColor = [0.4, 0.8, 1, 1];
        points3D.borderWeight = 3;
        console.log(points3D)
        object3Dlayer.add(lines);
        object3Dlayer.add(points3D);
    },
    lnglatToG20 (lnglat, map) {
      lnglat = map.lngLatToGeodeticCoord(lnglat);
      lnglat.x = AMap.Util.format(lnglat.x, 3);
      lnglat.y = AMap.Util.format(lnglat.y, 3);
      return lnglat;
    },
    // 添加marker
    addMarker (AMap, map) {
      var markers = []
      this.staticPosition.forEach(v => {
        markers.push(new AMap.Marker({
          position: v.pos,
          map,
          content: `<div
            style="background-color: hsla(180, 100%, 50%, 0.7);
            height: 24px; width: 24px;
            border: 1px solid hsl(180, 100%, 40%);
            border-radius: 12px;
            box-shadow: hsl(180, 100%, 50%) 0px 0px 1px;">
            </div>`,
          offset: new AMap.Pixel(-15, -15)
        }))
      })
      // new AMap.MarkerClusterer(map, markers, {
      //   gridSize: 80,
      //   renderClusterMarker: (context) => {
      //     this._renderClusterMarker(context, markers)
      //   }
      // });
    },
    _renderClusterMarker (context, markers) {
      var count = markers.length;
      var factor = Math.pow(context.count / count, 1 / 18);
      var div = document.createElement('div');
      var Hue = 180 - factor * 180;
      var bgColor = 'hsla(' + Hue + ',100%,50%,0.7)';
      var fontColor = 'hsla(' + Hue + ',100%,20%,1)';
      var borderColor = 'hsla(' + Hue + ',100%,40%,1)';
      var shadowColor = 'hsla(' + Hue + ',100%,50%,1)';
      div.style.backgroundColor = bgColor;
      var size = Math.round(30 + Math.pow(context.count / count, 1 / 5) * 20);
      div.style.width = div.style.height = size + 'px';
      div.style.border = 'solid 1px ' + borderColor;
      div.style.borderRadius = size / 2 + 'px';
      div.style.boxShadow = '0 0 1px ' + shadowColor;
      div.innerHTML = context.count;
      div.style.lineHeight = size + 'px';
      div.style.color = fontColor;
      div.style.fontSize = '14px';
      div.style.textAlign = 'center';
      context.marker.setOffset(new AMap.Pixel(-size / 2, -size / 2));
      context.marker.setContent(div)
    }
  },
}
</script>
<style lang="less" scoped>

</style>
