import { createWebHistory, createRouter } from 'vue-router';
import { RouteRecordRaw } from 'vue-router';

let routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('./pages/Home.vue'),
    meta: {
      layout: 'app',
    },
  },
  {
    path: '/prizes/:id',
    name: 'prize-details',
    component: () => import('./pages/PrizeDetails.vue'),
    meta: {
      layout: 'app',
    },
  },
  {
    path: '/login',
    name: 'auth.login',
    component: () => import('./pages/auth/Login.vue'),
    meta: {
      layout: 'auth',
    },
  },
  {
    path: '/register',
    name: 'auth.register',
    component: () => import('./pages/auth/Register.vue'),
    meta: {
      layout: 'auth',
    },
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('./pages/404.vue'),
    meta: {
      layout: 'app',
    },
  },
];

let router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
