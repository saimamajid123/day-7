import Image from 'next/image';

// Fetch product data based on the product ID
export async function generateMetadata({ params }: any) {
  try {
    const res = await fetch(`http://localhost:3000/api/route/${params.id}`);
    
    if (!res.ok) {
      // Handle error if API doesn't return a successful response
      throw new Error("Product not found or server error");
    }

    const product = await res.json();

    return {
      title: product.name,
      description: product.description,
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }
}

export default async function ProductDetail({ params }: any) {
  try {
    const res = await fetch(`http://localhost:3000/api/route/${params.id}`);
    
    if (!res.ok) {
      // Handle error if API doesn't return a successful response
      throw new Error("Product not found or server error");
    }

    const product = await res.json();

    return (
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1">
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="flex-1 md:ml-8 mt-6 md:mt-0">
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-xl font-semibold text-gray-600 mb-4">{product.price}</p>
              <p className="text-gray-700 mb-4">{product.description}</p>

              <div className="flex justify-between items-center">
                <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  Add to Cart
                </button>
                <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100">
                  Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching product details:", error);
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
        <p className="text-lg text-gray-600">The requested product could not be found.</p>
      </div>
    );
  }
}
