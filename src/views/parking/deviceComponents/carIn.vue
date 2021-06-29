<template>
<dv-scroll-board :config="config" style="width:100%;height:100%" />
</template>
<script>
export default {
  data () {
    return {
      config: {
         header: ['入场口', '车牌号', '交易时间'],
         headerBGC: 'tranparent',
         oddRowBGC: 'tranparent',
         evenRowBGC: 'tranparent',
         data: [
          ['一号进口', '苏A124342', '11:30:02'],
          ['一号进口', '苏A124342', '11:30:02'],
          ['一号进口', '苏A124342', '11:30:02'],
          ['一号进口', '苏A124342', '11:30:02'],
          ['一号进口', '苏A124342', '11:30:02'],
          ['一号进口', '苏A124342', '11:30:02'],
          ['一号进口', '苏A124342', '11:30:02'],
          ['一号进口', '苏A124342', '11:30:02'],
          ['一号进口', '苏A124342', '11:30:02'],
          ['一号进口', '苏A124342', '11:30:02']
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
