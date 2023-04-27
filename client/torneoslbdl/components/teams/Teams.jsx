import Image from "next/image";
import Link from "next/link";
import React from "react";

// renders a list of all the teams, with a link that guides you to the team's profile
const Teams = (teams) => {
  return teams.teams.data.map((team) => (
    <Link className="logo-teams" href={`/teams/${team.name}`} key={team._id}>
      <Image src={team.logo} alt={team.name} width="150" height="150" />
      <p>{team.name}</p>
    </Link>
  ));
};

export default Teams;
