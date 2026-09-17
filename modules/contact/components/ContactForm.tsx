'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import Button from '@/components/Button';
import { FormInput } from './FormInput';
import { FormTextArea } from './FormTextArea';
import { ContactFormData } from '../../../types';
import { FormFields } from '../../../data/FormFields';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const submitData = new FormData(e.currentTarget);
      submitData.append('access_key', '1300f371-cc72-42a5-8b79-1023ed1b130e');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: submitData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          description: '',
        });
      } else {
        setErrorMessage(
          data.message || 'Something went wrong while submitting the form. Please try again.'
        );
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setErrorMessage('Network error. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setErrorMessage(null);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between">
      {isSubmitted ? (
        <div className="py-12 text-center space-y-6 my-auto">
          <div className="w-16 h-16 bg-orange-600/10 text-orange-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
            ✓
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">Message Sent Successfully!</h3>
            <p className="text-foreground/70 max-w-md mx-auto text-base">
              Thank you for reaching out. I&apos;ll get back to you as soon as possible!
            </p>
          </div>
          <Button label="Send another message" onClick={handleReset} className="mt-4" />
        </div>
      ) : (
        <form
          aria-label="Contact form"
          onSubmit={handleSubmit}
          className="space-y-6 md:space-y-8 flex flex-col justify-between h-full"
        >
          {/* Honeypot Spam Protection for Web3Forms */}
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

          {errorMessage && (
            <div
              role="alert"
              className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 text-sm flex items-center justify-between gap-3"
            >
              <span>{errorMessage}</span>
              <button
                type="button"
                onClick={() => setErrorMessage(null)}
                className="text-red-500 hover:text-red-700 font-bold ml-auto text-lg leading-none cursor-pointer"
                aria-label="Dismiss error"
              >
                &times;
              </button>
            </div>
          )}

          {FormFields.map((field) => (
            <FormInput
              key={field.id}
              id={field.id}
              name={field.name}
              required
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
            required
            label="Tell us a little more about your subject:"
            placeholder="Details about subject"
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
