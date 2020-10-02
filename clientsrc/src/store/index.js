import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
import { api, stockApi } from "./AxiosService"
import moment from "moment";

Vue.use(Vuex)

const { DateTime } = require("luxon");
var local = DateTime.local();
var rezoned = local.setZone("America/New_York");
const request = require('request');
let currentDate = rezoned.toFormat("yyyy'-'MM'-'dd")
let tenYearsAgo = rezoned.minus({ years: 10 }).toFormat("yyyy'-'MM'-'dd")
let currentUnix = rezoned.toMillis()
let oneYearAgoUnix = rezoned.minus({ years: 1 }).toMillis()
let token = "bt5a9vn48v6vdhrudli0"



export default new Vuex.Store({
  state: {
    user: {},
    userStockInfo: {},
    mudStockInfo: {},
    publicStocks: [],
    stocks: [],
    activeStock: {},
    searchedStocks: [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    addStockInfo(state, stock) {
      state.stocks.push(stock)
    },
    setUserInfo(state, data) {
      state.userStockInfo = data
    },
    setStocks(state, stocks) {
      state.stocks = stocks
    }
  },
  actions: {
    //#region -- AUTH STUFF --
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    //#endregion
    async getProfile({ commit, dispatch }) {
      try {
        let res = await api.get("/profile")
        commit("setUser", res.data)
        if (res.data) {
          dispatch("getUserInfo", res.data.id)
        }
      } catch (err) {
        console.error(err)
      }
    },
    async getUserInfo({ commit }, id) {
      try {
        let userInfo = await api.get("/userinfo/" + id)
        commit("setUserInfo", userInfo.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getAllSavedStocks({ commit }) {
      // @ts-ignore
      let stockNameArr = this.state.stocksFollowing
      let i = 0
      while (i < stockNameArr.length) {

      }
    },
    async getMudStocks({ commit, dispatch }) {
      try {
        let res = await api.get("/mudStocks")
        let stocks = []
        let i = 0
        while (i < res.data.favStocks.length) {
          let stock = await dispatch("getMudStockData", res.data.favStocks)
          stocks.push(stock)
          i++
        }
        commit("setStocks", stocks)
      } catch (error) {
        console.error(error)
      }
    },
    async getMudStockData({ commit }, symbolObjs) {
      let symbol = symbolObjs.symbol
      let res = await stockApi.get("quote?symbol=" + symbol + "&token=" + token)
      return res.data
    },
    async getMyStocks({ commit },) {
    },
    async findStock({ commit, dispatch }, searchData) {
      try {
        let res = await stockApi.get("quote?", { params: { symbol: searchData, token: token } })
        debugger
        console.log(res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async addMyStock({ commit }, obj) {
      let res = await api.put("userinfo/" + obj.id + "/addstock", obj.stock)
      console.log(res.data)
    }
  } //actions closing bracket
})
