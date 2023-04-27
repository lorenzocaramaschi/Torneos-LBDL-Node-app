import { Router } from "express";
import { matchController } from "../controllers/index.js";

// This code sets up the routes for handling HTTP requests related to matches
// It imports the matchController, which contains the functions for handling these requests

const router = Router();

router
  .route("/")
  .get(matchController.findAllMatches)
  .post(matchController.createMatch);

router
  .route("/:id")
  .get(matchController.findMatchById)
  .delete(matchController.deleteMatch)
  .patch(matchController.updateMatch);

export const matchRouter = router;
