import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/login'
import VuexDemo from '@/views/VuexDemo/VuexDemo.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/VuexDemo',
    name: 'VuexDemo',
    component: VuexDemo
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
  ]
})
