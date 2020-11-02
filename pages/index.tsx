import { Navbar } from '../components/navbar';
import React from 'react';
import { TechStack } from 'components/TechStack';

const Index: React.FC = () => {
  return (
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
        <TechStack />
      </div>
    </div>
  );
};

export default Index;
