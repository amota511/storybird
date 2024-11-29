import React from 'react';

export function Testimonial() {
  return (
    <div className="bg-purple-50 py-16">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <img
          src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400"
          alt="Happy grandmother"
          className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
        />
        <blockquote className="text-xl md:text-2xl text-gray-700 mb-6">
          "Even though I live across the country, my grandchildren and I share special moments through our personalized stories. Their faces light up during our video calls when we read together!"
        </blockquote>
        <cite className="text-gray-600 not-italic">
          - Margaret B., Grandmother of three
        </cite>
      </div>
    </div>
  );
}