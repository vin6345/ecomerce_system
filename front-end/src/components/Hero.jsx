import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <h2 className="text-4xl font-bold mb-4">Delicious Fast Food</h2>
          <p className="text-xl mb-6">Order your favorite meals with just a few clicks!</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold"
          >
            Order Now
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <img src="/path/to/hero-image.jpg" alt="Delicious fast food" className="rounded-lg shadow-lg" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
