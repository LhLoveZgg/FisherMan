import Vue from 'vue'
import Router from 'vue-router'
import  Splash from '@/pages/Splash'//启动屏
import  Login from '@/pages/Login'//登录页
import  Home from '@/pages/Home/Home'//主页


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Splash',
      component: Splash
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
