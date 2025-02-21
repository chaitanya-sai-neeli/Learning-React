import React from "react";

const ShimmerMenu = () => {
  return (
    <div className="mx-auto max-w-screen-md p-4">
      {/* Heading shimmer */}
      <div className="animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
      </div>

      {/* Menu items shimmer (repeat as many as you want) */}
      {[...Array(5)].map((_, index) => (
        <div key={index} className="animate-pulse flex items-start mb-4">
          {/* Text placeholders */}
          <div className="flex-1">
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/3 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/4"></div>
          </div>

          {/* Image placeholder on the right */}
          <div className="h-36 w-36 bg-gray-200 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerMenu;
