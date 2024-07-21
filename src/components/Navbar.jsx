// src/components/Navbar.jsx

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">WaleedCodes</div>
      <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>
      <ul
        className={`${
          menuOpen ? 'block' : 'hidden'
        } md:flex justify-center space-x-4 w-full`}
      >
        <li className="text-lg md:text-xl">
          <Link
            to="/"
            className={`${
              activeLink === '/' ? 'gray underline' : 'no-underline'
            }`}
            onClick={() => handleLinkClick('/')}
          >
            Home
          </Link>
        </li>
        <li className="text-lg md:text-xl">
          <Link
            to="/about"
            className={`${
              activeLink === '/about' ? 'gray underline' : 'no-underline'
            }`}
            onClick={() => handleLinkClick('/about')}
          >
            About
          </Link>
        </li>
        <li className="text-lg md:text-xl">
          <Link
            to="/skills"
            className={`${
              activeLink === '/skills' ? 'gray underline' : 'no-underline'
            }`}
            onClick={() => handleLinkClick('/skills')}
          >
            Skills
          </Link>
        </li>
        <li className="text-lg md:text-xl">
          <Link
            to="/projects"
            className={`${
              activeLink === '/projects' ? 'underline' : 'no-underline'
            }`}
            onClick={() => handleLinkClick('/projects')}
          >
            {/* Projects */}
          </Link>
        </li>
        <li className="text-lg md:text-xl">
          <Link
            to="/contact"
            className={`${
              activeLink === '/contact' ? 'gray underline' : 'no-underline'
            }`}
            onClick={() => handleLinkClick('/contact')}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="hidden md:flex space-x-2">
        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm">
          Login
        </button>
        <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
