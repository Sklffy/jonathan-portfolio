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
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="app-wrapper">
      <ParticlesBackground />
      <div className="main-content">
        {/* Pass setActiveTab here */}
        <Navbar setActiveTab={setActiveTab} />
        <Hero />
        {/* Pass activeTab + setActiveTab to Tabs */}
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
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
