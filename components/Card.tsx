import React, { ReactNode } from 'react';

interface CardProps {
  image: string;
  text: string;
  header: string;
  helper: ReactNode;
  link?: string;
  repo: string;
  nobackend?: boolean;
  reversed?: boolean;
}

const genImage = (image: string, header: string) => (
  <img
    src={image}
    alt={`${header} Screenshot`}
    className="sm:max-w-lg rounded-md shadow-lg transform hover:scale-105 transition ease duration-300"
  />
);

export const Card: React.FC<CardProps> = ({
  image,
  header,
  text,
  helper,
  link,
  repo,
  nobackend,
  reversed,
}) => {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:space-x-24">
      {!reversed ? genImage(image, header) : null}
      <div className={`max-w-xl ${reversed ? 'mb-10' : 'mt-10'}`}>
        <h1 className="text-4xl font-extrabold text-gray-800">
          {header}
          {nobackend ? <span className="text-blue-400 ml-1">*</span> : null}
        </h1>
        <p className="text-gray-600 mt-1 leading-relaxed">{text}</p>
        <div className="mt-5">{helper}</div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:divide-x mt-5">
          <a
            href={link || undefined}
            className="inline-flex items-center text-blue-400 hover:text-blue-500 sm:pr-5"
          >
            {!!link ? link.replace('https://', '') : 'No Deployment'}
            {!!link ? (
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            ) : null}
          </a>
          <a
            href={repo}
            className="inline-flex items-center mt-2 sm:mt-0 sm:pl-5 text-gray-500  hover:text-gray-600"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            {repo.replace('https://github.com/', '').split('/').join(' / ')}
          </a>
        </div>
      </div>
      {reversed ? genImage(image, header) : null}
    </div>
  );
};
