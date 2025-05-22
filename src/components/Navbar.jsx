'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isBlueDesign, setIsBlueDesign] = useState(true);
  const observerRef = useRef(null);

  // Use useEffect to handle client-side rendering
  useEffect(() => {
    setMounted(true);

    function onScroll() {
      if (typeof window === 'undefined') return;
      const sections = Array.from(document.querySelectorAll('[id^="section-"]'));
      const scrollY = window.scrollY;
      const offset = 80; // adjust for navbar height if needed
      let activeIndex = 0;
      for (let i = 0; i < sections.length; i++) {
        const rect = sections[i].getBoundingClientRect();
        if (rect.top - offset <= 0) {
          activeIndex = i;
        }
      }
      console.log('Active section:', activeIndex, sections[activeIndex]?.id);
      if (activeIndex === sections.length - 1) {
        setIsBlueDesign((activeIndex - 1) % 2 !== 0);
      } else {
        setIsBlueDesign(activeIndex % 2 === 0);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    // Run once on mount
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Function to scroll to ApplicationForm component
  const scrollToApplicationForm = (e) => {
    e.preventDefault();
    const applicationForm = document.getElementById('application-form');
    if (applicationForm) {
      applicationForm.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu if open
    }
  };

  // Dynamic classes based on current design
  const navBgClass = isBlueDesign ? 'bg-[#27557C]' : 'bg-white';
  const textClass = isBlueDesign ? 'text-white' : 'text-gray-700';
  const textHoverClass = isBlueDesign ? 'hover:text-[#FBDB12]' : 'hover:text-[#2d6c9b]';
  const logoSrc = isBlueDesign ? "/therapium-logo-white.png" : "/therapium-group-logo.png";
  const buttonBgClass = 'bg-[#FBDB12] text-gray-900 ' + (isBlueDesign ? 'hover:bg-white' : 'hover:bg-[#27557C] hover:text-white');
  const mobileButtonClass = isBlueDesign ? 'text-white hover:text-gray-200 hover:bg-[#2d6c9b]' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100 ';
  const mobileMenuBgClass = isBlueDesign ? 'bg-[#27557C]' : 'bg-white';

  return (
    <nav className={`${navBgClass} shadow-sm fixed w-full z-999 transition-colors duration-300`}>
      <div className=" mx-auto px-5 sm:px-6 lg:px-[48px]">
        <div className="flex justify-between h-[100px]">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src={logoSrc}
                alt="Therapium Group"
                width={260}
                height={45}
                className="h-11 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/uber-uns" className={`${textClass} ${textHoverClass} px-3 py-2 text-base font-medium transition-colors duration-300`}>
              Über uns
            </Link>
            <Link href="/erfolge" className={`${textClass} ${textHoverClass} px-3 py-2 text-base font-medium transition-colors duration-300`}>
              Erfolge
            </Link>
            <Link href="/benefits" className={`${textClass} ${textHoverClass} px-3 py-2 text-base font-medium transition-colors duration-300`}>
              Benefits
            </Link>
            <Link href="/kontakt" className={`${textClass} ${textHoverClass} px-3 py-2 text-base font-medium transition-colors duration-300`}>
              Kontakt
            </Link>
            <a
              href="#application-form"
              onClick={scrollToApplicationForm}
              className={`${buttonBgClass} px-9 py-[14px] text-sm font-medium transition-colors duration-300 cursor-pointer`}
            >
              Leader werden
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${mobileButtonClass} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2d6c9b] transition-colors duration-300`}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - Only render on client side */}
      {mounted && (
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden ${mobileMenuBgClass} transition-colors duration-300`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/uber-uns" className={`block ${textClass} ${textHoverClass} px-3 py-2 text-base font-medium transition-colors duration-300`}>
              Über uns
            </Link>
            <Link href="/erfolge" className={`block ${textClass} ${textHoverClass} px-3 py-2 text-base font-medium transition-colors duration-300`}>
              Erfolge
            </Link>
            <Link href="/benefits" className={`block ${textClass} ${textHoverClass} px-3 py-2 text-base font-medium transition-colors duration-300`}>
              Benefits
            </Link>
            <Link href="/kontakt" className={`block ${textClass} ${textHoverClass} px-3 py-2 text-base font-medium transition-colors duration-300`}>
              Kontakt
            </Link>
            <a
              href="#application-form"
              onClick={scrollToApplicationForm}
              className={`block ${buttonBgClass} px-4 py-2 rounded-md text-base font-medium transition-colors duration-300 mt-4 cursor-pointer`}
            >
              Leader werden
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 