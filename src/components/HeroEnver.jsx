"use client";
import Image from "next/image";

export default function HeroEnver() {
  return (
    <section className="w-full bg-[#27557C] py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Left: Testimonial Quote Box */}
          <div className="w-full md:w-1/2 bg-[#3473A0] p-8 rounded-lg z-10 relative">
            <p className="text-white text-base sm:text-lg mb-6 leading-relaxed">
              „Unsere größte Stärke bei THERAPIUM sind die Menschen, die mit uns wachsen. Ich habe so viele
              talentierte Physiotherapeuten auf ihrem Weg in die
              Selbstständigkeit begleitet – und jeder Einzelne ist ein
              Beweis dafür, dass Erfolg mit der richtigen
              Unterstützung planbar ist. Das Leadership-Programm
              gibt unseren zukünftigen Geschäftsführern nicht nur
              das nötige Fachwissen, sondern auch die Sicherheit,
              ihr eigenes Unternehmen aufzubauen. Der Mehrwert?
              Ein bewährtes System, ein starkes Netzwerk und eine
              Partnerschaft, die echte Erfolge schafft."
            </p>
            
            <div className="mt-6">
              <h3 className="text-white text-xl font-bold">Enver Pinarbasi</h3>
              <p className="text-[#FBDB12]">Gründer von THERAPIUM</p>
            </div>
          </div>

          {/* Right: Image and Badge */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative">
              <Image 
                src="/enver-group.webp" 
                alt="Enver Pinarbasi" 
                width={600} 
                height={700} 
                className="w-full h-auto object-cover rounded-lg" 
              />
            </div>
            
            {/* Yellow "WERDE LEADER!" Badge */}
            <div className="absolute bottom-4 left-1/2 md:left-0 md:-translate-x-1/4 transform -translate-x-1/2 z-20">
              <div className="bg-[#FBDB12] rounded-full w-32 h-32 flex flex-col items-center justify-center text-center p-2 shadow-lg">
                <span className="text-[#27557C] font-bold text-xl leading-tight">
                  WERDE<br/>LEADER!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
