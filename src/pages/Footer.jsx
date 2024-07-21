// src/components/Footer.jsx

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Import icons from react-icons library

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-lg font-semibold">Connect with me:</p>
          <div className="flex justify-center md:justify-start mt-2 space-x-4">
            <a href="https://github.com/WaleedUkhan" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-gray-400 transition-colors duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/waleed-khan-004a9227a/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-gray-400 transition-colors duration-300" />
            </a>
            <a href="https://x.com/WaleedGandapur" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-gray-400 transition-colors duration-300" />
            </a>
          </div>
        </div>
        <div className="text-center md:text-right">
          <p>&copy; 2024 waleedCodes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
