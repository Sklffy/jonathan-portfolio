import React from "react";
import "../Footer.css";

export default function FooterBottom() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer-bottom-container">
      <p>© 2025 · JONATHAN GEISLER · ALL RIGHTS RESERVED</p>
      <button className="scroll-top-btn" onClick={scrollToTop}>
        ↑ SCROLL TO TOP
      </button>
    </div>
  );
}
