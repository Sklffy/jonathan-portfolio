import React from "react";
import BallCanvas from "./BallCanvas";

const techIcons = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
];

export default function TechStack() {
  return (
    <div className="tech-stack-section" id="techstack">
      {/* Reused Projects Header Style */}
      <div className="projects-header">
        <span className="projects-subtitle">MY TOOLKIT</span>
        <h2 className="projects-title">Technical <span>Expertise</span></h2>
        <p className="projects-description">
          Technologies and tools I specialize in, which I use to build secure, high-performance, and modern applications.
        </p>
        <div className="projects-underline"></div>
      </div>

      {/* Tech Grid */}
      <div className="tech-grid">
        {techIcons.map((icon, i) => (
          <div className="tech-item" key={i}>
            <BallCanvas icon={icon} />
          </div>
        ))}
      </div>
    </div>
  );
}
