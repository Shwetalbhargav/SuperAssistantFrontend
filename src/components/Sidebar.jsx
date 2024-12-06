import React, { useState } from 'react';
import { FaBars, FaHome, FaFileAlt, FaArchive, FaQuestionCircle, FaChartBar, FaWallet, FaUser } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar */}
      <div className="bg-white w-64 h-full fixed" style={{ marginTop: '60px' }} >
      <div
        className={`fixed top-0 left-0 h-full bg-gray-100 p-4 space-y-4 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 shadow-lg w-64`  }
      >
        {/* Hamburger menu inside the sidebar */}
        <div className="absolute top-4 right-4 z-50" >
          <button
            onClick={toggleSidebar}
            className="text-gray-800 hover:text-blue-500 text-3xl focus:outline-none" 
          >
            <FaBars />
          </button>
        </div>

        {/* Sidebar links */}
        <a href="/" className="flex items-center text-gray-800 hover:bg-blue-100 p-2 rounded">
          <FaHome className="mr-2" />
          Home
        </a>
        <a href="/recent" className="flex items-center text-gray-800 hover:bg-blue-100 p-2 rounded">
          <FaFileAlt className="mr-2" />
          Recent Tests
        </a>
        <a href="/archived" className="flex items-center text-gray-800 hover:bg-blue-100 p-2 rounded">
          <FaArchive className="mr-2" />
          Archived Tests
        </a>
        <a href="/quizzes" className="flex items-center text-gray-800 hover:bg-blue-100 p-2 rounded">
          <FaQuestionCircle className="mr-2" />
          Socratease Quizzes
        </a>
        <a href="/usage" className="flex items-center text-gray-800 hover:bg-blue-100 p-2 rounded">
          <FaChartBar className="mr-2" />
          Usage
        </a>
        <a href="/billing" className="flex items-center text-gray-800 hover:bg-blue-100 p-2 rounded">
          <FaWallet className="mr-2" />
          Billing
        </a>
        <a href="/account" className="flex items-center text-gray-800 hover:bg-blue-100 p-2 rounded">
          <FaUser className="mr-2" />
          Account
        </a>
      </div>
      </div>

      {/* Toggle button for opening sidebar when it's closed */}
      {!isOpen && (
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={toggleSidebar}
            className="text-gray-800 hover:text-blue-500 text-3xl focus:outline-none"
          >
            <FaBars />
          </button>
        </div>
        
      )}
    </>
  );
};

export default Sidebar;
