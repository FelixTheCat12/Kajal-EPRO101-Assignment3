import Vue from "vue";

export const config = Object.freeze({
  baseApiUrl: "http://127.0.0.1:8000/api/v1",
});

Vue.$config = config;
Vue.prototype.$config = config;
