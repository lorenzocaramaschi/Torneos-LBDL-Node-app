import React from "react";
import Link from "next/link";
import Image from "next/image";

const Tournaments = ({ tournaments }) => {
  return tournaments
    .filter((tournament) => tournament.name !== "Amistosos")
    .map((tournament) => (
      <Link
        style={{
          color: "#6568A6",
          backgroundColor: "#E9E9E9",
          borderRadius: "25px",
          display: "flex",
          alignItems: "center",
          fontSize: "24px",
          padding: "1rem 0.5rem",
          marginBottom: "1rem",
        }}
        href={`/tournaments/${tournament.name}`}
        key={tournament._id}
        className="teamItem"
      >
        <Image
          alt={tournament.name}
          src={tournament.logo}
          width="70"
          height="70"
        />
        <h3 style={{ marginLeft: "0.5rem" }}>{tournament.name}</h3>
      </Link>
    ));
};

export default Tournaments;
