import Vue from 'vue'
import Router from 'vue-router'
import  Home from '@/pages/home/Home'
import  Login from '@/pages/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
