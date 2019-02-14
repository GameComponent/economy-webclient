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
          component: () => import(/* webpackChunkName: "item" */ './views/Dashboard/Item/index.vue'),
        },
        {
          path: 'currency',
          name: 'dashboard-currency',
          component: () => import(/* webpackChunkName: "item" */ './views/Dashboard/Currency/index.vue'),
        },
        {
          path: 'player/:id',
          name: 'dashboard-player-detail',
          component: () => import(/* webpackChunkName: "item" */ './views/Dashboard/Player/Detail/index.vue'),
        },
      ],
    },
  ],
});
