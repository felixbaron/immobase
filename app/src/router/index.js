import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue')
  },
  {
    path: '/valuation',
    name: 'Valuation',
    component: () => import(/* webpackChunkName: "about" */ '../views/Valuation.vue')
  },
  {
    path: '/inquiry',
    name: 'Inquiry',
    component: () => import(/* webpackChunkName: "about" */ '../views/Inquiry.vue')
  },
  {
    path: '/visit',
    name: 'Visit',
    component: () => import(/* webpackChunkName: "about" */ '../views/Visit.vue')
  },
  {
    path: '/credit-request',
    name: 'Credit Request',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreditRequest.vue')
  },
  {
    path: '/transaction',
    name: 'Transaction',
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Transaction.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
