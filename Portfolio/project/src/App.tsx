import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import HomeButton from './components/HomeButton';

function App() {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Skills />
      <Certifications />
      <Resume />
      <Contact />
      <HomeButton />
    </div>
  );
}

export default App;