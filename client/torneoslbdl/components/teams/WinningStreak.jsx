import { Circle } from "@mui/icons-material";
import React from "react";

const WinningStreak = (data) => {
  let teamMatchesClone = data.teamMatches;
  let name = data.teamName;
  const streak = [];

  const Streak = () => {
    for (
      let i = teamMatchesClone.length - 5;
      i < teamMatchesClone.length;
      i++
    ) {      
      if (teamMatchesClone[i] === undefined) {
        streak.push(
          <div
            key={Math.random()}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Circle className="tie-circle" />
            <p style={{ position: "absolute", color: "white" }}>-</p>
          </div>
        );
      } else if (
        teamMatchesClone[i].homeScore > teamMatchesClone[i].awayScore &&
        name === teamMatchesClone[i].home
      ) {      
        streak.push(
          <div
            key={teamMatchesClone[i]._id}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Circle className="winning-circle" />
            <p style={{ position: "absolute", color: "white" }}>G</p>
          </div>
        );
      } else if (
        teamMatchesClone[i].homeScore < teamMatchesClone[i].awayScore &&
        name === teamMatchesClone[i].away
      ) {      

        streak.push(
          <div
            key={teamMatchesClone[i]._id}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Circle className="winning-circle" />
            <p style={{ position: "absolute", color: "white" }}>G</p>
          </div>
        );
      } else if (
        teamMatchesClone[i].homeScore === teamMatchesClone[i].awayScore &&
        teamMatchesClone[i].penalties === false
      ) {      

        streak.push(
          <div
            key={teamMatchesClone[i]._id}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Circle className="tie-circle" />
            <p style={{ position: "absolute", color: "white" }}>E</p>
          </div>
        );
      } else if (
        teamMatchesClone[i].homeScore === teamMatchesClone[i].awayScore &&
        teamMatchesClone[i].penalties === true
      ) {
        if (
          teamMatchesClone[i].homePenalties >
            teamMatchesClone[i].awayPenalties &&
          name === teamMatchesClone[i].home
        ) {
          streak.push(
            <div
              key={teamMatchesClone[i]._id}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Circle className="winning-circle" />
              <p style={{ position: "absolute", color: "white" }}>G</p>
            </div>
          );
        }

        if (
          teamMatchesClone[i].homePenalties <
            teamMatchesClone[i].awayPenalties &&
          name === teamMatchesClone[i].away
        ) {
          streak.push(
            <div
              key={teamMatchesClone[i]._id}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Circle className="winning-circle" />
              <p style={{ position: "absolute", color: "white" }}>G</p>
            </div>
          );
        } else if (
          teamMatchesClone[i].homePenalties <
            teamMatchesClone[i].awayPenalties &&
          name === teamMatchesClone[i].home
        ) {
          streak.push(
            <div
              key={teamMatchesClone[i]._id}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Circle className="losing-circle" />
              <p style={{ position: "absolute", color: "white" }}>P</p>
            </div>
          );
        } else if (
          teamMatchesClone[i].homePenalties >
            teamMatchesClone[i].awayPenalties &&
          name === teamMatchesClone[i].away
        ) {
          streak.push(
            <div
              key={teamMatchesClone[i]._id}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Circle className="losing-circle" />
              <p style={{ position: "absolute", color: "white" }}>P</p>
            </div>
          );
        }
      } else if (
        (teamMatchesClone[i].homeScore < teamMatchesClone[i].awayScore &&
          name === teamMatchesClone[i].home) ||
        (teamMatchesClone[i].homeScore > teamMatchesClone[i].awayScore &&
          name === teamMatchesClone[i].away)
      ) {      

        streak.push(
          <div
            key={teamMatchesClone[i]._id}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Circle className="losing-circle" />
            <p style={{ position: "absolute", color: "white" }}>P</p>
          </div>
        );
      }
    }

    return streak;
  };

  return (
    <>
      <div className="streak-bubble">{Streak()}</div>
    </>
  );
};

export default WinningStreak;
