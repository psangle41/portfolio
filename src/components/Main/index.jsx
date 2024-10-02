import React, { useEffect, useRef, useState } from 'react';
import './style.scss';
import { Download, Redirect } from '../../assets/images';

const socialSites = [
  {
    name: 'Resume',
    image: Download,
    action: () => {
      const link = document.createElement('a');
      link.href = '';
      link.download = 'Priyanka_Resume.pdf'; // File name for the downloaded resume
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
  {
    name: 'LinkedIn',
    image: Redirect,
    action: () =>
      window.open(
        'https://www.linkedin.com/in/priyanka-sangle-767851107',
        '_blank'
      ),
  },
  {
    name: 'GitHub',
    image: Redirect,
    action: () => window.open('https://github.com/psangle41', '_blank'),
  },
];

const Main = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      className={`container ${isVisible ? 'animate' : ''}`}
      ref={sectionRef}
    >
      <div className='hero'>
        <div className={`hero-content ${isVisible ? 'animate' : ''}`}>
          <h2>
            Hey 👋 <br />
            I'm Priyanka
          </h2>
          <h1>Professional Frontend Developer</h1>
          <h1>Web & Mobile Platform</h1>
          <div className={`aboutme ${isVisible ? 'animate' : ''}`}>
            <p> Passionate coder </p>
            <p> Dependable employee</p>
            <p>Learner </p>
          </div>
          <div className={`links ${isVisible ? 'animate' : ''}`}>
            {socialSites.map((item) => (
              <div
                className='link'
                key={item.name}
                onClick={() => {
                  item.action();
                }}
              >
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
