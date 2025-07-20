// -------------------- Projects.jsx --------------------
import React from 'react';
import '../Tabs.css';
import { FaGithub, FaDownload } from 'react-icons/fa';

const iconMap = {
  "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "JSON": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg"
};

const projects = [
  {
    title: "RedGuard AI",
    description: "An AI-driven honeypot threat intelligence system for simulating live attacks.",
    image: "/RED.png",
    tech: ["Python", "Docker", "JavaScript"],
    code: "https://github.com/Sklffy"
  },
  {
    title: "ATLANTIS Scoreboard",
    description: "A C++ and HTML-based scoring engine with inject tracking and live service checks.",
    image: "/favicon.png",
    tech: ["C++", "HTML", "CSS", "JSON"],
    code: "https://github.com/Sklffy/Scoring-Engine"
  },
  {
    title: "Proxmox Cyber Lab",
    description: "Home lab for cyber defense testing. GPU passthrough, pfSense, VLANs, and AI/ML support.",
    image: "/proxmox.jpg",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    download: "/files/Software_Requirements_Specification.docx" // Points to your uploaded file
  }
];

export default function Projects() {
  return (
    <div className="tab-content active" id="projects">
      {/* Projects Section Header */}
      <div className="projects-header">
        <span className="projects-subtitle">PORTFOLIO SHOWCASE</span>
        <h2 className="projects-title">
          Featured <span>Projects</span>
        </h2>
        <p className="projects-description">
          A collection of my recent work across various technologies and domains. 
          Each project represents unique challenges and solutions.
        </p>
        <div className="projects-underline"></div>
      </div>

      {/* Projects Grid */}
      <div className="project-grid">
        {projects.map((proj, i) => (
          <div className="project-card" key={i}>
            <div className="project-img-wrapper">
              <img src={proj.image} className="project-img" alt={proj.title} />
            </div>
            <div className="project-info">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="tech-section">
                <div className="tech-title">Technologies Used</div>
                <div className="tags">
                  {proj.tech.map((tech, idx) => (
                    <span key={idx} className="tech-badge">
                      {iconMap[tech] && (
                        <img src={iconMap[tech]} alt={tech} className="tech-icon" />
                      )}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="project-actions">
              {proj.code && (
                <a href={proj.code} className="details-btn" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> Source Code
                </a>
              )}
              {proj.download && (
                <a href={proj.download} className="details-btn" download>
                  <FaDownload /> Download
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
