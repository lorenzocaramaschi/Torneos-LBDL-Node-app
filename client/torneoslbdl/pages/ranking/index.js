import React, { useState } from "react";
import Head from "next/head";
import Leaderboard from "../../components/leaderboard/Leaderboard";
import Fixture from "../../components/leaderboard/Fixture";
import LeaderboardFilter from "../../components/leaderboard/LeaderboardFilter";
import Image from "next/image";

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.host}/partidos`);
  const allMatches = await res.json();

  return {
    props: {
      matches: allMatches,
    },
  };
};

const Ranking = ({ matches }) => {
  const [year, setYear] = useState("2023");
  const [tournamentMatches, setTournamentMatches] = useState(
    matches.data.filter((match) => match.year === 2023)
  );
  const filteringYear = (e) => {
    const year = e.target.value;
    setYear(year);
    console.log(year);

    year === "2023"
      ? setTournamentMatches(
          matches.data.filter((match) => match.year === 2023)
        )
      : year === "2022"
      ? setTournamentMatches(
          matches.data.filter((match) => match.year === 2022)
        )
      : year === "2021"
      ? setTournamentMatches(
          matches.data.filter((match) => match.year === 2021)
        )
      : year === "2020"
      ? setTournamentMatches(
          matches.data.filter((match) => match.year === 2020)
        )
      : setTournamentMatches(
          matches.data.filter((match) => match.year === 2019)
        );

        console.log(tournamentMatches);
  };

  return (
    <>
      <Head>
        <title>Ranking | Torneos de La Banda del Lobo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Image
          alt="ranking logo"
          src="https://i.imgur.com/efMVcQt.png"
          width="123"
          height="123"
        />
        <h1 style={{ fontSize: "64px" }}>Ranking</h1>
        <LeaderboardFilter year={year} filteringYear={filteringYear} />
        <Leaderboard matches={tournamentMatches} />
        <Fixture matches={tournamentMatches} />
      </main>
    </>
  );
};

export default Ranking;
