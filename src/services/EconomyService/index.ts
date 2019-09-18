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

const REFRESH_ENDPOINT = "http://localhost:8888/refresh";

const hookedFetch: FetchAPI = (url: string, init?: any) => {
  // Inject the token from localStorage into the Authorization header
  const token = localStorage.getItem("access_token");
  if (token && init && init.headers && !init.headers.Authorization) {
    init.headers.Authorization = `Bearer ${token}`;
  }

  return fetch(url, init)
    .then(res => {
      if (res.status === 401) {
        const refreshToken = localStorage.getItem("refresh_token");

        // No refresh token set, lets go back to the login screen
        if (refreshToken == null) {
          localStorage.removeItem("access_token");
          window.location.reload();
          return res;
        }

        // Try to refresh the token
        return economyServiceApi
          .refresh({ token: refreshToken })
          .then(({ accessToken }) => {
            localStorage.setItem("access_token", accessToken);
            init.headers.Authorization = `Bearer ${accessToken}`;

            return fetch(url, init);
          })
          .catch(() => {
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            window.location.reload();

            return res;
          });
      }

      return res;
    })
    .catch(err => {
      localStorage.removeItem("access_token");
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
