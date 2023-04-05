import Link from "next/link";
import React from "react";

const Teams = (teams) => {
  return teams.teams.data.map((team) => (
    <Link href={`/teams/${team.name}`} key={team._id} className="teamItem">
      <h3>{team.name}</h3>
      <img src={team.logo} width="150rem" />
    </Link>
  ));
};

export default Teams;
