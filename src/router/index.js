import Vue from "vue";
import VueRouter from "vue-router";
import List from "../views/List.vue";
import Dashboard from "../views/Dashboard.vue";
import axios from 'axios';
Vue.prototype.$axios = axios;

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/list",
    name: "list",
    component: List,
  }
];

const router = new VueRouter({
  base : '/',
  mode: 'history',
  routes,
});

export default router;
