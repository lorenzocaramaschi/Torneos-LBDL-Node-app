import { Router } from "express";
import { teamController } from "../controllers/index.js";

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
