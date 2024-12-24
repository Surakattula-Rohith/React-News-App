import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";

const NavBar = () => {
  return (
    <>
      <header className="bg-gray-900 text-white fixed w-full z-10 shadow-md">
        <nav className="container mx-auto flex justify-between items-center px-6 py-4">
          <Link to="/" className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="h-6 w-6 object-cover" />
            <span className="text-lg font-medium tracking-wide">NewsWave</span>
          </Link>

          <div className="flex space-x-8">
            <Link
              to="/publishers"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Publishers
            </Link>
            <Link
              to="/personalinfo"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Personal Info
            </Link>
          </div>
        </nav>
      </header>
      <div className="h-16"></div>
    </>
  );
};

export default NavBar;
