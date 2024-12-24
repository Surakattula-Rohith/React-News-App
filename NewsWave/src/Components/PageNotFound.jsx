import React from 'react'

import { useEffect, useState } from "react";

const PageNotFound = () => {
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    setAnimationClass('animate__animated animate__fadeIn animate__delay-1s');
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-5">
      <div className={`text-center ${animationClass}`}>
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-3xl font-medium mb-6">Page Not Found</h2>
        <p className="text-lg mb-6">
          Oops! It seems the page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 transition-all duration-300"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
};

export default PageNotFound;

