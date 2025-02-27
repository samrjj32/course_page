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

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Course Curriculum</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Master the art of trading with our comprehensive curriculum
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {modules.map((module, index) => (
            <div 
              key={index}
              className="mb-6 bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              {/* Module Header */}
              <div className="bg-gray-50 p-6 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 rounded-lg p-2">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{module.title}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-500">{module.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module Content */}
              <div className="p-6">
                <p className="text-gray-600">{module.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;