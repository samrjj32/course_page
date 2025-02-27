import React from 'react';
import { Calendar, Clock, MapPin, Gift } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

interface HeroProps {
  onRegisterClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRegisterClick }) => {
  return (
    <div className="bg-gradient-to-r from-orange-50 to-orange-100 py-16">
      <div className="container mx-auto px-4">
        <div className="bg-orange-500 text-white py-3 px-4 rounded-lg text-center mb-8">
          <p className="text-lg md:text-xl font-bold">3000+ TRADERS MAKE {'>'} ₹4,00,000/YR</p>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Grow, Automate & Scale<br />
            your Stock Trading<br />
            Business using<br />
            <span className="text-orange-500">StockMastery!</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            A <span className="underline decoration-orange-500">3-hour Trading Masterclass</span> to simplify
            market analysis, executing profitable trades & building a consistent income stream.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
            <img 
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" 
              alt="Trading Expert" 
              className="w-full md:w-1/2 max-w-md rounded-lg shadow-lg"
            />
            
            <div className="w-full md:w-1/2 max-w-md space-y-6">
              <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
                <Calendar className="h-8 w-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-500">DATE</h3>
                  <p className="text-xl font-bold">15 JUNE (SATURDAY)</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
                <Clock className="h-8 w-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-500">TIME</h3>
                  <p className="text-xl font-bold">7 PM TO 10 PM</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
                <MapPin className="h-8 w-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-500">LOCATION</h3>
                  <p className="text-xl font-bold">ZOOM</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
                <Gift className="h-8 w-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-500">BONUSES</h3>
                  <p className="text-xl font-bold">MULTIPLE BONUSES INSIDE</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <CountdownTimer />
          </div>
          
          <button 
            onClick={onRegisterClick}
            className="bg-orange-500 hover:bg-orange-600 text-white text-xl font-bold py-4 px-8 rounded-full shadow-lg transition-all transform hover:scale-105"
          >
            REGISTER NOW FOR JUST ₹4,999 ₹99/- »
          </button>
          
          <p className="text-orange-600 font-bold mt-4">Almost Full! Only 5 seats left!</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;