import React from "react";
import LeaderboardHeader from "./LeaderboardHeader";
import LeaderboardRows from "./LeaderboardRows";

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
      <LeaderboardHeader />
      <tbody>
        <LeaderboardRows matches={matches} />
      </tbody>
    </table>
  );
};

export default Leaderboard;
