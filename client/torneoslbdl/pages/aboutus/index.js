import { GitHub, Instagram, LinkedIn, YouTube } from "@mui/icons-material";
import Link from "next/link";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <img width='123rem' height='123rem' src="https://i.imgur.com/j6itbSk.png" />
      <h1>Sobre Torneos LBDL</h1>
      <div>
        <p>
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
      <h3>Seguinos en nuestras redes!</h3>
      <div className="redes">
        <Link href='instagram.com/torneoslbdl'>
          <Instagram />
        </Link>
        <Link href='youtube.com/torneoslbdl'>
          <YouTube />
        </Link>
        <Link href='github.com/lorenzocaramaschi'>
          <GitHub />
        </Link>
        <Link href='https://www.linkedin.com/in/lorenzo-caramaschi-desarrollador-fullstack/'>
          <LinkedIn />
        </Link>
      </div>
      <p>Made by Lorenzo Caramaschi©</p>
    </>
  );
};

export default AboutUs;
