import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Logo from "../components/common/logo";
import Project from "../components/projects/project";
import ParticlesBackground from "../components/ParticlesBackground";

import INFO from "../data/user";
import SEO from "../data/seo";
import PROJECT from "../data/project";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<ParticlesBackground />

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">Projects</div>

						<div className="projects-list">
							<Project {...PROJECT.currentProject} />
							{/* Add more projects here if needed */}
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
