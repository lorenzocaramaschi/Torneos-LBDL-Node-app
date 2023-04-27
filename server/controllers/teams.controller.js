import Response from "../lib/response.lib.js";
import { teamService } from "../services/index.js";

// Controllers handle HTTP requests
// These functions use the teamService module to perform business logic
// Then returns the results as an HTTP response with a standardized format using the Response module.
// In addition, if any error occurs during the execution of the function, it calls the next function with the error object to pass it to the error middleware.

const createTeam = async (req, res, next) => {
  try {
    const response = await teamService.createTeam(req.body);

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

const updateTeam = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await teamService.updateTeam(req.body, id);

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

const deleteTeam = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await teamService.deleteTeam(id);

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

const findAllTeams = async (req, res, next) => {
  try {
    const response = await teamService.findAllTeams();

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

const findTeamById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await teamService.findTeamById(id);

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

const findTeamRecord = async (req, res, next) => {
  try {
    const { teamName } = req.params;
    const response = await teamService.findTeamRecord(teamName);

    res.json(new Response(response, "Success"));
  } catch (err) {
    console.log(err);
  }
};

export const teamController = {
  createTeam,
  updateTeam,
  deleteTeam,
  findAllTeams,
  findTeamById,
  findTeamRecord,
};
