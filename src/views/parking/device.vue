<template>
<div class="outer-container">
  <div class="max-screen">
    <HeaderNav>
      <div class="header-slot">
        <router-link to="/parking" class="routeLink">
          <div class="route-item">首页</div>
        </router-link>
        <div class="route-item">设备实况</div>
      </div>
    </HeaderNav>
    <div class="content">
      <div class="pandect">
        <border-box-2 title="车辆进场" size="small" height="100%">
          <car-in></car-in>
        </border-box-2>
        <border-box-2 title="车辆离场" size="small" height="100%">
          <car-in></car-in>
        </border-box-2>
        <border-box-2 title="设备运行状态" size="small" height="100%">
          <status></status>
        </border-box-2>
        <border-box-2 title="自助缴费机" size="small" height="100%">
          <auto-pay></auto-pay>
        </border-box-2>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import HeaderNav from '../header/parkingHeader.vue'
import carIn from './deviceComponents/carIn.vue'
import status from './deviceComponents/status.vue'
import autoPay from './deviceComponents/autoPay.vue'
export default {
  name: "parking",
  components: {
    HeaderNav,
    carIn,
    status,
    autoPay
  },
  data() {
    return {
   
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
  grid-template-columns: calc(50% - 15px) calc(50% - 15px);
  grid-template-rows: calc(50% - 15px) calc(50% - 15px);
  grid-gap: 30px;
}
</style>
