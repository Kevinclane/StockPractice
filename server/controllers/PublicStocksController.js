import express from "express";
import BaseController from "../utils/BaseController";
import auth0provider from "@bcwdev/auth0provider";
import { publicStocksService } from "../services/publicStocksService";

export class publicStocksController extends BaseController {

  constructor() {
    super("api/publicStocks");
    this.router
      .use(auth0provider.getAuthorizedUserInfo)
      .get("/", this.getPublicStocks)
  }
  async getPublicStocks(req, res, next) {
    let id = 1
    try {
      let stocks = await publicStocksService.getPublicStocks(id);
      res.send(stocks);
    } catch (error) {
      next(error);
    }
  }
}
