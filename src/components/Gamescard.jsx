import gamecss from "../style/game.css";

const Gamescard = ({ game }) => {
  return (
    <div className="card">
      <header className="card_header">
        <img
          className="card__img"
          src={game?.background_image}
          alt={game?.name}
        />
      </header>
      <ul className="list__platform">
        {game?.parent_platforms.map((platform) => {
          const { id, name } = platform.platform;
          return (
            <li key={id} className="card__platform__img">
              <img
                className="img__platform"
                src={`../assets/images/${id}.svg`}
                alt={name}
              />
            </li>
          );
        })}
      </ul>
      <h3 className="card__name">{game?.name}</h3>
      <div className="stores_container">
        <h4 className={0}>Store</h4>
        <ul className="list__store">
          {game?.stores.map((store) => {
            const { id, slug } = store.store;
            return (
              <li key={id} className="card__store__img">
                <a href="#">
                  <img
                    className="img__store"
                    src={`../assets/images/${slug}.svg`}
                    // src={`/src/assets/images/${slug}.svg`}
                    alt=""
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <footer className="card__footer">
        <ul className="list__footer">
          <li>
            <p className="rating__footer">📉 {game?.rating}</p>
          </li>
          <li>
            <p>{game?.genres[0].name}</p>
          </li>
          <li>
            <p>📅{game?.released}</p>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Gamescard;
