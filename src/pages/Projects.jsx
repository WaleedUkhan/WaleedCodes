// src/pages/Projects.jsx

import React from 'react';

const projects = [
  {
    name: 'Project 1',
    description: 'This is a short description of Project 1.',
    imageUrl: 'path/to/project1-image.jpg',
    link: 'http://example.com/project1'
  },
  {
    name: 'Project 2',
    description: 'This is a short description of Project 2.',
    imageUrl: 'path/to/project2-image.jpg',
    link: 'http://example.com/project2'
  },
  {
    name: 'Project 3',
    description: 'This is a short description of Project 3.',
    imageUrl: 'path/to/project3-image.jpg',
    link: 'http://example.com/project3'
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-12">
      <h2 className="text-4xl font-extrabold mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.imageUrl} alt={project.name} className="w-full h-48 object-cover rounded-lg" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
