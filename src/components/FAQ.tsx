import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "Is this course suitable for complete beginners?",
      answer: "Absolutely! The course is designed to take you from the basics to advanced trading concepts. We start with fundamentals and gradually build up to more complex strategies."
    },
    {
      question: "How much time do I need to dedicate to trading after taking this course?",
      answer: "Our strategies are designed for busy professionals. You'll learn how to analyze markets and execute trades in as little as 30 minutes per day. Many of our students trade part-time while maintaining their full-time jobs."
    },
    {
      question: "Do I need a large capital to start trading?",
      answer: "No, you can start with as little as ₹10,000. We teach proper position sizing and risk management to help you grow your account steadily, regardless of your starting capital."
    },
    {
      question: "Will I get support after the course ends?",
      answer: "Yes! You'll get 1-month access to our trading community where you can ask questions, share ideas, and get feedback on your trades. This is included in your course fee."
    },
    {
      question: "What if I can't attend the live session?",
      answer: "No worries! The entire session will be recorded and available for you to watch for 30 days after the event. You'll also have access to all course materials and bonuses."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes, we offer a 7-day money-back guarantee. If you're not satisfied with the course content, simply email us within 7 days of purchase and we'll process your refund, no questions asked."
    }
  ];
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about the course and trading journey
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl overflow-hidden transition-all duration-200 ${
                openIndex === index ? 'shadow-lg' : 'shadow-sm'
              }`}
            >
              <button
                className={`w-full text-left p-6 flex justify-between items-center space-x-4 ${
                  openIndex === index ? 'bg-blue-50' : 'hover:bg-gray-50'
                }`}
                onClick={() => toggleFaq(index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <span className={`flex-shrink-0 ${openIndex === index ? 'text-blue-600' : 'text-gray-400'}`}>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </span>
              </button>
              
              <div 
                className={`transition-all duration-200 ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center space-x-2 text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
            <MessageCircle className="h-5 w-5" />
            <span className="font-medium">Still have questions?</span>
          </div>
          <p className="mt-2 text-gray-600">
            Email us at{' '}
            <a 
              href="mailto:support@stockmastery.com" 
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              support@stockmastery.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;