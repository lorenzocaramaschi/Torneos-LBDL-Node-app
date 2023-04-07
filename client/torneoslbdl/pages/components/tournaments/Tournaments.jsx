import React from "react";
import Link from "next/link";

const Tournaments = (tournaments) => {
  return tournaments.tournaments.data.map((tournament) => (
    <Link
      style={{
        color: "#6568A6",
        backgroundColor: "#E9E9E9",
        borderRadius: "25px",
        display: "flex",
        alignItems: "center",
        fontSize: "24px",
        padding: "1rem 0.5rem",
        marginBottom: "1rem"
      }}
      href={`/tournaments/${tournament.name}`}
      key={tournament._id}
      className="teamItem"
    >
      <img src={tournament.logo} width="70rem" />
      <h3 style={{marginLeft: "0.5rem"}}>{tournament.name}</h3>
    </Link>
  ));
};

export default Tournaments;
