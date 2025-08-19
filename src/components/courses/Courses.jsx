import React, { useState } from "react";
import "./courses.css"; // estilos aparte para mantener limpio

const Courses = () => {
	const [selectedCourse, setSelectedCourse] = useState(null);

	const courses = [
		{
			name: "Patrones de diseño SOLID",
			diploma: "./diplomas/SOLID.png",
		},
		{
			name: "Contenedores Docker",
			diploma: "./diplomas/Docker.png",
		},
		{
			name: "Jakarta EE",
			diploma: "./diplomas/JakartaEE.png",
		},
		{
			name: "Helm",
			diploma: "./diplomas/Helm.png",
		},
		{
			name: "Istio",
			diploma: "./diplomas/Istio.png",
		},
		{
			name: "Kubernetes",
			diploma: "./diplomas/Kubernetes.png",
		},
	];

	return (
		<div className="courses-container">
			<h2 className="courses-title">Cursos realizados</h2>
			<div className="courses-list">
				{courses.map((course, index) => (
					<div
						key={index}
						className="course-card"
						onClick={() => setSelectedCourse(course)}
					>
						{course.name}
					</div>
				))}
			</div>

			{selectedCourse && (
				<div
					className="modal-overlay"
					onClick={() => setSelectedCourse(null)}
				>
					<div
						className="modal-content"
						onClick={(e) => e.stopPropagation()} // evitar cierre si clicas dentro
					>
						<span
							className="modal-close"
							onClick={() => setSelectedCourse(null)}
						>
							&times;
						</span>
						<h3>{selectedCourse.name}</h3>
						<img
							src={selectedCourse.diploma}
							alt={selectedCourse.name}
							className="modal-image"
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default Courses;
