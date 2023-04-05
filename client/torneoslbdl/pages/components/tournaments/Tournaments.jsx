import React from "react";
import Link from "next/link";

const Tournaments = (tournaments) => {
  return tournaments.tournaments.data.map((tournament) => (
    <Link
      href={`/tournaments/${tournament.name}`}
      key={tournament._id}
      className="teamItem"
    >
      <h3>{tournament.name}</h3>
      <img src={tournament.logo} width="150rem" />
    </Link>
  ));
};

export default Tournaments;
