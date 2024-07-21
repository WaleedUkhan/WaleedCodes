// src/pages/About.jsx

import React from 'react';
import './About.css'; // Make sure to create this CSS file

const About = () => {
  return (
    <div className="about-section py-12 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-12">
          <h2 className="text-4xl font-bold text-indigo-600 mb-4">About Me</h2>
          <p className="text-xl text-white mb-6">
           Hi My Name is Waleed Khan and  I am the Student of Computer Science currently in the Final Year of of BSCS. <br /> I am  a passionate web developer committed to creating dynamic and responsive web applications.
          </p>
          <p className="text-xl text-white mb-4">
            <strong>Mission Statement:</strong> To deliver high-quality, innovative solutions that drive success.
          </p>
          <p className="text-xl text-white mb-6">
            I specialize in modern web technologies and am always eager to learn and adapt to new challenges.
          </p>
         
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img src="/image3.JPG" alt="About Me" className="rounded-lg shadow-lg w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default About;
