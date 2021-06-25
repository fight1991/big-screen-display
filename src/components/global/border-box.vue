<template>
  <div class="border-box">
    <div class="border-tl"></div>
    <div class="border-tr"></div>
    <div class="border-bl"></div>
    <div class="border-br"></div>
    <div class="border-title">
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
      title:''
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
    border: 2px solid #007FFE;
    .border-tl,
    .border-br,
    .border-tr,
    .border-bl {
      border: 2px solid #00E3FF;
      width: 31px;
      height: 31px;
    }
    .border-tl{
      border-right:0;
      border-bottom:0;
      position: absolute;
      top:-2px;
      left:-2px;
    }
    .border-tr{
      opacity:1;
      border-left:0;
      border-bottom:0;
      position: absolute;
      right:-2px;
      top:-2px;
    }
    .border-bl{
      opacity:1;
      border-right:0;
      border-top:0;
      position: absolute;
      left:-2px;
      bottom:-2px;
    }
    .border-br{
      border-left:0;
      border-top:0;
      position: absolute;
      bottom:-2px;
      right:-2px;
    }
    .content-box {
      flex: 1;
      width: 100%;
    }
    .border-title{
      font-size:20px;
      color: #00E4FF;
      display: flex;
      justify-content: center;
      background: url('../../assets/img/pandect/box-title-bg.png') no-repeat center bottom;
      background-size: 100% 31px;
      height: 41px;
      .title-center {
        padding: 0 30px;
      }
    }
  }
</style>
