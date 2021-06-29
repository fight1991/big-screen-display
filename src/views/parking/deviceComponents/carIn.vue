<template>
  <div class="car-box">
    <div class="img-box">
      <div class="top">
        <img :src="carPhoto" alt="">
      </div>
      <div class="bottom">
        <div class="line">
          <div class="name">停车场</div>
          <div class="value">安林停车场</div>
        </div>
        <div class="line">
          <div class="name">车牌号</div>
          <div class="value brand">苏B9X45B</div>
        </div>
      </div>
    </div>
    <div class="img-data">
      <dv-scroll-board :config="config" style="width:100%;height:100%" />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      carPhoto: require('@/assets/img/public/car-photo.png'),
      config: {
        header: ['入场口', '车牌号', '交易时间'],
        headerBGC: 'tranparent',
        oddRowBGC: 'tranparent',
        evenRowBGC: 'tranparent',
        data: [
          ['一号进口', '苏A124342', '11:30:02'],
          ['一号进口', '苏A124342', '11:30:02'],
          ['一号进口', '苏A124342', '11:30:02'],
          ['一号进口', '苏A124342', '11:30:02'],
          ['一号进口', '苏A124342', '11:30:02'],
          ['一号进口', '苏A124342', '11:30:02'],
          ['一号进口', '苏A124342', '11:30:02'],
          ['一号进口', '苏A124342', '11:30:02'],
          ['一号进口', '苏A124342', '11:30:02'],
          ['一号进口', '苏A124342', '11:30:02']
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.car-box {
  color: #60C6FF;
  display: flex;
  height: 100%;
  .img-box {
    padding: 10px 20px 0 0;
  }
  .img-data {
    width: 50%;
    height: 100%;
  }
  .bottom {
    margin-top: 10px;
  }
  .line {
    display: flex;
    align-items: center;
    .name {
      padding: 20px;
    }
    .value {
      font-size: 20px;
      color: #00F5ED;
    }
    .brand {
      color: #EFF200;
    }
  }
}
</style>
