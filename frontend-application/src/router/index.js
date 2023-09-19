import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView, 
  },
  {
    path: '/login', 
    name: 'login', 
    component: () => import("../views/Auth/login.vue")
  }, 
  {
    path: '/sign-up', 
    name: 'signup', 
    component: () => import("../views/Auth/registration.vue")
  },
  {
    path: '/password-reset', 
    name: 'password-reset', 
    component: () => import("../views/Auth/password_reset.vue")
  }, 
  {
    path: '/dashboard', 
    name: 'dashboard', 
    component: () => import("../views/Dashboard.vue"), 
    meta: {
      requireLogin: true 
    }
  },
  {
    path: '/error', 
    name: 'error', 
    component: () => import("../views/Error.vue"), 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated){
    next('/login')
  } else{
    next()
  }
})

export default router
