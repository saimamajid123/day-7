import React from "react";
import Image from "next/image";
import c_logo from "../images/Logo.png"




const Header =() => (
    <div className="bg-[#272343]">
      {/* Top Bar */}
      <div className="text-center text-sm text-white py-1">
        ✓ Free Shipping On All Orders Over $50
      </div>
             <div className="h-[84px] bg-[#F0F2F3]"> {/* Top Bar */}
      <div className="text-center text-sm text-white py-1">
        ✓ Free Shipping On All Orders Over $50
      </div>

      {/* Main Header */}
      <div className="bg-white flex justify-between items-center px-8 py-4 shadow-md">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="text-2xl text-teal-600 font-bold">

                  {/* company Logo */}

          <div className="flex flex-col items-left mt-0 py-10">
            <Image src= {c_logo} alt="Company Logo" width={168} height={40} ></Image>
            </div>
            
            </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-gray-700">
          <a href="#" className="hover:text-teal-600 transition">
            Home
          </a>
          <a href="#" className="hover:text-teal-600 transition">
            Shop
          </a>
          <a href="#" className="hover:text-teal-600 transition">
            Product
          </a>
          <a href="#" className="hover:text-teal-600 transition">
            Pages
          </a>
          <a href="#" className="hover:text-teal-600 transition">
            About
          </a>
        </nav>

        {/* Contact and Cart */}
        <div className="flex items-center space-x-6">
          <div className="hidden md:block text-gray-600">
            Contact: <span className="font-medium">888-555-0111</span>
          </div>
          <button className="flex items-center bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition">
            <span className="material-icons">shopping_cart</span>
            <span className="ml-2">Cart</span>
          </button>
        </div>
      </div>
    </div>
    </div>
)


export default Header;
