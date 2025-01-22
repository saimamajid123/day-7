import React from "react"

const HomePage = () => (
    <div>
      {/* About Us Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* About Us Content */}
          <div className="bg-teal-600 text-white p-8 rounded-md">
            <h2 className="text-3xl font-bold mb-4">About Us - Comforty</h2>
            <p className="text-sm mb-6">
              Comforty offers the best quality furniture for your home interiors.
              With over 10 years of experience, we aim to deliver products that
              bring comfort and style to your spaces.
            </p>
            <button className="bg-white text-teal-600 font-semibold px-6 py-3 rounded hover:bg-gray-200 transition">
              Read More
            </button>
          </div>
          {/* About Us Image */}
          <div className="flex justify-center">
            <img
              src="/images/chair.png" // Replace with your actual image path
              alt="About Us"
              className="w-3/4"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">What Makes Our Brand Different?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Feature Cards */}
            {["Feature One", "Feature Two", "Feature Three", "Feature Four"].map(
              (feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 shadow rounded-md hover:shadow-lg transition"
                >
                  <h3 className="text-teal-600 font-bold mb-2">{feature}</h3>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Popular Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Cards */}
            {[
              { title: "Green Sofa", image: "/images/sofa.png" },
              { title: "The Comfort Chair", image: "/images/chair.png" },
              { title: "Modern Table", image: "/images/table.png" },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-md overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">{product.title}</h3>
                  <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Footer Logo and Info */}
          <div>
            <h3 className="text-xl font-bold">Comforty</h3>
            <p className="text-sm mt-2">Bringing comfort to your home since 2012.</p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul>
              {["Home", "Shop", "About", "Contact"].map((link, index) => (
                <li key={index} className="text-sm hover:text-teal-400 transition">
                  {link}
                </li>
              ))}
            </ul>
          </div>
          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-teal-400 transition">
                Facebook
              </a>
              <a href="#" className="hover:text-teal-400 transition">
                Twitter
              </a>
              <a href="#" className="hover:text-teal-400 transition">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-sm text-gray-500">
          © 2024 Comforty. All rights reserved.
        </div>
      </footer>
    </div>
)


export default HomePage;
