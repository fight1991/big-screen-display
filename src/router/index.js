import Vue from "vue";
import Router from "vue-router";

const home = () => import("@/views/home/index.vue");
const pandect = () => import("@/views/pandect/index.vue");
const parking = () => import("@/views/parking/parking.vue");


Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
      redirect: '/home/pandect',
      children: [
        {
          path: "/home/pandect",
          name: "pandect",
          meta: { name: "总览" },
          component: pandect,
        },{
          path: "/home/parking",
          name: "parking",
          meta: { name: "智慧停车" },
          component: parking,
        },
      ],
    },
  ],
});
