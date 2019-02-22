import {
    EconomyServiceApi,
    EconomyServiceApiFactory,
} from '@/../vendor/economy-client-ts';
  
const economyServiceApi = new EconomyServiceApi();
economyServiceApi.basePath = 'http://localhost:8888';

export default economyServiceApi;

export const EconomyServicePlugin = {
    install: (Vue) => {
        Vue.prototype.$economyService = economyServiceApi;
    },
};
