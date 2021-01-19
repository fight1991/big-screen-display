<template>
  <div class="header">
    <div class="header-left">
      <div class="header-top">
        <img class="header-logo2" src="../../../assets/img/public/china-mobile.png" alt="logo">
<!--        <div class="school-title"></div>-->
        <div class="school-title">移动实验中学</div>
      </div>
      <div class="header-nav">
        <div :class="['nav-item', item.name===currentNav?'active':'']"
             v-for="item in navLeft"
             :key="item.name"
             @click="toggleRoute(item)"
        >{{item.name}}</div>
      </div>
    </div>
    <div class="header-center">{{systemName}}</div>
    <div class="header-right">
      <div class="header-top">
        <div class="time-box"><span class="time-item">{{date}}</span> <span class="time-item">{{time}}</span> <span class="time-item">{{week}}</span></div>
        <div class="logo-out" @click="logout">
          <span>【演示账号】 退出</span>
          <img class="log-out-ico" src="../../../assets/img/public/log-out.png" alt="logout">
        </div>
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
  import {systemLogin} from "../../../assets/js/json.path";
  import {setDocumentTitle} from "../../../assets/js/util";

  export default {
    name: "HeaderNav",
    data(){
      return{
        timer:null,
        time:'',
        date:'',
        week:'',
        currentNav: '',
        systemName:'校长AI助手',
        navLeft:[
          {name: '总览', routeName: 'pandect'},
          {name: '教育教学', routeName: 'pandect'},
          {name: '教学管理', routeName: 'pandect'},
          {name: '学生画像', routeName: 'pandect'},
          {name: '活动轨迹',routeName: 'pandect'},
        ],
        navRight:[
          {name: '光荣榜', routeName: 'pandect'},
          {name: '网络大数据', routeName: 'pandect'},
          {name: '装备大数据', routeName: 'pandect'},
        ],
        day: [
          { id: 0, name: "星期日" },
          { id: 1, name: "星期一" },
          { id: 2, name: "星期二" },
          { id: 3, name: "星期三" },
          { id: 4, name: "星期四" },
          { id: 5, name: "星期五" },
          { id: 6, name: "星期六" }
        ],
      }
    },
    methods:{
      add0(val) {
        if (val < 10) {
          return "0" + val;
        } else {
          return val;
        }
      },
      renderClock(){
        this.timer = setInterval(() => {
          let date = new Date();
          let year = date.getFullYear();
          let month = date.getMonth() + 1;
          let day = date.getDate();
          let week = date.getDay();
          let hour = date.getHours();
          let minute = date.getMinutes();
          let second = date.getSeconds();
          this.time = `${this.add0(hour)}:${this.add0(minute)}:${this.add0(
            second
          )}`;
          this.date = `${year}年${this.add0(month)}月${this.add0(day)}日`;
          for (let key in this.day) {
            if (this.day[key].id === week) {
              this.week = this.day[key].name;
            }
          }
        }, 1000);
      },
      toggleRoute(nav){
        if(!nav) return;
        if(typeof nav== 'string'){
          this.currentNav = nav
        }else{
          const {routeName,name} = nav
          if(!routeName || this.$route.name===routeName) return
          this.$router.push({
            name: routeName
          })
          this.currentNav = name
        }
      },
      logout(){
        this.$router.push({ name: "login" });
      }
    },
    mounted(){
      this.systemName=localStorage.systemName
      this.renderClock()
      if(this.$route.meta){
        this.toggleRoute(this.$route.meta.name)
      }
    },
    created(){
      this.$axios.get(systemLogin).then(res=>{
        if(res.status===200){
          const data = res.data
          let systemName = data.systemName
          localStorage.systemName=systemName
          this.systemName = systemName
          setDocumentTitle(systemName)

        }
      })
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
    /*width: 19.2rem;*/
    width:100%;
transform:translateX(-50%);
    .header-top{
      font-size:22px;
      color:rgba(168,173,201,1);
      display: flex;
    }
    .header-logo{
      width: 52px;
      align-self: flex-start;
      margin-right: 10px;
    }
    .header-logo2{
      height: 40px;
    }

  }
  .header-left{
    flex: 1 0 0;
    .school-title{
      line-height: 40px;
      margin-left: 30px;
      font-size:22px;
      color: #A8ADC9;
    }
    .header-nav{
      /*width: 580px;*/
      /*width: 30.8%;*/
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
    .temperature-box{
      margin-right: 20px;
      display: flex;
      .temperature-ico{
        width: 28px;
        margin-right: 10px;
        display: block;
      }
    }
    .time-box{
      .time-item{}
      margin-right: 10px;
    }
    .logo-out{
      display: flex;
      align-items: center;
      cursor: pointer;
      .log-out-ico{
        width: 20px;
        height: 20px;
        display: block;
        cursor: pointer;
        margin-left: 6px;
      }
    }

    .header-nav{
      /*width: 580px;*/
      height: 42px;
      line-height: 42px;
      display: flex;
      @include background-fill("../../../assets/img/public/nav_right.png");
    }
  }

</style>
