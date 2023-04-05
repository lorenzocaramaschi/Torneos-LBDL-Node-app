import Response from "../lib/response.lib.js";
import { newsService } from "../services/index.js";

const createNews = async (req, res, next) => {
  try {
    const response = await newsService.createNews(req.body);

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

const updateNews = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await newsService.updateNews(req.body, id);

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

const deleteNews = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await newsService.deleteNews(id);

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

const findAllNews = async (req, res, next) => {
  try {
    const response = await newsService.findAllNews();

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

const findNewsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await newsService.findNewsById(id);

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

const findNewsRecord = async (req, res, next) => {
  try {
    const { newsName } = req.params;
    const response = await newsService.findNewsRecord(newsName);

    res.json(new Response(response, "Success"));
  } catch (err) {
    console.log(err);
  }
};

export const newsController = {
  createNews,
  updateNews,
  deleteNews,
  findAllNews,
  findNewsById,
  findNewsRecord,
};
