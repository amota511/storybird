import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CallToActionProps {
  onGetStarted: () => void;
}

export function CallToAction({ onGetStarted }: CallToActionProps) {
  return (
    <div className="bg-green-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Create Lasting Memories?
        </h2>
        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
          Start sharing your love and wisdom through personalized stories that will be cherished for generations.
        </p>
        <button 
          onClick={onGetStarted}
          className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center gap-2"
        >
          Create Your Story Now
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}