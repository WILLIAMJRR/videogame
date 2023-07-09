import gamecss from "../style/game.css";
import React from "react";
import { CardContent } from "@mui/material";

const Gamescard = ({ game }) => {
	return (
		<CardContent>
			<div className='card'>
				<header className='card_header'>
					<img
						className='card__img'
						src={game?.background_image}
						alt={game?.name}
					/>
				</header>
				<ul className='list__platform'>
					{game?.parent_platforms.map((platform) => {

						return (
							<li
								key={platform.platform.id}
								className='card__platform__img'
							>
								<img
									className='img__platform'
									// src={require(`./../../../assets/images/${id}.svg`)}
									src={`./src/assets/images/${platform?.platform.id}.svg`}
									alt={platform.platform.name}
								/>
							</li>
						);
					})}
				</ul>
				<h3 className='card__name'>{game?.name}</h3>
				<div className='stores_container'>
					<h4 className={0}>Store</h4>
					<ul className='list__store'>
						{game?.stores.map((store) => {

							return (
								<li
									key={store.store.id}
									className='card__store__img'
								>
									<a href='#'>
										<img
											className='img__store'
											src={`./src/assets/images/${store?.store.slug}.svg`}
											alt='{store.store.name}'
										/>
									</a>
								</li>
							);
						})}
					</ul>
				</div>

				<footer className='card__footer'>
					<ul className='list__footer'>
						<li>
							<p className='rating__footer'>📉 {game?.rating}</p>
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
		</CardContent>
	);
};

export default Gamescard;
