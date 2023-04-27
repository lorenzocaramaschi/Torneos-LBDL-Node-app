import Response from "../lib/response.lib.js";
import { tournamentService } from "../services/index.js";

// Controllers handle HTTP requests
// These functions use the tournamentService module to perform business logic
// Then returns the results as an HTTP response with a standardized format using the Response module.
// In addition, if any error occurs during the execution of the function, it calls the next function with the error object to pass it to the error middleware.

const createTournament = async (req, res, next) => {
  try {
    const response = await tournamentService.createTournament(req.body);

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

const updateTournament = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await tournamentService.updateTournament(req.body, id);

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

const deleteTournament = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await tournamentService.deleteTournament(id);

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

const findAllTournaments = async (req, res, next) => {
  try {
    const response = await tournamentService.findAllTournaments();

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

const findTournamentMatches = async (req, res, next) => {
  try {
    const { tournamentName } = req.params;
    const response = await tournamentService.findTournamentMatches(
      tournamentName
    );

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

const findTournamentById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await tournamentService.findTournamentById(id);

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

export const tournamentController = {
  createTournament,
  updateTournament,
  deleteTournament,
  findAllTournaments,
  findTournamentById,
  findTournamentMatches,
};
