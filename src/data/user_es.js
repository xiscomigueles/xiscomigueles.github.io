import React from "react";

const INFO = {
	nav_bar: {
		home: "Inicio",
		about: "Sobre mi",
		projects: "Logros",
		contact: "Contacto",
		MoreProjects: "Ver todos los proyectos -->",
		based_on:
			"Basado en © 2023 Tharindu.dev. Todos los derechos reservados.",
	},

	card_headers: {
		works: "Trabajos",
		studies: "Estudios",
		other_studies: "Información adicional",
		articles: "Experiencia Laboral",
	},

	socials_content: {
		github: "Proyectos GitHub",
		linkedin: "Perfil Profesional en LinkedIn",
	},

	main: {
		title: "Francisco Javier Migueles - Portfolio",
		name: "Francisco Javier Migueles Dominguez",
		email: "miguelesdominguez@gmail.com",
		logo: "../giblifoto.ico",
	},

	socials: {
		github: "https://github.com/xiscomigueles",
		linkedin:
			"https://www.linkedin.com/in/francisco-javier-migueles-dominguez-911526258/",
		github_uni: "https://github.com/Framigdom",
	},

	homepage: {
		title: "Ingeniero de Software y desarrollador web full-stack, especializado en Java.",
		description:
			"Soy desarrollador de software, cuento con una sólida experiencia como desarrollador backend en Java y como desarrollador frontend con Node.js. Además, tengo conocimientos en tecnologías como TypeScript, SQL, PL/SQL, contenedores Docker, Unity (C#), Godot, y Python, entre otras. Me motiva aprender constantemente, seguir buenas prácticas de desarrollo, asumir nuevos retos y, especialmente, me apasiona la industria de los videojuegos.",
	},

	about: {
		title: "Francisco Javier Migueles - Friki del código con alma de gamer.",
		description:
			"A lo largo de mi carrera académica y experiencia profesional, he participado en diversos proyectos, tanto personales de código abierto disponibles en mi repositorio de GitHub, como en desarrollos internos no públicos para el Sistema Andaluz de Salud (SAS) y Mapfre. Estos proyectos me han permitido adquirir un dominio sólido de Java, así como un conocimiento avanzado en tecnologías como TypeScript, Node.js, SQL, JSF, contenedores Docker, entre otras. \n En varios momentos trabajé de forma simultánea en más de un proyecto (por ejemplo, Vacunas y Mapfre), lo que me permitió afrontar una gran variedad de retos técnicos en paralelo, desarrollar una alta capacidad de resolución de problemas y gestionar con éxito situaciones de elevada carga de trabajo y estrés. \n Además, he desarrollado competencias en diseño de software, patrones de diseño, análisis y modelado DDD (Domain-Driven Design), construcción de microservicios y metodologías ágiles como Scrum y Kanban. \n Me motiva el aprendizaje continuo y el crecimiento tanto profesional como personal, aplicando siempre buenas prácticas de desarrollo. Me considero una persona disciplinada, organizada y comprometida con la puntualidad y el trabajo en equipo, cualidades que valoro profundamente en el entorno profesional. Mis principales objetivos son diseñar aplicaciones eficientes, especializarme como experto en Java y publicar varios videojuegos en Steam.",
	},

	studies: [
		{
			title: "Oracle Certified Professional: Java SE 17",
			institution: "Oracle University",
			timeframe: "En proceso...",
			logo: "../Oracle.png",
		},
		{
			title: "Ingeniería del Software - Ingeniería Informática",
			institution: "Universidad de Sevilla",
			timeframe: "Septiembre 2019 - Julio 2023",
			logo: "../logo_us.png",
		},
	],
	other_studies: [
		{
			title: "B1 Inglés",
			institution: "Cambridge",
			timeframe: "Julio 2018",
			logo: "../cambridge.png",
		},
		{
			title: "Carne de conducir B",
			institution: "DGT",
			timeframe: "Marzo 2023",
			logo: "../dgt.png",
		},
	],

	// work: [
	// 	{
	// 		title: "ddsvsvsvs",
	// 		description:
	// 			"svsdvsddfvsd",
	// 		timeframe: "svsdfvsdfvfsd",
	// 		url: "vfvfsdvsvsdfv",
	// 		logo: "",
	// 	},
	// ],

	contact_header: {
		header: "¿Trabajamos juntos?",
		line_one:
			"Gracias por visitar mi portfolio. Si tienes alguna pregunta, sugerencia o simplemente quieres charlar sobre tecnología, videojuegos o cualquier otro tema, no dudes en contactarme por email.",
		line_two:
			"Te dejo por aqui mi CV en PDF y mi perfil de Linkedin. ¡Espero saber de ti pronto!",
	},

	projects_header: {
		header: "Mis Proyectos Destacados",
		description:
			"A lo largo de mi trayectoria como desarrollador, he llevado a cabo diversos proyectos personales y colaborativos, combinando originalidad, creatividad y un enfoque práctico en la resolución de problemas reales. Desde aplicaciones web hasta pequeños videojuegos, cada proyecto ha sido una oportunidad para aprender, experimentar y crecer profesionalmente, contribuyendo de forma decisiva a mi evolución como desarrollador.",
	},

	projects: [
		{
			title: "FoodCheck",
			description:
				"FoodCheck es una PWA que permite a los usuarios filtrar y comparar productos alimenticios según sus preferencias, dietas e intolerancias. Proyecto colaborativo desarrollado en Python con Django.",
			logo: "./foodcheck.png",
			linkText: "Ver en GitHub",
			link: "https://github.com/ispp-FoodCheck/FoodCheck",
		},
		{
			title: "Phonetic",
			description:
				"Desarrollo de plataforma web para venta de accesorios móviles de diversas marcas, desde fundas hasta cascos VR. Proyecto colaborativo desarrollado en Python con Django.",
			logo: "https://cdn.worldvectorlogo.com/logos/django.svg",
			linkText: "Repositorio privado",
			link: "#",
		},

		{
			title: "Project REMORY",
			description:
				"Proyecto grupal de elicitación de requisitos de una asesoria, donde se realizó tanto un Analisis del Sistema como la obtencion de los Requisitos del Sistema mediantes modelado UML, entrevistas, entre otros.",
			logo: "./logo_us.png",
			linkText: "Ver en GitHub",
			link: "https://github.com/TheNeoStormZ/super-REMORY",
		},

		{
			title: "Decide",
			description:
				"Este proyecto colaborativo, desarrollado en Python con Django, involucró a varios grupos en diversas tareas para un proyecto externo. La idea era crear una plataforma de voto electronico segura, que cumpla una serie de garantías básicas, como la anonimicidad y el secreto del voto.",
			logo: "https://cdn.worldvectorlogo.com/logos/docker-4.svg",
			linkText: "Ver en GitHub",
			link: "https://github.com/Villanueva-del-Trabuco-EGC/decide",
		},

		{
			title: "Dwarf",
			description:
				"Implementación del juego de mesa Dwarf a una plataforma web desarrollada con Spring Framework usando la plantilla de PetClinic. Proyecto colaborativo usando Java y JSP.",
			logo: "https://cdn.worldvectorlogo.com/logos/spring-3.svg",
			linkText: "Ver en GitHub",
			link: "https://github.com/gii-is-DP1/dp1-2021-2022-l8-5",
		},
		{
			title: "Feria CBD",
			description:
				"Proyecto para la asignatura de Complemento de Base de Datos del grado de Ingeniería del Software, donde se realizó una aplicacion web para buscar y localizar casetas de la feria de Sevilla. Proyecto colaborativo desarrollado en Python con Django y usando MongoDB.",
			logo: "./MongoDB.png",
			linkText: "Ver en GitHub",
			link: "https://github.com/DiegoRuizGil/Feria_CBD",
		},
		{
			title: "Gus Gus",
			description:
				"Desarrollo de un videojuego 2D como proyecto final de grado, implementado en Unity con C# y ejecutable en escritorio. El juego se basa en laberintos generados aleatoriamente, donde el jugador debe superar niveles enfrentando enemigos y en el menor tiempo posible.",
			logo: "./gusgus.png",
			linkText: "Ver en GitHub",
			link: "https://github.com/TFG-Framigdom/GusGus",
		},
		{
			title: "Let me in Piss",
			description:
				"Videojuego 2D desarrollado durante la Málaga Jam 2024, con la temática Hazme reír. El juego consiste en alcanzar un destino superando una serie de mini-juegos cómicos a lo largo del recorrido. Proyecto colaborativo creado en Unity con C#.",
			logo: "./itchio.png",
			linkText: "Ver en Itchio",
			link: "https://diegorg64.itch.io/let-me-in-piss",
		},
	],
	courses_header: {
		title: "Cursos realizados",
	},
	courses: [
		{ name: "Patrones de diseño SOLID", diploma: "./diplomas/SOLID.png" },
		{ name: "Contenedores Docker", diploma: "./diplomas/Docker.png" },
		{ name: "Jakarta EE", diploma: "./diplomas/JakartaEE.png" },
		{ name: "Helm", diploma: "./diplomas/Helm.png" },
		{ name: "Istio", diploma: "./diplomas/Istio.png" },
		{ name: "Kubernetes", diploma: "./diplomas/Kubernetes.png" },
	],

	
	articles: {
		title: "Experiencia profesional",
		readButton: "Mas infromación",
		list: [
			{
				logo: "../grupoSolutia.png",
				date: "09/11/2023 - Actualidad",
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
					"Java 21",
				],
				body: (
					<React.Fragment>
						<h2>Software Developer / Analyst</h2>
						<p>
							Durante mi etapa en <b>Grupo Solutia</b> participé en proyectos de
							gran impacto como <b>Vacunas del SAS</b> y <b>Mapfre</b>, desarrollando
							tanto en cliente como en servidor y colaborando también en tareas de análisis.
						</p>

						<h3>Formación continua</h3>
						<p>
							Me especialicé en <b>patrones de diseño</b>, <b>contenedores Docker</b>,
							<b> Helm</b> y arquitecturas modernas.
						</p>

						<h3>Proyecto Vacunas (SAS)</h3>
						<ul>
							<li>
								Mantenimiento y evolución de un sistema <b>legacy</b>, trabajando como
								full stack en el front con <b>JSF</b> y <b>JavaScript</b>, y en el
								backend con <b>Java 11</b> sobre <b>Weblogic Oracle</b>.
							</li>
							<li>Mejoras en funcionalidades, resolución de incidencias y gestión de tickets.</li>
							<li>
								Participación en la <b>migración hacia microservicios</b>, aplicando
								principios de <b>DDD (Domain-Driven Design)</b>, separación de
								responsabilidades y uso de diagramas de dominio.
							</li>
							<li>
								En la transformación tecnológica, el backend evolucionó a <b>Java 21</b>
								y el front a <b>Vite + Lit</b> usando <b>TypeScript con Web Components</b>,
								ampliando mi experiencia en entornos modernos.
							</li>
						</ul>

						<h3>Proyecto Mapfre</h3>
						<ul>
							<li>
								Desarrollo backend utilizando <b>Spring</b> en conjunto con el framework
								<b> pui9</b> de Prodevelop, usando <b>Java 21</b> y <b>PostgresSQL</b>.
							</li>
							<li>
								Implementación de <b>historias de usuario</b> bajo <b>Scrum</b>, con
								estimación de esfuerzo y modelado de relaciones en base de datos.
							</li>
							<li>Integración con <b>Vue.js</b> en el front.</li>
						</ul>

						<h3>Impacto</h3>
						<p>
							Consolidé mi perfil como <b>desarrollador fullstack</b>, trabajando desde
							entornos <b>legacy</b> con <b>Java 11</b> y <b>JSF</b>, hasta arquitecturas
							modernas con <b>Java 21</b> y <b>Web Components</b>, aplicando buenas
							prácticas de <b>DDD</b> y metodologías ágiles para entregar soluciones
							escalables y de calidad.
						</p>
					</React.Fragment>
				),
			},
			{
				logo: "../nttdata.png",
				date: "02/03/2023 - 01/07/2023",
				title: "Programador de Prácticas - NTT DATA",
				description:
					"Prácticas de programación en NTT Data, desarrollando visualizaciones para el análisis de datos en el sector SAE.",
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
							Durante mi etapa en <b>NTT DATA</b> participé en el diseño y desarrollo
							de soluciones orientadas al <b>análisis de datos</b> en el sector
							<b> SAE</b>, utilizando herramientas como <b>Pentaho (PDI)</b>,
							<b> SQL</b>, <b>Visual Studio</b>, <b>Python</b> y <b>JavaScript</b>.
						</p>

						<h3>Responsabilidades y logros</h3>
						<ul>
							<li>
								<b>Creación de modelos analíticos</b> y procesos propios para la
								explotación de datos.
							</li>
							<li>
								<b>Desarrollo e integración ETL</b> para facilitar la transformación y
								carga de datos.
							</li>
							<li>
								<b>Implementación de dashboards</b> y visualizaciones interactivas para
								interpretar datos complejos.
							</li>
							<li>
								<b>Optimización de consultas y procesamiento</b> para mejorar la
								eficiencia del análisis.
							</li>
							<li>
								<b>Colaboración bajo metodologías ágiles</b> y soporte al equipo de
								desarrollo.
							</li>
						</ul>

						<p className="text-sm text-gray-500 mt-4">
							<b>Tecnologías y herramientas:</b> Oracle · Pentaho (PDI) · Visual Studio ·
							JavaScript · Python
						</p>
					</React.Fragment>
				),
			},
		],
	},


};

export default INFO;
