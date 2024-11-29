import React from 'react';
import { Sparkles } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export function Hero({ onGetStarted }: HeroProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <Sparkles className="h-12 w-12 mx-auto mb-6 text-green-600" />
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Personalized{' '}
          <span className="text-green-600">Children's Books</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
          Transform their real moments into magical stories. Personalized books featuring their face, their challenges, and their victories.
        </p>
        <button 
          onClick={onGetStarted}
          className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg"
        >
          Create Their Story
        </button>
      </div>
    </div>
  );
}