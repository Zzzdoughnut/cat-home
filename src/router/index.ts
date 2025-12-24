import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/daily-life',
      name: 'daily-life',
      component: () => import('../views/DailyLifeView.vue')
    },
    {
      path: '/cat-care',
      name: 'cat-care',
      component: () => import('../views/CatCareView.vue')
    },
    {
      path: '/treats',
      name: 'treats',
      component: () => import('../views/TreatsView.vue')
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../views/GalleryView.vue')
    }
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
