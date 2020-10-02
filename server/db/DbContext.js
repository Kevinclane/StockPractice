import mongoose from "mongoose";
import ProfileSchema from "../models/Profile";
import UserInfoSchema from '../models/UserInfo'
import PublicStockSchema from '../models/PublicStock'
class DbContext {
  Profile = mongoose.model("Profile", ProfileSchema);
  UserInfo = mongoose.model("UserInfo", UserInfoSchema)
  PublicStock = mongoose.model("PublicStock", PublicStockSchema)
}

export const dbContext = new DbContext();
