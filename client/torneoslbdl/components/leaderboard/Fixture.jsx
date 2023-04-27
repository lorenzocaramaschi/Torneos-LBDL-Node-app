import React from "react";
import RoundSelector from "./RoundSelector";

// displays a fixture of matches
const Fixture = ({ matches }) => {
  return (
    <>
      {/* If there are no matches we display this message ("No matches available"), and if we have matches we sent them to a round selector */}
      {matches.length === 0 ? (
        <div>No hay partidos disponibles.</div>
      ) : (
        <>
          <h2
            style={{ color: "#6568A6", fontSize: "48px", textAlign: "center" }}
          >
            Fixture
          </h2>
          {/* allows the user to select a round of matches to display */}
          <RoundSelector matches={matches} />
        </>
      )}
    </>
  );
};

export default Fixture;
