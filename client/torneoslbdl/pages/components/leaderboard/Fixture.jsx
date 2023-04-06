import React, { useEffect, useState } from "react";
import Match from "../matches/Match";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

const Fixture = ({ teams, matches }) => {
  const leagueMatches = matches.filter(
    (match) => match.tournament === "Torneo de La Banda del Lobo 1"
  );
  const [round, setRound] = useState(1);
 
  return (
    <>
      <div style={{ display: "flex" }}>
        <ArrowLeftOutlinedIcon
          onClick={() => {
            round === 1 ? setRound(1) : setRound(round + -1);
          }}
        />
        <div>Jornada {round}</div>
        <ArrowRightOutlinedIcon
          onClick={() => {
            round === 6 ? setRound(6) : setRound(round + 1);
          }}
        />
      </div>
      {leagueMatches.map((match) => (
        <Match match={match} />
      ))}
    </>
  );
};

export default Fixture;
