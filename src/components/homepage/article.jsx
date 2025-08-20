import React, {useContext} from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import LanguageContext from "../../LanguageContext";
import translations from "../../data/translations"; 
import "./styles/article.css";

const Article = (props) => {
	const { title, description, date, link, logo } = props;
	// Obtener idioma actual
  const { language } = useContext(LanguageContext);
  const INFO = translations[language];

	return (
		<React.Fragment>
			<div className="homepage-article">
				<div className="homepage-article-content">
					<div className="homepage-article-date">
						|&nbsp;&nbsp;&nbsp;{date}
					</div>
					<div className="homepage-article-title-with-logo">
						{logo && (
							<img
								src={logo}
								alt="article logo"
								className="homepage-article-logo"
							/>
						)}
						<div className="homepage-article-title">{title}</div>
					</div>

					<div className="homepage-article-description">
						{description}
					</div>
					<div className="homepage-article-link">
						<Link to={link}>
							{INFO.articles.readButton}{" "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Article;
