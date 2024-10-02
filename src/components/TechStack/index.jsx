import React, { useEffect, useRef, useState } from 'react';
import {
  HtmlIcon,
  JavascriptIcon,
  TypescriptIcon,
  SassIcon,
  NodeIcon,
  GitIcon,
  GithubIcon,
  ReactNativeIcon,
  NextjsIcon,
  ReduxIcon,
  ReactIcon,
} from '../../assets/images'; // Adjust the path as per your project structure
import './style.scss';

const techs = [
  { name: 'React', icon: <img src={ReactIcon} alt='React Icon' /> },
  { name: 'Next.js', icon: <img src={NextjsIcon} alt='Next.js Icon' /> },
  {
    name: 'TypeScript',
    icon: <img src={TypescriptIcon} alt='TypeScript Icon' />,
  },
  {
    name: 'React Native',
    icon: <img src={ReactNativeIcon} alt='React Native Icon' />,
  },
  { name: 'Redux', icon: <img src={ReduxIcon} alt='Redux Icon' /> },
  { name: 'HTML', icon: <img src={HtmlIcon} alt='HTML Icon' /> },
  {
    name: 'JavaScript',
    icon: <img src={JavascriptIcon} alt='JavaScript Icon' />,
  },

  { name: 'SASS', icon: <img src={SassIcon} alt='SASS Icon' /> },
  { name: 'Node.js', icon: <img src={NodeIcon} alt='Node.js Icon' /> },
  { name: 'Git', icon: <img src={GitIcon} alt='Git Icon' /> },
  { name: 'GitHub', icon: <img src={GithubIcon} alt='GitHub Icon' /> },
];

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false);
  const techStackRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (techStackRef.current) {
      observer.observe(techStackRef.current);
    }
    return () => {
      if (techStackRef.current) {
        observer.unobserve(techStackRef.current);
      }
    };
  }, []);

  return (
    <section
      id='tech-stack'
      className={`tech-stack ${isVisible ? 'animate' : ''}`}
      ref={techStackRef}
    >
      <h2 className={`${isVisible ? 'animate' : ''}`}>Tech Stack</h2>
      <div className='stack-list'>
        {techs.map((tech, index) => (
          <div className='tech' key={index}>
            <span className='tech-icon'>{tech.icon}</span>
            <span className='tech-name'>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
