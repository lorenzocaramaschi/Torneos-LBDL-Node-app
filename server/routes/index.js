import { Router } from "express";
import { matchRouter } from "./matches.route.js";
import { teamRouter } from "./teams.route.js";
import { tournamentRouter } from "./tournaments.route.js";
import { newsRouter } from "./news.route.js";

const router = Router();

router.use("/torneos", tournamentRouter);
router.use("/equipos", teamRouter);
router.use("/partidos", matchRouter);
router.use("/noticias", newsRouter);

export default router;
