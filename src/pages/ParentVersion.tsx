import React, { useState } from 'react';
import { Navbar } from '../components/parent/Navbar';
import { Hero } from '../components/parent/Hero';
import { Features } from '../components/parent/Features';
import { CallToAction } from '../components/parent/CallToAction';
import { SurveyModal } from '../components/shared/SurveyModal';

export default function ParentVersion() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [surveyStep, setSurveyStep] = useState<'initial' | 'survey' | 'confirmation'>('initial');

  const handleGetStarted = () => {
    setIsModalOpen(true);
    setSurveyStep('initial');
  };

  React.useEffect(() => {
    const handleSurveyShow = () => {
      setSurveyStep('survey');
    };

    const handleSurveySubmit = () => {
      setSurveyStep('confirmation');
    };

    window.addEventListener('showSurvey', handleSurveyShow);
    window.addEventListener('surveySubmitted', handleSurveySubmit);

    return () => {
      window.removeEventListener('showSurvey', handleSurveyShow);
      window.removeEventListener('surveySubmitted', handleSurveySubmit);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar onGetStarted={handleGetStarted} />
      <main>
        <Hero onGetStarted={handleGetStarted} />
        <Features />
        <CallToAction onGetStarted={handleGetStarted} />
      </main>
      <footer className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          © 2024 StoryBird. All rights reserved.
        </div>
      </footer>
      <SurveyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        step={surveyStep}
        variant="parent"
      />
    </div>
  );
}