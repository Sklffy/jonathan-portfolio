// -------------------- 5. Tabs.jsx --------------------
import React, { useEffect } from 'react';

export default function Tabs() {
  useEffect(() => {
    const btns = document.querySelectorAll('.tab-btn');
    const tabs = document.querySelectorAll('.tab-content');

    const handler = (e) => {
      btns.forEach((b) => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      const target = e.currentTarget.getAttribute('data-tab');
      tabs.forEach((t) => t.classList.toggle('active', t.id === target));
    };

    btns.forEach((b) => b.addEventListener('click', handler));
    return () => btns.forEach((b) => b.removeEventListener('click', handler));
  }, []);

  return (
    <section className="section-tabs">
      <hr class="section-divider" />
      <div className="tab-buttons">
        <button className="tab-btn active" data-tab="about">About Me</button>
        <button className="tab-btn" data-tab="projects">Projects</button>
        <button className="tab-btn" data-tab="tech">Tech Stack</button>
      </div>

      <div className="tab-content active" id="about">
        <div className="about-container">
          <div className="about-text">
            <h2 className="section-title">About <span className="highlight">Me</span></h2>
            <h3 className="intro">Hello, I'm <span className="name-gradient">Jonathan Geisler</span></h3>
            <p className="bio">
              Cybersecurity-focused CS major with expertise in building defense labs, configuring secure infrastructure, and leading hands-on cyber exercises. Passionate about real-world threats, cloud infra, and automation. I specialize in securing systems, writing clean code, and creating immersive technical experiences.
            </p>
          </div>
          <div className="about-image">
            <div className="glow-circle">
              <img src="/logo.png" alt="Jonathan Geisler" />
            </div>
          </div>
        </div>
      </div>

<div className="tab-content" id="projects">
  <h2 className="section-title">
    <span className="glow-line"></span>My <span className="highlight">Projects</span>
  </h2>

  <div className="project-grid">
    {/* RedGuard AI */}
    <div className="project-card">
      <img src="/RED.png" className="project-img" alt="RedGuard AI" />
      <div className="project-info">
        <h3>RedGuard AI</h3>
        <p>An AI-driven honeypot threat intelligence system for simulating live attacks.</p>
        <div className="tags">
          <span>Python</span><span>Flask</span><span>Docker</span><span>ELK Stack</span>
        </div>
      </div>
      <div className="project-actions">
        <a href="#" className="details-btn">Details</a>
      </div>
    </div>

    {/* ATLANTIS Scoreboard */}
    <div className="project-card">
      <img src="/favicon.png" className="project-img" alt="ATLANTIS Scoreboard" />
      <div className="project-info">
        <h3>ATLANTIS Scoreboard</h3>
        <p>A C++ and HTML-based scoring engine with inject tracking and live service checks.</p>
        <div className="tags">
          <span>C++</span><span>HTML/CSS</span><span>JavaScript</span><span>JSON</span>
        </div>
      </div>
      <div className="project-actions">
        <a href="#" className="details-btn">Details</a>
      </div>
    </div>

    {/* Proxmox Cyber Lab */}
    <div className="project-card">
      <img src="/proxmox.jpg" className="project-img" alt="Proxmox Cyber Lab" />
      <div className="project-info">
        <h3>Proxmox Cyber Lab</h3>
        <p>Home lab for cyber defense testing. GPU passthrough, pfSense, VLANs, and AI/ML support.</p>
        <div className="tags">
          <span>Proxmox</span><span>pfSense</span><span>Virtualization</span><span>Linux</span><span>AI/ML</span>
        </div>
      </div>
      <div className="project-actions">
        <a href="#" className="details-btn">Details</a>
      </div>
    </div>
  </div>
</div>


<div className="tab-content" id="tech">
  <h2 className="section-title">
    <span className="glow-line"></span>Tech <span className="highlight">Stack</span>
  </h2>
  
  <div className="tech-grid">
    {/* Programming Languages */}
    <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" /><span>HTML</span></div>
    <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" /><span>CSS</span></div>
    <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" /><span>JavaScript</span></div>
    <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" /><span>Python</span></div>
    <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" /><span>C++</span></div>
    <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" /><span>Java</span></div>
    <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" /><span>Bash</span></div>
    <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg" /><span>PowerShell</span></div>

    {/* Tools & Platforms */}
    <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" /><span>Docker</span></div>
    <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" /><span>Git</span></div>
    <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" /><span>Linux</span></div>
    <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg" /><span>Debian</span></div>
    <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" /><span>Ubuntu</span></div>
    <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" /><span>VS Code</span></div>
    <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" /><span>NGINX</span></div>
    <div className="tech-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" /><span>Apache</span></div>
  </div>

  <div className="tryhackme-badge">
    <iframe
      src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=4607659"
      width="320"
      height="135"
      style={{ border: 'none', borderRadius: '8px', overflow: 'hidden' }}
      title="TryHackMe Badge"
    ></iframe>
  </div>
</div>

    </section>
  );
}