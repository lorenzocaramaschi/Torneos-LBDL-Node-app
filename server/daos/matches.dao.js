import { Match } from "../models/index.js";

const createMatch = async (createMatchRequest) => {
  try {
    const createdMatch = await Match.create(createMatchRequest);

    return createdMatch;
  } catch (err) {
    console.log(err);
  }
};

const updateMatch = async (id, updateMatchRequest) => {
  try {
    const updatedMatch = await Match.updateOne({ _id: id }, updateMatchRequest);

    return updatedMatch;
  } catch (err) {
    console.log(err);
  }
};

const deleteMatch = async (id) => {
  try {
    const deletedMatch = await Match.deleteOne({ _id: id });

    return deletedMatch;
  } catch (err) {
    console.log(err);
  }
};

const findAllMatches = async () => {
  try {
    const books = await Match.find();

    return books;
  } catch (err) {
    console.log(err);
  }
};

const findMatchById = async (id) => {
  try {
    const match = await Match.findById(id);

    return match;
  } catch (err) {
    console.log(err);
  }
};

const findMatchByFilter = async (filters) => {
  try {
    const match = await Match.findOne(filters);

    return match;
  } catch (err) {
    console.log(err);
  }
};

export const matchDao = {
  createMatch,
  updateMatch,
  deleteMatch,
  findAllMatches,
  findMatchById,
  findMatchByFilter,
};
