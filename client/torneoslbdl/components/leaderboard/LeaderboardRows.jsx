import React from "react";

const LeaderboardRows = ({ matches }) => {
  const teams = Array.from(
    new Set(matches.flatMap((match) => [match.home, match.away]))
  );

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
      {sortedTeams.map((team, index) => {
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
