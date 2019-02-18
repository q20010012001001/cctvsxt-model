import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "lib-flexible";
import "@/assets/less/common.less";
import "@/assets/iconfont/iconfont.css";
// import axios from "@/assets/ajax/axios.js";
// Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
