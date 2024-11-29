import React from 'react';
import { X } from 'lucide-react';

interface SurveyModalProps {
  isOpen: boolean;
  onClose: () => void;
  step: 'initial' | 'survey' | 'confirmation';
}

export function SurveyModal({ isOpen, onClose, step }: SurveyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>

        {step === 'initial' && (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🎉 Special Early Access Available!
            </h3>
            <p className="text-gray-600 mb-6">
              Share your thoughts with us to receive exclusive early access pricing for StoryBird's launch. Help us create the perfect way for you to connect with your grandchildren.
            </p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('showSurvey'))}
              className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors"
            >
              Continue to Survey
            </button>
          </div>
        )}

        {step === 'survey' && (
          <div className="h-[600px]">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSe1TAG2uNIlA4kV9LQdyEjtFo6hmbDizijPYoaxWfpslvMXkQ/viewform?embedded=true"
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
            >
              Loading…
            </iframe>
          </div>
        )}

        {step === 'confirmation' && (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Thank You! 🌟
            </h3>
            <p className="text-gray-600 mb-4">
              We've received your valuable feedback. Watch your email for exclusive early access details to start creating magical stories with your grandchildren.
            </p>
            <button
              onClick={onClose}
              className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}