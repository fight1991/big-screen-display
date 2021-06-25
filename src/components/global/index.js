import borderBox1 from './border-box'
import borderBox2 from './border-box-2'
import barChart from './common-chart-bar'
import lineChart from './common-chart-line'
import pieChart from './common-chart-pie'

export default {
  install (Vue) {
    Vue.component('borderBox', borderBox1)
    Vue.component('border-box-2', borderBox2)
    Vue.component('barChart', barChart)
    Vue.component('lineChart', lineChart)
    Vue.component('pieChart', pieChart)
  }
}