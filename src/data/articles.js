import React from "react";

function article_1() {
	return {
		logo: "../grupoSolutia.png",
		date: "9/11/2023 - Actualidad",
		title: "Programador Senior - Grupo Solutia",
		description:
			"Programador Full Stack con experiencia en SQL, Java y desarrollo front-end con Web Components (Lit + Vite), participando en proyectos para el SAS y Mapfre bajo metodologías ágiles.",
		keywords: [
			"Grupo Solutia",
			"Desarrollo Software",
			"Microservicios",
			"Full Stack Developer",
			"DDD",
			"Spring Boot",
			"Lit",
			"Vite",
			"Scrum",
			"JSF",
			"TypeScript",
			"JavaScript",
			"Java 11",
			"Java 21"
		],
		style: ``,
		body: (
			<React.Fragment>
				<h2>Software Developer / Analyst</h2>
				<p>
					Durante mi etapa en <b>Grupo Solutia</b> participé en proyectos de gran impacto como 
					<b> Vacunas del SAS</b> y <b>Mapfre</b>, desarrollando tanto en cliente como en 
					servidor y colaborando también en tareas de análisis.
				</p>

				<h3>Formación continua</h3>
				<p>
					Me especialicé en <b>patrones de diseño</b>, <b>contenedores Docker</b>, <b>Helm</b> y arquitecturas modernas.
				</p>

				<h3>Proyecto Vacunas (SAS)</h3>
				<ul>
					<li>
						Mantenimiento y evolución de un sistema <b>legacy</b>, trabajando como full stack en el 
						front con <b>JSF</b> y <b>JavaScript</b>, y en el backend con <b>Java 11</b> sobre 
						<b> Weblogic Oracle</b>.
					</li>
					<li>
						Mejoras en funcionalidades, resolución de incidencias y gestión de tickets.
					</li>
					<li>
						Participación en la <b>migración hacia microservicios</b>, aplicando principios de <b>DDD(Domain-Driven Design)</b>, separación de responsabilidades y uso de diagramas de dominio.
					</li>
					<li>
						En la transformación tecnológica, el backend evolucionó a <b>Java 21</b> y el front a 
						<b>Vite + Lit</b> usando <b>TypeScript con Web Components</b>, ampliando mi experiencia en entornos modernos.
					</li>
				</ul>

				<h3>Proyecto Mapfre</h3>
				<ul>
					<li>
						Desarrollo backend utilizando <b>Spring</b> en conjunto con el framework <b>pui9</b> de 
						Prodevelop, usando <b>Java 21</b> y <b>PostgresSQL</b>.
					</li>
					<li>
						Implementación de <b>historias de usuario</b> bajo <b>Scrum</b>, con estimación de esfuerzo 
						y modelado de relaciones en base de datos.
					</li>
					<li>
						Integración con <b>Vue.js</b> en el front.
					</li>
				</ul>

				<h3>Impacto</h3>
				<p>
					Consolidé mi perfil como <b>desarrollador fullstack</b>, trabajando desde entornos 
					<b> legacy</b> con <b>Java 11</b> y <b>JSF</b>, hasta arquitecturas modernas con <b>Java 21</b> y <b>Web Components</b>, aplicando buenas prácticas de <b>DDD</b> y 
					metodologías ágiles para entregar soluciones escalables y de calidad.
				</p>
			</React.Fragment>
		),
	};
}



function article_2() {
	return {
		logo: "../nttdata.png",
		date: "02/03/2023 - 01/07/2023",
		title: "Programador de Prácticas - NTT DATA",
		description:
			"Prácticas de programación en NTT Data, desarrollando visualizaciones para el análisis de datos en el sector SAE.",
		style: ``,
		keywords: [
			"NTT DATA",
			"Análisis de datos",
			"ETL",
			"Dashboards",
			"Python",
			"JavaScript",
			"SQL",
			"Pentaho",
		],
		body: (
			<React.Fragment>
				<p>
					Durante mi etapa en <b>NTT DATA</b> participé en el diseño y desarrollo de soluciones 
					orientadas al <b>análisis de datos</b> en el sector <b>SAE</b>, utilizando herramientas 
					como <b>Pentaho (PDI), SQL, Visual Studio, Python y JavaScript</b>.
				</p>

				<h3>Responsabilidades y logros</h3>
				<ul>
					<li><b>Creación de modelos analíticos</b> y procesos propios para la explotación de datos.</li>
					<li><b>Desarrollo e integración ETL</b> para facilitar la transformación y carga de datos.</li>
					<li><b>Implementación de dashboards</b> y visualizaciones interactivas para interpretar datos complejos.</li>
					<li><b>Optimización de consultas y procesamiento</b> para mejorar la eficiencia del análisis.</li>
					<li><b>Colaboración bajo metodologías ágiles</b> y soporte al equipo de desarrollo.</li>
				</ul>

				<p className="text-sm text-gray-500 mt-4">
					<b>Tecnologías y herramientas:</b> Oracle · Pentaho (PDI) · Visual Studio · JavaScript · Python
				</p>
			</React.Fragment>
		),
	};
}



const myArticles = [article_1, article_2];

export default myArticles;
