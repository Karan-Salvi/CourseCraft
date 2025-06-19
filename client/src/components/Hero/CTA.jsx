import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const CTA = () => {
  const benefits = [
    "No setup fees or hidden costs",
    "30-day free trial",
    "Cancel anytime",
    "24/7 customer support",
  ];

  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Header */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to transform your teaching?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of educators who have already made the switch to
            CourseCraft. Start your free trial today and see the difference in
            just minutes.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center justify-center md:justify-start space-x-3"
              >
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 shadow-lg hover:shadow-xl">
              <span>Start Free Trial</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200">
              Schedule Demo
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-blue-400">
            <p className="text-blue-100 mb-6">
              Trusted by leading institutions worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-white font-semibold text-lg">Stanford</div>
              <div className="text-white font-semibold text-lg">MIT</div>
              <div className="text-white font-semibold text-lg">Harvard</div>
              <div className="text-white font-semibold text-lg">Oxford</div>
              <div className="text-white font-semibold text-lg">Cambridge</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
