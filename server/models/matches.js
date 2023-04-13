import mongoose from "mongoose";

const matchSchema = mongoose.Schema(
  {
    home: String,
    away: String,
    homeScore: Number,
    awayScore: Number,
    penalties: Boolean,
    homePenalties: Number,
    awayPenalties: Number,
    video: String,
    tournament: String,
    round: String,
    friendly: Boolean,
    year: String,
  },
  {
    versionKey: false,
  }
);

const Match = mongoose.model("Match", matchSchema);

export default Match;
