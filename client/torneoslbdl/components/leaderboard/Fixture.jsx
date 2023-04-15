import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Match from "../matches/Match";

const Fixture = ({ matches }) => {
  const [round, setRound] = useState(1);

  const tournaments = Array.from(
    new Set(matches.flatMap((match) => [match.tournament]))
  );

  const nextRound = () => {
    if (round >= tournaments.length) {
      setRound(tournaments.length);
    } else {
      setRound(round + 1);
    }
  };

  const previousRound = () => {
    if (round <= 1) {
      setRound(1);
    } else {
      setRound(round - 1);
    }
  };

  useEffect(() => {
    nextRound();
  }, []);

  useEffect(() => {
    previousRound();
  }, []);

  return (
    <>
      <h2 style={{ color: "#6568A6", fontSize: "48px", textAlign: "center" }}>
        Fixture
      </h2>
      <div
        style={{
          display: "flex",
          color: "white",
          backgroundColor: "#67669A",
          fontWeight: "bold",
          fontSize: "24px",
          alignItems: "center",
          borderRadius: "15px",
        }}
      >
        <ArrowLeftOutlined onClick={() => previousRound()} />
        Jornada {round}
        <ArrowRightOutlined onClick={() => nextRound()} />
      </div>
      {matches
        .filter((match) => match.tournament === tournaments[round - 1])
        .map((match) => (
          <Match key={match._id} match={match} />
        ))}
    </>
  );
};

export default Fixture;
