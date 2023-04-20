import React from "react";
import RoundSelector from "./RoundSelector";

const Fixture = ({ matches }) => {
  return (
    <>
      {matches.length === 0 ? (
        <div>No hay partidos disponibles.</div>
      ) : (
        <>
          <h2
            style={{ color: "#6568A6", fontSize: "48px", textAlign: "center" }}
          >
            Fixture
          </h2>
          <RoundSelector matches={matches} />
        </>
      )}
    </>
  );
};

export default Fixture;
