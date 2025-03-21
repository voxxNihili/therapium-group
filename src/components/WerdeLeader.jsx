"use client";
import Image from "next/image";

export default function HeroEnver() {
  return (
    <section className="w-full bg-[#27557C] py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center md:items-center ">
          {/* Left: Testimonial Quote Box */}
          <div className="w-full md:w-1/2 bg-[#3473A0] p-15  z-10 relative z-2">
            <p className="text-white text-base sm:text-lg mb-6 leading-relaxed">
            „Unsere größte Stärke bei THERAPIUM sind die Menschen, die mit uns wachsen. Ich habe so viele talentierte Physiotherapeuten auf ihrem Weg in die Selbstständigkeit begleitet – und jeder Einzelne ist ein Beweis dafür, dass Erfolg mit der richtigen Unterstützung planbar ist. Das Leadership-Programm gibt unseren zukünftigen Geschäftsführern nicht nur das nötige Fachwissen, sondern auch die Sicherheit, ihr eigenes Unternehmen aufzubauen. Der Mehrwert? Ein bewährtes System, ein starkes Netzwerk und eine Partnerschaft, die echte Erfolge schafft.“ 
            </p>

            <div className="mt-6">
              <h3 className="text-white text-xl font-bold">Enver Pinarbasi</h3>
              <p className="text-[#FBDB12]">Gründer von THERAPIUM</p>
            </div>
          </div>

          {/* Right: Image and Badge */}
          <div className="w-full md:w-1/2 relative transform -translate-x-1/7">
            <div className="relative">
              <Image src="/enver-forest.webp" alt="Enver Pinarbasi" width={600} height={700} className="w-full h-auto object-cover " />
            </div>

            {/* Yellow "WERDE LEADER!" Badge */}
            <div className=" font-crackers absolute rotate-[-8.15deg] bottom-4 left-1/2 md:left-0 md:-translate-x-1/4 transform -translate-x-1/2 z-20">
              <div className=" bg-[#FBDB12] rounded-full  w-34 h-34 flex flex-col items-center justify-center text-center p-2 shadow-lg">
                <span className="text-[40px] leading-[33px] text-[#27557C] font-medium text-xl leading-tight">
                  WERDE
                  <br />
                  LEADER!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
