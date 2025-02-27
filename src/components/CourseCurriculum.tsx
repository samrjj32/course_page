import React from 'react';
import { BookOpen, Clock, PlayCircle, FileText, Check } from 'lucide-react';

interface Module {
  title: string;
  duration: string;
  lessons: {
    title: string;
    type: 'video' | 'pdf' | 'quiz';
    duration?: string;
  }[];
}

const CourseCurriculum: React.FC = () => {
  const modules: Module[] = [
    {
      title: "Module 1: Foundation of Trading",
      duration: "45 mins",
      lessons: [
        {
          title: "Understanding Market Basics",
          type: "video",
          duration: "15 mins"
        },
        {
          title: "Types of Trading Styles",
          type: "video",
          duration: "20 mins"
        },
        {
          title: "Module 1 Resources",
          type: "pdf"
        }
      ]
    },
    {
      title: "Module 2: Technical Analysis",
      duration: "60 mins",
      lessons: [
        {
          title: "Chart Patterns & Indicators",
          type: "video",
          duration: "25 mins"
        },
        {
          title: "Support & Resistance",
          type: "video",
          duration: "20 mins"
        },
        {
          title: "Technical Analysis Workbook",
          type: "pdf"
        }
      ]
    },
    {
      title: "Module 3: Risk Management",
      duration: "45 mins",
      lessons: [
        {
          title: "Position Sizing",
          type: "video",
          duration: "15 mins"
        },
        {
          title: "Stop Loss Strategies",
          type: "video",
          duration: "20 mins"
        },
        {
          title: "Risk Calculator Tool",
          type: "pdf"
        }
      ]
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <PlayCircle className="h-4 w-4 text-blue-600" />;
      case 'pdf':
        return <FileText className="h-4 w-4 text-blue-600" />;
      case 'quiz':
        return <Check className="h-4 w-4 text-blue-600" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Course Curriculum
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive program designed to take you from basics to advanced trading concepts
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

              {/* Module Lessons */}
              <div className="divide-y divide-gray-100">
                {module.lessons.map((lesson, lessonIndex) => (
                  <div 
                    key={lessonIndex}
                    className="p-4 hover:bg-gray-50 transition-colors flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      {getIcon(lesson.type)}
                      <span className="text-gray-700">{lesson.title}</span>
                    </div>
                    {lesson.duration && (
                      <span className="text-sm text-gray-500">{lesson.duration}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Course Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            {[
              { number: "3", label: "Hours of Content" },
              { number: "12+", label: "Practice Exercises" },
              { number: "24/7", label: "Support Access" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-blue-50 rounded-lg p-4 text-center"
              >
                <div className="text-2xl font-bold text-blue-600 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCurriculum; 