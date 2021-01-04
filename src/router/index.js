import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/About',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/AboutMe',
    name: 'AboutMe',
    component: () => import(/* webpackChunkName: "AboutMe" */ '../views/AboutMe.vue') 
  },
  {
    path: '/Email',
    name: 'Email',
    component: () => import(/* webpackChunkName: "Email" */ '../views/Email.vue') 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
