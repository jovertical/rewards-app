import { createWebHistory, createRouter } from 'vue-router';
import { RouteRecordRaw } from 'vue-router';

let routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('./pages/Home.vue'),
  },
  {
    path: '/prizes/:id',
    name: 'prize-details',
    component: () => import('./pages/PrizeDetails.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('./pages/404.vue'),
  },
];

let router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
