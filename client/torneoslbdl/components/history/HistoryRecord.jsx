import React from "react";
import TeamStats from "../teams/TeamStats";

const HistoryRecord = (data) => {  
  let wins = 0;
  let ties = 0;
  let losses = 0;

  return (
    <>
      <div className="history-record">
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
        <p style={{color: "white"}}>{wins}-</p>
        <p style={{color: "white"}}>{ties}-</p>
        <p style={{color: "white"}}>{losses}</p>
      </div>
      <div>
        <TeamStats data={data} wins={wins} ties={ties} losses={losses}/>
      </div>
    </>
  );
};

export default HistoryRecord;
