"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { BiPaperclip } from 'react-icons/bi';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefon: '',
    lebenslauf: null,
    motivationsschreiben: null,
    datenschutz: false
  });

  const [fileNames, setFileNames] = useState({
    lebenslauf: '',
    motivationsschreiben: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, [type]: file }));
      setFileNames(prev => ({ ...prev, [type]: file.name }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const mailData = new FormData();
      
      // Add form fields to FormData
      mailData.append('name', formData.name);
      mailData.append('email', formData.email);
      mailData.append('telefon', formData.telefon);
      
      // Add files if they exist - use same naming format as reference project
      if (formData.lebenslauf) {
        mailData.append('curriculumVitae', formData.lebenslauf);
      }
      
      if (formData.motivationsschreiben) {
        mailData.append('coverLetter', formData.motivationsschreiben);
      }
      
      // Send to the API endpoint
      const response = await fetch('/api/send-application', {
        method: 'POST',
        body: mailData,
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit application');
      }
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        telefon: '',
        lebenslauf: null,
        motivationsschreiben: null,
        datenschutz: false
      });
      
      setFileNames({
        lebenslauf: '',
        motivationsschreiben: ''
      });
      
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="application-form" className="w-full min-h-screen flex flex-col lg:flex-row bg-white">
      {/* Left: Image Section - Exactly 50% width on larger screens */}
      <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] lg:h-screen">
        <Image 
          src="/akis2.webp" 
          alt="Therapium Team Member" 
          fill
          sizes="(max-width: 1023px) 100vw, 50vw"
          className="object-cover object-center"
          priority={true}
        />
      </div>

      {/* Right: Form Section - Exactly 50% width with padding */}
      <div className="w-full lg:w-1/2 flex items-center justify-center h-auto lg:h-screen overflow-y-auto">
        <div className="w-full max-w-2xl px-6 md:px-10 lg:px-12 py-10 lg:py-0">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl text-[#191919] font-medium mb-3 font-lato">
              Dein erster Schritt zur Selbstständigkeit. <br className="hidden md:block"/> Schicke uns deine Bewerbung!
            </h2>
         
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full px-0 py-2 border-b border-gray-300 focus:border-[#27557C] focus:outline-none text-primary font-bold bg-transparent text-base md:text-lg"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-0 py-2 border-b border-gray-300 focus:border-[#27557C] focus:outline-none text-primary font-bold bg-transparent text-base md:text-lg"
                required
              />
            </div>

            {/* Telefon Field */}
            <div>
              <input
                type="tel"
                name="telefon"
                id="telefon"
                value={formData.telefon}
                onChange={handleChange}
                placeholder="Telefon"
                className="w-full px-0 py-2 border-b border-gray-300 focus:border-[#27557C] focus:outline-none text-primary font-bold bg-transparent text-base md:text-lg"
                required
              />
            </div>

            {/* File Upload Buttons */}
            <div className="space-y-4 mt-8">
              {/* Lebenslauf */}
              <div>
                <label 
                  htmlFor="lebenslauf" 
                  className="flex items-center justify-center w-full py-3 px-4 border border-primary rounded-md cursor-pointer hover:bg-gray-50 transition group text-sm md:text-base"
                >
                  <BiPaperclip className="text-[#FFD200] mr-2 text-lg md:text-xl flex-shrink-0" />
                  <span className="text-primary font-bold group-hover:text-gray-900 truncate">
                    {fileNames.lebenslauf || "Lebenslauf"}
                  </span>
                </label>
                <input
                  type="file"
                  name="lebenslauf"
                  id="lebenslauf"
                  onChange={(e) => handleFileChange(e, 'lebenslauf')}
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                />
              </div>

              {/* Motivationsschreiben */}
              <div>
                <label 
                  htmlFor="motivationsschreiben" 
                  className="flex items-center justify-center w-full py-3 px-4 border border-primary rounded-md cursor-pointer hover:bg-gray-50 transition group text-sm md:text-base"
                >
                  <BiPaperclip className="text-[#FFD200] mr-2 text-lg md:text-xl flex-shrink-0" />
                  <span className="text-primary font-bold group-hover:text-gray-900 truncate">
                    {fileNames.motivationsschreiben || "Motivationsschreiben"}
                  </span>
                </label>
                <input
                  type="file"
                  name="motivationsschreiben"
                  id="motivationsschreiben"
                  onChange={(e) => handleFileChange(e, 'motivationsschreiben')}
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                />
              </div>
            </div>

            {/* Datenschutz Checkbox */}
            <div className="flex items-start mt-8">
              <div className="flex items-center h-5 flex-shrink-0 mt-0.5">
                <input
                  type="checkbox"
                  name="datenschutz"
                  id="datenschutz"
                  checked={formData.datenschutz}
                  onChange={handleChange}
                  className="h-4 w-4 text-[#27557C] focus:ring-[#27557C] border-gray-300 rounded"
                  required
                />
              </div>
              <div className="ml-3 text-xs md:text-sm">
                <label htmlFor="datenschutz" className="text-[#A1A1A1] font-normal font-lato">
                  Ich stimme der Verarbeitung meiner Daten zum Zweck der Kontaktaufnahme gemäß der{' '}
                  <a href="/datenschutzerklärung" className="text-[#27557C] underline">
                    Datenschutzerklärung
                  </a>{' '}
                  zu.
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 md:mt-10">
              <button
                type="submit"
                className="w-full py-3 md:py-4 bg-[#FFD200] hover:bg-[#FFDA33] text-[#27557C] font-bold text-sm md:text-base lg:text-lg rounded-md transition duration-300"
                disabled={!formData.datenschutz || isSubmitting}
              >
                {isSubmitting ? 'Wird gesendet...' : 'Bewerbung absenden!'}
              </button>
              
              {submitStatus === 'success' && (
                <p className="mt-4 text-green-600 text-center">
                  Bewerbung erfolgreich gesendet!
                </p>
              )}
              
              {submitStatus === 'error' && (
                <p className="mt-4 text-red-600 text-center">
                  Es gab ein Problem beim Senden. Bitte versuchen Sie es später noch einmal.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm; 