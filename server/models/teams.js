import mongoose from "mongoose";

// IMPORTANT: TEAMS MUST HAVE UNIQUE NAMES, YOU CANNOT REPEAT THEM.
const teamSchema = mongoose.Schema(
  {
    logo: String,
    name: String,    
  },
  {
    versionKey: false,
  }
);

const Team = mongoose.model("Team", teamSchema);

export default Team;
