import React from "react";

const LeaderboardRows = ({ matches }) => {
  const teams = Array.from(
    new Set(matches.flatMap((match) => [match.home, match.away]))
  );

  const sortedTeams = teams.sort((a, b) => {
    const aScore = matches.reduce(
      (acc, match) =>
        (match.awayScore > match.homeScore && match.away === a) ||
        (match.awayScore < match.homeScore && match.home === a)
          ? acc + 3
          : match.homeScore === match.awayScore &&
            (match.home === a || match.away === a)
          ? acc + 1
          : acc + 0,
      0
    );
    const bScore = matches.reduce(
      (acc, match) =>
        (match.awayScore > match.homeScore && match.away === b) ||
        (match.awayScore < match.homeScore && match.home === b)
          ? acc + 3
          : match.homeScore === match.awayScore &&
            (match.home === b || match.away === b)
          ? acc + 1
          : acc + 0,
      0
    );

    return bScore - aScore;
  });

  return (
    <>
      {sortedTeams
        .map((team, index) => {
          const score = matches.reduce(
            (acc, match) =>
              (match.awayScore > match.homeScore && match.away === team) ||
              (match.awayScore < match.homeScore && match.home === team)
                ? acc + 3
                : match.homeScore === match.awayScore &&
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
              <td style={{ textAlign: "center", fontWeight: "bold" }}>
                {index + 1}
              </td>
              <td style={{ textAlign: "center", fontWeight: "bold" }}>
                {team}
              </td>
              <td style={{ textAlign: "center", fontWeight: "bold" }}>
                {score}
              </td>
              <td style={{ textAlign: "center", fontWeight: "bold" }}>
                {
                  matches.filter(
                    (match) => match.home === team || match.away === team
                  ).length
                }
              </td>
              <td style={{ textAlign: "center", fontWeight: "bold" }}>
                {matches.reduce(
                  (acc, match) =>
                    (match.awayScore > match.homeScore &&
                      match.away === team) ||
                    (match.awayScore < match.homeScore && match.home === team)
                      ? acc + 1
                      : acc + 0,
                  0
                )}
              </td>
              <td style={{ textAlign: "center", fontWeight: "bold" }}>
                {matches.reduce(
                  (acc, match) =>
                    match.awayScore === match.homeScore &&
                    (match.home === team || match.away === team)
                      ? acc + 1
                      : acc + 0,
                  0
                )}
              </td>
              <td style={{ textAlign: "center", fontWeight: "bold" }}>
                {matches.reduce(
                  (acc, match) =>
                    (match.awayScore > match.homeScore &&
                      match.home === team) ||
                    (match.awayScore < match.homeScore && match.away === team)
                      ? acc + 1
                      : acc + 0,
                  0
                )}
              </td>
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
        })
        .sort((a, b) => {
          const aScore = parseInt(a.props.children[2].props.children, 10);
          const bScore = parseInt(b.props.children[2].props.children, 10);
          if (aScore !== bScore) {
            return bScore - aScore;
          } else {
            const aGoalsFor = parseInt(a.props.children[8].props.children, 10);
            const aGoalsAgainst = parseInt(
              a.props.children[9].props.children,
              10
            );
            const aGoalDiff = aGoalsFor - aGoalsAgainst;
            const bGoalsFor = parseInt(b.props.children[8].props.children, 10);
            const bGoalsAgainst = parseInt(
              b.props.children[9].props.children,
              10
            );
            const bGoalDiff = bGoalsFor - bGoalsAgainst;
           
            return bGoalDiff + aGoalDiff;
          }
        })}
    </>
  );
};

export default LeaderboardRows;
