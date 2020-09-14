import BaseController from "../utils/BaseController";
import { mudsService } from "../services/MudsService";

export class MudsController extends BaseController {

  constructor() {
    super("api/mud");
    this.router
      .get("", this.getUserInfo)
  }
  async getUserInfo(req, res, next) {
    try {
      let mudEmail = "kevinclane21@gmail.com"
      let data = await mudsService.getUserInfo(mudEmail);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
}
