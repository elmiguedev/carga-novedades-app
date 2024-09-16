import { createWebHistory, createRouter } from 'vue-router'
import HomePage from '../pages/home/HomePage.vue'
import LoginPage from '../pages/login/LoginPage.vue'
import { AuthService } from '../core/services/AuthService'

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = AuthService.isAuthenticated();
  if (isAuthenticated) {
    if (to.path === '/login') {
      next({ path: '/' });
    } else {
      next();
    }
  } else {
    if (to.path !== '/login') {
      next({ path: '/login' });
    } else {
      next();
    }
  }
});

export default router;