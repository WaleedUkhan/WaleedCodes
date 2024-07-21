// src/pages/Skills.jsx

import React from 'react';
import './Skills.css'; // Create and style this CSS file

const skills = [
  { name: 'HTML', level: '90%' },
  { name: 'CSS', level: '85%' },
  { name: 'JavaScript', level: '70%' },
  { name: 'React', level: '70%' },
  { name: 'MySQL', level: '65%' },
  { name: 'MongoDb', level: '55%' },
  { name: 'Python', level: '65%' },
];

const Skills = () => {
  return (
    <div className="skills-section py-12 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-indigo-600 mb-8">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-indigo-600 mb-2">{skill.name}</h3>
              <p className="text-lg text-gray-700">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
