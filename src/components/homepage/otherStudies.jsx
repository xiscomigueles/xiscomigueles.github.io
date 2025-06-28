import React, { useState, useEffect, useContext } from "react";
import { faBook } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/otherStudies.css"
import LanguageContext from "../../LanguageContext";
import translations from "../../data/translations";



const OtherStudies = () => {

	const { language } = useContext(LanguageContext);

	const [INFO, setINFO] = useState(translations[language]);


		useEffect(() => {
			setINFO(translations[language]); 
		}, [language]); 


	return (
		<div className="other-studies">
			<Card
				icon={faBook}
				title={INFO.card_headers.other_studies}
				body={
					<div className="other-studies-body">
						{INFO.other_studies && INFO.other_studies.map(
							(other_studies,id) => (
								<div className="other-study">
							<img
								height={30}
								src={other_studies.logo}
								alt={`${id}-study`}
								className="other-study-image"
							/>
							<div className="other-study-title">{other_studies.title}</div>
							<div className="other-study-subtitle">
							{other_studies.institution}
							</div>
							<div className="other-study-duration">{other_studies.timeframe}</div>
						</div>
							)
						)}
					</div>
				}
			/>
		</div>
	);
};

export default OtherStudies;