<template>
  <video
      style="width: 100%;height: 100%;"
      class="videoElement"
      autoplay="false"
      :poster="source.poster"
      muted
  ></video>
</template>

<script>
  import {getCamera} from '../api/apis'
  export default {
    name: "flv-player",
    props:{
      sourceSrc:"",
      poster:"",
      source:{
        type:Object,
        default:function(){
          return {
            name: '',
            url: '',
            poster: '',
            id: ''
          }
        }
      }
    },
    data(){
      return {
        flvjs: {},
      }
    },
    methods:{
      openVideo(url, index) {
        let videoElement = this.$el
        if (flvjs.isSupported()) {
          let error_count = 0;
          const _this = this;

          this.flvPlayer = flvjs.createPlayer({
            // type: "flv",
            type: "mp4",
            isLive: true,
            url
          }, {
            enableStashBuffer: false,
            stashInitialSize: "128KB",
            isLive:true,
            autoCleanupMaxBackwardDuration: 100,
            autoCleanupMinBackwardDuration:90,
            // lazyLoadRecoverDuration: 1,
          })
          this.flvPlayer.on(flvjs.Events.MEDIA_INFO, function(e) {
            console.log("MEDIA_INFO");
            console.log(e);
          });
          this.flvPlayer.on(flvjs.Events.MEDIA_INFO, function(e) {
            console.log("MEDIA_INFO");
            console.log(e);
          });

          this.flvPlayer.on(flvjs.Events.STATISTICS_INFO, function(e) {
            if (e.decodedFrames == 0) {
              return;
            }
            if (e.speed > 0) {
              error_count = 0;
            } else {
              error_count += 1;
              if (error_count > 2) {
                // 检测到推送端断流
                _this.flvPlayer.detachMediaElement();
                _this.flvPlayer.destroy();
                console.log("STATISTICS_INFO:Restarting....");
                setTimeout(function () {
                  _this.openVideo(_this.sourceSrc)
                }, 2000);
              }
            }
          });
          this.flvPlayer.on(flvjs.Events.LOADING_COMPLETE, function(e) {
            // 播放结束，重新开始
            // 推送端断流后需要经过大约45秒才能进入这个状态，如果断流后立马恢复推送，将进入错误的状态无法自动恢复播放
            console.log("LOADING_COMPLETE");
            _this.flvPlayer.detachMediaElement();
            _this.flvPlayer.destroy();
            console.log("LOADING_COMPLETE:Restarting....");
            setTimeout(function () {
              _this.openVideo(_this.sourceSrc)
            }, 2000);
          })
          this.flvPlayer.on(flvjs.Events.ERROR, function(e) {
            // 处理网络错误
            console.log("ERROR");
            console.log(e);
            _this.flvPlayer.detachMediaElement();
            _this.flvPlayer.destroy();
            console.log("ERROR:Restarting....");
            setTimeout(function () {
              _this.retryCamera()
            }, 2000);
          });
          this.flvPlayer.attachMediaElement(videoElement);
          this.flvPlayer.load();
          this.flvPlayer.play();

        }
      },
      retryCamera(){
        if(!this.source.id) return;
        let cameraId= [this.source.id]
        let params = "";
        cameraId.forEach(item => {
          params += `&cmdbid[]=${item}`;
        });
        getCamera(params)
        .then(res=>{
          if (res.status === 200) {
            let data = res.data.data;
            data.map(item => {
              this.openVideo(item.streams.flv)
            })
          }
        })
      }
    },
    mounted(){
      this.openVideo(this.sourceSrc)
    },
    updated() {
      this.openVideo(this.sourceSrc)
    },
    destroyed() {
      this.flvPlayer.destroy()
    },
  }
</script>

<style scoped>

</style>
