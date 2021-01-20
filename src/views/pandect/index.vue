<template>
  <div class="pandect">
    <div class="top-row">
      <!-- 设备在线率 -->
      <div class="equipmentOnline wrap">
        <div class="jiao left-top"></div>
        <div class="jiao right-bottom"></div>
        <div class="wrap-title wrap-title18">设备在线率</div>
        <div class="wrap-content">
          <div class="equipmentTotal">
            <div>292</div>
            <div>设备总数</div>
          </div>
          <chartPie :idName="'equipmentOnline'" :optionData="equipmentOnline" />
        </div>
      </div>
      <!-- 人员统计 -->
      <div class="awards">
        <div class="awards-details person-details">
          <div v-for="(item,index) in totalNum" :key="index">
            <p>{{item.title}}</p>
            <div>
              <img :src="item.img" />
              <span
                class="awards-times"
                v-for="(i,index) in item.num"
                :key="index"
              >{{item.num[index]}}</span>
              <span v-show="item.title !== '班级数'">人</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 门禁 -->
      <div class="access wrap">
        <div class="jiao left-top"></div>
        <div class="jiao right-bottom"></div>
        <div class="wrap-title">校园门禁</div>
        <div class="wrap-content">
          <div class="access-statistics">
            <div class="access-statistics-item">
              <div
                v-if="access.series[0].data.length"
              >{{access.series[0].data[0].value + access.series[0].data[1].value}}</div>
              <div>总通过人次</div>
            </div>
            <div class="access-statistics-item">
              <div v-if="access.series[0].data.length">{{access.series[0].data[0].value}}</div>
              <div>正常通过次数</div>
            </div>
            <div class="access-statistics-item">
              <div v-if="access.series[0].data.length">{{access.series[0].data[1].value}}</div>
              <div>异常报警次数</div>
            </div>
          </div>
          <chartPie class="access-chartPie" :idName="'access'" :optionData="access" />
        </div>
      </div>
    </div>
    <div class="pandect-two">
      <div>
        <!-- 设备类型 -->
        <div class="equipmentType wrap">
          <div class="jiao left-top"></div>
          <div class="wrap-title">设备类型</div>
          <div class="wrap-content">
            <div v-for="(item,index) in equipmentOType" :key="index">
              <img :src="item.img" />
              <div>
                <p>{{item.name}}</p>
                <p v-show="item.num">
                  <span>{{item.num}}</span>
                  <span>台</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- 消费 -->
        <div class="consumption wrap">
          <div class="jiao left-top"></div>
          <div class="wrap-title">消费</div>
          <div class="wrap-content">
            <div class="left-content">
              <div>
                <p>{{consumptionTime}}月消费金额</p>
                <p>
<!--                  <span>{{ money }}</span>-->
                  <span>{{ formatMoney }}</span>
                  <span class="times">{{money>100000?'万元':'元'}}</span>
                </p>
              </div>
              <div>
                <p>{{consumptionTime}}月消费次数</p>
                <p>
                  <span>{{consumptionTimeNum}}</span>
                  <span class="times">次</span>
                </p>
              </div>
            </div>
            <div class="right-content">
              <chartPie :idName="'chartPie'" :optionData="consumptionData" />
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div>
        <!-- 平安校园 -->
        <div class="campus wrap">
          <div class="jiao left-top"></div>
          <div class="jiao right-bottom"></div>
          <div class="wrap-title">平安校园</div>
          <div class="wrap-content">
            <el-carousel arrow="never">
              <el-carousel-item
                v-for="(item, index) in campus"
                :key="'campus'+index"
                class="campus-item"
              >
                <div v-for="(v, i) in item" :key="'campus-item'+i">
                  <div class="campus-name">
                    <img src="../../assets/img/pandect/camera-icon1.png" />
                    <span>{{v.name}}</span>
                    <img src="../../assets/img/pandect/camera-icon2.png" />
                  </div>
                  <div class="campus-url">
                   <video
                     style="width: 100%;height: 100%;"
                     class="videoElement"
                     autoplay
                     muted
                     constrols
                     :poster = "v.poster"
                     :src="v.url"
                     ></video>
                    <!-- <FlvPlayer :source="v" :sourceSrc="v.url"/> -->
                  </div>
                </div>
              </el-carousel-item>
            </el-carousel>
            <!-- <video style="width: 100%;height: 100%;" class="videoElement" id="videoElement" controls></video> -->
          </div>
        </div>
      </div>
    </div>
    <div class="school"></div>
  </div>
