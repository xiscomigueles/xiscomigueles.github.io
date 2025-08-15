import React from "react";

function article_1() {
	return {
		logo: "../grupoSolutia.png",
		date: "9/11/2023 - Actualidad",
		title: "Programador Senior [Grupo Solutia]",
		description:
			"Programador Full Stack con experiencia en SQL, Java y desarrollo front-end con Web Components (Lit + Vite), participando en proyectos para el SAS y Mapfre bajo metodologías ágiles.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				`,
		body: (
			<React.Fragment>
				<h1>HOLA???? of article 2</h1>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		logo: "../nttdata.png",
		date: "02/03/2023 - 01/07/2023",
		title: "Programador de Prácticas [NTT DATA]",
		description:
			"Prácticas de programación en NTT Data, desarrollando visualizaciones para el análisis de datos en el sector SAE.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>HOLA???? of article 2</h1>
			</React.Fragment>
		),
	};
}


const myArticles = [article_1, article_2];

export default myArticles;
