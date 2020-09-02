import { dbContext } from "../db/DbContext";
import UserInfo from "../models/UserInfo";

// Private Methods

/**
 * Creates profile if one does not exist
 * @param {any} profile
 * @param {any} email
 */
async function createUserInfoIfNeeded(profile, email) {
  if (!profile) {
    let obj = {}
    obj.userEmail = email
    profile = await dbContext.UserInfo.create({
      ...obj
    });
  }
  return profile;
}

class UserInfosService {
  async getUserInfo(user) {
    let userInfo = await dbContext.UserInfo.findOne({
      userEmail: user.email
    })
    userInfo = await createUserInfoIfNeeded(userInfo, user.email)
    return userInfo
  }

}
export const userInfosService = new UserInfosService();
