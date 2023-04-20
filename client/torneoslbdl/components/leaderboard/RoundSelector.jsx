import React, { useEffect, useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import Match from "../matches/Match";

const RoundSelector = ({ matches }) => {
  const [round, setRound] = useState(1);

  const tournaments = Array.from(
    new Set(matches.flatMap((match) => [match.tournament]))
  );

  const nextRound = () => {
    if (round >= 3 && tournaments[0].includes("Draft")) {
      setRound(3);
    } else if (
      round >= tournaments.length &&
      tournaments[0].includes("Torneo")
    ) {
      setRound(tournaments.length);
    } else {
      setRound(round + 1);
    }
  };

  const previousRound = () => {
    if (round <= 1 && tournaments[0].includes("Draft")) {
      setRound(1);
    } else if (round <= 1 && tournaments[0].includes("Torneo")) {
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
        {matches[0].tournament.includes("Draft") ? (
          <>
            <ArrowLeftOutlined onClick={() => previousRound()} />
            Fecha {round}
            <ArrowRightOutlined onClick={() => nextRound()} />
          </>
        ) : (
          <>
            <ArrowLeftOutlined onClick={() => previousRound()} />
            Jornada {round}
            <ArrowRightOutlined onClick={() => nextRound()} />
          </>
        )}
      </div>
      {matches[0].tournament.includes("Draft")
        ? matches
            .filter((match) => match.round.includes(`Fecha ${round}`))
            .map((match) => <Match key={match._id} match={match} />)
        : matches
            .filter((match) => match.tournament === tournaments[round - 1])
            .map((match) => <Match key={match._id} match={match} />)}
    </>
  );
};

export default RoundSelector;
