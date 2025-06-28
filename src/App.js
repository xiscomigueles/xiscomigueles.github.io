import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import ReadArticle from "./pages/readArticle";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

import LanguageContext from "./LanguageContext";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	const [language, setLanguage] = useState("es");

	useEffect(() => {
		const browserLanguage = navigator.language;

		const detectedLanguage = getLanguageFromBrowser(browserLanguage);
		setLanguage(detectedLanguage);
	}, []);

	const getLanguageFromBrowser = (browserLanguage) => {
		if (browserLanguage.startsWith("es")) {
			return "es";
		} else if (browserLanguage.startsWith("en")) {
			return "en";
		} else {
			return "es";
		}
	};

	const languageContextValue = {
		language,
		setLanguage,
	};

	return (
		<LanguageContext.Provider value={languageContextValue}>
			<div className="App">
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/articles" element={<Articles />} />
					<Route path="/article/:slug" element={<ReadArticle />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<Notfound />} />
				</Routes>
			</div>
		</LanguageContext.Provider>
	);
}

export default App;
