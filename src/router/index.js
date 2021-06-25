import Vue from "vue";
import Router from "vue-router";


const vehicel = () => import("@/views/eleBicycle/index.vue");
const parking = () => import("@/views/parking/parking.vue");


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
    }
  ],
});
