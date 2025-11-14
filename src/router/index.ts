import { createRouter, createWebHistory } from 'vue-router'

// import HomeView from '../view/page1/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/view/Page1/index.vue'),
    },
  ],
})

export default router
