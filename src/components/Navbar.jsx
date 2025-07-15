// -------------------- 1. Navbar.jsx --------------------
import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar glassy-navbar">
      <div className="nav-left">
        <img src="/logo.png" alt="Logo" className="logo-img" />
        <span className="logo-text">Jonathan Geisler</span>
      </div>

      <div className="nav-menu">
        <a href="#"><i className="fas fa-home"></i> Home</a>
        <a href="#education"><i className="fas fa-graduation-cap"></i> Education</a>
        <a href="#about"><i className="fas fa-user"></i> About</a>
        <a href="#contact"><i className="fas fa-envelope"></i> Contact</a>
      </div>
    </nav>
  );
}