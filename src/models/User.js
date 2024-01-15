import mongoose, { Schema } from "mongoose";

const User = new Schema(
  {
    name: { type: String },
    email: { type: String, require: true },
    password: { type: String, require: true },
    avatar: { type: String, default: "/images/linux.png" },
    deletedAt: { type: Date, default: null },
    deleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", User);
