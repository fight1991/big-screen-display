<template>
  <div class="map-box">
    <div class="title">
      <div class="title-left">
        <div class="title-top">今日过车辆</div>
        <div class="title-bottom">
          <div class="single-num" v-for="(item, index) in todayNum" :key="'index'+index">
            <count-to
            :start-val="0"
            :end-val="+item"
            :decimals="0"
            :duration="2600"/>
          </div>
        </div>
      </div>
       <div class="title-right">
        <div class="title-top">月过车辆</div>
        <div class="title-bottom">
          <div class="single-num" v-for="(item, index) in monthNum" :key="'index'+index">
            <count-to
            :start-val="0"
            :end-val="+item"
            :decimals="0"
            :duration="2600"/>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="map">
        <a-map ref="gaodeMap" :autoGps="true"></a-map>
      </div>
      <div class="car-num">
        <div class="num-box">
          <div class="num-value">32134</div>
          <div class="num-text">车辆数</div>
        </div>
        <div class="num-box">
          <div class="num-value">3243</div>
          <div class="num-text">设备数</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import aMap from '@/components/aMap'
import countTo from 'vue-count-to'
export default {
  components: {
    aMap,
    countTo
  },
  data () {
    return {
      map: null,
      AMap: null,
      todayNum: '84760',
      monthNum: '8389925',
      todayTimer: null,
      monthTimer: null
    }
  },
  mounted () {
    this.$refs.gaodeMap.initAMap()
  },
  created () {
    this.addCountNum('todayNum')
    this.addCountNum('monthNum')
  },
  methods: {
    addCountNum (num) {
      this.todayTimer = this.createTimers(num)
    },
    createTimers (num) {
      return setInterval(() => {
        let temp = Number(this[num])
        temp+= (parseInt(Math.random() * 10))
        this[num] = temp.toString()
      }, 3000)
    },
  },
  beforeDestroy () {
    this.todayTimer && clearInterval(this.todayTimer)
    this.monthTimer && clearInterval(this.monthTimer)
  }
}
</script>
<style lang="scss" scoped>
.bottom {
  position: relative;
   .map {
    height: 520px;
    flex: 1
  }
  .car-num {
    position: absolute;
    width: 150px;
    bottom: 0;
    right: 0;
    .num-box {
      width: 100%;
      background: #080F3D;
      border: 1px solid #007FFE;
      opacity: 0.65;
      border-radius: 2px;
      text-align: center;
      padding: 10px 0;
      margin-top: 20px;
      font-size: 18px;
      .num-text {
        font-size: 15px;
        color: #28DEFF;
      }
    }
  }

}
  .title {
    height: 100px;
    color: #319EFF;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 18px;
    padding-bottom: 20px;
  }
  .title-top {
    padding-bottom: 10px;
    text-align: center;
  }
  .title-bottom {
    font-size: 36px;
    font-weight: bold;
    color: #27D9FF;
    display: flex;
    align-items: center;
    .single-num {
      background: #143C94;
      border: 1px solid #0071F1;
      border-radius: 4px;
      padding: 5px 8px;
      margin: 0 4px;
    }
  }
</style>