import React from "react";
import HistoryAgainstRival from "./HistoryAgainstRival";
import Match from "../matches/Match";

// displays the match history of a team against their rivals
// also  takes in two props, "matches" and "name", which are an array of matches and the name of the team, respectively
const History = ({ matches, name }) => {
  // filters out the team's own name from the list of rivals, and then maps over the remaining rivals
  const rivals = Array.from(
    new Set(matches.flatMap((match) => [match.home, match.away]))
  ).filter((rival) => rival !== name);

  return (
    <div>
      <div>
        {/* for each rival it creates a "HistoryAgainstRival" component and passes in the necessary props
            then maps over the matches against that rival and creates a "Match" component for each one */}
        {rivals.map((rival) => {
          const historyAgainstRival = matches.filter(
            (match) => match.home === rival || match.away === rival
          );

          return (
            <div key={rival}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                <HistoryAgainstRival
                  matches={matches}
                  rival={rival}
                  historyAgainstRival={historyAgainstRival}
                  name={name}
                  rivals={rivals}
                />
              </div>
              <div>
                {historyAgainstRival.map((match) => {
                  return <Match key={match._id} match={match} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default History;
