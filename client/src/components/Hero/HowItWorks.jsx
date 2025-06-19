import React from "react";
import { Upload, Settings, Users, BarChart3 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: Upload,
      title: "Create Your Course",
      description:
        "Upload your content, organize lessons, and customize your course structure with our intuitive editor.",
    },
    {
      step: "02",
      icon: Settings,
      title: "Configure Settings",
      description:
        "Set up enrollment options, pricing, access controls, and customize the learning experience.",
    },
    {
      step: "03",
      icon: Users,
      title: "Invite Students",
      description:
        "Share your course with students through direct invites, enrollment codes, or public listings.",
    },
    {
      step: "04",
      icon: BarChart3,
      title: "Track Progress",
      description:
        "Monitor student engagement, completion rates, and performance with detailed analytics.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How CourseCraft Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in minutes with our simple four-step process. From
            course creation to student success tracking.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-32 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="h-0.5 bg-gradient-to-r from-blue-200 via-indigo-200 to-blue-200"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xl font-bold rounded-full mb-6 relative z-10">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-6">
                    <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Image */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <img
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Students collaborating"
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
