<template>
  <div class="messageNotice">
    <div v-if="messageParams.status==0">
      <!--网络异常-->
      <img src="../../assets/img/public/msg_net_error.png" alt />
      网络错误,请稍后重试
    </div>
    <div v-if="messageParams.status==1">
      <!--服务器错误-->
      <img src="../../assets/img/public/msg_ser_error.png" alt="">
      {{messageParams.message}}
    </div>
    <div v-if="messageParams.status==2">
      <!--数据为空-->
      <img src="../../assets/img/public/msg_null.png" alt="">
      {{messageParams.message?messageParams.message:"暂无数据"}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    messageParams: Object
  },
  data() {
    return {};
  },
  watch: {
    messageParams: {
      handler: function() {
      },
      deep: true
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.messageNotice {
  color: #515875;
  font-size: 0.14rem;
  text-align:center;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-flow:column;
  align-items: center;
  & > div{
    height: auto;
  }
  img{display: block;margin:0 auto}
}
</style>
