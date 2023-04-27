import React from "react";
import TeamStats from "../teams/TeamStats";

// displays a team's win, loss, and tie record based on their past matches
const HistoryRecord = (data) => {
  // data contains the team's name and past matches

  // we initialize wins, ties and losses
  let wins = 0;
  let ties = 0;
  let losses = 0;

  return (
    <>
      <div className="history-record">
        {/* we map over the teamMatches array in data, incrementing the appropriate record variable depending on whether the team won, tied, or lost the match */}
        {data.teamMatches.map((match) => {
          if (
            data.teamName === match.home &&
            match.homeScore > match.awayScore
          ) {
            wins++;
          } else if (
            data.teamName === match.away &&
            match.homeScore < match.awayScore
          ) {
            wins++;
          } else if (match.awayScore === match.homeScore) {
            ties++;
          } else {
            losses++;
          }
        })}
        {/*  we display the win-loss-tie record using three <p> elements with the respective count for each */}
        <p style={{ color: "white" }}>{wins}-</p>
        <p style={{ color: "white" }}>{ties}-</p>
        <p style={{ color: "white" }}>{losses}</p>
      </div>
      <div>
        {/* then we render the TeamStats component, passing in the same data prop as well as the wins, ties, and losses variables */}
        <TeamStats data={data} wins={wins} ties={ties} losses={losses} />
      </div>
    </>
  );
};

export default HistoryRecord;
