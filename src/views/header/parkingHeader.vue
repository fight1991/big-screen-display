<template>
  <div class="header">
    <div class="header-left">
      <div class="header-left-content">
        <slot></slot>
      </div>
    </div>
    <div class="header-center">智慧停车一张网智慧平台</div>
    <div class="header-right">
      <span class="time-item">{{dateNow}}</span>
      <span class="time-item">{{weekDay}}</span>
      <span class="time-item">{{dateTimeNow}}</span>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'
  export default {
    name: "HeaderNav",
    data(){
      return{
        timer:null,
        currentNav: '',
        dateTimeNow:'',
        dateNow: '',
        weekDay:'',
      }
    },
    methods:{
      renderClock(){
        this.dateNow = moment().format('yyyy年MM月DD日')
        this.weekDay = moment().format('dddd')
        this.timer = setInterval(() => {
          let dateTimeNow = moment().format('HH:mm:ss')
          this.dateTimeNow = dateTimeNow
        }, 1000);
      },
     
    },
    mounted(){
      this.renderClock()
    },
    deactivated() {
      clearInterval(this.timer);
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/mixins";
  .header-nav{
    display: flex;
    margin-top: 8px;
  }
  .header{
    width: 100%;
    // padding: 10px 30px 0;
    height: 100px;
    display: flex;
    // align-items: center;
    background: url('../../assets/img/public/parking-head-bg.png') no-repeat center;
    background-size: 100% 100%;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 50%;
    right: 0;
    z-index: 999;
    width:100%;
    color: #00FFFC;
    transform:translateX(-50%);
    .header-top{
      font-size:22px;
      color:rgba(168,173,201,1);
      display: flex;
    }
  }
  .header-left {
    flex: 1 0 0;
    display: flex;
    justify-content: center;
    .header-left-content {
      width: 100%;
    }
  }

  .header-center{
    font-size:32px;
    font-weight:400;
    opacity: 1;
    width: 703px;
    flex: 703px 0 0;
    height: 100px;
    text-align: center;
    line-height: 100px;
  }

  .header-right{
    flex:  1 0 0;
    display: flex;
    justify-content: flex-end;
    line-height: 55px;
    .time-item {
      padding: 0 20px;
      font-size: 20px;
    }
  }

</style>