</template>

<script>
import chartPie from "@/components/common-chart-pie";
import {pandectUrl, pandectEquipmentTypeUrl, pandectEquipmentOnlineUrl, pandectAccessUrl} from '@/assets/js/json.path'
import FlvPlayer from '@/components/flv-player'
import {getCamera} from '../../api/apis'
import {formatNumUnit} from '@/assets/js/util'
export default {
  name: "pandect",
  components: {
    chartPie, FlvPlayer
  },
  computed:{
    formatMoney(){
      let money = this.money *1
      if(money>100000){
        return (money/10000).toFixed(2)
      }else{
        return money
      }
    }
  },
  data() {
    return {
      flvjs: {},
      videoOptions1: [
        {
          type: "application/x-mpegURL",
          src: ""
        }
      ],
      // 设备在线率
      equipmentOnline: {
        legend: {
          show: true,
          orient: "vertical",
          itemGap: Number(this.echartsSize(12)),
          itemWidth: Number(this.echartsSize(12)),
          itemHeight: Number(this.echartsSize(12)),
          textStyle: {
            color: "#fff",
            fontSize: this.echartsSize(12)
          },
          right: '10%',
          top: 'center',
          formatter: name => {
            let sum = 0;
            for (const v of this.equipmentOnline.series[0].data) {
              sum += v.value;
            }
            for (const k of this.equipmentOnline.series[0].data) {
              if (k.name === name) {
                return `${name}    ${k.value}    ${(
                  (k.value / sum) *
                  100
                ).toFixed(0)}%`;
              }
            }
          }
        },
        series: [{
          center: ["20%", "50%"],
          radius: ["70%", "80%"],
          label: {
            show: false,
            normal: {show: false}
          },
          labelLine:{
            show:false,
          },
          data: []
        }]
      },
      equipmentTotal: 0,
      // 人员统计
      totalNum: [
        {
          title: "学校总人数",
          img: require("@/assets/img/pandect/num-icon1.png"),
          num: [4,0,8,3]
        },
        {
          title: "教师人数",
          img: require("@/assets/img/pandect/num-icon2.png"),
          num: [2,2,8]
        },
        {
          title: "学生人数",
          img: require("@/assets/img/pandect/num-icon3.png"),
          num: [3,3,7,8]
        },
        {
          title: "班级数",
          img: require("@/assets/img/pandect/num-icon4.png"),
          num: [4,9]
        }
      ],
      // 门禁
      access: {
        series:[
          {
            center: ["50%", "50%"],
            radius: ["30%", "60%"],
            roseType: "radius",
            label: {
              padding: [0, -100, 20, -100],
              textStyle: {fontSize: this.echartsSize(14)},
              formatter: params => {
                return `${params.name}  ${params.percent}%`;
              }
            },
            data: []
          }
        ],
      },
      // 平安校园
      campus: [],
      videoList: [],
      //设备类型
      equipmentOType: [
        {
          name: "一体机",
          img: require("@/assets/img/pandect/type-icon1.png"),
          num: 0
        },
        {
          name: "智慧黑板",
          img:require("@/assets/img/pandect/type-icon4.png"),
          num: 0
        },
        {
          name: "电子班牌",
          img: require("@/assets/img/pandect/type-icon3.png"),
          num: 0
        },
        {
          name: "摄像头",
          img: require("@/assets/img/pandect/type-icon2.png"),
          num: 0
        },
        {
          name: "消费机",
          img: require("@/assets/img/pandect/type-icon5.png"),
          num: 0
        },
        {
          name: "录播教室",
          img: require("@/assets/img/pandect/type-icon6.png"),
          num: 0
        }
      ],
      //消费
      consumptionTime: '',
      consumptionData: {
        legend:{ show: false},
        series:[
          {
            center: ["50%", "50%"],
            radius: ["40%", "50%"],
            labelLine: {
              normal: {
                length: this.echartsSize(10),
                length2: this.echartsSize(100),
                lineStyle: {
                  width:this.echartsSize(2),
                  color: "#48476A"
                }
              }
            },
            label: {
              normal: {
                formatter: params => {
                  return (
                    "{a| " +
                    params.name +
                    "}" +
                    "\n" +
                    "{b| " +
                    params.value +
                    "次}" +
                    "{c|" +
                    " " +
                    params.percent +
                    "%}"
                  );
                },
                borderWidth: 0,
                borderRadius: 4,
                padding: [0, -this.echartsSize(100), this.echartsSize(30), -this.echartsSize(100)],
                height: this.echartsSize(50),
                fontSize: 14,
                color: "#3494BD",
                rich: {
                  a: {
                    fontSize: this.echartsSize(12),
                    lineHeight: this.echartsSize(20),
                    color: "#FFA366",
                  },
                  b: {
                    fontSize: this.echartsSize(12),
                    lineHeight: this.echartsSize(20),
                    color: "#FFA366"
                  },
                  c: {
                    fontSize: this.echartsSize(12),
                    lineHeight: this.echartsSize(20),
                    color: "#FFA366"
                  }
                }
              }
            },
            data: []
          }
        ],
      },
      money: "",
      consumptionTimeNum:""
    };
  },
  created() {
    this.generateData()
  },
  methods: {
    getVideoLists() {
      this.videoList = []
      let cameraId= this.cameraInfo.idLists
      if(cameraId.length<=0) return;
      let params = "";
      cameraId.forEach(item => {
        params += `&cmdbid[]=${item}`;
      });
        let mp4Base = 'http://116.62.125.88:10000/video/'
        let videoLists = [
          {
            name: '周界西北',
            url: `${mp4Base}/1.mp4`,
            poster: require('../../assets/img/pandect/4800.png'),
            id: 1,
          },{
            name: '周界东南',
            url: `${mp4Base}/2.mp4`,
            poster: require('../../assets/img/pandect/4799.png'),
            id: 1,
          },{
            name: '南门东北角',
            url: `${mp4Base}/3.mp4`,
            poster: require('../../assets/img/pandect/4574.png'),
            id: 1,
          },{
            name: '足球场主席台',
            url: `${mp4Base}/4.mp4`,
            poster: require('../../assets/img/pandect/4123.png'),
            id: 1,
          },{
            name: '西门东南角',
            url: `${mp4Base}/5.mp4`,
            poster: require('../../assets/img/pandect/5101.png'),
            id: 1,
          },{
            name: '西门周界',
            url: `${mp4Base}/1.mp4`,
            poster: require('../../assets/img/pandect/4800.png'),
            id: 1,
          }
        ]
         this.campus = [videoLists];
         this.videoList.push(...videoLists);
    },
    initData() {
      this.getAccessData()
    },
    // 门禁
    getAccessData() {
      this.access.series[0].data =  [
        { name: "正常通过", itemStyle: { color: "#07D68C" }, value: 114941 },
        { name: "异常报警", itemStyle: { color: "#FEBC31" }, value:21007 }
      ]
    },
    generateData(){
      this.$axios.get(pandectUrl).then(res=>{
        if(res.status===200){
          const result = res.data

          this.equipmentOnline.series[0].data = [
            { name: "设备在线", itemStyle: { color: "#07D68C" }, value: 609 },
            { name: "设备离线", itemStyle: { color: "#6699FF" }, value: 30 },
            { name: "设备故障", itemStyle: { color: "#FD5A93" }, value: 0 }
          ]
          this.equipmentTotal = 639
          this.access.series[0].data = [
            { name: "正常通过", itemStyle: { color: "#07D68C" }, value: 12021 },
            { name: "异常报警", itemStyle: { color: "#FEBC31" },value: 3333 }
            ]
          this.consumptionData.series[0].data = [
            {
              name: "初一",
              itemStyle: { color: "#FEBC31" },
              value: 521
            },
            {
              name: "初二",
              itemStyle: { color: "#457DFD" },
              value: 622
            },
            {
              name: "初三",
              itemStyle: { color: "#FD5A93" },
              value: 777
            }
          ]

          for (const v of result.equipmentOType) {
            for (const k of this.equipmentOType) {
              if (v.name === k.name) {
                k.num = v.num;
              }
            }
          }
          this.campus = result.campus;
          this.money = result.consumptionData.money
          this.consumptionTimeNum = 1212
          // 摄像头id
          this.cameraInfo = result.cameraInfo

        }
      }).then(()=>{
        this.getVideoLists()
      }).catch(err=>{
        console.log('总览请求错误',err)
      })
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./pandect";

</style>
