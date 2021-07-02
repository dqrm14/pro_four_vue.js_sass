import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ALL from "./all/router";
import ADMIN from "./all/admin";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  ...ALL,
  ...ADMIN,


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
