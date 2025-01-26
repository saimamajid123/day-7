
    import Image from "next/image";

    export default function Contact() {
      return (
        <div className="min-h-screen bg-gray-50 py-16 px-4">
          {/* Main Section */}
          <div className="max-w-6xl mx-auto">
            {/* Contact Information and Form */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-800 text-center">Get In Touch With Us</h2>
                <p className="text-gray-600 text-center">
                For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
                </p>
    
                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                  <Image src={'/Vector (4).png'} alt='' width={20} height={20}/> 
                    <div>
                      <h4 className="font-semibold text-gray-800">Address</h4>
                      <p className="text-gray-600">236 5th SE Avenue, New York NY10000, United States</p>
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                  <Image src={'/Vector (5).png'} alt='' width={20} height={20}/> 
                    <div>
                      <h4 className="font-semibold text-gray-800">Phone</h4>
                      <p className="text-gray-600">Mobile: +(84) 546-6789</p>
                      <p className="text-gray-600"> Hotline: +(84) 456-6789</p>
                    </div>
                  </div>
                  {/* Working Time */}
                  <div className="flex items-start space-x-4">
                    <Image src={'/Vector (6).png'} alt='' width={20} height={20}/>
                    <div>
                      <h4 className="font-semibold text-gray-800">Working Time</h4>
                      <p className="text-gray-600">Monday - Friday: 9:00 - 22:00</p>
                      <p className="text-gray-600">Saturday - Sunday: 9:00 - 21:00</p>
                    </div>
                  </div>
                </div>
              </div>
    
              {/* Contact Form */}
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Your name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Abc"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email address</label>
                  <input
                    type="Abc@def.com"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="abc@gmail.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Subject</label>
                  <input
                    type="This is an optional"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="This is optional"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    rows={1}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Hi! I'd like to ask about..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-237 py-2 px-4 bg-[#029FAE] text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </form>
            </div>
    
            {/* Image Section */}
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              
            </div>
          </div>
        </div>
      );
    };
    
               