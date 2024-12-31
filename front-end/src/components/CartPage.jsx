import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const CartPage = () => {
  const { state } = useLocation(); // Access passed state (product info)

  // Check if state and item exist before destructuring
  const item = state ? state.item : null;

  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., save data or send to backend)
    console.log("Order details:", { item, address, contactNumber });
  };

  if (!item) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Item not found</h2>
        <p className="text-gray-600">No item details available. Please try again.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Order Details</h2>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
        <p className="text-gray-600">{item.price}</p>
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover mt-4"
        />
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <label htmlFor="address" className="block text-lg font-medium">
            Shipping Address:
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="contactNumber" className="block text-lg font-medium">
            Contact Number:
          </label>
          <input
            type="text"
            id="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full font-semibold"
        >
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default CartPage;
