import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="container">
		<div className="row col-md-12 d-flex justify-content-around patch-container">
			<img
				className="img-light-side"
				src="https://i.etsystatic.com/13656732/r/il/4f6980/1834454437/il_570xN.1834454437_bq8h.jpg"
			/>
			<img
				className="img-logo"
				src="https://img.icons8.com/color/512/star-wars.png"
			/>
			<img
				className="img-dark-side"
				src="https://i.etsystatic.com/13656732/r/il/a867cd/1834455903/il_794xN.1834455903_377p.jpg"
			/>
		</div>

		<div className="row border-5 border-top border-white w-100 mt-5 home-container text-center">
			<div className="col-md-4 mt-4">
				<Link className="titles-home-link" to="peopleView">
					<h1 className="text-white titles-home-style">Characters</h1>
					<img
						className="img-home mt-3"
						src="https://wallpapers.com/images/featured/star-wars-characters-background-rzma8krur1w1m4rn.jpg"
					/>
				</Link>
			</div>

			<div className="col-md-4 mt-4">
				<Link className="titles-home-link" to="planetsView">
					<h1 className="text-white titles-home-style">Planets</h1>
					<img
						className="img-home mt-3"
						src="https://img.freepik.com/premium-photo/wallpaper-planet-with-stars-clouds-called-star-wars_910135-9709.jpg"
					/>
				</Link>
			</div>

			<div className="col-md-4 mt-4">
				<Link className="titles-home-link" to="vehiclesView">
					<h1 className="text-white titles-home-style">Vehicles</h1>
					<img
						className="img-home mt-3"
						src="https://wallpapercave.com/wp/wp6792288.jpg"
					/>
				</Link>
			</div>
		</div>
	</div>
);
