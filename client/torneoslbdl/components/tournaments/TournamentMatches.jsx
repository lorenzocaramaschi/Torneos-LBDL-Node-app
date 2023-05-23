import React from "react";
import Match from "../matches/Match";
import Leaderboard from "../leaderboard/Leaderboard";
import RoundSelector from "../leaderboard/RoundSelector";

//displays tournament matches
const TournamentMatches = ({ tournamentMatches }) => {
  let quarterFinals = tournamentMatches.data.filter(
    (match) => match.round === "Cuartos de final"
  );

  let semiFinals = tournamentMatches.data.filter(
    (match) => match.round === "Semifinales"
  );
  let final = tournamentMatches.data.filter((match) => match.round === "Final");
  console.log(tournamentMatches);

  return (
    <>
      {/* if is friendly we show a message "friendlies are not available at the moment", if its a league also show no info available (fix soon), and if tournament matches is empty, null, undefined, we show the same error. */}
      {!tournamentMatches ||
      !tournamentMatches.data ||
      tournamentMatches.data.length === 0 ||
      tournamentMatches.data[0].friendly === true ||
      tournamentMatches.data[0].tournament === "Liga LBDL 2023" ? (
        <>
          <h2
            style={{ color: "#6568A6", fontSize: "48px", textAlign: "center" }}
          >
            Información no disponible
          </h2>
          <p style={{ textAlign: "center" }}>
            Los partidos que buscas no están disponibles actualmente.
          </p>
        </>
      ) : tournamentMatches.data[0].tournament.includes("Draft") &&
        tournamentMatches.data[0].tournament !== "Draft Series 2019" ? (
        // if the tournament is a draft and not a draft series in 2019, the component displays the matches for each group, a leaderboard for each group, and a round selector for each group, as well as the quarterfinals, semifinals, and final
        <>
          <h2
            style={{ color: "#6568A6", fontSize: "48px", textAlign: "center" }}
          >
            Fase de Grupos
          </h2>
          <h3
            style={{ color: "#6568A6", fontSize: "24px", textAlign: "center" }}
          >
            Grupo A
          </h3>
          <Leaderboard
            matches={tournamentMatches.data.filter((match) =>
              match.round.includes("Grupo A")
            )}
          />
          <RoundSelector
            matches={tournamentMatches.data.filter((match) =>
              match.round.includes("Grupo A")
            )}
          />
          <h3
            style={{ color: "#6568A6", fontSize: "32px", textAlign: "center" }}
          >
            Grupo B
          </h3>
          <Leaderboard
            matches={tournamentMatches.data.filter((match) =>
              match.round.includes("Grupo B")
            )}
          />
          <RoundSelector
            matches={tournamentMatches.data.filter((match) =>
              match.round.includes("Grupo B")
            )}
          />
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
      ) : (
        // if the tournament is not a draft, the component displays the quarterfinals, semifinals, and final
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
