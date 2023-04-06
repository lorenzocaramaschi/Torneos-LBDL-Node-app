import React, { useState } from "react";

const LeaderboardRows = ({ matches }) => {
  const leagueMatches = matches.filter(
    (match) => match.tournament === "Torneo de La Banda del Lobo 1"
  );

  const [pts, setPts] = useState(0);
  const [won, setWon] = useState(0);
  const [lost, setLost] = useState(0);
  const [tied, setTied] = useState(0);
  const [goalsScored, setGoalsScored] = useState(0);
  const [goalsAgainst, setGoalsAgainst] = useState(0);
  const [goalDifference, setGoalDifference] = useState(0);
  const teams = [];

  console.log(leagueMatches);
  return (
    <>
      {leagueMatches.map((match) => (
        <p>
          {match.home} vs {match.away}
        </p>
      ))}
    </>
  );
};

export default LeaderboardRows;
