import Vue from "vue";
import Router from "vue-router";

const home = () => import("@/views/home/index.vue");
const pandect = () => import("@/views/pandect/index.vue");
const login = () => import("@/views/login/index.vue");

Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
      redirect: "/login",
      children: [
        {
          path: "/home/pandect",
          name: "pandect",
          meta: { name: "总览" },
          component: pandect,
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      meta: { name: "登录" },
      component: login,
    },
  ],
});
