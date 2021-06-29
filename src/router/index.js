import Vue from "vue";
import Router from "vue-router";


const vehicel = () => import("@/views/eleBicycle/index.vue");
const parking = () => import("@/views/parking/parking.vue");
const device = () => import("@/views/parking/device.vue");
const income = () => import("@/views/parking/income.vue");
const place = () => import("@/views/parking/place.vue");

Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      redirect: '/vehicel',
    }, {
      path: '/vehicel',
      name: 'vehicel',
      meta: { name: "电动自行车" },
      component: vehicel,
    }, {
      path: '/parking',
      name: 'parking',
      meta: { name: "智慧停车" },
      component: parking
    }, {
      path: '/device',
      name: 'device',
      meta: { name: "设备实况" },
      component: device
    }, {
      path: '/income',
      name: 'income',
      meta: { name: "收入统计" },
      component: income
    }, {
      path: '/place',
      name: 'income',
      meta: { name: "停车场" },
      component: place
    }
  ],
});
