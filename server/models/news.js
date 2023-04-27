import mongoose from "mongoose";

// News schema can have any of its properties repeated.
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
