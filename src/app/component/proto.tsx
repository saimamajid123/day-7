// pages/index.js

import React from 'react';

export default function FeaturedProducts () {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 mt-20">
      {/* Single Heading for All Images */}
      <div className="w-full flex justify-between px-10 mb-10">
        <h2 className="text-lg font-bold text-gray-700">Featured Products</h2>
        <h2 className="text-lg font-bold text-gray-700 ">View all</h2>
      </div>

      <div className="flex space-x-4">
        {/* Image 1 */}
        <div className="relative w-[200px] h-[250px] bg-white rounded-lg overflow-hidden">
          <img
            src="/Group 116.png"
            alt="Image "
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 2 */}
        <div className="relative w-[200px] h-[250px] bg-white rounded-lg overflow-hidden">
          <img
            src="/Group 115.png"
            alt="Image "
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 3 */}
        <div className="relative w-[200px] h-[250px] bg-white rounded-lg overflow-hidden">
          <img
            src="/Group 114.png"
            alt="Image 3"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 4 */}
        <div className="relative w-[200px] h-[250px] bg-white rounded-lg overflow-hidden">
          <img
            src="/Group 113.png"
            alt="Image 4"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 5 */}
        <div className="relative w-[200px] h-[250px] bg-white rounded-lg overflow-hidden">
          <img
            src="/Group 112.jpg"
            alt="Image 5"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};


