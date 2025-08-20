import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import LanguageContext from "../../LanguageContext";
import translations from "../../data/translations"; 

import "./style/article.css";

const Article = (props) => {
  const { date, title, description, link } = props;

  // Obtener idioma actual
  const { language } = useContext(LanguageContext);
  const INFO = translations[language];

  return (
    <div className="article">
      <div className="article-left-side">
        <div className="article-date">{date}</div>
      </div>

      <Link to={link}>
        <div className="article-right-side">
          <div className="article-title">{title}</div>
          <div className="article-description">{description}</div>
          <div className="article-link">
            {INFO.articles.readButton}{" "}
            <FontAwesomeIcon style={{ fontSize: "10px" }} icon={faChevronRight} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Article;
