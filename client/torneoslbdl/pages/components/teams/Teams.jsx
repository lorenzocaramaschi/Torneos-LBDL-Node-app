import Link from "next/link";
import React from "react";

const Teams = (teams) => {
  return teams.teams.data.map((team) => (
    <Link
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#E9E9E9",
        borderRadius: "24px",
        padding: "1rem 0.25rem",
        margin: "13px 0"
      }}
      href={`/teams/${team.name}`}
      key={team._id}
    >
      <img src={team.logo} width="25%" />
      <h3 style={{ fontSize: "64px", fontWeight: "bold", color: "#6568A6", marginLeft: "1.25rem" }}>
        {team.name}
      </h3>
    </Link>
  ));
};

export default Teams;
