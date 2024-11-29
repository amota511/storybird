import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const surveySchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  childAge: z.string().min(1, 'Please select your child\'s age'),
  motivation: z.string().min(1, 'Please select what would make you most likely to try StoryBird'),
  format: z.string().min(1, 'Please select your preferred format'),
  challenges: z.array(z.string()).min(1, 'Please select at least one challenge'),
  familyInclusion: z.string().min(1, 'Please select how likely you would be to purchase with family inclusion'),
});

type SurveyData = z.infer<typeof surveySchema>;

const ageRanges = [
  'Under 2 years',
  '2-3 years',
  '4-5 years',
  '6-7 years',
  '8-9 years',
  '10+ years'
];

const motivationOptions = [
  'Seeing real photo examples',
  'Recommendation from other parents',
  'Money-back guarantee',
  'Free trial story',
  'Affordable price point'
];

const challengeOptions = [
  'Bedtime routine',
  'Sharing with siblings',
  'Starting school',
  'Making friends',
  'Managing emotions',
  'Following rules'
];

const formatOptions = [
  'Physical',
  'Digital',
  'Both',
  'No preference'
];

const familyInclusionOptions = [
  'Much more likely',
  'Somewhat more likely',
  'No difference',
  'Less likely'
];

interface SurveyFormProps {
  onSubmitSuccess: () => void;
}

export function SurveyForm({ onSubmitSuccess }: SurveyFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<SurveyData>({
    resolver: zodResolver(surveySchema)
  });

  const onSubmit = async (data: SurveyData) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          formData.append(key, value.join(', '));
        } else {
          formData.append(key, value);
        }
      });

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        onSubmitSuccess();
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your response. Please try again.');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="space-y-6"
      data-netlify="true"
      name="storybird-survey"
      method="POST"
    >
      <input type="hidden" name="form-name" value="storybird-survey" />
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Address *
        </label>
        <input
          type="email"
          {...register('email')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Child's Age Range *
        </label>
        <select
          {...register('childAge')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="">Select age range</option>
          {ageRanges.map(age => (
            <option key={age} value={age}>{age}</option>
          ))}
        </select>
        {errors.childAge && (
          <p className="mt-1 text-sm text-red-600">{errors.childAge.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          What would make you most likely to try StoryBird? *
        </label>
        <select
          {...register('motivation')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="">Select option</option>
          {motivationOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        {errors.motivation && (
          <p className="mt-1 text-sm text-red-600">{errors.motivation.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Which challenges would you like help addressing? *
        </label>
        <div className="space-y-2">
          {challengeOptions.map(challenge => (
            <label key={challenge} className="flex items-center">
              <input
                type="checkbox"
                value={challenge}
                {...register('challenges')}
                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <span className="ml-2">{challenge}</span>
            </label>
          ))}
        </div>
        {errors.challenges && (
          <p className="mt-1 text-sm text-red-600">{errors.challenges.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Would you prefer a physical or digital copy of the book? *
        </label>
        <select
          {...register('format')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="">Select format</option>
          {formatOptions.map(format => (
            <option key={format} value={format}>{format}</option>
          ))}
        </select>
        {errors.format && (
          <p className="mt-1 text-sm text-red-600">{errors.format.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Would the ability to include family members in the story make you more likely to purchase? *
        </label>
        <select
          {...register('familyInclusion')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="">Select option</option>
          {familyInclusionOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        {errors.familyInclusion && (
          <p className="mt-1 text-sm text-red-600">{errors.familyInclusion.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Survey'}
      </button>
    </form>
  );
}