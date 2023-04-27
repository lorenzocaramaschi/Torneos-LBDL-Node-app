import mongoose from "mongoose";

// TOURNAMENTS MUST HAVE A UNIQUE NAME.
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
