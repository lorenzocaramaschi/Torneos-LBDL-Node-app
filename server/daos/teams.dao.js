import { Match, Team } from "../models/index.js";

// Here I believe that each function explains itself
// To sum up, this arrow functions are Data Acces Objects
// They take each model and make the requests to the database with the necessary mongodb methods for each case
// The difference here with others DAO is that we use Match model also to find Matches related to a requested Team

const createTeam = async (createTeamRequest) => {
  try {
    const createdTeam = await Team.create(createTeamRequest);

    return createdTeam;
  } catch (err) {
    console.log(err);
  }
};

const updateTeam = async (id, updateTeamRequest) => {
  try {
    const updatedTeam = await Team.updateOne({ _id: id }, updateTeamRequest);

    return updatedTeam;
  } catch (err) {
    console.log(err);
  }
};

const deleteTeam = async (id) => {
  try {
    const deletedTeam = await Team.deleteOne({ _id: id });

    return deletedTeam;
  } catch (err) {
    console.log(err);
  }
};

const findAllTeams = async () => {
  try {
    const teams = await Team.find();

    return teams;
  } catch (err) {
    console.log(err);
  }
};

// Here we use Match model to find matches where home or away is equal to the requested teamname
// In consequence, we get the team's record
const findTeamRecord = async (teamName) => {
  try {
    const teamRecord = await Match.find({$or: [{home: {$eq: teamName}},{away: {$eq: teamName}}]})

    return teamRecord
  } catch (err) {
    console.log(err)
  }
}

const findTeamById = async (id) => {
  try {
    const team = await Team.findById(id);

    return team;
  } catch (err) {
    console.log(err);
  }
};

const findTeamByFilter = async (filters) => {
  try {
    const team = await Team.findOne(filters);

    return team;
  } catch (err) {
    console.log(err);
  }
};

export const teamDao = {
  createTeam,
  updateTeam,
  deleteTeam,
  findAllTeams,
  findTeamById,
  findTeamByFilter,
  findTeamRecord,
};
