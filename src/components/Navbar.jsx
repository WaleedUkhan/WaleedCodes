import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


//Navbar is a functional Componet
const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);//gives current location i-e where the use is right now

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <nav className="bg-gray-500 text-white p-4 flex justify-between items-center">
      {/* Navbar Brand */}
      <div className="text-2xl font-bold tracking-wide font-poppins">WaleedCodes</div>

      {/* Mobile Menu Icon - Only show when menu is closed */}

      <div className={`${menuOpen ? 'hidden' : 'block '} md:hidden`} onClick={() => setMenuOpen(!menuOpen)}>
        <svg
          className="w-6 h-6"
          fill="red"
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

      {/* Navigation Links */}

      <ul
        className={`${
          menuOpen ? 'block m-10' : 'hidden'
        } md:flex md:items-center justify-center space-y-4 md:space-y-0 md:space-x-6 w-full md:w-auto text-lg md:text-xl font-poppins`}
      >
        <li className="text-lg md:text-xl">
          <Link
            to="/"
            className={`${
              activeLink === '/' ? 'text-yellow-400 underline' : 'no-underline text-white'
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
              activeLink === '/about' ? 'text-yellow-400 underline' : 'no-underline text-white'
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
              activeLink === '/skills' ? 'text-yellow-400 underline' : 'no-underline text-white'
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
              activeLink === '/projects' ? 'text-yellow-400 underline' : 'no-underline text-white'
            }`}
            onClick={() => handleLinkClick('/projects')}
          >
            Projects
          </Link>
        </li>
        <li className="text-lg md:text-xl">
          <Link
            to="/contact"
            className={`${
              activeLink === '/contact' ? 'text-yellow-400 underline' : 'no-underline text-white'
            }`}
            onClick={() => handleLinkClick('/contact')}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
