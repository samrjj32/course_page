import React from 'react';
import { TrendingUp, BarChart2, Clock, BookOpen, Award, Users } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <TrendingUp className="h-10 w-10 text-orange-500" />,
      title: "Proven Trading Strategies",
      description: "Learn time-tested strategies that have helped thousands of traders generate consistent profits."
    },
    {
      icon: <BarChart2 className="h-10 w-10 text-orange-500" />,
      title: "Technical Analysis Mastery",
      description: "Understand chart patterns, indicators, and setups that signal high-probability trading opportunities."
    },
    {
      icon: <Clock className="h-10 w-10 text-orange-500" />,
      title: "Time-Efficient Trading",
      description: "Learn how to analyze markets and execute trades in just 30 minutes a day."
    },
    {
      icon: <BookOpen className="h-10 w-10 text-orange-500" />,
      title: "Comprehensive Resources",
      description: "Get access to trading templates, checklists, and exclusive educational materials."
    },
    {
      icon: <Award className="h-10 w-10 text-orange-500" />,
      title: "Risk Management Expertise",
      description: "Master the art of preserving capital while maximizing returns through proper position sizing."
    },
    {
      icon: <Users className="h-10 w-10 text-orange-500" />,
      title: "Community Support",
      description: "Join a community of like-minded traders for ongoing support and knowledge sharing."
    }
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose StockMastery?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-orange-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-center text-orange-600 mb-6">
            StockMastery is for you if you want to:
          </h3>
          
          <div className="space-y-4">
            {[
              "Launch your trading career in record time",
              "Generate consistent monthly income from the markets",
              "Learn to identify high-probability trading setups",
              "Develop a disciplined trading psychology",
              "Build a sustainable trading business with minimal time investment",
              "Avoid common mistakes that cause 90% of traders to fail"
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="bg-green-500 rounded-full p-1 mt-1 flex-shrink-0">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;