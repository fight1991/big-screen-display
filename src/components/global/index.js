import borderBox from './border-box'
import barChart from './common-chart-bar'
import lineChart from './common-chart-line'
import pieChart from './common-chart-pie'

export default {
  install (Vue) {
    Vue.component('borderBox', borderBox)
    Vue.component('barChart', barChart)
    Vue.component('lineChart', lineChart)
    Vue.component('pieChart', pieChart)
  }
}