'use client';

import { useState } from 'react';
import Button from '@/components/Button';
import { FormInput } from './FormInput';
import { FormTextArea } from './FormTextArea';
import { FormData } from '../../../types';
import { FormFields } from '../../../data/FormFields';

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate async submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        description: '',
      });
    }, 1000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between">
      {isSubmitted ? (
        <div className="py-12 text-center space-y-6 my-auto">
          <div className="w-16 h-16 bg-orange-600/10 text-orange-600 rounded-full flex items-center justify-center mx-auto text-2xl">
            ✓
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">Message Sent!</h3>
            <p className="text-foreground/70 max-w-md mx-auto text-base">
              Thank you for reaching out. I&apos;ll get back to you as soon as possible!
            </p>
          </div>
          <Button label="Send another message" onClick={handleReset} className="mt-4" />
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-6 md:space-y-8 flex flex-col justify-between h-full"
        >
          {FormFields.map((field) => (
            <FormInput
              key={field.id}
              id={field.id}
              name={field.name}
              type={field.type}
              label={field.label}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={handleChange}
            />
          ))}

          <FormTextArea
            id="description"
            name="description"
            label="Tell us a little more about your project:"
            placeholder="Project beschrijving"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            className="flex-1 flex flex-col justify-end"
          />

          {/* Submit Button */}
          <div className="pt-2 flex justify-start">
            <Button
              type="submit"
              disabled={isSubmitting}
              label={isSubmitting ? 'Sending...' : 'Send Message'}
            />
          </div>
        </form>
      )}
    </div>
  );
}
