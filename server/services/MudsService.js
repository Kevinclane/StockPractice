import { dbContext } from "../db/DbContext";

// Private Methods
async function stocksOnly(userInfo) {
  let data = {
    favStocks: userInfo.favStocks
  }
  return data
}

class MudsService {
  async getMudStocks(email) {
    let userInfo = await dbContext.UserInfo.findOne({
      ownerEmail: email
    });
    let stocks = await stocksOnly(userInfo)
    return stocks
  }
}
export const mudsService = new MudsService();
