import Vue from 'vue';
import App from './views/App.vue';
import router from './router';
import store from './store/index';
import { EconomyServicePlugin } from '@/services/EconomyService';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

Vue.use(EconomyServicePlugin);
