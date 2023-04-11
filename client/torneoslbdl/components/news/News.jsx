import Image from "next/image";
import React from "react";

const News = ({ article }) => {
  return (
    <main>
      <Image
        src={"https://i.imgur.com/j6itbSk.png"}
        alt={"Torneos de La Banda Logo"}
        width={123}
        height={123}
      />
      <h1>Torneos de La Banda del Lobo</h1>
      <div>
        <div className="news-card">
          <h1 style={{ fontSize: "24px" }}>{article.data.title}</h1>
          <Image
            src={article.data.image}
            alt={article.data.title}
            width={340}
            height={225}
          />
          <p style={{ fontSize: "16px", fontWeight: "bold", color: "black" }}>
            {article.data.body}
          </p>
          <p style={{display: "flex", justifyContent: "flex-end", marginTop: "0.5rem"}}>{article.data.author}</p>
        </div>
      </div>
    </main>
  );
};

export default News;
