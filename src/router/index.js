/* eslint-disable import/no-unresolved */
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/HomePage/HomePage.vue'),
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('@/pages/ProjectPage/ProjectPage.vue'),
    },
  ],
});

export default router;
