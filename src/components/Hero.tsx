import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Shield, TrendingUp, Users, Target, Award } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import PaymentModal from './PaymentModal';

interface HeroProps {
  onRegisterClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRegisterClick }) => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-b-[2rem] px-4 py-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white">
          3000+ TRADERS MAKE RS. 400CR/YR
        </h2>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Hero Text Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Grow, Automate & Scale<br />
            your Trading Career<br />
            with<br />
            <span className="text-blue-600">StockMastery!</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            A 3-hour Masterclass to master professional trading strategies,<br />
            risk management, and consistent profit generation.
          </p>
        </div>

        {/* Image Preview Section - Replacing Video Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-4">
            <div className="aspect-video rounded-xl overflow-hidden relative">
              {/* Hero Image */}
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Professional trading desk with multiple monitors showing financial data"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-600/20"></div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="max-w-2xl mx-auto text-center">
          <button
            onClick={() => setShowPaymentModal(true)}
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white text-xl md:text-2xl font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg mb-4"
          >
            REGISTER NOW FOR JUST RS. 99/- »
          </button>
          
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-blue-600 font-semibold animate-pulse">
                Almost Full
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Only 5 seats left!
              </span>
            </div>
            <div className="flex items-center space-x-2 text-lg">
              <span className="text-gray-400 line-through">₹4,999</span>
              <span className="text-blue-600 font-bold">₹99 Only</span>
            </div>
          </div>
        </div>
      </div>

      {showPaymentModal && <PaymentModal onClose={() => setShowPaymentModal(false)} />}
    </div>
  );
};

export default Hero;