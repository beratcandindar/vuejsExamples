import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/modals',
      name: 'modals',
      component: () => import('../views/ModalsView.vue')
    },
    {
      path: '/mainpage',
      name: 'mainpage',
      component: () => import('../views/NavbarView.vue')
    },
    {
      path: '/zikirmatik',
      name: 'zikirmatik',
      component: () => import('../views/ZikirmatikView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
    
  ]
})

export default router
