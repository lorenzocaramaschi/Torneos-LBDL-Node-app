import React from "react";

const HistoryAgainstRival = ({ name, historyAgainstRival, rival }) => {
  let winsVsRival = 0;
  let lossesVsRival = 0;
  let tiesVsRival = 0;

  const resetHistoryParams = () => {
    winsVsRival = 0;
    lossesVsRival = 0;
    tiesVsRival = 0;
  };
  return (
    <>
      <h3 style={{color: "#6568A6", fontSize: "40px"}}>
        vs {rival}{" "}
      </h3>
      {resetHistoryParams()}
      {historyAgainstRival.map((match) => {
        if (name === match.home && match.homeScore > match.awayScore) {
          winsVsRival++;
        } else if (name === match.away && match.homeScore < match.awayScore) {
          winsVsRival++;
        } else if (match.awayScore === match.homeScore) {
          tiesVsRival++;
        } else {
          lossesVsRival++;
        }
      })}
      {winsVsRival > lossesVsRival ? (
        <div className="winning-history">
          <p style={{color: "white", fontSize: "24px"}}>
            {winsVsRival}-{tiesVsRival}-{lossesVsRival}
          </p>
        </div>
      ) : lossesVsRival > winsVsRival ? (
        <div className="losing-history">
          <p style={{color: "white", fontSize: "24px"}}>
            {winsVsRival}-{tiesVsRival}-{lossesVsRival}
          </p>
        </div>
      ) : (
        <div className="tie-history">
          <p style={{color: "white", fontSize: "24px"}}>
            {winsVsRival}-{tiesVsRival}-{lossesVsRival}
          </p>
        </div>
      )}
    </>
  );
};

export default HistoryAgainstRival;
