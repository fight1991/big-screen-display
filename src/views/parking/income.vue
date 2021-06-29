<template>
<div class="outer-container">
  <div class="max-screen">
    <HeaderNav>
      <div class="header-slot">
        <router-link to="/parking" class="routeLink">
          <div class="route-item">首页</div>
        </router-link>
        <div class="route-item">收入统计</div>
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
          <border-box-2 title="区域收费情况" height="100%">
            <area-income></area-income>
          </border-box-2>
          <border-box-2 title="支付方式占比" height="100%">
            <pay-percent></pay-percent>
          </border-box-2>
          <border-box-2 title="设备收入占比" height="100%">
            <status-percent></status-percent>
          </border-box-2>
        </div>
        <div class="content-bottom">
          <border-box-2 title="实时交易" height="100%">
            <trade></trade>
          </border-box-2>
          <border-box-2 title="月收入统计" height="100%" size="small">
            <month-income></month-income>
          </border-box-2>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import HeaderNav from '../header/parkingHeader.vue'
import areaIncome from './incomeComponents/areaIncome.vue'
import payPercent from './incomeComponents/payPercent.vue'
import statusPercent from './incomeComponents/statusPercent.vue'
import trade from './incomeComponents/trade'
import monthIncome from './incomeComponents/monthIncome.vue'
export default {
  name: "parking",
  components: {
    HeaderNav,
    areaIncome,
    payPercent,
    statusPercent,
    trade,
    monthIncome
  },
  data() {
    return {
      times: ['2021-06-29', '2021-06-29']
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
    border: 1px dashed #ccc;
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
  grid-template-columns: calc(33.3% - 20px) calc(33.3% - 20px) calc(33.3% - 20px);
  grid-template-rows: 100%;
  grid-gap: 30px;
}
.content-bottom {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 100%;
  grid-gap: 30px;

}
.content-top, .content-bottom {
  height: 100%;
}
</style>
