import React, { useState, useContext } from "react";
import LanguageContext from "../../LanguageContext";
import translations from "../../data/translations";
import "./courses.css";

const Courses = () => {
	const [selectedCourse, setSelectedCourse] = useState(null);
	const { language } = useContext(LanguageContext);
	const INFO = translations[language];

	return (
		<div className="courses-container">
			<h2 className="courses-title">{INFO.courses_header.title}</h2>
			<div className="courses-list">
				{INFO.courses.map((course, index) => (
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
						onClick={(e) => e.stopPropagation()}
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
