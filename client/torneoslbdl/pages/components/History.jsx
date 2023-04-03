import { ArrowLeft, PlayDisabled } from "@mui/icons-material";
import { Divider } from "@mui/material";
import Image from "next/image";
import React from "react";
import HistoryAgainstRival from "./HistoryAgainstRival";

const History = ({ matches, name }) => {
  return (
    <div>
      <div>
        {matches.map((match) => {
          let rival;
          match.home === name ? (rival = match.away) : (rival = match.home);
          let historyAgainstRival = matches.filter(
            (matchEl) => matchEl.home === rival || matchEl.away === rival
          );

          return (
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                <HistoryAgainstRival
                  matches={matches}
                  rival={rival}
                  historyAgainstRival={historyAgainstRival}
                  name={name}
                />
              </div>
              <div>
                <div key={match._id} className="match-container">
                  <div className="match-specific-tournament-info">
                    <img width="26rem" height="26rem" src={""} />
                    <p>{match.tournament}</p>
                  </div>
                  <div>
                    <div className="team-score">
                      <div className="team-data">
                        <img
                          alt={`Escudo ${match.home}`}
                          src={""}
                          width="30rem"
                          height="30rem"
                        />
                        <p>{match.home}</p>
                      </div>
                      {match.homeScore > match.awayScore ? (
                        <p>
                          {match.homeScore}
                          <ArrowLeft
                            style={{
                              color: "#6568A6",
                              position: "absolute",
                            }}
                          />
                        </p>
                      ) : (
                        <p>{match.homeScore}</p>
                      )}
                    </div>
                    <Divider className="divider" />
                    <div className="team-score">
                      <div className="team-data">
                        <img
                          alt={`Escudo ${match.away}`}
                          src={""}
                          width="30rem"
                          height="30rem"
                        />
                        <p>{match.away}</p>
                      </div>
                      {match.homeScore < match.awayScore ? (
                        <p>
                          {match.awayScore}
                          <ArrowLeft
                            style={{
                              color: "#6568A6",
                              position: "absolute",
                            }}
                          />
                        </p>
                      ) : (
                        <p>{match.awayScore}</p>
                      )}
                    </div>
                  </div>
                  <div className="match-video">
                    <Divider
                      orientation="vertical"
                      flexItem
                      className="divider"
                    />
                    {match.video === null ? (
                      <PlayDisabled />
                    ) : (
                      <iframe
                        width="140rem"
                        height="100rem"
                        src={match.video + "&showinfo=0&controls=0&autohide=1"}
                        title={`${match.home} vs ${match.away}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default History;
