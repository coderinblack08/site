import * as React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
}) => {
  return (
    <button
      className={`block ${
        variant === 'primary'
          ? 'bg-indigo-500 hover:bg-indigo-600'
          : 'bg-indigo-100 hover:bg-indigo-200'
      } px-4 py-3 rounded-md shadow-sm ${
        variant === 'primary' ? 'text-white' : 'text-indigo-600'
      } focus:shadow-outline focus:outline-none transition ease-in-out duration-200`}
    >
      {children}
    </button>
  );
};
