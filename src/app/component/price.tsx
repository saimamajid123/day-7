// pages/cart.js

import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3">
        {/* Bag Section */}
        <div className="lg:col-span-2 bg-white p-6 rounded-md ">
          <h2 className="text-xl text-medium font-semibold mb-4">Bag</h2>

          {/* Item 1 */}
          <div className="flex items-center justify-between border-b pb-4 mb-4">
            <div className="flex items-center gap-4">
              <img
                src="/Image (38).png" // replace with actual image
                alt="Library Stool Chair"
                height={150}
                width={150}
              />
              <div>

              <div>
                <Image
                src="/Frame (2).png"
                alt="picure"
                height={24}
                width={24}
                />

              </div>

              <div>
                <Image
                src="/Frame (3).png"
                alt="picure"
                height={24}
                width={24}
                />

              </div>
                <h3 className="font-medium">Library Stool Chair</h3>
                <p className="text-sm text-gray-{757575}">Ashen Slate/Cobalt Bli</p>
                <p className="text-sm text-gray-500">Size: L | Quantity: 1</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold">MRP: $99</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="/Image (40).png" // replace with actual image
                alt="Library Stool Chair"
                height={150}
                width={150}
              />
              <div>

            <div>
              <Image
              src="/Frame (2).png"
              alt="picur"
              height={24}
              width={24}
              />
            </div>

            <div>
              <Image
              src ="/Frame (3).png"
              alt="picur"
              height={24}
              width={24}
              />
            </div>

                <h3 className="font-medium">Library Stool Chair</h3>
                <p className="text-sm text-gray{757575}">Ashen Slate/Cobalt Bli</p>
                <p className="text-sm text-gray-500">Size: L | Quantity: 1</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold">MRP: $99</p>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className= "bg-white font-medium p-6 rounded-md ">
          <h2 className="text-xl font-semibold mb-4">Summary</h2>

          <div className="flex justify-between mb-2">
            <p>Subtotal</p>
            <p className="font-Regular">$198.00</p>
          </div>
          <div className="flex justify-between mb-4">
            <p>Estimated Delivery & Handling</p>
            <p className="font-Regular">Free</p>
          </div>
          <hr className="mb-4" />
          <div className="flex justify-between font-semibold text-lg mb-6">
            <p>Total</p>
            <p>$198.00</p>
          </div>
          <button className= "font-medium w-60 h-33 bg-[#029FAE] text-white py-3 rounded-md hover:bg-teal-600 transition">
          Member Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
