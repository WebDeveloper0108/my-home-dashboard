// Sidebar.js
import React from "react";
import { FaUserPlus, FaFolderPlus, FaPhotoVideo } from "react-icons/fa"; // Icons for buttons

const Sidebar = () => {
  return (
    <aside className="w-1/5 bg-white border-r border-gray-200 p-3">
      {/* Contacts Section */}
      <div className="mb-6 bg-gray-100 py-4 px-2">
        <h2 className="text-lg font-bold mb-4">Contacts</h2>
        <ul>
          <li className="mb-2 flex justify-between items-center">
            <button className="flex items-center text-sm bg-blue-500 text-white px-3 py-1 rounded">
              <FaUserPlus className="mr-2" /> New Contact
            </button>
          </li>
          <li className="mb-2 flex items-center">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Raf Adamson-Brown"
              className="rounded-full w-8 h-8 mr-2"
            />
            <span>Raf Adamson-Brown</span>
          </li>
          <li className="mb-2 flex items-center">
            <img
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="Sigfrid"
              className="rounded-full w-8 h-8 mr-2"
            />
            <span>Sigfrid</span>
          </li>
          <li className="mb-2 flex items-center">
            <img
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt="Cato"
              className="rounded-full w-8 h-8 mr-2"
            />
            <span>Cato</span>
          </li>
        </ul>
        <div className="mt-4 text-right">
          <a
            href="/"
            className="text-blue-500 text-sm hover:text-blue-600 font-medium no-underline"
          >
            Show All
          </a>
        </div>
      </div>

      {/* Projects Section */}
      <div className="mb-6 bg-gray-100 py-4 px-2">
        <h2 className="text-lg font-bold mb-4">Projects</h2>
        <ul>
          <li className="mb-2 flex justify-between items-center">
            <button className="flex items-center bg-blue-500 text-white text-sm px-3 py-1 rounded">
              <FaFolderPlus className="mr-2" /> New Project
            </button>
          </li>
          <li className="mb-2 flex items-center">
            <span>Angola Production</span>
          </li>
          <li className="mb-2 flex items-center">
            <span>Attendance Reporting</span>
          </li>
          <li className="mb-2 flex items-center">
            <span>CRM Data</span>
          </li>
        </ul>
        <div className="mt-4 text-right">
          <a
            href="/"
            className="text-blue-500 hover:text-blue-600 text-sm font-medium no-underline"
          >
            Show All
          </a>
        </div>
      </div>

      {/* Albums Section */}
      <div className="mb-6 bg-gray-100 py-4 px-2">
        <h2 className="text-lg font-bold mb-4">Albums</h2>
        <ul>
          <li className="mb-2 flex justify-between items-center">
            <button className="flex items-center bg-blue-500 text-white text-sm px-3 py-1 rounded">
              <FaPhotoVideo className="mr-2" /> New Album
            </button>
          </li>
          <li className="mb-2 flex items-center">
            <span>Project Pictures</span>
          </li>
          <li className="mb-2 flex items-center">
            <span>Personal Photos</span>
          </li>
        </ul>
        <div className="mt-4 text-right">
          <a
            href="/"
            className="text-blue-500 hover:text-blue-600 text-sm font-medium no-underline"
          >
            Show All
          </a>
        </div>
      </div>

      {/* Organizations Section */}
      <div className="mb-6 bg-gray-100 py-4 px-2">
        <h2 className="text-lg font-bold mb-4">Organizations</h2>
        <ul>
          <li className="mb-2 flex items-center">
            <span>AI Organization Demo</span>
          </li>
          <li className="mb-2 flex items-center">
            <span>Hand Development Education Charity</span>
          </li>
          <li className="mb-2 flex items-center">
            <span>The Secondary School</span>
          </li>
        </ul>
        <div className="mt-4 text-right">
          <a
            href="/"
            className="text-blue-500 hover:text-blue-600 text-sm font-medium no-underline"
          >
            Show All
          </a>
        </div>
      </div>

      {/* Followers Section */}
      <div className="mb-6 bg-gray-100 py-4 px-2">
        <h2 className="text-lg font-bold mb-4">Followers</h2>
        <ul className="flex space-x-2">
          <li>
            <img
              src="https://randomuser.me/api/portraits/men/4.jpg"
              alt="Follower 1"
              className="rounded-full w-8 h-8"
            />
          </li>
          <li>
            <img
              src="https://randomuser.me/api/portraits/women/5.jpg"
              alt="Follower 2"
              className="rounded-full w-8 h-8"
            />
          </li>
          <li>
            <img
              src="https://randomuser.me/api/portraits/men/6.jpg"
              alt="Follower 3"
              className="rounded-full w-8 h-8"
            />
          </li>
          <li>
            <img
              src="https://randomuser.me/api/portraits/men/9.jpg"
              alt="Person You Follow 3"
              className="rounded-full w-8 h-8"
            />
          </li>
          <li>
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Person You Follow 1"
              className="rounded-full w-8 h-8"
            />
          </li>
        </ul>
        <div className="mt-4 text-right">
          <a
            href="/"
            className="text-blue-500 hover:text-blue-600 text-sm font-medium no-underline"
          >
            Show All
          </a>
        </div>
      </div>

      {/* People You Follow Section */}
      <div className="bg-gray-100 py-4 px-2">
        <h2 className="text-lg font-bold mb-4">People You Follow</h2>
        <ul className="flex space-x-2">
          <li>
            <img
              src="https://randomuser.me/api/portraits/men/7.jpg"
              alt="Person You Follow 1"
              className="rounded-full w-8 h-8"
            />
          </li>
          <li>
            <img
              src="https://randomuser.me/api/portraits/women/8.jpg"
              alt="Person You Follow 2"
              className="rounded-full w-8 h-8"
            />
          </li>
          <li>
            <img
              src="https://randomuser.me/api/portraits/men/9.jpg"
              alt="Person You Follow 3"
              className="rounded-full w-8 h-8"
            />
          </li>
          <li>
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Person You Follow 1"
              className="rounded-full w-8 h-8"
            />
          </li>
          <li>
            <img
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="Person You Follow 1"
              className="rounded-full w-8 h-8"
            />
          </li>
        </ul>
        <div className="mt-4 text-right">
          <a
            href="/"
            className="text-blue-500 hover:text-blue-600 text-sm font-medium no-underline"
          >
            Show All
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
