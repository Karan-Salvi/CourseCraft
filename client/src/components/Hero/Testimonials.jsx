import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "High School Teacher",
      school: "Lincoln High School",
      image:
        "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300",
      content:
        "CourseCraft has revolutionized how I deliver content to my students. The interactive features and analytics help me understand each student's progress better than ever before.",
      rating: 5,
    },
    {
      name: "Dr. Michael Chen",
      role: "University Professor",
      school: "Stanford University",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300",
      content:
        "The platform's flexibility allows me to create complex course structures while keeping the interface intuitive for students. It's the perfect balance of power and simplicity.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "Corporate Trainer",
      school: "TechCorp Solutions",
      image:
        "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=300",
      content:
        "We've seen a 40% increase in training completion rates since switching to CourseCraft. The gamification features keep our employees engaged throughout their learning journey.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Loved by educators worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of educators who have transformed their teaching
            experience with CourseCraft.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 shadow-xl">
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-full">
                <Quote className="h-8 w-8 text-white" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="text-center">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].content}"
              </p>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  )
                )}
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover shadow-lg"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 text-lg">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-blue-600 text-sm">
                    {testimonials[currentTestimonial].school}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200 text-gray-600 hover:text-blue-600"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200 text-gray-600 hover:text-blue-600"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentTestimonial
                    ? "bg-blue-600"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
            <div className="text-gray-600">Happy Educators</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">1M+</div>
            <div className="text-gray-600">Students Reached</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
            <div className="text-gray-600">Countries</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
