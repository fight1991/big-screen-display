<template>
  <div class="operation">
    <HeaderNav></HeaderNav>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import HeaderNav from './components/header'
export default {
  components: {
    HeaderNav
  },
  data() {
    return {}
  },
  methods: {},
  created() {},
  mounted(){
  },
  deactivated() {

  }
};
</script>

<style lang="scss">
.operation {
  width: 100%;
  height: 100%;
  overflow-y:hidden;
  color: #fff;
  margin-top: 100px;
  opacity:1;
  .content {
    height: calc(100% - 100px);
    padding: 20px 30px; // 20px;
    box-sizing: border-box;
  }
}
</style>
