'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Use useEffect to handle client-side rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src="/therapium-group-logo.png"
                alt="Therapium Group"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/uber-uns" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Über uns
            </Link>
            <Link href="/erfolge" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Erfolge
            </Link>
            <Link href="/benefits" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Benefits
            </Link>
            <Link href="/kontakt" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Kontakt
            </Link>
            <Link
              href="/leader-werden"
              className="bg-[#FBDB12]  hover:bg-yellow-500 text-gray-900 px-4 py-2  text-sm font-medium transition-colors duration-200"
            >
              Leader werden
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
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
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/uber-uns" className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium">
              Über uns
            </Link>
            <Link href="/erfolge" className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium">
              Erfolge
            </Link>
            <Link href="/benefits" className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium">
              Benefits
            </Link>
            <Link href="/kontakt" className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium">
              Kontakt
            </Link>
            <Link
              href="/leader-werden"
              className="block bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md text-base font-medium transition-colors duration-200 mt-4"
            >
              Leader werden
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 