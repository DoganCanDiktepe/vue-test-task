import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueDragResize from "vue-drag-resize";
import HighchartsVue from "highcharts-vue";

Vue.config.productionTip = false;
Vue.component("vue-drag-resize", VueDragResize);
Vue.use(HighchartsVue);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
