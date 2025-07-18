import React, { useEffect } from 'react';
import '../Tabs.css';
import About from './About';
import Projects from './Projects';
import TechStack from './TechStack';

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
    <>
      <section className="section-tabs">
        <div className="tab-buttons">
          <button className="tab-btn active" data-tab="about">About Me</button>
          <button className="tab-btn" data-tab="projects">Projects</button>
          <button className="tab-btn" data-tab="tech">Tech Stack</button>
        </div>

        <div className="tab-content active" id="about">
          <About />
        </div>
        <div className="tab-content" id="projects">
          <Projects />
        </div>
        <div className="tab-content" id="tech">
          <TechStack />
        </div>
      </section>

      {/* Divider Below Tabs */}
      <hr className="section-divider" />
    </>
  );
}
