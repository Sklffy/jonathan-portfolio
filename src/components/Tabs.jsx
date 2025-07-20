import React, { useState } from 'react';
import '../Tabs.css';
import About from './About';
import Projects from './Projects';
import TechStack from './TechStack';

export default function Tabs({ activeTab, setActiveTab }) {
  const [localActiveTab, setLocalActiveTab] = useState(activeTab || "about");

  // Sync with parent activeTab
  React.useEffect(() => {
    if (activeTab) setLocalActiveTab(activeTab);
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setLocalActiveTab(tab);
    if (setActiveTab) setActiveTab(tab);
  };

  return (
    <>
  <hr className="section-divider" />
      <section className="section-tabs">
        <div className="tab-buttons">
          <button
            className={`tab-btn ${localActiveTab === "about" ? "active" : ""}`}
            onClick={() => handleTabClick("about")}
          >
            About Me
          </button>
          <button
            className={`tab-btn ${localActiveTab === "projects" ? "active" : ""}`}
            onClick={() => handleTabClick("projects")}
          >
            Projects
          </button>
          <button
            className={`tab-btn ${localActiveTab === "techstack" ? "active" : ""}`}
            onClick={() => handleTabClick("techstack")}
          >
            Tech Stack
          </button>
        </div>

        {localActiveTab === "about" && (
          <div className="tab-content active" id="about">
            <About />
          </div>
        )}
        {localActiveTab === "projects" && (
          <div className="tab-content active" id="projects">
            <Projects />
          </div>
        )}
        {localActiveTab === "techstack" && (
          <div className="tab-content active" id="techstack">
            <TechStack />
          </div>
        )}
      </section>

      <hr className="section-divider" />
    </>
  );
}
