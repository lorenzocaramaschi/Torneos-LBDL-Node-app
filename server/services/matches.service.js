  import { matchDao } from "../daos/index.js";

  //This services are set of functions that use the Match DAO to interact with the database and complete the requests
  const createMatch = async (createMatchRequest) => {
    try {
      const {
        home,
        away,
        homeScore,
        awayScore,
        penalties,
        homePenalties,
        awayPenalties,
        video,
        tournament,
        round,
        friendly,
      } = createMatchRequest;

      const createdMatch = await matchDao.createMatch(createMatchRequest);

      return createdMatch;
    } catch (err) {
      console.log(err);

      throw err;
    }
  };

  const updateMatch = async (updateMatchRequest, id) => {
    try {
      const existingMatch = await matchDao.findMatchById(id);

      if (!existingMatch) {
        throw {
          message: "The match you want to update does not exist",
          status: 400,
        };
      }

      const updatedMatch = await matchDao.updateMatch(id, updateMatchRequest);

      return updatedMatch;
    } catch (err) {
      console.log(err);

      throw err;
    }
  };

  const deleteMatch = async (id) => {
    try {
      const existingMatch = matchDao.findMatchById(id);

      if (!existingMatch) {
        throw {
          message: "The match you want to delete does not exist",
          status: 400,
        };
      }

      const deletedMatch = await bookDao.deleteMatch(id);

      return deletedMatch;
    } catch (err) {
      console.log(err);

      throw err;
    }
  };

  const findAllMatches = async () => {
    try {
      const matches = await matchDao.findAllMatches();

      return matches;
    } catch (err) {
      console.log(err);

      throw err;
    }
  };

  const findMatchById = async (id) => {
    try {
      const match = await matchDao.findMatchById(id);

      if (!match) {
        throw {
          message: "The match you want to create already exists",
          status: 404,
        };
      }

      return match;
    } catch (err) {
      console.log(err);

      throw err;
    }
  };

  export const matchService = {
    createMatch,
    updateMatch,
    deleteMatch,
    findAllMatches,
    findMatchById,
  };
