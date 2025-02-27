import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Rahul Sharma",
      role: "Full-time Trader",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      content: "This course transformed my trading journey. I went from making random trades to having a solid strategy.",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "Investment Analyst",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      content: "The risk management techniques alone are worth the price. Highly recommended for serious traders.",
      rating: 5
    },
    {
      name: "Amit Kumar",
      role: "Part-time Trader",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      content: "Clear, concise, and practical. I'm now consistently profitable thanks to this course.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            What Our Students Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of successful traders who have transformed their trading career with StockMastery
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;