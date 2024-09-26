import React from 'react';
import './Home.css'; 

const Home = () => {
  const handleCVDownload = () => {
    const cvPath = '/MyResumeUp.pdf'; 
    window.open(cvPath, '_blank'); 
  };

  return (
    <div className="home-container min-h-screen flex flex-col md:flex-row items-center justify-center bg-custom-color text-white">
      <div className="flex-1 p-8 md:pl-16 flex flex-col items-start space-y-5">
        <h1 className="text-2xl md:text-5xl font-extrabold leading-tight text-center md:text-left">
          Welcome to <span className="text-yellow-400">Waleed's Portfolio</span>
        </h1>
        <p className="text-lg md:text-2xl text-white mb-8 text-center md:text-left">
          A passionate web developer specializing in creating dynamic and beautiful web pages using the latest technologies.
        </p>
        <button 
          onClick={handleCVDownload} 
          className="bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-500 transition duration-300 w-full md:w-auto"
        >
          Download CV
        </button>
      </div>
      <div className="flex-1 p-8 md:pr-16 flex justify-center items-center">
        <img 
          src="/image1.jpg" 
          alt="Waleed's Image" 
          className="w-3/4 md:w-full max-w-xs md:max-w-md rounded-lg shadow-2xl object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
