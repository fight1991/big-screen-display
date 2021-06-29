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
        
      </div>
    </div>
  </div>
</div>
</template>

<script>
import HeaderNav from '../header/parkingHeader.vue'

export default {
  name: "parking",
  components: {
    HeaderNav,
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
</style>
