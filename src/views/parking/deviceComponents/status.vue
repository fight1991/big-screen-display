<template>
  <dv-scroll-board :config="config" style="width:100%;height:100%" />
</template>
<script>
export default {
  data () {
    return {
      config: {
         header: ['停车场', '设备名称', '工作状态', '更新时间'],
         headerBGC: 'tranparent',
         oddRowBGC: 'tranparent',
         evenRowBGC: 'tranparent',
        //  align: ['center'],
         data: [
          ['雪浪停车场', '设备1', '正常', '11:30:02'],
          ['雪浪停车场', '设备1', '正常', '11:30:02'],
          ['雪浪停车场', '设备1', '<span style="color:#fb7293;">异常</span>', '11:30:02'],
          ['雪浪停车场', '设备1', '正常', '11:30:02'],
          ['雪浪停车场', '设备1', '正常', '11:30:02'],
          ['雪浪停车场', '设备1', '<span style="color:#fb7293;">异常</span>', '11:30:02'],
          ['雪浪停车场', '设备1', '正常', '11:30:02'],
          ['雪浪停车场', '设备1', '正常', '11:30:02'],
          ['雪浪停车场', '设备1', '正常', '11:30:02'],
          ['雪浪停车场', '设备1', '正常', '11:30:02']
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
