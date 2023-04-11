import Head from "next/head";
import NewsCard from "../components/news/NewsCard";
import Image from "next/image";

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.host}/noticias`);
  const data = await response.json();
  return {
    props: {
      news: data,
    },
  };
};

export default function Home({ news }) {
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
          width="123"
          height="123"
          src="https://i.imgur.com/j6itbSk.png"
          alt="torneos lbdl logo"
        />
        <h1>Torneos de La Banda del Lobo</h1>

        <NewsCard allNews={news} />
      </main>
    </>
  );
}
