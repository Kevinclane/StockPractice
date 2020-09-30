import Axios from "axios";
import token from "./index"

//Allows axios to work locally or live
let baseUrl = location.host.includes("localhost")
  ? "http://localhost:3000/"
  : "/";

export const api = Axios.create({
  baseURL: baseUrl + "api",
  timeout: 3000,
  withCredentials: true
});


export const stockApi = Axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://api.tiingo.com/tiingo/",
  timeout: 300000
  // withCredentials: true,

})