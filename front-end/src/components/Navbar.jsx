import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const refreshPage = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <motion.h1
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold text-orange-500 cursor-pointer" // Add cursor-pointer to indicate it's clickable
          onClick={refreshPage} // Attach onClick directly to the h1 element
        >
          Fastbite
        </motion.h1>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-gray-600 hover:text-orange-500">Menu</a></li>
          <li><a href="#" className="text-gray-600 hover:text-orange-500">Deals</a></li>
          <li><a href="#" className="text-gray-600 hover:text-orange-500">About</a></li>
          <li><a href="#" className="text-gray-600 hover:text-orange-500">Contact</a></li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
