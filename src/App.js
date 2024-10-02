import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';

import TechStack from './components/TechStack';
import Journey from './components/Journey';
// import Projects from './components/Projects';
// import Skills from './components/Skills';
// import FunFacts from './components/FunFacts';
// import Contact from './components/Contact';
// import ProjectPopup from './components/ProjectPopup';
import './app.scss';

const projectsData = [
  {
    title: 'Project 1',
    description: 'Description for project 1',
    link: 'https://example.com',
  },
  {
    title: 'Project 2',
    description: 'Description for project 2',
    link: 'https://example.com',
  },
  // Add more projects as needed
];

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleProjectClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className='app'>
      <Navbar onProjectClick={handleProjectClick} />
      <Main />
      <About />
      <TechStack />
      <Journey />
      {/* <Projects />
      <Skills />
      <FunFacts />
      <Contact />
      <ProjectPopup
        projects={projectsData}
        isOpen={showPopup}
        onClose={closePopup}
      /> */}
    </div>
  );
};

export default App;
