import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "../Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Portfolio Section */}
        <div className="footer-block">
          <h3 className="footer-title">Jonathan's Portfolio</h3>
          <p className="footer-text">
            Thanks for stopping by my personal portfolio. Feel free to connect with me.
          </p>
          <p className="footer-text rocket-text">
            Keep Rising <span className="rocket">🚀</span>
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-block">
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
        <div className="footer-block">
          <h3 className="footer-title">Contact Info</h3>

          {/* Location (Now FIRST) */}
          <div className="footer-info">
            <span className="footer-icon">📍</span>
            <span>United States</span>
          </div>

          {/* Email (Now AFTER Location) */}
          <a href="mailto:jdgeisler@gmail.com" className="footer-btn">
            <FaEnvelope className="footer-icon" />
            jdgeisler@gmail.com
          </a>

          {/* Social Circular Buttons */}
          <div className="footer-social-buttons">
            <a
              href="https://linkedin.com/in/jdgeisler"
              target="_blank"
              rel="noreferrer"
              className="social-button"
            >
              <FaLinkedin className="social-icon" />
            </a>
            <a
              href="https://github.com/Sklffy"
              target="_blank"
              rel="noreferrer"
              className="social-button"
            >
              <FaGithub className="social-icon" />
            </a>
            <a href="mailto:jdgeisler@gmail.com" className="social-button">
              <FaEnvelope className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
