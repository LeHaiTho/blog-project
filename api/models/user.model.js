import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    photoUrl: {
      type: String,
      default: "https://hhppaper.com/anh_co_dong/default-image.png",
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
export default User;
