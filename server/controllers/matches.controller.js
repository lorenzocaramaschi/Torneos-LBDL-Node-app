import Response from "../lib/response.lib.js";
import { matchService } from "../services/index.js";

const createMatch = async (req, res, next) => {
  try {
    const response = await matchService.createMatch(req.body);

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

const updateMatch = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await matchService.updateMatch(req.body, id);

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

const deleteMatch = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await matchService.deleteMatch(id);

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

const findAllMatches = async (req, res, next) => {
  try {
    const response = await matchService.findAllMatches();

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

const findMatchById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await matchService.findMatchById(id);

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

export const matchController = {
  createMatch,
  updateMatch,
  deleteMatch,
  findAllMatches,
  findMatchById,
};
