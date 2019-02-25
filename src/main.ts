import Vue from 'vue';
import App from './views/App.vue';
import router from './router';
import store from './store/index';
import { EconomyServicePlugin } from '@/services/EconomyService';

import GcButtonLink from './components/GcButtonLink.vue';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

Vue.use(EconomyServicePlugin);

Vue.component('gc-button-link', GcButtonLink);
