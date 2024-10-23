import React from "react";
import { FaBell, FaEnvelope, FaCog, FaUserCircle } from "react-icons/fa";
import logo from "../assets/makerble-logo.png";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex flex-col md:flex-row justify-between items-center">
      {/* Left: Logo and Search Bar */}
      <div className="flex items-center">
        <div className="text-2xl font-bold text-blue-600">
          <img src={logo} alt="logo" className="h-16 w-20 object-cover" />
        </div>

        <div className="ml-4 md:ml-8 mt-2 md:mt-0 w-full">
          <input
            type="text"
            className="border border-gray-300 rounded-full px-4 py-1 w-full md:w-80"
            placeholder="Search for contacts..."
          />
        </div>
      </div>

      {/* Right: Notification, Messages, Settings, Profile */}
      <div className="flex flex-col md:flex-row items-center mt-2 md:mt-0 space-y-2 md:space-y-0 md:space-x-6">
        <div className="flex items-center space-x-4">
          <FaBell size={20} className="text-gray-500 hover:text-gray-700" />
          <FaEnvelope size={20} className="text-gray-500 hover:text-gray-700" />
          <FaCog size={20} className="text-gray-500 hover:text-gray-700" />
        </div>
        <div className="flex space-x-2">
          <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded">
            Create
          </button>
          <button className="bg-red-500 text-white text-sm px-4 py-2 rounded">
            Upgrade
          </button>
        </div>

        <FaUserCircle size={30} className="text-gray-500 hover:text-gray-700" />
      </div>
    </header>
  );
};

export default Header;
