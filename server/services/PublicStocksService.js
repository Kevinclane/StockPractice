import { dbContext } from "../db/DbContext";

class PublicStocksService {
  async getPublicStocks(id) {
    let stocks = await dbContext.PublicStock.findById(id)
    if (!stocks) {
      let stocks = await dbContext.PublicStock.create({})
      return stocks
    } else return stocks
  }
}
export const publicStocksService = new PublicStocksService();
