
import Image from 'next/image';

import React from 'react';



export default function Product() {
  return (
    
    <div className="flex items-center justify-center h-auto p-8 ">
      <div className="flex max-w-2x1 bg-white py-12">
        <div className="relative">
        <div className="flex  items-right mt-5 "></div>
          <Image
            src ="/Image (1).jpg"
            alt="Library Stool Chair"
            width={900}
            height={900}
        
          />
        </div>
      <div className='ml-20 mt-10'>
        
        <h2 className="text-4xl font-bold text-gray-800">Library Stool</h2>
        <h2 className="text-4xl font-bold text-gray-800">Chair</h2>
          <p className="text-sm text-white mt-4 rounded-full px-5 py-1 bg-[#029FAE] w-[20%]">$20.00 USD</p>
          <p className="text-[#272343] mt-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing, elit. Nullam tincidunt erat enim. Lorem ipsum dolor, sit amet, consectetur adipiscing
          </p>
          <button className=" mt-6 py-2 text-white bg-[#029FAE] w-[40%] rounded-md hover:bg-blue-600 snipcart-add-item"
           data-item-id="768"
           data-item-name="Library Stool Chair"
           data-item-price="20"
           data-item-url="www.google.com"
           data-item-image="/Image (1).jpg"
          >
            Add to Cart
          </button>
          </div>
          <div>
          <p className="font-bold bg-color-blake-000000 text-right" ></p>
          </div>
          <div>
          </div>
        </div>
      </div>
    
  );
}

      




                        

    
