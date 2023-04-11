import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import Match from "../matches/Match";

const Fixture = ({ matches }) => {
  const [round, setRound] = useState(1);

  return (
    <>
      <h2 style={{ color: "#6568A6", fontSize: "48px", textAlign: "center" }}>Fixture</h2>
      <div style={{ display: "flex", color: "white", backgroundColor: "#67669A", fontWeight: "bold", fontSize: "24px", alignItems: "center", borderRadius: "15px" }}>
        <ArrowLeftOutlined onClick={() => setRound(round - 1)} />
        Jornada {round}
        <ArrowRightOutlined onClick={() => setRound(round + 1)} />
      </div>
      {matches.map((match) => (
        <Match key={match._id} match={match} />
      ))}
    </>
  );
};

export default Fixture;
