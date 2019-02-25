import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from './views/Dashboard/index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: '/',
          name: 'dashboard-index',
          component: () => import(/* webpackChunkName: "home" */ './views/Dashboard/Home.vue'),
        },
        {
          path: 'home',
          name: 'dashboard-home',
          component: () => import(/* webpackChunkName: "home" */ './views/Dashboard/Home.vue'),
        },
        {
          path: 'about',
          name: 'dashboard-about',
          component: () => import(/* webpackChunkName: "about" */ './views/Dashboard/About.vue'),
        },
        {
          path: 'item',
          name: 'dashboard-item',
          component: () => import(/* webpackChunkName: "item" */ './views/Dashboard/Item/index.vue'),
        },
        {
          path: 'item/new',
          name: 'dashboard-item-new',
          component: () => import(/* webpackChunkName: "item" */ './views/Dashboard/Item/New/index.vue'),
        },
        {
          path: 'item/:id',
          name: 'dashboard-item-detail',
          component: () => import(/* webpackChunkName: "item" */ './views/Dashboard/Item/Detail/index.vue'),
        },
        {
          path: 'currency',
          name: 'dashboard-currency',
          component: () => import(/* webpackChunkName: "currency" */ './views/Dashboard/Currency/index.vue'),
        },
        {
          path: 'currency/new',
          name: 'dashboard-currency-new',
          component: () => import(/* webpackChunkName: "currency" */ './views/Dashboard/Currency/New/index.vue'),
        },
        {
          path: 'currency/:id',
          name: 'dashboard-currency-detail',
          component: () => import(/* webpackChunkName: "currency" */ './views/Dashboard/Currency/Detail/index.vue'),
        },
        {
          path: 'player',
          name: 'dashboard-player',
          component: () => import(/* webpackChunkName: "player" */ './views/Dashboard/Player/index.vue'),
        },
        {
          path: 'player/:id',
          name: 'dashboard-player-detail',
          component: () => import(/* webpackChunkName: "player" */ './views/Dashboard/Player/Detail/index.vue'),
        },
        {
          path: 'storage',
          name: 'dashboard-storage',
          component: () => import(/* webpackChunkName: "storage" */ './views/Dashboard/Storage/index.vue'),
        },
        {
          path: 'storage/new',
          name: 'dashboard-storage-new',
          component: () => import(/* webpackChunkName: "storage" */ './views/Dashboard/Storage/New/index.vue'),
        },
        {
          path: 'storage/:id',
          name: 'dashboard-storage-detail',
          component: () => import(/* webpackChunkName: "storage" */ './views/Dashboard/Storage/Detail/index.vue'),
        },
        {
          path: 'iam',
          name: 'dashboard-iam',
          component: () => import(/* webpackChunkName: "iam" */ './views/Dashboard/IAM/index.vue'),
        },
      ],
    },
  ],
});
