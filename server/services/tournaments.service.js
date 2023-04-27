import { tournamentDao } from "../daos/index.js";

  //This services are set of functions that use the Tournament DAO to interact with the database and complete the requests
const createTournament = async (createTournamentRequest) => {
  try {
    const { name } = createTournamentRequest;
    const existingTournament = await tournamentDao.findTournamentByFilter({
      name,
    });

    if (existingTournament) {
      throw {
        message: "The tournament you want to create already exists",
        status: 400,
      };
    }

    const createdTournament = await tournamentDao.createTournament(
      createTournamentRequest
    );

    return createdTournament;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const updateTournament = async (updateTournamentRequest, id) => {
  try {
    const existingTournament = await tournamentDao.findTournamentById(id);

    if (!existingTournament) {
      throw {
        message: "The tournament you want to update does not exist",
        status: 400,
      };
    }

    const updatedTournament = await tournamentDao.updateTournament(
      id,
      updateTournamentRequest
    );

    return updatedTournament;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const deleteTournament = async (id) => {
  try {
    const existingTournament = tournamentDao.findTournamentById(id);

    if (!existingTournament) {
      throw {
        message: "The tournament you want to delete does not exist",
        status: 400,
      };
    }

    const deletedTournament = await tournamentDao.deleteTournament(id);

    return deletedTournament;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const findAllTournaments = async () => {
  try {
    const tournaments = await tournamentDao.findAllTournaments();

    return tournaments;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const findTournamentById = async (id) => {
  try {
    const tournament = await tournamentDao.findTournamentById(id);

    if (!tournament) {
      throw {
        message: "The tournament you want to create already exists",
        status: 404,
      };
    }

    return tournament;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const findTournamentMatches = async (tournamentName) => {
  try {
    const tournamentMatches = await tournamentDao.findTournamentMatches(tournamentName);

    if (!tournamentMatches) {
      throw {
        message: "The tournament matches you want to see don't exist",
        status: 404,
      };
    }

    return tournamentMatches;
  } catch (err) {
    console.log(err);
  }
};

export const tournamentService = {
  createTournament,
  updateTournament,
  deleteTournament,
  findAllTournaments,
  findTournamentById,
  findTournamentMatches,
};
