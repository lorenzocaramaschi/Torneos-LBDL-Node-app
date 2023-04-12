import React, { useState } from "react";
import HistoryAgainstRival from "./HistoryAgainstRival";
import Match from "../matches/Match";

const History = ({ matches, name }) => {
  const rivals = Array.from(
    new Set(matches.flatMap((match) => [match.home, match.away]))
  ).filter((rival) => rival !== name);

  return (
    <div>
      <div>
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
