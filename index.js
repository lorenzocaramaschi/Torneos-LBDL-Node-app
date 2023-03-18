import mongoose, { Schema } from "mongoose";
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

const Team = mongoose.model("Team", teamSchema);

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
app.delete("/admin", function (req, res) {
  Team.deleteOne({ name: req.body.teamName }, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("User deleted successfully!");
    }
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
  console.log(__dirname);
});

app.get("/equipos/:team", async (req, res) => {
  const teams = await Team.find({});
  const {team} = req.params;
  const teamInfo = await Team.find({teamName: {$eq: team}})  
  
  res.render("infoEquipos", { teams: teams, team: team, teamInfo: teamInfo });
});
