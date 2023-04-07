import React, { useState } from "react";
import RoundSelector from "../rounds/RoundSelector";
import TableHeader from "./TableHeader";
import LeagueTableRow from "./LeagueTableRow";

const newTeam = {
  won: 0,
  drawn: 0,
  lost: 0,
  goalFor: 0,
  goalAgainst: 0,
  point: 0,
};

const LeagueTable = ({matches}) => {
  const [round, setRound] = useState(1);

  const onRoundChange = (num) => {
    setRound(num);
  };

  const renderRow = (json) => {
    let teams = {};
    for (let i = 0; i < round; i++) {
      const round = json[i];
      console.log(round);

      round.forEach((match) => {
        const team1 = match.home;
        const score1 = match.homeScore;
        const score2 = match.awayScore;
        const team2 = match.away;

        if (!teams[team1]) {
          teams[team1] = Object.assign({}, newTeam);
        }

        if (!teams[team2]) {
          teams[team2] = Object.assign({}, newTeam);
        }
        teams[team1].goalFor += score1;
        teams[team2].goalFor += score2;
        teams[team1].goalAgainst += score2;
        teams[team2].goalAgainst += score1;
        if (score1 - score2 > 0) {
          teams[team1].won += 1;
          teams[team2].lost += 1;
          teams[team1].point += 3;
        } else if (score1 - score2 === 0) {
          teams[team1].drawn += 1;
          teams[team2].drawn += 1;
          teams[team1].point += 1;
          teams[team2].point += 1;
        } else {
          teams[team1].lost += 1;
          teams[team2].won += 1;
          teams[team2].point += 3;
        }
      });
    }

    const sortedTeams = Object.entries(teams).sort((teamA, teamB) => {
      if (teamA[1].point > teamB[1].point) {
        return -1;
      } else if (teamA[1].point < teamB[1].point) {
        return 1;
      } else {
        return -1;
      }
    });
    return sortedTeams.map((team, index) => (
      <LeagueTableRow
        {...team[1]}
        key={team[0]}
        position={index + 1}
        name={team[0]}
      />
    ));
  };

  return (
    <div>
      <RoundSelector onRoundChange={onRoundChange} />
      <table>
        <TableHeader />
          {renderRow(matches)}        
      </table>
    </div>
  );
};

export default LeagueTable;
