import React, { useEffect, useState } from "react";

const LeaderboardRows = ({ matches }) => {
  const [filter, setFilter] = useState([]);
  const [wins, setWins] = useState(0);
  const [draws, setDraws] = useState(0);
  const [lost, setLost] = useState(0);
  const [goalsFor, setGoalsFor] = useState(0);
  const [goalsAgainst, setGoalsAgainst] = useState(0);

  return (
    <>
      {matches.map((match) => (
        <tr key={match._id}>
          <th>{matches.length - 6}</th>
          <th>{match.home}</th>
          <th>
            {match.homeScore > match.awayScore
              ? 3
              : match.homeScore < match.awayScore
              ? 0
              : 1}
          </th>
          <th>
            {useEffect(() => {
              setFilter(
                matches.filter((matchEl) => matchEl.home === match.home)
              );
            }, [])}
            {filter.length}
          </th>
          <th>
            {useEffect(() => {
              match.homeScore > match.awayScore && setWins(wins + 1);
            }, [])}
            {wins}
          </th>
          <th>
            {useEffect(() => {
              match.homeScore === match.awayScore && setDraws(draws + 1);
            }, [])}
            {draws}
          </th>
          <th>
            {useEffect(() => {
              match.homeScore < match.awayScore && setLost(lost + 1);
            }, [])}
            {lost}
          </th>
          <th>{useEffect(() => {
             setGoalsFor(matches.reduce((acc,match)=> match.homeScore + acc, 0))
            }, [])}
            {goalsFor}</th>
          <th>{useEffect(() => {
             setGoalsAgainst(matches.reduce((acc,match)=> match.awayScore + acc, 0))
            }, [])}
            {goalsAgainst}</th>
          <th>{goalsFor-goalsAgainst}</th>
        </tr>
      ))}
    </>
  );
};

export default LeaderboardRows;
