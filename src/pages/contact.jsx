import React, { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import MiniSocials from "../components/about/miniSocials.jsx";

import SEO from "../data/seo";

import "./styles/contact.css";
import MailtoLink from "../components/mailto/mailto.tsx";

import LanguageContext from "../LanguageContext";
import translations from "../data/translations";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const { language } = useContext(LanguageContext);

	const [INFO, setINFO] = useState(translations[language]);

	useEffect(() => {
		setINFO(translations[language]);
	}, [language]);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							{INFO.contact_header.header}
						</div>

						<div className="subtitle contact-subtitle">
							{INFO.contact_header.line_one}
							&nbsp; <MailtoLink />
						</div>
						<div className="subtitle contact-subtitle">
							{INFO.contact_header.line_two}
						</div>
					</div>
					<div className="socials-container">
						<div className="contact-socials">
							<MiniSocials />
						</div>
					</div>
					<div className="cv-viewer">
						<iframe
							src="/CVMigueles.pdf"
							width="100%"
							height="600px"
							style={{
								border: "1px solid #ccc",
								borderRadius: "8px",
							}}
							title="CV Viewer"
						></iframe>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
