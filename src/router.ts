import Vue from "vue";
import Router from "vue-router";

import Dashboard from "./views/Dashboard/index.vue";
import Login from "./views/Login.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Login,
      name: "login"
    },
    {
      path: "/register",
      name: "register",
      component: () =>
        import(/* webpackChunkName: "register" */ "./views/Register.vue")
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      children: [
        {
          path: "/",
          name: "dashboard-index",
          component: () =>
            import(/* webpackChunkName: "home" */ "./views/Dashboard/Home.vue")
        },
        {
          path: "item",
          name: "item",
          component: () =>
            import(
              /* webpackChunkName: "item" */ "./views/Dashboard/Item/index.vue"
            )
        },
        {
          path: "item/new",
          name: "item-new",
          component: () =>
            import(
              /* webpackChunkName: "item" */ "./views/Dashboard/Item/New/index.vue"
            )
        },
        {
          path: "item/:itemId",
          name: "item-detail",
          component: () =>
            import(
              /* webpackChunkName: "item" */ "./views/Dashboard/Item/Detail/index.vue"
            )
        },
        {
          path: "currency",
          name: "currency",
          component: () =>
            import(
              /* webpackChunkName: "currency" */ "./views/Dashboard/Currency/index.vue"
            )
        },
        {
          path: "currency/new",
          name: "currency-new",
          component: () =>
            import(
              /* webpackChunkName: "currency" */ "./views/Dashboard/Currency/New/index.vue"
            )
        },
        {
          path: "currency/:currencyId",
          name: "currency-detail",
          component: () =>
            import(
              /* webpackChunkName: "currency" */ "./views/Dashboard/Currency/Detail/index.vue"
            )
        },
        {
          path: "player",
          name: "player",
          component: () =>
            import(
              /* webpackChunkName: "player" */ "./views/Dashboard/Player/index.vue"
            )
        },
        {
          path: "player/new",
          name: "player-new",
          component: () =>
            import(
              /* webpackChunkName: "player" */ "./views/Dashboard/Player/New/index.vue"
            )
        },
        {
          path: "player/:playerId",
          name: "player-detail",
          component: () =>
            import(
              /* webpackChunkName: "player" */ "./views/Dashboard/Player/Detail/index.vue"
            )
        },
        {
          path: "storage",
          name: "storage",
          component: () =>
            import(
              /* webpackChunkName: "storage" */ "./views/Dashboard/Storage/index.vue"
            )
        },
        {
          path: "storage/new",
          name: "storage-new",
          component: () =>
            import(
              /* webpackChunkName: "storage" */ "./views/Dashboard/Storage/New/index.vue"
            )
        },
        {
          path: "storage/:storageId",
          name: "storage-detail",
          component: () =>
            import(
              /* webpackChunkName: "storage" */ "./views/Dashboard/Storage/Detail/index.vue"
            )
        },
        {
          path: "shop",
          name: "shop",
          component: () =>
            import(
              /* webpackChunkName: "shop" */ "./layouts/ShopProduct/index.vue"
            ),
          children: [
            {
              path: "",
              name: "shop-index",
              component: () =>
                import(
                  /* webpackChunkName: "shop" */ "./views/Dashboard/Shop/index.vue"
                )
            },
            {
              path: "new",
              name: "shop-new",
              component: () =>
                import(
                  /* webpackChunkName: "shop" */ "./views/Dashboard/Shop/New/index.vue"
                )
            },
            {
              path: ":shopId",
              name: "shop-detail",
              component: () =>
                import(
                  /* webpackChunkName: "shop" */ "./layouts/Shop/index.vue"
                ),
              children: [
                {
                  path: "",
                  name: "shop-detail-index",
                  component: () =>
                    import(
                      /* webpackChunkName: "shop" */ "./views/Dashboard/Shop/Detail/index.vue"
                    )
                },
                {
                  path: ":shopId/product",
                  name: "shop-detail-product",
                  component: () =>
                    import(
                      /* webpackChunkName: "shop" */ "./views/Dashboard/Shop/Detail/Product/index.vue"
                    )
                },
                {
                  path: ":shopId/product/new",
                  name: "shop-detail-product-new",
                  component: () =>
                    import(
                      /* webpackChunkName: "shop" */ "./views/Dashboard/Shop/Detail/Product/New/index.vue"
                    )
                }
              ]
            }
          ]
        },
        {
          path: "product",
          name: "product",
          component: () =>
            import(
              /* webpackChunkName: "product" */ "./layouts/ShopProduct/index.vue"
            ),
          children: [
            {
              path: "",
              name: "product-index",
              component: () =>
                import(
                  /* webpackChunkName: "product" */ "./views/Dashboard/Product/index.vue"
                )
            },
            {
              path: "new",
              name: "product-new",
              component: () =>
                import(
                  /* webpackChunkName: "product" */ "./views/Dashboard/Product/New/index.vue"
                )
            },
            {
              path: ":productId",
              name: "product-detail",
              component: () =>
                import(
                  /* webpackChunkName: "product" */ "./views/Dashboard/Product/Detail/index.vue"
                )
            },
            {
              path: ":productId/content",
              name: "product-detail-content",
              // tslint:disable-next-line
              component: () =>
                import(
                  /* webpackChunkName: "product" */ "./views/Dashboard/Product/Detail/Content/index.vue"
                )
            },
            {
              path: ":productId/price",
              name: "product-detail-price",
              // tslint:disable-next-line
              component: () =>
                import(
                  /* webpackChunkName: "product" */ "./views/Dashboard/Product/Detail/Price/index.vue"
                )
            },
            {
              path: ":productId/price/new",
              name: "product-detail-price-new",
              // tslint:disable-next-line
              component: () =>
                import(
                  /* webpackChunkName: "product" */ "./views/Dashboard/Product/Detail/Price/New/index.vue"
                )
            },
            {
              path: ":productId/price/:priceId",
              name: "product-detail-price-detail",
              // tslint:disable-next-line
              component: () =>
                import(
                  /* webpackChunkName: "product" */ "./views/Dashboard/Product/Detail/Price/Detail/index.vue"
                )
            }
          ]
        },
        {
          path: "iam",
          name: "iam",
          component: () =>
            import(
              /* webpackChunkName: "iam" */ "./views/Dashboard/IAM/index.vue"
            )
        },
        {
          path: "config",
          name: "config",
          component: () =>
            import(
              /* webpackChunkName: "config" */ "./views/Dashboard/Config/index.vue"
            )
        },
        {
          path: "logout",
          name: "logout",
          component: () =>
            import(
              /* webpackChunkName: "logout" */ "./views/Dashboard/Logout.vue"
            )
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path === "/") {
    next();
    return;
  }

  if (!localStorage.getItem("token")) {
    next("/");
  }

  next();
});

export default router;
