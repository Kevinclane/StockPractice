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
let token = "ea604de9bf874bdd56121ddfa1dee7f65d1d459e"


var requestOptions = {
  'url': `https://api.tiingo.com/tiingo/utilities/search?query=apple&token=ea604de9bf874bdd56121ddfa1dee7f65d1d459e`,
  'headers': {
    'Content-Type': 'application/xml',
    'Origin': 'http://localhost:8080/',

  }
};




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
    async getMyStocks({ commit }) {
      // @ts-ignore
      let stockNameArr = this.state.userStockInfo
      let i = 0
      while (i < stockNameArr.length) {

      }
    },
    async findStock({ commit }, symbol) {

      try {
        // let res = await stockApi.get("utilities/search?query=" + symbol + "&token=" + token)

        debugger
        let res = await stockApi.get("utilities/search?query=" + symbol, { params: { token: token } })
        console.log(res.data)
      } catch (error) {
        console.error(error)
      }


    },
    async addMyStock({ commit }, obj) {
      let res = await api.put("userinfo/" + obj.id + "/add", obj.stock)
    }
  } //actions closing bracket
})
