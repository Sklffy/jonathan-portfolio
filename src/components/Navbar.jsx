import React, { useState } from 'react';
import './Navbar.css';
export default function Navbar({ setActiveTab }) {
  const [activeLink, setActiveLink] = useState('home');


  // Generic tab navigation for About, Projects, Expertise
  const handleTabClick = (e, tabId) => {
    e.preventDefault();
    setActiveLink(tabId);
    setActiveTab(tabId);
    setTimeout(() => {
      const section = document.getElementById(tabId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className="bubble-navbar">
      {/* Logo Section */}
      <div className="nav-logo">
        <img src="/logo.png" alt="Logo" className="logo-img" />
        <div className="logo-text-wrapper">
          <span className="logo-text">Jonathan Geisler</span>
          <span className="sub-text">PORTFOLIO</span>
        </div>
      </div>

      {/* Nav Links Bubble */}
      <div className="nav-bubble">
      <a
          href="#"
          onClick={() => setActiveLink('home')}
          className={activeLink === 'home' ? 'active' : ''}
        >
        <i className="fas fa-home"></i> Home
      </a>
        <a
          href="#"
          onClick={(e) => handleTabClick(e, 'about')}
          className={activeLink === 'about' ? 'active' : ''}
        >
          <i className="fas fa-user"></i> About
        </a>
        <a
          href="#"
          onClick={(e) => handleTabClick(e, 'projects')}
          className={activeLink === 'projects' ? 'active' : ''}
        >
          <i className="fas fa-code"></i> Projects
        </a>
        <a
          href="#"
          onClick={(e) => handleTabClick(e, 'techstack')}
          className={activeLink === 'techstack' ? 'active' : ''}
        >
          <i className="fas fa-tools"></i> Expertise
        </a>
        <a
          href="#education"
          className={activeLink === 'education' ? 'active' : ''}
          onClick={() => setActiveLink('education')}
        >
          <i className="fas fa-graduation-cap"></i> Education
        </a>
        <a
          href="#contact"
          className={activeLink === 'contact' ? 'active' : ''}
          onClick={() => setActiveLink('contact')}
        >
          <i className="fas fa-envelope-open"></i> Contact
        </a>
      </div>
    </nav>
  );
}
