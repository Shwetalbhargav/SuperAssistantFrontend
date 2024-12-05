import React from 'react';

const Navbar = () => {
  return (

    <div className="bg-gray-800 text-white p-4 flex justify-between items-center sticky top-0 z-50 h-16" >
      <h1 className="text-lg font-bold">AutoProctor</h1>
      <div className="hidden md:flex space-x-4">
        <a href="#home" className="hover:text-gray-400">Home</a>
        <a href="#about" className="hover:text-gray-400">About</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
      </div>
      <button className="block md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5" />
        </svg>
      </button>
    </div>
  );
};

export default Navbar;
