import React from "react";
import Image from "next/image";
import chair from "../images/Product_Image3.png";
import brandLogos from "../images/Company Logo.png";
import featured from "../images/featured.svg";
import topcategory from "../images/topcategory.svg";
import exploreNew from "../images/explorenew.svg";
import ourProducts from "../images/ourproducts.svg";







const HeroSection = () => (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">

{/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h5 className="text-gray-500 uppercase tracking-widest mb-2">
            Welcome to Comforty
          </h5>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Best Furniture Collection For Your Interior.
          </h1>
          <button className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition">
            Shop Now →
          </button>
        </div>

  {/* Right Image */} /

        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">

         <Image src= {chair} alt="Furniture Chair" width={300} height={150} ></Image> 


</div>
      </div>  
            
            {/*   products Images section */}

            <div className="flex flex-col items-center ">
           <Image src= {brandLogos} alt="Companies Logos" width={1321} height={139} ></Image> 
            </div>

            <div className="flex flex-col items-center mt-8 py-5 ">
            <Image src= {featured} alt="products pics" width={1920} height={461} ></Image> 
            </div>

            <div className="flex flex-col items-center mt-8 py-10">
            <Image src= {topcategory} alt="products pics" width={2215} height={508} ></Image> 
            </div>

            <div className="flex flex-col items-center mt-8 py-10">
            <Image src= {exploreNew} alt="products pics" width={1320} height={548} ></Image> 
            </div>

            <div className="flex flex-col items-center mt-8 py-10">
             <Image src= {ourProducts} alt="products pics" width={1320} height={919} ></Image> 
            </div>








    </section>
    
)


export default HeroSection;
