import mongoose from "mongoose";

const newsSchema = mongoose.Schema(
  {
    title: String,
    body: String,
    image: String,
    author: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const News = mongoose.model("News", newsSchema);

export default News;
