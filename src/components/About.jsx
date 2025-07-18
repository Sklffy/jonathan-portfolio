// -------------------- About.jsx --------------------
import React from 'react';
import '../Tabs.css';

export default function About() {
  return (
    <div className="tab-content active" id="about">
      <div className="about-modern">
        {/* Profile Image */}
        <div className="about-image">
          <div className="profile-glow">
            <img src="/logo.png" alt="Jonathan Geisler" />
          </div>
        </div>

        {/* About Content */}
        <div className="about-info">
          <h2 className="about-heading">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon-gradient"
            >
              <path d="M4 14a1 1 0 0 1-.78-1.631L9.9 2.5a.5.5 0 0 1 .86.461L11 10h8.46a.5.5 0 0 1 .39.812L14.1 21.5a.5.5 0 0 1-.86-.461L13 14H4z"></path>
            </svg>
            <span>ABOUT ME</span>
          </h2>

          <p className="about-description">
            Cybersecurity-focused CS major with expertise in building defense labs, configuring secure
            infrastructure, and leading hands-on cyber exercises. Passionate about real-world threats,
            cloud infra, and automation. I specialize in securing systems, writing clean code, and
            creating immersive technical experiences.
          </p>

          {/* Custom List with Check Icon */}
          <ul className="about-list">
            {[
              "Computer Science Major",
              "Building defense labs",
              "Passionate about cyber threats",
              "Securing systems & automation",
              "Creating immersive tech experiences"
            ].map((item, i) => (
              <li key={i}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="check-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="url(#blueGradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <defs>
                    <linearGradient id="blueGradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#00c6ff" />
                      <stop offset="100%" stopColor="#0072ff" />
                    </linearGradient>
                  </defs>
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9 12l2 2 4-4"></path>
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
