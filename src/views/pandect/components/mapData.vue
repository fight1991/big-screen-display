<template>
  <div class="map-box">
    <div class="title"></div>
    <div class="bottom">
      <div class="map"></div>
      <div class="car-num"></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      map: null,
      AMap: null
    }
  },
  mounted () {
    this.$refs.gaodeMap.initAMap().then(({ AMap, map }) => {
      this.map = map
      this.AMap = AMap
    })
  }
}
</script>
<style lang="scss" scoped>
  
</style>