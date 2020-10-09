import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from "../store"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/protect',
    name: 'Protect',
    component: () => import('../views/Protect.vue'),
    beforeEnter(to, from, next) {
      if (store.state.loginUser.data) {
        // 有用户
        next();
      } else {
        next("/login");
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
