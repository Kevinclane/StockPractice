import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import StockPractice from '../views/StockPractice.vue'
import Board from '../views/Board.vue'
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
      path: '/boards/:boardId',
      name: 'board',
      component: Board
    },
    {
      path: "*",
      redirect: '/'
    }
  ]
})