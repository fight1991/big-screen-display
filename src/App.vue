<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import {refreshScale} from './assets/js/util'
export default {
  name: 'app',
  mounted(){
    refreshScale();
    window.onresize=function(){
      refreshScale()
    }
  }
}
</script>

<style lang="scss">
#app {
  width: 1920px;
  height: 1080px;
  background: #101326;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 50%;
  right: 0;
  bottom: 0;
  /*overflow: hidden;*/
}
</style>
