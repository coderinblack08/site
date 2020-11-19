import React, { useState } from 'react';
import Link from 'next/link';

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white z-50 container mx-auto">
      <nav className="flex flex-col sm:flex-row sm:items-center justify-between w-full py-6">
        <div className="flex items-center justify-between w-full sm:w-auto">
          <Link href="/">
            <a className="text-lg sm:text-xl font-medium text-gray-800 font-dm">
              Coderinblack
            </a>
          </Link>
          <button onClick={() => setOpen(!open)} className="focus:outline-none">
            <svg
              className="block sm:hidden w-6 h-6 text-gray-800 hover:text-gray-600"
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
        </div>
        <ul
          className={`${
            !open
              ? 'hidden'
              : 'flex flex-col items-start w-full sm:w-auto space-y-5 sm:space-y-0 py-5 sm:py-0 border-b sm:border-none mb-5 sm:mb-0'
          } sm:flex sm:flex-row sm:items-center sm:space-x-12 text-gray-600 text-sm md:text-base`}
        >
          <li>
            <a href="#projects" className="hover:text-gray-700">
              01. Projects
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-700">
              02. About Me
            </a>
          </li>
          <li className="w-full sm:w-auto">
            <Link href="/contact">
              <button className="px-4 py-2 w-full sm:w-auto rounded button-shadow bg-primary hover:bg-opacity-75 font-medium text-white focus:outline-none focus:shadow-outline-blue transition ease duration-200">
                Contact Me
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
