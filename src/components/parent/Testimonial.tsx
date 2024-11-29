import React from 'react';

export function Testimonial() {
  return (
    <div className="bg-purple-50 py-16">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <img
          src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400"
          alt="Happy parent"
          className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
        />
        <blockquote className="text-xl md:text-2xl text-gray-700 mb-6">
          "Seeing my daughter's face light up when she recognized herself in the story was priceless. Now she asks to read her special book every night!"
        </blockquote>
        <cite className="text-gray-600 not-italic">
          - Sarah M., Parent of a 4-year-old
        </cite>
      </div>
    </div>
  );
}