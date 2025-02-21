import React from "react";

const SkeletonRestaurant = () => {
  // Create an array of 36 items to render 36 skeleton cards
  const skeletonCards = Array(36).fill(0);

  return (
    <div className="flex flex-wrap gap-4 m-14 p-3">
      {skeletonCards.map((_, index) => (
        <div
          key={index}
          className="w-64 h-72 bg-gray-100 rounded-md p-4 shadow-md animate-pulse"
        >
          {/* Image placeholder */}
          <div className="w-full h-36 bg-gray-300 rounded-md mb-4"></div>

          {/* Text line placeholders */}
          <div className="h-4 bg-gray-300 rounded-md mb-2"></div>
          <div className="h-4 bg-gray-300 rounded-md mb-2 w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded-md w-1/2"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonRestaurant;
