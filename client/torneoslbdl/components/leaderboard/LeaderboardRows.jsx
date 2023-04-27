import React from "react";

// generates the leaderboard table for a tournament
const LeaderboardRows = ({ matches }) => {
  // we extract a list of unique teams from the matches array.
  const teams = Array.from(
    new Set(matches.flatMap((match) => [match.home, match.away]))
  );

  // then we sort this list of teams based on their scores, goal differences, and goals scored
  const sortedTeams = teams.sort((a, b) => {
    const aScore = matches.reduce(
      (acc, match) =>
        (match.awayScore > match.homeScore && match.away === a) ||
        (match.awayScore < match.homeScore && match.home === a) ||
        (match.awayPenalties > match.homePenalties && match.away === a) ||
        (match.awayPenalties < match.homePenalties && match.home === a)
          ? acc + 3
          : match.homeScore === match.awayScore &&
            match.penalties === false &&
            (match.home === a || match.away === a)
          ? acc + 1
          : acc + 0,
      0
    );
    const bScore = matches.reduce(
      (acc, match) =>
        (match.awayScore > match.homeScore && match.away === b) ||
        (match.awayScore < match.homeScore && match.home === b) ||
        (match.awayPenalties > match.homePenalties && match.away === b) ||
        (match.awayPenalties < match.homePenalties && match.home === b)
          ? acc + 3
          : match.homeScore === match.awayScore &&
            match.penalties === false &&
            (match.home === b || match.away === b)
          ? acc + 1
          : acc + 0,
      0
    );

    const aGoalsFor = matches.reduce(
      (acc, match) =>
        match.home === a
          ? acc + match.homeScore
          : match.away === a
          ? acc + match.awayScore
          : acc,
      0
    );

    const bGoalsFor = matches.reduce(
      (acc, match) =>
        match.home === b
          ? acc + match.homeScore
          : match.away === b
          ? acc + match.awayScore
          : acc,
      0
    );

    const aGoalsAgainst = matches.reduce(
      (acc, match) =>
        match.home !== a && match.away === a
          ? acc + match.homeScore
          : match.away !== a && match.home === a
          ? acc + match.awayScore
          : acc,
      0
    );

    const bGoalsAgainst = matches.reduce(
      (acc, match) =>
        match.home !== b && match.away === b
          ? acc + match.homeScore
          : match.away !== b && match.home === b
          ? acc + match.awayScore
          : acc,
      0
    );

    const aGoalDiff = aGoalsFor - aGoalsAgainst;

    const bGoalDiff = bGoalsFor - bGoalsAgainst;

    if (aScore !== bScore) {
      return bScore - aScore;
    }
    if (aGoalDiff !== bGoalDiff) {
      return bGoalDiff - aGoalDiff;
    }
    if (aGoalsFor !== bGoalsFor) {
      return bGoalsFor - aGoalsFor;
    }
  });

  return (
    <>
      {/* sorted teams then are mapped in a table row*/}
      {sortedTeams.map((team, index) => {
        // here we calculate the points of each team
        const score = matches.reduce(
          (acc, match) =>
            (match.awayScore > match.homeScore && match.away === team) ||
            (match.awayScore < match.homeScore && match.home === team) ||
            (match.awayPenalties > match.homePenalties &&
              match.away === team) ||
            (match.awayPenalties < match.homePenalties && match.home === team)
              ? acc + 3
              : match.homeScore === match.awayScore &&
                match.penalties === false &&
                (match.home === team || match.away === team)
              ? acc + 1
              : acc + 0,
          0
        );
        return (
          <tr
            key={team}
            style={
              // Ignore this conditional. It says that if "Draft" is included in the name's tournament, only top 2 players will be styled differently
              matches[0].tournament.includes("Draft")
                ? index < 2
                  ? { backgroundColor: "#49496d" }
                  : {}
                : // you'll probably be using this, which states that last 3 teams are styled in red (relegation) and first 8 qualify for an special tournament and are styled in black
                index < 8
                ? { backgroundColor: "black", color: "gold" }
                : index > sortedTeams.length - 3
                ? { backgroundColor: "#ec5353" }
                : {}
            }
          >
            {/* Position */}
            <td style={{ textAlign: "center", fontWeight: "bold" }}>
              {index + 1}
            </td>
            {/* Team */}
            <td style={{ textAlign: "center", fontWeight: "bold" }}>{team}</td>
            {/* Points */}
            <td style={{ textAlign: "center", fontWeight: "bold" }}>{score}</td>
            {/* Matches played */}
            <td style={{ textAlign: "center", fontWeight: "bold" }}>
              {
                matches.filter(
                  (match) => match.home === team || match.away === team
                ).length
              }
            </td>
            {/* Matches won */}
            <td style={{ textAlign: "center", fontWeight: "bold" }}>
              {matches.reduce(
                (acc, match) =>
                  (match.awayScore > match.homeScore && match.away === team) ||
                  (match.awayScore < match.homeScore && match.home === team) ||
                  (match.awayPenalties > match.homePenalties &&
                    match.away === team) ||
                  (match.awayPenalties < match.homePenalties &&
                    match.home === team)
                    ? acc + 1
                    : acc + 0,
                0
              )}
            </td>
            {/* Matches tied */}
            <td style={{ textAlign: "center", fontWeight: "bold" }}>
              {matches.reduce(
                (acc, match) =>
                  match.awayScore === match.homeScore &&
                  match.penalties === false &&
                  (match.home === team || match.away === team)
                    ? acc + 1
                    : acc + 0,
                0
              )}
            </td>
            {/* Matches lost */}
            <td style={{ textAlign: "center", fontWeight: "bold" }}>
              {matches.reduce(
                (acc, match) =>
                  (match.awayScore > match.homeScore && match.home === team) ||
                  (match.awayScore < match.homeScore && match.away === team) ||
                  (match.awayPenalties > match.homePenalties &&
                    match.home === team) ||
                  (match.awayPenalties < match.homePenalties &&
                    match.away === team)
                    ? acc + 1
                    : acc + 0,
                0
              )}
            </td>
            {/* Goals For */}
            <td style={{ textAlign: "center", fontWeight: "bold" }}>
              {matches.reduce(
                (acc, match) =>
                  match.home === team
                    ? acc + match.homeScore
                    : match.away === team
                    ? acc + match.awayScore
                    : acc + 0,
                0
              )}
            </td>
            {/* Goals Against */}
            <td style={{ textAlign: "center", fontWeight: "bold" }}>
              {matches.reduce(
                (acc, match) =>
                  match.home === team
                    ? acc + match.awayScore
                    : match.away === team
                    ? acc + match.homeScore
                    : acc + 0,
                0
              )}
            </td>
            {/* Goal Difference */}
            <td style={{ textAlign: "center", fontWeight: "bold" }}>
              {matches.reduce(
                (acc, match) =>
                  match.home === team
                    ? acc + match.homeScore
                    : match.away === team
                    ? acc + match.awayScore
                    : acc + 0,
                0
              ) -
                matches.reduce(
                  (acc, match) =>
                    match.home === team
                      ? acc + match.awayScore
                      : match.away === team
                      ? acc + match.homeScore
                      : acc + 0,
                  0
                )}
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default LeaderboardRows;
