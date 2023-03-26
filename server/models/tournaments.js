import mongoose from "mongoose";

const tournamentSchema = mongoose.Schema(
  {
    logo: String,
    name: String,    
    playlist: String,
  },
  {
    versionKey: false,
  }
);

const Tournament = mongoose.model("Tournament", tournamentSchema);

export default Tournament;
