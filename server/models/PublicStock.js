import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PublicStock = new Schema(
  {
    stocks: [{ type: String }]
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default PublicStock;
