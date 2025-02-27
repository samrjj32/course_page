import React from 'react';
import { BookOpen, Clock, Calendar, CheckCircle } from 'lucide-react';

const CourseDetails: React.FC = () => {
  const modules = [
    {
      title: "Module 1: Trading Foundations",
      description: "Understand market structure, key terminology, and the psychology of successful traders.",
      duration: "45 minutes"
    },
    {
      title: "Module 2: Technical Analysis Deep Dive",
      description: "Master chart patterns, indicators, and price action techniques that signal profitable trades.",
      duration: "60 minutes"
    },
    {
      title: "Module 3: High-Probability Trading Setups",
      description: "Learn specific entry and exit strategies for consistent profits in any market condition.",
      duration: "45 minutes"
    },
    {
      title: "Module 4: Risk Management & Position Sizing",
      description: "Develop a robust risk management framework to protect your capital and maximize returns.",
      duration: "30 minutes"
    }
  ];

  const bonuses = [
    {
      title: "Trading Journal Template",
      value: "₹1,999",
      description: "Track your trades and improve your performance with our premium trading journal."
    },
    {
      title: "Market Scanner Cheat Sheet",
      value: "₹2,499",
      description: "Quickly identify the best trading opportunities with our proprietary scanning method."
    },
    {
      title: "1-Month Access to Trading Community",
      value: "₹4,999",
      description: "Join our exclusive community of traders for ongoing support and daily market insights."
    }
  ];

  return (
    <section id="course-details" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Course Curriculum</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <BookOpen className="mr-2 text-orange-500" /> 
              Course Modules
            </h3>
            
            <div className="space-y-6">
              {modules.map((module, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-2">{module.title}</h4>
                  <p className="text-gray-600 mb-3">{module.description}</p>
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{module.duration}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-4 flex items-center">
                <Calendar className="mr-2 text-orange-500" />
                Course Schedule
              </h4>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span><strong>Date:</strong> 15 June 2025 (Saturday)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span><strong>Time:</strong> 7:00 PM to 10:00 PM (IST)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span><strong>Platform:</strong> Zoom (link will be shared after registration)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span><strong>Recording:</strong> Available for 30 days after the live session</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              {/* <Gift className="mr-2 text-orange-500" />  */}
              Exclusive Bonuses (Worth ₹9,497)
            </h3>
            
            <div className="space-y-6">
              {bonuses.map((bonus, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold">{bonus.title}</h4>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm font-bold">
                      Value: {bonus.value}
                    </span>
                  </div>
                  <p className="text-gray-600">{bonus.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h4 className="text-xl font-bold mb-4 text-orange-600">Why This Price Is Insane</h4>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Private trading coaching typically costs ₹25,000+</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Similar online courses sell for ₹15,000 to ₹20,000</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>The bonuses alone are worth more than the course fee</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Just one successful trade can pay for the entire investment</span>
                </li>
              </ul>
              
              <div className="mt-6 text-center">
                <p className="text-lg font-bold mb-2">Regular Price: <span className="line-through">₹4,999</span></p>
                <p className="text-2xl font-bold text-orange-600">Today's Special Price: ₹99 only!</p>
                <p className="text-sm text-gray-500 mt-1">Limited time offer - Price will increase soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;