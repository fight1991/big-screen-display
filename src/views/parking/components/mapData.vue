<template>
  <div class="map-box">
    <div class="title">
      <div class="title-left">
        <div class="title-top">年度交易总金额(万元)</div>
        <div class="title-bottom">
          <div class="single-num" v-for="(item, index) in leftNum" :key="'index'+index">
            <count-to
            :start-val="0"
            :end-val="+item"
            :decimals="0"
            :duration="2600"/>
          </div>
        </div>
      </div>
      <div class="title-center">
        <div class="title-top">今日交易金额(元)</div>
        <div class="title-bottom">
          <div class="single-num" v-for="(item, index) in centerNum" :key="'index'+index">
            <count-to
            :start-val="0"
            :end-val="+item"
            :decimals="0"
            :duration="2600"/>
          </div>
        </div>
      </div>
      <div class="title-right">
        <div class="title-top">今日交易次数</div>
        <div class="title-bottom">
          <div class="single-num" v-for="(item, index) in rightNum" :key="'index'+index">
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
        <div class="num-box" v-for="item in dataItem" :key="item.id">
          <div class="num-value">{{item.value}}</div>
          <div class="num-text">{{item.name}}</div>
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
      leftNum: '84760',
      centerNum: '8325',
      rightNum: '121',
      leftTimer: null,
      centerTimer: null,
      rightTimer: null,
      dataItem: [
        {
          id: 'data1',
          name: '泊位总数(个)',
          value: 34234
        },
        {
          id: 'data2',
          name: '今日停车流量(次)',
          value: 124
        },
        {
          id: 'data3',
          name: '停车压力',
          value: '49.3%'
        },
        {
          id: 'data4',
          name: '高峰时段',
          value: '17:30'
        }
      ]
    }
  },
  mounted () {
    this.$refs.gaodeMap.initAMap()
  },
  created () {
    this.addCountNum()
  },
  methods: {
    addCountNum () {
      this.leftTimer = this.createTimers('leftNum')
      this.centerTimer = this.createTimers('centerNum')
      this.rightTimer = this.createTimers('rightNum')
    },
    createTimers (num) {
      return setInterval(() => {
        let temp = Number(this[num])
        temp+= (parseInt(Math.random() * 10))
        this[num] = temp.toString()
      }, 3000)
    },
  },
  clearTimer () {
    this.leftTimer && clearInterval(this.leftTimer)
    this.centerTimer && clearInterval(this.centerTimer)
    this.rightTimer && clearInterval(this.rightTimer)
  },
  beforeDestroy () {
    this.clearTimer()
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
      margin-top: 15px;
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