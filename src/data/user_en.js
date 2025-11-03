import React from "react";

const INFO = {
	nav_bar: {
		home: "Home",
		about: "About Me",
		projects: "Achievements",
		contact: "Contact",
		MoreProjects: "View all projects -->",
		based_on: "Based on © 2023 Tharindu.dev. All rights reserved.",
	},

	card_headers: {
		works: "Work Experience",
		studies: "Education",
		other_studies: "Additional Information",
		articles: "Professional Experience",
	},

	socials_content: {
		github: "GitHub Projects",
		linkedin: "Professional LinkedIn Profile",
	},

	main: {
		title: "Francisco Javier Migueles - Portfolio",
		name: "Francisco Javier Migueles Dominguez",
		email: "miguelesdominguez@gmail.com",
		logo: "/FotitoGibli.png",
	},

	socials: {
		github: "https://github.com/xiscomigueles",
		linkedin:
			"https://www.linkedin.com/in/francisco-javier-migueles-dominguez-911526258/",
		github_uni: "https://github.com/Framigdom",
	},

	homepage: {
		title: "Software Engineer and Full-Stack Web Developer, specialized in Java.",
		description:
			"I'm a software engineer with solid experience as a backend developer in Java and frontend developer with Node.js. Additionally, I have knowledge of technologies such as TypeScript, SQL, PL/SQL, Docker containers, Unity (C#), Godot, and Python, among others. I'm highly motivated to keep learning, follow best development practices, take on new challenges, and I'm especially passionate about the video game industry.",
	},

	about: {
		title: "Francisco Javier Migueles - Code geek with a gamer’s soul.",
		description:
			"Throughout my academic and professional career, I have participated in various projects, including open-source repositories on GitHub and internal developments for the Andalusian Health Service (SAS) and Mapfre. These experiences have allowed me to strengthen my expertise in Java and gain advanced knowledge in TypeScript, Node.js, SQL, JSF, and Docker, among other technologies.\n I have often worked on multiple projects simultaneously, tackling diverse technical challenges that enhanced my problem-solving skills, time management, and ability to perform under pressure. I have solid experience in software design and architecture, as well as in design patterns, DDD, microservices, and agile methodologies such as Scrum and Kanban. I'm passionate about continuous learning and the application of best development practices. \n In addition, I enjoy creating mini-games for game jams and aspire to publish my own video games on Steam in the future."
	},

	studies: [
		{
			title: "Oracle Certified Professional: Java SE 21",
			institution: "Oracle University",
			timeframe: "In progress...",
			logo: "../Oracle.png",
		},
		{
			title: "Software Engineering - Computer Engineering",
			institution: "University of Seville",
			timeframe: "September 2019 - July 2023",
			logo: "../logo_us.png",
		},
	],
	other_studies: [
		{
			title: "English Level B1",
			institution: "Cambridge",
			timeframe: "July 2018",
			logo: "../cambridge.png",
		},
		{
			title: "Driver’s License B",
			institution: "DGT",
			timeframe: "March 2023",
			logo: "../dgt.png",
		},
	],

	contact_header: {
		header: "Shall we work together?",
		line_one:
			"Thank you for visiting my portfolio. If you have any questions, suggestions, or simply want to chat about technology, video games, or any other topic, feel free to contact me by email.",
		line_two:
			"Here you can find my CV in PDF format and my LinkedIn profile. I look forward to hearing from you soon!",
	},

	projects_header: {
		header: "My Featured Projects",
		description:
			"Throughout my journey as a developer, I have carried out several personal and collaborative projects, combining originality, creativity, and a practical approach to solving real-world problems. From web applications to small video games, each project has been an opportunity to learn, experiment, and grow professionally, decisively contributing to my evolution as a developer.",
	},

	projects: [
		{
			title: "FoodCheck",
			description:
				"FoodCheck is a PWA that allows users to filter and compare food products according to their preferences, diets, and intolerances. Collaborative project developed in Python with Django.",
			logo: "./foodcheck.png",
			linkText: "View on GitHub",
			link: "https://github.com/ispp-FoodCheck/FoodCheck",
		},
		{
			title: "Phonetic",
			description:
				"Development of a web platform for selling mobile accessories from different brands, ranging from phone cases to VR headsets. Collaborative project developed in Python with Django.",
			logo: "https://cdn.worldvectorlogo.com/logos/django.svg",
			linkText: "Private Repository",
			link: "#",
		},

		{
			title: "Project REMORY",
			description:
				"Group project for requirements elicitation for a consultancy, where both a System Analysis and a System Requirements Specification were developed using UML modeling, interviews, and other techniques.",
			logo: "./logo_us.png",
			linkText: "View on GitHub",
			link: "https://github.com/TheNeoStormZ/super-REMORY",
		},

		{
			title: "Decide",
			description:
				"This collaborative project, developed in Python with Django, involved several groups working on different tasks for an external project. The goal was to build a secure electronic voting platform that guarantees fundamental aspects such as anonymity and vote secrecy.",
			logo: "https://cdn.worldvectorlogo.com/logos/docker-4.svg",
			linkText: "View on GitHub",
			link: "https://github.com/Villanueva-del-Trabuco-EGC/decide",
		},

		{
			title: "Dwarf",
			description:
				"Implementation of the board game Dwarf into a web platform developed with Spring Framework using the PetClinic template. Collaborative project developed with Java and JSP.",
			logo: "https://cdn.worldvectorlogo.com/logos/spring-3.svg",
			linkText: "View on GitHub",
			link: "https://github.com/gii-is-DP1/dp1-2021-2022-l8-5",
		},
		{
			title: "Feria CBD",
			description:
				"Project for the Database Complement course in the Software Engineering degree. A web application was developed to search for and locate booths at the Seville Fair. Collaborative project developed in Python with Django and MongoDB.",
			logo: "./MongoDB.png",
			linkText: "View on GitHub",
			link: "https://github.com/DiegoRuizGil/Feria_CBD",
		},
		{
			title: "Gus Gus",
			description:
				"Development of a 2D video game as the final degree project, implemented in Unity with C# and built for desktop. The game is based on randomly generated mazes where the player must complete levels while facing enemies in the shortest time possible.",
			logo: "./gusgus.png",
			linkText: "View on GitHub",
			link: "https://github.com/TFG-Framigdom/GusGus",
		},
		{
			title: "Let me in Piss",
			description:
				"2D video game developed during Málaga Jam 2024 with the theme 'Make me laugh.' The game consists of reaching a destination by overcoming a series of humorous mini-games along the way. Collaborative project created in Unity with C#.",
			logo: "./itchio.png",
			linkText: "View on Itchio",
			link: "https://diegorg64.itch.io/let-me-in-piss",
		},
		{
			title: "Static",
			description:
				"2D video game developed during the October Jam 2025, featuring a horror theme based on the concept “TV static.” It's a walking simulator where the player explores a mysterious house to uncover what really happened. A collaborative project created in Godot using GDScript.",
			logo: "./itchio.png",
			linkText: "View en Itchio",
			link: "https://xiscomigueles.itch.io/staticjam",
		}
	],
	courses_header: {
		title: "Completed Courses",
	},
	courses: [
		{ name: "SOLID Design Patterns", diploma: "./diplomas/SOLID.png" },
		{ name: "Docker Containers", diploma: "./diplomas/Docker.png" },
		{ name: "Jakarta EE", diploma: "./diplomas/JakartaEE.png" },
		{ name: "Helm", diploma: "./diplomas/Helm.png" },
		{ name: "Istio", diploma: "./diplomas/Istio.png" },
		{ name: "Kubernetes", diploma: "./diplomas/Kubernetes.png" },
	],
	articles: {
		title: "Professional Experience",
		readButton: "Read More",
		list: [
			{
				logo: "../grupoSolutia.png",
				companyLink: "https://www.linkedin.com/company/solutia-innovaworld-technologies/",
				date: "11/09/2023 - Present",
				title: "Full-Stack Developer - Grupo Solutia",
				description:
					"Full Stack Developer with experience in SQL, Java, and front-end development with Web Components (Lit + Vite). Contributed to SAS and Mapfre projects under agile methodologies.",
				keywords: [
					"Grupo Solutia",
					"Software Development",
					"Microservices",
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
						<p>
							During my time at <b>Grupo Solutia</b>, I participated in
							large-scale projects such as <b>SAS Vaccination System</b> and
							<b> Mapfre</b>, working both on client and server side while also
							collaborating in analysis tasks.
						</p>

						<h3>Continuous Learning</h3>
						<p>
							I specialized in <b>design patterns</b>, with a strong focus on implementing the <b>Factory</b> and <b>Chain of Responsibility</b> patterns to achieve more modular, scalable, and maintainable code. 
							I also have experience working with <b>Docker containers</b>, <b> Helm</b>, and modern architectures aimed at efficiency and automation.
						</p>

						<h3>Vaccines Project (SAS)</h3>
						<ul>
							<li>
								Maintenance and evolution of a <b>legacy system</b>, working full
								stack with <b>JSF</b> and <b>JavaScript</b> on the front, and
								<b> Java 11</b> with <b>Weblogic Oracle</b> on the backend.
							</li>
							<li>
								Implemented new features, resolved incidents, and handled ticket
								management.
							</li>
							<li>
								Contributed to the <b>migration to microservices</b>, applying
								<b> DDD (Domain-Driven Design)</b>, responsibility separation,
								and domain diagrams.
							</li>
							<li>
								During the technological transformation, the backend evolved to
								<b> Java 21</b> and the front end to <b>Vite + Lit</b> with
								<b> TypeScript + Web Components</b>, expanding my expertise with
								modern stacks.
							</li>
						</ul>

						<h3>Mapfre Project</h3>
						<ul>
							<li>
								Backend development using <b>Spring</b> together with the
								<b> pui9</b> framework from Prodevelop, with <b>Java 21</b> and
								<b> PostgreSQL</b>.
							</li>
							<li>
								Implemented <b>user stories</b> under <b>Scrum</b>, including
								effort estimation and database relationship modeling.
							</li>
							<li>Frontend integration with <b>Vue.js</b>.</li>
						</ul>

						<h3>Impact</h3>
						<p>
							I strengthened my profile as a <b>full stack developer</b>, working
							from <b>legacy environments</b> with <b>Java 11</b> and <b>JSF</b> to
							modern architectures with <b>Java 21</b> and <b>Web Components</b>,
							applying <b>DDD</b> best practices and agile methodologies to deliver
							scalable, high-quality solutions.
						</p>
					</React.Fragment>
				),
			},
			{
				logo: "../nttdata.png",
				companyLink: "https://www.linkedin.com/company/nttdata/",
				date: "03/02/2023 - 07/01/2023",
				title: "Intern Developer - NTT DATA",
				description:
					"Programming internship at NTT DATA, developing data analysis visualizations in the SAE sector.",
				keywords: [
					"NTT DATA",
					"Data Analysis",
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
							During my time at <b>NTT DATA</b>, I worked on designing and
							developing solutions focused on <b>data analysis</b> in the
							<b> SAE sector</b>, using tools such as <b>Pentaho (PDI)</b>,
							<b> SQL</b>, <b>Visual Studio</b>, <b>Python</b>, and
							<b> JavaScript</b>.
						</p>

						<h3>Responsibilities and Achievements</h3>
						<ul>
							<li>
								<b>Designed analytical models</b> and custom processes for data
								exploitation.
							</li>
							<li>
								<b>Developed and integrated ETL</b> processes to enable data
								transformation and loading.
							</li>
							<li>
								<b>Implemented dashboards</b> and interactive visualizations to
								interpret complex datasets.
							</li>
							<li>
								<b>Optimized queries and processing</b> to improve efficiency.
							</li>
							<li>
								<b>Collaborated under agile methodologies</b> and supported the
								development team.
							</li>
						</ul>

						<p className="text-sm text-gray-500 mt-4">
							<b>Technologies & Tools:</b> Oracle · Pentaho (PDI) · Visual Studio
							· JavaScript · Python
						</p>
					</React.Fragment>
				),
			},
		],
	},

};

export default INFO;
