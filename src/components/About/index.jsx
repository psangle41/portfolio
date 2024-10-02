import React, { useEffect, useRef, useState } from 'react';
import './style.scss';
import { Profile } from '../../assets/images';

const About = () => {
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
  }, []);

  return (
    <section
      id='about'
      className={`about-section ${isVisible ? 'animate' : ''}`}
      ref={sectionRef}
    >
      <div className={`about-content ${isVisible ? 'animate' : ''}`}>
        <div className={`profile-image ${isVisible ? 'animate' : ''}`}>
          <img src={Profile} alt='Profile' />
        </div>
        <div className={`content ${isVisible ? 'animate' : ''}`}>
          <h2>About Me</h2>
          <p>
            Passionate about creating seamless user experiences, I bring over
            4.5 years of experience in developing robust web and mobile
            applications. My expertise lies in transforming user needs into
            innovative solutions, with a strong focus on delivering exceptional
            UI/UX designs. I thrive in collaborative environments, working
            effectively with cross-functional teams to build scalable and
            reliable applications that meet business objectives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
