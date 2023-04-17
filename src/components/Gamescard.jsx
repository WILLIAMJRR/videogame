import { useState } from 'react';
import gamecss from '../style/game.css';

const Gamescard = ({ game }) => {

  return (
    <div className='card'>
      <header className='card_header'>
        <img
          className='card__img'
          src={game.background_image}
          alt='imagen del juego'
        />
      </header>
      <h3 className='card__name'>{game?.name}</h3>
      <div className='container__btn'>
        <button className='card__btn'>Agregar al carrito</button>
      </div>
      <footer className='card__footer'>
        <p>{game?.platforms[0].platform.name}</p>
        <p>{game?.platforms[1].platform.name}</p>
       
      </footer>
    </div>
  );
};

export default Gamescard;
