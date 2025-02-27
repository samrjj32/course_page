import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className={`w-full text-left p-4 rounded-lg flex justify-between items-center ${
                  openIndex === index ? 'bg-orange-50 border-l-4 border-orange-500' : 'bg-white'
                }`}
                onClick={() => toggleFaq(index)}
              >
                <span className="font-bold text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-orange-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="bg-white p-4 rounded-b-lg border-l-4 border-orange-500 mt-1">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg mb-6">Still have questions? We're here to help!</p>
          <a 
            href="mailto:support@stockmastery.com" 
            className="inline-flex items-center text-orange-500 hover:text-orange-600 font-bold"
          >
            Contact our support team
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;