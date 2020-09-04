import express from "express";
import BaseController from "../utils/BaseController";
import auth0provider from "@bcwdev/auth0provider";
import { userInfosService } from "../services/UserInfosService";

export class UserInfosController extends BaseController {

  constructor() {
    super("api/userinfo");
    this.router
      .use(auth0provider.getAuthorizedUserInfo)
      .get("/:id", this.getUserInfo)
      .put("/:id", this.edit)
  }
  async getUserInfo(req, res, next) {
    try {
      let data = await userInfosService.getUserInfo(req.userInfo);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      req.body.creatorId = req.user.sub;
      res.send(req.body);
    } catch (error) {
      next(error);
    }
  }
}
