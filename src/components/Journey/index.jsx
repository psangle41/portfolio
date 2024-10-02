import React from 'react';
import './style.scss';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Coditas, India',
    date: 'September 2022 - Present',
    description: [
      'Collaborated on a platform enabling rights holders to engage with advertisers and suppliers for international matches.',
      'Independently implemented an SVG-based drawing tool, empowering users to annotate media files. This feature received significant praise from the client for its functionality and user experience.',
      'Integrated RESTful APIs to facilitate seamless data communication between the front-end and back-end services.',
      'Mentored junior developers, conducted code reviews, and ensured adherence to best practices and coding standards.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Roxiler Systems, India',
    date: 'June 2021 - September 2022',
    description: [
      "Designed and developed a mobile application recognised in Google's Best Android Apps of 2021 for India, honoured in the 'Best Apps for Good' category, with over 500,000 users.",
      'Created an application where users can book and attend online LIVE sessions and workshops specially curated for older adults.',
      'Worked on Admin panel from where coordinators can easily create and schedule new events/course sessions.',
      'Created RESTful APIs in Node.js for specific application features, ensuring efficient data handling and integration with the front-end.',
      'Possess comprehensive knowledge of the process for releasing iOS applications on the App Store.',
    ],
  },
  {
    title: 'React Native Developer',
    company: 'Thumbtack Technologies, India',
    date: 'March 2020 - June 2021',
    description: [
      'Developed a video conferencing application using React Native, supporting up to 100 users per conference on both iOS and Android platforms.',
      'Integrated React Native WebRTC for real-time video, audio, and generic data.',
      'Gained experience in implementing a native module within React Native for WebRTC screen sharing functionality on iOS.',
    ],
  },
  {
    title: 'Consultant Engineer (Embedded Engineer)',
    company: 'T & M Services Pvt. Ltd, India',
    date: 'March 2018 - March 2019',
    description: [
      'Experience of working on different projects related to surveillance systems like electric fence and access card.',
      'Installed and maintained surveillance systems on-site, ensuring optimal performance and reliability.',
    ],
  },
  {
    title: "Bachelor's of Engineering",
    institution: 'Vidyalankar Institute of Technology, Mumbai, India',
    date: 'August 2014 - August 2017',
    description: ['Specialisation - Electronics and Telecommunication'],
  },
  {
    title: 'Diploma',
    institution: 'St. Xavier Technical Institute, Mumbai, India',
    date: 'July 2011 - June 2014',
    description: ['Specialisation - Electronics and Telecommunication'],
  },
];

const Journey = () => {
  return (
    <div id='experience' className='experience-container'>
      <h2 className='experience-title'>Experience</h2>
      <div className='experience-timeline'>
        {experiences.map((item, index) => (
          <div key={index} className='experience-item'>
            <div className='circle'></div>
            <div className='experience-content'>
              <h3 className='experience-role'>{item.title}</h3>
              <h4 className='experience-company'>
                {item.company || item.institution}
              </h4>
              <span className='experience-date'>{item.date}</span>
              <ul className='experience-description'>
                {item.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;
