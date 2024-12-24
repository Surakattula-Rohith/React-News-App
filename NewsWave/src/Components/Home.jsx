import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-6 md:p-8 lg:p-12 bg-gray-100 min-h-screen">
      <nav className="flex space-x-6 bg-white shadow-md p-4 rounded-lg mb-6">
        <Link
          to="trending"
          className="text-gray-700 font-medium hover:text-blue-600 transition duration-300 hover:scale-105"
        >
          Trending
        </Link>
        <Link
          to="search"
          className="text-gray-700 font-medium hover:text-blue-600 transition duration-300 hover:scale-105"
        >
          Search
        </Link>
        <Link
          to="random"
          className="text-gray-700 font-medium hover:text-blue-600 transition duration-300 hover:scale-105"
        >
          Random News
        </Link>
      </nav>

      <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
