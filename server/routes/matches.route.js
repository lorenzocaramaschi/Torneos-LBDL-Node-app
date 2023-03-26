import { Router } from "express";
import { matchController } from "../controllers/index.js";

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
