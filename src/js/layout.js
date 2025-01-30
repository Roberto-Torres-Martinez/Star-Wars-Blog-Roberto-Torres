import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Single } from "./views/single";
import { PeopleView } from "./views/PeopleView";
import { PlanetsView } from "./views/PlanetsView";
import { VehiclesView } from "./views/VehiclesView";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { PeopleInfo } from "./views/PeopleInfo";
import { PlanetsInfo } from "./views/PlanetsInfo";
import { VehiclesInfo } from "./views/VehiclesInfo";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<div className="app-content flex-grow-1 overflow-auto">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/peopleView" element={<PeopleView />} />
							<Route path="/planetsView" element={<PlanetsView />} />
							<Route path="/vehiclesView" element={<VehiclesView />} />
							<Route path="/peopleInfo/:id" element={<PeopleInfo />} />
							<Route path="/planetsInfo/:id" element={<PlanetsInfo />} />
							<Route path="/vehiclesInfo/:id" element={<VehiclesInfo />} />
							<Route path="*" element={<h1>Not found!</h1>} />
						</Routes>
					</div>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
