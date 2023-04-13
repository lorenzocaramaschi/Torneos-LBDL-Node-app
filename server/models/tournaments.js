import mongoose from "mongoose";

const tournamentSchema = mongoose.Schema(
  {
    logo: String,
    name: String,
    playlist: String,
    year: Number,
  },
  {
    versionKey: false,
  }
);

const Tournament = mongoose.model("Tournament", tournamentSchema);

export default Tournament;
