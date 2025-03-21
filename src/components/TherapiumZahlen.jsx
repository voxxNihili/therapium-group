"use client";
import Container from "./Container";

export default function TherapiumZahlen() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row gap-8 md:gap-20 mb-16">
          {/* Left section - Title */}
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-light text-[#A1A1A1]">THERAPIUM in Zahlen</h2>
          </div>
          
          {/* Right section - Description */}
          <div className="md:w-2/3">
            <p className="text-xl md:text-2xl text-[#191919] font-medium">
              Erfolg ist planbar – mit der richtigen Strategie und den richtigen
              Partnern. Heute bündeln wir unsere Expertise in der THERAPIUM
              Group, um talentierten Physiotherapeuten den Einstieg in die
              Selbstständigkeit zu erleichtern – mit einem bewährten System, das
              Zeit, Geld und Energie spart.
            </p>
          </div>
        </div>

        {/* Statistics section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 mt-16">
          {/* Statistic 1 */}
          <div className="flex flex-col p-6 md:p-8    aspect-square">
            <h3 className="text-5xl md:text-6xl font-semibold text-primary mb-4">4,1</h3>
            <p className="text-[#A1A1A1]">
              Millionen Jahresumsatz macht Therapium zu einer der erfolgreichsten Physios in Berlin.
            </p>
          </div>

          {/* Statistic 2 */}
          <div className="flex flex-col p-6 md:p-8    aspect-square">
            <h3 className="text-5xl md:text-6xl font-semibold text-primary mb-4">2,2</h3>
            <p className="text-[#A1A1A1]">
              Millionen2 Behandlungen sprechen für eine hohe Erfahrung & Mehrwert für unsere Patienten.
            </p>
          </div>

          {/* Statistic 3 */}
          <div className="flex flex-col p-6 md:p-8    aspect-square">
            <h3 className="text-5xl md:text-6xl font-semibold text-primary mb-4">52</h3>
            <p className="text-[#A1A1A1]">
              Mitarbeiter - meistern wir in unserem Backoffice mit professioneller HR.
            </p>
          </div>

          {/* Statistic 4 */}
          <div className="flex flex-col p-6 md:p-8    aspect-square">
            <h3 className="text-5xl md:text-6xl font-semibold text-primary mb-4">13</h3>
            <p className="text-[#A1A1A1]">
              Jahre von denen du direkt auf deinem Weg profitierst und zurückgreifen kannst!
            </p>
          </div>
        </div> 
      </Container>
    </section>
  );
}
