import React from "react";

const TeamStats = (data) => {
  const name = data.data.teamName;
  let wins = data.wins;
  let ties = data.ties;
  let losses = data.losses;
  const teamMatches = data.data.teamMatches;
  let goalsScored = 0;
  let goalsReceived = 0;
  let finalsPlayed = teamMatches.filter((match) => match.round === "Final");
  let tournamentSelectedB;
  let tournamentsPlayed = 0;
  let tournamentsWon = 0;

  return (
    <>
      <div>
        <h2 style={{ textAlign: "center", color: "#6568A6", fontSize: "48px" }}>
          Estadísticas
        </h2>
        <div
          style={{
            backgroundColor: "#DFDFDF",
            color: "#6568A6",
            borderRadius: "14px",
            padding: "0.5rem",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          <p>Partidos jugados: {teamMatches.length}</p>
          <p>Partidos ganados: {wins}</p>
          <p>Partidos empatados: {ties}</p>
          <p>Partidos perdidos: {losses}</p>
          <p>
            Tasa de victorias: {((wins * 100) / teamMatches.length).toFixed()}%
          </p>
          <p>
            Goles anotados:{" "}
            {teamMatches.map((match) => {
              if (name === match.home) {
                goalsScored += match.homeScore;
              } else if (name === match.away) {
                goalsScored += match.awayScore;
              }
            })}
            {goalsScored}
          </p>
          <p>
            Goles recibidos:{" "}
            {teamMatches.map((match) => {
              if (name !== match.home) {
                goalsReceived += match.homeScore;
              } else if (name !== match.away) {
                goalsReceived += match.awayScore;
              }
            })}
            {goalsReceived}
          </p>
          <p>
            Promedio gol a favor por partido:{" "}
            {(goalsScored / teamMatches.length).toFixed(2)}
          </p>
          <p>
            Promedio gol en contra por partido:{" "}
            {(goalsReceived / teamMatches.length).toFixed(2)}
          </p>
          <p>
            Torneos jugados:{" "}
            {teamMatches.map((match) => {
              let tournamentSelected = match.tournament;
              if (
                tournamentSelected === tournamentSelectedB ||
                match.friendly === true
              ) {
              } else {
                tournamentsPlayed++;
                tournamentSelectedB = tournamentSelected;
              }
            })}
            {tournamentsPlayed}
          </p>
          <p>
            Torneos ganados:{" "}
            {finalsPlayed.length === 0
              ? (tournamentsWon = 0)
              : finalsPlayed.map((match) => {
                  if (
                    name === match.home &&
                    match.homeScore > match.awayScore
                  ) {
                    tournamentsWon++;
                  } else if (
                    name === match.away &&
                    match.homeScore < match.awayScore
                  ) {
                    tournamentsWon++;
                  } else if (
                    name === match.away &&
                    match.homePenalties < match.awayPenalties
                  ) {
                    tournamentsWon++;
                  } else if (
                    name === match.home &&
                    match.homePenalties > match.awayPenalties
                  ) {
                    tournamentsWon++;
                  } else {
                    tournamentsWon;
                  }
                }) && tournamentsWon}
          </p>
        </div>
      </div>
    </>
  );
};

export default TeamStats;