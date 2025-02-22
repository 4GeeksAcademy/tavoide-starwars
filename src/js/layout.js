import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";


import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import {Home} from "./views/Home.jsx";

import DetailPlanet from "./views/DetailPlanet.jsx";
import DetailPeople from "./views/DetailPeople.jsx";
import DetailStarships from "./views/DetailStarships.jsx";



//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="bg-black">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						
						<Route path="/detailPlanet" element={<DetailPlanet />} />
						<Route path="/detailPeople" element={<DetailPeople />} />
						<Route path="/detailStarship" element={<DetailStarships />} />
						<Route path="*" element={<h1>Not found!</h1>} />

					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
