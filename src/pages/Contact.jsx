// src/pages/Contact.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Contact.css'; // Create and style this CSS file

const Contact = () => {
  return (
    <div className="contact-section py-12 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-indigo-600 mb-8">Contact Me</h2>
        <div className="space-y-6">
          <div className="contact-card p-6 bg-white rounded-lg shadow-md flex items-center space-x-4">
            <FontAwesomeIcon icon={faEnvelope} className="text-indigo-600 h-6 w-6" />
            <a href="waleedgfx.u@gmail.com" className="text-lg text-gray-700" target="_blank">waleedgfx.u@gmail.com</a>
          </div>
          <div className="contact-card p-6 bg-white rounded-lg shadow-md flex items-center space-x-4">
            <FontAwesomeIcon icon={faPhone} className="text-indigo-600 h-6 w-6" />
            <a href="+92 320-9739347" className="text-lg text-gray-700">+92 320-9739347</a>
          </div>
          <div className="contact-card p-6 bg-white rounded-lg shadow-md flex items-center space-x-4">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-indigo-600 h-6 w-6" />
            <p className="text-lg text-gray-700">Indus Colony, Dera Ismail Khan ,KPK,  Pakistan</p>
          </div>
          <div className="contact-card p-6 bg-white rounded-lg shadow-md flex items-center space-x-4">
            <FontAwesomeIcon icon={faLinkedin} className="text-indigo-600 h-6 w-6" />
            <a href="https://www.linkedin.com/in/waleed-khan-004a9227a/" className="text-lg text-gray-700" target="_blank">LinkedIn</a>
          </div>
          <div className="contact-card p-6 bg-white rounded-lg shadow-md flex items-center space-x-4">
            <FontAwesomeIcon icon={faGithub} className="text-indigo-600 h-6 w-6" />
            <a href="https://github.com/WaleedUkhan" className="text-lg text-gray-700  " target="_blank">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
