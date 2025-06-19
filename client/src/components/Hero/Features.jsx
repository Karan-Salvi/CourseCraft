import React from 'react';
import { 
  BookOpen, 
  Users, 
  BarChart3, 
  Video, 
  FileText, 
  Shield,
  Clock,
  Trophy,
  MessageSquare
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Course Creation',
      description: 'Build engaging courses with our intuitive drag-and-drop editor. Add videos, quizzes, and interactive content effortlessly.'
    },
    {
      icon: Users,
      title: 'Student Management',
      description: 'Organize students into groups, track progress, and manage enrollments with powerful administrative tools.'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Get detailed insights into student performance, course effectiveness, and engagement metrics.'
    },
    {
      icon: Video,
      title: 'Video Streaming',
      description: 'Host and stream high-quality video content with built-in player controls and adaptive bitrate streaming.'
    },
    {
      icon: FileText,
      title: 'Assessment Tools',
      description: 'Create quizzes, assignments, and assessments with automated grading and detailed feedback options.'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Enterprise-grade security with data encryption, GDPR compliance, and role-based access control.'
    },
    {
      icon: Clock,
      title: 'Progress Tracking',
      description: 'Monitor student progress in real-time with detailed completion rates and performance analytics.'
    },
    {
      icon: Trophy,
      title: 'Gamification',
      description: 'Boost engagement with badges, leaderboards, and achievement systems that motivate learners.'
    },
    {
      icon: MessageSquare,
      title: 'Communication',
      description: 'Foster collaboration with discussion forums, messaging, and real-time chat capabilities.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to teach and learn
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools educators and learners need 
            for successful online education experiences.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200"
              >
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                  <Icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;