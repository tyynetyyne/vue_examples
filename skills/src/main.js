import Vue from "vue";
import App from "./App.vue";
import VeeValidate from "vee-validate";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(VeeValidate);

new Vue({
  el: "#app",
  render: h => h(App),
  router
}).$mount("#app");
