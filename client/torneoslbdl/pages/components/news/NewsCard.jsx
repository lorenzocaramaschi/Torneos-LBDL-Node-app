import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsCard = ({ allNews }) => {
  return (
    <>
      {allNews.data.map((news) => (
        <div className="news-card">
          <Link  href={`/news/${news._id}`} key={news._id}>
            <Image src={news.image} alt={news.title} width={334} height={193} />
            <h2 style={{color: "black"}}>{news.title}</h2>
          </Link>
        </div>
      ))}
    </>
  );
};

export default NewsCard;
