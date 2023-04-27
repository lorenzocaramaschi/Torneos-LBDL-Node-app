import mongoose from "mongoose";

// ABOUT MATCH SCHEMA: home and away property MUST EXIST IN TEAMS COLLECTION and tournament MUST EXIST in TOURNAMENTS COLLECTION

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
