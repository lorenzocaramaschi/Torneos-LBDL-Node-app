import { PlayArrow } from "@mui/icons-material";
import Link from "next/link";
import React from "react";

const TournamentStats = ({ tournamentMatches, tournament }) => {
  let tournamentGoals = 0;
  tournamentMatches.data.map((match) => {
    let matchGoals = match.awayScore + match.homeScore;
    tournamentGoals += matchGoals;
  });

  return (
    <>
      <h2 style={{ color: "#6568A6", fontSize: "48px", textAlign: "center" }}>
        Estadísticas
      </h2>
      <div style={{backgroundColor: "#DFDFDF", borderRadius: "14px", padding: "24px", color: "#6568A6", fontSize: "18px", fontWeight: "bold"}}>
        <p>Goles anotados: {tournamentGoals}</p>
        <p>
          Promedio de gol por partido:{" "}
          {(tournamentGoals / tournamentMatches.data.length).toFixed(2)}
        </p>
        {tournament[0].playlist === null ? (
          <p>Este torneo no fue filmado.</p>
        ) : (
          <p>
            Playlist:{" "}
            <Link target="_blank" href={tournament[0].playlist} key={tournament[0]._id}>
              <PlayArrow />
            </Link>
          </p>
        )}
        <p>
          Campeón:{" "}
          {tournamentMatches.data.map((match) => {
            if (
              (match.round === "Final" && match.homeScore > match.awayScore) ||
              (match.round === "Final" &&
                match.homePenalties > match.awayPenalties)
            ) {
              return match.home;
            } else if (
              (match.round === "Final" && match.homeScore < match.awayScore) ||
              (match.round === "Final" &&
                match.homePenalties < match.awayPenalties)
            ) {
              return match.away;
            }
          })}
        </p>
      </div>
    </>
  );
};

export default TournamentStats;
