import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TheConverter from '../views/TheConverter.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/converter',
    name: 'converter',
    component: TheConverter,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
