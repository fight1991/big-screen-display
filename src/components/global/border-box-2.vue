<template>
  <div class="border-box" :style="{'background-image': 'url(' + imgMap[size] + ')', 'height': height}">
    <div class="border-title">
      <span class="shuxian"></span>
      {{title}}
      <!-- <div class="title-left title-item">
        <dv-decoration-3 style="width:120px;height:30px;" />
      </div>
      <div class="title-center">
        {{title}}
      </div>
      <div class="title-right title-item">
        <dv-decoration-3 style="width:120px;height:30px;" />
      </div> -->
    </div>
    <div class="content-box">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "border-box",
    props:{
      title:'',
      size: {
        type: String,
        default: 'min'
      },
      height: {
        type: String,
        default: '300px'
      }
    },
    data () {
      return {
        imgMap: {
          min: require('@/assets/img/public/box-home.png'),
          small: require('@/assets/img/public/box-parking.png')
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .border-box{
    padding: 20px 30px;
    position: relative;
    height: 300px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    .content-box {
      flex: 1;
      width: 100%;
    }
    .border-title{
      height: 20px;
      font-size: 20px;
      position: absolute;
      left: 15px;
      top: -10px;
      color: #00E4FF;
      display: flex;
      align-items: center;
      .shuxian {
        display: inline-block;
        width: 6px;
        height: 100%;
        margin-right: 8px;
        background-color: #3FFFEA;
      }
    }
  }
</style>
