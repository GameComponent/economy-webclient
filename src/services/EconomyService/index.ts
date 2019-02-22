import {
  EconomyServiceApi,
  EconomyServiceApiFactory,
  Configuration,
} from '@/../vendor/economy-client-ts';

declare module 'vue/types/vue' {
  interface Vue {
    $economyService: EconomyServiceApi;
  }
}

const config = new Configuration({
  basePath: 'http://localhost:8888',
});

const economyServiceApi = new EconomyServiceApi(config);

export default economyServiceApi;

export const EconomyServicePlugin = {
  install: (Vue) => {
    Vue.prototype.$economyService = economyServiceApi;
  },
};
