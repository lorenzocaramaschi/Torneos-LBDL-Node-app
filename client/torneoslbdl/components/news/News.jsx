import Image from "next/image";
import React from "react";

// renders an article on a webpage
const News = ({ article }) => {
  // article prop contains the news: title, image, body & author
  return (
    <main>
      <Image
        src={"https://i.imgur.com/j6itbSk.png"}
        alt={"Torneos de La Banda Logo"}
        width={123}
        height={123}
        style={{marginBottom: "24px"}}
      />
      <div>
        <div className="news-detail-card">
          <h1 className="news-title">{article.data.title}</h1>
          <Image
            src={article.data.image}
            alt={article.data.title}
            width={340}
            height={225}
          />
          <p style={{ fontSize: "16px", fontWeight: "bold", color: "black" }}>
            {article.data.body}
          </p>
          <p
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "0.5rem",
              width: "100%",
            }}
          >
            {article.data.author}
          </p>
        </div>
      </div>
    </main>
  );
};

export default News;
