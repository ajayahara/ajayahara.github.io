import { useState } from 'react'
import './App.css'
import Header from './sections/Header';
import Home from './sections/Home';
import Aboutme from './sections/Aboutme';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import GitStats from './sections/GitStats';
import Projects from './sections/Projects';

function App() {
  const [navActive, setNavActive] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const handleNavClick = (data) => {
    setActiveSection(data);
    setNavActive(false);
  }
  const updateNavActive = (data) => {
    setNavActive(data)
  }
  return (
    <>
      <Header navActive={navActive} activeSection={activeSection} handleNavClick={handleNavClick} updateNavActive={updateNavActive} />
      <Home />
      <Aboutme />
      <Education />
      <Skills />
      <GitStats/>
      <Projects/>
      <Contact handleNavClick={handleNavClick} />
    </>
  )
}

export default App
