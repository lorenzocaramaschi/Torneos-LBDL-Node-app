import React from "react";

// This is just the header of the table
const LeaderboardHeader = () => {
  return (
    <thead style={{ backgroundColor: "#67669A" }}>
      <tr>
        <th>Puesto</th> {/* Rank  */}
        <th>Equipo</th> {/* Team */}
        <th>Pts</th> {/* Points */}
        <th>PJ</th> {/* MatchesPlayed */}
        <th>G</th> {/* Won */}
        <th>E</th> {/* Tied */}
        <th>P</th> {/* Lost */}
        <th>GF</th> {/* GoalsFor */}
        <th>GC</th> {/* GoalsAgainst */}
        <th>DIF</th> {/* GoalDifference */}
      </tr>
    </thead>
  );
};

export default LeaderboardHeader;
