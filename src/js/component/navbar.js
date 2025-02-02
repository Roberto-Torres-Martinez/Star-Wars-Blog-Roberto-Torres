import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const { store, actions } = useContext(Context)

	return (
		<nav className="navbar navbar-expand-lg border-bottom border-body" data-bs-theme="dark">
			<div className="container-fluid col-md-12">
				<Link to="/" className="navbar-brand text-white ms-3">
					<img id="logo" src="https://img.icons8.com/color/512/star-wars.png" style={{ width: '50px', height: 'auto' }} />
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-end me-5" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								<i className="fa-regular fa-star icon-favorite me-1"></i>
								Favorites
							</a>
							<ul className="dropdown-menu dropdown-menu-dark">
								{store.favorites.map((fav, index) => {
									return (
										<li key={index} className="d-flex justify-content-between align-items-center">
											<a className="dropdown-item" href="#">{fav}</a>
											<button className="btn btn-outline-danger btn-sm ms-auto" onClick={() => actions.removeFavorite(fav)}>
												<i className="fa-solid fa-trash"></i>
											</button>
										</li>
									);
								})}
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
