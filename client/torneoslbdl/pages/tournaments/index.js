import Head from "next/head";
import Tournaments from "../components/tournaments/Tournaments";

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.host}/torneos`);
  const data = await response.json();
  return {
    props: {
      tournaments: data,
    },
  };
};

const tournamentsScene = ({ tournaments }) => {
  return (
    <>
      <Head>
        <title>Torneos de La Banda del Lobo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img
        width="123rem"
        height="123rem"
        src="https://i.imgur.com/j6itbSk.png"
      />
      <h1>Torneos de La Banda del Lobo</h1>
      <Tournaments tournaments={tournaments} />
    </>
  );
};

export default tournamentsScene;
