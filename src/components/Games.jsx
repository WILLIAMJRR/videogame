import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Gamescard from './Gamescard';
import paginacion from '../style/paginacion.css';

const Games = () => {
  const [games, setGames] = useState();
  const [page, setpage] = useState(1);

  console.log(games);
  const getGames = () => {
    const keyApi = `57591248431d4d9d97c3db71c6ff9bcc`;

    const url = `https://api.rawg.io/api/games?dates=2011-09-01%2C2023-01-30&key=${keyApi}&page=1&page_size=1000`;

    axios
      .get(url)
      .then((res) => setGames(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getGames();
  }, []);

  //paginacion
  const arrayPage = [];

  const gamesPerPage = 8;

  const lastIndex = page * gamesPerPage;

  const firtIndex = lastIndex - gamesPerPage;

  const totalGames = games?.results.length;

  const maxBlockGame = Math.ceil((totalGames / gamesPerPage)+1);

  for (let i = page; i <= maxBlockGame; i++) {
    arrayPage.push(i);
  }
  const onPreviusPage = () => {
    if (page - 1 >= 1) {
      setpage((page) => page - 1);
    }
  };
  const onNextPage = () => {
    if (page + 1 <= arrayPage.length) {
      setpage((page) => page + 1);
    }
  };
  return (
    <>
      <section className='card__container'>
        {games?.results
          .map((game) => <Gamescard key={game.id} game={game} />)
          .slice(firtIndex, lastIndex)}
      </section>

      <nav
        className='pagination is-rounded'
        role='navigation'
        aria-label='pagination'
      >
        <button
          className={`btn__previous ${page === 1 ? 'btn__opacity' : ''}`}
          onClick={onPreviusPage}
        >
          Previous
        </button>
        <button
          className={`btn__next ${page >= arrayPage.length ? 'btn__opacity' : ''}`}
          onClick={onNextPage}
        >
          Next page
        </button>
      </nav>
    </>
  );
};

export default Games;
