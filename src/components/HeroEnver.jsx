"use client";
import Image from "next/image";

export default function HeroEnver() {
  return (
    <section className="w-full min-h-screen bg-secondary py-16 flex items-center justify-center">
      <div className="w-[90%] max-w-6xl mx-auto">
        <div className="bg-primary shadow-lg flex flex-col md:flex-row items-center justify-between p-8 md:p-12">
          {/* Left: Content */}
          <div className="w-full md:w-1/2 text-white flex flex-col justify-center items-start mb-8 md:mb-0 md:mr-8">
            <h2 className="text-xl md:text-2xl font-light mb-4">Gründer & Multiunternehmer</h2>
            <p className="text-white text-base md:text-lg leading-relaxed mb-6">
              Als erfahrener Physiotherapeut und Unternehmer hat{" "}
              <span className="font-bold">Enver Pinarbasi</span> mit THERAPIUM
              ein erfolgreiches Konzept entwickelt, das Physiotherapeuten den Weg
              in die Selbstständigkeit erleichtert. Sein Wissen und seine Erfahrungen
              teilt er in einer exklusiven Podcast-Folge – Jetzt reinhören!
            </p>
            {/* Play Button */}
            <a 
              href="https://podcasts.apple.com/de/podcast/13-enver-pinarbasi-gr%C3%BCnder-von-therapium/id1677170075?i=1000635806856"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FBDB12] text-[#27557C] w-20 h-20 flex items-center justify-center font-medium text-base hover:bg-opacity-90 transition-all"
            >
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-1"
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
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="overflow-hidden  md:translate-y-[-5rem]">
              <Image 
                src="/enver-group.webp" 
                alt="Enver Pinarbasi" 
                width={558} 
                height={670} 
                className="w-full  max-w-[350px] md:max-w-[400px] h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
