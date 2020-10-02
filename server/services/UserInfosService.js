import { dbContext } from "../db/DbContext";

// Private Methods

/**
 * Creates profile if one does not exist
 * @param {any} profile
 * @param {any} email
 */
async function createUserInfoIfNeeded(profile, email) {
  if (!profile) {
    let obj = {}
    obj.ownerEmail = email
    profile = await dbContext.UserInfo.create({
      ...obj
    });
  }
  return profile;
}

class UserInfosService {
  async getUserInfo(user) {
    let userInfo = await dbContext.UserInfo.findOne({
      ownerEmail: user.email
    })
    userInfo = await createUserInfoIfNeeded(userInfo, user.email)
    return userInfo
  }
  async addStock(user) {
    let userInfo = await dbContext.UserInfo.findOneAndUpdate({ ownerEmail: user.userInfo.email }, { $addToSet: { favStocks: user.body } })
    return userInfo
  }
}
export const userInfosService = new UserInfosService();
