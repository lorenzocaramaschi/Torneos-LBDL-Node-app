import { Router } from "express";
import { tournamentController } from "../controllers/index.js";

// This code sets up the routes for handling HTTP requests related to tournaments
// It imports the tournamentController, which contains the functions for handling these requests

const router = Router();

router
  .route("/")
  .get(tournamentController.findAllTournaments)
  .post(tournamentController.createTournament);

router
  .route("/:id")
  .get(tournamentController.findTournamentById)
  .delete(tournamentController.deleteTournament)
  .patch(tournamentController.updateTournament);

router
  .route("/:tournamentName/partidos")
  .get(tournamentController.findTournamentMatches);

export const tournamentRouter = router;
