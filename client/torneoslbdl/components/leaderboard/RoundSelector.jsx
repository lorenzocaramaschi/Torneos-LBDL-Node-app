import React, { useEffect, useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import Match from "../matches/Match";

// displays a navigation bar with arrow buttons and a label indicating the current round or match day
const RoundSelector = ({ matches }) => {
  // we track the current round or match day
  const [round, setRound] = useState(1);

  // we generate an array of unique tournament names
  const tournaments = Array.from(
    new Set(matches.flatMap((match) => [match.tournament]))
  );

  // this functions update the round state variable based on the current value and the tournaments array
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

  // use uffect hook for mounts and updates in the component
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
        {/* This conditional says that if the tournament includes "Draft" then the Button should say "Fecha" instead of "Jornada", which is a subtle difference in Spanish, but you can change both to "Round" */}
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
      {/* This piece of code also only applies to "Draft" tournaments, you can just ignore them */}
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
