import Head from "next/head";
import News from "../../components/news/News";

// both getStaticProps and Paths are used to pre-generate the HTML and data for each news article page, making them faster to load
export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.host}/noticias`,{cache: 'no-cache'});
  const data = await res.json();

  const paths = data.data.map((news) => {
    return {
      params: { news: news._id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const article = context.params.news;
  const res = await fetch(`${process.env.host}/noticias/${article}`,{cache: 'no-cache'});
  const data = await res.json();

  return {
    props: {
      newsArticle: data,
    },
  };
};

//  renders the page title, metadata, and the News component, passing the newsArticle data as a prop
const Article = ({ newsArticle }) => {
  return (
    <>
      <Head>
        <title>{newsArticle.data.title} | Torneos LBDL</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://i.imgur.com/j6itbSk.png" />
      </Head>
      <News article={newsArticle} />
    </>
  );
};

export default Article;
