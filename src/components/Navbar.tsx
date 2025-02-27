import React from 'react';
import { TrendingUp } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <TrendingUp className="h-6 w-6 text-blue-600" />
          <span className="font-bold text-xl text-gray-800">StockMastery</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <a 
            href="#features" 
            className="text-gray-600 hover:text-blue-600 font-medium text-sm"
          >
            Features
          </a>
          <a 
            href="#course-details" 
            className="text-gray-600 hover:text-blue-600 font-medium text-sm"
          >
            Course Details
          </a>
          <a 
            href="#testimonials" 
            className="text-gray-600 hover:text-blue-600 font-medium text-sm"
          >
            Testimonials
          </a>
          <a 
            href="#faq" 
            className="text-gray-600 hover:text-blue-600 font-medium text-sm"
          >
            FAQ
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;