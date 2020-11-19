import React from 'react';
import Link from 'next/link';
import { Navbar } from '../components/Navbar';
import { TechStack } from 'components/TechStack';
import { Card } from 'components/Card';

const Index: React.FC = () => {
  return (
    <div>
      <div className="px-10 pb-20">
        <Navbar />
        <div className="container mx-auto">
          <header className="relative flex items-start justify-between h-84 sm:h-screen sm:max-h-2xl md:min-h-3xl">
            <aside className="relative z-10 sm:py-16">
              <div className="inline-flex items-center p-1 sm:p-2 border border-gray-200 bg-gray-100 text-gray-600 rounded mb-3 sm:mb-2">
                <div className="leading-5 mr-3 text-xs font-semibold bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded px-2">
                  NEW
                </div>
                <p className="text-xs sm:text-sm pr-3">
                  Revamped personal website!
                </p>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-snug">
                Software Developer <br />
                UI/UX Designer <br />
                Mathematician
              </h1>
              <p className="text-gray-600 text-base sm:text-lg md:text-xl font-light leading-relaxed mt-5">
                Student based in Silicon Valley exploring the wonders{' '}
                <br className="hidden md:block" />
                of software, technology, and computation.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center mt-8">
                <Link href="/contact">
                  <button className="focus:outline-none focus:shadow-outline-blue transition ease duration-200 px-6 py-3 font-medium rounded button-shadow bg-primary text-white">
                    Reach Out
                  </button>
                </Link>
                <div className="text-gray-600 px-6 py-3 text-center mt-2 sm:mt-0 text-sm font-normal">
                  Checkout{' '}
                  <a href="#projects" className="text-primary hover:underline">
                    My Work →
                  </a>
                </div>
              </div>
            </aside>
            <div className="hidden md:block absolute top-0 opacity-50 mb-12 lg:mb-0 translate-x-32 lg:translate-x-0 lg:opacity-100 right-0 md:translate-y-24 lg:translate-y-10 xl:-translate-y-8 transform max-w-md lg:max-w-xl xl:max-w-2xl">
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
      <div id="projects">
        <div className="relative overflow-hidden bg-gray-800 py-24 shadow-inner bg-opacity-96">
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
                Pluto encourages community discussion and helps
                <br className="hidden xl:block" />
                communities thrive while social distancing.
              </p>
              <div className="text-lg font-normal divide-x divide-gray-700 mt-5">
                <a
                  href="https://pluto.vercel.app"
                  target="_blank"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 pr-4"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    ></path>
                  </svg>
                  pluto.vercel.app
                </a>
                <a
                  href="https://github.com/coderinblack08/pluto"
                  target="_blank"
                  className="inline-flex items-center text-gray-400 hover:text-gray-300 pl-4"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    ></path>
                  </svg>
                  coderinblack08 / pluto
                </a>
              </div>
              <div className="flex items-center space-x-2 mt-6">
                <div className="inline bg-gradient-to-r from-teal-500 to-blue-500 text-blue-100 px-3 py-1 shadow-md rounded text-sm font-bold">
                  REACT
                </div>
                <div className="inline bg-gradient-to-r from-pink-500 to-purple-500 text-pink-100 px-3 py-1 shadow-md rounded text-sm font-bold">
                  GRAPHQL
                </div>
                <div className="inline bg-gradient-to-r from-orange-500 to-red-500 text-orange-100 px-3 py-1 shadow-md rounded text-sm font-bold">
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
        <div className="container mx-auto py-32 space-y-32 px-5">
          <Card
            image="/contest-pug.png"
            header="Contest Pug"
            text="Contest Pug delivers a platform for both educators and students to easily create and take contests while practicing social distancing."
            helper={
              <p className="text-gray-500 italic">
                2020 Congressional App Submission
              </p>
            }
            link="https://contestpug.vercel.app"
            repo="https://github.com/coderinblack08/contest-pug"
            nobackend
          />
          <Card
            image="/gekko.png"
            header="Gekko"
            text="Gekko is an open source project created for school districts, extra-curricular classes, and or other educational programs to communicate with students and guardians digitally."
            helper={
              <div className="flex items-center text-gray-500 italic">
                <svg
                  className="w-6 h-6 mr-1"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.3334 5.33374V13.3337M16.0001 5.33374V9.33374V5.33374ZM10.6667 5.33374V13.3337V5.33374Z"
                    stroke="#A0AEC0"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 24.6672L12 26.6672L12.6667 22.0006L10 19.3339L14 18.6672L16 14.6672L18 18.6672L22 19.3339L19.3333 22.0006L20 26.6672L16 24.6672Z"
                    stroke="#A0AEC0"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                2nd Place Winner of
                <a
                  href="https://bridgehacks.com"
                  className="ml-1 underline hover:text-gray-600"
                >
                  Bridgehacks
                </a>
              </div>
            }
            repo="https://github.com/coderinblack08/gekko"
            nobackend
            reversed
          />
        </div>
        <div
          className="shadow-inner"
          style={{
            background: 'linear-gradient(135deg, #FEB692 0%, #EA5455 100%)',
          }}
          id="#about"
        >
          <div className="max-w-4xl mx-auto py-32 px-5">
            <div>
              <h2 className="text-4xl md:text-5xl text-white font-black">
                By the way, I’m Kevin
              </h2>
              <p className="text-xl md:text-2xl text-gray-100 font-bold mb-4">
                Quite spooky indeed
              </p>
              <p className="text-white opacity-75">
                I’m a self-thought developer student based in Silicon Valley. I
                enjoy geeky stuff and chillin’ out. I do full-stack dev with a
                slight preference for the frontend. Here are some fun facts
                about me:
              </p>
              <ol className="text-white opacity-75 mt-5 pl-5">
                <li className="list-decimal">
                  I hate cheese, except for when it’s on pizza.
                </li>
                <li className="list-decimal">
                  The Simpsons is better than Famiy Guy.
                </li>
                <li className="list-decimal">
                  If covid wasn’t around, I would wish to travel the world and
                  eat food.
                </li>
                <li className="list-decimal">
                  I’m starting to peel bananas from the top rather than the
                  bottom.
                </li>
              </ol>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16">
              <a
                href="https://github.com/coderinblack08"
                target="_blank"
                className="shadow-sm cursor-pointer text-left focus:outline-none col-span-1 bg-white bg-opacity-25 rounded-md px-6 py-8 text-white transition ease duration-300 transform hover:scale-105"
              >
                <h3 className="text-2xl font-extrabold mb-2">My Github</h3>
                <p className="opacity-75">
                  The collage of all my software projects, contributions, pull
                  requests, and commits. Don’t forget to follow and give one of
                  my repos a star!
                </p>
              </a>
              <a
                href="https://blog.coderinblack.now.sh"
                target="_blank"
                className="shadow-sm cursor-pointer text-left focus:outline-none col-span-1 bg-white bg-opacity-25 rounded-md px-6 py-8 text-white transition ease duration-300 transform hover:scale-105"
              >
                <h3 className="text-2xl font-extrabold mb-2">
                  Coderinblack blog
                </h3>
                <p className="opacity-75">
                  Everthing about my projects to my thoughts on the newest,
                  cutting edge libraries and/or frameworks!
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
