import React, { useState } from 'react';
import { X, Shield } from 'lucide-react';

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface PaymentModalProps {
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // Load Razorpay SDK
  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const res = await loadRazorpay();
    
    if (!res) {
      alert('Razorpay SDK failed to load');
      return;
    }

    // Razorpay options
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: 99 * 100, // amount in paisa
      currency: "INR",
      name: "StockMastery",
      description: "StockMastery Course Purchase",
      image: "https://your-logo-url.png", // Add your logo URL
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
      },
      theme: {
        color: "#2563eb" // blue-600
      },
      handler: function(response: any) {
        // Handle successful payment
        console.log("Payment successful", response);
        
        // Show success message
        alert("Payment successful! You'll receive an email with course details.");
        
        // Close the modal
        onClose();
        
        // Optional: You can also redirect to a success page
        // window.location.href = '/success';
      },
      modal: {
        ondismiss: function() {
          // Handle modal dismiss
          console.log("Payment modal closed");
          // Don't close the form modal here as payment might have been cancelled
        },
        escape: true, // Allow closing with Esc key
        animation: true, // Enable animations
        backdropClose: false // Prevent closing on backdrop click during payment
      }
    };

    try {
      const razorpay = new window.Razorpay(options);
      razorpay.on('payment.failed', function(resp: any) {
        // Handle payment failure
        console.error('Payment failed:', resp.error);
        alert('Payment failed. Please try again.');
      });
      razorpay.open();
    } catch (error) {
      console.error('Payment error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-md relative">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Content */}
        <div className="p-6">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="bg-blue-50 inline-flex rounded-full p-2 mb-2">
              <Shield className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Secure Checkout</h3>
            <p className="text-sm text-gray-500">Your information is protected by 256-bit SSL encryption</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Personal Information */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 text-gray-500 text-sm">
                  +91
                </span>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 p-4 rounded-lg space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">StockMastery Course</span>
                <span className="text-gray-400 line-through">₹4,999</span>
              </div>
              <div className="flex justify-between font-medium">
                <span className="text-blue-600">Special Offer Price</span>
                <span className="text-blue-600">₹99</span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <span>Pay Securely</span>
              <Shield className="h-4 w-4" />
            </button>

            {/* Payment Methods */}
            <div className="flex justify-center space-x-4 pt-4 border-t">
              <img src="https://razorpay.com/assets/razorpay-glyph.svg" alt="Razorpay" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png" alt="Visa" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1200px-UPI-Logo-vector.svg.png" alt="UPI" className="h-6" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal; 