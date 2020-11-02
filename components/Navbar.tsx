import React from 'react';

export const Navbar: React.FC = () => (
  <div className="container mx-auto">
    <nav className="flex items-center justify-between w-full py-6">
      <div className="text-lg sm:text-xl font-medium text-gray-800 font-dm">
        Coderinblack
      </div>
      <button>
        <svg
          className="block sm:hidden w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      <ul className="hidden sm:flex items-center space-x-12 text-gray-600 text-sm md:text-base">
        <li>
          <a href="#">01. Projects</a>
        </li>
        <li>
          <a href="#">02. About Me</a>
        </li>
        <li>
          <button className="px-4 py-2 rounded button-shadow bg-primary font-medium text-white focus:outline-none focus:shadow-outline-blue transition ease duration-200">
            Contact Me
          </button>
        </li>
      </ul>
    </nav>
  </div>
);
