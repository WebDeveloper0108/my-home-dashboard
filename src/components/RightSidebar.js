// RightSidebar.js
import React from "react";
import {
  FaPlus,
  FaCheckSquare,
  FaChevronLeft,
  FaChevronRight,
  FaTrashAlt,
  FaCheck,
  FaFilter,
  FaSearch,
} from "react-icons/fa"; // Icons for tasks and buttons
import img from "../assets/makerble-logo.png";

const RightSidebar = () => {
  return (
    <aside className="w-1/4 bg-white border-l border-gray-200 p-4">
      {/* Boards Section */}
      <div className="mb-6">
        {/* Header with New Board Button */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Boards</h2>
          <button className="flex items-center bg-blue-500 text-white text-sm px-3 py-1 rounded shadow hover:bg-blue-600 transition">
            <FaPlus className="mr-2" /> New Board
          </button>
        </div>

        {/* Boards List */}
        <ul className="space-y-3">
          <li className="flex items-center bg-gray-100 rounded-lg px-4 py-3 shadow-sm hover:shadow-lg transition">
            <img
              src={img}
              alt="Board Logo 1"
              className="rounded-full w-8 h-8 mr-3"
            />
            <span className="text-gray-700 font-medium">Angola Production</span>
          </li>
          <li className="flex items-center bg-gray-100 rounded-lg px-4 py-3 shadow-sm hover:shadow-lg transition">
            <img
              src={img}
              alt="Board Logo 2"
              className="rounded-full w-8 h-8 mr-3"
            />
            <span className="text-gray-700 font-medium">
              Attendance Reporting
            </span>
          </li>
          <li className="flex items-center bg-gray-100 rounded-lg px-4 py-3 shadow-sm hover:shadow-lg transition">
            <img
              src={img}
              alt="Board Logo 3"
              className="rounded-full w-8 h-8 mr-3"
            />
            <span className="text-gray-700 font-medium">CRM Data</span>
          </li>
        </ul>

        {/* Show All Link */}
        <div className="mt-4 text-right">
          <a
            href="/"
            className="text-blue-500 hover:text-blue-600 text-sm font-medium no-underline"
          >
            Show All
          </a>
        </div>
      </div>

      {/* Personal Progress Section */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-4">Personal Progress</h2>
        <div className="mt-4 text-right">
          <a
            href="/"
            className="text-blue-500 hover:text-blue-600 text-sm font-medium no-underline"
          >
            Go to Board
          </a>
        </div>

        {/* Progress 1 */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="font-medium text-gray-700">Goal Completion</span>
            <span className="text-gray-600 text-sm">75%</span>{" "}
            {/* Percentage */}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-blue-500 h-4 rounded-full"
              style={{ width: "75%" }}
            ></div>
          </div>
        </div>

        {/* Progress 2 */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="font-medium text-gray-700">Task Completion</span>
            <span className="text-gray-600 text-sm">50%</span>{" "}
            {/* Percentage */}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-green-500 h-4 rounded-full"
              style={{ width: "50%" }}
            ></div>
          </div>
        </div>

        {/* Progress 3 */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="font-medium text-gray-700">
              Milestone Achievement
            </span>
            <span className="text-gray-600 text-sm">30%</span>{" "}
            {/* Percentage */}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-orange-500 h-4 rounded-full"
              style={{ width: "30%" }}
            ></div>
          </div>
        </div>
        <div className="mt-4 text-right">
          <a
            href="/"
            className="text-blue-500 hover:text-blue-600 text-sm font-medium no-underline"
          >
            Show All
          </a>
        </div>
      </div>

      {/* Tasks Section */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-4">Tasks</h2>

        {/* Task List */}
        <div className="flex items-center mb-4 space-x-2">
          <div className="flex-grow relative">
            <FaSearch className="absolute left-3 top-2 text-gray-500" />
            <input
              type="text"
              className="pl-10 pr-4 py-2 w-full rounded bg-gray-100 text-gray-700 focus:outline-none focus:bg-white shadow"
              placeholder="Search tasks..."
            />
          </div>
          <button className="flex items-center bg-gray-300 text-gray-700 px-4 py-2 text-sm rounded shadow hover:bg-gray-400 transition">
            <FaFilter className="mr-2" /> Filter
          </button>
        </div>

        {/* Done, To Do Buttons with Counts */}
        <div className="flex justify-around flex-wrap items-center mb-4">
          <button className="flex items-center bg-green-500 text-white px-4 py-1 text-sm rounded shadow hover:bg-green-600 transition">
            <FaCheck className="mr-2" /> Done{" "}
            <span className="ml-2 bg-white text-green-500 px-2 py-1 rounded-full">
              3
            </span>
          </button>
          <button className="flex items-center bg-blue-500 text-white px-4 text-sm py-1 rounded shadow hover:bg-blue-600 transition">
            To Do{" "}
            <span className="ml-2 bg-white text-blue-500 px-2 py-1 rounded-full">
              5
            </span>
          </button>
          <button className="flex items-center bg-blue-500 text-white text-sm px-4 py-2 rounded shadow mt-4 hover:bg-blue-600 transition">
            <FaPlus className="mr-2" /> New Task
          </button>
        </div>

        {/* Task List */}
        <ul className="space-y-3">
          <li className="flex items-center bg-gray-100 rounded-lg px-4 py-3 shadow-sm hover:shadow-lg transition justify-between">
            <div className="flex items-center">
              <FaCheckSquare className="mr-2 text-green-500" />
              <span className="text-gray-700 font-medium">
                Follow up with task authority
              </span>
            </div>
          </li>

          <li className="flex items-center bg-gray-100 rounded-lg px-4 py-3 shadow-sm hover:shadow-lg transition justify-between">
            <div className="flex items-center">
              <FaCheckSquare className="mr-2 text-green-500" />
              <span className="text-gray-700 font-medium">
                Dock in another meeting
              </span>
            </div>
          </li>

          <li className="flex items-center bg-gray-100 rounded-lg px-4 py-3 shadow-sm hover:shadow-lg transition justify-between">
            <div className="flex items-center">
              <FaCheckSquare className="mr-2 text-green-500" />
              <span className="text-gray-700 font-medium">
                Speak with HR about XYZ
              </span>
            </div>
          </li>
        </ul>

        {/* Previous and Next Buttons */}
        <div className="flex justify-between mt-4">
          <button className="flex items-center bg-gray-300 text-gray-700 px-4 text-sm py-2 rounded shadow hover:bg-gray-400 transition">
            <FaChevronLeft className="mr-2" /> Previous
          </button>
          <button className="flex items-center bg-gray-300 text-gray-700 text-sm px-4 py-2 rounded shadow hover:bg-gray-400 transition">
            Next <FaChevronRight className="ml-2" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
