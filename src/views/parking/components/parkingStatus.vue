<template>
  <div class="box-echart">
    <div class="left">
      <div class="title">泊位总数<span class="parking-num">{{parkingNum}}</span>个</div>
      <div class="echart">
        <pie-chart idName="pieStatus" :optionData="pieOpsForParking"></pie-chart>
      </div>
    </div>
    <div class="right">
      <div class="average">
        <div class="value bowei">60%</div>
        <div class="text">平均泊位占有率</div>
      </div>
      <div class="average">
        <div class="value">60%</div>
        <div class="text">平均泊位周转率</div>
      </div>
    </div>
  </div>
</template>
<script>
import pieData from '../mixins/pieData'
export default {
  mixins: [pieData],
  data () {
    return {
      parkingNum: 893414
    }
  }
}
</script>
<style lang="scss" scoped>
  .box-echart {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .title {
      padding-top: 10px;
      text-align: center;
      color: #89CEFF;
    }
    .parking-num {
      font-size: 22px;
      color: #00F5ED;
      padding: 0 10px;
    }
    .right, .left {
      width: 50%;
      height: 100%;
    }
    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
      .echart {
        flex: 1;
        width: 100%;
      }
    }
    .right {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .average {
        padding: 10px 30px;
        background: #080F3D;
        border: 1px solid #007FFE;
        opacity: 0.65;
        border-radius: 2px;
        margin: 15px 0;
      }
      .num {
        font-size: 22px;
      }
      .value {
        color: #14FFB4;
      }
      .bowei {
        color: #EFF200;
      }
      .text {
        padding: 5px 0;
        color: #60C6FF;
      }
    }
  }
</style>
