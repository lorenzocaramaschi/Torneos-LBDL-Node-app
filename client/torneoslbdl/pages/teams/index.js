import Head from "next/head";
import Teams from "../../components/teams/Teams";
import Image from "next/image";

// fetches the teams data from /equipos and returns it as props to the component
export const getStaticProps = async () => {
  const response = await fetch(`${process.env.host}/equipos`, {
    cache: "no-cache",
  });
  const data = await response.json();
  return {
    props: {
      teams: data,
    },
  };
};

// teamsScene takes in the teams prop and renders the page layout with a title, a header, and a list of teams
const teamsScene = ({ teams }) => {
  return (
    <>
      <Head>
        <title>Equipos de Torneos LBDL</title>
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
        <h1>Equipos de La Banda del Lobo</h1>
        {/* This component renders a list of teams */}
        <div className="teams-grid">
          <Teams teams={teams} />
        </div>
      </main>
    </>
  );
};

export default teamsScene;
