"use client";
import Image from "next/image";

export default function HeroEnver() {
  return (
    <section className="w-full h-screen bg-secondary my-16 py-8 relative items-center justify-center flex">
      <div className="w-[90%] ml-auto">
        <div className="bg-primary relative">
          <div className="flex flex-col md:flex-row items-center justify-evenly gap-8">
            {/* Left: Content */}
            <div className="w-full md:w-1/3 text-white p-4 md:px-8 items-center">
              <h2 className="text-lg sm:text-xl md:text-2xl font-light text-[#A1A1A1] mb-4 sm:mb-6">
                Gründer & Multiunternehmer
              </h2>

              <div className="mb-6 sm:mb-8">
                <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                  Als erfahrener Physiotherapeut und Unternehmer hat{" "}
                  <span className="font-bold">Enver Pinarbasi</span> mit THERAPIUM
                  ein erfolgreiches Konzept entwickelt, das Physiotherapeuten den Weg
                  in die Selbstständigkeit erleichtert. Sein Wissen und seine Erfahrungen
                  teilt er in einer exklusiven Podcast-Folge – Jetzt reinhören!
                </p>
              </div>

              {/* Play Button */}
              <a 
                href="https://podcasts.apple.com/de/podcast/13-enver-pinarbasi-gr%C3%BCnder-von-therapium/id1677170075?i=1000635806856"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FBDB12] text-[#27557C] rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center font-medium text-sm sm:text-base hover:bg-opacity-90 transition-all"
              >
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286l-11.54 6.347c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                      clipRule="evenodd"
                    />
                  </svg>
                  play
                </span>
              </a>
            </div>

            {/* Right: Image */}
            <div className="w-full md:w-1/2 relative pr-0 md:pr-4 md:-translate-y-23">
              <Image 
                src="/enver-group.webp" 
                alt="Enver Pinarbasi" 
                width={600} 
                height={700} 
                className="w-[80%] md:w-full h-auto max-w-[350px] md:max-w-[600px] mx-auto pb-4 md:pb-0" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
