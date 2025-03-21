"use client";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { useEffect, useState } from "react";

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Show button when page is scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <footer className="bg-secondary text-white">
      <div className="relative">
        <button onClick={scrollToTop} className={`absolute right-4 md:right-0 top-4 transform transition-opacity duration-300 ${showScrollButton ? "opacity-100" : "opacity-0"}`} aria-label="Scroll to top">
          <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="27.5" cy="27.5" r="27.5" transform="rotate(-180 27.5 27.5)" fill="#FBDB12" />
            <rect width="32" height="32" transform="translate(12 43) rotate(-90)" fill="#FBDB12" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.4 23.3584L19.9011 24.8522L27.3286 17.4596L27.3286 40.5996L29.4715 40.5996L29.4715 17.4624L36.8989 24.8522L38.4 23.3584L29.9 14.8999L29.9085 14.8934L28.4074 13.3996L18.4 23.3584Z"
              fill="#27557C"
            />
          </svg>
        </button>
      </div>
      <Container maxWidth="max-w-[95%] lg:max-w-[90%]">
        {/* Main footer section */}
        <div className="py-8 md:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Left section - Logo and social icons */}
          <div className="flex flex-col items-start justify-between">
            <Link href="/" className="mb-4 md:mb-6">
              <Image src="/therapium-logo-white.png" alt="Therapium Group" width={220} height={50} className="h-10 md:h-12 w-auto" />
            </Link>
            <div className="flex space-x-4 mt-3 md:mt-4">
              <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <div className="w-8 h-8 flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="#FBDB12" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </Link>
              <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <div className="w-8 h-8 flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="#FBDB12" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </Link>
              <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <div className="w-8 h-8 flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="#FBDB12" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col justify-start sm:justify-end order-3 sm:order-2 lg:order-2 mt-6 sm:mt-0">
            <div className="flex flex-col space-y-3">
              <Link href="/impressum" className="text-sm hover:text-yellow-400 transition-colors">
                Impressum
              </Link>{" "}
            </div>
          </div>
          
          {/* Middle section - Navigation links */}
          <div className="flex flex-col order-2 sm:order-1 lg:order-3">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="hover:text-yellow-400 transition-colors">
                Home
              </Link>
              <Link href="/uber-uns" className="hover:text-yellow-400 transition-colors">
                Über uns
              </Link>
              <Link href="/erfolgsgeschichten" className="hover:text-yellow-400 transition-colors">
                Erfolgsgeschichten
              </Link>
              <Link href="/benefits" className="hover:text-yellow-400 transition-colors">
                Deine Benefits
              </Link>
              <Link href="/kontakt" className="hover:text-yellow-400 transition-colors">
                Kontakt
              </Link>
            </div>

            {/* Adding the legal links below navigation with space above */}
            <div className="mt-auto pt-6 md:pt-12">
              <div className="flex space-x-6">
                <Link href="/datenschutz" className="text-sm hover:text-yellow-400 transition-colors">
                  Datenschutz
                </Link>
              </div>
            </div>
          </div>

          {/* Right section - Text content */}
          <div className="flex flex-col sm:text-right order-4 mt-6 sm:mt-0">
            <p className="text-xl md:text-2xl font-medium mb-3">
              Lerne unsere Praxen kennen.
              <br /> Auf THERAPIUM lernst du noch mehr über uns kennen!
            </p>
            <p className="mb-4 md:mb-6"></p>
            <Link href="https://therapium.de" className="text-yellow-400 flex sm:justify-end group">
              ZU THERAPIUM
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="#FBDB12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            {/* Copyright text at the bottom of the right section */}
            <div className="mt-auto pt-6 md:pt-12">
              <div className="text-sm text-white/[0.36]">THERAPIUM © {new Date().getFullYear()} All Rights reserved</div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
