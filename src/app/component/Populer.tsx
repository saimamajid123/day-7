import React from 'react';

export default function Populer () {
  return (
    <div className="flex flex-col items-left p-6">
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-6">Our Popular Products </h1>

      {/* Images Section */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* First Image */}
        <div className="flex flex-col items-start">
          <img
             src="/Product Card.png"
            alt="image"
            className="h-[380px] w-[630px] object-cover rounded-lg"
          />
          <div className="mt-2">
            
            <p className="text-gray-600">$99.00</p>
          </div>
        </div>

        {/* Second Image */}
        <div className="flex flex-col items-start">
          <img
             src="/Product Card (2).png"
            alt="Image "
            className="h-[380px] w-[305px] object-cover rounded-lg"
          />
          <div className="mt-2">
            
            <p className="text-gray-600">$99.00</p>
          </div>
        </div>

        {/* Third Image */}
        <div className="flex flex-col items-start">
          <img
            src="/Product Card (1).png"
            alt="Image 3"
            className="h-[385px] w-[305px] object-cover rounded-lg"
          />
          <div className="mt-2">
            
            <p className="text-gray-600">$99.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};
