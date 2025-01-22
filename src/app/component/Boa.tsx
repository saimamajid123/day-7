import React from "react"
import Image from "next/image"
import c_logo from "../images/Logo.png"
import f_logo from "../images/Group 44.png"
import t_logo from "../images/Group 48.png"
import I_logo from "../images/Group 50.png"
import P_logo from "../images/Group 46.png"
import y_logo from "../images/Group 47.png"







// components/Footer.js
export default function Footer() {


    return (

      <footer className="bg-gray-100 py-8">
            {/* Comferty Logo */}


        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
            <div>
                                {/* company Logo */}

          <div className="flex flex-col items-left mt-0 py-10">
            <Image src= {c_logo} alt="Company Logo" width={168} height={40} ></Image>
            </div>

              <h3 className="font-semibold text-lg mb-4">Comforty</h3>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quod.
              </p>
            <div className="socialLogos">
                  {/* social  Logos */}


            </div>
              <div className="flex space-x-4">

          {/* Facebook Logo */}

          <a href="#" className="text-gray-500 hover:text-gray-700 transition">
          <div className="flex flex-col items-left mt-0 py-10">
            <Image src= {f_logo} alt="facebook Logo" width={38} height={38} ></Image>
            </div>
            <i className="fab fa-facebook-f"></i>
            </a>

           {/* Twiter Logo */}
            <a href="#" className="text-gray-500 hover:text-gray-700">
            <div className="flex flex-col items-left mt-0 py-10">
            <Image src= {t_logo} alt="twiter Logo" width={38} height={38} ></Image>
            </div>
            <i className="fab fa-twitter"></i>
            </a>

            {/* Instagram Logo */}
            <a href="#" className="text-gray-500 hover:text-gray-700">
            <div className="flex flex-col items-left mt-0 py-10">
            <Image src= {I_logo} alt="instagram Logo" width={38} height={38} ></Image>
            </div>
            <i className="fab fa-instagram"></i>
            </a>

            {/* Pinterrest Logo */}
            <a href="#" className="text-gray-500 hover:text-gray-700">
            <div className="flex flex-col items-left mt-0 py-10">
            <Image src= {P_logo} alt="Pinterrest Logo" width={38} height={38} ></Image>
            </div>
            <i className="fab fa-pinterrest"></i>
            </a>

            {/* Youtube Logo */}
            <a href="#" className="text-gray-500 hover:text-gray-700">
            <div className="flex flex-col items-left mt-0 py-10">
            <Image src= {y_logo} alt="Pinterrest Logo" width={38} height={38} ></Image>
            </div>
            <i className="fab fa-pinterrest"></i>
            </a>



              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Category</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-900" >Sofa</a></li>
                <li><a href="#" className="hover:text-gray-900">Armchair</a></li>
                <li><a href="#" className="hover:text-gray-900">Desk Chair</a></li>
                <li><a href="#" className="hover:text-gray-900">Dining Chair</a></li>
                <li><a href="#" className="hover:text-gray-900">Park Bench</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-900">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-gray-900">FAQ</a></li>
                <li><a href="#" className="hover:text-gray-900">Help</a></li>
              </ul>
              <div className="mt-6">
                <h4 className="font-semibold mb-2">Newsletter</h4>
                <form className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="p-2 border rounded-lg w-full"
                  />
                  <button className="bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-4 text-center text-gray-500 text-sm">
            &copy; 2024. Design inspired by Focus2. Powered by Tailwind CSS.
          </div>
        </div>
      </footer>
    )
  }
  
