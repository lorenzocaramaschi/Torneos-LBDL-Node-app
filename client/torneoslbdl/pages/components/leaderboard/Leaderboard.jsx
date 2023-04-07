import React from "react";
import LeaderboardHeader from "./LeaderboardHeader";
import LeaderboardRows from "./LeaderboardRows";

const Leaderboard = ({teams, matches}) => {
  return (
    <table>
      <LeaderboardHeader />
      <LeaderboardRows matches={matches} />
    </table>
  );
};

export default Leaderboard;
