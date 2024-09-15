import React from "react";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, leaders, team, duration, details, link } = props;

	return (
		<div className="project">
			<div className="project-container">
				{logo && (
					<div className="project-logo">
						<img src={logo} alt="logo" />
					</div>
				)}
				<div className="project-title">
					{link ? (
						<a href={link} target="_blank" rel="noopener noreferrer">
							{title}
						</a>
					) : (
						title
					)}
				</div>
				<div className="project-description">{description}</div>
				{leaders && (
					<div className="project-leaders">
						<strong>Project Leaders:</strong>{" "}
						{leaders.map((leader, index) => (
							<React.Fragment key={index}>
								{index > 0 && ", "}
								<a href={leader.link} target="_blank" rel="noopener noreferrer">
									{leader.name}
								</a>
							</React.Fragment>
						))}
					</div>
				)}
				{team && (
					<div className="project-team">
						<strong>Team:</strong> {team.join(", ")}
					</div>
				)}
				{duration && (
					<div className="project-duration">
						<strong>Duration:</strong> {duration}
					</div>
				)}
				{details && (
					<div className="project-details">
						<strong>Details:</strong> {details}
					</div>
				)}
			</div>
		</div>
	);
};

export default Project;
