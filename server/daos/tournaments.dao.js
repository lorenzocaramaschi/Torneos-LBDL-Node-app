import { Match, Tournament } from "../models/index.js";
// Here I believe that each function explains itself
// To sum up, this arrow functions are Data Acces Objects
// They take each model and make the requests to the database with the necessary mongodb methods for each case
// The difference here with others DAO is that we use Match model also to find Matches related to a requested Tournament
const createTournament = async (createTournamentRequest) => {
  try {
    const createdTournament = await Tournament.create(createTournamentRequest);

    return createdTournament;
  } catch (err) {
    console.log(err);
  }
};

const updateTournament = async (id, updateTournamentRequest) => {
  try {
    const updatedTournament = await Tournament.updateOne(
      { _id: id },
      updateTournamentRequest
    );

    return updatedTournament;
  } catch (err) {
    console.log(err);
  }
};

const deleteTournament = async (id) => {
  try {
    const deletedTournament = await Tournament.deleteOne({ _id: id });

    return deletedTournament;
  } catch (err) {
    console.log(err);
  }
};

// Here we use Match model to find matches where the tournament name is equal to the tournamentName variable
// In consequence, we get the tournament matches
const findTournamentMatches = async (tournamentName) => {
  try {
    const tournamentMatches = await Match.find({ tournament: tournamentName });

    return tournamentMatches;
  } catch (err) {
    console.log(err);
  }
};

const findAllTournaments = async () => {
  try {
    const tournaments = await Tournament.find();

    return tournaments;
  } catch (err) {
    console.log(err);
  }
};

const findTournamentById = async (id) => {
  try {
    const tournament = await Tournament.findById(id);

    return tournament;
  } catch (err) {
    console.log(err);
  }
};

const findTournamentByFilter = async (filters) => {
  try {
    const tournament = await Tournament.findOne(filters);

    return tournament;
  } catch (err) {
    console.log(err);
  }
};

export const tournamentDao = {
  createTournament,
  updateTournament,
  deleteTournament,
  findAllTournaments,
  findTournamentById,
  findTournamentByFilter,
  findTournamentMatches,
};
