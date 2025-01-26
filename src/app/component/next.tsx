import Image from 'next/image';

const StyledBox = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
  


        {/* Box */}
    
    
        

  
      <div className="flex items-center gap-6">
        {/* Image */}
        <div className="flex-shrink-0">
          <Image
             src="/Image Block (1).png" // Replace with your image path
            alt="Example"
            width={619} // Adjust width as needed
            height={478} // Adjust height as needed
            className="rounded-lg"
          />
        </div>
        <div
          className="bg-[#007580] text-[#FFFFFF] w-[672px] h-[478px] p-8 rounded-lg flex flex-col justify-between"
        >
          {/* Heading and Paragraph */}
          <div>
            <h2 className="text-2xl font-bold mb-4">About Us - Comforty</h2>
            <p className="text-lg">
              At Comforty, we believe that the right chair can transform, your space and elevate your comfort. Specializing in, ergonomic design, premium materials, and modern, aesthetics, we craft chairs that seamlessly blend style, with functionality. 
            </p>
          </div>

          {/* Button */}
          <button
            className="text-[#FFFFFF] bg-[#4E4D93] px-6 py-2 rounded-lg font-semibold self-start"
            style={{ height: '56px', width: '150px' }}
          >
            Viewcollection
          </button>
        </div>
      </div>
    </div>
  );
}

export default StyledBox;
