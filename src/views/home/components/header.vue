<template>
  <div class="header">
    <div class="header-left">
      <div class="header-top">
        <div class="temperature-box">
         <img class="temperature-ico" src="../../../assets/img/public/temp.png" alt="temp">
          <span>18-25℃</span>
        </div>
        <div class="school-title">茶阿二中</div>
      </div>
      <div class="header-nav">
        <div :class="['nav-item', item.name===currentNav?'active':'']"
             v-for="item in navLeft"
             :key="item.name"
             @click="toggleRoute(item)"
        >{{item.name}}</div>
      </div>
    </div>
    <div class="header-center">某某大数据看板</div>
    <div class="header-right">
      <div class="header-top">
        <div class="time-box"><span class="time-item">{{dateNow}}</span> <span class="time-item">{{dateTimeNow}}</span> <span class="time-item">{{weekDay}}</span></div>
      </div>
      <div class="header-nav">
        <div :class="['nav-item', item.name===currentNav?'active':'']"
             v-for="item in navRight"
             :key="item.name"
             @click="toggleRoute(item)">{{item.name}}</div>
      </div>
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
        navLeft:[
          {name: '总览', routeName: 'pandect'},
          {name: '教育教学', routeName: 'pandect'},
        ],
        navRight:[
          {name: '网络大数据', routeName: 'pandect'},
          {name: '装备大数据', routeName: 'pandect'},
        ],
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
  @import "../../../assets/css/mixins";
  .header-nav{
    display: flex;
    margin-top: 8px;
    .nav-item{
      font-size:18px;
      color:rgba(168,173,201,1);
      flex: 1 0 0;
      text-align: center;
      position: relative;
      user-select: none;
      cursor: pointer;
      &:before{
        content: "";
        height: 4px;
        background: #5C58DD;
        border-radius: 4px;
        position: absolute;
        bottom: -2px;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        width: 0;
        transition: all ease .2s;
      }
      &.active{
        position: relative;
        color: #FFFFFF;
        &:before{
          width: 42px;
          opacity: 1;
        }
      }
      &:after{
        content: "|";
        font-size: 14px;
        opacity:1;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
      &:last-child{
        &:after{
          display: none;
        }
      }
    }
  }
  .header{
    width: 100%;
    padding: 10px 30px 0;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
   position: fixed;
    top: 0;
    left: 50%;
    right: 0;
    z-index: 999;
    width:100%;
transform:translateX(-50%);
    .header-top{
      font-size:22px;
      color:rgba(168,173,201,1);
      display: flex;
    }
  }
  .header-left{
    flex: 1 0 0;
     .temperature-box{
      margin-right: 10px;
      display: flex;
      align-items: center;
      .temperature-ico{
        width: 30px;
        margin-right: 10px;
        display: block;
      }
    }
    .school-title{
      margin-left: 30px;
      font-size:22px;
      color: #A8ADC9;
    }
    .header-nav{
      height: 42px;
      line-height: 42px;
      display: flex;
      @include background-fill("../../../assets/img/public/nav_left.png");
    }
  }

  .header-center{
    font-size:32px;
    font-weight:400;
    color:rgba(255,255,255,1);
    padding-top: 27px;
    opacity:1;
    width: 703px;
    flex: 703px 0 0;
    height: 88px;
    background: url("../../../assets/img/public/header_center.png") no-repeat center center;
    background-size: 100% 100%;
    text-align: center;
    line-height: 1em;
  }

  .header-right{
    flex:  1 0 0;
    .header-top{
      justify-content: flex-end;
      font-size: 20px;
    }
    .header-nav{
      height: 42px;
      line-height: 42px;
      display: flex;
      @include background-fill("../../../assets/img/public/nav_right.png");
    }
  }

</style>
