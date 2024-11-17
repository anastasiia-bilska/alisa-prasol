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
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      const element = document.querySelector(to.hash);
      if (element) {
        const topOffset = 70; // Adjust this value as needed
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = window.scrollY + elementPosition - topOffset;

        return window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }

    return savedPosition || { top: 0 }; // Default scroll behavior
  },
});

export default router;
