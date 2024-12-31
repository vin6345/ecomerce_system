// src/FeaturedItems.js
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const FeaturedItems = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const items = [
    { name: "Burger", price: "$5.99", image: "/path/to/burger.jpg" },
    { name: "Pizza", price: "$8.99", image: "/path/to/pizza.jpg" },
    { name: "Fries", price: "$2.99", image: "/path/to/fries.jpg" },
    { name: "Drink", price: "$1.99", image: "/path/to/drink.jpg" },
  ];

  const handleAddToCart = (item) => {
    navigate("/cart", { state: { item } }); // Navigate to CartPage and pass product data
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Items</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600">{item.price}</p>
              <button
                onClick={() => handleAddToCart(item)} // Pass the item to handleAddToCart
                className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-full font-semibold"
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedItems;
