import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">FastBite</h3>
            <p>Delicious fast food delivered to your doorstep.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul>
              <li><a href="#" className="hover:text-orange-500">Menu</a></li>
              <li><a href="#" className="hover:text-orange-500">Deals</a></li>
              <li><a href="#" className="hover:text-orange-500">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p>123 Fast Food Street</p>
            <p>Foodville, FD 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@fastbite.com</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <ul className="flex">
              <li><a href="#" className="hover:text-orange-500"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#" className="hover:text-orange-500"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#" className="hover:text-orange-500"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; 2023 FastBite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
