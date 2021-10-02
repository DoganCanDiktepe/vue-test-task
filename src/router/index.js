import Vue from "vue";
import VueRouter from "vue-router";
import Chart from "../views/Chart.vue";
import Datatable from "../views/Datatable.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Chart",
    component: Chart,
  },
  {
    path: "/datatable",
    name: "Datatable",
    component: Datatable,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
