<template>
  <div class="box">
    <div class="item" v-for="item in roadData" :key="item.id">
      <div class="name">{{item.roadName}}</div>
      <div class="progress">
        <div class="inside-value" :style="{width: item.value + '%'}"></div>
      </div>
      <div class="value">{{item.value/10}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      color: '',
      roadData: [
        {
          id: 'road1',
          roadName: '人民路交叉口',
          value: 88
        },{
          id: 'road2',
          roadName: '清舒道交叉口',
          value: 61
        },{
          id: 'road3',
          roadName: '蠡湖大道交叉口',
          value: 53
        },{
          id: 'road4',
          roadName: '具区路交叉口',
          value: 92
        },{
          id: 'road5',
          roadName: '干城路交叉口',
          value: 77
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.box {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
}
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    .progress {
      flex: 1;
      background: #2F415E;
      height: 6px;
      border-radius: 2px;
    }
    .inside-value {
      transition: all .3s;
      height: 100%;
      background: linear-gradient(-90deg, #4BE2EC, #0071FC);
      border-radius: 2px;
    }
    .name {
      width: 100px;
      margin: 0 30px;
      color: #89CEFF;
    }
    .value {
      width: 50px;
      padding: 0 30px;
      color: #00E3FF;
    }
  }
</style>