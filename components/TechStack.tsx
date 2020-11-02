import React from 'react';

export const TechStack: React.FC = () => (
  <div className="relative z-10 mx-auto container">
    <div className="hidden sm:block -mb-3 mx-auto w-40 text-center rounded bg-primary button-shadow text-white font-bold text-xs md:text-sm py-1 px-1 md:px-2 box-content">
      TECHNOLOGY STACK
    </div>
    <div className="py-4 md:py-8 px-6 md:px-10 rounded-lg shadow-xl border border-gray-100 bg-white">
      <img src="/tech-stack.svg" className="mx-auto" />
    </div>
  </div>
);
