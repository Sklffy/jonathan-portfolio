import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Tabs from './components/Tabs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <div className="app-wrapper">
      <ParticlesBackground />
      <div className="main-content">
        <Navbar />
        <Hero />
        <Education />
        <Experience />
        <Tabs />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}


export default App;
