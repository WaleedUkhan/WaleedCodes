// src/pages/Home.jsx

import React from 'react';
import './Home.css'; // Create this file for custom styles

const Home = () => {
  const handleCVDownload = () => {
    // Change the path to your CV file location
    const cvPath = '/MyResumeUp.pdf'; 
    window.open(cvPath, '_blank'); // Opens CV in a new tab
  };

  return (
    <div className="home-container min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600  text-white">
      <div className="flex-1 p-8 md:pl-16 flex flex-col items-start space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Welcome to <span className="text-yellow-400">Waleed's Portfolio</span></h1>
        <p className="text-xl text-white mb-8">
        A passionate web developer specializing in creating dynamic and beautiful web pages using the latest technologies.
      </p>
        <button 
          onClick={handleCVDownload} 
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-300"
        >
          Download CV
        </button>
      </div>
      <div className="flex-1 p-8 md:pr-16 flex justify-center items-center">
        <img 
          src="/image1.jpg" 
          alt="Waleed's Image" 
          className="w-full max-w-md rounded-lg shadow-2xl object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
