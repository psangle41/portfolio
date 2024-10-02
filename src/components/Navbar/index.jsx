import React from 'react';
import './style.scss';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const headerHeight = document.querySelector('.navbar').offsetHeight;
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop - headerHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className='navbar'>
      <ul className='navbar-links'>
        <li onClick={() => scrollToSection('about')}>About</li>
        <li onClick={() => scrollToSection('tech-stack')}>Tech Stack</li>
        {/* <li onClick={() => scrollToSection('projects')}>Projects</li> */}
        <li onClick={() => scrollToSection('experience')}>Experience</li>
        {/* <li onClick={() => scrollToSection('fun-facts')}>Fun Facts</li> */}
        <li onClick={() => scrollToSection('contact')}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
