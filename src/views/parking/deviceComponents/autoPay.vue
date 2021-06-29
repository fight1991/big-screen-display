<template>
  <dv-scroll-board :config="config" style="width:100%;height:100%" />
</template>
<script>
export default {
  data () {
    return {
      config: {
         header: ['停车场', '设备名称', '今日收费(元)', '总收费(元)'],
         headerBGC: 'tranparent',
         oddRowBGC: 'tranparent',
         evenRowBGC: 'tranparent',
         data: [
          ['雪浪停车场', '设备1', '200', '300'],
          ['雪浪停车场', '设备1', '200', '300'],
          ['雪浪停车场', '设备1', '200', '300'],
          ['雪浪停车场', '设备1', '200', '300'],
          ['雪浪停车场', '设备1', '200', '300'],
          ['雪浪停车场', '设备1', '200', '300'],
          ['雪浪停车场', '设备1', '200', '300'],
          ['雪浪停车场', '设备1', '200', '300'],
          ['雪浪停车场', '设备1', '200', '300'],
          ['雪浪停车场', '设备1', '200', '300']
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
