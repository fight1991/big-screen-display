<template>
<div class="outer-container">
  <div class="max-screen">
    <HeaderNav>
      <div class="header-slot">
        <router-link to="/parking" class="routeLink">
          <div class="route-item">首页</div>
        </router-link>
        <div class="route-item">安临停车场</div>
        <div class="date-time">
          <el-date-picker
            v-model="times"
            type="daterange"
            value-format="yyyy-MM-dd"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </div>
      </div>
    </HeaderNav>
    <div class="content">
      <div class="pandect">
        <div class="content-top">
          <border-box-2 title="安临停车场" height="100%">
            <parking-place></parking-place>
          </border-box-2>
          <border-box-2 title="月收入统计" height="100%" size="small">
            <month-income></month-income>
          </border-box-2>
        </div>
        <div class="content-bottom">
          <border-box-2 title="月车流量分布" height="100%" size="small">
            <car-flow></car-flow>
          </border-box-2>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import HeaderNav from '../header/parkingHeader.vue'
import monthIncome from './incomeComponents/monthIncome.vue'
import parkingPlace from './placeComponents/parkingPlace.vue'
import carFlow from './placeComponents/carFlow.vue'
export default {
  name: "parking",
  components: {
    HeaderNav,
    monthIncome,
    parkingPlace,
    carFlow
  },
  data() {
    return {
      times: ['2021-06-29', '2021-06-29'],
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "./parking";
.outer-container {
  background:url("../../assets/img/pandect/bg.png") no-repeat;
  background-size: cover;
}
.routeLink {
  color: inherit;
  text-decoration: none;
}
.date-time {
  display: flex;
  align-items: center;
  padding: 2px 0 0 10px;
  .el-input__inner {
    background-color: transparent;
    border: 1px dashed #89CEFF;
  }
  .el-range-input {
    background-color: transparent;
  }
  
}
.header-slot {
  display: flex;
  justify-content: flex-start;
  padding-left: 50px;
  .route-item {
    width: 80px;
    height: 50px;
    margin-top: 5px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    transition: all .5s;
    &:hover {
      transform: scale(1.2);
    }
  }
  // align-items: center;
}
.pandect {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: calc(50% - 15px) calc(50% - 15px);
  grid-gap: 30px;
}
.content-top {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 100%;
  grid-gap: 30px;
}
.content-bottom {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
}
.content-top, .content-bottom {
  height: 100%;
}
</style>
