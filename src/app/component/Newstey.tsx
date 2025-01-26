import Image from 'next/image';

export default function Newstey() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
      {/* Headings Section */}
      <div className="text-center space-y-4 mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Or subscribe to the newsletter</h1>
        <h2 className="text-3xl  text-gray-700 underline decoration-blue-500 decoration-2 underline-offset-4 tracking-wide">
        Email address...SUBMIT
        </h2>
        <h3 className="text-2xl text-gray-600">Follow products and discounts on Instagram</h3>
      </div>

      {/* Images Section */}
      <div className="flex justify-center items-center space-x-4 mt-20">
        {/* Image 1 */}
        <div className="w-32 h-32 bg-gray-200 rounded-md overflow-hidden shadow-lg">
          <Image
             src="/image (27).png" // Replace with your actual image URL
            alt="Image "
            width={200}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Image 2 */}
        <div className="w-32 h-32 bg-gray-200 rounded-md overflow-hidden shadow-lg">
          <Image
             src="/Image (40).png" // Replace with your actual image URL
            alt="Image "
            width={200}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Image 3 */}
        <div className="w-32 h-32 bg-gray-200 rounded-md overflow-hidden shadow-lg">
          <Image
             src="/Image (41).png" // Replace with your actual image URL
            alt="Image "
            width={186}
            height={186}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Image 4 */}
        <div className="w-32 h-32 bg-gray-200 rounded-md overflow-hidden shadow-lg">
          <Image
            src="/Image (42).png" // Replace with your actual image URL
            alt="Image "
            width={186}
            height={186}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Image 5 */}
        <div className="w-32 h-32 bg-gray-200 rounded-md overflow-hidden shadow-lg">
          <Image
             src="/Image (43).png" // Replace with your actual image URL
            alt="Image "
            width={186}
            height={186}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Image 6 */}
        <div className="w-32 h-32 bg-gray-200 rounded-md overflow-hidden shadow-lg">
          <Image
             src="/card (1).png"
            alt="Image"
            width={200}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};



