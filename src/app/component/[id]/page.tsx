'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { use } from "react";


// Define TypeScript types
interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
  id:number;
}

// Dynamic Product Page Component
export default function ProductDetail({params}:{ params: Promise<{ id: string }> }) {
const {id} = use(params);
const [product, setProduct] = useState<Product | null> (null) 

useEffect(() => {
  const fetchProductDetails = async () => {
    try{
      const res = await fetch (`/api/${id}`)
      if (!res.ok){
        throw new Error("error")
      }
      const productdata = await res.json()
      setProduct(productdata)
    }catch(err){
      console.error("failed to fetch product")
    }
  }

  fetchProductDetails()
}, [id])

  if (!product) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold text-red-500">Product Not Found</h1>
        <p className="text-lg text-gray-600">The requested product could not be found.</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1">
            <Image
              src={product.image}
              alt={product.name}
              width={320}
              height={320}
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="flex-1 md:ml-8 mt-6 md:mt-0">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl font-semibold text-gray-600 mb-4">${product.price}</p>
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
}
