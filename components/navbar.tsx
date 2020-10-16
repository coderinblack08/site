import * as React from 'react';
import { Dropdown } from './dropdown';

export const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="bg-gray-800 w-full p-5">
      <div className="flex flex-col md:flex-row items-center justify-between container mx-auto">
        <div className="flex items-center justify-between w-full">
          <div>
            <img src="https://tailwindui.com/img/tailwindui-logo-on-dark.svg" />
          </div>
          <button
            className="block md:hidden text-gray-500 hover:text-gray-600 p-2 focus:bg-gray-700 focus:outline-none rounded-md"
            onClick={() => setOpen(!open)}
          >
            {!open ? (
              <svg
                className="w-6 h-6 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
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
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`${
            open
              ? 'flex flex-col items-start justify-start w-full py-4 px-4'
              : 'hidden'
          } md:flex md:flex-row md:py-0 md:w-auto md:items-center font-medium`}
        >
          <a
            href="#"
            className="box-border text-gray-500 md:mr-4 px-3 py-2 hover:bg-gray-700 w-full rounded-md"
          >
            Documentation
          </a>
          <a
            href="#"
            className="box-border text-gray-500 md:mr-4 px-3 py-2 hover:bg-gray-700 w-full rounded-md"
          >
            Support
          </a>
          <a
            href="#"
            className="box-border text-gray-500 md:mr-4 px-3 py-2 hover:bg-gray-700 w-full rounded-md"
          >
            Product
          </a>
          <div className="hidden md:flex items-center mr-4 p-2">
            <Dropdown />
            {/* <span className="inline-block md:hidden text-gray-400 text-lg font-medium ml-3">
              Jane Smith
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};
