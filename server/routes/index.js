import { Router } from "express";
import { matchRouter } from "./matches.route.js";
import { teamRouter } from "./teams.route.js";
import { tournamentRouter } from "./tournaments.route.js";

const router = Router();

router.use("/torneos", tournamentRouter);
router.use("/equipos", teamRouter);
router.use("/partidos", matchRouter);


export default router;
