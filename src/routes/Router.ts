import { createWebHistory, createRouter } from 'vue-router'
import HomePage from '../pages/home/HomePage.vue'
import LoginPage from '../pages/login/LoginPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;