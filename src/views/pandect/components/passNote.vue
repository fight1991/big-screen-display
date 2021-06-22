<template>
<dv-scroll-board :config="config" style="width:100%;height:100%" />
</template>
<script>
export default {
  data () {
    return {
      config: {
         header: ['车牌号', '途经点', '途径时间'],
         headerBGC: 'tranparent',
         oddRowBGC: 'tranparent',
         evenRowBGC: 'tranparent',
         data: [
          ['苏B9T32R', '人民路交叉口', '11:30:02'],
          ['苏E9T32R', '人民路交叉口', '11:30:02'],
          ['沪B9T32R', '人民路交叉口', '11:30:02'],
          ['苏B9T32R', '人民路交叉口', '11:30:02'],
          ['疆B9T32R', '人民路交叉口', '11:30:02'],
          ['蒙B9T32R', '人民路交叉口', '11:30:02'],
          ['京B9T32R', '人民路交叉口', '11:30:02'],
          ['苏B9T32R', '人民路交叉口', '11:30:02'],
          ['苏B9T32R', '人民路交叉口', '11:30:02'],
          ['苏B9T32R', '人民路交叉口', '11:30:02']
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
