import React from "react";
import HistoryAgainstRival from "./HistoryAgainstRival";
import Match from "../matches/Match";

const History = ({ matches, name }) => {
  let rivals = [];

  return (
    <div>
      <div>
        {matches.map((match) => {
          let rival;
          match.home === name
            ? (rival = match.away) && rivals.includes(match.away)
              ? rivals
              : rivals.push(match.away)
            : (rival = match.home) && rivals.includes(match.home)
            ? rivals
            : rivals.push(match.home);
          let historyAgainstRival = matches.filter((match) => {
            match.home === rival || match.away === rival;
          });

          return (
            <div key={match._id}>
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
                <Match match={match} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default History;
