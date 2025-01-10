import React from 'react';
import { Truck, Award, Clock, Shield } from 'lucide-react';

const features = [
  {
    icon: <Truck className="h-8 w-8" />,
    title: 'Free Delivery',
    description: 'Complimentary white glove delivery service'
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: 'Quality Guarantee',
    description: '10-year warranty on all our products'
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: '100 Night Trial',
    description: 'Try our beds for 100 nights risk-free'
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Expert Craftsmanship',
    description: 'Handmade by skilled artisans'
  }
];

const WhyChooseUs = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-12">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center items-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;