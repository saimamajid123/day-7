
import Image from 'next/image';
import React from 'react'


export default function Contow() {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-10">
        {/* Feature 1 */}
        <div className="flex items-left space-x-4">
          <Image
          src="/Vector (7).png"
          alt="image"
          width ={60}
          height = {60}
           className="h-12 w-12 text-gray-600" />
          <div>
            <h3 className="text-lg font-semibold">High Quality</h3>
            <p className="text-sm text-gray-500">crafted from top materials</p>

          </div>
        </div>
        {/* Feature 2 */}
        <div className="flex items-center space-x-4">
        <Image
          src="/Group (1).png"
          alt="image"
          width ={60}
          height = {60}
           className="h-12 w-12 text-gray-600" />
          <div>
            <h3 className="text-lg font-semibold">Protection</h3>
            <p className="text-sm text-gray-500">Over 2 years</p>
          </div>
        </div>
        {/* Feature 3 */}
        <div className="flex items-right space-x-4">
        <Image
          src="/customer-support (3).png"
          alt=""
          width ={60}
          height = {60}
           className="h-12 w-12 text-gray-600" />
          <div>
            <h3 className="text-lg font-semibold">24 / 7 Support</h3>
            <p className="text-sm text-gray-500">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
};
