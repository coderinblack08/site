import React from 'react';

export const Navbar: React.FC = () => (
  <div className="container mx-auto">
    <nav className="flex items-center justify-between w-full py-6">
      <div className="text-xl font-medium text-gray-800 font-dm">
        Coderinblack
      </div>
      <ul className="flex items-center space-x-12 text-gray-600">
        <li>
          <a href="#">01. Projects</a>
        </li>
        <li>
          <a href="#">02. About Me</a>
        </li>
        <li>
          <button className="px-4 py-2 rounded button-shadow bg-primary font-medium text-white focus:outline-none focus:shadow-outline transition ease duration-200">
            Contact Me
          </button>
        </li>
      </ul>
    </nav>
  </div>
);
