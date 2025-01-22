

  export async function handler(req: any, res: any) {
    const { id } = req.query;
  
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
  
    // Find product by ID
    const product = products.find((p) => p.id === parseInt(id));
  
    if (product) {
      return res.status(200).json(product);
    }
  
    return res.status(404).json({ message: "Product not found" });
  }
  
  export default handler;
  