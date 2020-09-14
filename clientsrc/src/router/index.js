import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import StockPractice from '../views/StockPractice.vue'
import Stocks from '../views/Stocks.vue'
import { authGuard } from "@bcwdev/auth0-vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/stockPractice',
      name: 'stockPractice',
      component: StockPractice,
      beforeEnter: authGuard
    },
    {
      path: "/stocks",
      name: 'stocks',
      component: Stocks,
      beforeEnter: authGuard
    },
    {
      path: "*",
      redirect: '/'
    }
  ]
})