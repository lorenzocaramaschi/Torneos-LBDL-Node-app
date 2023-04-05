import React from "react";
import Match from "../matches/Match";

const TournamentMatches = ({ tournamentMatches }) => {
  let quarterFinals = tournamentMatches.data.filter(
    (match) => match.round === "Cuartos de final"
  );

  let semiFinals = tournamentMatches.data.filter(
    (match) => match.round === "Semifinales"
  );
  let final = tournamentMatches.data.filter((match) => match.round === "Final");

  return (
    <>
      <h2>{quarterFinals[0].round}</h2>
      {quarterFinals.map((match) => (
        <Match key={match._id} match={match} />
      ))}
      <h2>{semiFinals[0].round}</h2>
      {semiFinals.map((match) => (
        <Match key={match._id} match={match} />
      ))}
      <h2>{final[0].round}</h2>
      {final.map((match) => (
        <Match key={match._id} match={match} />
      ))}
    </>
  );
};

export default TournamentMatches;
