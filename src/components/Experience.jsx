// -------------------- 4. Experience.jsx --------------------
import React from 'react';

export default function Experience() {
  return (
    <section id="work" className="work-section">
      <div className="section-header">
        <hr class="section-divider" />

        <div className="section-line" />
        <h2 className="section-title">EXPERIENCE</h2>
      </div>

      <div className="timeline">
        {/* CBTS */}
        <div className="timeline-entry left">
          <div className="content-box work-box">
            <img src="/CBTS.png" alt="CBTS Logo" className="work-logo" />
            <div>
              <p className="timeline-date">May 2025 – July 2025</p>
              <h3>IT Support Technician</h3>
              <p className="organization"><strong>CBTS Technology Solutions | Contract</strong></p>
              <ul>
                <li>Delivered remote and onsite support for cloud migrations with minimal user disruption</li>
                <li>Troubleshot email, authentication, remote access, and cloud service issues to maintain uptime</li>
                <li>Assisted in migrating legacy systems to Microsoft Azure cloud infrastructure</li>
              </ul>
            </div>
          </div>
          <div className="icon"><i className="fas fa-briefcase" /></div>
        </div>

        {/* NCAE */}
        <div className="timeline-entry right">
          <div className="content-box work-box">
            <img src="/NCAE.png" alt="NCAE Cyber Games Logo" className="work-logo" />
            <div>
              <p className="timeline-date">Jan 2025 – May 2025</p>
              <h3>SSH/FTP Services Specialist</h3>
              <p className="organization"><strong>National Centers of Academic Excellence | Cyber Games</strong></p>
              <ul>
                <li>NSA-sponsored National Centers of Academic Excellence Cyber Games Competition</li>
                <li>Placed 2nd in the regional NCAE Cyber Games 2025</li>
                <li>Configured and secured FTP and SSH services on CentOS and Kali Linux</li>
              </ul>
            </div>
          </div>
          <div className="icon"><i className="fas fa-network-wired" /></div>
        </div>
      </div>
    </section>
  );
}