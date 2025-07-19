import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Tabs from './components/Tabs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import Loader from './components/Loader.jsx';
import './components/Loader.css';
import FooterBottom from './components/FooterBottom';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7000); // Show loader for 7 seconds
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="app-wrapper">
      <ParticlesBackground />
      <div className="main-content">
        <Navbar />
        <Hero />
        <Tabs />
        <Education />
        <Experience />
      <div className="contact-footer-wrapper">
        <Contact />
  <Footer />
</div>
<FooterBottom />
      </div>
    </div>
  );
}

export default App;
