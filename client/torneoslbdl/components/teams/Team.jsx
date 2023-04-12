import Image from "next/image";
import React, { useState } from "react";
import HistoryRecord from "../history/HistoryRecord";
import WinningStreak from "./WinningStreak";
import HistoryFilters from "../history/HistoryFilters";
import History from "../history/History";

const Team = (team) => {
  const [rival, setRival] = useState("all");
  const [category, setCategory] = useState("all");
  const [history, setHistory] = useState("all");
  const [matches, setMatches] = useState("all");
  const [goalDifference, setGoalDifference] = useState("all");
  const [teamHistory, setTeamHistory] = useState(team.matches.data);

  const { logo, name, _id } = team.team[0];

  const resetFilter = () => {
    setCategory("all");
    setGoalDifference("all");
    setHistory("all");
    setMatches("all");
    setRival("all");

    setTeamHistory(team.matches.data);
    return <History name={name} matches={teamHistory} />;
  };

  const filteringCategory = (e) => {
    const category = e.target.value;
    setCategory(category);

    category === "all"
      ? setTeamHistory(team.matches.data) && (
          <History name={name} matches={teamHistory} />
        )
      : category === "friendly"
      ? setTeamHistory(
          team.matches.data.filter((match) => match.friendly === true)
        ) && <History name={name} matches={teamHistory} />
      : setTeamHistory(
          team.matches.data.filter((match) => match.friendly === false)
        ) && <History name={name} matches={teamHistory} />;
  };
  const filteringGoalDifference = (e) => {
    const goalDifference = e.target.value;
    setGoalDifference(goalDifference);

    goalDifference === "all"
      ? setTeamHistory(team.matches.data) && (
          <History name={name} matches={teamHistory} />
        )
      : goalDifference === "+3"
      ? setTeamHistory(
          team.matches.data.filter(
            (match) =>
              (match.home === name &&
                match.homeScore > match.awayScore &&
                match.homeScore - match.awayScore >= 3) ||
              (match.away === name &&
                match.awayScore > match.homeScore &&
                match.awayScore - match.homeScore >= 3)
          )
        ) && <History name={name} matches={teamHistory} />
      : goalDifference === "+2"
      ? setTeamHistory(
          team.matches.data.filter(
            (match) =>
              (match.home === name &&
                match.homeScore > match.awayScore &&
                match.homeScore - match.awayScore === 2) ||
              (match.away === name &&
                match.awayScore > match.homeScore &&
                match.awayScore - match.homeScore === 2)
          )
        ) && <History matches={teamHistory} />
      : goalDifference === "+1"
      ? setTeamHistory(
          team.matches.data.filter(
            (match) =>
              (match.home === name &&
                match.homeScore > match.awayScore &&
                match.homeScore - match.awayScore === 1) ||
              (match.away === name &&
                match.awayScore > match.homeScore &&
                match.awayScore - match.homeScore === 1)
          )
        ) && <History matches={teamHistory} />
      : goalDifference === "0"
      ? setTeamHistory(
          team.matches.data.filter(
            (match) => match.homeScore - match.awayScore === 0
          )
        ) && <History matches={teamHistory} />
      : goalDifference === "-1"
      ? setTeamHistory(
          team.matches.data.filter(
            (match) =>
              (match.home !== name &&
                match.homeScore > match.awayScore &&
                match.homeScore - match.awayScore === 1) ||
              (match.away !== name &&
                match.awayScore > match.homeScore &&
                match.awayScore - match.homeScore === 1)
          )
        ) && <History matches={teamHistory} />
      : goalDifference === "-2"
      ? setTeamHistory(
          team.matches.data.filter(
            (match) =>
              (match.home !== name &&
                match.homeScore > match.awayScore &&
                match.homeScore - match.awayScore === 2) ||
              (match.away !== name &&
                match.awayScore > match.homeScore &&
                match.awayScore - match.homeScore === 2)
          )
        ) && <History matches={teamHistory} />
      : setTeamHistory(
          team.matches.data.filter(
            (match) =>
              (match.home !== name &&
                match.homeScore > match.awayScore &&
                match.homeScore - match.awayScore >= 3) ||
              (match.away !== name &&
                match.awayScore > match.homeScore &&
                match.awayScore - match.homeScore >= 3)
          )
        ) && <History matches={teamHistory} />;
  };

  const filteringMatches = (e) => {
    const matches = e.target.value;
    setMatches(matches);
    matches === "all"
      ? setTeamHistory(team.matches.data) && <History matches={teamHistory} />
      : matches === "won"
      ? setTeamHistory(
          team.matches.data.filter(
            (match) =>
              (match.home === name && match.homeScore > match.awayScore) ||
              (match.away === name && match.homeScore < match.awayScore) ||
              (match.away === name &&
                match.homePenalties < match.awayPenalties) ||
              (match.home === name && match.homePenalties > match.awayPenalties)
          )
        ) && <History matches={teamHistory} />
      : matches === "tied"
      ? setTeamHistory(
          team.matches.data.filter(
            (match) => match.homeScore === match.awayScore
          )
        ) && <History matches={teamHistory} />
      : setTeamHistory(
          team.matches.data.filter(
            (match) =>
              (match.home !== name && match.homeScore > match.awayScore) ||
              (match.away !== name && match.homeScore < match.awayScore) ||
              (match.away === name &&
                match.homePenalties > match.awayPenalties) ||
              (match.home === name && match.homePenalties < match.awayPenalties)
          )
        ) && <History matches={teamHistory} />;
  };
  const filteringRival = (e) => {
    const rival = e.target.value;
    setRival(rival);
    rival === "all"
      ? setTeamHistory(team.matches.data) && <History matches={teamHistory} />
      : setTeamHistory(
          team.matches.data.filter(
            (match) => match.home === rival || match.away === rival
          )
        ) && <History matches={teamHistory} />;
  };
  const filteringHistory = (e) => {
    const history = e.target.value;
    setHistory(history);
    history === "all"
      ? setTeamHistory(team.matches.data) && (
          <History name={name} matches={teamHistory} />
        )
      : history === "positive"
      ? console.log(history)
      : history === "tied"
      ? console.log(history)
      : console.log(history);
  };

  return (
    <>
      <main>
        <Image src={logo} alt={name} width={169} height={169} />
        <h1 style={{ fontSize: "64px" }}>{name}</h1>
        <WinningStreak teamMatches={team.matches.data} teamName={name} />
        <h4 style={{ fontSize: "16px", color: "#6568A6", fontWeight: "bold" }}>
          Historial
        </h4>
        <HistoryRecord teamName={name} teamMatches={team.matches.data} />
        <h2
          style={{
            marginTop: "1rem",
            textAlign: "center",
            color: "#6568A6",
            fontSize: "48px",
          }}
        >
          Historiales
        </h2>
        <HistoryFilters
          data={team.matches.data}
          teamName={name}
          rival={rival}
          goalDifference={goalDifference}
          history={history}
          matches={matches}
          category={category}
          filteringCategory={filteringCategory}
          filteringGoalDifference={filteringGoalDifference}
          filteringMatches={filteringMatches}
          filteringRival={filteringRival}
          filteringHistory={filteringHistory}
          resetFilter={resetFilter}
        />
        <History name={name} matches={teamHistory} />
      </main>
    </>
  );
};

export default Team;
