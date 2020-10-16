import * as React from 'react';

export const Dropdown: React.FC<React.AllHTMLAttributes<HTMLElement>> = (
  props
) => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const handleEvent = (e: any) => {
      if (e.key === 'Esc' || e.key === 'Escape') {
        setOpen(false);
      }
    };
    document.addEventListener('keydown', handleEvent);
    return () => {
      document.removeEventListener('keydown', handleEvent);
    };
  }, []);

  return (
    <div className="relative text-left inline-block" {...props}>
      <button
        className="z-10 relative block h-8 w-8 rounded-full overflow-hidden focus:shadow-outline focus:outline-none"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img
          className="object-cover h-full w-full"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Profile Picture"
        />
      </button>
      {open ? (
        <>
          <button
            className="fixed inset-0 w-screen h-screen cursor-default focus:outline-none"
            tabIndex={-1}
            onClick={() => setOpen(false)}
          />
          <div className="bg-white absolute right-0 origin-top-right mt-3 py-1 rounded-md shadow-lg w-48">
            <a
              href="#"
              className="block px-4 py-2 text-gray-600 focus:bg-indigo-500 focus:text-white hover:bg-indigo-500 hover:text-white"
            >
              Account Settings
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-600 focus:bg-indigo-500 focus:text-white hover:bg-indigo-500 hover:text-white"
            >
              Support
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-600 focus:bg-red-500 focus:text-white hover:bg-red-500 hover:text-white"
            >
              Logout
            </a>
          </div>
        </>
      ) : null}
    </div>
  );
};
