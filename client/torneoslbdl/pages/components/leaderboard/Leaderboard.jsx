import React from "react";
import Fixture from "./Fixture";
import LeaderboardHeader from "./LeaderboardHeader";
import LeaderboardRows from "./LeaderboardRows";

const Leaderboard = ({ teams, matches }) => {
  return (
    <>
      <div>Leaderboard</div>
      <table>
        <LeaderboardHeader />
        <LeaderboardRows matches={matches.data}/>
      </table>
      <Fixture teams={teams.data} matches={matches.data} />
    </>
  );
};

export default Leaderboard;
