import { Router } from "express";
import { newsController } from "../controllers/news.controller.js";

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
