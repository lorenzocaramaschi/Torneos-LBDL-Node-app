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
      {tournamentMatches.data[0].friendly === true ? (
        <>
          <h2>Amistosos</h2>
          <p style={{ textAlign: "center" }}>
            Los amistosos no están disponibles actualmente.
          </p>
        </>
      ) : (
        <>
          <h2
            style={{ color: "#6568A6", fontSize: "48px", textAlign: "center" }}
          >
            {quarterFinals[0].round}
          </h2>
          {quarterFinals.map((match) => (
            <Match key={match._id} match={match} />
          ))}
          <h2
            style={{ color: "#6568A6", fontSize: "48px", textAlign: "center" }}
          >
            {semiFinals[0].round}
          </h2>
          {semiFinals.map((match) => (
            <Match key={match._id} match={match} />
          ))}
          <h2
            style={{ color: "#6568A6", fontSize: "48px", textAlign: "center" }}
          >
            {final[0].round}
          </h2>
          {final.map((match) => (
            <Match key={match._id} match={match} />
          ))}
        </>
      )}
    </>
  );
};

export default TournamentMatches;
