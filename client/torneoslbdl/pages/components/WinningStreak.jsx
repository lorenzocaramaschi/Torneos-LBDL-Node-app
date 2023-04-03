import { Circle } from "@mui/icons-material";
import React from "react";

const WinningStreak = (data) => {
  let teamMatchesClone = data.teamMatches;  
  let name = data.teamName;
  return (
    <>
      <div className="streak-bubble">
        {teamMatchesClone.map((match) => {
          if (match.homeScore > match.awayScore && name === match.home) {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Circle className="winning-circle" />
                <p style={{ position: "absolute" }}>G</p>
              </div>
            );
          } else if (match.homeScore < match.awayScore && name === match.away) {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Circle className="winning-circle" />
                <p style={{ position: "absolute" }}>G</p>
              </div>
            );
          }
          if (match.homeScore > match.awayScore && name === match.home) {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Circle className="winning-circle" />
                <p style={{ position: "absolute" }}>G</p>
              </div>
            );
          } else if (match.homeScore < match.awayScore && name === match.away) {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Circle className="winning-circle" />
                <p style={{ position: "absolute" }}>G</p>
              </div>
            );
          } else if (match.homeScore === match.awayScore) {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Circle className="tie-circle" />
                <p style={{ position: "absolute" }}>E</p>
              </div>
            );
          } else {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Circle className="losing-circle" />
                <p style={{ position: "absolute" }}>P</p>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default WinningStreak;