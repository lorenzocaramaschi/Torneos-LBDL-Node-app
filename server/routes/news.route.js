import { Router } from "express";
import { newsController } from "../controllers/news.controller.js";

// This code sets up the routes for handling HTTP requests related to news
// It imports the newsController, which contains the functions for handling these requests

const router = Router();

router
  .route("/")
  .get(newsController.findAllNews)
  .post(newsController.createNews);

router
  .route("/:id")
  .get(newsController.findNewsById) 
  .delete(newsController.deleteNews)
  .patch(newsController.updateNews);

export const newsRouter = router;
