// src/pages/Skills.jsx

import React from 'react';
import './Skills.css'; // Updated CSS styles

const skills = [
  { name: 'HTML', level: '90%', icon: '🌐' },
  { name: 'CSS', level: '85%', icon: '🎨' },
  { name: 'JavaScript', level: '70%', icon: '⚙️' },
  { name: 'React', level: '70%', icon: '⚛️' },
  { name: 'MySQL', level: '65%', icon: '💾' },
  { name: 'MongoDb', level: '55%', icon: '🍃' },
  { name: 'Python', level: '65%', icon: '🐍' },
];

const Skills = () => {
  return (
    <div className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">My Skills</h2>
        <div className="skills-wrapper">
          <div className="vertical-line"></div>
          {skills.map((skill, index) => (
            <div key={index} className={`skill-item skill-${index % 2 === 0 ? 'left' : 'right'}`}>
              <span className="skill-icon">{skill.icon}</span>
              <div className="skill-content">
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-level">{skill.level}</p>
              </div>
              <div className="connecting-line"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
