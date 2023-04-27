import React from "react";
import LeaderboardHeader from "./LeaderboardHeader";
import LeaderboardRows from "./LeaderboardRows";

// displays a leaderboard table for the set of matches it receives
const Leaderboard = ({ matches }) => {
  return (
    <table
      style={{
        backgroundColor: "#6F72A7",
        margin: "1rem",
        width: "100%",
        color: "white",
        borderRadius: "5px",
      }}
    >
      {/* Table header component */}
      <LeaderboardHeader />
      <tbody>
        {/* we pass the matches to render each row of teams info with LeaderboarRows component */}
        <LeaderboardRows matches={matches} />
      </tbody>
    </table>
  );
};

export default Leaderboard;
