import { Link } from "react-router-dom";
import React, { useState } from "react";
import Users from "./Tables/User";

const Sidebar = () => {
  // State to toggle the display of login and register links
  const [showOptions, setShowOptions] = useState(false);

  // Function to toggle the state
  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-gray-800 min-h-screen">
        <div className="flex items-center justify-center h-16 bg-gray-900">
          <span className="text-white font-bold uppercase">Sidebar</span>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <nav className="flex-1 px-2 py-4 bg-gray-800">
            {/* Dashboard Link */}
            <a href="#" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              Dashboard
            </a>

            {/* Tables Link */}
            <Link to="/tables" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5h2M4 10v11a1 1 0 001 1h14a1 1 0 001-1V10M4 10l8-8 8 8M10 21v-6h4v6" />
              </svg>
              Tables
            </Link>

            {/* Form Link with Dropdown */}
            <div>
              <div
                onClick={toggleOptions}
                className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700 cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5h2M4 10v11a1 1 0 001 1h14a1 1 0 001-1V10M4 10l8-8 8 8M10 21v-6h4v6" />
                </svg>
                Form
              </div>

              {/* Conditionally render Login and Add candidate options */}
              {showOptions && (
                <div className="ml-6">
                    <Link to="/login" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700" >
                      Login
                    </Link>
                    <Link to="/sidebarForm" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"  >
                      Add candidate
                    </Link>
                    <Link to="/register" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"  >
                      Add Category
                    </Link>
                    <Link to="/register" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"  >
                      Add Party
                    </Link>
                </div>
              )}
            </div>

            {/* Settings Link */}
            <a href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Settings
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
