import React from "react";
import { Helmet } from "react-helmet";
import { TypeAnimation } from 'react-type-animation';

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import NavBar from "../components/common/navBar";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";

const Homepage = () => {
  const currentSEO = SEO.find((item) => item.page === "home");

  const highlightText = (text, highlights, professors) => {
    let result = text;
    highlights.forEach(highlight => {
      result = result.replace(highlight, `<span class="gradient-text">${highlight}</span>`);
    });
    professors.forEach(professor => {
      result = result.replace(professor.name, `<a href="${professor.link}" target="_blank" rel="noopener noreferrer" class="professor-name">${professor.name}</a>`);
    });
    return <div dangerouslySetInnerHTML={{ __html: result }} />;
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>{INFO.main.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta
          name="keywords"
          content={currentSEO.keywords.join(", ")}
        />
      </Helmet>

      <div className="page-content">
        <NavBar active="home" />
        <div className="content-wrapper">
          <div className="homepage-logo-container">
            <div className="homepage-logo">
              <Logo width={80} />
            </div>
          </div>

          <div className="homepage-container">
            <div className="homepage-first-area">
              <div className="homepage-first-area-left-side">
                <div className="title homepage-title">
                  {INFO.homepage.title}
                </div>

                <div className="subtitle homepage-subtitle">
                  <TypeAnimation
                    sequence={[INFO.homepage.typedDescription, 1000]}
                    wrapper="span"
                    speed={50}
                    style={{ display: 'inline-block' }}
                    repeat={1}
                  />
                </div>

                <div className="static-description">
                  {highlightText(INFO.homepage.staticDescription, 
                    ["computational political communication", "authoritarian politics", "AI governance", "Perspectives on Politics", "China Review", "China Perspectives", and "Journal of Public and Nonprofit Affairs"],
                    [
                      { name: "Prof. Dr. Genia Kostka", link: "https://www.geschkult.fu-berlin.de/e/oas/sinologie/institut/mitarbeiter/1_professoren/Kostka.html" },
                      { name: "Prof. Dr. Alexander Libman", link: "https://sites.google.com/site/libmanalexander" }
                    ]
                  )}
                </div>

                <div className="homepage-socials">
                  <a
                    href={INFO.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="homepage-social-icon"
                    />
                  </a>
                  <a
                    href={INFO.socials.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="homepage-social-icon"
                    />
                  </a>
                  <a
                    href={`mailto:${INFO.main.email}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faMailBulk}
                      className="homepage-social-icon"
                    />
                  </a>
                </div>
              </div>

              <div className="homepage-first-area-right-side">
                <div className="homepage-image-container">
                  <div className="homepage-image-wrapper">
                    <img
                      src="/about.jpg"
                      alt={INFO.main.name}
                      className="homepage-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
