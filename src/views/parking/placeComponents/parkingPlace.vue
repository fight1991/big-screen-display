<template>
<div class="box">
  <div class="img-box">
    <img :src="parkingCar" alt="">
  </div>
  <div class="item">
    <div class="lines">
      <div class="name">泊位总数</div>
      <div class="value">320</div>
    </div>
    <div class="lines">
      <div class="name">空闲泊位</div>
      <div class="value">20</div>
    </div>
    <div class="lines">
      <div class="name">已预约泊位</div>
      <div class="value">120</div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      parkingCar: require('@/assets/img/public/parking-car.png')

    }
  }
}
</script>
<style lang="scss" scoped>
.box {
  display: flex;
  flex-direction: column;
  height: 100%;
}
  .img-box {
    margin: 10px 0;
  }
  .item {
    display: flex;
    flex: 1;
    justify-content: space-around;
    align-items: center;
    color: #60C6FF;
    .lines {
      display: flex;
      align-items: center;
      .name {
        padding: 0 10px;
      }
      .value {
        color: #00F5ED;
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
</style>