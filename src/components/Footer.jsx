import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
import "../Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-grid">
{/* Portfolio Section */}
<div className="footer-card">
  <h3 className="footer-title">Jonathan's Portfolio</h3>
  <p className="footer-text">
    Thanks for stopping by my personal portfolio. Feel free to connect with me on my social channels.
  </p>
  <p className="footer-text rocket-text">
    Keep Rising <span className="rocket">🚀</span>
  </p>
  <p className="footer-text">
    🎯 Passionate about learning new technologies, solving problems, and creating impactful solutions.
  </p>
</div>

{/* Quick Links Section */}
<div className="footer-card">
  <h3 className="footer-title">Quick Links</h3>
  <ul className="footer-links">
    <li>
      <span className="link-icon">➤</span>
      <a href="#about">About</a>
    </li>
    <li>
      <span className="link-icon">➤</span>
      <a href="#education">Education</a>
    </li>
    <li>
      <span className="link-icon">➤</span>
      <a href="#projects">Projects</a>
    </li>
  </ul>
</div>


        {/* Contact Info Section */}
        <div className="footer-card">
          <h3 className="footer-title">Contact Info</h3>
          <p className="footer-text">
            <FaEnvelope className="contact-icon" /> jdgeisler@gmail.com
          </p>
          <p className="footer-text">
            📍 United States
          </p>
          <div className="footer-socials">
            <a href="https://linkedin.com/in/jdgeisler" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Sklffy" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="mailto:jdgeisler@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 · JONATHAN GEISLER · ALL RIGHTS RESERVED</p>
        <a href="#top" className="scroll-top">↑ SCROLL TO TOP</a>
      </div>
    </footer>
  );
}
