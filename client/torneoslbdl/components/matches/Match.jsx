import React, { useEffect, useState } from "react";
import { PlayDisabled } from "@mui/icons-material";
import { Divider } from "@mui/material";
import Image from "next/image";

// displays information about a match
const Match = ({ match }) => {
  // manage state for the logos of the home and away teams and the tournament logos
  const [homeLogo, setHomeLogo] = useState("");
  const [awayLogo, setAwayLogo] = useState("");
  const [tournamentLogo, setTournamentLogo] = useState("");

  const getLogo = async (teamName, setLogo) => {
    const res = await fetch(`${process.env.host}/equipos`);
    const data = await res.json();
    let teamLogo = data.data.filter((team) => team.name === teamName);
    setLogo(teamLogo[0].logo);
  };

  const getTournamentLogo = async (tournamentName, setLogo) => {
    const res = await fetch(`${process.env.host}/torneos`);
    const data = await res.json();
    let tournamentLogo = data.data.filter(
      (tournament) => tournament.name === tournamentName
    );
    setLogo(tournamentLogo[0].logo);
  };

  useEffect(() => {
    getLogo(match.home, setHomeLogo);
    getLogo(match.away, setAwayLogo);
    getTournamentLogo(match.tournament, setTournamentLogo);
  }, [match]);

  //  returns a div containing the match information, including the tournament logo, the scores of each team, and a video of the match if available
  return (
    <div key={match._id} className="match-container">
      <div className="match-specific-tournament-info">
        {tournamentLogo && (
          <Image
            src={tournamentLogo}
            alt={match.tournament}
            width={24}
            height={24}
          />
        )}
        <p style={{ fontSize: "15px", fontWeight: "bold", color: "#6568A6" }}>
          {match.tournament}
        </p>
      </div>
      <div>
        <div className="team-score">
          <div className="team-data">
            {homeLogo && (
              <Image
                src={homeLogo}
                alt={match.tournament}
                width={24}
                height={24}
              />
            )}
            <p style={{ color: "black", fontWeight: "bold", fontSize: "20px" }}>
              {match.home}
            </p>
          </div>
          {match.penalties === false ? (
            match.homeScore > match.awayScore ? (
              <p
                style={{
                  color: "#6568A6",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                {match.homeScore}
              </p>
            ) : (
              <p
                style={{ color: "black", fontWeight: "bold", fontSize: "20px" }}
              >
                {match.homeScore}
              </p>
            )
          ) : match.homePenalties > match.awayPenalties ? (
            <p
              style={{ color: "#6568A6", fontWeight: "bold", fontSize: "20px" }}
            >
              {match.homeScore}({match.homePenalties})
            </p>
          ) : (
            <p style={{ color: "black", fontWeight: "bold", fontSize: "20px" }}>
              {match.homeScore}({match.homePenalties})
            </p>
          )}
        </div>
        <Divider className="divider" />
        <div className="team-score">
          <div className="team-data">
            {awayLogo && (
              <Image
                src={awayLogo}
                alt={match.tournament}
                width={24}
                height={24}
              />
            )}
            <p style={{ color: "black", fontWeight: "bold", fontSize: "20px" }}>
              {match.away}
            </p>
          </div>
          {match.penalties === false ? (
            match.homeScore < match.awayScore ? (
              <p
                style={{
                  color: "#6568A6",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                {match.awayScore}
              </p>
            ) : (
              <p
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                {match.awayScore}
              </p>
            )
          ) : match.homePenalties < match.awayPenalties ? (
            <p
              style={{
                color: "#6568A6",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              {match.awayScore}({match.awayPenalties})
            </p>
          ) : (
            <p style={{ color: "black", fontWeight: "bold", fontSize: "20px" }}>
              {match.awayScore}({match.awayPenalties})
            </p>
          )}
        </div>
      </div>
      <div className="match-video">
        <Divider orientation="vertical" flexItem className="divider" />
        {match.video === null ? (
          <PlayDisabled />
        ) : (
          <iframe
            width="140rem"
            height="100rem"
            src={match.video}
            title={`${match.home} vs ${match.away}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default Match;
