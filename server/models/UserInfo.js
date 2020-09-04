import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserInfo = new Schema(
  {
    ownerEmail: { type: String, required: true },
    favStocks: [{ type: Object }],
    token: { type: String }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default UserInfo;
