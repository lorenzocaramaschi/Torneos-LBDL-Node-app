import { GitHub, Instagram, LinkedIn, YouTube } from "@mui/icons-material";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// displays information about Torneos LBDL
const AboutUs = () => {
  return (
    <>
      <Head>
        <title>Sobre Nosotros | Torneos LBDL</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://i.imgur.com/j6itbSk.png" />
      </Head>
      <main>
        <Image
          width="123"
          height="123"
          src="https://i.imgur.com/j6itbSk.png"
          alt="torneos lbdl logo"
        />
        <h1>Sobre Torneos LBDL</h1>
        <div
          className="about-text"
          style={{
            backgroundColor: "#67669A",
            borderRadius: "28px",
            padding: "1.5rem 1rem",
            color: "white",
            margin: "2rem 0",
          }}
        >
          <p
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            ¡Bienvenidos a la página web de Torneos de La Banda del Lobo! Aquí
            podrás ver estadísticas, datos, noticias y los videos de nuestros
            partidos emocionantes, llenos de risas y competencia. Somos un grupo
            de amigos que nos encanta jugar FIFA y hemos creado esta página para
            compartir con ustedes nuestros torneos y aventuras. Desde partidos
            amistosos hasta torneos oficiales, ¡no te perderás nada! Únete a
            nosotros en esta emocionante aventura llena de goles, trucos y mucha
            diversión.{" "}
          </p>
        </div>
        <h3 style={{ color: "#67669A", fontSize: "20px" }}>
          Seguinos en nuestras redes!
        </h3>
        {/* Social Media */}
        <div className="redes">
          <Link
            target="_blank"
            style={{ color: "#BFC0D9", margin: "0 0.3rem" }}
            href="https://www.instagram.com/torneoslbdl/"
          >
            <Instagram sx={{ fontSize: 35 }} />
          </Link>
          <Link
            target="_blank"
            style={{ color: "#BFC0D9", margin: "0 0.3rem" }}
            href="https://www.youtube.com/@torneoslbdl"
          >
            <YouTube sx={{ fontSize: 35 }} />
          </Link>
          <Link
            target="_blank"
            style={{ color: "#BFC0D9", margin: "0 0.3rem" }}
            href="https://github.com/lorenzocaramaschi"
          >
            <GitHub sx={{ fontSize: 35 }} />
          </Link>
          <Link
            target="_blank"
            style={{ color: "#BFC0D9", margin: "0 0.3rem" }}
            href="https://www.linkedin.com/in/lorenzo-caramaschi-desarrollador-fullstack/"
          >
            <LinkedIn sx={{ fontSize: 35 }} />
          </Link>
        </div>

        <svg
          style={{ position: "absolute", bottom: -267, zIndex: -2 }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#67669A"
            fillOpacity="1"
            d="M0,320L48,288C96,256,192,192,288,181.3C384,171,480,213,576,197.3C672,181,768,107,864,80C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <p
          style={{
            bottom: -260,
            width: "100%",
            textAlign: "center",
            position: "absolute",
            color: "#BFC0D9",
            zIndex: -1,
          }}
        >
          Made by Lorenzo Caramaschi©
        </p>
      </main>
    </>
  );
};

export default AboutUs;
