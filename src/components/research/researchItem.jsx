import React from "react";

const ResearchItem = ({ item, type }) => {
	return (
		<div className="research-item">
			<p>
				{item.authors} ({item.year}). {item.title}.{" "}
				{type === "book" ? (
					<em>{item.publication}</em>
				) : (
					<>
						<em>{item.journal}</em>
						{item.volume && `, ${item.volume}`}
						{item.issue && `(${item.issue})`}
						{item.pages && `, ${item.pages}`}
					</>
				)}
				{item.status && ` (${item.status})`}
				{item.url && (
					<>
						{" "}
						<a href={item.url} target="_blank" rel="noopener noreferrer">
							URL
						</a>
					</>
				)}
				{item.pdf && (
					<>
						{" "}
						<a href={item.pdf} target="_blank" rel="noopener noreferrer">
							PDF
						</a>
					</>
				)}
			</p>
		</div>
	);
};

export default ResearchItem;