// -------------------- 3. Education.jsx --------------------
import React from 'react';


export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="section-header">
        <hr class="section-divider" />
        <div className="section-line" />
        <h2 className="section-title">EDUCATION</h2>
      </div>

      <div className="timeline">
        {/* Liberty University */}
        <div className="timeline-entry left">
          <div className="content-box">
            <p className="timeline-date">2024 – 2027</p>
            <h3>Bachelor’s Degree</h3>
            <p className="major">Computer Science – Cybersecurity</p>
            <p className="institution">Liberty University</p>
            <p className="location">📍Lynchburg, VA</p>
            <p className="details">
              Activities: Liberty Cyber Club, NCAE-C Competition team<br />
              🛡️ Skills: Vulnerability Assessment, VPN, +13 more
            </p>
          </div>
          <div className="icon"><i className="fas fa-graduation-cap" /></div>
        </div>

        {/* Liberty Online Academy */}
        <div className="timeline-entry right">
          <div className="content-box">
            <p className="timeline-date">2024</p>
            <h3>High School Diploma</h3>
            <p className="major">Liberty University Online Academy</p>
            <p className="location">📍Online</p>
            <p className="details">
              Activities: Beta Club Honor Society<br />
              🐍 Skills: Python (Programming Language)
            </p>
          </div>
          <div className="icon"><i className="fas fa-school" /></div>
        </div>
      </div>
    </section>
  );
}