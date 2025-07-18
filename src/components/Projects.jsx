// -------------------- Projects.jsx --------------------
import React from 'react';
import '../Tabs.css';

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
        
        {/* RedGuard AI */}
        <div className="project-card">
          <img src="/RED.png" className="project-img" alt="RedGuard AI" />
          <div className="project-info">
            <h3>RedGuard AI</h3>
            <p>
              An AI-driven honeypot threat intelligence system for simulating live attacks.
            </p>
            <div className="tech-section">
              <div className="tech-title">Technologies Used</div>
              <div className="tags">
                <span>Python</span>
                <span>Flask</span>
                <span>Docker</span>
                <span>ELK Stack</span>
              </div>
            </div>
          </div>
          <div className="project-actions">
            <a href="#" className="details-btn">Source Code</a>
          </div>
        </div>

        {/* ATLANTIS Scoreboard */}
        <div className="project-card">
          <img src="/favicon.png" className="project-img" alt="ATLANTIS Scoreboard" />
          <div className="project-info">
            <h3>ATLANTIS Scoreboard</h3>
            <p>
              A C++ and HTML-based scoring engine with inject tracking and live service checks.
            </p>
            <div className="tech-section">
              <div className="tech-title">Technologies Used</div>
              <div className="tags">
                <span>C++</span>
                <span>HTML/CSS</span>
                <span>JavaScript</span>
                <span>JSON</span>
              </div>
            </div>
          </div>
          <div className="project-actions">
            <a href="#" className="details-btn">Source Code</a>
          </div>
        </div>

        {/* Proxmox Cyber Lab */}
        <div className="project-card">
          <img src="/proxmox.jpg" className="project-img" alt="Proxmox Cyber Lab" />
          <div className="project-info">
            <h3>Proxmox Cyber Lab</h3>
            <p>
              Home lab for cyber defense testing. GPU passthrough, pfSense, VLANs, and AI/ML support.
            </p>
            <div className="tech-section">
              <div className="tech-title">Technologies Used</div>
              <div className="tags">
                <span>Proxmox</span>
                <span>pfSense</span>
                <span>Virtualization</span>
                <span>Linux</span>
                <span>AI/ML</span>
              </div>
            </div>
          </div>
          <div className="project-actions">
            <a href="#" className="details-btn">Source Code</a>
          </div>
        </div>

      </div>
    </div>
  );
}
