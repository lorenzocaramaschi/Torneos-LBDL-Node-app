import { teamDao } from "../daos/index.js";

const createTeam = async (createTeamRequest) => {
  try {
    const { name } = createTeamRequest;
    const existingTeam = await teamDao.findTeamByFilter({ name });

    if (existingTeam) {
      throw {
        message: "The team you want to create already exists",
        status: 400,
      };
    }

    const createdTeam = await teamDao.createTeam(createTeamRequest);

    return createdTeam;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const updateTeam = async (updateTeamRequest, id) => {
  try {
    const existingTeam = await teamDao.findTeamById(id);

    if (!existingTeam) {
      throw {
        message: "The team you want to update does not exist",
        status: 400,
      };
    }

    const updatedTeam = await teamDao.updateBook(id, updateTeamRequest);

    return updatedTeam;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const deleteTeam = async (id) => {
  try {
    const existingTeam = teamDao.findTeamById(id);

    if (!existingTeam) {
      throw {
        message: "The team you want to delete does not exist",
        status: 400,
      };
    }

    const deletedTeam = await teamDao.deleteTeam(id);

    return deletedTeam;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const findTeamRecord = async (teamName) => {
    try {
        const teamRecord = await teamDao.findTeamRecord(teamName)
        
        return teamRecord
    } catch (err) {
        console.log(err);
    }
}

const findAllTeams = async () => {
  try {
    const teams = await teamDao.findAllTeams();

    return teams;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const findTeamById = async (id) => {
  try {
    const team = await teamDao.findTeamById(id);

    if (!team) {
      throw {
        message: "The team you want to create already exists",
        status: 404,
      };
    }

    return team;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

export const teamService = {
  createTeam,
  updateTeam,
  deleteTeam,
  findAllTeams,
  findTeamById,
  findTeamRecord,
};