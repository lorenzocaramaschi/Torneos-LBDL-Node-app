import { PlayArrow, PlayDisabled } from "@mui/icons-material";
import Head from "next/head";
import Link from "next/link";

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.host}/torneos`);
  const data = await res.json();

  const paths = data.data.map((tournament) => {
    return {
      params: { tournament: tournament.name.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const name = context.params.tournament;
  const res = await fetch(`${process.env.host}/torneos/${name}/partidos`);
  const data = await res.json();

  const response = await fetch(`${process.env.host}/torneos`);
  const allTournaments = await response.json();
  const tournament = allTournaments.data.filter(
    (tournamentEl) => tournamentEl.name === name
  );

  const teamsResponse = await fetch(`${process.env.host}/equipos`);
  const allTeams = await teamsResponse.json();

  return {
    props: {
      tournamentMatches: data,
      allTournamentsData: allTournaments,
      tournament: tournament,
      allTeamData: allTeams,
    },
  };
};

const Details = ({
  tournament,
  tournamentMatches,
  allTournamentsData,
  allTeamData,
}) => {
  let tournamentGoals = 0;
  tournamentMatches.data.map((match) => {
    let matchGoals = match.awayScore + match.homeScore;
    tournamentGoals += matchGoals;
  });

  const getLogo = (teamName) => {
    let teamLogo = allTeamData.data.filter(
      (teamData) => teamData.name === teamName
    );
    return teamLogo[0].logo;
  };

  let quarterFinals = tournamentMatches.data.filter(
    (match) => match.round === "Cuartos de final"
  );
  let semiFinals = tournamentMatches.data.filter(
    (match) => match.round === "Semifinales"
  );
  let final = tournamentMatches.data.filter((match) => match.round === "Final");

  return (
    <>
      <Head>
        <title>{tournament[0].name}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={tournament[0].logo} />
      </Head>
      <div>
        <img width="169rem" src={tournament[0].logo} />
        <h1>{tournament[0].name}</h1>
        <h2>Estadísticas</h2>
        <div>
          <p>Goles anotados: {tournamentGoals}</p>
          <p>
            Promedio de gol por partido:{" "}
            {(tournamentGoals / tournamentMatches.data.length).toFixed(2)}
          </p>
          {tournament[0].playlist === null ? (
            <p>Este torneo no fue filmado.</p>
          ) : (
            <p>
              Playlist:{" "}
              <Link href={tournament[0].playlist} key={tournament[0]._id}>
                <PlayArrow />
              </Link>
            </p>
          )}
          <p>
            Campeón:{" "}
            {tournamentMatches.data.map((match) => {
              if (
                (match.round === "Final" &&
                  match.homeScore > match.awayScore) ||
                (match.round === "Final" &&
                  match.homePenalties > match.awayPenalties)
              ) {
                return match.home;
              } else if (
                (match.round === "Final" &&
                  match.homeScore < match.awayScore) ||
                (match.round === "Final" &&
                  match.homePenalties < match.awayPenalties)
              ) {
                return match.away;
              }
            })}
          </p>
        </div>
        {
          <>
            <div className="matches-container">
              <h2 className="round-h2">{quarterFinals[0].round}</h2>
              {quarterFinals.map((el) => (
                <div key={el._id} className="match-container">
                  <div className="match-specific-tournament-info">
                    <img
                      width="26rem"
                      height="26rem"
                      src={tournament[0].logo}
                    />
                    <p>{el.tournament}</p>
                  </div>
                  <div>
                    <div className="team-score">
                      <div className="team-data">
                        <img
                          alt={`Escudo ${el.home}`}
                          src={getLogo(el.home)}
                          width="30rem"
                          height="30rem"
                        />
                        <p>{el.home}</p>
                      </div>
                      <p>{el.homeScore}</p>
                    </div>
                    <div className="team-score">
                      <div className="team-data">
                        <img
                          alt={`Escudo ${el.away}`}
                          src={getLogo(el.away)}
                          width="30rem"
                          height="30rem"
                        />
                        <p>{el.away}</p>
                      </div>
                      <p>{el.awayScore}</p>
                    </div>
                  </div>
                  <div className="match-video">
                    {el.video === null ? (
                      <PlayDisabled />
                    ) : (
                      <iframe
                        width="140rem"
                        height="100rem"
                        src={el.video}
                        title={`${el.home} vs ${el.away}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="matches-container">
              <h2 className="round-h2">{semiFinals[0].round}</h2>
              {semiFinals.map((el) => (
                <div key={el._id} className="match-container">
                  <div className="match-specific-tournament-info">
                    <img
                      width="26rem"
                      height="26rem"
                      src={tournament[0].logo}
                    />
                    <p>{el.tournament}</p>
                  </div>
                  <div>
                    <div className="team-score">
                      <div className="team-data">
                        <img
                          alt={`Escudo ${el.home}`}
                          src={getLogo(el.home)}
                          width="30rem"
                          height="30rem"
                        />
                        <p>{el.home}</p>
                      </div>
                      <p>{el.homeScore}</p>
                    </div>
                    <div className="team-score">
                      <div className="team-data">
                        <img
                          alt={`Escudo ${el.away}`}
                          src={getLogo(el.away)}
                          width="30rem"
                          height="30rem"
                        />
                        <p>{el.away}</p>
                      </div>
                      <p>{el.awayScore}</p>
                    </div>
                  </div>
                  <div className="match-video">
                    {el.video === null ? (
                      <PlayDisabled />
                    ) : (
                      <iframe
                        width="140rem"
                        height="100rem"
                        src={el.video}
                        title={`${el.home} vs ${el.away}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="matches-container">
              <h2 className="round-h2">{final[0].round}</h2>
              {final.map((el) => (
                <div key={el._id} className="match-container">
                  <div className="match-specific-tournament-info">
                    <img
                      width="26rem"
                      height="26rem"
                      src={tournament[0].logo}
                    />
                    <p>{el.tournament}</p>
                  </div>
                  <div>
                    <div className="team-score">
                      <div className="team-data">
                        <img
                          alt={`Escudo ${el.home}`}
                          src={getLogo(el.home)}
                          width="30rem"
                          height="30rem"
                        />
                        <p>{el.home}</p>
                      </div>
                      <p>{el.homeScore}</p>
                    </div>
                    <div className="team-score">
                      <div className="team-data">
                        <img
                          alt={`Escudo ${el.away}`}
                          src={getLogo(el.away)}
                          width="30rem"
                          height="30rem"
                        />
                        <p>{el.away}</p>
                      </div>
                      <p>{el.awayScore}</p>
                    </div>
                  </div>
                  <div className="match-video">
                    {el.video === null ? (
                      <PlayDisabled />
                    ) : (
                      <iframe
                        width="140rem"
                        height="100rem"
                        src={el.video}
                        title={`${el.home} vs ${el.away}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        }
      </div>
    </>
  );
};

export default Details;
