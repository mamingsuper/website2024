import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Logo from "../components/common/logo";
import ResearchItem from "../components/research/researchItem";

import INFO from "../data/user";
import SEO from "../data/seo";
import RESEARCH from "../data/research";

import "./styles/research.css";

const Research = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "research");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Research | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="research" />
				<div className="content-wrapper">
					<div className="research-logo-container">
						<div className="research-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="research-main-container">
						<div className="title research-title">
							{INFO.research.title}
						</div>

						<div className="research-container">
							<div className="research-wrapper">
								<h3>Books</h3>
								{RESEARCH.books.map((book, index) => (
									<ResearchItem key={index} item={book} type="book" />
								))}

								<h3>Articles</h3>
								{RESEARCH.articles.map((article, index) => (
									<ResearchItem key={index} item={article} type="article" />
								))}

								<h3>Working Papers</h3>
								{RESEARCH.workingPapers.map((paper, index) => (
									<ResearchItem key={index} item={paper} type="workingPaper" />
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Research;