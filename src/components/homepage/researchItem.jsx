import React from "react";
import "../styles/researchItem.css";

const ResearchItem = ({ authors, year, title, publication, volume, issue, pages, doi, url }) => {
	return (
		<div className="research-item">
			<p className="research-authors">{authors} ({year})</p>
			<p className="research-title">{title}</p>
			<p className="research-publication">
				<em>{publication}</em>
				{volume && `, ${volume}`}
				{issue && `(${issue})`}
				{pages && `, ${pages}`}
			</p>
			{doi && <p className="research-doi">DOI: <a href={doi} target="_blank" rel="noopener noreferrer">{doi}</a></p>}
			{url && <p className="research-url"><a href={url} target="_blank" rel="noopener noreferrer">View Article</a></p>}
		</div>
	);
};

export default ResearchItem;