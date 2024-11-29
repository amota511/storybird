import React from 'react';
import { Camera, Stars, Heart, BookOpen } from 'lucide-react';

const features = [
  {
    icon: <Camera className="h-8 w-8 text-green-600" />,
    title: "Their Face, Their Adventure",
    description: "Your child becomes the star of their own personalized story."
  },
  {
    icon: <Stars className="h-8 w-8 text-green-600" />,
    title: "Personalized Challenges",
    description: "Address specific situations like bedtime routines and sharing with siblings."
  },
  {
    icon: <Heart className="h-8 w-8 text-green-600" />,
    title: "Connect Through Stories",
    description: "Share magical moments with family, even when miles apart."
  },
  {
    icon: <BookOpen className="h-8 w-8 text-green-600" />,
    title: "Research-Backed Learning",
    description: "Stories designed with child development experts for maximum impact."
  }
];

export function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}