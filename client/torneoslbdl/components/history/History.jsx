import React from "react";
import HistoryAgainstRival from "./HistoryAgainstRival";
import Match from "../matches/Match";

const History = ({ matches, name }) => {
  
  return (
    <div>
      <div>
        {matches.map((match) => {
          let rival;
          match.home === name ? (rival = match.away) : (rival = match.home);
          let historyAgainstRival = matches.filter(
            (matchEl) => matchEl.home === rival || matchEl.away === rival
          );

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
