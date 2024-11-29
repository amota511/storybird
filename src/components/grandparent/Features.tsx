import React from 'react';
import { Heart, Camera, BookOpen, Stars } from 'lucide-react';

const features = [
  {
    icon: <Camera className="h-8 w-8 text-green-600" />,
    title: "Your Special Moments Together",
    description: "Turn your cherished photos with your grandchildren into heartwarming stories they'll love."
  },
  {
    icon: <Stars className="h-8 w-8 text-green-600" />,
    title: "Stay Connected From Afar",
    description: "Share love and wisdom through personalized stories, no matter the distance between you."
  },
  {
    icon: <Heart className="h-8 w-8 text-green-600" />,
    title: "Build Lasting Bonds",
    description: "Create deeper connections through stories that feature both you and your grandchildren."
  },
  {
    icon: <BookOpen className="h-8 w-8 text-green-600" />,
    title: "Leave a Legacy of Love",
    description: "Share your values and family traditions in stories they'll treasure for generations."
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