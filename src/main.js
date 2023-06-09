import Vue from "vue";
import App from "./App.vue";
import { router } from "@/plugins/vue-router";
import store from "./store";
import "@/plugins/bootstrap-vue";
import "@/plugins/font-awesome";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
