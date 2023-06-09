import Head from "next/head";
import Tournaments from "../../components/tournaments/Tournaments";
import Image from "next/image";
import TournamentsFilter from "@component/components/tournaments/TournamentsFilter";
import React, { useState } from "react";

// fetches the tournaments data from /torneos and passes it as props to TournamentsScene
export const getStaticProps = async () => {
  const response = await fetch(`${process.env.host}/torneos`, {
    cache: "no-cache",
  });
  const data = await response.json();
  return {
    props: {
      tournamentsData: data,
    },
  };
};

const TournamentsScene = ({ tournamentsData }) => {
  // manage the state of tournaments data and the selected tournament category
  const [tournaments, setTournaments] = useState(tournamentsData.data);
  const [category, setCategory] = useState("all");

  // filter the tournaments based on the selected category
  const filteringTournaments = (e) => {
    const tournamentCategory = e.target.value;
    setCategory(tournamentCategory);

    tournamentCategory === "all"
      ? setTournaments(tournamentsData.data)
      : tournamentCategory === "drafts"
      ? setTournaments(
          tournamentsData.data.filter((tournament) =>
            tournament.name.includes("Draft")
          )
        )
      : setTournaments(
          tournamentsData.data.filter((tournament) =>
            tournament.name.includes("Torneo")
          )
        );
  };

  return (
    <>
      <Head>
        <title>Torneos de La Banda del Lobo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Image
          alt="torneos lbdl logo"
          width="123"
          height="123"
          src="https://i.imgur.com/j6itbSk.png"
        />
        <h1>Torneos de La Banda del Lobo</h1>
        {/* filter the list based on the tournament category */}
        <TournamentsFilter
          filteringTournaments={filteringTournaments}
          category={category}
        />
        {/*  render the list of tournaments */}
        <div className="tournament-grid">
          <Tournaments tournaments={tournaments} />
        </div>
      </main>
    </>
  );
};

export default TournamentsScene;
