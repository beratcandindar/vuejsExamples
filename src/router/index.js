import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/MainView.vue'
import Counter from '../views/CounterView.vue'
import Login from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/counter',
      name: 'counter',
      component: Counter
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
