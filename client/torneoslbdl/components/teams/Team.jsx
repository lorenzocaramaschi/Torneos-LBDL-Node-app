import Image from "next/image";
import React, { useState } from "react";
import HistoryRecord from "../history/HistoryRecord";
import WinningStreak from "./WinningStreak";
import HistoryFilters from "../history/HistoryFilters";
import History from "../history/History";

// renders a team's profile, this includes: matches, history and stats.
const Team = (team) => {
  // we will need to manage several variables that we'll use in a History Filter
  const [rival, setRival] = useState("all");
  const [category, setCategory] = useState("all");
  const [history, setHistory] = useState("all");
  const [matches, setMatches] = useState("all");
  const [goalDifference, setGoalDifference] = useState("all");
  const [teamHistory, setTeamHistory] = useState(team.matches);

  const { logo, name } = team.team[0]; // we get the logo and name of the team

  // resets the filter
  const resetFilter = () => {
    setCategory("all");
    setGoalDifference("all");
    setHistory("all");
    setMatches("all");
    setRival("all");

    setTeamHistory(team.matches);
    return <History name={name} matches={teamHistory} />;
  };

  // here we have several filters that handle event changes in the value of the states declared before

  // checks the category, whether its official or friendly
  const filteringCategory = (e) => {
    const category = e.target.value;
    setCategory(category);

    category === "all"
      ? setTeamHistory(team.matches) && (
          <History name={name} matches={teamHistory} />
        )
      : category === "friendly"
      ? setTeamHistory(
          team.matches.filter((match) => match.friendly === true)
        ) && <History name={name} matches={teamHistory} />
      : setTeamHistory(
          team.matches.filter((match) => match.friendly === false)
        ) && <History name={name} matches={teamHistory} />;
  };

  // returns matches with the goal difference selected
  const filteringGoalDifference = (e) => {
    const goalDifference = e.target.value;
    setGoalDifference(goalDifference);

    goalDifference === "all"
      ? setTeamHistory(team.matches) && (
          <History name={name} matches={teamHistory} />
        )
      : goalDifference === "+3"
      ? setTeamHistory(
          team.matches.filter(
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
          team.matches.filter(
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
          team.matches.filter(
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
          team.matches.filter(
            (match) => match.homeScore - match.awayScore === 0
          )
        ) && <History matches={teamHistory} />
      : goalDifference === "-1"
      ? setTeamHistory(
          team.matches.filter(
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
          team.matches.filter(
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
          team.matches.filter(
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

  // return matches where you won, tied, or lost, depending what the matches variable is
  const filteringMatches = (e) => {
    const matches = e.target.value;
    setMatches(matches);
    matches === "all"
      ? setTeamHistory(team.matches) && <History matches={teamHistory} />
      : matches === "won"
      ? setTeamHistory(
          team.matches.filter(
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
          team.matches.filter((match) => match.homeScore === match.awayScore)
        ) && <History matches={teamHistory} />
      : setTeamHistory(
          team.matches.filter(
            (match) =>
              (match.home !== name && match.homeScore > match.awayScore) ||
              (match.away !== name && match.homeScore < match.awayScore) ||
              (match.away === name &&
                match.homePenalties > match.awayPenalties) ||
              (match.home === name && match.homePenalties < match.awayPenalties)
          )
        ) && <History matches={teamHistory} />;
  };

  // returns matches against an specific rival
  const filteringRival = (e) => {
    const rival = e.target.value;
    setRival(rival);
    rival === "all"
      ? setTeamHistory(team.matches) && <History matches={teamHistory} />
      : setTeamHistory(
          team.matches.filter(
            (match) => match.home === rival || match.away === rival
          )
        ) && <History matches={teamHistory} />;
  };

  // this filter isn't working right now
  const filteringHistory = (e) => {
    const history = e.target.value;
    setHistory(history);
    history === "all"
      ? setTeamHistory(team.matches) && (
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
        {/* renders the team's logo */}
        <Image src={logo} alt={name} width={169} height={169} />
        {/* renders the team's name */}
        <h1 style={{ fontSize: "64px" }}>{name}</h1>
        {/* renders team's last 5 matches streak */}
        <WinningStreak teamMatches={team.matches} teamName={name} />
        <h4 style={{ fontSize: "16px", color: "#6568A6", fontWeight: "bold" }}>
          Historial
        </h4>
        {/* returns the team's history of ALL its matches played in a won-tied-lost count */}
        <HistoryRecord teamName={name} teamMatches={team.matches} />
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
        {/* returns a filter manager for the matches the team has played, and we pass the specific states and functions we generated previously */}
        <HistoryFilters
          data={team.matches}
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
        {/* returns the team's history after being filtered */}
        <History name={name} matches={teamHistory} />
      </main>
    </>
  );
};

export default Team;
