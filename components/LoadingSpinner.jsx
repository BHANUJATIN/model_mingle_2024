// LoadingSpinner.jsx
import React from "react";

const LoadingSpinner = () => {
  return (
    <div role="status" className="max-w-sm animate-pulse">
      <div className=" w-full h-20 my-3 rounded-lg p-2 md:p-4 bg-gray-800 hover:shadow-md hover:bg-gray-700  backdrop-blur-lg text-white"></div>
      <div className=" w-full h-20 my-3 rounded-lg p-2 md:p-4 bg-gray-800 hover:shadow-md hover:bg-gray-700  backdrop-blur-lg text-white"></div>
      <div className=" w-full h-20 my-3 rounded-lg p-2 md:p-4 bg-gray-800 hover:shadow-md hover:bg-gray-700  backdrop-blur-lg text-white"></div>
      <span className="sr-only">Loading...</span>
      
    </div>
    
  );
};

export default LoadingSpinner;
