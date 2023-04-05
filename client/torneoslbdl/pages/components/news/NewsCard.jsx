import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsCard = ({ allNews }) => {
  return (
    <>
      <div>
        {allNews.data.map((news) => (
          <Link href={`/news/${news._id}`} key={news._id}>
            <Image src={news.image} alt={news.title} width={375} height={250} />
            <h2>{news.title}</h2>
          </Link>
        ))}
      </div>
    </>
  );
};

export default NewsCard;
