import Image from 'next/image'
import React from 'react'

export default function Pepep() {
  return (
    <main className="bg-slate-100 flex gap-1 p-6">
        <div>
            <h3 className="text-black  text-center font-bold  items-center">Or subscribe to the newsletter</h3>
            <p className="text-color-[#1E2832] font-smool text-center left items-center">Email address...</p>
            <p className="text-color-[#1E2832] font-smool text-center right items-center">SUBMIT</p>
            <h3 className="text-black  text-center font-bold items-center">Follow products and discounts on Instagram</h3>
        </div>
        
        <div>
            <Image
             src="/image (35).png"
            alt="image"
            height={200}
            width={200}
            />

        </div>

        <div>
            <Image
             src="/image (27).png"
            alt="image"
            height={200}
            width={200}
            />

        </div>

        <div>
            <Image
            src="/image (29).png"
            alt="image"
            height={200}
            width={200}
            />

        </div>

        <div>
            <Image
             src="/image (4).jpg"
            alt="image"
            height={200}
            width={200}
            />

        </div>

        <div>
            <Image
             src="/image (38).png"
            alt="image"
            height={200}
            width={200}
            />

        </div>

        <div>
            <Image
             src="/card (1).png"
            alt="image"
            height={200}
            width={200}
            />

        </div>



        
     </main>
  );
};
