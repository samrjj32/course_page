import React, { useState } from 'react';
import { X } from 'lucide-react';

interface PaymentModalProps {
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessStage: '',
    revenueScale: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real implementation, this would integrate with Razorpay
    // For now, we'll just simulate the payment flow
    alert('This would open the Razorpay payment gateway in a real implementation.');
    
    // Normally, you would:
    // 1. Send form data to your backend
    // 2. Backend would create a Razorpay order
    // 3. Return order ID to frontend
    // 4. Open Razorpay checkout with the order ID
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center">
            <div className="bg-orange-500 rounded-full p-2 mr-2">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold">Payment Details</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-4">
          <p className="text-gray-600 mb-4">
            Complete your purchase by providing your payment details.
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <h3 className="font-medium text-gray-700 mb-2">Billing information</h3>
              
              <div className="space-y-3">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                
                <div className="flex">
                  <div className="bg-gray-100 px-3 py-2 border border-gray-300 rounded-l-md flex items-center">
                    <span className="flex items-center">
                      <img src="https://flagcdn.com/w20/in.png" alt="India" className="mr-1" />
                      +91
                    </span>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    className="w-full px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                
                <div>
                  <select
                    name="businessStage"
                    value={formData.businessStage}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">What stage of trading you are at</option>
                    <option value="beginner">Beginner (0-1 year)</option>
                    <option value="intermediate">Intermediate (1-3 years)</option>
                    <option value="advanced">Advanced (3+ years)</option>
                  </select>
                </div>
                
                <div>
                  <select
                    name="revenueScale"
                    value={formData.revenueScale}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">What is your monthly trading capital</option>
                    <option value="small">₹10,000 - ₹50,000</option>
                    <option value="medium">₹50,000 - ₹2,00,000</option>
                    <option value="large">₹2,00,000+</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-700">Have a coupon?</h3>
                <button 
                  type="button"
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="border-t border-dashed border-gray-300 my-4 pt-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-gray-700">Service</h3>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">StockMastery Course</span>
                <div className="text-right">
                  <span className="text-gray-400 line-through text-sm">₹4,999</span>
                  <span className="text-gray-800 font-bold ml-2">₹99.00</span>
                </div>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-md transition-colors mt-4"
            >
              Proceed to pay ₹99.00
            </button>
            
            <div className="flex justify-center space-x-4 mt-4">
              <img src="https://razorpay.com/assets/razorpay-glyph.svg" alt="Razorpay" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png" alt="Visa" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1200px-UPI-Logo-vector.svg.png" alt="UPI" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/1200px-Paytm_Logo_%28standalone%29.svg.png" alt="Paytm" className="h-6" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;