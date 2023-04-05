import React, { useEffect, useState } from "react";
import { ArrowLeft, PlayDisabled } from "@mui/icons-material";
import { Divider } from "@mui/material";
import Image from "next/image";

const Match = ({ match }) => {
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
        <p>{match.tournament}</p>
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
            {awayLogo && (
              <Image
                src={awayLogo}
                alt={match.tournament}
                width={24}
                height={24}
              />
            )}
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
        <Divider orientation="vertical" flexItem className="divider" />
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
  );
};

export default Match;
