import React, { useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import LanguageContext from "../LanguageContext";
import translations from "../data/translations";
import INFO from "../data/user"; // Para tu título principal y SEO general

import "./styles/readArticle.css";

let ArticleStyle = styled.div``;

const ReadArticle = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  // Obtener idioma actual
  const { language } = useContext(LanguageContext);
  const INFO_LANGUAGE = translations[language];

  // Obtener artículo correspondiente
  const article = INFO_LANGUAGE.articles.list[slug - 1];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [article]);

  // Aplicar estilos dinámicos
  ArticleStyle = styled.div`
    ${article.style}
  `;

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>{`${article.title} | ${INFO.main.title}`}</title>
        <meta name="description" content={article.description} />
        <meta name="keywords" content={article.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar />

        <div className="content-wrapper">
          <div className="read-article-logo-container">
            <div className="read-article-logo">
              <Logo width={46} />
            </div>
          </div>

          <div className="read-article-container">
            <div className="read-article-back">
              <img
                src="../back-button.png"
                alt="back"
                className="read-article-back-button"
                onClick={() => navigate(-1)}
              />
            </div>

            <div className="read-article-wrapper">
              <div className="read-article-date-container">
                <div className="read-article-date">{article.date}</div>
              </div>

              <div className="read-article-header">
                {article.logo && (
                  <a
                    href={article.companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-article-logo-link"
                  >
                    <img
                      src={article.logo}
                      alt={`${article.title} logo`}
                      className="read-article-article-logo"
                    />
                  </a>
                )}
                <div className="title read-article-title">{article.title}</div>
              </div>


              <div className="read-article-body">
                <ArticleStyle>{article.body}</ArticleStyle>
              </div>
            </div>
          </div>

          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ReadArticle;
