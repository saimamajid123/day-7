import Image from 'next/image';
import Link from 'next/link'; // Import Link for navigation

export default function ProductGrid() {
  const products = [
    { id: 1, name: "Library Stool Chair", price: "$20", image: "/Products.png", label: "New" },
    { id: 2, name: "Library Stool Chair", price: "$20", image: "/image (1).jpg", label: "Sale" },
    { id: 3, name: "Library Stool Chair", price: "$20", image: "/Products (1).png", label: "" },
    { id: 4, name: "Library Stool Chair", price: "$20", image: "/Products (2).png", label: "" },
    { id: 5, name: "Library Stool Chair", price: "$20", image: "/Products (3).png", label: "New" },
    { id: 6, name: "Library Stool Chair", price: "$20", image: "/Products (4).png", label: "Sale" },
    { id: 7, name: "Library Stool Chair", price: "$20", image: "/Group 112.jpg", label: "" },
    { id: 8, name: "Library Stool Chair", price: "$20", image: "/Group 113.png", label: "" },
    { id: 9, name: "Library Stool Chair", price: "$20", image: "/Products (5).png", label: "" },
    { id: 10, name: "Library Stool Chair", price: "$20", image: "/image (1).jpg", label: "New" },
    { id: 11, name: "Library Stool Chair", price: "$20", image: "/Group 115.png", label: "Sale" },
    { id: 12, name: "Library Stool Chair", price: "$20", image: "/Group 114.png", label: "" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white"
          >
            <Link href={`/component/${product.id}`}> {/* Add Link to navigate to product details page */}
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={320}
                  className="w-full h-48"
                />
                {product.label && (
                  <span
                    className={`absolute top-2 left-2 px-2 py-1 text-xs font-bold text-white rounded ${
                      product.label === "New" ? "bg-green-500" : "bg-orange-500"
                    }`}
                  >
                    {product.label}
                  </span>
                )}
              </div>
            </Link>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.price}</p>
              <div className="flex justify-between items-center">
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 snipcart-add-item"
                data-item-id={product.id}
                data-item-name={product.name}
                data-item-price={product.price}
                data-item-url={product.id}
                data-item-image={product.image}
                >
                  Add to Cart
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
                  
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
