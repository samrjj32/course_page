import React from 'react';
import { TrendingUp } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <TrendingUp className="h-8 w-8 text-orange-500" />
          <span className="font-bold text-xl text-gray-800">StockMastery</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-600 hover:text-orange-500 transition-colors">Features</a>
          <a href="#course-details" className="text-gray-600 hover:text-orange-500 transition-colors">Course Details</a>
          <a href="#testimonials" className="text-gray-600 hover:text-orange-500 transition-colors">Testimonials</a>
          <a href="#faq" className="text-gray-600 hover:text-orange-500 transition-colors">FAQ</a>
        </div>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;