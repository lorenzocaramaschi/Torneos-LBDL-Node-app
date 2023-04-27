import { Router } from "express";
import { teamController } from "../controllers/index.js";

// This code sets up the routes for handling HTTP requests related to teams
// It imports the teamController, which contains the functions for handling these requests

const router = Router();

router
  .route("/")
  .get(teamController.findAllTeams)
  .post(teamController.createTeam);

router
  .route("/:id")
  .get(teamController.findTeamById) 
  .delete(teamController.deleteTeam)
  .patch(teamController.updateTeam);
router
  .route("/:teamName/historial")
  .get(teamController.findTeamRecord)

export const teamRouter = router;
