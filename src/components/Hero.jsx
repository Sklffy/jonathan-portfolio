// -------------------- Hero.jsx --------------------
import React, { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    const phrases = [
      "Cybersecurity Student ",
      "Blue Team Defender ",
      "CTF Competitor ",
      "Ethical Hacker in Training "
    ];
    const el = document.getElementById("typewriter");

    if (!el) return;

    let currentPhrase = 0;
    let currentChar = 0;
    let isDeleting = false;
    let delay = 100;

    function typeLoop() {
      const phrase = phrases[currentPhrase];
      el.textContent = phrase.substring(0, currentChar);
      currentChar += isDeleting ? -1 : 1;

      if (!isDeleting && currentChar === phrase.length) {
        isDeleting = true;
        delay = 1500;
      } else if (isDeleting && currentChar === 0) {
        isDeleting = false;
        currentPhrase = (currentPhrase + 1) % phrases.length;
        delay = 300;
      } else {
        delay = isDeleting ? 50 : 100;
      }

      setTimeout(typeLoop, delay);
    }

    setTimeout(typeLoop, 500);
  }, []);

  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="text">
          <p className="intro">I'm</p>
          <h1><span className="gradient-name">Jonathan Geisler</span></h1>
          <h2><span id="typewriter"></span></h2>
          <a
            href="/JonathanGeislerCV.pdf"
            className="resume-btn"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-file-alt"></i> View Resume
          </a>
          <div className="social-icons">
            <a
              href="https://linkedin.com/in/jdgeisler"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Sklffy"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:jdgeisler@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="profile-wrapper">
          <div className="border-spin" />
          <img
            src="/Jonny.png"
            alt="Jonathan Geisler"
            className="profile-pic"
          />
        </div>
      </div>
    </section>
  );
}
