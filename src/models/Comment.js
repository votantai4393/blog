import mongoose, { Schema } from "mongoose";

const Comment = new Schema(
  {
    userId: Number,
    content: String,
    reliesCommentId: [Number],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Comment", Comment);
