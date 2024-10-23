import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa"; // Social media icons
import img from "../assets/makerble.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t p-6 text-gray-700">
      {/* Colorful Line */}
      <div className="h-2 w-full bg-gradient-to-r from-pink-500 via-red-500 via-yellow-400 via-green-400 via-blue-500 to-indigo-500"></div>

      <div className="container mx-auto py-6">
        {/* Footer Logo */}
        <div className="flex mb-6">
          <img
            src={img} // Replace with your actual Makerble logo URL
            alt="Makerble Logo"
            className="h-12"
          />
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-gray-700 text-sm">
          {/* Contact Us Section */}
          <div>
            <h3 className="font-semibold text-base mb-4">About Us</h3>
            <ul>
              <li>
                <a
                  href="#"
                  className=" text-gray-500 hover:text-blue-500 no-underline"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 text-gray-500 no-underline"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 text-gray-500 no-underline"
                >
                  Privacy & Cookies
                </a>
              </li>
            </ul>
          </div>

          {/* Organizations Section */}
          <div>
            <h3 className="font-semibold text-base mb-4">Organizations</h3>
            <ul>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 text-gray-500 no-underline"
                >
                  Control Panel
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 text-gray-500 no-underline"
                >
                  Discover the Marketplace
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 text-gray-500 no-underline"
                >
                  Create Organization Account
                </a>
              </li>
            </ul>
          </div>

          {/* Your Account Section */}
          <div>
            <h3 className="font-semibold text-base mb-4">Your Account</h3>
            <ul>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 text-gray-500 no-underline"
                >
                  Library
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 text-gray-500 no-underline"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 text-gray-500 no-underline"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 text-gray-500 no-underline"
                >
                  Help
                </a>
              </li>
            </ul>
          </div>

          {/* Explore Section */}
          <div>
            <h3 className="font-semibold text-base mb-4">Explore</h3>
            <ul>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 text-gray-500 no-underline"
                >
                  Metrics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 text-gray-500 no-underline "
                >
                  Networks
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 text-gray-500 no-underline"
                >
                  Strategies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 text-gray-500 no-underline"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 text-gray-500 no-underline"
                >
                  Surveys
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-base mb-4">
              Follow the Makerble Story
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800 ">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-800">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-red-600 hover:text-red-800">
                <FaYoutube size={24} />
              </a>
              <a href="#" className="text-blue-700 hover:text-blue-900">
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center">
          <hr className="my-4 border-gray-300" />
          <p className="text-gray-500 text-sm">
            © 2024 Makerble. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
