import React from "react";
import { Play, ArrowRight, Users, Award, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="lg:col-span-6">
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                <Award className="h-4 w-4 mr-2" />
                <span>Trusted by 50,000+ educators</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Transform Learning with
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {" "}
                  Modern LMS
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                Empower educators and engage learners with our intuitive
                learning management system. Create, deliver, and track
                educational content seamlessly.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to={"/course/search"}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <button className="bg-white text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all duration-200 flex items-center justify-center space-x-2">
                  <Play className="h-5 w-5" />
                  <span>Watch Demo</span>
                </button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50K+</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">1M+</div>
                  <div className="text-sm text-gray-600">Courses Created</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="relative">
              {/* Main Image */}
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Students learning online"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">2,847</div>
                    <div className="text-sm text-gray-600">Students Online</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">156</div>
                    <div className="text-sm text-gray-600">New Courses</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
