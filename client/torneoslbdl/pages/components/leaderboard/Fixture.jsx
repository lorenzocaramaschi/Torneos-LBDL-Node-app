import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import Match from "../matches/Match";

const Fixture = ({ matches }) => {
  const [round, setRound] = useState(1);

  return (
    <>
      <h2>Fixture</h2>
      <div style={{ display: "flex" }}>
        <ArrowLeftOutlined onClick={() => setRound(round - 1)} />
        Jornada {round}
        <ArrowRightOutlined onClick={() => setRound(round + 1)} />
      </div>
      {matches.map((match) => (
        <Match match={match} />
      ))}
    </>
  );
};

export default Fixture;
