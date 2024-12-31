import React from "react";
import { motion } from "framer-motion";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route (no need for Switch)
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedItems from "./components/FeaturedItems";
import Footer from "./components/Footer";
import CartPage from "./components/CartPage"; // Import CartPage component

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-b from-yellow-100 to-orange-100 min-h-screen"
    >
      <Navbar />
      <Hero />

      {/* Wrap Routes with Routes component (replaces Switch in v6) */}
      <Routes>
        <Route path="/" element={<FeaturedItems />} /> {/* Home route renders FeaturedItems */}
        <Route path="/cart" element={<CartPage />} /> {/* Cart route renders CartPage */}
      </Routes>

      <Footer />
    </motion.div>
  );
}

export default App;
