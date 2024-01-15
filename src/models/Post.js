import mongoose, { Schema } from "mongoose";

const Post = new Schema(
  {
    title: { type: String, require: true },
    description: { type: String },
    image: { type: String, default: "/images/sale.webp" },
    content: { type: String, require: true },
    deleted: { type: Boolean, default: false },
    deletedAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Post", Post);
