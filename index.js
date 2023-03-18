import mongoose, { Mongoose, Schema } from "mongoose";
import bodyParser from "body-parser";
import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import dotenv from "dotenv";

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const teamSchema = new Schema(
  {
    logo: String,
    teamName: String,
  },
  {
    versionKey: false,
  }
);

const tournamentSchema = new Schema(
  {
    logo: String,
    name: String,
    year: Number,
    playlist: String,
  },
  {
    versionKey: false,
  }
);

const matchSchema = new Schema(
  {
    video: String,
    home: Schema.Types.ObjectId,
    away: Schema.Types.ObjectId,
    tournament: Schema.Types.ObjectId,
    round: String,
    homeScore: Number,
    awayScore: Number,
    penalties: Boolean,
    penaltiesHome: Number,
    penaltiesAway: Number,
  },
  {
    versionKey: false,
  }
);

const Team = mongoose.model("Team", teamSchema, "teams");
const Tournament = mongoose.model(
  "Tournament",
  tournamentSchema,
  "tournaments"
);
const Match = mongoose.model("Match", matchSchema, "matches");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/admin", function (req, res) {
  res.render("admin");
});
app.post("/admin", function (req, res) {
  console.log(req.body.teamName);
  const newTeam = new Team({
    logo: req.body.logo,
    teamName: req.body.teamName,
  });
  newTeam
    .save()
    .then(() => {
      res.render("admin");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/admin/tournaments", (req, res) => {
  const newTournament = new Tournament({
    logo: req.body.tournamentLogo,
    name: req.body.tournamentName,
    year: req.body.tournamentYear,
    playlist: req.body.tournamentPlaylist,
  });
  newTournament
    .save()
    .then(() => {
      res.render("admin");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/admin/matches", (req, res) => {
  const newMatch = new Match({
    video: req.body.video,
    home: req.body.home,
    away: req.body.away,
    tournament: req.body.tournament,
    round: req.body.round,
    homeScore: req.body.homeScore,
    awayScore: req.body.awayScore,
    penalties: req.body.penalties,
    penaltiesHome: req.body.penaltiesHome,
    penaltiesAway: req.body.penaltiesAway,
  });
  newMatch
    .save()
    .then(() => {
      res.render("admin");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/", (req, res) => {
  res.send("<h1>Bienvenido a Torneos LBDL</h1>");
});

app.get("/equipos", async (req, res) => {
  const documents = await Team.find({});
  res.render("equipos", { documents: documents });
});

app.listen(3000, function () {
  console.log("App is running on Port 3000");
});

app.get("/equipos/:team", async (req, res) => {
  const teams = await Team.find({});
  const { team } = req.params;
  const teamInfo = await Team.find({ teamName: { $eq: team } });
  const matches =  await Match.find({$or: [{home:{$eq: team}},{away: {$eq: team}}]});

  res.render("infoEquipos", { teams: teams, team: team, teamInfo: teamInfo, matches:matches });
});

app.get("/torneos", async (req, res) => {
  const tournaments = await Tournament.find({});
  res.render("torneos", { tournaments: tournaments });
});

app.get("/torneos/:tournament", async (req, res) => {
  const tournaments = await Tournament.find({});
  const { tournament } = req.params;
  const tournamentInfo = await Tournament.find({ name: { $eq: tournament } });  

  res.render("infoTorneos", {
    tournaments: tournaments,
    tournament: tournament,
    tournamentInfo: tournamentInfo,
  });
});
