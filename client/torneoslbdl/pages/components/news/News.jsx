import Image from "next/image";
import React from "react";

const News = ({ article }) => {
  return (
    <div>
         <Image
            src={"https://i.imgur.com/j6itbSk.png"}
            alt={"Torneos de La Banda Logo"}
            width={123}
            height={123}
          />
        <h1>Torneos de La Banda del Lobo</h1>
      <div>
        <div>
          <h1>{article.data.title}</h1>
          <Image
            src={article.data.image}
            alt={article.data.title}
            width={375}
            height={250}
          />
          <p>{article.data.body}</p>
        </div>
        <p>{article.data.author}</p>
      </div>
    </div>
  );
};

export default News;
