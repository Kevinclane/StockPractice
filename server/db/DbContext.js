import mongoose from "mongoose";
import ValueSchema from "../models/Value";
import ProfileSchema from "../models/Profile";
import BoardSchema from '../models/Board'
import UserInfoSchema from '../models/UserInfo'
import PublicStockSchema from '../models/PublicStock'
class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Profile = mongoose.model("Profile", ProfileSchema);
  Boards = mongoose.model("Board", BoardSchema)
  UserInfo = mongoose.model("UserInfo", UserInfoSchema)
  PublicStock = mongoose.model("PublicStock", PublicStockSchema)
}

export const dbContext = new DbContext();
