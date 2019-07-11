import Vue from "vue";
import App from "./views/App.vue";
import router from "./router";
import store from "./store/index";
import { EconomyServicePlugin } from "@/services/EconomyService";
import VueCodemirror from "vue-codemirror";

import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/theme/lucario.css";

import "./assets/css/styles.scss";

import GcButtonLink from "./components/GcButtonLink.vue";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

Vue.use(EconomyServicePlugin);

Vue.component("gc-button-link", GcButtonLink);

Vue.use(VueCodemirror, {
  options: {
    tabSize: 2,
    mode: "text/javascript",
    theme: "lucario",
    lineNumbers: true,
    line: true
  }
});
