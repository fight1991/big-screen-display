<template>
<div class="outer-container">
  <div class="max-screen">
    <HeaderNav>
      <div class="header-slot">
        <router-link to="/parking" class="routeLink">
          <div class="route-item">首页</div>
        </router-link>
        <div class="route-item">收入统计</div>
      </div>
    </HeaderNav>
    <div class="content">
      <div class="pandect">
        <div class="content-top">

        </div>
        <div class="content-bottom"></div>
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
