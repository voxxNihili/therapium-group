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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission
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
    // Show success message or redirect
  };

  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left: Image Section - Exactly 50% width */}
      <div className="w-full md:w-1/2 relative h-screen">
        <Image 
          src="/akis2.webp" 
          alt="Therapium Team Member" 
          fill
          className="object-cover"
          priority={true}
        />
      </div>

      {/* Right: Form Section - Exactly 50% width with padding */}
      <div className="w-full md:w-1/2 flex items-center justify-center h-auto md:h-screen overflow-y-auto">
        <div className="w-full max-w-2xl">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl text-[#191919] font-medium mb-3 font-lato">
              Dein erster Schritt zur Selbstständigkeit. <br/> Schicke uns deine Bewerbung!
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
                className="w-full px-0 py-2 border-b border-gray-300 focus:border-[#27557C] focus:outline-none text-primary font-bold bg-transparent"
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
                className="w-full px-0 py-2 border-b border-gray-300 focus:border-[#27557C] focus:outline-none text-primary font-bold bg-transparent"
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
                className="w-full px-0 py-2 border-b border-gray-300 focus:border-[#27557C] focus:outline-none text-primary font-bold bg-transparent"
                required
              />
            </div>

            {/* File Upload Buttons */}
            <div className="space-y-4 mt-10">
              {/* Lebenslauf */}
              <div>
                <label 
                  htmlFor="lebenslauf" 
                  className="flex items-center justify-center w-full py-3 border border-primary rounded-md cursor-pointer hover:bg-gray-50 transition group"
                >
                  <BiPaperclip className="text-[#FFD200] mr-2 text-xl" />
                  <span className="text-primary font-bold group-hover:text-gray-900">
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
                  className="flex items-center justify-center w-full py-3 border border-primary rounded-md cursor-pointer hover:bg-gray-50 transition group"
                >
                  <BiPaperclip className="text-[#FFD200] mr-2 text-xl" />
                  <span className="text-primary font-bold group-hover:text-gray-900">
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
              <div className="flex items-center h-5">
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
              <div className="ml-3 text-sm">
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
            <div className="mt-10">
              <button
                type="submit"
                className="w-full py-4 bg-[#FFD200] hover:bg-[#FFDA33] text-[#27557C] font-bold text-lg rounded-md transition duration-300"
                disabled={!formData.datenschutz}
              >
                Bewerbung absenden!
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm; 