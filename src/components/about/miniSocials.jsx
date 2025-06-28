import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./styles/socials.css";

import LanguageContext from "../../LanguageContext";
import translations from "../../data/translations";

const MiniSocials = () => {
	const { language } = useContext(LanguageContext);

	const [INFO, setINFO] = useState(translations[language]);

	useEffect(() => {
		setINFO(translations[language]);
	}, [language]);

	return (
		<div className="socials">
			<div className="social">
				<a
					href={INFO.socials.linkedin}
					target="_blank"
					rel="noreferrer"
				>
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faLinkedin}
							className="social-icon"
						/>
					</div>
					<div className="social-text">
						{INFO.socials_content.linkedin}
					</div>
				</a>
			</div>
		</div>
	);
};

export default MiniSocials;
