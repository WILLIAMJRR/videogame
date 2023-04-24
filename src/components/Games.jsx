import axios from "axios";
import React, { useEffect, useState } from "react";
import Gamescard from "./Gamescard";

const Games = () => {
  const [games, setGames] = useState();
  const [plataform, setPlataform] = useState();
console.log(plataform)
  const keyApi = `57591248431d4d9d97c3db71c6ff9bcc`;

  let date =new Date().toISOString().split('T')[0]

  const getGames = () => {
    const url = `https://api.rawg.io/api/games?key=${keyApi}&dates=2023-01-01,${date}&platforms=0,1,2,3,4,5,6,7,8,9,10,11,12,13,14&page_size=500&page=1`;

    axios
      .get(url)
      .then((res) => setGames(res.data.results))
      .catch((err) => console.log(err));
  };

  const getPlataform = () => {
   // GET https://api.rawg.io/api/platforms?key=YOUR_API_KEY
   const url =`https://api.rawg.io/api/games?key=${keyApi}&dates=2023-01-01,${date}&platforms=0,1,2,3,4,5,6,7,8,9,10,11,12,13,14&page_size=500&page=1`
    //const url = `https://api.rawg.io/api/platforms?key=${keyApi}`;
    axios
      .get(url)
      .then((res) => setPlataform(res.data))
      .catch((err) => console.log(err));
  };


  useEffect(() => {
    getGames();
    getPlataform();

  }, []);

  return (
    <>
      <section className="card__container">
        {games?.map((game) => (
          <Gamescard key={game.id} game={game} />
        ))}
      </section>
    </>
  );
};

export default Games;
