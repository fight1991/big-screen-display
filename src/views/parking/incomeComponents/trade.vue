<template>
  <dv-scroll-board :config="config" style="width:100%;height:100%" />
</template>
<script>
export default {
  data () {
    return {
      config: {
         header: ['车牌号', '交易金额', '所在停车场', '交易时间'],
         headerBGC: 'tranparent',
         oddRowBGC: 'tranparent',
         evenRowBGC: 'tranparent',
         data: [
          ['苏B9T32R', '15', '堰桥工业园区', '11:30:02'],
          ['苏E9T32R', '15', '堰桥工业园区', '11:30:02'],
          ['沪B9T32R', '15', '堰桥工业园区', '11:30:02'],
          ['苏B9T32R', '15', '堰桥工业园区', '11:30:02'],
          ['疆B9T32R', '15', '堰桥工业园区', '11:30:02'],
          ['蒙B9T32R', '15', '堰桥工业园区', '11:30:02'],
          ['京B9T32R', '15', '堰桥工业园区', '11:30:02'],
          ['苏B9T32R', '15', '堰桥工业园区', '11:30:02'],
          ['苏B9T32R', '15', '堰桥工业园区', '11:30:02'],
          ['苏B9T32R', '15', '堰桥工业园区', '11:30:02']
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
