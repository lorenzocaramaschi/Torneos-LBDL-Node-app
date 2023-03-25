import mongoose from "mongoose";

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
