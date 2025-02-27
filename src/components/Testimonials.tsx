import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Full-time Trader",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      quote: "StockMastery transformed my trading career. I went from inconsistent results to making ₹40,000+ per month following their simple strategies.",
      stars: 5
    },
    {
      name: "Priya Patel",
      role: "IT Professional & Part-time Trader",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      quote: "As someone with a full-time job, I was skeptical about trading. This course taught me how to trade efficiently in just 30 minutes a day. Now I'm making an extra ₹25,000 monthly!",
      stars: 5
    },
    {
      name: "Vikram Mehta",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      quote: "The risk management strategies alone were worth 10x the price. I've stopped making emotional trading decisions and my win rate has increased from 40% to 68%.",
      stars: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Success Stories</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          StockMastery is trusted by thousands of traders across India. Here's what some of our students have to say:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <div className="flex mt-1">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <Quote className="h-8 w-8 text-gray-200 absolute -top-4 -left-2" />
                <p className="text-gray-700 relative z-10 pl-2">{testimonial.quote}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-orange-600 mb-6">
            StockMastery is trusted by India's leading Traders and Investors!
          </h3>
          
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                name: "Rajesh Kumar",
                title: "SEBI Registered Analyst",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              },
              {
                name: "Anjali Desai",
                title: "Hedge Fund Manager",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
              },
              {
                name: "Sanjay Kapoor",
                title: "Options Trading Expert",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
              }
            ].map((expert, index) => (
              <div key={index} className="bg-orange-50 p-4 rounded-lg w-64">
                <img 
                  src={expert.image} 
                  alt={expert.name} 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-xl font-bold">{expert.name}</h4>
                <p className="text-orange-600 font-medium">{expert.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;