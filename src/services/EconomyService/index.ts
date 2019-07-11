import {
  EconomyServiceApi,
  EconomyServiceApiFactory,
  Configuration,
  FetchAPI
} from "@/../vendor/economy-client";

import * as portableFetch from "portable-fetch";

declare module "vue/types/vue" {
  interface Vue {
    $economyService: EconomyServiceApi;
  }
}

const config = new Configuration({
  basePath: "http://localhost:8888"
});

const hookedFetch: FetchAPI = (url: string, init?: any) => {
  // Inject the token from localStorage into the Authorization header
  const token = localStorage.getItem("token");
  if (token && init && init.headers && !init.headers.Authorization) {
    init.headers.Authorization = `Bearer ${token}`;
  }

  return fetch(url, init)
    .then(res => {
      if (res.status === 401) {
        localStorage.removeItem("token");
        window.location.reload();
        return res;
      }

      return res;
    })
    .catch(err => {
      localStorage.removeItem("token");
      window.location.href = `${window.location.origin}?reason=server_down`;
      return err;
    });
};

const economyServiceApi = EconomyServiceApiFactory(
  config,
  hookedFetch,
  config.basePath
);

export default economyServiceApi;

export const EconomyServicePlugin = {
  install: Vue => {
    Vue.prototype.$economyService = economyServiceApi;
  }
};
