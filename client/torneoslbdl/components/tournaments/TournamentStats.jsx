import { PlayArrow } from "@mui/icons-material";
import Link from "next/link";
import React from "react";

//renders tournament statistics
const TournamentStats = ({ tournamentMatches, tournament }) => {
  let tournamentGoals = 0; // initializing tournamentGoals to 0
  tournamentMatches.data.map((match) => {
    // mapping through matches to calculate total goals
    let matchGoals = match.awayScore + match.homeScore;
    tournamentGoals += matchGoals;
  });

  return (
    <>
      <h2 style={{ color: "#6568A6", fontSize: "48px", textAlign: "center" }}>
        Estadísticas // Heading for tournament stats
      </h2>
      <div
        style={{
          backgroundColor: "#DFDFDF",
          borderRadius: "14px",
          padding: "24px",
          color: "#6568A6",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        <p>Goles anotados: {tournamentGoals}</p> {/* display goals scored */}
        <p>
          Promedio de gol por partido:{" "}
          {(tournamentGoals / tournamentMatches.data.length).toFixed(2)}
        </p>
        {tournament[0].playlist === null ? ( // checking if the tournament has a playlist
          <p>Este torneo no fue filmado.</p> // displaying a message if there is no playlist
        ) : (
          <p>
            Playlist:{" "}
            <Link
              target="_blank"
              href={tournament[0].playlist}
              key={tournament[0]._id}
            >
              {" "}
              {/* linking to the tournament playlist */}
              <PlayArrow />
            </Link>
          </p>
        )}
        <p>
          Campeón: {/* displays the champion of the tournament */}
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
