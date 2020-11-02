import { Navbar } from '../components/navbar';
import React from 'react';
import { TechStack } from 'components/TechStack';
import Image from 'next/image';

const Index: React.FC = () => {
  return (
    <div>
      <div className="px-10 pb-20">
        <Navbar />
        <div className="container mx-auto">
          <header
            className="relative flex items-start justify-between h-screen"
            style={{ minHeight: '720px' }}
          >
            <aside className="relative z-10 py-16">
              <div className="inline-flex items-center p-2 border border-gray-200 bg-gray-100 text-gray-600 rounded mb-2">
                <div className="leading-5 mr-3 text-xs font-semibold bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded px-2">
                  NEW
                </div>
                <p className="text-sm pr-3">Revamped personal website!</p>
              </div>
              <h1 className="text-6xl font-bold text-gray-800 leading-snug">
                Software Developer <br />
                UI/UX Designer <br />
                Mathematician
              </h1>
              <p className="text-gray-600 text-xl font-light leading-relaxed mt-5">
                Student based in Silicon Valley exploring the wonders <br />
                of software, technology, and computation.
              </p>
              <div className="flex items-center mt-8">
                <button className="focus:outline-none focus:shadow-outline transition ease duration-200 px-6 py-3 font-medium rounded button-shadow bg-primary text-white">
                  Reach Out
                </button>
                <div className="text-gray-600 px-6 text-sm font-normal">
                  Checkout{' '}
                  <a href="#" className="text-primary hover:underline">
                    My Work →
                  </a>
                </div>
              </div>
            </aside>
            <div className="hidden md:block absolute bottom-0 lg:top-0 opacity-50 mb-12 lg:mb-0 translate-x-32 lg:translate-x-0 lg:opacity-100 right-0 xl:-translate-y-8 transform max-w-md lg:max-w-xl xl:max-w-2xl">
              <img
                src="/header-skeleton.svg"
                alt="UI Skeleton Graphic"
                className="w-full"
              />
            </div>
          </header>
        </div>
      </div>
      <div className="-mb-10 md:-mb-20 px-5">
        <TechStack />
      </div>
      <div className="relative bg-gray-800 py-24 shadow-inner bg-opacity-96">
        <svg
          width="1440"
          height="218"
          viewBox="0 0 1440 218"
          fill="none"
          className="absolute bottom-0 z-0 w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M776.691 68.9334C683.288 92.0507 397.186 137.755 0 82.2734V218H1440V29.076C1401.71 12.6017 1296.99 -2.00555 1195.5 0.226456C1094.01 2.45847 874.922 41.0332 776.691 68.9334Z"
            fill="#2D3748"
          />
        </svg>
        <div className="relative px-5 z-10 flex flex-col-reverse lg:flex-row justify-between items-center container mx-auto mt-10">
          <div>
            <h1 className="text-gray-100 text-2xl md:text-3xl font-extrabold">
              Pluto App
            </h1>
            <p className="text-gray-400 text-base md:text-lg mt-1">
              Pluto encourages community discussion and helps{' '}
              <br className="hidden xl:block" />
              communities thrive while social distancing.
            </p>
            <div className="flex items-center space-x-2 mt-6">
              <div className="inline bg-blue-500 text-blue-100 px-3 py-1 shadow-md rounded text-sm font-bold">
                REACT
              </div>
              <div className="inline bg-pink-500 text-pink-100 px-3 py-1 shadow-md rounded text-sm font-bold">
                GRAPHQL
              </div>
              <div className="inline bg-orange-500 text-orange-100 px-3 py-1 shadow-md rounded text-sm font-bold">
                POSTGRES
              </div>
            </div>
          </div>
          <div className="shadow-2xl mb-10 lg:mb-0">
            <img
              src="/pluto.png"
              alt="Pluto Image"
              className="rounded-lg lg:max-w-xl xl:max-w-2xl transition ease duration-300 transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
