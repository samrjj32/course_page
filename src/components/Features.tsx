import React from 'react';
import { 
  TrendingUp, 
  Shield, 
  Users, 
  Award, 
  BookOpen, 
  BarChart2,
  Target,
  Zap
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Professional Trading Strategies",
      description: "Learn proven strategies used by successful traders"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Master the art of protecting your capital"
    },
    {
      icon: BarChart2,
      title: "Technical Analysis",
      description: "Understand charts and market patterns"
    },
    {
      icon: Target,
      title: "Entry & Exit Mastery",
      description: "Perfect timing for maximum profits"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Material",
      description: "Detailed guides and resources"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join our trading community"
    },
    {
      icon: Zap,
      title: "Live Trading Sessions",
      description: "Watch experts trade in real-time"
    },
    {
      icon: Award,
      title: "Certification",
      description: "Earn your trading certificate"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive course provides all the tools and knowledge you need to become a successful trader
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;