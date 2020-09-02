import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
import { api, stockApi } from "./AxiosService"
import StockCandles from "finnhub/dist/model/StockCandles"

Vue.use(Vuex)


const finnhub = require('finnhub');
const request = require('request');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "bt5a9vn48v6vdhrudli0" // Replace this
const finnhubClient = new finnhub.DefaultApi()

// Stock candles
// finnhubClient.stockCandles("AAPL", "D", 1590988249, 1591852249, {}, (error, data, response) => {
//   console.log(data)
// });

//Quote
// finnhubClient.quote("AAPL", (error, data, response) => {
//   console.log(data)
// });
const token = "bt5a9vn48v6vdhrudli0"

export default new Vuex.Store({
  state: {
    user: {},
    userStockInfo: {
      stocksFollowing: []
    },
    mudStockInfo: {},
    savedStocks: [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    addStockInfo(state, stock) {
      state.savedStocks.push(stock)
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
    async getProfile({ commit }) {
      try {
        let res = await api.get("/profile")
        commit("setUser", res.data)
      } catch (err) {
        console.error(err)
      }
    },
    async StockCandles({ commit }) {
      try {
        let res = await finnhubClient.stockCandles("AAPL", "D", 1590988249, 1591852249, {})
        console.log(res)
      } catch (error) {
        console.error(error)
      }
    },
    async getAllSavedStocks({ commit }) {
      // @ts-ignore
      let stockNameArr = this.state.stocksFollowing
      let i = 0
      while (i < stockNameArr.length) {
        request('https://finnhub.io/api/v1/quote?symbol=' + stockNameArr[i] + '&token=' + token, { json: true }, (err, res, body) => {
          if (err) { return console.log(err); }
          console.log(body)
          let stock = {
            name: stockNameArr[i],
            currentPrice: body.c,
            openPrice: body.o,
            highPrice: body.h,
            lowPrice: body.l,
            previousClosePrice: body.pc
          }
          commit("addStockInfo", stock)
          //o = open price of the day
          //h = high price of the day
          //l = low price of the day
          //c = current price
          //pc = previous close price
          i++
        });
      }
    },
    async getMyStocks({ commit }) {

    }
    //#endregion

  }
})
