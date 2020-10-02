import express from "express";
import BaseController from "../utils/BaseController";
import { mudsService } from "../services/MudsService";

export class MudStocksController extends BaseController {

  constructor() {
    super("api/mudStocks");
    this.router
      .get("/", this.getMudStocks)
  }
  async getMudStocks(req, res, next) {
    let mudEmail = "kevinclane21@gmail.com"
    try {
      let stocks = await mudsService.getMudStocks(mudEmail);
      res.send(stocks);
    } catch (error) {
      next(error);
    }
  }
}
