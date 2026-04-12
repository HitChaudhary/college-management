// src/components/Features.jsx
import React from 'react';

const Features = () => {
  const features = [
    {
      icon: 'fas fa-leaf',
      title: 'Fresh Ingredients',
      description: 'We use only the freshest, locally-sourced ingredients in all our pastries.',
      color: 'bg-green-400'
    },
    {
      icon: 'fas fa-clock',
      title: 'Timely Service',
      description: 'Your order is prepared and delivered exactly when you need it, every time.',
      color: 'bg-blue-400'
    },
    {
      icon: 'fas fa-heart',
      title: 'Made with Love',
      description: 'Each pastry is crafted with care and attention to detail that you can taste.',
      color: 'bg-red-400'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 text-lg">
            Discover what makes Timely Pastelito special and why our customers keep coming back for more.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out"
            >
              <div className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto`}>
                <i className={`${feature.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;